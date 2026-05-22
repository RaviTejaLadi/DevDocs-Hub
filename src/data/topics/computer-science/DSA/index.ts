import type { TopicItem } from '@/data/topics';
import dsaIntro from './dsa-intro/intro.md?raw';
import dsaRoadMap from './dsa-intro/dsa-roadmap.md?raw';
import dsaComplexityAnalysis from './dsa-intro/complexity-analysis-big-o.md?raw';
import dsaHowToApproachProblems from './dsa-intro/how-to-approach-problems.md?raw';
import dsaProblemSolvingPatternsOverview from './dsa-intro/problem-solving-patterns-overview.md?raw';
import dsaInterviewPreparationGuide from './dsa-intro/interview-preparation-guide.md?raw';
import arrays from './dsa-concepts/arrays.md?raw';
import strings from './dsa-concepts/strings.md?raw';
import linkedList from './dsa-concepts/linked-list.md?raw';
import stack from './dsa-concepts/stack.md?raw';
import queues from './dsa-concepts/queues.md?raw';
import deque from './dsa-concepts/deque.md?raw';
import hashTables from './dsa-concepts/hash-tables.md?raw';
import trees from './dsa-concepts/trees.md?raw';
import binarySearchTrees from './dsa-concepts/binary-search-trees.md?raw';
import heaps from './dsa-concepts/heaps.md?raw';
import priorityQueues from './dsa-concepts/priority-queues.md?raw';
import graphs from './dsa-concepts/graphs.md?raw';
import trie from './dsa-concepts/trie.md?raw';
import matrices2dArrays from './dsa-concepts/matrices-2d-arrays.md?raw';
import setsMapsInJs from './dsa-concepts/sets-maps-in-js.md?raw';
import binarySearch from './algorithms/binary-search.md?raw';
import sortingAlgorithms from './algorithms/sorting-algorithms.md?raw';
import twoPointers from './algorithms/two-pointers.md?raw';
import slidingWindow from './algorithms/sliding-window.md?raw';
import recursion from './algorithms/recursion.md?raw';
import backtracking from './algorithms/backtracking.md?raw';
import greedyAlgorithms from './algorithms/greedy-algorithms.md?raw';
import dynamicProgramming from './algorithms/dynamic-programming.md?raw';
import divideAndConquer from './algorithms/divide-and-conquer.md?raw';
import bitManipulation from './algorithms/bit-manipulation.md?raw';
import mathAndNumberTheory from './algorithms/math-and-number-theory.md?raw';
import bfsAndDfs from './algorithms/bfs-and-dfs.md?raw';
import topologicalSort from './algorithms/topological-sort.md?raw';
import shortestPathAlgorithms from './algorithms/shortest-path-algorithms.md?raw';
import minimumSpanningTree from './algorithms/minimum-spanning-tree.md?raw';
import unionFind from './algorithms/union-find.md?raw';
import dijkstraAlgorithm from './algorithms/dijkstra-algorithm.md?raw';
import kadanesAlgorithm from './algorithms/kadanes-algorithm.md?raw';
import top35 from './Q-And-A/q-and-a.md?raw';
import top40 from './Q-And-A/top-40-array.md?raw';
import top20Object from './Q-And-A/top-20-object.md?raw';
import top20String from './Q-And-A/top-20-string.md?raw';
import top25LinkedList from './Q-And-A/top-25-linked-list.md?raw';
import top25Tree from './Q-And-A/top-25-tree.md?raw';
import top25Graph from './Q-And-A/top-25-graph.md?raw';
import top25DynamicProgramming from './Q-And-A/top-25-dynamic-programming.md?raw';
import top25StackQueue from './Q-And-A/top-25-stack-queue.md?raw';
import top25BinarySearch from './Q-And-A/top-25-binary-search.md?raw';
import top25TwoPointersSlidingWindow from './Q-And-A/top-25-two-pointers-sliding-window.md?raw';
import top50MustKnow from './Q-And-A/top-50-must-know.md?raw';

