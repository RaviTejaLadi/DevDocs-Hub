import type { TopicItem } from '..';
import intro from './intro.md?raw';
import top50QAndA from './top-50-q-and-a.md?raw';

export const cssTopics: TopicItem[] = [
  {
    id: 'intro',
    title: 'Introduction',
    content: intro,
  },
  {
    id: 'css-q-and-a',
    title: 'Top 50 Q&A',
    content: top50QAndA,
  },
];
