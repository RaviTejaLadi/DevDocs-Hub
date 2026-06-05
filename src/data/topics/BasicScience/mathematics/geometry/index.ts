import type { TopicItem } from '@/data/topics';

import introduction from './introduction.mdx?raw';
import pointsLinesPlanes from './points-lines-planes.mdx?raw';
import angles from './angles.mdx?raw';
import triangles from './triangles.mdx?raw';
import congruenceSimilarity from './congruence-similarity.mdx?raw';
import circles from './circles.mdx?raw';
import polygons from './polygons.mdx?raw';
import quadrilaterals from './quadrilaterals.mdx?raw';
import mensuration from './mensuration.mdx?raw';
import surfaceAreaVolume from './surface-area-volume.mdx?raw';
import coordinateGeometryBasics from './coordinate-geometry-basics.mdx?raw';
import transformations from './transformations.mdx?raw';
import symmetry from './symmetry.mdx?raw';
import conicSections from './conic-sections.mdx?raw';
import d3dGeometry from './3d-geometry.mdx?raw';

export const geometryTopics: TopicItem[] = [
  { id: 'geometry-introduction', title: '📖 Introduction', content: introduction },
  { id: 'geometry-points-lines-planes', title: '📍 Points, Lines, and Planes', content: pointsLinesPlanes },
  { id: 'geometry-angles', title: '📐 Angles', content: angles },
  { id: 'geometry-triangles', title: '🔺 Triangles', content: triangles },
  { id: 'geometry-congruence-similarity', title: '🔄 Congruence and Similarity', content: congruenceSimilarity },
  { id: 'geometry-circles', title: '⭕ Circles', content: circles },
  { id: 'geometry-polygons', title: '🔷 Polygons', content: polygons },
  { id: 'geometry-quadrilaterals', title: '⬜ Quadrilaterals', content: quadrilaterals },
  { id: 'geometry-mensuration', title: '📏 Mensuration', content: mensuration },
  { id: 'geometry-surface-area-volume', title: '📦 Surface Area and Volume', content: surfaceAreaVolume },
  {
    id: 'geometry-coordinate-geometry-basics',
    title: '🗺️ Coordinate Geometry Basics',
    content: coordinateGeometryBasics,
  },
  { id: 'geometry-transformations', title: '🔃 Transformations', content: transformations },
  { id: 'geometry-symmetry', title: '🪞 Symmetry', content: symmetry },
  { id: 'geometry-conic-sections', title: '🌙 Conic Sections', content: conicSections },
  { id: 'geometry-3d-geometry', title: '🧊 3D Geometry', content: d3dGeometry },
];
