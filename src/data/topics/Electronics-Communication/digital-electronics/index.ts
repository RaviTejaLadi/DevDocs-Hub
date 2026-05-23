import type { TopicItem } from '@/data/topics';
import boolean_algebra from './boolean-algebra.md?raw';
import combinational_circuits from './combinational-circuits.md?raw';
import flip_flops from './flip-flops.md?raw';
import introduction from './introduction.md?raw';
import logic_gates from './logic-gates.md?raw';
import sequential_circuits from './sequential-circuits.md?raw';

export const digitalElectronicsTopics: TopicItem[] = [
  { id: 'digital-electronics-boolean-algebra', title: 'Boolean Algebra', content: boolean_algebra },
  {
    id: 'digital-electronics-combinational-circuits',
    title: 'Combinational Circuits',
    content: combinational_circuits,
  },
  { id: 'digital-electronics-flip-flops', title: 'Flip Flops', content: flip_flops },
  { id: 'digital-electronics-introduction', title: '📖 Introduction', content: introduction },
  { id: 'digital-electronics-logic-gates', title: 'Logic Gates', content: logic_gates },
  { id: 'digital-electronics-sequential-circuits', title: 'Sequential Circuits', content: sequential_circuits },
];
