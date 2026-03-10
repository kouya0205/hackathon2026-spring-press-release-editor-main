'use server';

/**
 * プレスリリース構成用のエピソード（企業回答）フォームデータをPHPバックエンドに送信するサーバーアクション
 * FormData をそのまま PHP の POST /episode/form エンドポイントに転送する
 * 成功時、AI が返す title / content（TipTap JSON）を state に含めて FE へ返す
 */
export type EpisodeFormState = {
  success: boolean;
  message: string;
  errors?: Record<string, string>;
  /** AI が提案したタイトル（成功時のみ） */
  suggestedTitle?: string;
  /** AI が提案した本文（TipTap 形式 JSON 文字列、成功時のみ） */
  suggestedContent?: string;
};

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL ?? 'http://localhost:8080';

export async function createEpisodeAction(
  _prevState: EpisodeFormState,
  formData: FormData
): Promise<EpisodeFormState> {
  try {
    const response = await fetch(`${BASE_URL}/episode/form`, {
      method: 'POST',
      body: formData,
    });

    const data = (await response.json().catch(() => ({}))) as {
      code?: string;
      message?: string;
      errors?: Record<string, string>;
      [key: string]: unknown;
    };

    if (!response.ok) {
      return {
        success: false,
        message: data.message ?? `送信に失敗しました (HTTP ${response.status})`,
        errors: data.errors,
      };
    }

    // AI レスポンスから title / content を取り出す
    const suggestedTitle = data.title ?? undefined;
    const suggestedContent =
      typeof data.content === 'string'
        ? data.content
        : data.content != null
          ? JSON.stringify(data.content)
          : undefined;

    return {
      success: true,
      message: suggestedTitle ?? suggestedContent
        ? '構成案を生成しました。Editorに反映できます。'
        : '送信が完了しました。ありがとうございます。',
      suggestedTitle,
      suggestedContent,
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : '予期せぬエラーが発生しました';
    return {
      success: false,
      message: `送信エラー: ${message}`,
    };
  }
}
