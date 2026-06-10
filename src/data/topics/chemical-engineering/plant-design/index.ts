import type { TopicItem } from '@/data/topics';
import economics from './economics.mdx?raw';
import introduction from './introduction.mdx?raw';
import piping_design from './piping-design.mdx?raw';
import safety_engineering from './safety-engineering.mdx?raw';

export const plantDesignTopics: TopicItem[] = [
  { id: 'plant-design-economics', title: 'Economics', content: economics },
  { id: 'plant-design-introduction', title: '📖 Introduction', content: introduction },
  { id: 'plant-design-piping-design', title: 'Piping Design', content: piping_design },
  { id: 'plant-design-safety-engineering', title: 'Safety Engineering', content: safety_engineering },
];
