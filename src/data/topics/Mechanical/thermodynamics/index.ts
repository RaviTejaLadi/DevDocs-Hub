import type { TopicItem } from '@/data/topics';
import thermoIntroduction from './introduction.md?raw';
import zerothLaw from './zeroth-law.md?raw';
import firstLaw from './first-law.md?raw';
import secondLaw from './second-law.md?raw';
import thirdLaw from './third-law.md?raw';
import entropy from './entropy.md?raw';
import enthalpy from './enthalpy.md?raw';
import thermoCycles from './thermo-cycles.md?raw';
import carnotCycle from './carnot-cycle.md?raw';
import rankineCycle from './rankine-cycle.md?raw';
import ottoDieselCycles from './otto-diesel-cycles.md?raw';
import heatEngines from './heat-engines.md?raw';
import refrigeration from './refrigeration.md?raw';

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
