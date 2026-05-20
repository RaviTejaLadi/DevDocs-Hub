import type { TopicItem } from '@/data/topics';

import introduction from './introduction.md?raw';
import variablesAndConstants from './variables-and-constants.md?raw';
import algebraicExpressions from './algebraic-expressions.md?raw';
import linearEquations from './linear-equations.md?raw';
import quadraticEquations from './quadratic-equations.md?raw';
import polynomials from './polynomials.md?raw';
import factorization from './factorization.md?raw';
import inequalities from './inequalities.md?raw';
import functions from './functions.md?raw';
import sequencesAndSeries from './sequences-and-series.md?raw';
import logarithms from './logarithms.md?raw';
import exponentsAndPowers from './exponents-and-powers.md?raw';
import complexNumbers from './complex-numbers.md?raw';
import permutationsAndCombinations from './permutations-and-combinations.md?raw';
import binomialTheorem from './binomial-theorem.md?raw';

export const algebraTopics: TopicItem[] = [
  { id: 'algebra-introduction', title: '📖 Introduction', content: introduction },
  { id: 'algebra-variables-and-constants', title: '🔡 Variables and Constants', content: variablesAndConstants },
  { id: 'algebra-algebraic-expressions', title: '✏️ Algebraic Expressions', content: algebraicExpressions },
  { id: 'algebra-linear-equations', title: '➡️ Linear Equations', content: linearEquations },
  { id: 'algebra-quadratic-equations', title: '📈 Quadratic Equations', content: quadraticEquations },
  { id: 'algebra-polynomials', title: '🔣 Polynomials', content: polynomials },
  { id: 'algebra-factorization', title: '🧩 Factorization', content: factorization },
  { id: 'algebra-inequalities', title: '⚖️ Inequalities', content: inequalities },
  { id: 'algebra-functions', title: '📉 Functions', content: functions },
  { id: 'algebra-sequences-and-series', title: '🔢 Sequences and Series', content: sequencesAndSeries },
  { id: 'algebra-logarithms', title: '📊 Logarithms', content: logarithms },
  { id: 'algebra-exponents-and-powers', title: '⚡ Exponents and Powers', content: exponentsAndPowers },
  { id: 'algebra-complex-numbers', title: '🌀 Complex Numbers', content: complexNumbers },
  {
    id: 'algebra-permutations-and-combinations',
    title: '🔀 Permutations and Combinations',
    content: permutationsAndCombinations,
  },
  { id: 'algebra-binomial-theorem', title: '📦 Binomial Theorem', content: binomialTheorem },
];
