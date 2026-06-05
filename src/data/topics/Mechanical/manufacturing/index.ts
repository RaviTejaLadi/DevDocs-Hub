import type { TopicItem } from '@/data/topics';
import manufacturingIntroduction from './introduction.mdx?raw';
import casting from './casting.mdx?raw';
import machining from './machining.mdx?raw';
import formingProcesses from './forming-processes.mdx?raw';
import welding from './welding.mdx?raw';
import additiveManufacturing from './additive-manufacturing.mdx?raw';
import cncMachining from './cnc-machining.mdx?raw';
import sheetMetal from './sheet-metal.mdx?raw';
import qualityControl from './quality-control.mdx?raw';
import metrology from './metrology.mdx?raw';

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
