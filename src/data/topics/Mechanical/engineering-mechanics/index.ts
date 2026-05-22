import type { TopicItem } from '@/data/topics';
import introduction from './introduction.md?raw';
import statics from './statics.md?raw';
import dynamics from './dynamics.md?raw';
import friction from './friction.md?raw';
import trussesAndFrames from './trusses-and-frames.md?raw';

export const engineeringMechanicsTopics: TopicItem[] = [
  { id: 'engineering-mechanics-introduction', title: '📖 Introduction to Engineering Mechanics', content: introduction },
  { id: 'engineering-mechanics-statics', title: '⚖️ Statics', content: statics },
  { id: 'engineering-mechanics-dynamics', title: '🏃 Dynamics', content: dynamics },
  { id: 'engineering-mechanics-friction', title: '🤝 Friction', content: friction },
  { id: 'engineering-mechanics-trusses', title: '🏗️ Trusses & Frames', content: trussesAndFrames },
];
