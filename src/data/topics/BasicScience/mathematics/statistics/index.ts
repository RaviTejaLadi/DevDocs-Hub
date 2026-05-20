import type { TopicItem } from '@/data/topics';

import introduction from './introduction.md?raw';
import dataCollection from './data-collection.md?raw';
import dataRepresentation from './data-representation.md?raw';
import meanMedianMode from './mean-median-mode.md?raw';
import measuresDispersion from './measures-dispersion.md?raw';
import frequencyDistribution from './frequency-distribution.md?raw';
import histogramsGraphs from './histograms-graphs.md?raw';
import probabilityDistributionBasics from './probability-distribution-basics.md?raw';
import correlation from './correlation.md?raw';
import regression from './regression.md?raw';
import statisticalAnalysis from './statistical-analysis.md?raw';

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
