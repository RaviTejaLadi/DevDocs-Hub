import type { TopicItem } from '@/data/topics';
import data_cleaning from './data-cleaning.md?raw';
import introduction from './introduction.md?raw';
import matplotlib from './matplotlib.md?raw';
import numpy from './numpy.md?raw';
import pandas from './pandas.md?raw';
import seaborn from './seaborn.md?raw';

export const pythonForDataScienceTopics: TopicItem[] = [
  { id: 'python-for-data-science-data-cleaning', title: "Data Cleaning", content: data_cleaning },
  { id: 'python-for-data-science-introduction', title: "📖 Introduction", content: introduction },
  { id: 'python-for-data-science-matplotlib', title: "Matplotlib", content: matplotlib },
  { id: 'python-for-data-science-numpy', title: "Numpy", content: numpy },
  { id: 'python-for-data-science-pandas', title: "Pandas", content: pandas },
  { id: 'python-for-data-science-seaborn', title: "Seaborn", content: seaborn },
];
