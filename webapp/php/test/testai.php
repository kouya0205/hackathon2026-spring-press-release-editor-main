<?php

require __DIR__ . '/../vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '/..');
$dotenv->load();

$apiKey = $_ENV['OPENAI_API_KEY'];

// OpenAI API endpoint
$url = "https://api.openai.com/v1/chat/completions";

// 送信するデータ
$data = [
    "model" => "gpt-4.1-mini",
    "messages" => [
        [
            "role" => "user",
            "content" => "こんにちは。自己紹介してください。"
        ]
    ]
];

// cURL初期化
$ch = curl_init($url);

curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);

curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "Content-Type: application/json",
    "Authorization: Bearer " . $apiKey
]);

curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));

// API実行
$response = curl_exec($ch);

// エラーチェック
if (curl_errno($ch)) {
    echo "Curl error: " . curl_error($ch);
    exit;
}

curl_close($ch);

// JSONを配列に変換
$result = json_decode($response, true);

// AIの返答を表示
echo $result["choices"][0]["message"]["content"];
?>