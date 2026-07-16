import type { TopicItem } from '@/data/topics';
import dsaIntro from './dsa-intro/intro.mdx?raw';
import dsaRoadMap from './dsa-intro/dsa-roadmap.mdx?raw';
import dsaComplexityAnalysis from './dsa-intro/complexity-analysis-big-o.mdx?raw';
import dsaHowToApproachProblems from './dsa-intro/how-to-approach-problems.mdx?raw';
import arrays from './dsa-concepts/arrays.mdx?raw';
import linkedList from './dsa-concepts/linked-list.mdx?raw';
import stack from './dsa-concepts/stack.mdx?raw';
import queues from './dsa-concepts/queues.mdx?raw';
import hashTables from './dsa-concepts/hash-tables.mdx?raw';
import setsMapsInJs from './dsa-concepts/sets-maps-in-js.mdx?raw';
import trees from './dsa-concepts/trees.mdx?raw';
import binarySearchTrees from './dsa-concepts/binary-search-trees.mdx?raw';
import graphs from './dsa-concepts/graphs.mdx?raw';
import binarySearch from './algorithms/binary-search.mdx?raw';
import sortingAlgorithms from './algorithms/sorting-algorithms.mdx?raw';
import backtracking from './algorithms/backtracking.mdx?raw';
import greedyAlgorithms from './algorithms/greedy-algorithms.mdx?raw';
import dynamicProgramming from './algorithms/dynamic-programming.mdx?raw';
import divideAndConquer from './algorithms/divide-and-conquer.mdx?raw';
import mathAndNumberTheory from './algorithms/math-and-number-theory.mdx?raw';
import bfsAndDfs from './algorithms/bfs-and-dfs.mdx?raw';
import shortestPathAlgorithms from './algorithms/shortest-path-algorithms.mdx?raw';
import minimumSpanningTree from './algorithms/minimum-spanning-tree.mdx?raw';
import unionFind from './algorithms/union-find.mdx?raw';
import dijkstraAlgorithm from './algorithms/dijkstra-algorithm.mdx?raw';
import top35 from './Q-And-A/q-and-a.mdx?raw';
import top40 from './Q-And-A/top-40-array.mdx?raw';
import top50MustKnow from './Q-And-A/top-50-must-know.mdx?raw';

