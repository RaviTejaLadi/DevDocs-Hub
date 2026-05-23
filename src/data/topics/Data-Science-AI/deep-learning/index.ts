import type { TopicItem } from '@/data/topics';
import cnn from './cnn.md?raw';
import introduction from './introduction.md?raw';
import neural_networks from './neural-networks.md?raw';
import pytorch from './pytorch.md?raw';
import rnns from './rnns.md?raw';
import tensorflow from './tensorflow.md?raw';
import transformers from './transformers.md?raw';

export const deepLearningTopics: TopicItem[] = [
  { id: 'deep-learning-cnn', title: 'Cnn', content: cnn },
  { id: 'deep-learning-introduction', title: '📖 Introduction', content: introduction },
  { id: 'deep-learning-neural-networks', title: 'Neural Networks', content: neural_networks },
  { id: 'deep-learning-pytorch', title: 'Pytorch', content: pytorch },
  { id: 'deep-learning-rnns', title: 'Rnns', content: rnns },
  { id: 'deep-learning-tensorflow', title: 'Tensorflow', content: tensorflow },
  { id: 'deep-learning-transformers', title: 'Transformers', content: transformers },
];
