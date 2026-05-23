import type { TopicItem } from '@/data/topics';
import chain_surveying from './chain-surveying.md?raw';
import compass_surveying from './compass-surveying.md?raw';
import introduction from './introduction.md?raw';
import levelling from './levelling.md?raw';
import theodolite from './theodolite.md?raw';

export const surveyingTopics: TopicItem[] = [
  { id: 'surveying-chain-surveying', title: 'Chain Surveying', content: chain_surveying },
  { id: 'surveying-compass-surveying', title: 'Compass Surveying', content: compass_surveying },
  { id: 'surveying-introduction', title: '📖 Introduction', content: introduction },
  { id: 'surveying-levelling', title: 'Levelling', content: levelling },
  { id: 'surveying-theodolite', title: 'Theodolite', content: theodolite },
];
