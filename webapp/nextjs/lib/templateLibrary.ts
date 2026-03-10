export type TemplateId = 'T1' | 'T2' | 'T3' | 'T4' | 'T5' | 'T6';

export type SourceType = 'template' | 'generated';

export type AnnouncementType =
  | 'product'
  | 'feature_update'
  | 'workstyle'
  | 'recruiting'
  | 'event'
  | 'regional'
  | 'branding'
  | 'management'
  | 'other';

export type MainActorType =
  | 'executive'
  | 'employee'
  | 'developer'
  | 'customer'
  | 'community'
  | 'multiple'
  | 'undecided';

export type ToneType = 'formal' | 'friendly' | 'passionate' | 'honest' | 'brand_like';

export type CtaType =
  | 'learn_more'
  | 'purchase'
  | 'media_inquiry'
  | 'company_interest'
  | 'recruiting'
  | 'contact'
  | 'regional_awareness'
  | 'visit_lp'
  | 'other';

export interface ConversationInputModel {
  announcement_type: AnnouncementType | '';
  announcement_detail: string;
  before_problem: string;
  why_now: string;
  core_message: string;
  main_actor_type: MainActorType | '';
  main_actor_detail: string;
  change_summary: string;
  evidence: string;
  cta_type: CtaType | '';
  cta_detail: string;
  visual_assets: string;
  before_after_change: string;
  social_context: string;
  honest_challenges: string;
  tone: ToneType | '';
}

export type NormalizedConversationInputModel = ConversationInputModel;

export interface CommonSection {
  heading: string;
  description: string;
  recommended_inputs: string[];
  placeholder_blocks: string[];
}

export interface CtaBlock {
  purpose: string;
  content: string;
}

export interface CommonStructureModel {
  source_type: SourceType;
  structure_title: string;
  article_core: string;
  title_candidates: string[];
  opening_points: string[];
  sections: CommonSection[];
  cta_block: CtaBlock;
  missing_information: string[];
  notes: string[];
  metadata?: {
    recommended_template_id?: TemplateId;
    recommended_template_name?: string;
    recommendation_reason?: string;
  };
}

export interface TemplateDefinition {
  id: TemplateId;
  name: string;
  suitable_for: string[];
  section_outline: CommonSection[];
}

export interface Phase1Output {
  recommended_template_id: TemplateId;
  recommended_template_name: string;
  recommendation_reason: string;
  article_core: string;
  missing_information: string[];
  title_candidates: string[];
  section_outline: CommonSection[];
  alternative_templates: Array<{ id: TemplateId; name: string; reason: string }>;
}

export interface Phase2GeneratedOutput {
  structure_title: string;
  article_core: string;
  title_candidates: string[];
  opening_points: string[];
  sections: CommonSection[];
  cta_block: CtaBlock;
  missing_information: string[];
  notes: string[];
}

export const PHASE2_GENERATION_RULES: string[] = [
  '本文を書かない',
  '完成した自然文を書かない',
  '断定的な事実補完をしない',
  'コメント文を作らない',
  '数字を補わない',
  '引用文を作らない',
  '見出し、要点、プレースホルダだけ返す',
  'プレースホルダは記載観点のみを示す',
];

export const ANNOUNCEMENT_TYPE_LABELS: Record<AnnouncementType, string> = {
  product: '新商品・新サービス',
  feature_update: '機能追加・改善',
  workstyle: '新制度・福利厚生・働き方改革',
  recruiting: '採用・組織づくり',
  event: 'イベント・キャンペーン',
  regional: '地域活動・社会貢献',
  branding: '企業文化・ブランド刷新',
  management: '経営方針・新たな挑戦',
  other: 'その他',
};

export const MAIN_ACTOR_TYPE_LABELS: Record<MainActorType, string> = {
  executive: '経営者',
  employee: '現場社員',
  developer: '開発担当',
  customer: '顧客',
  community: '地域の関係者',
  multiple: '複数人',
  undecided: '未定',
};

export const TONE_TYPE_LABELS: Record<ToneType, string> = {
  formal: '事実ベースで硬め',
  friendly: '親しみやすく',
  passionate: '熱量を伝えたい',
  honest: '誠実で等身大に',
  brand_like: 'ブランド感を出したい',
};

