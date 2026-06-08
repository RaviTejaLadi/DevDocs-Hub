import { GitBranch, Layers, Repeat } from 'lucide-react';
import type { VisualizationMeta } from '../types';

export const VISUALIZATIONS: VisualizationMeta[] = [
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
    id: 'array-iteration',
    label: 'Array Iteration',
    description:
      'Compare for…of, forEach, and map on the same scores array — understand values, side effects, and new arrays.',
    category: 'data-structures',
    icon: Layers,
  },
];
