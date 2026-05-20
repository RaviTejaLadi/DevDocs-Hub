import type { TopicItem } from '@/data/topics';

import introduction from './introduction.md?raw';
import trigonometricRatios from './trigonometric-ratios.md?raw';
import trigonometricIdentities from './trigonometric-identities.md?raw';
import heightsDistances from './heights-distances.md?raw';
import trigonometricEquations from './trigonometric-equations.md?raw';
import inverseTrigonometricFunctions from './inverse-trigonometric-functions.md?raw';
import graphsTrigonometricFunctions from './graphs-trigonometric-functions.md?raw';
import applicationsTrigonometry from './applications-trigonometry.md?raw';

export const trigonometryTopics: TopicItem[] = [
  { id: 'trigonometry-introduction', title: '📖 Introduction', content: introduction },
  { id: 'trigonometry-trigonometric-ratios', title: '📐 Trigonometric Ratios', content: trigonometricRatios },
  { id: 'trigonometry-trigonometric-identities', title: '🆔 Trigonometric Identities', content: trigonometricIdentities },
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
