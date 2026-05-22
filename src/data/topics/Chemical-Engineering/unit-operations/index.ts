import type { TopicItem } from '@/data/topics';
import distillation from './distillation.md?raw';
import drying from './drying.md?raw';
import heat_transfer from './heat-transfer.md?raw';
import introduction from './introduction.md?raw';
import mass_transfer from './mass-transfer.md?raw';

export const unitOperationsTopics: TopicItem[] = [
  { id: 'unit-operations-distillation', title: "Distillation", content: distillation },
  { id: 'unit-operations-drying', title: "Drying", content: drying },
  { id: 'unit-operations-heat-transfer', title: "Heat Transfer", content: heat_transfer },
  { id: 'unit-operations-introduction', title: "📖 Introduction", content: introduction },
  { id: 'unit-operations-mass-transfer', title: "Mass Transfer", content: mass_transfer },
];
