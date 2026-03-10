<?php

namespace App;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;

class GetEpisodeFormController
{
    /** announcement_type ごとのプロンプト・コンテキスト（設問の意味を AI に伝える） */
    private static array $CATEGORY_CONTEXTS = [
        'product' => [
            'label' => '新商品・新サービス',
            'guide' => '入力内容は「この商品・サービスが生まれたきっかけ」「解決する課題」「伝えたい価値」「差別化ポイント」「利用開始情報」に関する回答です。価値と利用シーンが伝わる構成にしてください。',
        ],
        'feature_update' => [
            'label' => '機能追加・改善',
            'guide' => '入力内容は「改善のきっかけ」「変更前の課題」「何をどう改善したか」「ユーザー体験の変化」「今後の改善予定」に関する回答です。変更前後の違いが具体的に伝わる構成にしてください。',
        ],
        'workstyle' => [
            'label' => '新制度・福利厚生・働き方改革',
            'guide' => '入力内容は「新制度導入の契機」「以前の働き方の課題」「制度の要点と狙い」「社員・応募者のメリット」に関する回答です。導入理由と社内外への意味が伝わる構成にしてください。',
        ],
        'recruiting' => [
            'label' => '採用・組織づくり',
            'guide' => '入力内容は「採用強化の背景」「組織課題」「求める人物像」「入社後の魅力」「応募導線」に関する回答です。募集背景と仲間に伝えたい価値観が明確になる構成にしてください。',
        ],
        'event' => [
            'label' => 'イベント・キャンペーン',
            'guide' => '入力内容は「実施のきっかけ」「開催背景・狙い」「見どころ・参加メリット」「ターゲット」「参加方法」に関する回答です。参加価値と実施情報が明確になる構成にしてください。',
        ],
        'regional' => [
            'label' => '地域活動・社会貢献',
            'guide' => '入力内容は「地域・社会課題への着目」「取り組み前の課題」「実施内容」「地域・社会への意義」「継続・拡張計画」に関する回答です。社会課題との接続と意義が伝わる構成にしてください。',
        ],
        'branding' => [
            'label' => '企業文化・ブランド刷新',
            'guide' => '入力内容は「見直しのきっかけ」「変更前の課題」「刷新ポイント」「伝えたい価値観」に関する回答です。刷新背景と目指す姿が伝わる構成にしてください。',
        ],
        'management' => [
            'label' => '経営方針・新たな挑戦',
            'guide' => '入力内容は「経営判断の背景」「経営視点の課題」「方針・挑戦の要点」「ステークホルダーへのメッセージ」に関する回答です。意思決定背景と今後の方向性が明確になる構成にしてください。',
        ],
        'other' => [
            'label' => 'その他',
            'guide' => '入力内容は発表の背景、経緯、伝えたいポイントに関する一般的な回答です。背景、意図、価値が伝わる構成にしてください。',
        ],
    ];

