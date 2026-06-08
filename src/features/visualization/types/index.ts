import type { LucideIcon } from 'lucide-react';

export type VisualizationCategory = 'javascript' | 'loops' | 'data-structures';

export type VisualizationMeta = {
  id: string;
  label: string;
  description: string;
  category: VisualizationCategory;
  icon: LucideIcon;
};

export type VisualizationDefinition = VisualizationMeta & {
  available: boolean;
};
