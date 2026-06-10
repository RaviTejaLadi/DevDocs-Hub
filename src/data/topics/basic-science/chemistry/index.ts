import type { TopicItem } from '@/data/topics';
import chemistryIntroduction from './introduction.mdx?raw';
import atomicStructure from './atomic-structure.mdx?raw';
import periodicTable from './periodic-table.mdx?raw';
import chemicalBonding from './chemical-bonding.mdx?raw';
import stoichiometry from './stoichiometry.mdx?raw';
import chemicalReactions from './chemical-reactions.mdx?raw';
import acidsAndBases from './acids-and-bases.mdx?raw';
import electrochemistry from './electrochemistry.mdx?raw';
import organicChemistryIntro from './organic-chemistry-intro.mdx?raw';
import thermochemistry from './thermochemistry.mdx?raw';
import chemicalEquilibrium from './chemical-equilibrium.mdx?raw';
import gases from './gases.mdx?raw';
import solutions from './solutions.mdx?raw';
import redoxReactions from './redox-reactions.mdx?raw';
import nuclearChemistry from './nuclear-chemistry.mdx?raw';

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
