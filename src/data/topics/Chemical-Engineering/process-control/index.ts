import type { TopicItem } from '@/data/topics';
import instrumentation from './instrumentation.mdx?raw';
import introduction from './introduction.mdx?raw';
import pid_control from './pid-control.mdx?raw';
import transfer_functions from './transfer-functions.mdx?raw';

export const processControlTopics: TopicItem[] = [
  { id: 'process-control-instrumentation', title: 'Instrumentation', content: instrumentation },
  { id: 'process-control-introduction', title: '📖 Introduction', content: introduction },
  { id: 'process-control-pid-control', title: 'Pid Control', content: pid_control },
  { id: 'process-control-transfer-functions', title: 'Transfer Functions', content: transfer_functions },
];
