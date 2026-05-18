import calculusBasics from './calculus-basics.md?raw';
import linearAlgebra from './linear-algebra.md?raw';
import probability from './probability.md?raw';
import type { TopicItem } from '@/data/topics';

export const mathematicsTopics: TopicItem[] = [
  {
    id: 'calculus-basics',
    title: 'Calculus Basics',
    content: calculusBasics,
  },
  {
    id: 'linear-algebra',
    title: 'Linear Algebra',
    content: linearAlgebra,
  },
  {
    id: 'probability',
    title: 'Probability & Statistics',
    content: probability,
  },
];
