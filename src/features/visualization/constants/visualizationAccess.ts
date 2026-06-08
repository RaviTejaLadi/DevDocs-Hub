import { isImplementedVisualizationId } from '../visualizationRegistry';
import { VISUALIZATIONS } from './visualizations';
import type { VisualizationDefinition } from '../types';

export const getVisualizations = (): VisualizationDefinition[] =>
  VISUALIZATIONS.map((visualization) => ({
    ...visualization,
    available: isImplementedVisualizationId(visualization.id),
  }));

export const getVisualizationById = (id: string): VisualizationDefinition | undefined =>
  getVisualizations().find((visualization) => visualization.id === id);
