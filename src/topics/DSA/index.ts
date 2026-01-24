// import { ArrayIcon, Dsa } from '@/assets/technologies';

import dsaRoadMap from './dsa-intro/dsa-roadmap.md?raw';
import dsaIntro from './dsa-intro/intro.md?raw';
import top35 from './Q-And-A/q-and-a.md?raw';
import top40 from './Q-And-A/top-40-array.md?raw';
import top20 from './Q-And-A/top-20-object.md?raw';
import top20string from './Q-And-A/top-20-string.md?raw';

import arrays from './dsa-concepts/arrays.md?raw';
import strings from './dsa-concepts/strings.md?raw';
import graphs from './dsa-concepts/graphs.md?raw';
import hashTables from './dsa-concepts/hash-tables.md?raw';
import heaps from './dsa-concepts/heaps.md?raw';
import linkedList from './dsa-concepts/linked-list.md?raw';
import queues from './dsa-concepts/queues.md?raw';
import stack from './dsa-concepts/stack.md?raw';
import trees from './dsa-concepts/trees.md?raw';

export const dsaData = [
  {
    id: 'dsa',
    title: 'DSA Introduction',
    // Icon: Dsa,
    documents: [
      {
        id: 'dsa-intro',
        title: '📚 Introduction',
        content: dsaIntro,
      },
      {
        id: 'dsa-roadmap',
        title: '🗺️ Roadmap',
        content: dsaRoadMap,
      },
    ],
  },
  {
    id: 'dsa-topics',
    title: 'DSA Topics',
    // Icon: Dsa,
    documents: [
      {
        id: 'dsa-arrays',
        title: '🔢 Arrays',
        content: arrays,
      },
      {
        id: 'dsa-strings',
        title: '🔠 Strings',
        content: strings,
      },
      {
        id: 'dsa-graphs',
        title: '📊 Graphs',
        content: graphs,
      },
      {
        id: 'dsa-hash-tables',
        title: '🏷️ Hash Tables',
        content: hashTables,
      },
      {
        id: 'dsa-heaps',
        title: '⛰️ Heaps',
        content: heaps,
      },
      {
        id: 'dsa-linked-List',
        title: '🔗 Linked List',
        content: linkedList,
      },
      {
        id: 'dsa-queues',
        title: '🔄 Queues',
        content: queues,
      },
      {
        id: 'dsa-stack',
        title: '📚 Stack',
        content: stack,
      },
      {
        id: 'dsa-trees',
        title: '🌳 Trees',
        content: trees,
      },
    ],
  },
  {
    id: 'dsa-q-and-a',
    title: 'Q&A',
    // Icon: ArrayIcon,
    documents: [
      {
        id: 'top-35-most-asked-dsa-questions',
        title: '🧠 Top 35 General Questions',
        content: top35,
      },
      {
        id: 'dsa-arrays-questions',
        title: '🔢 Top 40 Array Questions',
        content: top40,
      },
      {
        id: 'dsa-object-questions',
        title: '📦 Top 20 Objects Questions',
        content: top20,
      },
      {
        id: 'dsa-string-questions',
        title: '🔠 Top 20 String Questions',
        content: top20string,
      },
    ],
  },
];
