import type { ComponentType } from 'react';
import { ArrayIterationVisualization } from './components/visualizations/ArrayIterationVisualization';
import { AsyncAwaitVisualization } from './components/visualizations/AsyncAwaitVisualization';
import { CallStackVisualization } from './components/visualizations/CallStackVisualization';
import { ClosuresVisualization } from './components/visualizations/ClosuresVisualization';
import { DoWhileVisualization } from './components/visualizations/DoWhileVisualization';
import { EventLoopVisualization } from './components/visualizations/EventLoopVisualization';
import { ForLoopVisualization } from './components/visualizations/ForLoopVisualization';
import { ForInLoopVisualization } from './components/visualizations/ForInLoopVisualization';
import { ForOfLoopVisualization } from './components/visualizations/ForOfLoopVisualization';
import { HashMapVisualization } from './components/visualizations/HashMapVisualization';
import { HoistingTdzVisualization } from './components/visualizations/HoistingTdzVisualization';
import { LinkedListVisualization } from './components/visualizations/LinkedListVisualization';
import { NestedLoopsVisualization } from './components/visualizations/NestedLoopsVisualization';
import { QueueVisualization } from './components/visualizations/QueueVisualization';
import { RecursionVisualization } from './components/visualizations/RecursionVisualization';
import { ReferencesVsValuesVisualization } from './components/visualizations/ReferencesVsValuesVisualization';
import { ScopeChainVisualization } from './components/visualizations/ScopeChainVisualization';
import { StackVisualization } from './components/visualizations/StackVisualization';
import { WhileLoopVisualization } from './components/visualizations/WhileLoopVisualization';

/** Add a visualization page here — routing and list "available" state follow automatically. */
export const VISUALIZATION_PAGE_COMPONENTS: Record<string, ComponentType> = {
  'for-loop': ForLoopVisualization,
  'while-loop': WhileLoopVisualization,
  'array-iteration': ArrayIterationVisualization,
  'do-while': DoWhileVisualization,
  'for-of-loop': ForOfLoopVisualization,
  'for-in-loop': ForInLoopVisualization,
  'nested-loops': NestedLoopsVisualization,
  stack: StackVisualization,
  queue: QueueVisualization,
  'linked-list': LinkedListVisualization,
  'hash-map': HashMapVisualization,
  'event-loop': EventLoopVisualization,
  'call-stack': CallStackVisualization,
  closures: ClosuresVisualization,
  'hoisting-tdz': HoistingTdzVisualization,
  'scope-chain': ScopeChainVisualization,
  recursion: RecursionVisualization,
  'references-vs-values': ReferencesVsValuesVisualization,
  'async-await': AsyncAwaitVisualization,
};

export type ImplementedVisualizationId = keyof typeof VISUALIZATION_PAGE_COMPONENTS;

export function isImplementedVisualizationId(id: string): id is ImplementedVisualizationId {
  return id in VISUALIZATION_PAGE_COMPONENTS;
}

export function getVisualizationPageComponent(id: string): ComponentType | undefined {
  if (!isImplementedVisualizationId(id)) return undefined;
  return VISUALIZATION_PAGE_COMPONENTS[id];
}
