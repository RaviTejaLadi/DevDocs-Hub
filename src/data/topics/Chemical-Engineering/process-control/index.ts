import type { TopicItem } from '@/data/topics';
import instrumentation from './instrumentation.md?raw';
import introduction from './introduction.md?raw';
import pid_control from './pid-control.md?raw';
import transfer_functions from './transfer-functions.md?raw';

export const processControlTopics: TopicItem[] = [
  { id: 'process-control-instrumentation', title: 'Instrumentation', content: instrumentation },
  { id: 'process-control-introduction', title: '📖 Introduction', content: introduction },
  { id: 'process-control-pid-control', title: 'Pid Control', content: pid_control },
  { id: 'process-control-transfer-functions', title: 'Transfer Functions', content: transfer_functions },
];
