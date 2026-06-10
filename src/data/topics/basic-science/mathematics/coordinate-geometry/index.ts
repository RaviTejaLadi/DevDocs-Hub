import type { TopicItem } from '@/data/topics';

import introduction from './introduction.mdx?raw';
import cartesianCoordinateSystem from './cartesian-coordinate-system.mdx?raw';
import distanceFormula from './distance-formula.mdx?raw';
import sectionFormula from './section-formula.mdx?raw';
import midpointFormula from './midpoint-formula.mdx?raw';
import slopeOfLine from './slope-of-line.mdx?raw';
import equationStraightLine from './equation-straight-line.mdx?raw';
import parallelPerpendicularLines from './parallel-perpendicular-lines.mdx?raw';
import circleEquations from './circle-equations.mdx?raw';
import parabola from './parabola.mdx?raw';
import ellipse from './ellipse.mdx?raw';
import hyperbola from './hyperbola.mdx?raw';

export const coordinateGeometryTopics: TopicItem[] = [
  { id: 'coordinate-geometry-introduction', title: '📖 Introduction', content: introduction },
  {
    id: 'coordinate-geometry-cartesian-coordinate-system',
    title: '🗺️ Cartesian Coordinate System',
    content: cartesianCoordinateSystem,
  },
  { id: 'coordinate-geometry-distance-formula', title: '📏 Distance Formula', content: distanceFormula },
  { id: 'coordinate-geometry-section-formula', title: '✂️ Section Formula', content: sectionFormula },
  { id: 'coordinate-geometry-midpoint-formula', title: '🎯 Midpoint Formula', content: midpointFormula },
  { id: 'coordinate-geometry-slope-of-line', title: '↗️ Slope of a Line', content: slopeOfLine },
  {
    id: 'coordinate-geometry-equation-straight-line',
    title: '📈 Equation of Straight Line',
    content: equationStraightLine,
  },
  {
    id: 'coordinate-geometry-parallel-perpendicular-lines',
    title: '⊥ Parallel and Perpendicular Lines',
    content: parallelPerpendicularLines,
  },
  { id: 'coordinate-geometry-circle-equations', title: '⭕ Circle Equations', content: circleEquations },
  { id: 'coordinate-geometry-parabola', title: '🌙 Parabola', content: parabola },
  { id: 'coordinate-geometry-ellipse', title: '🥚 Ellipse', content: ellipse },
  { id: 'coordinate-geometry-hyperbola', title: '♾️ Hyperbola', content: hyperbola },
];
