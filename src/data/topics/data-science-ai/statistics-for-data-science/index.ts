import type { TopicItem } from '@/data/topics';
import descriptive_statistics from './descriptive-statistics.mdx?raw';
import hypothesis_testing from './hypothesis-testing.mdx?raw';
import introduction from './introduction.mdx?raw';
import probability_basics from './probability-basics.mdx?raw';
import regression_analysis from './regression-analysis.mdx?raw';

export const statisticsForDataScienceTopics: TopicItem[] = [
  {
    id: 'statistics-for-data-science-descriptive-statistics',
    title: 'Descriptive Statistics',
    content: descriptive_statistics,
  },
  { id: 'statistics-for-data-science-hypothesis-testing', title: 'Hypothesis Testing', content: hypothesis_testing },
  { id: 'statistics-for-data-science-introduction', title: '📖 Introduction', content: introduction },
  { id: 'statistics-for-data-science-probability-basics', title: 'Probability Basics', content: probability_basics },
  { id: 'statistics-for-data-science-regression-analysis', title: 'Regression Analysis', content: regression_analysis },
];