export const dsaData: TopicItem[] = [
  {
    id: 'dsa-getting-started',
    title: '🚀 Getting Started',
    content: '',
    items: [
      { id: 'dsa-intro', title: '📚 Introduction', content: dsaIntro },
      { id: 'dsa-roadmap', title: '🗺️ Roadmap', content: dsaRoadMap },
      { id: 'dsa-complexity-analysis', title: '📈 Complexity Analysis (Big O)', content: dsaComplexityAnalysis },
      { id: 'dsa-how-to-approach-problems', title: '🎯 How to Approach DSA Problems', content: dsaHowToApproachProblems },
      {
        id: 'dsa-problem-solving-patterns-overview',
        title: '🧩 Problem Solving Patterns Overview',
        content: dsaProblemSolvingPatternsOverview,
      },
      { id: 'dsa-interview-preparation-guide', title: '💼 Interview Preparation Guide', content: dsaInterviewPreparationGuide },
    ],
  },
  {
    id: 'dsa-linear-structures',
    title: '📏 Linear Data Structures',
    content: '',
    items: [
      { id: 'dsa-arrays', title: '🔢 Arrays', content: arrays },
      { id: 'dsa-strings', title: '🔠 Strings', content: strings },
      { id: 'dsa-linked-List', title: '🔗 Linked List', content: linkedList },
      { id: 'dsa-stack', title: '📚 Stack', content: stack },
      { id: 'dsa-queues', title: '🔄 Queues', content: queues },
      { id: 'dsa-deque', title: '↔️ Deque', content: deque },
      { id: 'dsa-matrices-2d-arrays', title: '📊 Matrices & 2D Arrays', content: matrices2dArrays },
      { id: 'dsa-sets-maps-in-js', title: '🗺️ Sets & Maps in JavaScript', content: setsMapsInJs },
    ],
  },
  {
    id: 'dsa-non-linear-structures',
    title: '🌳 Non-Linear Data Structures',
    content: '',
    items: [
      { id: 'dsa-hash-tables', title: '🏷️ Hash Tables', content: hashTables },
      { id: 'dsa-trees', title: '🌳 Trees', content: trees },
      { id: 'dsa-binary-search-trees', title: '🌲 Binary Search Trees', content: binarySearchTrees },
      { id: 'dsa-heaps', title: '⛰️ Heaps', content: heaps },
      { id: 'dsa-priority-queues', title: '📌 Priority Queues', content: priorityQueues },
      { id: 'dsa-graphs', title: '📊 Graphs', content: graphs },
      { id: 'dsa-trie', title: '🔤 Trie', content: trie },
    ],
  },
  {
    id: 'dsa-algorithms',
    title: '⚙️ Algorithms & Patterns',
    content: '',
    items: [
      { id: 'dsa-binary-search', title: '🔍 Binary Search', content: binarySearch },
      { id: 'dsa-sorting-algorithms', title: '📶 Sorting Algorithms', content: sortingAlgorithms },
      { id: 'dsa-two-pointers', title: '👆 Two Pointers', content: twoPointers },
      { id: 'dsa-sliding-window', title: '🪟 Sliding Window', content: slidingWindow },
      { id: 'dsa-recursion', title: '🔁 Recursion', content: recursion },
      { id: 'dsa-backtracking', title: '↩️ Backtracking', content: backtracking },
      { id: 'dsa-greedy-algorithms', title: '💰 Greedy Algorithms', content: greedyAlgorithms },
      { id: 'dsa-dynamic-programming', title: '🧠 Dynamic Programming', content: dynamicProgramming },
      { id: 'dsa-divide-and-conquer', title: '✂️ Divide and Conquer', content: divideAndConquer },
      { id: 'dsa-bit-manipulation', title: '🔢 Bit Manipulation', content: bitManipulation },
      { id: 'dsa-math-and-number-theory', title: '➗ Math & Number Theory', content: mathAndNumberTheory },
      { id: 'dsa-kadanes-algorithm', title: "📐 Kadane's Algorithm", content: kadanesAlgorithm },
    ],
  },
  {
    id: 'dsa-graph-algorithms',
    title: '🕸️ Graph Algorithms',
    content: '',
    items: [
      { id: 'dsa-bfs-and-dfs', title: '🔄 BFS & DFS', content: bfsAndDfs },
      { id: 'dsa-topological-sort', title: '📋 Topological Sort', content: topologicalSort },
      { id: 'dsa-shortest-path-algorithms', title: '🛤️ Shortest Path Algorithms', content: shortestPathAlgorithms },
      { id: 'dsa-dijkstra-algorithm', title: '📍 Dijkstra Algorithm', content: dijkstraAlgorithm },
      { id: 'dsa-minimum-spanning-tree', title: '🌲 Minimum Spanning Tree', content: minimumSpanningTree },
      { id: 'dsa-union-find', title: '🔗 Union Find', content: unionFind },
    ],
  },
  {
    id: 'dsa-q-and-a',
    title: '💼 Interview Questions',
    content: '',
    items: [
      { id: 'top-50-must-know-dsa-questions', title: '⭐ Top 50 Must-Know Questions', content: top50MustKnow },
      { id: 'top-35-most-asked-dsa-questions', title: '🧠 Top 35 General Questions', content: top35 },
      { id: 'dsa-arrays-questions', title: '🔢 Top 40 Array Questions', content: top40 },
      { id: 'dsa-string-questions', title: '🔠 Top 20 String Questions', content: top20String },
      { id: 'dsa-object-questions', title: '📦 Top 20 Objects Questions', content: top20Object },
      { id: 'dsa-linked-list-questions', title: '🔗 Top 25 Linked List Questions', content: top25LinkedList },
      { id: 'dsa-tree-questions', title: '🌳 Top 25 Tree Questions', content: top25Tree },
      { id: 'dsa-graph-questions', title: '📊 Top 25 Graph Questions', content: top25Graph },
      { id: 'dsa-dynamic-programming-questions', title: '🧠 Top 25 Dynamic Programming Questions', content: top25DynamicProgramming },
      { id: 'dsa-stack-queue-questions', title: '📚 Top 25 Stack & Queue Questions', content: top25StackQueue },
      { id: 'dsa-binary-search-questions', title: '🔍 Top 25 Binary Search Questions', content: top25BinarySearch },
      {
        id: 'dsa-two-pointers-sliding-window-questions',
        title: '👆 Top 25 Two Pointers & Sliding Window',
        content: top25TwoPointersSlidingWindow,
      },
    ],
  },
];
