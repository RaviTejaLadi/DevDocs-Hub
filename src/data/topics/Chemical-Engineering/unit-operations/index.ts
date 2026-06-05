import type { TopicItem } from '@/data/topics';
import distillation from './distillation.mdx?raw';
import drying from './drying.mdx?raw';
import heat_transfer from './heat-transfer.mdx?raw';
import introduction from './introduction.mdx?raw';
import mass_transfer from './mass-transfer.mdx?raw';

export const unitOperationsTopics: TopicItem[] = [
  { id: 'unit-operations-distillation', title: 'Distillation', content: distillation },
  { id: 'unit-operations-drying', title: 'Drying', content: drying },
  { id: 'unit-operations-heat-transfer', title: 'Heat Transfer', content: heat_transfer },
  { id: 'unit-operations-introduction', title: '📖 Introduction', content: introduction },
  { id: 'unit-operations-mass-transfer', title: 'Mass Transfer', content: mass_transfer },
];
