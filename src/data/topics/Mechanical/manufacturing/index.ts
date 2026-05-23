import type { TopicItem } from '@/data/topics';
import manufacturingIntroduction from './introduction.md?raw';
import casting from './casting.md?raw';
import machining from './machining.md?raw';
import formingProcesses from './forming-processes.md?raw';
import welding from './welding.md?raw';
import additiveManufacturing from './additive-manufacturing.md?raw';
import cncMachining from './cnc-machining.md?raw';
import sheetMetal from './sheet-metal.md?raw';
import qualityControl from './quality-control.md?raw';
import metrology from './metrology.md?raw';

export const manufacturingTopics: TopicItem[] = [
  {
    id: 'manufacturing-processes',
    title: '🏭 Manufacturing Processes',
    content: '',
    items: [
      {
        id: 'manufacturing-introduction',
        title: '📖 Introduction to Manufacturing',
        content: manufacturingIntroduction,
      },
      { id: 'casting', title: '🔥 Casting', content: casting },
      { id: 'machining', title: '🔧 Machining', content: machining },
      { id: 'manufacturing-forming', title: '🔨 Forming Processes', content: formingProcesses },
      { id: 'manufacturing-welding', title: '⚡ Welding', content: welding },
      { id: 'manufacturing-sheet-metal', title: '📄 Sheet Metal Processes', content: sheetMetal },
      { id: 'manufacturing-additive', title: '🖨️ Additive Manufacturing', content: additiveManufacturing },
      { id: 'manufacturing-cnc', title: '🤖 CNC Machining', content: cncMachining },
    ],
  },
  {
    id: 'manufacturing-quality',
    title: '✅ Quality & Metrology',
    content: '',
    items: [
      { id: 'manufacturing-quality-control', title: '📊 Quality Control', content: qualityControl },
      { id: 'manufacturing-metrology', title: '📏 Metrology', content: metrology },
    ],
  },
];
