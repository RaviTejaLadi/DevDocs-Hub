import type { TopicItem } from '@/data/topics';
import introduction from './introduction.mdx?raw';
import stressStrainBasics from './stress-strain-basics.mdx?raw';
import bendingStress from './bending-stress.mdx?raw';
import torsion from './torsion.mdx?raw';
import columnsAndBuckling from './columns-and-buckling.mdx?raw';
import thickThinCylinders from './thick-thin-cylinders.mdx?raw';

export const solidMechanicsTopics: TopicItem[] = [
  { id: 'solid-mechanics-introduction', title: '📖 Introduction to Solid Mechanics', content: introduction },
  { id: 'solid-mechanics-stress-strain', title: '📊 Stress & Strain Basics', content: stressStrainBasics },
  { id: 'solid-mechanics-bending', title: '↘️ Bending Stress', content: bendingStress },
  { id: 'solid-mechanics-torsion', title: '🔄 Torsion', content: torsion },
  { id: 'solid-mechanics-columns-buckling', title: '📐 Columns & Buckling', content: columnsAndBuckling },
  { id: 'solid-mechanics-cylinders', title: '🛢️ Thick & Thin Cylinders', content: thickThinCylinders },
];
