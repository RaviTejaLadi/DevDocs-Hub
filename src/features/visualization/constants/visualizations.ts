import {
  ArrowUpFromLine,
  Binary,
  Box,
  Braces,
  Copy,
  GitBranch,
  GitMerge,
  Grid3x3,
  Layers,
  List,
  ListOrdered,
  Lock,
  RefreshCcw,
  Repeat,
  RotateCcw,
  ScanSearch,
  Timer,
  Unlink,
  Workflow,
} from 'lucide-react';
import type { VisualizationMeta } from '../types';

export const VISUALIZATIONS: VisualizationMeta[] = [
  // Loops
  {
    id: 'for-loop',
    label: 'For Loop',
    description:
      'Learn the init → condition → body → increment cycle with indexed array access and full concept explanation.',
    category: 'loops',
    icon: Repeat,
  },
  {
    id: 'while-loop',
    label: 'While Loop',
    description:
      'See condition-first repetition, manual counter updates, and when the loop exits — with step-by-step narration.',
    category: 'loops',
    icon: GitBranch,
  },
  {
    id: 'do-while',
    label: 'Do…While Loop',
    description:
      'Run the body at least once, then re-check the condition — watch how post-test loops differ from while.',
    category: 'loops',
    icon: RotateCcw,
  },
  {
    id: 'for-of-loop',
    label: 'For…of Loop',
    description:
      'Iterate values directly from arrays and iterables — no manual index, with break and continue support.',
    category: 'loops',
    icon: List,
  },
  {
    id: 'for-in-loop',
    label: 'For…in Loop',
    description:
      'Walk enumerable keys on objects and arrays — see inherited properties, ordering, and when to avoid for…in.',
    category: 'loops',
    icon: Braces,
  },
  {
    id: 'nested-loops',
    label: 'Nested Loops',
    description:
      'Step through loops inside loops — trace inner and outer counters, 2D grids, and combinatorial patterns.',
    category: 'loops',
    icon: Grid3x3,
  },

  // Data structures
  {
    id: 'array-iteration',
    label: 'Array Iteration',
    description:
      'Compare for…of, forEach, and map on the same scores array — understand values, side effects, and new arrays.',
    category: 'data-structures',
    icon: Layers,
  },
  {
    id: 'stack',
    label: 'Stack (LIFO)',
    description:
      'Push and pop from the top — visualize Last-In-First-Out with a call history or plate-stack analogy.',
    category: 'data-structures',
    icon: Box,
  },
  {
    id: 'queue',
    label: 'Queue (FIFO)',
    description:
      'Enqueue at the rear and dequeue from the front — see First-In-First-Out processing order step by step.',
    category: 'data-structures',
    icon: ListOrdered,
  },
  {
    id: 'linked-list',
    label: 'Linked List',
    description:
      'Follow node pointers from head to tail — insert, traverse, and remove without contiguous memory.',
    category: 'data-structures',
    icon: Unlink,
  },
  {
    id: 'hash-map',
    label: 'Hash Map',
    description:
      'Map keys to values with O(1) lookups — watch hashing, collisions, and how objects store properties.',
    category: 'data-structures',
    icon: Binary,
  },

  // JavaScript
  {
    id: 'event-loop',
    label: 'Event Loop',
    description:
      'Watch the call stack drain, microtasks run, then macrotasks — setTimeout vs Promise ordering made visible.',
    category: 'javascript',
    icon: Workflow,
  },
  {
    id: 'call-stack',
    label: 'Call Stack',
    description:
      'See functions push and pop frames — trace nested calls, return values, and stack overflow from deep recursion.',
    category: 'javascript',
    icon: RefreshCcw,
  },
  {
    id: 'closures',
    label: 'Closures',
    description:
      'Inner functions remember outer variables — step through lexical scope, captured bindings, and factory patterns.',
    category: 'javascript',
    icon: Lock,
  },
  {
    id: 'hoisting-tdz',
    label: 'Hoisting & TDZ',
    description:
      'See var, let, and const declarations lifted — and why let/const throw before their line in the Temporal Dead Zone.',
    category: 'javascript',
    icon: ArrowUpFromLine,
  },
  {
    id: 'scope-chain',
    label: 'Scope Chain',
    description:
      'Resolve identifiers from inner to outer scopes — block vs function scope and shadowed variables in action.',
    category: 'javascript',
    icon: ScanSearch,
  },
  {
    id: 'recursion',
    label: 'Recursion',
    description:
      'A function calls itself with a smaller problem — visualize base case, call stack growth, and unwinding returns.',
    category: 'javascript',
    icon: GitMerge,
  },
  {
    id: 'references-vs-values',
    label: 'References vs Values',
    description:
      'Primitives copy by value; objects share references — watch mutations ripple through aliases and function args.',
    category: 'javascript',
    icon: Copy,
  },
  {
    id: 'async-await',
    label: 'Async / Await',
    description:
      'Pause and resume async functions — see promises resolve, microtasks schedule, and control flow between awaits.',
    category: 'javascript',
    icon: Timer,
  },
];
