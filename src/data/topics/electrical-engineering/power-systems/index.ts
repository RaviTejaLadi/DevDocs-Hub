import type { TopicItem } from '@/data/topics';
import distribution from './distribution.mdx?raw';
import fault_analysis from './fault-analysis.mdx?raw';
import generation from './generation.mdx?raw';
import introduction from './introduction.mdx?raw';
import protection from './protection.mdx?raw';
import transmission from './transmission.mdx?raw';

export const powerSystemsTopics: TopicItem[] = [
  { id: 'power-systems-distribution', title: 'Distribution', content: distribution },
  { id: 'power-systems-fault-analysis', title: 'Fault Analysis', content: fault_analysis },
  { id: 'power-systems-generation', title: 'Generation', content: generation },
  { id: 'power-systems-introduction', title: '📖 Introduction', content: introduction },
  { id: 'power-systems-protection', title: 'Protection', content: protection },
  { id: 'power-systems-transmission', title: 'Transmission', content: transmission },
];
