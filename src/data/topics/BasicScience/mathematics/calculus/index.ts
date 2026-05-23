import type { TopicItem } from '@/data/topics';

import introduction from './introduction.md?raw';
import limits from './limits.md?raw';
import continuity from './continuity.md?raw';
import differentiation from './differentiation.md?raw';
import derivativesApplications from './derivatives-applications.md?raw';
import tangentsNormals from './tangents-normals.md?raw';
import maximaMinima from './maxima-minima.md?raw';
import integration from './integration.md?raw';
import definiteIndefiniteIntegrals from './definite-indefinite-integrals.md?raw';
import differentialEquations from './differential-equations.md?raw';
import areaUnderCurves from './area-under-curves.md?raw';

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