export const CTA_TYPE_LABELS: Record<CtaType, string> = {
  learn_more: '商品・サービスを知ってほしい',
  purchase: '購入・利用してほしい',
  media_inquiry: '取材してほしい',
  company_interest: '会社に興味を持ってほしい',
  recruiting: '採用ページを見てほしい',
  contact: '問い合わせてほしい',
  regional_awareness: '地域の人に知ってほしい',
  visit_lp: 'LPを見てほしい',
  other: 'その他',
};

const TEMPLATE_PRIORITY: TemplateId[] = ['T1', 'T2', 'T3', 'T4', 'T5', 'T6'];

const SECTION_PLACEHOLDERS: Record<TemplateId, Record<string, string[]>> = {
  T1: {
    発表概要: ['何を発表するのか', '対象者にとっての要点', 'どの文脈での発表か'],
    '背景にあった課題・違和感': ['どのような課題があったか', '誰に影響していたか', 'いつから問題になっていたか'],
    なぜ今取り組むのか: ['今このタイミングで動いた理由', '外部環境の変化', '先送りできなかった背景'],
    取り組みに込めた思い: ['最も伝えたい価値観', '判断の軸', '譲れない方針'],
    具体的な内容: ['実施した内容', '対象範囲', '従来との違い'],
    今後の展望: ['次に取り組むこと', '期待する変化', '中長期の方向性'],
    CTA: ['読者に求める行動', '遷移先や問い合わせ先', '行動する意義'],
  },
  T2: {
    変更内容の要約: ['何をどの単位で刷新したか', '変更の規模', '変更後の状態'],
    変更前の状況: ['変更前の課題', '業務や利用者への影響', '維持が難しかった理由'],
    変える必要があった理由: ['なぜ変更が必要だったか', '意思決定のきっかけ', '優先度が上がった背景'],
    具体的な変更点: ['変更した項目', '変更のポイント', '実施体制や工程'],
    社内外への意味: ['社内への意味', '顧客や取引先への意味', '期待する効果'],
    今後の展開: ['運用開始後の計画', '継続改善の方針', '次の施策'],
    CTA: ['読者に期待するアクション', '参加・利用方法', '問い合わせ導線'],
  },
  T3: {
    発表概要: ['何を決定・実施したか', '経営観点での主題', '対象範囲'],
    経営者が見ていた課題: ['経営者が重視した課題', '課題の影響範囲', '放置時のリスク'],
    なぜこの決断に至ったか: ['決断時の判断材料', 'タイミングの理由', '代替案との比較観点'],
    取り組み内容: ['決定内容の具体', '実行内容', '体制・責任分担'],
    '業界・社会へのメッセージ': ['社会や業界への問題意識', '自社の立ち位置', '発信したい姿勢'],
    今後の展望: ['今後の方針', '次のマイルストーン', '継続的な取り組み'],
    CTA: ['読者に求める反応', '連絡手段', '次の行動先'],
  },
  T4: {
    '地域・業界背景': ['どの地域・業界の課題か', '現状の文脈', '課題の広がり'],
    自社が感じていた課題: ['自社視点の課題', '現場での具体的な困りごと', '取り組み前の状態'],
    今回の取り組み: ['取り組みの概要', '対象者', '実施目的'],
    具体的な内容: ['実施内容の詳細', '連携先や体制', '実行方法'],
    課題解決への意義: ['課題解決にどう寄与するか', '地域・業界への価値', '自社としての意義'],
    将来への波及: ['波及効果の見込み', '再現可能性', '次の展開'],
    CTA: ['読者に求める協力・行動', '参加方法', '問い合わせ先'],
  },
  T5: {
    発表概要: ['商品・サービス名', '何が新しいか', '誰向けか'],
    '商品・サービス概要': ['提供内容', '利用シーン', '基本仕様'],
    '特徴・差別化': ['差別化ポイント', '従来との違い', '導入メリット'],
    背景: ['開発・提供の背景', '解決したい課題', '市場や顧客文脈'],
    '数字・根拠': ['客観データ', '検証結果', '根拠の出典'],
    '利用・購入情報': ['価格や導入方法', '開始時期', '申込導線'],
    CTA: ['知ってほしい内容', '利用開始までの導線', '問い合わせ先'],
  },
  T6: {
    取り組み概要: ['何に取り組んだか', '主語となる人物やチーム', '目的'],
    人物紹介: ['人物の役割', 'これまでの背景', 'この取り組みとの関係'],
    抱えていた課題や思い: ['人物が抱えていた課題', '原動力となった思い', '乗り越える必要があった壁'],
    具体的な行動: ['どのような行動を取ったか', '試行錯誤の要点', '実行プロセス'],
    周囲への影響: ['社内外の反応', '生まれた変化', '客観的な手応え'],
    今後の展望: ['次の挑戦', '継続方針', '発展の方向性'],
    CTA: ['読者に期待する行動', '関心を持ってほしい点', '連絡先・導線'],
  },
};

