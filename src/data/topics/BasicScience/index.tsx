import type { Topic } from '@/data/topics';
import { Atom, FlaskConical, Calculator, Leaf } from 'lucide-react';

import { physicsTopics } from './physics';
import { chemistryTopics } from './chemistry';
import { mathematicsTopics } from './mathematics';
import { biologyTopics } from './biology';

export const basicScienceTopics: Topic[] = [
  {
    id: 'physics',
    title: 'Physics',
    description: 'Mechanics, electromagnetism, optics and modern physics.',
    icon: <Atom className="h-5 w-5" />,
    type: 'physics',
    category: 'physics',
    items: physicsTopics,
  },
  {
    id: 'chemistry',
    title: 'Chemistry',
    description: 'Atomic structure, bonding, reactions, and the periodic table.',
    icon: <FlaskConical className="h-5 w-5" />,
    type: 'chemistry',
    category: 'chemistry',
    items: chemistryTopics,
  },
  {
    id: 'mathematics',
    title: 'Mathematics',
    description: 'Calculus, algebra, statistics and discrete mathematics.',
    icon: <Calculator className="h-5 w-5" />,
    type: 'mathematics',
    category: 'mathematics',
    items: mathematicsTopics,
  },
  {
    id: 'biology',
    title: 'Biology',
    description: 'Cell biology, genetics, ecology and evolution.',
    icon: <Leaf className="h-5 w-5" />,
    type: 'biology',
    category: 'biology',
    items: biologyTopics,
  },
];
