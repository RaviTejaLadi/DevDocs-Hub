import type { TopicItem } from '@/data/topics';
import ac_circuits from './ac-circuits.md?raw';
import introduction from './introduction.md?raw';
import kirchhoff_laws from './kirchhoff-laws.md?raw';
import network_theorems from './network-theorems.md?raw';
import ohms_law from './ohms-law.md?raw';
import transient_analysis from './transient-analysis.md?raw';

export const circuitTheoryTopics: TopicItem[] = [
  { id: 'circuit-theory-ac-circuits', title: 'Ac Circuits', content: ac_circuits },
  { id: 'circuit-theory-introduction', title: '📖 Introduction', content: introduction },
  { id: 'circuit-theory-kirchhoff-laws', title: "Kirchhoff's Laws", content: kirchhoff_laws },
  { id: 'circuit-theory-network-theorems', title: 'Network Theorems', content: network_theorems },
  { id: 'circuit-theory-ohms-law', title: "Ohm's Law", content: ohms_law },
  { id: 'circuit-theory-transient-analysis', title: 'Transient Analysis', content: transient_analysis },
];
