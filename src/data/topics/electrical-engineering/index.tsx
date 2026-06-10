import type { Topic } from '@/data/topics';
import { Zap, Cable, Factory, Battery, SlidersHorizontal } from 'lucide-react';
import { circuitTheoryTopics } from './circuit-theory';
import { electricalMachinesTopics } from './electrical-machines';
import { powerSystemsTopics } from './power-systems';
import { powerElectronicsTopics } from './power-electronics';
import { controlSystemsTopics } from './control-systems';

const CATEGORY = 'electrical-engineering';

export const electricalEngineeringTopics: Topic[] = [
  {
    id: 'circuit-theory',
    title: 'Circuit Theory',
    description: 'DC/AC circuits, network theorems, and transient analysis.',
    icon: <Zap className="h-5 w-5" />,
    type: CATEGORY,
    category: CATEGORY,
    items: circuitTheoryTopics,
  },
  {
    id: 'electrical-machines',
    title: 'Electrical Machines',
    description: 'Transformers, DC machines, induction and synchronous machines.',
    icon: <Cable className="h-5 w-5" />,
    type: CATEGORY,
    category: CATEGORY,
    items: electricalMachinesTopics,
  },
  {
    id: 'power-systems',
    title: 'Power Systems',
    description: 'Generation, transmission, distribution, faults, and protection.',
    icon: <Factory className="h-5 w-5" />,
    type: CATEGORY,
    category: CATEGORY,
    items: powerSystemsTopics,
  },
  {
    id: 'power-electronics',
    title: 'Power Electronics',
    description: 'Rectifiers, inverters, choppers, and electric drives.',
    icon: <Battery className="h-5 w-5" />,
    type: CATEGORY,
    category: CATEGORY,
    items: powerElectronicsTopics,
  },
  {
    id: 'control-systems',
    title: 'Control Systems',
    description: 'Transfer functions, stability, and PID controllers.',
    icon: <SlidersHorizontal className="h-5 w-5" />,
    type: CATEGORY,
    category: CATEGORY,
    items: controlSystemsTopics,
  },
];
