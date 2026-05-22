import type { Topic } from '@/data/topics';
import { Brain, BarChart3, Bot, MessageSquare, Database } from 'lucide-react';
import { pythonForDataScienceTopics } from './python-for-data-science';
import { statisticsForDataScienceTopics } from './statistics-for-data-science';
import { machineLearningTopics } from './machine-learning';
import { deepLearningTopics } from './deep-learning';
import { nlpTopics } from './nlp';
import { dataEngineeringTopics } from './data-engineering';

const CATEGORY = 'data-science-ai';

export const dataScienceAiTopics: Topic[] = [
  {
    id: 'python-for-data-science',
    title: 'Python for Data Science',
    description: 'NumPy, Pandas, visualization, and data cleaning.',
    icon: <BarChart3 className="h-5 w-5" />,
    type: CATEGORY,
    category: CATEGORY,
    items: pythonForDataScienceTopics,
  },
  {
    id: 'statistics-for-data-science',
    title: 'Statistics for Data Science',
    description: 'Descriptive stats, probability, hypothesis testing, regression.',
    icon: <BarChart3 className="h-5 w-5" />,
    type: CATEGORY,
    category: CATEGORY,
    items: statisticsForDataScienceTopics,
  },
  {
    id: 'machine-learning',
    title: 'Machine Learning',
    description: 'Supervised, unsupervised learning, and model evaluation.',
    icon: <Bot className="h-5 w-5" />,
    type: CATEGORY,
    category: CATEGORY,
    items: machineLearningTopics,
  },
  {
    id: 'deep-learning',
    title: 'Deep Learning',
    description: 'Neural networks, CNN, RNN, transformers, PyTorch, TensorFlow.',
    icon: <Brain className="h-5 w-5" />,
    type: CATEGORY,
    category: CATEGORY,
    items: deepLearningTopics,
  },
  {
    id: 'nlp',
    title: 'Natural Language Processing',
    description: 'Text preprocessing, embeddings, and language models.',
    icon: <MessageSquare className="h-5 w-5" />,
    type: CATEGORY,
    category: CATEGORY,
    items: nlpTopics,
  },
  {
    id: 'data-engineering',
    title: 'Data Engineering',
    description: 'ETL, SQL analytics, Spark, and data warehousing.',
    icon: <Database className="h-5 w-5" />,
    type: CATEGORY,
    category: CATEGORY,
    items: dataEngineeringTopics,
  },
];
