import type { TopicItem } from '@/data/topics';
import thermoIntroduction from './introduction.mdx?raw';
import zerothLaw from './zeroth-law.mdx?raw';
import firstLaw from './first-law.mdx?raw';
import secondLaw from './second-law.mdx?raw';
import thirdLaw from './third-law.mdx?raw';
import entropy from './entropy.mdx?raw';
import enthalpy from './enthalpy.mdx?raw';
import thermoCycles from './thermo-cycles.mdx?raw';
import carnotCycle from './carnot-cycle.mdx?raw';
import rankineCycle from './rankine-cycle.mdx?raw';
import ottoDieselCycles from './otto-diesel-cycles.mdx?raw';
import heatEngines from './heat-engines.mdx?raw';
import refrigeration from './refrigeration.mdx?raw';

export const thermodynamicsTopics: TopicItem[] = [
  {
    id: 'thermo-fundamentals',
    title: '📖 Fundamentals',
    content: '',
    items: [
      { id: 'thermo-introduction', title: '📖 Introduction to Thermodynamics', content: thermoIntroduction },
      { id: 'thermo-zeroth-law', title: '0️⃣ Zeroth Law', content: zerothLaw },
      { id: 'first-law', title: '1️⃣ First Law of Thermodynamics', content: firstLaw },
      { id: 'second-law', title: '2️⃣ Second Law of Thermodynamics', content: secondLaw },
      { id: 'thermo-third-law', title: '3️⃣ Third Law', content: thirdLaw },
      { id: 'thermo-entropy', title: '📈 Entropy', content: entropy },
      { id: 'thermo-enthalpy', title: '🔥 Enthalpy', content: enthalpy },
    ],
  },
  {
    id: 'thermo-cycles-applications',
    title: '🔄 Cycles & Applications',
    content: '',
    items: [
      { id: 'thermo-cycles', title: '♻️ Thermodynamic Cycles', content: thermoCycles },
      { id: 'thermo-carnot-cycle', title: '⚙️ Carnot Cycle', content: carnotCycle },
      { id: 'thermo-rankine-cycle', title: '🏭 Rankine Cycle', content: rankineCycle },
      { id: 'thermo-otto-diesel', title: '🚗 Otto & Diesel Cycles', content: ottoDieselCycles },
      { id: 'thermo-heat-engines', title: '🔧 Heat Engines', content: heatEngines },
      { id: 'thermo-refrigeration', title: '❄️ Refrigeration', content: refrigeration },
    ],
  },
];
