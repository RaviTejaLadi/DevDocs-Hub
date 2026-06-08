import type { VisualizationCategory } from '../types';

export type VisualizationCategoryMeta = {
  id: VisualizationCategory;
  labelKey: string;
  descriptionKey: string;
  order: number;
};

export const VISUALIZATION_CATEGORIES: VisualizationCategoryMeta[] = [
  {
    id: 'loops',
    labelKey: 'visualization.category.loops',
    descriptionKey: 'visualization.category.loopsDescription',
    order: 1,
  },
  {
    id: 'data-structures',
    labelKey: 'visualization.category.dataStructures',
    descriptionKey: 'visualization.category.dataStructuresDescription',
    order: 2,
  },
  {
    id: 'javascript',
    labelKey: 'visualization.category.javascript',
    descriptionKey: 'visualization.category.javascriptDescription',
    order: 3,
  },
];

export const getCategoryMeta = (id: VisualizationCategory) =>
  VISUALIZATION_CATEGORIES.find((category) => category.id === id);
