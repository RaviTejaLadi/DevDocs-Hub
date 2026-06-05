import introduction from './introduction.mdx?raw';
import { algebraTopics } from './algebra';
import { geometryTopics } from './geometry';
import { trigonometryTopics } from './trigonometry';
import { statisticsTopics } from './statistics';
import { probabilityTopics } from './probability';
import { coordinateGeometryTopics } from './coordinate-geometry';
import { calculusTopics } from './calculus';
import { vectorsTopics } from './vectors';
import { matricesTopics } from './matrices';
import { discreteMathematicsTopics } from './discrete-mathematics';
import type { TopicItem } from '@/data/topics';

export const mathematicsTopics: TopicItem[] = [
  {
    id: 'introduction',
    title: '📖 Introduction',
    content: introduction,
  },
  {
    id: 'algebra',
    title: '🔢 Algebra',
    content: '',
    items: algebraTopics,
  },
  {
    id: 'geometry',
    title: '📐 Geometry',
    content: '',
    items: geometryTopics,
  },
  {
    id: 'trigonometry',
    title: '📏 Trigonometry',
    content: '',
    items: trigonometryTopics,
  },
  {
    id: 'statistics',
    title: '📊 Statistics',
    content: '',
    items: statisticsTopics,
  },
  {
    id: 'probability',
    title: '🎲 Probability',
    content: '',
    items: probabilityTopics,
  },
  {
    id: 'coordinate-geometry',
    title: '📍 Coordinate Geometry',
    content: '',
    items: coordinateGeometryTopics,
  },
  {
    id: 'calculus',
    title: '∫ Calculus',
    content: '',
    items: calculusTopics,
  },
  {
    id: 'vectors',
    title: '➡️ Vectors',
    content: '',
    items: vectorsTopics,
  },
  {
    id: 'matrices',
    title: '🔲 Matrices',
    content: '',
    items: matricesTopics,
  },
  {
    id: 'discrete-mathematics',
    title: '🧩 Discrete Mathematics',
    content: '',
    items: discreteMathematicsTopics,
  },
];
