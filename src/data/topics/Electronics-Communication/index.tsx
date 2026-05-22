import type { Topic } from '@/data/topics';
import { Cpu, Radio, Activity, Satellite, Microchip } from 'lucide-react';
import { digitalElectronicsTopics } from './digital-electronics';
import { analogElectronicsTopics } from './analog-electronics';
import { signalsSystemsTopics } from './signals-systems';
import { communicationSystemsTopics } from './communication-systems';
import { microprocessorsTopics } from './microprocessors';

const CATEGORY = 'electronics-communication';

export const electronicsCommunicationTopics: Topic[] = [
  {
    id: 'digital-electronics',
    title: 'Digital Electronics',
    description: 'Logic gates, combinational and sequential circuits.',
    icon: <Cpu className="h-5 w-5" />,
    type: CATEGORY,
    category: CATEGORY,
    items: digitalElectronicsTopics,
  },
  {
    id: 'analog-electronics',
    title: 'Analog Electronics',
    description: 'Diodes, transistors, and operational amplifiers.',
    icon: <Radio className="h-5 w-5" />,
    type: CATEGORY,
    category: CATEGORY,
    items: analogElectronicsTopics,
  },
  {
    id: 'signals-systems',
    title: 'Signals & Systems',
    description: 'Fourier, Laplace, Z-transform, and sampling.',
    icon: <Activity className="h-5 w-5" />,
    type: CATEGORY,
    category: CATEGORY,
    items: signalsSystemsTopics,
  },
  {
    id: 'communication-systems',
    title: 'Communication Systems',
    description: 'Modulation, digital communication, and noise.',
    icon: <Satellite className="h-5 w-5" />,
    type: CATEGORY,
    category: CATEGORY,
    items: communicationSystemsTopics,
  },
  {
    id: 'microprocessors',
    title: 'Microprocessors',
    description: '8085 architecture, assembly, interrupts, and embedded basics.',
    icon: <Microchip className="h-5 w-5" />,
    type: CATEGORY,
    category: CATEGORY,
    items: microprocessorsTopics,
  },
];
