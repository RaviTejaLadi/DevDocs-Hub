import type { VisualizationCategory } from '.';

export type GenericVisualizationStep = {
  line: number;
  caption: string;
  consoleOutput: string[];
  state: Array<{ label: string; value: string }>;
};

export type GenericVisualizationConfig = {
  category: VisualizationCategory;
  title: string;
  description: string;
  overview: string;
  howItWorks: readonly string[];
  whenToUse: string;
  takeaway: string;
  code: readonly string[];
  steps: readonly GenericVisualizationStep[];
};