    /**
     * フォーム回答から AI に渡すプロンプトを構築する
     */
    private static function buildPrompt(array $result): string
    {
        $type = $result['announcement_type'] ?? '';
        $context = self::$CATEGORY_CONTEXTS[$type] ?? self::$CATEGORY_CONTEXTS['other'];

        $formData = self::formatFormDataForPrompt($result);

        return <<<PROMPT
あなたはプレスリリースの構成を考える編集アシスタントです。

【カテゴリ】{$context['label']}
{$context['guide']}

【企業からの回答】
{$formData}

【出力形式】
以下の JSON 形式のみを出力してください。それ以外の文章は一切含めないでください。

```json
{
  "title": "プレスリリースのタイトル案（30〜50文字程度）",
  "content": "TipTap形式のJSON文字列"
}
```

content は TipTap エディタ用の JSON です。必ず以下の構造に従ってください。

【基本構造】
- type: "doc"
- content: 配列（paragraph / heading / bulletList / orderedList などを組み合わせる）

【ノード形式】
- paragraph: { "type": "paragraph", "content": [ テキストノードの配列 ] }
- heading: { "type": "heading", "attrs": { "level": 1|2|3 }, "content": [{ "type": "text", "text": "見出し" }] }
- bulletList: { "type": "bulletList", "content": [{ "type": "listItem", "content": [{ "type": "paragraph", "content": [...] }] }] }
- orderedList: { "type": "orderedList", "content": 同様 }

【テキストの装飾（marks）】リッチな見せ方のために積極的に使ってください。
- 太字: { "type": "text", "text": "強調したい語", "marks": [{ "type": "bold" }] }
- 斜体: { "type": "text", "text": "表現したい語", "marks": [{ "type": "italic" }] }
- 下線: { "type": "text", "text": "注目させたい語", "marks": [{ "type": "underline" }] }
- リンク: { "type": "text", "text": "表示テキスト", "marks": [{ "type": "link", "attrs": { "href": "https://example.com" } }] }
- 組み合わせ可: marks に複数指定。例: { "type": "text", "text": "重要", "marks": [{ "type": "bold" }, { "type": "underline" }] }
- 装飾なし: { "type": "text", "text": "通常文" }（marks は省略可）

【パラグラフ内で装飾を混在させる例】
1文の中で「キーワード」だけ太字にしたい場合、テキストを分割する:
{ "type": "paragraph", "content": [
  { "type": "text", "text": "当社は" },
  { "type": "text", "text": "生産性向上", "marks": [{ "type": "bold" }] },
  { "type": "text", "text": "を実現する新サービスを提供します。詳細は" },
  { "type": "text", "text": "こちら", "marks": [{ "type": "link", "attrs": { "href": "https://example.com/lp" } }] },
  { "type": "text", "text": "をご覧ください。" }
]}

【運用】
- 重要キーワードや固有名詞には太字を、キャッチーな表現には斜体を、強調したい箇所には下線を適宜使用
- リンク: 企業からの回答（補足・参考情報など）に URL が含まれている場合のみ挿入。ない場合はリンクは付けない。href は https:// で始める有効なURLのみ
- 構成は 3〜6 段落程度、見出し・箇条書き・装飾を組み合わせて読みやすくリッチに仕上げる
PROMPT;
    }

    private static function formatFormDataForPrompt(array $result): string
    {
        $lines = [];
        $labels = [
            'company_name' => '企業名',
            'episode' => 'エピソード・きっかけ',
            'background' => '背景・経緯',
            'message_1' => '最も伝えたいこと',
            'message_2' => '伝えたいこと（2）',
            'message_3' => '伝えたいこと（3）',
            'notes' => '補足・参考情報',
        ];

        foreach ($labels as $key => $label) {
            $val = trim((string)($result[$key] ?? ''));
            if ($val === '') {
                $lines[] = "{$label}: （未回答）";
            } else {
                $lines[] = "{$label}:\n{$val}";
            }
        }

        return implode("\n\n", $lines);
    }

    public static function handle(
        ServerRequestInterface $request,
        ResponseInterface $response,
        array $args
    ): ResponseInterface
    {
        $data = $request->getParsedBody();

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

        $prompt = self::buildPrompt($result);
        $aiConnection = new AIConnection();
        $rawResponse = $aiConnection->sendMessage($prompt);

        $output = self::parseAiResponse($rawResponse);
        $response->getBody()->write(json_encode($output));

        return $response->withHeader('Content-Type', 'application/json');
    }

    /**
     * OpenAI API レスポンスから title / content を抽出して FE 用形式で返す
     */
    private static function parseAiResponse(string $rawResponse): array
    {
        $decoded = json_decode($rawResponse, true);
        if (!is_array($decoded)) {
            return ['title' => '', 'content' => '', 'message' => 'AIレスポンスの解析に失敗しました'];
        }

        $content = $decoded['choices'][0]['message']['content'] ?? '';
        if ($content === '') {
            return ['title' => '', 'content' => '', 'message' => 'AIからコンテンツが返されませんでした'];
        }

        $json = self::extractJsonFromContent($content);
        if ($json === null) {
            return ['title' => '', 'content' => '', 'message' => 'AIの出力からJSONを抽出できませんでした'];
        }

        $title = $json['title'] ?? '';
        $rawContent = $json['content'] ?? '';

        return [
            'title' => is_string($title) ? $title : '',
            'content' => is_string($rawContent) ? $rawContent : json_encode($rawContent),
        ];
    }

    private static function extractJsonFromContent(string $content): ?array
    {
        $content = trim($content);
        if (preg_match('/```(?:json)?\s*([\s\S]+?)\s*```/', $content, $m)) {
            $content = trim($m[1]);
        }
        $json = json_decode($content, true);
        return is_array($json) ? $json : null;
    }
}