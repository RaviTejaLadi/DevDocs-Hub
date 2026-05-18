import newtonLaws from './newton-laws.md?raw';
import workEnergy from './work-energy.md?raw';
import electromagnetism from './electromagnetism.md?raw';
import type { TopicItem } from '@/data/topics';

export const physicsTopics: TopicItem[] = [
  {
    id: 'newton-laws',
    title: "Newton's Laws of Motion",
    content: newtonLaws,
  },
  {
    id: 'work-energy',
    title: 'Work, Energy & Power',
    content: workEnergy,
  },
  {
    id: 'electromagnetism',
    title: 'Electromagnetism',
    content: electromagnetism,
  },
];
