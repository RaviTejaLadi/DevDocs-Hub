import type { TopicId } from '@/data/interviewQuestions';

export const CATEGORY_VISUALS: Record<string, { emoji: string; accent: string; ring: string }> = {
  'Full-Stack & Web': {
    emoji: '🌐',
    accent: 'from-sky-500/15 via-sky-500/5 to-transparent',
    ring: 'border-sky-500/25',
  },
  'Backend & Data': {
    emoji: '🗄️',
    accent: 'from-emerald-500/15 via-emerald-500/5 to-transparent',
    ring: 'border-emerald-500/25',
  },
  Architecture: {
    emoji: '🏗️',
    accent: 'from-violet-500/15 via-violet-500/5 to-transparent',
    ring: 'border-violet-500/25',
  },
};

export const TOPIC_VISUALS: Record<
  TopicId,
  { emoji: string; iconBg: string; iconColor: string; cardHover: string }
> = {
  html: {
    emoji: '📄',
    iconBg: 'bg-orange-500/12',
    iconColor: 'text-orange-600 dark:text-orange-400',
    cardHover: 'group-hover:border-orange-500/35 group-hover:shadow-orange-500/10',
  },
  css: {
    emoji: '🎨',
    iconBg: 'bg-sky-500/12',
    iconColor: 'text-sky-600 dark:text-sky-400',
    cardHover: 'group-hover:border-sky-500/35 group-hover:shadow-sky-500/10',
  },
  javascript: {
    emoji: '⚡',
    iconBg: 'bg-amber-500/12',
    iconColor: 'text-amber-600 dark:text-amber-400',
    cardHover: 'group-hover:border-amber-500/35 group-hover:shadow-amber-500/10',
  },
  typescript: {
    emoji: '🔷',
    iconBg: 'bg-blue-500/12',
    iconColor: 'text-blue-600 dark:text-blue-400',
    cardHover: 'group-hover:border-blue-500/35 group-hover:shadow-blue-500/10',
  },
  react: {
    emoji: '⚛️',
    iconBg: 'bg-cyan-500/12',
    iconColor: 'text-cyan-600 dark:text-cyan-400',
    cardHover: 'group-hover:border-cyan-500/35 group-hover:shadow-cyan-500/10',
  },
  node: {
    emoji: '🟢',
    iconBg: 'bg-lime-500/12',
    iconColor: 'text-lime-600 dark:text-lime-400',
    cardHover: 'group-hover:border-lime-500/35 group-hover:shadow-lime-500/10',
  },
  sql: {
    emoji: '🛢️',
    iconBg: 'bg-indigo-500/12',
    iconColor: 'text-indigo-600 dark:text-indigo-400',
    cardHover: 'group-hover:border-indigo-500/35 group-hover:shadow-indigo-500/10',
  },
  mongodb: {
    emoji: '🍃',
    iconBg: 'bg-green-500/12',
    iconColor: 'text-green-600 dark:text-green-400',
    cardHover: 'group-hover:border-green-500/35 group-hover:shadow-green-500/10',
  },
  dsa: {
    emoji: '🧩',
    iconBg: 'bg-purple-500/12',
    iconColor: 'text-purple-600 dark:text-purple-400',
    cardHover: 'group-hover:border-purple-500/35 group-hover:shadow-purple-500/10',
  },
  'system-design': {
    emoji: '🏛️',
    iconBg: 'bg-rose-500/12',
    iconColor: 'text-rose-600 dark:text-rose-400',
    cardHover: 'group-hover:border-rose-500/35 group-hover:shadow-rose-500/10',
  },
};

export const LEVEL_EMOJI: Record<string, string> = {
  entry: '🌱',
  junior: '🚀',
  mid: '⭐',
  senior: '🔥',
  expert: '👑',
};
