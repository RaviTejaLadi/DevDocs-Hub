import type { TopicItem } from '@/data/topics';
import highway_engineering from './highway-engineering.md?raw';
import introduction from './introduction.md?raw';
import railway_engineering from './railway-engineering.md?raw';
import traffic_engineering from './traffic-engineering.md?raw';

export const transportationTopics: TopicItem[] = [
  { id: 'transportation-highway-engineering', title: 'Highway Engineering', content: highway_engineering },
  { id: 'transportation-introduction', title: '📖 Introduction', content: introduction },
  { id: 'transportation-railway-engineering', title: 'Railway Engineering', content: railway_engineering },
  { id: 'transportation-traffic-engineering', title: 'Traffic Engineering', content: traffic_engineering },
];
