import type { TopicItem } from '@/data/topics';
import fourier_series from './fourier-series.md?raw';
import introduction from './introduction.md?raw';
import laplace_transform from './laplace-transform.md?raw';
import sampling from './sampling.md?raw';
import z_transform from './z-transform.md?raw';

export const signalsSystemsTopics: TopicItem[] = [
  { id: 'signals-systems-fourier-series', title: "Fourier Series", content: fourier_series },
  { id: 'signals-systems-introduction', title: "📖 Introduction", content: introduction },
  { id: 'signals-systems-laplace-transform', title: "Laplace Transform", content: laplace_transform },
  { id: 'signals-systems-sampling', title: "Sampling", content: sampling },
  { id: 'signals-systems-z-transform', title: "Z Transform", content: z_transform },
];
