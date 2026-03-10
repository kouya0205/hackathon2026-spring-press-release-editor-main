'use client';

import { useActionState, useState } from 'react';
import {
  createEpisodeAction,
  type EpisodeFormState,
} from '@/server/action/createEpisodeAction';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  ANNOUNCEMENT_TYPE_LABELS,
  type AnnouncementType,
} from '@/lib/templateLibrary';
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
  suggestedTitle: '',
  suggestedContent: '',
};

export type EpisodeFormProps = {
  /** AI 提案を Editor に反映するコールバック（title, TipTap content） */
  onApplySuggestion?: (title: string, content: string) => void;
};

type QuestionFieldConfig = {
  label: string;
  placeholder: string;
};

type CategoryQuestionSet = {
  guide: string;
  episode: QuestionFieldConfig;
  background: QuestionFieldConfig;
  message1: QuestionFieldConfig;
  message2: QuestionFieldConfig;
  message3: QuestionFieldConfig;
  notes: QuestionFieldConfig;
};

const DEFAULT_QUESTION_SET: CategoryQuestionSet = {
  guide: '以下、プレスリリース構成に役立つ設問です。お答えいただける範囲でご記入ください。',
  episode: {
    label: 'Q. 企業や製品にまつわる印象的なエピソードはありますか？',
    placeholder: '例: 開発のきっかけ、ユーザーからの声、チームの想いなど',
  },
  background: {
    label: 'Q. このリリースを出すに至った背景・経緯を教えてください',
    placeholder: '例: 市場の変化、開発の経緯、タイミングの理由など',
  },
  message1: {
    label: 'Q. 最も伝えたいこと・核となるメッセージは何ですか？',
    placeholder: 'このリリースで最も強調したいポイント',
  },
  message2: {
    label: 'Q. 他に伝えたいこと（2つ目）はありますか？',
    placeholder: 'あればご記入ください',
  },
  message3: {
    label: 'Q. 他に伝えたいこと（3つ目）はありますか？',
    placeholder: 'あればご記入ください',
  },
  notes: {
    label: 'Q. その他、編集時に参考にしたい情報があれば教えてください',
    placeholder: '補足事項、掲載希望の言い回しなど',
  },
};

