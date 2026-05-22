import type { TopicItem } from '@/data/topics';
import githubBestPractices from './github-best-practices.md?raw';
import stackOverflowTips from './stack-overflow-tips.md?raw';
import developerCommunities from './developer-communities.md?raw';
import openSourceContribution from './open-source-contribution.md?raw';
import techBlogsNewsletters from './tech-blogs-newsletters.md?raw';

export const communityAndNetworkingTopics: TopicItem[] = [
  { id: 'resources-github-best-practices', title: '🐙 GitHub Best Practices', content: githubBestPractices },
  { id: 'resources-stack-overflow-tips', title: '📚 Stack Overflow Tips', content: stackOverflowTips },
  { id: 'resources-developer-communities', title: '👥 Developer Communities', content: developerCommunities },
  { id: 'resources-open-source-contribution', title: '🌐 Open Source Contribution', content: openSourceContribution },
  { id: 'resources-tech-blogs-newsletters', title: '📰 Tech Blogs & Newsletters', content: techBlogsNewsletters },
];
