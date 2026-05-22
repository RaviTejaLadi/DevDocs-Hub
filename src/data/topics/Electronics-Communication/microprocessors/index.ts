import type { TopicItem } from '@/data/topics';
import _8085_architecture from './8085-architecture.md?raw';
import assembly_language from './assembly-language.md?raw';
import embedded_basics from './embedded-basics.md?raw';
import interrupts from './interrupts.md?raw';
import introduction from './introduction.md?raw';

export const microprocessorsTopics: TopicItem[] = [
  { id: 'microprocessors-8085-architecture', title: "8085 Architecture", content: _8085_architecture },
  { id: 'microprocessors-assembly-language', title: "Assembly Language", content: assembly_language },
  { id: 'microprocessors-embedded-basics', title: "Embedded Basics", content: embedded_basics },
  { id: 'microprocessors-interrupts', title: "Interrupts", content: interrupts },
  { id: 'microprocessors-introduction', title: "📖 Introduction", content: introduction },
];