function makeSection(
  templateId: TemplateId,
  heading: string,
  description: string,
  recommended_inputs: string[],
): CommonSection {
  return {
    heading,
    description,
    recommended_inputs,
    placeholder_blocks: SECTION_PLACEHOLDERS[templateId][heading] ?? [
      'この見出しで説明すべき要点を整理する',
      '根拠や背景を確認できる情報を記載する',
      '読者に伝える順序で項目を並べる',
    ],
  };
}

export const TEMPLATE_LIBRARY: Record<TemplateId, TemplateDefinition> = {
  T1: {
    id: 'T1',
    name: '背景・想い重視型',
    suitable_for: ['中小企業', '初めての発信', '活動の意味が主題', '思いや背景が強い'],
    section_outline: [
      makeSection('T1', '発表概要', '今回の発表内容を端的に示す', ['announcement_type', 'announcement_detail']),
      makeSection('T1', '背景にあった課題・違和感', '取り組み前にあった問題意識を具体化する', ['before_problem']),
      makeSection('T1', 'なぜ今取り組むのか', 'タイミングの必然性を示す', ['why_now']),
      makeSection('T1', '取り組みに込めた思い', '価値観や姿勢を明文化する', ['core_message']),
      makeSection('T1', '具体的な内容', '実際に何を変えたかを説明する', ['change_summary', 'evidence']),
      makeSection('T1', '今後の展望', '次のアクションや見通しを提示する', ['before_after_change']),
      makeSection('T1', 'CTA', '読者に取ってほしい行動を伝える', ['cta_type', 'cta_detail']),
    ],
  },
  T2: {
    id: 'T2',
    name: '変化・刷新ストーリー型',
    suitable_for: ['リブランディング', '制度刷新', '働き方改革', '社内文化の変化'],
    section_outline: [
      makeSection('T2', '変更内容の要約', '何を刷新したのかを先に伝える', ['change_summary']),
      makeSection('T2', '変更前の状況', '刷新前の課題や違和感を示す', ['before_problem']),
      makeSection('T2', '変える必要があった理由', '意思決定の背景を説明する', ['why_now']),
      makeSection('T2', '具体的な変更点', '変更内容を具体的に列挙する', ['announcement_detail', 'change_summary']),
      makeSection('T2', '社内外への意味', '変更による意義や価値を示す', ['core_message', 'social_context']),
      makeSection('T2', '今後の展開', '今後の方向性や展望を述べる', ['before_after_change']),
      makeSection('T2', 'CTA', '読者の次の行動を明確化する', ['cta_type', 'cta_detail']),
    ],
  },
  T3: {
    id: 'T3',
    name: '経営者メッセージ型',
    suitable_for: ['経営者の問題意識が強い', '会社の姿勢を示したい', '代表の言葉を軸にしたい'],
    section_outline: [
      makeSection('T3', '発表概要', '発表内容を簡潔に伝える', ['announcement_type', 'announcement_detail']),
      makeSection('T3', '経営者が見ていた課題', '経営視点の課題認識を示す', ['main_actor_type', 'main_actor_detail', 'before_problem']),
      makeSection('T3', 'なぜこの決断に至ったか', '意思決定の背景とタイミングを示す', ['why_now']),
      makeSection('T3', '取り組み内容', '実施内容を具体化する', ['change_summary', 'announcement_detail']),
      makeSection('T3', '業界・社会へのメッセージ', '企業としての姿勢を示す', ['core_message', 'social_context']),
      makeSection('T3', '今後の展望', '今後の方向性を示す', ['before_after_change']),
      makeSection('T3', 'CTA', '読者への働きかけを記載する', ['cta_type', 'cta_detail']),
    ],
  },
  T4: {
    id: 'T4',
    name: '地域・社会課題接続型',
    suitable_for: ['地域性が高い', '社会課題がある', '業界課題に接続できる'],
    section_outline: [
      makeSection('T4', '地域・業界背景', '社会的文脈を先に提示する', ['social_context']),
      makeSection('T4', '自社が感じていた課題', '自社視点の課題を整理する', ['before_problem']),
      makeSection('T4', '今回の取り組み', '取り組みの全体像を示す', ['announcement_detail', 'change_summary']),
      makeSection('T4', '具体的な内容', '実施内容や体制を具体化する', ['change_summary', 'evidence']),
      makeSection('T4', '課題解決への意義', '社会的意義を明確にする', ['core_message']),
      makeSection('T4', '将来への波及', '地域や業界への影響を示す', ['before_after_change']),
      makeSection('T4', 'CTA', '読者に促す行動を記載する', ['cta_type', 'cta_detail']),
    ],
  },
  T5: {
    id: 'T5',
    name: '商品・事実整理型',
    suitable_for: ['新商品・新サービス', '機能訴求が中心', '標準的な発表'],
    section_outline: [
      makeSection('T5', '発表概要', '発表対象と要点を示す', ['announcement_type', 'announcement_detail']),
      makeSection('T5', '商品・サービス概要', '対象の概要を説明する', ['announcement_detail']),
      makeSection('T5', '特徴・差別化', '特長や競合との差分を示す', ['change_summary', 'core_message']),
      makeSection('T5', '背景', '取り組みの背景を簡潔に補足する', ['before_problem', 'why_now']),
      makeSection('T5', '数字・根拠', '客観情報で裏付ける', ['evidence']),
      makeSection('T5', '利用・購入情報', '導線情報を提示する', ['cta_detail']),
      makeSection('T5', 'CTA', '読者に取ってほしい行動を明確化する', ['cta_type', 'cta_detail']),
    ],
  },
  T6: {
    id: 'T6',
    name: '人物起点型',
    suitable_for: ['現場社員・開発者・顧客が主役', '人の言葉が中心', 'ヒューマンストーリー性が高い'],
    section_outline: [
      makeSection('T6', '取り組み概要', '全体像を先に示す', ['announcement_detail', 'change_summary']),
      makeSection('T6', '人物紹介', '主語となる人物の背景を示す', ['main_actor_type', 'main_actor_detail']),
      makeSection('T6', '抱えていた課題や思い', '人物視点の課題と動機を記載する', ['before_problem', 'core_message']),
      makeSection('T6', '具体的な行動', '取り組み内容を時系列で示す', ['change_summary']),
      makeSection('T6', '周囲への影響', '社内外の反応や影響を伝える', ['evidence', 'before_after_change']),
      makeSection('T6', '今後の展望', '次の展開を示す', ['why_now']),
      makeSection('T6', 'CTA', '読者に促す行動を明記する', ['cta_type', 'cta_detail']),
    ],
  },
};

