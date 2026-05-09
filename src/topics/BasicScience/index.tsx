import type { Topic } from '@/topics';
import { Atom, FlaskConical, Calculator, Leaf } from 'lucide-react';

const physicsTopics: Topic = {
  id: 'physics',
  title: 'Physics',
  description: 'Mechanics, electromagnetism, optics and modern physics.',
  icon: <Atom className="h-5 w-5" />,
  type: 'physics',
  category: 'physics',
  items: [
    {
      id: 'newton-laws',
      title: "Newton's Laws of Motion",
      content:
        "# Newton's Laws of Motion\n\n1. An object in motion stays in motion unless acted on by an external force.\n2. `F = m·a`\n3. For every action there is an equal and opposite reaction.",
    },
    {
      id: 'work-energy',
      title: 'Work, Energy & Power',
      content: '# Work, Energy & Power\n\n`W = F · d`\n\n`KE = ½ m v²`\n\n`P = W / t`',
    },
    {
      id: 'electromagnetism',
      title: 'Electromagnetism',
      content: "# Electromagnetism\n\nCoulomb's law, electric and magnetic fields, Maxwell's equations.",
    },
  ],
};

const chemistryTopics: Topic = {
  id: 'chemistry',
  title: 'Chemistry',
  description: 'Atomic structure, bonding, reactions, and the periodic table.',
  icon: <FlaskConical className="h-5 w-5" />,
  type: 'chemistry',
  category: 'chemistry',
  items: [
    {
      id: 'periodic-table',
      title: 'The Periodic Table',
      content:
        '# The Periodic Table\n\nElements arranged by atomic number; trends in electronegativity, atomic radius and ionization energy.',
    },
    {
      id: 'chemical-bonding',
      title: 'Chemical Bonding',
      content:
        '# Chemical Bonding\n\n- Ionic bonds\n- Covalent bonds\n- Metallic bonds\n- Hydrogen bonding & van der Waals forces',
    },
    {
      id: 'stoichiometry',
      title: 'Stoichiometry',
      content: '# Stoichiometry\n\nQuantitative relationships between reactants and products in a chemical reaction.',
    },
  ],
};

const mathematicsTopics: Topic = {
  id: 'mathematics',
  title: 'Mathematics',
  description: 'Calculus, algebra, statistics and discrete mathematics.',
  icon: <Calculator className="h-5 w-5" />,
  type: 'mathematics',
  category: 'mathematics',
  items: [
    {
      id: 'calculus-basics',
      title: 'Calculus Basics',
      content: '# Calculus Basics\n\nLimits, derivatives and integrals form the foundations of calculus.',
    },
    {
      id: 'linear-algebra',
      title: 'Linear Algebra',
      content: '# Linear Algebra\n\nVectors, matrices, eigenvalues and linear transformations.',
    },
    {
      id: 'probability',
      title: 'Probability & Statistics',
      content: '# Probability & Statistics\n\nRandom variables, distributions, hypothesis testing and inference.',
    },
  ],
};

const biologyTopics: Topic = {
  id: 'biology',
  title: 'Biology',
  description: 'Cell biology, genetics, ecology and evolution.',
  icon: <Leaf className="h-5 w-5" />,
  type: 'biology',
  category: 'biology',
  items: [
    {
      id: 'cell-biology',
      title: 'Cell Biology',
      content: '# Cell Biology\n\nThe cell is the basic structural and functional unit of all known living organisms.',
    },
    {
      id: 'genetics',
      title: 'Genetics',
      content: '# Genetics\n\nThe study of genes, genetic variation and heredity in living organisms.',
    },
  ],
};

export const basicScienceTopics: Topic[] = [physicsTopics, chemistryTopics, mathematicsTopics, biologyTopics];
