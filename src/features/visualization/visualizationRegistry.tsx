import type { ComponentType } from 'react';
import { ArrayIterationVisualization } from './components/visualizations/ArrayIterationVisualization';
import { ForLoopVisualization } from './components/visualizations/ForLoopVisualization';
import { GenericConceptVisualization } from './components/visualizations/GenericConceptVisualization';
import { WhileLoopVisualization } from './components/visualizations/WhileLoopVisualization';
import { GENERIC_VISUALIZATION_CONFIGS } from './constants/genericVisualizationConfigs';

const genericEntries = Object.fromEntries(
  Object.entries(GENERIC_VISUALIZATION_CONFIGS).map(([id, config]) => [
    id,
    () => <GenericConceptVisualization topicId={id} config={config} />,
  ])
) as Record<string, ComponentType>;

/** Add a visualization page here — routing and list "available" state follow automatically. */
export const VISUALIZATION_PAGE_COMPONENTS = {
  'for-loop': ForLoopVisualization,
  'while-loop': WhileLoopVisualization,
  'array-iteration': ArrayIterationVisualization,
  ...genericEntries,
} as const satisfies Record<string, ComponentType>;

export type ImplementedVisualizationId = keyof typeof VISUALIZATION_PAGE_COMPONENTS;

export function isImplementedVisualizationId(id: string): id is ImplementedVisualizationId {
  return id in VISUALIZATION_PAGE_COMPONENTS;
}

export function getVisualizationPageComponent(id: string): ComponentType | undefined {
  if (!isImplementedVisualizationId(id)) return undefined;
  return VISUALIZATION_PAGE_COMPONENTS[id];
}
