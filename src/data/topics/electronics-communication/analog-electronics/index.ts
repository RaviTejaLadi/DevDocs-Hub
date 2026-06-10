import type { TopicItem } from '@/data/topics';
import bjt from './bjt.mdx?raw';
import diodes from './diodes.mdx?raw';
import introduction from './introduction.mdx?raw';
import mosfet from './mosfet.mdx?raw';
import operational_amplifiers from './operational-amplifiers.mdx?raw';

export const analogElectronicsTopics: TopicItem[] = [
  { id: 'analog-electronics-bjt', title: 'Bjt', content: bjt },
  { id: 'analog-electronics-diodes', title: 'Diodes', content: diodes },
  { id: 'analog-electronics-introduction', title: '📖 Introduction', content: introduction },
  { id: 'analog-electronics-mosfet', title: 'Mosfet', content: mosfet },
  { id: 'analog-electronics-operational-amplifiers', title: 'Operational Amplifiers', content: operational_amplifiers },
];
