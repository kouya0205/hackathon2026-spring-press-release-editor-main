<?php

namespace App;

/**
 * TipTap コンテンツ内の base64 埋め込み画像をリサイズするユーティリティ
 *
 * パフォーマンス最適化のため、長辺が指定ピクセルを超える画像をサーバー側でリサイズする。
 */
class ImageResizer
{
    private const MAX_LONG_SIDE = 600;

    /**
     * TipTap コンテンツ JSON 文字列内の base64 画像をリサイズする
     *
     * 長辺が MAX_LONG_SIDE を超える画像は、長辺が MAX_LONG_SIDE になるようアスペクト比を維持してリサイズする。
     *
     * @param string $content TipTap 形式の JSON 文字列
     * @return string 画像がリサイズされた TipTap JSON 文字列
     */
    public static function processContent(string $content): string
    {
        $data = json_decode($content, true);
        if (!is_array($data)) {
            return $content;
        }

        $processed = self::processNode($data);
        $result = json_encode($processed);

        return $result !== false ? $result : $content;
    }

    /**
     * ノードを再帰的に処理し、image ノードの base64 画像をリサイズする
     *
     * @param array<string, mixed> $node TipTap ノード
     * @return array<string, mixed> 処理後のノード
     */
    private static function processNode(array $node): array
    {
        if (isset($node['type']) && $node['type'] === 'image' && isset($node['attrs']['src'])) {
            $src = $node['attrs']['src'];
            if (is_string($src) && str_starts_with($src, 'data:')) {
                $resized = self::resizeBase64Image($src);
                if ($resized !== null) {
                    $node['attrs']['src'] = $resized;
                }
            }
        }

        if (isset($node['content']) && is_array($node['content'])) {
            $node['content'] = array_map(
                function (mixed $child): mixed {
                    return is_array($child) ? self::processNode($child) : $child;
                },
                $node['content']
            );
        }

        return $node;
    }

    /**
     * 単一の data URL 画像をリサイズする（アップロード用）
     *
     * 長辺が MAX_LONG_SIDE を超える場合にリサイズする。
     *
     * @param string $dataUrl data:image/png;base64,... 形式の文字列
     * @return string|null リサイズ後の data URL。失敗時は null
     */
    public static function processImageDataUrl(string $dataUrl): ?string
    {
        return self::resizeBase64Image($dataUrl);
    }

    /**
     * base64  data URL 形式の画像をリサイズする
     *
     * 長辺が MAX_LONG_SIDE 以下の場合はそのまま返す。
     *
     * @param string $dataUrl data:image/png;base64,... 形式の文字列
     * @return string|null リサイズ後の data URL。失敗時は null
     */
    private static function resizeBase64Image(string $dataUrl): ?string
    {
        if (!preg_match('/^data:image\/(\w+);base64,(.+)$/s', $dataUrl, $matches)) {
            return null;
        }

        $format = strtolower($matches[1]);
        $base64Data = $matches[2];
        $binary = base64_decode($base64Data, true);

        if ($binary === false) {
            return null;
        }

        $image = @imagecreatefromstring($binary);
        if ($image === false) {
            return null;
        }

        $width = imagesx($image);
        $height = imagesy($image);

        if ($width <= 0 || $height <= 0) {
            imagedestroy($image);
            return null;
        }

        $longSide = max($width, $height);
        if ($longSide <= self::MAX_LONG_SIDE) {
            imagedestroy($image);
            return $dataUrl;
        }

        $scale = self::MAX_LONG_SIDE / $longSide;
        $newWidth = (int) round($width * $scale);
        $newHeight = (int) round($height * $scale);

        $resized = imagecreatetruecolor($newWidth, $newHeight);
        if ($resized === false) {
            imagedestroy($image);
            return null;
        }

        if (!imagecopyresampled($resized, $image, 0, 0, 0, 0, $newWidth, $newHeight, $width, $height)) {
            imagedestroy($image);
            imagedestroy($resized);
            return null;
        }

        imagedestroy($image);

        ob_start();
        $success = match ($format) {
            'jpeg', 'jpg' => imagejpeg($resized, null, 85),
            'png' => imagepng($resized, null, 8),
            'gif' => imagegif($resized),
            'webp' => function_exists('imagewebp') ? imagewebp($resized, null, 85) : false,
            default => false,
        };
        $output = ob_get_clean();
        imagedestroy($resized);

        if (!$success || $output === false) {
            return null;
        }

        $mime = match ($format) {
            'jpeg', 'jpg' => 'image/jpeg',
            'png' => 'image/png',
            'gif' => 'image/gif',
            'webp' => 'image/webp',
            default => 'image/png',
        };

        return 'data:' . $mime . ';base64,' . base64_encode($output);
    }
}
