import cellBiology from './cell-biology.md?raw';
import genetics from './genetics.md?raw';
import type { TopicItem } from '@/data/topics';

export const biologyTopics: TopicItem[] = [
  {
    id: 'cell-biology',
    title: 'Cell Biology',
    content: cellBiology,
  },
  {
    id: 'genetics',
    title: 'Genetics',
    content: genetics,
  },
];
