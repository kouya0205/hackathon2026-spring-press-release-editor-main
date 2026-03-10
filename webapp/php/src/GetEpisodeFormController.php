<?php

namespace App;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;

class GetEpisodeFormController
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
        // FormData取得
        $data = $request->getParsedBody();

        $episodeId = $data['episode_id'] ?? null;
        $title = $data['title'] ?? null;

        $result = [
            'announcement_type' => $data['announcement_type'] ?? null,
            'company_name' => $data['company_name'] ?? null,
            'contact_name' => $data['contact_name'] ?? null,
            'email' => $data['email'] ?? null,
            'episode' => $data['episode'] ?? null,
            'background' => $data['background'] ?? null,
            'message_1' => $data['message_1'] ?? null,
            'message_2' => $data['message_2'] ?? null,
            'message_3' => $data['message_3'] ?? null,
            'notes' => $data['notes'] ?? null,
        ];

        //OpenAI APIを呼び出して、エピソードフォームの内容を生成する処理をここに追加


        $response->getBody()->write(json_encode($result));

        return $response->withHeader('Content-Type', 'application/json');
    }
}


?>