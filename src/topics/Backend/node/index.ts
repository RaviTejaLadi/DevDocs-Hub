import type { TopicItem } from '@/topics';
import nodeIntro from './intro.md?raw';
import nodeTheory from './theory-questions.md?raw';
import nodeCoding from './coding-questions.md?raw';

export const nodeTopics: TopicItem[] = [
  {
        id: 'node-intro',
        title: '📚 Introduction',
        content: nodeIntro,
      },
      {
        id: 'theory-questions',
        title: '❓ Theory Questions',
        content: nodeTheory,
      },
      {
        id: 'coding-questions',
        title: '💻 Coding Questions',
        content: nodeCoding,
      },
];
