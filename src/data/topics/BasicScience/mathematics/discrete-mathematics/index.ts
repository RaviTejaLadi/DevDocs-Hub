import type { TopicItem } from '@/data/topics';
import introduction from './introduction.md?raw';
import setsAndRelations from './sets-and-relations.md?raw';
import mathematicalLogic from './mathematical-logic.md?raw';
import combinatorics from './combinatorics.md?raw';
import graphTheory from './graph-theory.md?raw';
import numberTheory from './number-theory.md?raw';
import booleanAlgebra from './boolean-algebra.md?raw';
import recurrenceRelations from './recurrence-relations.md?raw';

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
