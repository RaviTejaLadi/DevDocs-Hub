import type { TopicItem } from '@/data/topics';

import introduction from './introduction.mdx?raw';
import limits from './limits.mdx?raw';
import continuity from './continuity.mdx?raw';
import differentiation from './differentiation.mdx?raw';
import derivativesApplications from './derivatives-applications.mdx?raw';
import tangentsNormals from './tangents-normals.mdx?raw';
import maximaMinima from './maxima-minima.mdx?raw';
import integration from './integration.mdx?raw';
import definiteIndefiniteIntegrals from './definite-indefinite-integrals.mdx?raw';
import differentialEquations from './differential-equations.mdx?raw';
import areaUnderCurves from './area-under-curves.mdx?raw';

export const calculusTopics: TopicItem[] = [
  { id: 'calculus-introduction', title: '📖 Introduction', content: introduction },
  { id: 'calculus-limits', title: '➰ Limits', content: limits },
  { id: 'calculus-continuity', title: '🔗 Continuity', content: continuity },
  { id: 'calculus-differentiation', title: '∂ Differentiation', content: differentiation },
  {
    id: 'calculus-derivatives-applications',
    title: '📉 Derivatives and Applications',
    content: derivativesApplications,
  },
  { id: 'calculus-tangents-normals', title: '📐 Tangents and Normals', content: tangentsNormals },
  { id: 'calculus-maxima-minima', title: '⬆️ Maxima and Minima', content: maximaMinima },
  { id: 'calculus-integration', title: '∫ Integration', content: integration },
  {
    id: 'calculus-definite-indefinite-integrals',
    title: '∫ Definite and Indefinite Integrals',
    content: definiteIndefiniteIntegrals,
  },
  { id: 'calculus-differential-equations', title: '⚙️ Differential Equations', content: differentialEquations },
  { id: 'calculus-area-under-curves', title: '📐 Area Under Curves', content: areaUnderCurves },
];
