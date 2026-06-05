import type { TopicItem } from '@/data/topics';
import designIntroduction from './introduction.mdx?raw';
import designProcess from './design-process.mdx?raw';
import stressStrain from './stress-strain.mdx?raw';
import fatigueAnalysis from './fatigue-analysis.mdx?raw';
import failureTheories from './failure-theories.mdx?raw';
import gears from './gears.mdx?raw';
import bearings from './bearings.mdx?raw';
import shaftsAndKeys from './shafts-and-keys.mdx?raw';
import fasteners from './fasteners.mdx?raw';
import springs from './springs.mdx?raw';
import weldedRivetedJoints from './welded-riveted-joints.mdx?raw';

export const machineDesignTopics: TopicItem[] = [
  {
    id: 'machine-design-fundamentals',
    title: '📖 Fundamentals',
    content: '',
    items: [
      { id: 'machine-design-introduction', title: '📖 Introduction to Machine Design', content: designIntroduction },
      { id: 'design-process', title: '📋 Design Process', content: designProcess },
      { id: 'stress-strain', title: '📊 Stress & Strain', content: stressStrain },
      { id: 'machine-design-fatigue', title: '🔄 Fatigue Analysis', content: fatigueAnalysis },
      { id: 'machine-design-failure-theories', title: '⚠️ Failure Theories', content: failureTheories },
    ],
  },
  {
    id: 'machine-design-components',
    title: '⚙️ Machine Components',
    content: '',
    items: [
      { id: 'machine-design-gears', title: '⚙️ Gears', content: gears },
      { id: 'machine-design-bearings', title: '🔘 Bearings', content: bearings },
      { id: 'machine-design-shafts-keys', title: '🔧 Shafts & Keys', content: shaftsAndKeys },
      { id: 'machine-design-fasteners', title: '🔩 Fasteners', content: fasteners },
      { id: 'machine-design-springs', title: '🌀 Springs', content: springs },
      { id: 'machine-design-welded-riveted', title: '🔗 Welded & Riveted Joints', content: weldedRivetedJoints },
    ],
  },
];
