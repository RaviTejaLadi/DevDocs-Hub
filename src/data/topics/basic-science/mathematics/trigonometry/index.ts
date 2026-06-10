import type { TopicItem } from '@/data/topics';

import introduction from './introduction.mdx?raw';
import trigonometricRatios from './trigonometric-ratios.mdx?raw';
import trigonometricIdentities from './trigonometric-identities.mdx?raw';
import heightsDistances from './heights-distances.mdx?raw';
import trigonometricEquations from './trigonometric-equations.mdx?raw';
import inverseTrigonometricFunctions from './inverse-trigonometric-functions.mdx?raw';
import graphsTrigonometricFunctions from './graphs-trigonometric-functions.mdx?raw';
import applicationsTrigonometry from './applications-trigonometry.mdx?raw';

export const trigonometryTopics: TopicItem[] = [
  { id: 'trigonometry-introduction', title: '📖 Introduction', content: introduction },
  { id: 'trigonometry-trigonometric-ratios', title: '📐 Trigonometric Ratios', content: trigonometricRatios },
  {
    id: 'trigonometry-trigonometric-identities',
    title: '🆔 Trigonometric Identities',
    content: trigonometricIdentities,
  },
  { id: 'trigonometry-heights-distances', title: '🏔️ Heights and Distances', content: heightsDistances },
  { id: 'trigonometry-trigonometric-equations', title: '✖️ Trigonometric Equations', content: trigonometricEquations },
  {
    id: 'trigonometry-inverse-trigonometric-functions',
    title: '↩️ Inverse Trigonometric Functions',
    content: inverseTrigonometricFunctions,
  },
  {
    id: 'trigonometry-graphs-trigonometric-functions',
    title: '📈 Graphs of Trigonometric Functions',
    content: graphsTrigonometricFunctions,
  },
  {
    id: 'trigonometry-applications-trigonometry',
    title: '🛰️ Applications of Trigonometry',
    content: applicationsTrigonometry,
  },
];
