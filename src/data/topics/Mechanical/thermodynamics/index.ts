import firstLaw from './first-law.md?raw';
import secondLaw from './second-law.md?raw';
import thermoCycles from './thermo-cycles.md?raw';
import type { TopicItem } from '@/data/topics';

export const thermodynamicsTopics: TopicItem[] = [
  {
    id: 'first-law',
    title: 'First Law of Thermodynamics',
    content: firstLaw,
  },
  {
    id: 'second-law',
    title: 'Second Law of Thermodynamics',
    content: secondLaw,
  },
  {
    id: 'thermo-cycles',
    title: 'Thermodynamic Cycles',
    content: thermoCycles,
  },
];
