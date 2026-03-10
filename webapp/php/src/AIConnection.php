<?php

namespace App;

class AIConnection
{
    private string $apiKey;
    private string $URL = "https://api.openai.com/v1/chat/completions";
    private string $MODEL = "gpt-4.1-mini";

    public function __construct()
    {
        $this->apiKey = $_ENV['OPENAI_API_KEY'] ?? '';

        if (empty($this->apiKey)) {
            throw new \Exception("OPENAI_API_KEY is not set.");
        }
    }

    public function sendMessage(string $message): string
    {
        $data = [
            "model" => $this->MODEL,
            "messages" => [
                [
                    "role" => "user",
                    "content" => $message
                ]
            ]
        ];

        $ch = curl_init($this->URL);

        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POST, true);

        curl_setopt($ch, CURLOPT_HTTPHEADER, [
            "Content-Type: application/json",
            "Authorization: Bearer " . $this->apiKey
        ]);

        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));

        $response = curl_exec($ch);

        if (curl_errno($ch)) {
            throw new \Exception("Curl error: " . curl_error($ch));
        }

        curl_close($ch);

        return $response;   //jsonのまま返却
    }
}