import type { TopicItem } from '@/data/topics';

import introduction from './introduction.mdx?raw';
import dataCollection from './data-collection.mdx?raw';
import dataRepresentation from './data-representation.mdx?raw';
import meanMedianMode from './mean-median-mode.mdx?raw';
import measuresDispersion from './measures-dispersion.mdx?raw';
import frequencyDistribution from './frequency-distribution.mdx?raw';
import histogramsGraphs from './histograms-graphs.mdx?raw';
import probabilityDistributionBasics from './probability-distribution-basics.mdx?raw';
import correlation from './correlation.mdx?raw';
import regression from './regression.mdx?raw';
import statisticalAnalysis from './statistical-analysis.mdx?raw';

export const statisticsTopics: TopicItem[] = [
  { id: 'statistics-introduction', title: '📖 Introduction', content: introduction },
  { id: 'statistics-data-collection', title: '📋 Data Collection', content: dataCollection },
  { id: 'statistics-data-representation', title: '📊 Data Representation', content: dataRepresentation },
  { id: 'statistics-mean-median-mode', title: '📈 Mean, Median, and Mode', content: meanMedianMode },
  { id: 'statistics-measures-dispersion', title: '📉 Measures of Dispersion', content: measuresDispersion },
  { id: 'statistics-frequency-distribution', title: '📶 Frequency Distribution', content: frequencyDistribution },
  { id: 'statistics-histograms-graphs', title: '📊 Histograms and Graphs', content: histogramsGraphs },
  {
    id: 'statistics-probability-distribution-basics',
    title: '🎲 Probability Distribution Basics',
    content: probabilityDistributionBasics,
  },
  { id: 'statistics-correlation', title: '🔗 Correlation', content: correlation },
  { id: 'statistics-regression', title: '📉 Regression', content: regression },
  { id: 'statistics-statistical-analysis', title: '🔬 Statistical Analysis', content: statisticalAnalysis },
];
