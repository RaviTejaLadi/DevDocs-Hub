import type { Topic } from '@/topics';
import { Cog, Thermometer, Wrench, GitBranch } from 'lucide-react';

const thermodynamicsTopics: Topic = {
  id: 'thermodynamics',
  title: 'Thermodynamics',
  description: 'Laws of thermodynamics, cycles, and energy conversion.',
  icon: <Thermometer className="h-5 w-5" />,
  type: 'thermal',
  category: 'thermal',
  items: [
    {
      id: 'first-law',
      title: 'First Law of Thermodynamics',
      content:
        '# First Law of Thermodynamics\n\nEnergy can neither be created nor destroyed, only transformed from one form to another.\n\n`ΔU = Q − W`',
    },
    {
      id: 'second-law',
      title: 'Second Law of Thermodynamics',
      content:
        '# Second Law of Thermodynamics\n\nThe entropy of an isolated system can never decrease over time.',
    },
    {
      id: 'thermo-cycles',
      title: 'Thermodynamic Cycles',
      content:
        '# Thermodynamic Cycles\n\n- Carnot cycle\n- Otto cycle\n- Diesel cycle\n- Rankine cycle\n- Brayton cycle',
    },
  ],
};

const fluidMechanicsTopics: Topic = {
  id: 'fluid-mechanics',
  title: 'Fluid Mechanics',
  description: 'Behavior of liquids and gases at rest and in motion.',
  icon: <GitBranch className="h-5 w-5" />,
  type: 'fluids',
  category: 'fluids',
  items: [
    {
      id: 'fluid-properties',
      title: 'Properties of Fluids',
      content:
        '# Properties of Fluids\n\nDensity, viscosity, surface tension, compressibility, and vapor pressure.',
    },
    {
      id: 'bernoulli-equation',
      title: "Bernoulli's Equation",
      content:
        "# Bernoulli's Equation\n\nFor an inviscid flow of a non-conducting fluid, an increase in the speed of the fluid occurs simultaneously with a decrease in pressure.",
    },
  ],
};

const machineDesignTopics: Topic = {
  id: 'machine-design',
  title: 'Machine Design',
  description: 'Design of mechanical components and systems.',
  icon: <Cog className="h-5 w-5" />,
  type: 'design',
  category: 'design',
  items: [
    {
      id: 'design-process',
      title: 'Design Process',
      content:
        '# Design Process\n\n1. Need identification\n2. Concept generation\n3. Detail design\n4. Prototyping\n5. Testing\n6. Production',
    },
    {
      id: 'stress-strain',
      title: 'Stress & Strain',
      content:
        '# Stress and Strain\n\n`σ = F / A` &nbsp;&nbsp; (Stress)\n\n`ε = ΔL / L₀` (Strain)',
    },
  ],
};

const manufacturingTopics: Topic = {
  id: 'manufacturing',
  title: 'Manufacturing',
  description: 'Manufacturing processes and tooling.',
  icon: <Wrench className="h-5 w-5" />,
  type: 'manufacturing',
  category: 'manufacturing',
  items: [
    {
      id: 'casting',
      title: 'Casting',
      content:
        '# Casting\n\nA manufacturing process in which a liquid material is poured into a mold containing a hollow cavity of the desired shape.',
    },
    {
      id: 'machining',
      title: 'Machining',
      content:
        '# Machining\n\nMaterial removal processes — turning, milling, drilling, grinding.',
    },
  ],
};

export const mechanicalTopics: Topic[] = [
  thermodynamicsTopics,
  fluidMechanicsTopics,
  machineDesignTopics,
  manufacturingTopics,
];
