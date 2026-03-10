<?php

namespace App\Controller;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

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
            'episode_id' => $episodeId,
            'title' => $title
        ];

        //OpenAI APIを呼び出して、エピソードフォームの内容を生成する処理をここに追加


        $response->getBody()->write(json_encode($result));

        return $response->withHeader('Content-Type', 'application/json');
    }
}


?>