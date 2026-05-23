import type { TopicItem } from '@/data/topics';
import bjt from './bjt.md?raw';
import diodes from './diodes.md?raw';
import introduction from './introduction.md?raw';
import mosfet from './mosfet.md?raw';
import operational_amplifiers from './operational-amplifiers.md?raw';

export const analogElectronicsTopics: TopicItem[] = [
  { id: 'analog-electronics-bjt', title: 'Bjt', content: bjt },
  { id: 'analog-electronics-diodes', title: 'Diodes', content: diodes },
  { id: 'analog-electronics-introduction', title: '📖 Introduction', content: introduction },
  { id: 'analog-electronics-mosfet', title: 'Mosfet', content: mosfet },
  { id: 'analog-electronics-operational-amplifiers', title: 'Operational Amplifiers', content: operational_amplifiers },
];