export const dsaData: TopicItem[] = [
  {
    id: 'dsa-tutorial',
    title: '📘 DSA Tutorial',
    content: '',
    items: [
      { id: 'dsa-home', title: 'DSA Home', content: dsaRoadMap },
      { id: 'dsa-intro', title: 'DSA Intro', content: dsaIntro },
      { id: 'dsa-simple-algorithm', title: 'DSA Simple Algorithm', content: dsaHowToApproachProblems },
    ],
  },
  {
    id: 'dsa-arrays-section',
    title: '📦 Arrays',
    content: '',
    items: [
      { id: 'dsa-arrays', title: 'DSA Arrays', content: arrays },
      { id: 'dsa-bubble-sort', title: 'Bubble Sort', content: sortingAlgorithms },
      { id: 'dsa-selection-sort', title: 'Selection Sort', content: sortingAlgorithms },
      { id: 'dsa-insertion-sort', title: 'Insertion Sort', content: sortingAlgorithms },
      { id: 'dsa-quick-sort', title: 'Quick Sort', content: sortingAlgorithms },
      { id: 'dsa-counting-sort', title: 'Counting Sort', content: sortingAlgorithms },
      { id: 'dsa-radix-sort', title: 'Radix Sort', content: sortingAlgorithms },
      { id: 'dsa-merge-sort', title: 'Merge Sort', content: sortingAlgorithms },
      { id: 'dsa-linear-search', title: 'Linear Search', content: arrays },
      { id: 'dsa-binary-search', title: 'Binary Search', content: binarySearch },
    ],
  },
  {
    id: 'dsa-linked-lists-section',
    title: '🔗 Linked Lists',
    content: '',
    items: [
      { id: 'dsa-linked-lists', title: 'DSA Linked Lists', content: linkedList },
      { id: 'dsa-linked-lists-memory', title: 'Linked Lists in Memory', content: linkedList },
      { id: 'dsa-linked-lists-types', title: 'Linked Lists Types', content: linkedList },
      { id: 'dsa-linked-lists-operations', title: 'Linked Lists Operations', content: linkedList },
    ],
  },
  {
    id: 'dsa-stacks-queues-section',
    title: '📚 Stacks & Queues',
    content: '',
    items: [
      { id: 'dsa-stacks', title: 'DSA Stacks', content: stack },
      { id: 'dsa-queues', title: 'DSA Queues', content: queues },
    ],
  },
  {
    id: 'dsa-hash-tables-section',
    title: '🗂️ Hash Tables',
    content: '',
    items: [
      { id: 'dsa-hash-tables', title: 'DSA Hash Tables', content: hashTables },
      { id: 'dsa-hash-sets', title: 'Hash Sets', content: setsMapsInJs },
      { id: 'dsa-hash-maps', title: 'Hash Maps', content: setsMapsInJs },
    ],
  },
  {
    id: 'dsa-trees-section',
    title: '🌳 Trees',
    content: '',
    items: [
      { id: 'dsa-trees', title: 'DSA Trees', content: trees },
      { id: 'dsa-binary-trees', title: 'Binary Trees', content: trees },
      { id: 'dsa-pre-order-traversal', title: 'Pre-order Traversal', content: trees },
      { id: 'dsa-in-order-traversal', title: 'In-order Traversal', content: trees },
      { id: 'dsa-post-order-traversal', title: 'Post-order Traversal', content: trees },
      { id: 'dsa-array-binary-trees', title: 'Array Implementation of Binary Trees', content: trees },
      { id: 'dsa-bst', title: 'Binary Search Trees (BST)', content: binarySearchTrees },
      { id: 'dsa-avl-trees', title: 'AVL Trees', content: binarySearchTrees },
    ],
  },
  {
    id: 'dsa-graphs-section',
    title: '🕸️ Graphs',
    content: '',
    items: [
      { id: 'dsa-graphs', title: 'DSA Graphs', content: graphs },
      { id: 'dsa-graphs-implementation', title: 'Graphs Implementation', content: graphs },
      { id: 'dsa-graphs-traversal', title: 'Graphs Traversal', content: bfsAndDfs },
      { id: 'dsa-cycle-detection', title: 'Cycle Detection', content: unionFind },
    ],
  },
  {
    id: 'dsa-shortest-path-section',
    title: '🛣️ Shortest Path',
    content: '',
    items: [
      { id: 'dsa-shortest-path', title: 'Shortest Path', content: shortestPathAlgorithms },
      { id: 'dsa-dijkstra-algorithm', title: "Dijkstra's Algorithm", content: dijkstraAlgorithm },
      { id: 'dsa-bellman-ford-algorithm', title: 'Bellman-Ford Algorithm', content: shortestPathAlgorithms },
    ],
  },
  {
    id: 'dsa-mst-section',
    title: '🌲 Minimum Spanning Tree (MST)',
    content: '',
    items: [
      { id: 'dsa-minimum-spanning-tree', title: 'Minimum Spanning Tree', content: minimumSpanningTree },
      { id: 'dsa-prims-algorithm', title: "Prim's Algorithm", content: minimumSpanningTree },
      { id: 'dsa-kruskals-algorithm', title: "Kruskal's Algorithm", content: minimumSpanningTree },
    ],
  },
  {
    id: 'dsa-maximum-flow-section',
    title: '🌊 Maximum Flow',
    content: '',
    items: [
      { id: 'dsa-maximum-flow', title: 'Maximum Flow', content: graphs },
      { id: 'dsa-ford-fulkerson-algorithm', title: 'Ford-Fulkerson Algorithm', content: graphs },
      { id: 'dsa-edmonds-karp-algorithm', title: 'Edmonds-Karp Algorithm', content: graphs },
    ],
  },
  {
    id: 'dsa-time-complexity-section',
    title: '⏱️ Time Complexity',
    content: '',
    items: [
      { id: 'dsa-time-complexity-intro', title: 'Introduction', content: dsaComplexityAnalysis },
      { id: 'dsa-bubble-sort-time-complexity', title: 'Bubble Sort Time Complexity', content: sortingAlgorithms },
      { id: 'dsa-selection-sort-time-complexity', title: 'Selection Sort Time Complexity', content: sortingAlgorithms },
      { id: 'dsa-insertion-sort-time-complexity', title: 'Insertion Sort Time Complexity', content: sortingAlgorithms },
      { id: 'dsa-quick-sort-time-complexity', title: 'Quick Sort Time Complexity', content: sortingAlgorithms },
      { id: 'dsa-counting-sort-time-complexity', title: 'Counting Sort Time Complexity', content: sortingAlgorithms },
      { id: 'dsa-radix-sort-time-complexity', title: 'Radix Sort Time Complexity', content: sortingAlgorithms },
      { id: 'dsa-merge-sort-time-complexity', title: 'Merge Sort Time Complexity', content: sortingAlgorithms },
      { id: 'dsa-linear-search-time-complexity', title: 'Linear Search Time Complexity', content: arrays },
      { id: 'dsa-binary-search-time-complexity', title: 'Binary Search Time Complexity', content: binarySearch },
    ],
  },
  {
    id: 'dsa-reference-section',
    title: '📖 DSA Reference',
    content: '',
    items: [
      { id: 'dsa-euclidean-algorithm', title: 'Euclidean Algorithm', content: mathAndNumberTheory },
      { id: 'dsa-huffman-coding', title: 'Huffman Coding', content: greedyAlgorithms },
      { id: 'dsa-tsp', title: 'Traveling Salesman Problem (TSP)', content: backtracking },
      { id: 'dsa-knapsack', title: '0/1 Knapsack', content: dynamicProgramming },
      { id: 'dsa-memoization', title: 'Memoization', content: dynamicProgramming },
      { id: 'dsa-tabulation', title: 'Tabulation', content: dynamicProgramming },
      { id: 'dsa-dynamic-programming', title: 'Dynamic Programming', content: dynamicProgramming },
      { id: 'dsa-greedy-algorithms', title: 'Greedy Algorithms', content: greedyAlgorithms },
    ],
  },
  {
    id: 'dsa-practice-section',
    title: '💻 DSA Practice',
    content: '',
    items: [
      { id: 'dsa-examples', title: 'DSA Examples', content: top40 },
      { id: 'dsa-exercises', title: 'DSA Exercises', content: top35 },
      { id: 'dsa-quiz', title: 'DSA Quiz', content: top50MustKnow },
      { id: 'dsa-syllabus', title: 'DSA Syllabus', content: dsaRoadMap },
      { id: 'dsa-study-plan', title: 'DSA Study Plan', content: divideAndConquer },
    ],
  },
];