const MISSING_INFORMATION_RULES: Array<{
  key: keyof ConversationInputModel;
  condition: (input: ConversationInputModel) => boolean;
  message: string;
}> = [
  {
    key: 'before_problem',
    condition: (input) => input.before_problem.trim().length < 20,
    message: '取り組み前の課題や違和感があると、記事に深みが出ます',
  },
  {
    key: 'why_now',
    condition: (input) => !hasText(input.why_now),
    message: 'なぜ今行ったのかを入れるとニュース性が明確になります',
  },
  {
    key: 'core_message',
    condition: (input) => !hasText(input.core_message),
    message: '一番伝えたい思いを入れると独自性が強まります',
  },
  {
    key: 'main_actor_type',
    condition: (input) => !hasText(input.main_actor_type) || input.main_actor_type === 'undecided',
    message: '誰の言葉を載せるか決まると記事の説得力が増します',
  },
  {
    key: 'evidence',
    condition: (input) => !hasText(input.evidence),
    message: '数字や反響があると客観性を補強できます',
  },
  {
    key: 'before_after_change',
    condition: (input) => !hasText(input.before_after_change),
    message: '取り組み前後の変化があると伝わりやすくなります',
  },
  {
    key: 'cta_type',
    condition: (input) => !hasText(input.cta_type),
    message: '読者に何をしてほしいかを明確にすると締まりやすいです',
  },
];

