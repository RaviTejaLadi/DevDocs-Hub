import type { TopicItem } from '@/data/topics';
import concrete_ingredients from './concrete-ingredients.md?raw';
import introduction from './introduction.md?raw';
import mix_design from './mix-design.md?raw';
import prestressed_concrete from './prestressed-concrete.md?raw';
import reinforced_concrete from './reinforced-concrete.md?raw';

export const concreteTechnologyTopics: TopicItem[] = [
  { id: 'concrete-technology-concrete-ingredients', title: 'Concrete Ingredients', content: concrete_ingredients },
  { id: 'concrete-technology-introduction', title: '📖 Introduction', content: introduction },
  { id: 'concrete-technology-mix-design', title: 'Mix Design', content: mix_design },
  { id: 'concrete-technology-prestressed-concrete', title: 'Prestressed Concrete', content: prestressed_concrete },
  { id: 'concrete-technology-reinforced-concrete', title: 'Reinforced Concrete', content: reinforced_concrete },
];
