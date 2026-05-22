import type { TopicItem } from '@/data/topics';
import grammar from './grammar.md?raw';
import introduction from './introduction.md?raw';
import para_jumbles from './para-jumbles.md?raw';
import reading_comprehension from './reading-comprehension.md?raw';
import vocabulary from './vocabulary.md?raw';

export const verbalAbilityTopics: TopicItem[] = [
  { id: 'verbal-ability-grammar', title: "Grammar", content: grammar },
  { id: 'verbal-ability-introduction', title: "📖 Introduction", content: introduction },
  { id: 'verbal-ability-para-jumbles', title: "Para Jumbles", content: para_jumbles },
  { id: 'verbal-ability-reading-comprehension', title: "Reading Comprehension", content: reading_comprehension },
  { id: 'verbal-ability-vocabulary', title: "Vocabulary", content: vocabulary },
];
