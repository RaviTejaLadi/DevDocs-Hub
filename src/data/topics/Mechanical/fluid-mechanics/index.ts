import type { TopicItem } from '@/data/topics';
import fluidIntroduction from './introduction.mdx?raw';
import fluidProperties from './fluid-properties.mdx?raw';
import fluidStatics from './fluid-statics.mdx?raw';
import bernoulliEquation from './bernoulli-equation.mdx?raw';
import continuityEquation from './continuity-equation.mdx?raw';
import momentumEquation from './momentum-equation.mdx?raw';
import reynoldsNumber from './reynolds-number.mdx?raw';
import dragAndLift from './drag-and-lift.mdx?raw';
import viscousFlow from './viscous-flow.mdx?raw';
import turbomachinery from './turbomachinery.mdx?raw';

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