const CATEGORY_QUESTION_SETS: Record<AnnouncementType, CategoryQuestionSet> = {
  product: {
    guide: '新商品・新サービス向けの設問です。価値と利用シーンが分かる情報を優先してください。',
    episode: { label: 'Q. この商品・サービスが生まれたきっかけは何ですか？', placeholder: '例: 顧客課題、着想の背景、開発の原点' },
    background: { label: 'Q. どの課題を解決するための提供ですか？', placeholder: '例: 既存手段の課題、対象ユーザーの困りごと' },
    message1: { label: 'Q. 最も伝えたい価値は何ですか？', placeholder: '例: 何がどう良くなるのかを一文で' },
    message2: { label: 'Q. 差別化ポイントは何ですか？', placeholder: '例: 機能、価格、体験、運用面' },
    message3: { label: 'Q. 利用開始情報で重要な点はありますか？', placeholder: '例: 提供開始時期、価格、導線' },
    notes: { label: 'Q. 根拠データや掲載素材の補足はありますか？', placeholder: '例: 検証結果、導入実績、関連URL' },
  },
  feature_update: {
    guide: '機能追加・改善向けの設問です。変更前後の違いを具体的に書いてください。',
    episode: { label: 'Q. 今回の改善のきっかけは何ですか？', placeholder: '例: ユーザー要望、運用課題、障害対応知見' },
    background: { label: 'Q. 変更前の課題は何でしたか？', placeholder: '例: 工数、ミス、使いづらさ、制約' },
    message1: { label: 'Q. 何をどう改善しましたか？', placeholder: '例: 追加機能、UI変更、処理速度改善' },
    message2: { label: 'Q. ユーザー体験はどう変わりますか？', placeholder: '例: 時短、精度向上、操作負荷軽減' },
    message3: { label: 'Q. 次の改善予定はありますか？', placeholder: '例: 今後のアップデート計画' },
    notes: { label: 'Q. 注意点や既知の制約はありますか？', placeholder: '例: 対象プラン、対応環境、段階公開' },
  },
  workstyle: {
    guide: '働き方・制度向けの設問です。導入理由と社内外への意味を重視します。',
    episode: { label: 'Q. 新制度導入の契機は何ですか？', placeholder: '例: 現場の声、採用課題、離職防止' },
    background: { label: 'Q. 以前の働き方の課題は何でしたか？', placeholder: '例: 業務負荷、評価運用、コミュニケーション' },
    message1: { label: 'Q. 制度の要点と狙いは何ですか？', placeholder: '例: 対象、適用範囲、目指す変化' },
    message2: { label: 'Q. 社員・応募者のメリットは何ですか？', placeholder: '例: 働きやすさ、成長機会、安心感' },
    message3: { label: 'Q. 運用後の改善方針はありますか？', placeholder: '例: 効果測定、見直しサイクル' },
    notes: { label: 'Q. 公開時の配慮事項はありますか？', placeholder: '例: 表現トーン、公開範囲、社内ルール' },
  },
  recruiting: {
    guide: '採用・組織づくり向けの設問です。募集背景と仲間に伝えたい価値観を明確にします。',
    episode: { label: 'Q. 採用強化の背景は何ですか？', placeholder: '例: 事業拡大、新規領域、体制強化' },
    background: { label: 'Q. 現在の組織課題は何ですか？', placeholder: '例: 役割不足、スキルギャップ、体制課題' },
    message1: { label: 'Q. どんな仲間に来てほしいですか？', placeholder: '例: 役割、人物像、期待する姿勢' },
    message2: { label: 'Q. 入社後に得られる魅力は何ですか？', placeholder: '例: 挑戦機会、裁量、成長環境' },
    message3: { label: 'Q. 応募導線で重要な情報はありますか？', placeholder: '例: 募集職種、選考フロー、締切' },
    notes: { label: 'Q. 採用広報で外せないメッセージはありますか？', placeholder: '例: ミッション、価値観、文化' },
  },
  event: {
    guide: 'イベント・キャンペーン向けの設問です。参加価値と実施情報を優先してください。',
    episode: { label: 'Q. 実施のきっかけは何ですか？', placeholder: '例: 新施策、周年企画、接点強化' },
    background: { label: 'Q. 開催に至った背景・狙いは何ですか？', placeholder: '例: 市場動向、ユーザー要望、方針' },
    message1: { label: 'Q. 見どころ・参加メリットは何ですか？', placeholder: '例: 体験価値、特典、学び' },
    message2: { label: 'Q. ターゲットは誰ですか？', placeholder: '例: 既存顧客、新規層、学生、メディア' },
    message3: { label: 'Q. 参加方法の要点は何ですか？', placeholder: '例: 日程、会場、申込方法、費用' },
    notes: { label: 'Q. 当日の注意事項や補足はありますか？', placeholder: '例: 撮影可否、問い合わせ先' },
  },
  regional: {
    guide: '地域活動・社会貢献向けの設問です。社会課題との接続と意義を明確にします。',
    episode: { label: 'Q. どの地域・社会課題に着目しましたか？', placeholder: '例: 担い手不足、教育、防災、地域経済' },
    background: { label: 'Q. 取り組み前の課題は何でしたか？', placeholder: '例: 当事者の困りごと、継続課題' },
    message1: { label: 'Q. 取り組み内容を教えてください', placeholder: '例: 実施内容、連携先、対象者' },
    message2: { label: 'Q. 地域・社会への意義は何ですか？', placeholder: '例: 期待する変化、波及効果' },
    message3: { label: 'Q. 今後の継続・拡張計画はありますか？', placeholder: '例: 次年度計画、対象拡大' },
    notes: { label: 'Q. 協力先の表記注意など補足はありますか？', placeholder: '例: 正式名称、公開範囲、表記ルール' },
  },
  branding: {
    guide: 'ブランド刷新向けの設問です。刷新背景と目指す姿が伝わる内容を重視します。',
    episode: { label: 'Q. 見直しのきっかけは何でしたか？', placeholder: '例: 顧客変化、拡大、認知課題' },
    background: { label: 'Q. 変更前の課題は何でしたか？', placeholder: '例: 伝達不足、一貫性不足、差別化不足' },
    message1: { label: 'Q. 刷新したポイントは何ですか？', placeholder: '例: ロゴ、タグライン、トーン' },
    message2: { label: 'Q. 新ブランドで伝えたい価値観は何ですか？', placeholder: '例: 企業姿勢、約束、世界観' },
    message3: { label: 'Q. ユーザーに期待する変化はありますか？', placeholder: '例: 認知向上、利用促進、理解深化' },
    notes: { label: 'Q. ブランド素材や表記ルールの補足はありますか？', placeholder: '例: ガイドライン、使用可否、公開時期' },
  },
  management: {
    guide: '経営方針・新たな挑戦向けの設問です。意思決定背景と今後の方向性を明確にします。',
    episode: { label: 'Q. この経営判断に至った背景は何ですか？', placeholder: '例: 市場変化、事業課題、長期方針' },
    background: { label: 'Q. 経営視点で見ていた課題は何ですか？', placeholder: '例: 成長課題、収益構造、組織課題' },
    message1: { label: 'Q. 今回の方針・挑戦の要点は何ですか？', placeholder: '例: 戦略、注力領域、決定内容' },
    message2: { label: 'Q. ステークホルダーへのメッセージは何ですか？', placeholder: '例: 顧客、社員、取引先への約束' },
    message3: { label: 'Q. マイルストーンや目標はありますか？', placeholder: '例: 直近計画、中長期の方向性' },
    notes: { label: 'Q. 公表上の注意点はありますか？', placeholder: '例: 機微情報、法務確認、タイミング' },
  },
  other: {
    guide: 'その他カテゴリ向けの設問です。背景、意図、価値が伝わる情報を中心に記入してください。',
    episode: { label: 'Q. 印象的な背景・出来事はありますか？', placeholder: '例: 発表のきっかけ、現場の出来事' },
    background: { label: 'Q. 発表に至った経緯は何ですか？', placeholder: '例: 以前の課題、取り組んだ理由' },
    message1: { label: 'Q. 最も伝えたいポイントは何ですか？', placeholder: 'この発表で最も強調したい内容' },
    message2: { label: 'Q. 補足で伝えたいポイントはありますか？', placeholder: 'あればご記入ください' },
    message3: { label: 'Q. 追加で伝えたいポイントはありますか？', placeholder: 'あればご記入ください' },
    notes: { label: 'Q. 編集時に参考にしたい情報はありますか？', placeholder: '補足事項、掲載希望の言い回しなど' },
  },
};

