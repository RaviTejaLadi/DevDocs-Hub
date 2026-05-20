import type { Topic } from '@/data/topics';
import { Cog, Thermometer, Wrench, GitBranch } from 'lucide-react';

import { thermodynamicsTopics } from './thermodynamics';
import { fluidMechanicsTopics } from './fluid-mechanics';
import { machineDesignTopics } from './machine-design';
import { manufacturingTopics } from './manufacturing';

const MECHANICAL_CATEGORY = 'mechanical-engineering';

export const mechanicalTopics: Topic[] = [
  {
    id: 'thermodynamics',
    title: 'Thermodynamics',
    description: 'Laws of thermodynamics, cycles, and energy conversion.',
    icon: <Thermometer className="h-5 w-5" />,
    type: MECHANICAL_CATEGORY,
    category: MECHANICAL_CATEGORY,
    items: thermodynamicsTopics,
  },
  {
    id: 'fluid-mechanics',
    title: 'Fluid Mechanics',
    description: 'Behavior of liquids and gases at rest and in motion.',
    icon: <GitBranch className="h-5 w-5" />,
    type: MECHANICAL_CATEGORY,
    category: MECHANICAL_CATEGORY,
    items: fluidMechanicsTopics,
  },
  {
    id: 'machine-design',
    title: 'Machine Design',
    description: 'Design of mechanical components and systems.',
    icon: <Cog className="h-5 w-5" />,
    type: MECHANICAL_CATEGORY,
    category: MECHANICAL_CATEGORY,
    items: machineDesignTopics,
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    description: 'Manufacturing processes and tooling.',
    icon: <Wrench className="h-5 w-5" />,
    type: MECHANICAL_CATEGORY,
    category: MECHANICAL_CATEGORY,
    items: manufacturingTopics,
  },
];
