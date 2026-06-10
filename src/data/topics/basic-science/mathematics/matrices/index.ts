import type { TopicItem } from '@/data/topics';

import introduction from './introduction.mdx?raw';
import typesOfMatrices from './types-of-matrices.mdx?raw';
import matrixOperations from './matrix-operations.mdx?raw';
import determinants from './determinants.mdx?raw';
import inverseOfMatrix from './inverse-of-matrix.mdx?raw';
import adjointCofactors from './adjoint-cofactors.mdx?raw';
import solvingLinearEquations from './solving-linear-equations.mdx?raw';
import eigenvaluesEigenvectors from './eigenvalues-eigenvectors.mdx?raw';
import transformationsMatrices from './transformations-matrices.mdx?raw';
import applicationsAiGraphics from './applications-ai-graphics.mdx?raw';

export const matricesTopics: TopicItem[] = [
  { id: 'matrices-introduction', title: '📖 Introduction', content: introduction },
  { id: 'matrices-types-of-matrices', title: '🔲 Types of Matrices', content: typesOfMatrices },
  { id: 'matrices-matrix-operations', title: '⚙️ Matrix Operations', content: matrixOperations },
  { id: 'matrices-determinants', title: '🔢 Determinants', content: determinants },
  { id: 'matrices-inverse-of-matrix', title: '🔄 Inverse of Matrix', content: inverseOfMatrix },
  { id: 'matrices-adjoint-cofactors', title: '🧮 Adjoint and Cofactors', content: adjointCofactors },
  {
    id: 'matrices-solving-linear-equations',
    title: '✅ Solving Linear Equations using Matrices',
    content: solvingLinearEquations,
  },
  {
    id: 'matrices-eigenvalues-eigenvectors',
    title: 'λ Eigenvalues and Eigenvectors',
    content: eigenvaluesEigenvectors,
  },
  {
    id: 'matrices-transformations-matrices',
    title: '🔃 Transformations using Matrices',
    content: transformationsMatrices,
  },
  {
    id: 'matrices-applications-ai-graphics',
    title: '🤖 Applications in AI and Computer Graphics',
    content: applicationsAiGraphics,
  },
];
