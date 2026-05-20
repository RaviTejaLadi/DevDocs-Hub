import type { TopicItem } from '@/data/topics';

import introduction from './introduction.md?raw';
import vectorBasics from './vector-basics.md?raw';
import vectorAdditionSubtraction from './vector-addition-subtraction.md?raw';
import scalarVectorQuantities from './scalar-vector-quantities.md?raw';
import dotProduct from './dot-product.md?raw';
import crossProduct from './cross-product.md?raw';
import unitVectors from './unit-vectors.md?raw';
import vectorEquations from './vector-equations.md?raw';
import positionVectors from './position-vectors.md?raw';
import applicationsVectors from './applications-vectors.md?raw';

export const vectorsTopics: TopicItem[] = [
  { id: 'vectors-introduction', title: '📖 Introduction', content: introduction },
  { id: 'vectors-vector-basics', title: '➡️ Vector Basics', content: vectorBasics },
  {
    id: 'vectors-vector-addition-subtraction',
    title: '➕ Vector Addition and Subtraction',
    content: vectorAdditionSubtraction,
  },
  { id: 'vectors-scalar-vector-quantities', title: '🔢 Scalar and Vector Quantities', content: scalarVectorQuantities },
  { id: 'vectors-dot-product', title: '· Dot Product', content: dotProduct },
  { id: 'vectors-cross-product', title: '✖️ Cross Product', content: crossProduct },
  { id: 'vectors-unit-vectors', title: '1️⃣ Unit Vectors', content: unitVectors },
  { id: 'vectors-vector-equations', title: '📝 Vector Equations', content: vectorEquations },
  { id: 'vectors-position-vectors', title: '📍 Position Vectors', content: positionVectors },
  {
    id: 'vectors-applications-vectors',
    title: '🚀 Applications of Vectors in Physics and Graphics',
    content: applicationsVectors,
  },
];
