import type { TopicItem } from '@/data/topics';
import economics from './economics.md?raw';
import introduction from './introduction.md?raw';
import piping_design from './piping-design.md?raw';
import safety_engineering from './safety-engineering.md?raw';

export const plantDesignTopics: TopicItem[] = [
  { id: 'plant-design-economics', title: 'Economics', content: economics },
  { id: 'plant-design-introduction', title: '📖 Introduction', content: introduction },
  { id: 'plant-design-piping-design', title: 'Piping Design', content: piping_design },
  { id: 'plant-design-safety-engineering', title: 'Safety Engineering', content: safety_engineering },
];
