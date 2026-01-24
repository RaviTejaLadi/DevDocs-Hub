import type { TopicItem } from '@/topics';
import tsIntro from './Introduction to TypeScript.md?raw';
import tsInterviewQuestions from './interview-questions-theory.md?raw';

export const tsConcepts:TopicItem[] = [
  {
    id: 'intro-to-ts',
    title: '📚 Introduction',
    content: tsIntro,
  },
  {
    id: 'ts-q-&-a',
    title: '❓ TypeScript Interview Questions',
    content: tsInterviewQuestions,
  },
];
