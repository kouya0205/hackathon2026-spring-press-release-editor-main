<?php

namespace App;

use DateMalformedStringException;
use DateTimeImmutable;
use PDO;
use PDOException;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;

/**
 * プレスリリース保存コントローラー
 *
 * POST /press-releases/:id エンドポイントの処理を担当
 */
class SavePressReleaseController
{
    /**
     * プレスリリースを保存（更新）する
     *
     * @param ServerRequestInterface $request HTTPリクエスト
     * @param ResponseInterface $response HTTPレスポンス
     * @param array $args URLパラメータ（idを含む）
     * @return ResponseInterface JSONレスポンスを返す
     */
    public static function handle(
        ServerRequestInterface $request,
        ResponseInterface $response,
        array $args
    ): ResponseInterface
    {
        $validated = self::validateRequest($request, $response, $args);
        if ($validated instanceof ResponseInterface) {
            return $validated;
        }

        $id = $validated['id'];
        $title = $validated['title'];
        try {
            $content = ImageResizer::processContent($validated['content']);
        } catch (\Throwable $e) {
            $content = $validated['content'];
        }

        try {
            // データベース接続を取得（必要なタイミングで実行）
            $db = Database::getConnection();

            // 対象のプレスリリースが存在するか確認
            $stmt = $db->prepare('SELECT id FROM press_releases WHERE id = :id');
            $stmt->execute(['id' => $id]);
            $exists = $stmt->fetch();

            // レコードが存在しない場合は404エラーを返す
            if (!$exists) {
                $payload = json_encode(['code' => 'NOT_FOUND', 'message' => 'Press release not found']);
                $response->getBody()->write($payload);
                return $response
                    ->withHeader('Content-Type', 'application/json')
                    ->withStatus(404);
            }

            // プレスリリースを更新
            // updated_atは自動的に現在時刻に更新される
            $stmt = $db->prepare('
                UPDATE press_releases
                SET title = :title, content = :content, updated_at = CURRENT_TIMESTAMP
                WHERE id = :id
            ');
            $stmt->execute([
                'id' => $id,
                'title' => $title,
                'content' => $content,
            ]);

            // 更新後のデータを取得
            $stmt = $db->prepare('SELECT id, title, content, created_at, updated_at FROM press_releases WHERE id = :id');
            $stmt->execute(['id' => $id]);
            $row = $stmt->fetch(PDO::FETCH_ASSOC);

            // contentは文字列のまま返す
            $data = [
                'id' => (int)$row['id'],
                'title' => $row['title'],
                'content' => $row['content'],
                'created_at' => self::formatTimestamp((string)$row['created_at']),
                'updated_at' => self::formatTimestamp((string)$row['updated_at']),
            ];

            // 更新されたPressReleaseオブジェクトを返す
            $payload = json_encode($data);
            $response->getBody()->write($payload);
            return $response->withHeader('Content-Type', 'application/json');

        } catch (PDOException $e) {
            // データベースエラーが発生した場合は500エラーを返す
            $payload = json_encode(['code' => 'INTERNAL_ERROR', 'message' => 'Internal server error']);
            $response->getBody()->write($payload);
            return $response
                ->withHeader('Content-Type', 'application/json')
                ->withStatus(500);
        } catch (DateMalformedStringException) {
            $payload = json_encode(['code' => 'INTERNAL_ERROR', 'message' => 'Internal server error']);
            $response->getBody()->write($payload);
            return $response
                ->withHeader('Content-Type', 'application/json')
                ->withStatus(500);
        }
    }

    private static function validateRequest(
        ServerRequestInterface $request,
        ResponseInterface $response,
        array $args
    ): ResponseInterface|array
    {
        //定数
        $MAX_TITLE_LENGTH = 100;    
        $MAX_CONTENT_LENGTH = 500;

        // URLパラメータからIDを取得して検証
        $idParam = (string)$args['id'];
        if (!ctype_digit($idParam) || (int)$idParam <= 0) {
            $payload = json_encode(['code' => 'INVALID_ID', 'message' => 'Invalid ID']);
            $response->getBody()->write($payload);
            return $response
                ->withHeader('Content-Type', 'application/json')
                ->withStatus(400);
        }
        $id = (int)$idParam;

        // リクエストボディからJSONデータを取得
        $body = (string)$request->getBody();
        $data = json_decode($body, true);

        // JSONのパースに失敗した場合は400エラーを返す
        if (json_last_error() !== JSON_ERROR_NONE) {
            $payload = json_encode(['code' => 'INVALID_JSON', 'message' => 'Invalid JSON']);
            $response->getBody()->write($payload);
            return $response
                ->withHeader('Content-Type', 'application/json')
                ->withStatus(400);
        }

        // JSONが配列以外でも、必須フィールド判定で扱えるようにする
        $data = is_array($data) ? $data : [];

        // 必須フィールド（title, content）の存在と型を確認
        if (
            !array_key_exists('title', $data) ||
            !array_key_exists('content', $data) ||
            !is_string($data['title']) ||
            !is_string($data['content'])
        ) {
            $payload = json_encode(['code' => 'MISSING_REQUIRED_FIELDS', 'message' => 'Title and content are required']);
            $response->getBody()->write($payload);
            return $response
                ->withHeader('Content-Type', 'application/json')
                ->withStatus(400);
        }

        $title = $data['title'];
        $content = $data['content'];

        // title の長さを検証
        if (mb_strlen($title) > $MAX_TITLE_LENGTH) {
            $payload = json_encode([
                'code' => 'TITLE_TOO_LONG',
                'message' => "Title must be at most {$MAX_TITLE_LENGTH} characters"
            ]);
            $response->getBody()->write($payload);
            return $response
                ->withHeader('Content-Type', 'application/json')
                ->withStatus(400);
        }

        // content は TipTap JSON 文字列として受け取り、実際の本文文字数を検証
        $decodedContent = json_decode($content, true);

        if (json_last_error() !== JSON_ERROR_NONE || !is_array($decodedContent)) {
            $payload = json_encode([
                'code' => 'INVALID_CONTENT',
                'message' => 'Content must be valid TipTap JSON'
            ]);
            $response->getBody()->write($payload);
            return $response
                ->withHeader('Content-Type', 'application/json')
                ->withStatus(400);
        }

        $plainTextLength = self::countTextLength($decodedContent);

        if ($plainTextLength > $MAX_CONTENT_LENGTH) {
            $payload = json_encode([
                'code' => 'CONTENT_TOO_LONG',
                'message' => "Content must be at most {$MAX_CONTENT_LENGTH} characters"
            ]);
            $response->getBody()->write($payload);
            return $response
                ->withHeader('Content-Type', 'application/json')
                ->withStatus(400);
        }
        return [
            'id' => $id,
            'title' => $title,
            'content' => $content,
        ];
    }
    /**
     * TipTap JSON ノードから text ノードの文字数を再帰的に合計する
     *
     * @param mixed $node
     * @return int
     */
    private static function countTextLength(mixed $node): int
    {
        if (!is_array($node)) {
            return 0;
        }

        $length = 0;

        if (($node['type'] ?? null) === 'text' && isset($node['text']) && is_string($node['text'])) {
            $length += mb_strlen($node['text']);
        }

        if (isset($node['content']) && is_array($node['content'])) {
            foreach ($node['content'] as $child) {
                $length += self::countTextLength($child);
            }
        }

        return $length;
    }
    /**
     * @throws DateMalformedStringException
     */
    private static function formatTimestamp(string $timestamp): string
    {
        $dt = new DateTimeImmutable($timestamp);
        return $dt->format('Y-m-d\TH:i:s.u');
    }
}
