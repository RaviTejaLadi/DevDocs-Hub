import type { TopicItem } from '@/data/topics';
import _8085_architecture from './8085-architecture.mdx?raw';
import assembly_language from './assembly-language.mdx?raw';
import embedded_basics from './embedded-basics.mdx?raw';
import interrupts from './interrupts.mdx?raw';
import introduction from './introduction.mdx?raw';

export const microprocessorsTopics: TopicItem[] = [
  { id: 'microprocessors-8085-architecture', title: '8085 Architecture', content: _8085_architecture },
  { id: 'microprocessors-assembly-language', title: 'Assembly Language', content: assembly_language },
  { id: 'microprocessors-embedded-basics', title: 'Embedded Basics', content: embedded_basics },
  { id: 'microprocessors-interrupts', title: 'Interrupts', content: interrupts },
  { id: 'microprocessors-introduction', title: '📖 Introduction', content: introduction },
];
