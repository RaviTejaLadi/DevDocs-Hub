import type { TopicItem } from '@/topics';
import expressIntro from './intro.md?raw';
import expressTheory from './theory-questions.md?raw';
import expressCoding from './coding-questions.md?raw';

export const expressTopics: TopicItem[] = [
  {
    id: 'express-intro',
    title: '📚 Introduction',
    content: expressIntro,
  },
  {
    id: 'express-theory-questions',
    title: '❓ Theory Questions',
    content: expressTheory,
  },
  {
    id: 'express-coding-questions',
    title: '💻 Coding Questions',
    content: expressCoding,
  },
];
