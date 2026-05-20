import type { TopicItem } from '@/data/topics';

import introduction from './introduction.md?raw';
import cartesianCoordinateSystem from './cartesian-coordinate-system.md?raw';
import distanceFormula from './distance-formula.md?raw';
import sectionFormula from './section-formula.md?raw';
import midpointFormula from './midpoint-formula.md?raw';
import slopeOfLine from './slope-of-line.md?raw';
import equationStraightLine from './equation-straight-line.md?raw';
import parallelPerpendicularLines from './parallel-perpendicular-lines.md?raw';
import circleEquations from './circle-equations.md?raw';
import parabola from './parabola.md?raw';
import ellipse from './ellipse.md?raw';
import hyperbola from './hyperbola.md?raw';

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
