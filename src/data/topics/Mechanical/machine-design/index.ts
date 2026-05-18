import designProcess from './design-process.md?raw';
import stressStrain from './stress-strain.md?raw';
import type { TopicItem } from '@/data/topics';

export const machineDesignTopics: TopicItem[] = [
  {
    id: 'design-process',
    title: 'Design Process',
    content: designProcess,
  },
  {
    id: 'stress-strain',
    title: 'Stress & Strain',
    content: stressStrain,
  },
];
