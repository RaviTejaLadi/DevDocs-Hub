import type { TopicItem } from '@/data/topics';
import chain_surveying from './chain-surveying.mdx?raw';
import compass_surveying from './compass-surveying.mdx?raw';
import introduction from './introduction.mdx?raw';
import levelling from './levelling.mdx?raw';
import theodolite from './theodolite.mdx?raw';

export const surveyingTopics: TopicItem[] = [
  { id: 'surveying-chain-surveying', title: 'Chain Surveying', content: chain_surveying },
  { id: 'surveying-compass-surveying', title: 'Compass Surveying', content: compass_surveying },
  { id: 'surveying-introduction', title: '📖 Introduction', content: introduction },
  { id: 'surveying-levelling', title: 'Levelling', content: levelling },
  { id: 'surveying-theodolite', title: 'Theodolite', content: theodolite },
];
