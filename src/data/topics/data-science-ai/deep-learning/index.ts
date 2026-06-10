import type { TopicItem } from '@/data/topics';
import cnn from './cnn.mdx?raw';
import introduction from './introduction.mdx?raw';
import neural_networks from './neural-networks.mdx?raw';
import pytorch from './pytorch.mdx?raw';
import rnns from './rnns.mdx?raw';
import tensorflow from './tensorflow.mdx?raw';
import transformers from './transformers.mdx?raw';

export const deepLearningTopics: TopicItem[] = [
  { id: 'deep-learning-cnn', title: 'Cnn', content: cnn },
  { id: 'deep-learning-introduction', title: '📖 Introduction', content: introduction },
  { id: 'deep-learning-neural-networks', title: 'Neural Networks', content: neural_networks },
  { id: 'deep-learning-pytorch', title: 'Pytorch', content: pytorch },
  { id: 'deep-learning-rnns', title: 'Rnns', content: rnns },
  { id: 'deep-learning-tensorflow', title: 'Tensorflow', content: tensorflow },
  { id: 'deep-learning-transformers', title: 'Transformers', content: transformers },
];
