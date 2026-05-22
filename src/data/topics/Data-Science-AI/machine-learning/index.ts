import type { TopicItem } from '@/data/topics';
import feature_engineering from './feature-engineering.md?raw';
import introduction from './introduction.md?raw';
import model_evaluation from './model-evaluation.md?raw';
import scikit_learn from './scikit-learn.md?raw';
import supervised_learning from './supervised-learning.md?raw';
import unsupervised_learning from './unsupervised-learning.md?raw';

export const machineLearningTopics: TopicItem[] = [
  { id: 'machine-learning-feature-engineering', title: "Feature Engineering", content: feature_engineering },
  { id: 'machine-learning-introduction', title: "📖 Introduction", content: introduction },
  { id: 'machine-learning-model-evaluation', title: "Model Evaluation", content: model_evaluation },
  { id: 'machine-learning-scikit-learn', title: "Scikit Learn", content: scikit_learn },
  { id: 'machine-learning-supervised-learning', title: "Supervised Learning", content: supervised_learning },
  { id: 'machine-learning-unsupervised-learning', title: "Unsupervised Learning", content: unsupervised_learning },
];