export default function EpisodeForm({ onApplySuggestion }: EpisodeFormProps) {
  const [state, formAction, isPending] = useActionState(
    createEpisodeAction,
    initialState
  );

  const hasSuggestion =
    state.success &&
    (state.suggestedTitle != null || state.suggestedContent != null);
  const canApply =
    hasSuggestion &&
    state.suggestedContent != null &&
    onApplySuggestion != null;

  const handleApplySuggestion = () => {
    if (!canApply || !onApplySuggestion) return;
    const title = state.suggestedTitle ?? '';
    const content = state.suggestedContent ?? '';
    onApplySuggestion(title, content);
  };
  const [selectedCategory, setSelectedCategory] = useState<AnnouncementType | ''>('');
  const activeQuestionSet = selectedCategory
    ? CATEGORY_QUESTION_SETS[selectedCategory]
    : DEFAULT_QUESTION_SET;

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

          <div className="space-y-2">
            <Label htmlFor="announcement_type">カテゴリ</Label>
            <select
              id="announcement_type"
              name="announcement_type"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value as AnnouncementType | '')}
              className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50"
            >
              <option value="">未選択</option>
              {Object.entries(ANNOUNCEMENT_TYPE_LABELS).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </div>

          <div className="border-t pt-4 space-y-4">
            <p className="text-sm font-medium text-muted-foreground">
              {activeQuestionSet.guide}
            </p>

            <div className="space-y-2">
              <Label htmlFor="episode">{activeQuestionSet.episode.label}</Label>
              <Textarea
                id="episode"
                name="episode"
                placeholder={activeQuestionSet.episode.placeholder}
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
              <Label htmlFor="background">{activeQuestionSet.background.label}</Label>
              <Textarea
                id="background"
                name="background"
                placeholder={activeQuestionSet.background.placeholder}
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
              <Label htmlFor="message_1">{activeQuestionSet.message1.label}</Label>
              <Textarea
                id="message_1"
                name="message_1"
                placeholder={activeQuestionSet.message1.placeholder}
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
              <Label htmlFor="message_2">{activeQuestionSet.message2.label}</Label>
              <Textarea
                id="message_2"
                name="message_2"
                placeholder={activeQuestionSet.message2.placeholder}
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
              <Label htmlFor="message_3">{activeQuestionSet.message3.label}</Label>
              <Textarea
                id="message_3"
                name="message_3"
                placeholder={activeQuestionSet.message3.placeholder}
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
              <Label htmlFor="notes">{activeQuestionSet.notes.label}</Label>
              <Textarea
                id="notes"
                name="notes"
                placeholder={activeQuestionSet.notes.placeholder}
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
        <CardFooter className="flex flex-col gap-2 sm:flex-row">
          <Button type="submit" disabled={isPending}>
            {isPending ? '送信中...' : '送信する'}
          </Button>
          {canApply && (
            <Button
              type="button"
              variant="secondary"
              onClick={handleApplySuggestion}
            >
              Editorに反映
            </Button>
          )}
        </CardFooter>
      </form>
    </Card>
  );
}
