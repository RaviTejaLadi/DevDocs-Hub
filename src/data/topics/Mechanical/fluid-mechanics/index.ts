import type { TopicItem } from '@/data/topics';
import fluidIntroduction from './introduction.md?raw';
import fluidProperties from './fluid-properties.md?raw';
import fluidStatics from './fluid-statics.md?raw';
import bernoulliEquation from './bernoulli-equation.md?raw';
import continuityEquation from './continuity-equation.md?raw';
import momentumEquation from './momentum-equation.md?raw';
import reynoldsNumber from './reynolds-number.md?raw';
import dragAndLift from './drag-and-lift.md?raw';
import viscousFlow from './viscous-flow.md?raw';
import turbomachinery from './turbomachinery.md?raw';

export const fluidMechanicsTopics: TopicItem[] = [
  {
    id: 'fluid-fundamentals',
    title: '📖 Fundamentals',
    content: '',
    items: [
      { id: 'fluid-introduction', title: '📖 Introduction to Fluid Mechanics', content: fluidIntroduction },
      { id: 'fluid-properties', title: '💧 Properties of Fluids', content: fluidProperties },
      { id: 'fluid-statics', title: '⚖️ Fluid Statics', content: fluidStatics },
    ],
  },
  {
    id: 'fluid-dynamics',
    title: '🌊 Fluid Dynamics',
    content: '',
    items: [
      { id: 'bernoulli-equation', title: "📐 Bernoulli's Equation", content: bernoulliEquation },
      { id: 'fluid-continuity', title: '🔗 Continuity Equation', content: continuityEquation },
      { id: 'fluid-momentum', title: '➡️ Momentum Equation', content: momentumEquation },
      { id: 'fluid-reynolds-number', title: '🔢 Reynolds Number', content: reynoldsNumber },
      { id: 'fluid-viscous-flow', title: '🌀 Viscous Flow', content: viscousFlow },
      { id: 'fluid-drag-lift', title: '✈️ Drag & Lift', content: dragAndLift },
    ],
  },
  {
    id: 'fluid-applications',
    title: '⚙️ Applications',
    content: '',
    items: [{ id: 'fluid-turbomachinery', title: '🔧 Turbomachinery', content: turbomachinery }],
  },
];
