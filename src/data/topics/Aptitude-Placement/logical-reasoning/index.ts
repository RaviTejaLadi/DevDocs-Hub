import type { TopicItem } from '@/data/topics';
import blood_relations from './blood-relations.mdx?raw';
import coding_decoding from './coding-decoding.mdx?raw';
import direction_sense from './direction-sense.mdx?raw';
import introduction from './introduction.mdx?raw';
import puzzles from './puzzles.mdx?raw';
import syllogisms from './syllogisms.mdx?raw';

export const logicalReasoningTopics: TopicItem[] = [
  { id: 'logical-reasoning-blood-relations', title: 'Blood Relations', content: blood_relations },
  { id: 'logical-reasoning-coding-decoding', title: 'Coding Decoding', content: coding_decoding },
  { id: 'logical-reasoning-direction-sense', title: 'Direction Sense', content: direction_sense },
  { id: 'logical-reasoning-introduction', title: '📖 Introduction', content: introduction },
  { id: 'logical-reasoning-puzzles', title: 'Puzzles', content: puzzles },
  { id: 'logical-reasoning-syllogisms', title: 'Syllogisms', content: syllogisms },
];
