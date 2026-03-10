<?php

namespace App;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Message\UploadedFileInterface;

/**
 * 画像アップロードコントローラー
 *
 * POST /images/upload エンドポイントの処理を担当。
 * ローカルからアップロードされた画像を受け取り、長辺が600pxを超える場合はリサイズして返す。
 *
 * 制限事項:
 * - サイズ: 5MB以下
 * - 対応形式: .jpg, .png, .gif, .webp（MIME: image/jpeg, image/png, image/gif, image/webp）
 */
class UploadImageController
{
    private const ALLOWED_MIME_TYPES = [
        'image/png',
        'image/jpeg',
        'image/gif',
        'image/webp',
    ];

    private const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

    /**
     * 画像をアップロードし、必要に応じてリサイズした data URL を返す
     *
     * @param ServerRequestInterface $request HTTPリクエスト
     * @param ResponseInterface $response HTTPレスポンス
     * @param array $args ルートパラメータ（未使用）
     * @return ResponseInterface JSONレスポンス
     */
    public static function handle(
        ServerRequestInterface $request,
        ResponseInterface $response,
        array $args = []
    ): ResponseInterface {
        try {
            $uploadedFiles = $request->getUploadedFiles();

            if (!isset($uploadedFiles['image']) || !($uploadedFiles['image'] instanceof UploadedFileInterface)) {
                // POST で Content-Length が 0 より大きいのにファイルが空 = PHP の post_max_size 超過の可能性
                $contentLength = (int) ($request->getServerParams()['CONTENT_LENGTH'] ?? 0);
                if ($contentLength > 0) {
                    return self::jsonError($response, 'REQUEST_TOO_LARGE', 'リクエストが大きすぎます。5MB以下の画像をアップロードしてください。', 400);
                }
                return self::jsonError($response, 'INVALID_REQUEST', '画像ファイルが必要です', 400);
            }

            $file = $uploadedFiles['image'];

            if ($file->getError() !== UPLOAD_ERR_OK) {
                return self::jsonError($response, 'UPLOAD_ERROR', self::getUploadErrorMessage($file->getError()), 400);
            }

            $stream = $file->getStream();
            $contents = $stream->getContents();
            $stream->close();

            if (strlen($contents) > self::MAX_FILE_SIZE) {
                return self::jsonError($response, 'FILE_TOO_LARGE', 'ファイルサイズが5MBを超えています', 400);
            }

            $clientMediaType = $file->getClientMediaType();
            if ($clientMediaType === null || !in_array(strtolower($clientMediaType), self::ALLOWED_MIME_TYPES, true)) {
                return self::jsonError($response, 'INVALID_TYPE', '対応形式: .jpg, .png, .gif, .webp（5MB以下）', 400);
            }

            $dataUrl = 'data:' . $clientMediaType . ';base64,' . base64_encode($contents);

            $processed = ImageResizer::processImageDataUrl($dataUrl);
            if ($processed === null) {
                return self::jsonError($response, 'PROCESSING_ERROR', '画像の処理に失敗しました', 500);
            }

            $payload = json_encode(['src' => $processed]);
            $response->getBody()->write($payload);
            return $response->withHeader('Content-Type', 'application/json');
        } catch (\Throwable $e) {
            return self::jsonError(
                $response,
                'INTERNAL_ERROR',
                '画像のアップロード中にエラーが発生しました: ' . $e->getMessage(),
                500
            );
        }
    }

    private static function jsonError(ResponseInterface $response, string $code, string $message, int $status): ResponseInterface
    {
        $payload = json_encode(['code' => $code, 'message' => $message]);
        $response->getBody()->write($payload);
        return $response
            ->withHeader('Content-Type', 'application/json')
            ->withStatus($status);
    }

    private static function getUploadErrorMessage(int $error): string
    {
        return match ($error) {
            UPLOAD_ERR_INI_SIZE, UPLOAD_ERR_FORM_SIZE => 'ファイルが大きすぎます',
            UPLOAD_ERR_PARTIAL => 'ファイルのアップロードが完了していません',
            UPLOAD_ERR_NO_FILE => 'ファイルが選択されていません',
            UPLOAD_ERR_NO_TMP_DIR => '一時保存ディレクトリがありません',
            UPLOAD_ERR_CANT_WRITE => 'ファイルの書き込みに失敗しました',
            UPLOAD_ERR_EXTENSION => 'アップロードが拡張モジュールにより停止されました',
            default => 'アップロードエラーが発生しました',
        };
    }
}
