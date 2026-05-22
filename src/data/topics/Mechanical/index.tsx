import type { Topic } from '@/data/topics';
import { Cog, Thermometer, Wrench, GitBranch, Flame, Hammer, Box, Layers } from 'lucide-react';

import { thermodynamicsTopics } from './thermodynamics';
import { fluidMechanicsTopics } from './fluid-mechanics';
import { machineDesignTopics } from './machine-design';
import { manufacturingTopics } from './manufacturing';
import { solidMechanicsTopics } from './solid-mechanics';
import { heatTransferTopics } from './heat-transfer';
import { engineeringMechanicsTopics } from './engineering-mechanics';
import { materialsScienceTopics } from './materials-science';

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
    id: 'heat-transfer',
    title: 'Heat Transfer',
    description: 'Conduction, convection, radiation, and heat exchangers.',
    icon: <Flame className="h-5 w-5" />,
    type: MECHANICAL_CATEGORY,
    category: MECHANICAL_CATEGORY,
    items: heatTransferTopics,
  },
  {
    id: 'engineering-mechanics',
    title: 'Engineering Mechanics',
    description: 'Statics, dynamics, and analysis of forces on structures.',
    icon: <Hammer className="h-5 w-5" />,
    type: MECHANICAL_CATEGORY,
    category: MECHANICAL_CATEGORY,
    items: engineeringMechanicsTopics,
  },
  {
    id: 'solid-mechanics',
    title: 'Solid Mechanics',
    description: 'Stress, strain, bending, torsion, and structural analysis.',
    icon: <Box className="h-5 w-5" />,
    type: MECHANICAL_CATEGORY,
    category: MECHANICAL_CATEGORY,
    items: solidMechanicsTopics,
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
    id: 'materials-science',
    title: 'Materials Science',
    description: 'Properties of engineering materials and heat treatment.',
    icon: <Layers className="h-5 w-5" />,
    type: MECHANICAL_CATEGORY,
    category: MECHANICAL_CATEGORY,
    items: materialsScienceTopics,
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    description: 'Manufacturing processes, CNC, quality control, and metrology.',
    icon: <Wrench className="h-5 w-5" />,
    type: MECHANICAL_CATEGORY,
    category: MECHANICAL_CATEGORY,
    items: manufacturingTopics,
  },
];