interface ScoredTemplate {
  id: TemplateId;
  score: number;
  reasons: string[];
}

type TemplateScorer = (input: NormalizedConversationInputModel) => ScoredTemplate;

export function createEmptyInputModel(): ConversationInputModel {
  return {
    announcement_type: '',
    announcement_detail: '',
    before_problem: '',
    why_now: '',
    core_message: '',
    main_actor_type: '',
    main_actor_detail: '',
    change_summary: '',
    evidence: '',
    cta_type: '',
    cta_detail: '',
    visual_assets: '',
    before_after_change: '',
    social_context: '',
    honest_challenges: '',
    tone: '',
  };
}

export function normalizeInput(
  input: Partial<ConversationInputModel>,
): NormalizedConversationInputModel {
  return { ...createEmptyInputModel(), ...input };
}

export function listTemplateDefinitions(): TemplateDefinition[] {
  return TEMPLATE_PRIORITY.map((id) => TEMPLATE_LIBRARY[id]);
}

export function getTemplateDefinition(templateId: TemplateId): TemplateDefinition {
  return TEMPLATE_LIBRARY[templateId];
}

export function detectMissingInformation(inputRaw: Partial<ConversationInputModel>): string[] {
  const input = normalizeInput(inputRaw);
  return MISSING_INFORMATION_RULES.filter((rule) => rule.condition(input)).map((rule) => rule.message);
}

export function selectTemplates(inputRaw: Partial<ConversationInputModel>, maxAlternatives = 2): Phase1Output {
  const input = normalizeInput(inputRaw);
  const scored = scoreTemplates(input);
  const best = scored[0];
  const recommendedTemplate = TEMPLATE_LIBRARY[best.id];

  const alternatives = scored.slice(1, 1 + Math.max(0, maxAlternatives)).map((candidate) => ({
    id: candidate.id,
    name: TEMPLATE_LIBRARY[candidate.id].name,
    reason: summarizeReasons(candidate.reasons),
  }));

  return {
    recommended_template_id: recommendedTemplate.id,
    recommended_template_name: recommendedTemplate.name,
    recommendation_reason: summarizeReasons(best.reasons),
    article_core: buildArticleCore(input),
    missing_information: detectMissingInformation(input),
    title_candidates: buildTitleCandidates(input, recommendedTemplate.id),
    section_outline: recommendedTemplate.section_outline,
    alternative_templates: alternatives,
  };
}

export function toCommonStructureModel(
  inputRaw: Partial<ConversationInputModel>,
  phase1: Phase1Output,
): CommonStructureModel {
  const input = normalizeInput(inputRaw);

  return {
    source_type: 'template',
    structure_title: phase1.recommended_template_name,
    article_core: phase1.article_core,
    title_candidates: phase1.title_candidates,
    opening_points: buildOpeningPoints(input),
    sections: phase1.section_outline,
    cta_block: {
      purpose: input.cta_type ? CTA_TYPE_LABELS[input.cta_type] : '読者への行動喚起',
      content: input.cta_detail || (input.cta_type ? CTA_TYPE_LABELS[input.cta_type] : '') || '記事の最後で次の行動を明確に提示する',
    },
    missing_information: phase1.missing_information,
    notes: [],
    metadata: {
      recommended_template_id: phase1.recommended_template_id,
      recommended_template_name: phase1.recommended_template_name,
      recommendation_reason: phase1.recommendation_reason,
    },
  };
}

