import type { TopicItem } from '@/data/topics';

import introduction from './introduction.mdx?raw';
import variablesAndConstants from './variables-and-constants.mdx?raw';
import algebraicExpressions from './algebraic-expressions.mdx?raw';
import linearEquations from './linear-equations.mdx?raw';
import quadraticEquations from './quadratic-equations.mdx?raw';
import polynomials from './polynomials.mdx?raw';
import factorization from './factorization.mdx?raw';
import inequalities from './inequalities.mdx?raw';
import functions from './functions.mdx?raw';
import sequencesAndSeries from './sequences-and-series.mdx?raw';
import logarithms from './logarithms.mdx?raw';
import exponentsAndPowers from './exponents-and-powers.mdx?raw';
import complexNumbers from './complex-numbers.mdx?raw';
import permutationsAndCombinations from './permutations-and-combinations.mdx?raw';
import binomialTheorem from './binomial-theorem.mdx?raw';

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
