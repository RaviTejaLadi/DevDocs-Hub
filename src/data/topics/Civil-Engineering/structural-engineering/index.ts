import type { TopicItem } from '@/data/topics';
import beams from './beams.md?raw';
import columns from './columns.md?raw';
import introduction from './introduction.md?raw';
import load_analysis from './load-analysis.md?raw';
import slabs from './slabs.md?raw';
import trusses from './trusses.md?raw';

export const structuralEngineeringTopics: TopicItem[] = [
  { id: 'structural-engineering-beams', title: "Beams", content: beams },
  { id: 'structural-engineering-columns', title: "Columns", content: columns },
  { id: 'structural-engineering-introduction', title: "📖 Introduction", content: introduction },
  { id: 'structural-engineering-load-analysis', title: "Load Analysis", content: load_analysis },
  { id: 'structural-engineering-slabs', title: "Slabs", content: slabs },
  { id: 'structural-engineering-trusses', title: "Trusses", content: trusses },
];