export function toPhase2DraftOutput(
  inputRaw: Partial<ConversationInputModel>,
  phase1?: Phase1Output,
): Phase2GeneratedOutput {
  const normalizedInput = normalizeInput(inputRaw);
  const base = phase1 ?? selectTemplates(normalizedInput);

  return {
    structure_title: base.recommended_template_name,
    article_core: base.article_core,
    title_candidates: base.title_candidates,
    opening_points: buildOpeningPoints(normalizedInput),
    sections: base.section_outline,
    cta_block: {
      purpose: normalizedInput.cta_type ? CTA_TYPE_LABELS[normalizedInput.cta_type] : '読者への行動喚起',
      content:
        normalizedInput.cta_detail ||
        (normalizedInput.cta_type ? CTA_TYPE_LABELS[normalizedInput.cta_type] : '') ||
        '記事の最後で次の行動を明確に提示する',
    },
    missing_information: base.missing_information,
    notes: ['本文ではなく、見出し・要点・記載観点のみを出力する'],
  };
}

export function toCommonStructureFromPhase2(phase2: Phase2GeneratedOutput): CommonStructureModel {
  return {
    source_type: 'generated',
    structure_title: phase2.structure_title,
    article_core: phase2.article_core,
    title_candidates: phase2.title_candidates,
    opening_points: phase2.opening_points,
    sections: phase2.sections,
    cta_block: phase2.cta_block,
    missing_information: phase2.missing_information,
    notes: phase2.notes,
  };
}

export function sanitizePhase2Output(partial: Partial<Phase2GeneratedOutput>): Phase2GeneratedOutput {
  const sanitizedSections = (partial.sections ?? []).map((section) => ({
    heading: section.heading ?? '',
    description: section.description ?? '',
    recommended_inputs: section.recommended_inputs ?? [],
    placeholder_blocks:
      section.placeholder_blocks && section.placeholder_blocks.length > 0
        ? section.placeholder_blocks
        : ['この見出しで記載すべき要点を整理する'],
  }));

  return {
    structure_title: partial.structure_title ?? '生成構成案',
    article_core: partial.article_core ?? '',
    title_candidates: partial.title_candidates ?? [],
    opening_points: partial.opening_points ?? [],
    sections: sanitizedSections,
    cta_block: partial.cta_block ?? { purpose: '', content: '' },
    missing_information: partial.missing_information ?? [],
    notes: partial.notes ?? [],
  };
}

export function mergeGeneratedStructure(partial: Partial<CommonStructureModel>): CommonStructureModel {
  return {
    source_type: 'generated',
    structure_title: partial.structure_title ?? '生成構成案',
    article_core: partial.article_core ?? '',
    title_candidates: partial.title_candidates ?? [],
    opening_points: partial.opening_points ?? [],
    sections: partial.sections ?? [],
    cta_block: partial.cta_block ?? { purpose: '', content: '' },
    missing_information: partial.missing_information ?? [],
    notes: partial.notes ?? [],
    metadata: partial.metadata,
  };
}

function scoreTemplates(input: NormalizedConversationInputModel): ScoredTemplate[] {
  const templateScorers: Record<TemplateId, TemplateScorer> = {
    T1: scoreT1,
    T2: scoreT2,
    T3: scoreT3,
    T4: scoreT4,
    T5: scoreT5,
    T6: scoreT6,
  };

  return TEMPLATE_PRIORITY.map((id) => templateScorers[id](input))
    .sort((a, b) => {
      if (b.score !== a.score) {
        return b.score - a.score;
      }
      const aPriority = TEMPLATE_PRIORITY.indexOf(a.id);
      const bPriority = TEMPLATE_PRIORITY.indexOf(b.id);
      return aPriority - bPriority;
    })
    .map((item) => ({
      ...item,
      reasons: item.reasons.length > 0 ? item.reasons : ['入力情報からの適合度が相対的に高い'],
    }));
}

function scoreT1(input: NormalizedConversationInputModel): ScoredTemplate {
  const scored = createScore('T1');
  if (textLength(input.core_message) >= 20) addScore(scored, 3, '一番伝えたい思いが明確');
  if (textLength(input.before_problem) >= 40) addScore(scored, 3, '背景課題が具体的');
  if (!isProductOrFeatureAnnouncement(input)) {
    addScore(scored, 1, '商品訴求よりストーリー訴求に寄っている');
  }
  if (hasText(input.honest_challenges)) {
    addScore(scored, 1, '等身大の課題を含めたストーリーにできる');
  }
  return scored;
}

