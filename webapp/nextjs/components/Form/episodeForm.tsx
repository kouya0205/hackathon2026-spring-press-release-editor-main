'use client';

import { useActionState } from 'react';
import {
  createEpisodeAction,
  type EpisodeFormState,
} from '@/server/action/createEpisodeAction';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const initialState: EpisodeFormState = {
  success: false,
  message: '',
};

export default function EpisodeForm() {
  const [state, formAction, isPending] = useActionState(
    createEpisodeAction,
    initialState
  );

  return (
    <Card className="w-full max-w-md shrink-0">
      <form action={formAction}>
        <CardHeader>
          <CardTitle>プレスリリース構成フォーム</CardTitle>
          <CardDescription>
            以下の設問にお答えください。ご回答いただいた内容を基に、Editor でプレスリリースの構成を補助いたします。
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {state.message && (
            <div
              role="alert"
              className={`rounded-md border px-4 py-3 text-sm ${
                state.success
                  ? 'border-green-200 bg-green-50 text-green-800 dark:border-green-900 dark:bg-green-950/50 dark:text-green-200'
                  : 'border-destructive/50 bg-destructive/10 text-destructive'
              }`}
            >
              {state.message}
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="company_name">
              企業名 <span className="text-destructive">*</span>
            </Label>
            <Input
              id="company_name"
              name="company_name"
              placeholder="株式会社サンプル"
              required
              aria-describedby={state.errors?.company_name ? 'company_name_error' : undefined}
              aria-invalid={!!state.errors?.company_name}
            />
            {state.errors?.company_name && (
              <p id="company_name_error" className="text-sm text-destructive">
                {state.errors.company_name}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="contact_name">
              担当者名 <span className="text-destructive">*</span>
            </Label>
            <Input
              id="contact_name"
              name="contact_name"
              placeholder="山田 太郎"
              required
              aria-describedby={state.errors?.contact_name ? 'contact_name_error' : undefined}
              aria-invalid={!!state.errors?.contact_name}
            />
            {state.errors?.contact_name && (
              <p id="contact_name_error" className="text-sm text-destructive">
                {state.errors.contact_name}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">
              メールアドレス <span className="text-destructive">*</span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="example@company.co.jp"
              required
              aria-describedby={state.errors?.email ? 'email_error' : undefined}
              aria-invalid={!!state.errors?.email}
            />
            {state.errors?.email && (
              <p id="email_error" className="text-sm text-destructive">
                {state.errors.email}
              </p>
            )}
          </div>

          <div className="border-t pt-4 space-y-4">
            <p className="text-sm font-medium text-muted-foreground">
              以下、プレスリリース構成に役立つ設問です。お答えいただける範囲でご記入ください。
            </p>

            <div className="space-y-2">
              <Label htmlFor="episode">
                Q. 企業や製品にまつわる印象的なエピソードはありますか？
              </Label>
              <Textarea
                id="episode"
                name="episode"
                placeholder="例：開発のきっかけ、ユーザーからの声、チームの想いなど"
                rows={3}
                maxLength={1000}
                aria-describedby={state.errors?.episode ? 'episode_error' : undefined}
                aria-invalid={!!state.errors?.episode}
              />
              {state.errors?.episode && (
                <p id="episode_error" className="text-sm text-destructive">
                  {state.errors.episode}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="background">
                Q. このリリースを出すに至った背景・経緯を教えてください
              </Label>
              <Textarea
                id="background"
                name="background"
                placeholder="例：市場の変化、開発の経緯、タイミングの理由など"
                rows={3}
                maxLength={1000}
                aria-describedby={state.errors?.background ? 'background_error' : undefined}
                aria-invalid={!!state.errors?.background}
              />
              {state.errors?.background && (
                <p id="background_error" className="text-sm text-destructive">
                  {state.errors.background}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="message_1">
                Q. 最も伝えたいこと・核となるメッセージは何ですか？
              </Label>
              <Textarea
                id="message_1"
                name="message_1"
                placeholder="このリリースで最も強調したいポイント"
                rows={2}
                maxLength={500}
                aria-describedby={state.errors?.message_1 ? 'message_1_error' : undefined}
                aria-invalid={!!state.errors?.message_1}
              />
              {state.errors?.message_1 && (
                <p id="message_1_error" className="text-sm text-destructive">
                  {state.errors.message_1}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="message_2">
                Q. 他に伝えたいこと（2つ目）はありますか？
              </Label>
              <Textarea
                id="message_2"
                name="message_2"
                placeholder="あればご記入ください"
                rows={2}
                maxLength={500}
                aria-describedby={state.errors?.message_2 ? 'message_2_error' : undefined}
                aria-invalid={!!state.errors?.message_2}
              />
              {state.errors?.message_2 && (
                <p id="message_2_error" className="text-sm text-destructive">
                  {state.errors.message_2}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="message_3">
                Q. 他に伝えたいこと（3つ目）はありますか？
              </Label>
              <Textarea
                id="message_3"
                name="message_3"
                placeholder="あればご記入ください"
                rows={2}
                maxLength={500}
                aria-describedby={state.errors?.message_3 ? 'message_3_error' : undefined}
                aria-invalid={!!state.errors?.message_3}
              />
              {state.errors?.message_3 && (
                <p id="message_3_error" className="text-sm text-destructive">
                  {state.errors.message_3}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">
                Q. その他、編集時に参考にしたい情報があれば教えてください
              </Label>
              <Textarea
                id="notes"
                name="notes"
                placeholder="補足事項、掲載希望の言い回しなど"
                rows={2}
                maxLength={1000}
                aria-describedby={state.errors?.notes ? 'notes_error' : undefined}
                aria-invalid={!!state.errors?.notes}
              />
              {state.errors?.notes && (
                <p id="notes_error" className="text-sm text-destructive">
                  {state.errors.notes}
                </p>
              )}
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" disabled={isPending}>
            {isPending ? '送信中...' : '送信する'}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
