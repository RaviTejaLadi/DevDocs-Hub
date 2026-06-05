import type { TopicItem } from '@/data/topics';
import beams from './beams.mdx?raw';
import columns from './columns.mdx?raw';
import introduction from './introduction.mdx?raw';
import load_analysis from './load-analysis.mdx?raw';
import slabs from './slabs.mdx?raw';
import trusses from './trusses.mdx?raw';

export const structuralEngineeringTopics: TopicItem[] = [
  { id: 'structural-engineering-beams', title: 'Beams', content: beams },
  { id: 'structural-engineering-columns', title: 'Columns', content: columns },
  { id: 'structural-engineering-introduction', title: '📖 Introduction', content: introduction },
  { id: 'structural-engineering-load-analysis', title: 'Load Analysis', content: load_analysis },
  { id: 'structural-engineering-slabs', title: 'Slabs', content: slabs },
  { id: 'structural-engineering-trusses', title: 'Trusses', content: trusses },
];
