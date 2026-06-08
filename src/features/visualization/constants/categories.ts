import type { VisualizationCategory } from '../types';

export type VisualizationCategoryMeta = {
  id: VisualizationCategory;
  label: string;
  description: string;
  order: number;
};

export const VISUALIZATION_CATEGORIES: VisualizationCategoryMeta[] = [
  {
    id: 'loops',
    label: 'Loops',
    description:
      'Control-flow loops that repeat code — see how conditions, counters, and loop bodies interact.',
    order: 1,
  },
  {
    id: 'data-structures',
    label: 'Data structures',
    description:
      'Arrays, stacks, queues, linked lists, and maps — see how data is stored, traversed, and transformed.',
    order: 2,
  },
  {
    id: 'javascript',
    label: 'JavaScript',
    description: 'Core language mechanics explained with live step-by-step visuals.',
    order: 3,
  },
];

export const getCategoryMeta = (id: VisualizationCategory) =>
  VISUALIZATION_CATEGORIES.find((category) => category.id === id);
