import type { TopicItem } from '@/data/topics';
import catalysis from './catalysis.md?raw';
import chemical_reactors from './chemical-reactors.md?raw';
import introduction from './introduction.md?raw';
import reaction_kinetics from './reaction-kinetics.md?raw';

export const chemicalReactionEngineeringTopics: TopicItem[] = [
  { id: 'chemical-reaction-engineering-catalysis', title: 'Catalysis', content: catalysis },
  { id: 'chemical-reaction-engineering-chemical-reactors', title: 'Chemical Reactors', content: chemical_reactors },
  { id: 'chemical-reaction-engineering-introduction', title: '📖 Introduction', content: introduction },
  { id: 'chemical-reaction-engineering-reaction-kinetics', title: 'Reaction Kinetics', content: reaction_kinetics },
];
