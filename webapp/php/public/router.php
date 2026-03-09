<?php

/**
 * PHP 組み込みサーバー用ルーター
 * すべてのリクエストを index.php に転送する
 */
$uri = urldecode(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH));
if ($uri !== '/' && file_exists(__DIR__ . $uri)) {
    return false;
}
require __DIR__ . '/index.php';