function scoreT2(input: NormalizedConversationInputModel): ScoredTemplate {
  const scored = createScore('T2');
  const hasBeforeAfter =
    hasText(input.before_after_change) ||
    includesAnyNormalized(input.change_summary, ['刷新', '変更', '見直し', '再設計', 'リニューアル']);
  if (hasBeforeAfter) addScore(scored, 4, '刷新・変更の要素が明確');
  if (input.announcement_type === 'branding' || input.announcement_type === 'workstyle') {
    addScore(scored, 3, '発表カテゴリが刷新系');
  }
  if (textLength(input.before_problem) >= 40) {
    addScore(scored, 2, '変更前の課題が示されている');
  }
  if (hasText(input.visual_assets)) {
    addScore(scored, 1, '刷新内容を視覚的に伝えやすい');
  }
  return scored;
}

function scoreT3(input: NormalizedConversationInputModel): ScoredTemplate {
  const scored = createScore('T3');
  if (input.main_actor_type === 'executive') addScore(scored, 5, '主語が経営者');
  if (textLength(input.core_message) >= 20) {
    addScore(scored, 2, '経営視点のメッセージが構成に乗せやすい');
  }
  if (hasText(input.why_now)) addScore(scored, 2, '意思決定タイミングを説明できる');
  return scored;
}

function scoreT4(input: NormalizedConversationInputModel): ScoredTemplate {
  const scored = createScore('T4');
  const hasSocialContext =
    hasText(input.social_context) ||
    includesAnyNormalized(input.before_problem, ['地域', '社会', '業界', '人口減少', '担い手', '課題']);
  if (hasSocialContext) addScore(scored, 4, '地域・社会文脈が明確');
  if (includesAnyNormalized(input.before_problem, ['業界', '地域', '社会'])) {
    addScore(scored, 2, '課題が社会・業界課題に接続している');
  }
  if (textLength(input.core_message) >= 20) addScore(scored, 1, '社会的意義の言語化が可能');
  if (input.announcement_type === 'regional') addScore(scored, 2, '地域活動との整合性が高い');
  return scored;
}

function scoreT5(input: NormalizedConversationInputModel): ScoredTemplate {
  const scored = createScore('T5');
  if (isProductOrFeatureAnnouncement(input)) {
    addScore(scored, 4, '発表カテゴリが商品・機能訴求中心');
  }
  if (hasText(input.evidence)) addScore(scored, 2, '数値や根拠を構成に載せられる');
  if (hasText(input.change_summary)) addScore(scored, 2, '機能や提供内容の説明材料がある');
  if (hasText(input.visual_assets)) addScore(scored, 1, '商品・機能の説明を補強できる');
  return scored;
}

function scoreT6(input: NormalizedConversationInputModel): ScoredTemplate {
  const scored = createScore('T6');
  if (isHumanStoryActor(input.main_actor_type)) {
    addScore(scored, 5, '主語が現場・開発・顧客など人物中心');
  }
  if (hasText(input.main_actor_detail)) addScore(scored, 2, '人物情報の具体性がある');
  if (textLength(input.core_message) >= 20) addScore(scored, 1, '人物の思いを軸に構成できる');
  if (hasText(input.honest_challenges)) addScore(scored, 1, '人物の挑戦として描きやすい');
  return scored;
}

function buildArticleCore(input: NormalizedConversationInputModel): string {
  if (hasText(input.core_message)) {
    return input.core_message.trim();
  }
  if (hasText(input.why_now)) {
    return input.why_now.trim();
  }
  if (hasText(input.change_summary)) {
    return input.change_summary.trim();
  }
  if (hasText(input.announcement_detail)) {
    return input.announcement_detail.trim();
  }
  return '今回の発表で最も伝えたい価値を明確化する';
}

