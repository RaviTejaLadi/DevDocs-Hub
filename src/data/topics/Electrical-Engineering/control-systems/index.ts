import type { TopicItem } from '@/data/topics';
import block_diagrams from './block-diagrams.mdx?raw';
import introduction from './introduction.mdx?raw';
import pid_controllers from './pid-controllers.mdx?raw';
import stability from './stability.mdx?raw';
import transfer_functions from './transfer-functions.mdx?raw';

export const controlSystemsTopics: TopicItem[] = [
  { id: 'control-systems-block-diagrams', title: 'Block Diagrams', content: block_diagrams },
  { id: 'control-systems-introduction', title: '📖 Introduction', content: introduction },
  { id: 'control-systems-pid-controllers', title: 'Pid Controllers', content: pid_controllers },
  { id: 'control-systems-stability', title: 'Stability', content: stability },
  { id: 'control-systems-transfer-functions', title: 'Transfer Functions', content: transfer_functions },
];
