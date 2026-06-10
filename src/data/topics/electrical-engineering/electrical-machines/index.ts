import type { TopicItem } from '@/data/topics';
import dc_machines from './dc-machines.mdx?raw';
import induction_machines from './induction-machines.mdx?raw';
import introduction from './introduction.mdx?raw';
import synchronous_machines from './synchronous-machines.mdx?raw';
import transformers from './transformers.mdx?raw';

export const electricalMachinesTopics: TopicItem[] = [
  { id: 'electrical-machines-dc-machines', title: 'Dc Machines', content: dc_machines },
  { id: 'electrical-machines-induction-machines', title: 'Induction Machines', content: induction_machines },
  { id: 'electrical-machines-introduction', title: '📖 Introduction', content: introduction },
  { id: 'electrical-machines-synchronous-machines', title: 'Synchronous Machines', content: synchronous_machines },
  { id: 'electrical-machines-transformers', title: 'Transformers', content: transformers },
];
