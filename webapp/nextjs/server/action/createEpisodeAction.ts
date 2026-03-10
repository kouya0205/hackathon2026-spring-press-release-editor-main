'use server';

/**
 * プレスリリース構成用のエピソード（企業回答）フォームデータをPHPバックエンドに送信するサーバーアクション
 * FormData をそのまま PHP の POST /episodes エンドポイントに転送する
 */
export type EpisodeFormState = {
  success: boolean;
  message: string;
  errors?: Record<string, string>;
};

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL ?? 'http://localhost:8080';

export async function createEpisodeAction(
  _prevState: EpisodeFormState,
  formData: FormData
): Promise<EpisodeFormState> {
  try {
    const params = new URLSearchParams();
    formData.forEach((value, key) => {
      params.append(key, value instanceof File ? value.name : String(value));
    });

    const response = await fetch(`${BASE_URL}/episode/form`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: params,
    });

    if (!response.ok) {
      const data = (await response.json().catch(() => ({}))) as {
        code?: string;
        message?: string;
        errors?: Record<string, string>;
      };
      return {
        success: false,
        message: data.message ?? `送信に失敗しました (HTTP ${response.status})`,
        errors: data.errors,
      };
    }

    return {
      success: true,
      message: '送信が完了しました。ありがとうございます。',
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : '予期せぬエラーが発生しました';
    return {
      success: false,
      message: `送信エラー: ${message}`,
    };
  }
}
