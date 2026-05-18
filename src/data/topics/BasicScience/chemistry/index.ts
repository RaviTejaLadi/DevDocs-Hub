import periodicTable from './periodic-table.md?raw';
import chemicalBonding from './chemical-bonding.md?raw';
import stoichiometry from './stoichiometry.md?raw';
import type { TopicItem } from '@/data/topics';

export const chemistryTopics: TopicItem[] = [
  {
    id: 'periodic-table',
    title: 'The Periodic Table',
    content: periodicTable,
  },
  {
    id: 'chemical-bonding',
    title: 'Chemical Bonding',
    content: chemicalBonding,
  },
  {
    id: 'stoichiometry',
    title: 'Stoichiometry',
    content: stoichiometry,
  },
];
