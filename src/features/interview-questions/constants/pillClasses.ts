import type { ExperienceLevel } from '@/data/interviewQuestions';

export const levelPillClass: Record<ExperienceLevel, string> = {
  entry: 'text-emerald-600 border-emerald-500/60 bg-emerald-500/10',
  junior: 'text-amber-600 border-amber-500/60 bg-amber-500/10',
  mid: 'text-orange-600 border-orange-500/60 bg-orange-500/10',
  senior: 'text-pink-600 border-pink-500/60 bg-pink-500/10',
  expert: 'text-purple-600 border-purple-500/60 bg-purple-500/10',
};

export const questionTypePillClass = {
  coding: 'text-sky-600 border-sky-500/60 bg-sky-500/10',
  theory: 'text-indigo-600 border-indigo-500/60 bg-indigo-500/10',
} as const;