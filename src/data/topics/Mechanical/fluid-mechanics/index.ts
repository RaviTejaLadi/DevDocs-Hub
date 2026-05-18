import fluidProperties from './fluid-properties.md?raw';
import bernoulliEquation from './bernoulli-equation.md?raw';
import type { TopicItem } from '@/data/topics';

export const fluidMechanicsTopics: TopicItem[] = [
  {
    id: 'fluid-properties',
    title: 'Properties of Fluids',
    content: fluidProperties,
  },
  {
    id: 'bernoulli-equation',
    title: "Bernoulli's Equation",
    content: bernoulliEquation,
  },
];
