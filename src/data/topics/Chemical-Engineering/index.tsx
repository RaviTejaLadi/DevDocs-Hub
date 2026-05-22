import type { Topic } from '@/data/topics';
import { FlaskConical, ArrowRightLeft, Activity, Factory } from 'lucide-react';
import { unitOperationsTopics } from './unit-operations';
import { chemicalReactionEngineeringTopics } from './chemical-reaction-engineering';
import { processControlTopics } from './process-control';
import { plantDesignTopics } from './plant-design';

const CATEGORY = 'chemical-engineering';

export const chemicalEngineeringTopics: Topic[] = [
  {
    id: 'unit-operations',
    title: '⚗️ Unit Operations',
    description: 'Mass transfer, heat transfer, distillation, and separation processes.',
    icon: <ArrowRightLeft className="h-5 w-5" />,
    type: CATEGORY,
    category: CATEGORY,
    items: unitOperationsTopics,
  },
  {
    id: 'chemical-reaction-engineering',
    title: '🔬 Chemical Reaction Engineering',
    description: 'Reaction kinetics, reactor design, and catalysis.',
    icon: <FlaskConical className="h-5 w-5" />,
    type: CATEGORY,
    category: CATEGORY,
    items: chemicalReactionEngineeringTopics,
  },
  {
    id: 'process-control',
    title: '🎛️ Process Control',
    description: 'Instrumentation, PID control, and process dynamics.',
    icon: <Activity className="h-5 w-5" />,
    type: CATEGORY,
    category: CATEGORY,
    items: processControlTopics,
  },
  {
    id: 'plant-design',
    title: '🏭 Plant Design',
    description: 'Piping, safety engineering, and plant economics.',
    icon: <Factory className="h-5 w-5" />,
    type: CATEGORY,
    category: CATEGORY,
    items: plantDesignTopics,
  },
];
