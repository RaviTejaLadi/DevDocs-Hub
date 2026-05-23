import type { TopicItem } from '@/data/topics';

import introduction from './introduction.md?raw';
import basicProbability from './basic-probability.md?raw';
import conditionalProbability from './conditional-probability.md?raw';
import independentDependentEvents from './independent-dependent-events.md?raw';
import randomVariables from './random-variables.md?raw';
import probabilityDistributions from './probability-distributions.md?raw';
import bayesTheorem from './bayes-theorem.md?raw';
import expectedValue from './expected-value.md?raw';
import combinationsProbability from './combinations-probability.md?raw';
import realLifeApplications from './real-life-applications.md?raw';

export const probabilityTopics: TopicItem[] = [
  { id: 'probability-introduction', title: '📖 Introduction', content: introduction },
  { id: 'probability-basic-probability', title: '🎲 Basic Probability', content: basicProbability },
  { id: 'probability-conditional-probability', title: '🔀 Conditional Probability', content: conditionalProbability },
  {
    id: 'probability-independent-dependent-events',
    title: '🔗 Independent and Dependent Events',
    content: independentDependentEvents,
  },
  { id: 'probability-random-variables', title: '🎯 Random Variables', content: randomVariables },
  {
    id: 'probability-probability-distributions',
    title: '📊 Probability Distributions',
    content: probabilityDistributions,
  },
  { id: 'probability-bayes-theorem', title: "🧠 Bayes' Theorem", content: bayesTheorem },
  { id: 'probability-expected-value', title: '💰 Expected Value', content: expectedValue },
  {
    id: 'probability-combinations-probability',
    title: '🔢 Combinations in Probability',
    content: combinationsProbability,
  },
  {
    id: 'probability-real-life-applications',
    title: '🌍 Real-life Probability Applications',
    content: realLifeApplications,
  },
];
