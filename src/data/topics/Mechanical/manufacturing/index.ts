import casting from './casting.md?raw';
import machining from './machining.md?raw';
import type { TopicItem } from '@/data/topics';

export const manufacturingTopics: TopicItem[] = [
  {
    id: 'casting',
    title: 'Casting',
    content: casting,
  },
  {
    id: 'machining',
    title: 'Machining',
    content: machining,
  },
];
