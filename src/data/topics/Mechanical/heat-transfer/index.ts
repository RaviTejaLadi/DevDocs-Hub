import type { TopicItem } from '@/data/topics';
import introduction from './introduction.mdx?raw';
import conduction from './conduction.mdx?raw';
import convection from './convection.mdx?raw';
import radiation from './radiation.mdx?raw';
import heatExchangers from './heat-exchangers.mdx?raw';

export const heatTransferTopics: TopicItem[] = [
  { id: 'heat-transfer-introduction', title: '📖 Introduction to Heat Transfer', content: introduction },
  { id: 'heat-transfer-conduction', title: '🔥 Conduction', content: conduction },
  { id: 'heat-transfer-convection', title: '🌬️ Convection', content: convection },
  { id: 'heat-transfer-radiation', title: '☀️ Radiation', content: radiation },
  { id: 'heat-transfer-heat-exchangers', title: '♨️ Heat Exchangers', content: heatExchangers },
];
