import type { TopicItem } from '@/data/topics';
import biologyIntroduction from './introduction.mdx?raw';
import cellBiology from './cell-biology.mdx?raw';
import genetics from './genetics.mdx?raw';
import molecularBiology from './molecular-biology.mdx?raw';
import microbiology from './microbiology.mdx?raw';
import humanPhysiology from './human-physiology.mdx?raw';
import plantBiology from './plant-biology.mdx?raw';
import ecology from './ecology.mdx?raw';
import evolution from './evolution.mdx?raw';
import immunologyBasics from './immunology-basics.mdx?raw';
import biotechnologyBasics from './biotechnology-basics.mdx?raw';

export const biologyTopics: TopicItem[] = [
  {
    id: 'biology-fundamentals',
    title: '🔬 Fundamentals',
    content: '',
    items: [
      { id: 'biology-introduction', title: '📖 Introduction to Biology', content: biologyIntroduction },
      { id: 'cell-biology', title: '🦠 Cell Biology', content: cellBiology },
      { id: 'genetics', title: '🧬 Genetics', content: genetics },
      { id: 'biology-molecular-biology', title: '🧪 Molecular Biology', content: molecularBiology },
      { id: 'biology-microbiology', title: '🔬 Microbiology', content: microbiology },
    ],
  },
  {
    id: 'biology-organisms',
    title: '🌿 Organisms & Systems',
    content: '',
    items: [
      { id: 'biology-human-physiology', title: '🫀 Human Physiology', content: humanPhysiology },
      { id: 'biology-plant-biology', title: '🌱 Plant Biology', content: plantBiology },
      { id: 'biology-immunology-basics', title: '🛡️ Immunology Basics', content: immunologyBasics },
    ],
  },
  {
    id: 'biology-ecology-evolution',
    title: '🌍 Ecology & Evolution',
    content: '',
    items: [
      { id: 'biology-ecology', title: '🌳 Ecology', content: ecology },
      { id: 'biology-evolution', title: '🦎 Evolution', content: evolution },
    ],
  },
  {
    id: 'biology-applied',
    title: '🧬 Applied Biology',
    content: '',
    items: [{ id: 'biology-biotechnology-basics', title: '🔬 Biotechnology Basics', content: biotechnologyBasics }],
  },
];
