<?php

// CORS（クロスオリジン）対応 - OPTIONS preflight を先に処理
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Max-Age: 86400');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

require_once __DIR__ . '/../vendor/autoload.php';

use App\GetEpisodeFormController;
use App\GetPressReleaseController;
use App\SavePressReleaseController;
use App\UploadImageController;
use Slim\Factory\AppFactory;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;

$app = AppFactory::create();

// Slim 経由のレスポンスにも CORS ヘッダーを付与（header() が Slim レスポンスに反映されないケース対策）
$app->add(function (ServerRequestInterface $request, $handler): ResponseInterface {
    $response = $handler->handle($request);
    return $response
        ->withHeader('Access-Control-Allow-Origin', '*')
        ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
        ->withHeader('Access-Control-Allow-Headers', 'Content-Type');
});

// Define routes
$app->get('/press-releases/{id}', GetPressReleaseController::class . '::handle');
$app->post('/press-releases/{id}', SavePressReleaseController::class . '::handle');
$app->post('/images/upload', UploadImageController::class . '::handle');

$app->post('/episode/form', GetEpisodeFormController::class . '::handle');

$app->run();