function buildTitleCandidates(
  input: NormalizedConversationInputModel,
  templateId: TemplateId,
): string[] {
  const detail = input.announcement_detail.trim() || '今回の取り組み';
  const message = input.core_message.trim();
  const actor = input.main_actor_detail.trim() || actorLabel(input.main_actor_type);
  const problem = input.before_problem.trim();

  switch (templateId) {
    case 'T1':
      return uniqueNonEmpty([
        `${detail}の背景と取り組み`,
        message ? `${message}を起点にした${detail}` : '',
        problem ? `${problem}を越えて進めた${detail}` : '',
      ]).slice(0, 3);
    case 'T2':
      return uniqueNonEmpty([
        `${detail}を刷新`,
        message ? `${message}に向けて${detail}を刷新` : '',
        problem ? `${problem}を背景に${detail}を見直し` : '',
      ]).slice(0, 3);
    case 'T3':
      return uniqueNonEmpty([
        actor ? `${actor}が語る${detail}` : '',
        message ? `${message}を掲げた${detail}` : '',
        `${detail}に込めた経営判断`,
      ]).slice(0, 3);
    case 'T4':
      return uniqueNonEmpty([
        `${detail}で向き合う地域・社会課題`,
        problem ? `${problem}を起点にした${detail}` : '',
        message ? `${message}を地域へ広げる${detail}` : '',
      ]).slice(0, 3);
    case 'T5':
      return uniqueNonEmpty([
        `${detail}を発表`,
        message ? `${detail}の特長: ${message}` : `${detail}の特長と活用方法`,
        hasText(input.evidence) ? `${detail}の効果を数値で紹介` : '',
      ]).slice(0, 3);
    case 'T6':
      return uniqueNonEmpty([
        actor ? `${actor}が挑んだ${detail}` : `${detail}を支えた現場の挑戦`,
        problem ? `${problem}に向き合った${detail}` : '',
        message ? `${message}を形にした${detail}` : '',
      ]).slice(0, 3);
    default:
      return uniqueNonEmpty([`${detail}を発表`]).slice(0, 3);
  }
}

export function buildPhase2GuardPrompt(): string {
  return [
    'あなたは構成編集支援AIです。本文生成は行いません。',
    ...PHASE2_GENERATION_RULES.map((rule) => `- ${rule}`),
    '出力は見出し、要点、recommended_inputs、placeholder_blocksのみを返してください。',
  ].join('\n');
}

function buildOpeningPoints(input: NormalizedConversationInputModel): string[] {
  return uniqueNonEmpty([
    hasText(input.announcement_detail) ? '冒頭で発表内容を簡潔に示す' : '',
    hasText(input.before_problem) ? '背景課題を短く補足する' : '',
    hasText(input.why_now) ? 'なぜ今なのかを添える' : '',
  ]);
}

function hasText(value: string): boolean {
  return value.trim().length > 0;
}

function textLength(value: string): number {
  return value.trim().length;
}

function includesAnyNormalized(text: string, keywords: string[]): boolean {
  const normalizedText = normalizeFreeText(text);
  return keywords.some((keyword) => normalizedText.includes(normalizeFreeText(keyword)));
}

function addScore(target: ScoredTemplate, score: number, reason: string): void {
  target.score += score;
  target.reasons.push(reason);
}

function summarizeReasons(reasons: string[]): string {
  return reasons.slice(0, 3).join('、');
}

function uniqueNonEmpty(values: string[]): string[] {
  return Array.from(new Set(values.filter((value) => value.trim().length > 0)));
}

function normalizeFreeText(value: string): string {
  return value.trim().toLowerCase().normalize('NFKC');
}

function createScore(id: TemplateId): ScoredTemplate {
  return { id, score: 0, reasons: [] };
}

function isProductOrFeatureAnnouncement(input: NormalizedConversationInputModel): boolean {
  return input.announcement_type === 'product' || input.announcement_type === 'feature_update';
}

function isHumanStoryActor(actorType: MainActorType | ''): boolean {
  return (
    actorType === 'employee' ||
    actorType === 'developer' ||
    actorType === 'customer' ||
    actorType === 'community' ||
    actorType === 'multiple'
  );
}

function actorLabel(actorType: MainActorType | ''): string {
  if (!actorType) {
    return '';
  }
  return MAIN_ACTOR_TYPE_LABELS[actorType];
}