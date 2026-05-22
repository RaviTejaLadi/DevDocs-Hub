import type { TopicItem } from '@/data/topics';
import designIntroduction from './introduction.md?raw';
import designProcess from './design-process.md?raw';
import stressStrain from './stress-strain.md?raw';
import fatigueAnalysis from './fatigue-analysis.md?raw';
import failureTheories from './failure-theories.md?raw';
import gears from './gears.md?raw';
import bearings from './bearings.md?raw';
import shaftsAndKeys from './shafts-and-keys.md?raw';
import fasteners from './fasteners.md?raw';
import springs from './springs.md?raw';
import weldedRivetedJoints from './welded-riveted-joints.md?raw';

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
