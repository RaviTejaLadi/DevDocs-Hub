/** Difficulty / highlight labels shown on sidebar rows and doc feed section headers. */
export type TopicBadgeKind =
  | 'beginner'
  | 'intermediate'
  | 'advanced'
  | 'expert'
  | 'popular'
  | 'must-know'
  | 'recommended';

export const TOPIC_BADGE_LABELS: Record<TopicBadgeKind, string> = {
  beginner: 'Beginner',
  intermediate: 'Intermediate',
  advanced: 'Advanced',
  expert: 'Expert',
  popular: 'Popular',
  'must-know': 'Must Know',
  recommended: 'Recommended',
};

/** Compact sidebar pill text */
export const TOPIC_BADGE_SHORT_LABELS: Record<TopicBadgeKind, string> = {
  beginner: 'Starter',
  intermediate: 'Core',
  advanced: 'Advanced',
  expert: 'Expert',
  popular: 'Popular',
  'must-know': 'Essential',
  recommended: 'Pick',
};

export const topicBadgeToneClasses: Record<TopicBadgeKind, string> = {
  beginner:
    'border-emerald-500/35 bg-emerald-500/10 text-emerald-700 shadow-[0_0_12px_-4px_hsl(152_76%_40%/0.35)] dark:border-emerald-400/28 dark:bg-emerald-500/12 dark:text-emerald-200',
  intermediate:
    'border-sky-500/35 bg-sky-500/10 text-sky-700 shadow-[0_0_12px_-4px_hsl(199_89%_48%/0.3)] dark:border-sky-400/28 dark:bg-sky-500/12 dark:text-sky-200',
  advanced:
    'border-violet-500/35 bg-violet-500/10 text-violet-700 shadow-[0_0_12px_-4px_hsl(258_90%_60%/0.32)] dark:border-violet-400/28 dark:bg-violet-500/12 dark:text-violet-200',
  expert:
    'border-rose-500/35 bg-rose-500/10 text-rose-700 shadow-[0_0_12px_-4px_hsl(350_89%_60%/0.32)] dark:border-rose-400/28 dark:bg-rose-500/12 dark:text-rose-200',
  popular:
    'border-amber-500/40 bg-amber-500/12 text-amber-800 shadow-[0_0_12px_-4px_hsl(38_92%_50%/0.35)] dark:border-amber-400/28 dark:bg-amber-500/12 dark:text-amber-200',
  'must-know':
    'border-orange-500/40 bg-orange-500/12 text-orange-800 shadow-[0_0_12px_-4px_hsl(25_95%_53%/0.35)] dark:border-orange-400/28 dark:bg-orange-500/12 dark:text-orange-200',
  recommended:
    'border-cyan-500/35 bg-cyan-500/10 text-cyan-700 shadow-[0_0_12px_-4px_hsl(189_94%_43%/0.3)] dark:border-cyan-400/28 dark:bg-cyan-500/12 dark:text-cyan-200',
};

/** Active sidebar row left accent */
export const topicBadgeAccentBorder: Record<TopicBadgeKind, string> = {
  beginner: 'border-l-emerald-500/70',
  intermediate: 'border-l-sky-500/70',
  advanced: 'border-l-violet-500/70',
  expert: 'border-l-rose-500/70',
  popular: 'border-l-amber-500/70',
  'must-know': 'border-l-orange-500/70',
  recommended: 'border-l-cyan-500/70',
};

export const topicBadgeDotClass: Record<TopicBadgeKind, string> = {
  beginner: 'bg-emerald-500',
  intermediate: 'bg-sky-500',
  advanced: 'bg-violet-500',
  expert: 'bg-rose-500',
  popular: 'bg-amber-500',
  'must-know': 'bg-orange-500',
  recommended: 'bg-cyan-500',
};

export type TopicBadgeContext = {
  parentTitle?: string;
  /** 0-based index among siblings (same depth). */
  siblingIndex?: number;
  siblingCount?: number;
  depth?: number;
};

const stripEmoji = (text: string) => text.replace(/[\p{Extended_Pictographic}\uFE0F]/gu, '').trim();

const normalize = (text: string) => stripEmoji(text).toLowerCase();

type Matcher = { kind: TopicBadgeKind; pattern: RegExp };

const TITLE_MATCHERS: Matcher[] = [
  { kind: 'must-know', pattern: /\b(must[\s-]?know|essentials?|every\s+developer)\b/i },
  { kind: 'expert', pattern: /\b(expert|interview|hard\s*level|master(?:y)?|coding\s*questions)\b/i },
  { kind: 'popular', pattern: /\b(popular|top\s*\d+|most\s+used|trending)\b/i },
  { kind: 'recommended', pattern: /\b(recommended|roadmap|study\s*plan|start\s+here)\b/i },
  { kind: 'advanced', pattern: /\b(advanced|deep\s*dive|internals?|optimization|expert\s*level)\b/i },
  { kind: 'intermediate', pattern: /\b(intermediate|core\s+workflow|patterns?|architecture)\b/i },
  {
    kind: 'beginner',
    pattern:
      /\b(intro(?:duction)?|basics?|fundamentals?|installation|setup|overview|what\s+is|getting\s+started|primer)\b/i,
  },
];

const PARENT_MATCHERS: Matcher[] = [
  { kind: 'beginner', pattern: /\b(getting\s+started|fundamentals?|basics?)\b/i },
  { kind: 'intermediate', pattern: /\b(core|workflow|essentials?)\b/i },
  { kind: 'advanced', pattern: /\b(advanced|deep\s*dive)\b/i },
  { kind: 'expert', pattern: /\b(interview|expert)\b/i },
  { kind: 'must-know', pattern: /\b(must[\s-]?know|interview\s+prep)\b/i },
  { kind: 'recommended', pattern: /\b(roadmap|recommended|resources?)\b/i },
];

const matchKind = (text: string, matchers: Matcher[]): TopicBadgeKind | undefined => {
  const normalized = normalize(text);
  if (!normalized) return undefined;
  for (const { kind, pattern } of matchers) {
    if (pattern.test(normalized)) return kind;
  }
  return undefined;
};

const positionKind = (index: number, count: number): TopicBadgeKind => {
  if (count <= 1) return 'beginner';
  const ratio = index / Math.max(count - 1, 1);
  if (ratio <= 0.2) return 'beginner';
  if (ratio >= 0.85) return 'advanced';
  if (ratio >= 0.55) return 'intermediate';
  return 'intermediate';
};

/**
 * Resolves a display badge for a topic row.
 * Explicit `badge` on the item wins; otherwise title, parent section, and sibling order are used.
 */
export function resolveTopicBadge(
  title: string,
  explicit?: TopicBadgeKind,
  context: TopicBadgeContext = {}
): TopicBadgeKind {
  if (explicit) return explicit;

  const fromTitle = matchKind(title, TITLE_MATCHERS);
  if (fromTitle) return fromTitle;

  if (context.parentTitle) {
    const fromParent = matchKind(context.parentTitle, PARENT_MATCHERS);
    if (fromParent) return fromParent;
  }

  if (context.siblingIndex !== undefined && context.siblingCount !== undefined && context.siblingCount > 0) {
    return positionKind(context.siblingIndex, context.siblingCount);
  }

  if ((context.depth ?? 0) === 0) return 'beginner';

  return 'intermediate';
}
