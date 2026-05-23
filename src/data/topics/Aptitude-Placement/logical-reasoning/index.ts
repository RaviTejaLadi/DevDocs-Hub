import type { TopicItem } from '@/data/topics';
import blood_relations from './blood-relations.md?raw';
import coding_decoding from './coding-decoding.md?raw';
import direction_sense from './direction-sense.md?raw';
import introduction from './introduction.md?raw';
import puzzles from './puzzles.md?raw';
import syllogisms from './syllogisms.md?raw';

export const logicalReasoningTopics: TopicItem[] = [
  { id: 'logical-reasoning-blood-relations', title: 'Blood Relations', content: blood_relations },
  { id: 'logical-reasoning-coding-decoding', title: 'Coding Decoding', content: coding_decoding },
  { id: 'logical-reasoning-direction-sense', title: 'Direction Sense', content: direction_sense },
  { id: 'logical-reasoning-introduction', title: '📖 Introduction', content: introduction },
  { id: 'logical-reasoning-puzzles', title: 'Puzzles', content: puzzles },
  { id: 'logical-reasoning-syllogisms', title: 'Syllogisms', content: syllogisms },
];
