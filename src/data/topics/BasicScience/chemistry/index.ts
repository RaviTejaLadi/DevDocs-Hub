import type { TopicItem } from '@/data/topics';
import chemistryIntroduction from './introduction.md?raw';
import atomicStructure from './atomic-structure.md?raw';
import periodicTable from './periodic-table.md?raw';
import chemicalBonding from './chemical-bonding.md?raw';
import stoichiometry from './stoichiometry.md?raw';
import chemicalReactions from './chemical-reactions.md?raw';
import acidsAndBases from './acids-and-bases.md?raw';
import electrochemistry from './electrochemistry.md?raw';
import organicChemistryIntro from './organic-chemistry-intro.md?raw';
import thermochemistry from './thermochemistry.md?raw';
import chemicalEquilibrium from './chemical-equilibrium.md?raw';
import gases from './gases.md?raw';
import solutions from './solutions.md?raw';
import redoxReactions from './redox-reactions.md?raw';
import nuclearChemistry from './nuclear-chemistry.md?raw';

export const chemistryTopics: TopicItem[] = [
  {
    id: 'chemistry-fundamentals',
    title: '🧪 Fundamentals',
    content: '',
    items: [
      { id: 'chemistry-introduction', title: '📖 Introduction to Chemistry', content: chemistryIntroduction },
      { id: 'chemistry-atomic-structure', title: '⚛️ Atomic Structure', content: atomicStructure },
      { id: 'periodic-table', title: '📋 The Periodic Table', content: periodicTable },
      { id: 'chemical-bonding', title: '🔗 Chemical Bonding', content: chemicalBonding },
      { id: 'stoichiometry', title: '⚖️ Stoichiometry', content: stoichiometry },
    ],
  },
  {
    id: 'chemistry-reactions',
    title: '⚗️ Reactions & Equilibrium',
    content: '',
    items: [
      { id: 'chemistry-chemical-reactions', title: '🔥 Chemical Reactions', content: chemicalReactions },
      { id: 'chemistry-redox-reactions', title: '🔋 Redox Reactions', content: redoxReactions },
      { id: 'chemistry-acids-and-bases', title: '🧫 Acids & Bases', content: acidsAndBases },
      { id: 'chemistry-chemical-equilibrium', title: '⚖️ Chemical Equilibrium', content: chemicalEquilibrium },
      { id: 'chemistry-thermochemistry', title: '🌡️ Thermochemistry', content: thermochemistry },
    ],
  },
  {
    id: 'chemistry-states-matter',
    title: '💨 States of Matter',
    content: '',
    items: [
      { id: 'chemistry-gases', title: '💨 Gases', content: gases },
      { id: 'chemistry-solutions', title: '🧴 Solutions', content: solutions },
    ],
  },
  {
    id: 'chemistry-advanced',
    title: '🔬 Advanced Topics',
    content: '',
    items: [
      { id: 'chemistry-electrochemistry', title: '⚡ Electrochemistry', content: electrochemistry },
      { id: 'chemistry-organic-intro', title: '🌿 Organic Chemistry Introduction', content: organicChemistryIntro },
      { id: 'chemistry-nuclear', title: '☢️ Nuclear Chemistry', content: nuclearChemistry },
    ],
  },
];
