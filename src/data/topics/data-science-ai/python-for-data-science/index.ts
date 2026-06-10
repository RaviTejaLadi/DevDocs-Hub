import type { TopicItem } from '@/data/topics';
import data_cleaning from './data-cleaning.mdx?raw';
import introduction from './introduction.mdx?raw';
import matplotlib from './matplotlib.mdx?raw';
import numpy from './numpy.mdx?raw';
import pandas from './pandas.mdx?raw';
import seaborn from './seaborn.mdx?raw';

export const pythonForDataScienceTopics: TopicItem[] = [
  { id: 'python-for-data-science-data-cleaning', title: 'Data Cleaning', content: data_cleaning },
  { id: 'python-for-data-science-introduction', title: '📖 Introduction', content: introduction },
  { id: 'python-for-data-science-matplotlib', title: 'Matplotlib', content: matplotlib },
  { id: 'python-for-data-science-numpy', title: 'Numpy', content: numpy },
  { id: 'python-for-data-science-pandas', title: 'Pandas', content: pandas },
  { id: 'python-for-data-science-seaborn', title: 'Seaborn', content: seaborn },
];
