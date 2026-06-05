import type { TopicItem } from '@/data/topics';
import introduction from './introduction.mdx?raw';
import setsAndRelations from './sets-and-relations.mdx?raw';
import mathematicalLogic from './mathematical-logic.mdx?raw';
import combinatorics from './combinatorics.mdx?raw';
import graphTheory from './graph-theory.mdx?raw';
import numberTheory from './number-theory.mdx?raw';
import booleanAlgebra from './boolean-algebra.mdx?raw';
import recurrenceRelations from './recurrence-relations.mdx?raw';

export const discreteMathematicsTopics: TopicItem[] = [
  { id: 'discrete-introduction', title: '📖 Introduction', content: introduction },
  { id: 'discrete-sets-and-relations', title: '📦 Sets & Relations', content: setsAndRelations },
  { id: 'discrete-mathematical-logic', title: '🧠 Mathematical Logic', content: mathematicalLogic },
  { id: 'discrete-combinatorics', title: '🔢 Combinatorics', content: combinatorics },
  { id: 'discrete-graph-theory', title: '🕸️ Graph Theory', content: graphTheory },
  { id: 'discrete-number-theory', title: '🔣 Number Theory', content: numberTheory },
  { id: 'discrete-boolean-algebra', title: '💡 Boolean Algebra', content: booleanAlgebra },
  { id: 'discrete-recurrence-relations', title: '🔁 Recurrence Relations', content: recurrenceRelations },
];
