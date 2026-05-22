import type { TopicItem } from '@/data/topics';
import distribution from './distribution.md?raw';
import fault_analysis from './fault-analysis.md?raw';
import generation from './generation.md?raw';
import introduction from './introduction.md?raw';
import protection from './protection.md?raw';
import transmission from './transmission.md?raw';

export const powerSystemsTopics: TopicItem[] = [
  { id: 'power-systems-distribution', title: "Distribution", content: distribution },
  { id: 'power-systems-fault-analysis', title: "Fault Analysis", content: fault_analysis },
  { id: 'power-systems-generation', title: "Generation", content: generation },
  { id: 'power-systems-introduction', title: "📖 Introduction", content: introduction },
  { id: 'power-systems-protection', title: "Protection", content: protection },
  { id: 'power-systems-transmission', title: "Transmission", content: transmission },
];
