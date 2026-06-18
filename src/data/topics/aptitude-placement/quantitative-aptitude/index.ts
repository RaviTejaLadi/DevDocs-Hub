import type { TopicItem } from '@/data/topics';
import introduction from './introduction.mdx?raw';
import number_system from './number-system.mdx?raw';
import percentages from './percentages.mdx?raw';
import profit_loss from './profit-loss.mdx?raw';
import ratios_proportions from './ratios-proportions.mdx?raw';
import time_speed_distance from './time-speed-distance.mdx?raw';
import time_work from './time-work.mdx?raw';

export const quantitativeAptitudeTopics: TopicItem[] = [
  { id: 'quantitative-aptitude-introduction', title: '📖 Introduction', content: introduction },
  { id: 'quantitative-aptitude-number-system', title: '🔢 Number System', content: number_system },
  { id: 'quantitative-aptitude-percentages', title: '📊 Percentages', content: percentages },
  { id: 'quantitative-aptitude-profit-loss', title: '💰 Profit Loss', content: profit_loss },
  { id: 'quantitative-aptitude-ratios-proportions', title: '⚖️ Ratios Proportions', content: ratios_proportions },
  { id: 'quantitative-aptitude-time-speed-distance', title: '⏱️ Time Speed Distance', content: time_speed_distance },
  { id: 'quantitative-aptitude-time-work', title: '⏳ Time Work', content: time_work },
];
