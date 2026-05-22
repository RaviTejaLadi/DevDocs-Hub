import type { TopicItem } from '@/data/topics';
import block_diagrams from './block-diagrams.md?raw';
import introduction from './introduction.md?raw';
import pid_controllers from './pid-controllers.md?raw';
import stability from './stability.md?raw';
import transfer_functions from './transfer-functions.md?raw';

export const controlSystemsTopics: TopicItem[] = [
  { id: 'control-systems-block-diagrams', title: "Block Diagrams", content: block_diagrams },
  { id: 'control-systems-introduction', title: "📖 Introduction", content: introduction },
  { id: 'control-systems-pid-controllers', title: "Pid Controllers", content: pid_controllers },
  { id: 'control-systems-stability', title: "Stability", content: stability },
  { id: 'control-systems-transfer-functions', title: "Transfer Functions", content: transfer_functions },
];
