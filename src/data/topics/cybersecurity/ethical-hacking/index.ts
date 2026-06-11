import type { TopicItem } from '@/data/topics';

export const ethicalHackingTopics: TopicItem[] = [
  {
    id: 'ethical-hacking-introduction',
    title: '📖 Introduction',
    content: '',
    contentLoader: () => import('./introduction.mdx?raw'),
  },
  {
    id: 'ethical-hacking-reconnaissance',
    title: 'Reconnaissance',
    content: '',
    contentLoader: () => import('./reconnaissance.mdx?raw'),
  },
  {
    id: 'ethical-hacking-vulnerability-assessment',
    title: 'Vulnerability Assessment',
    content: '',
    contentLoader: () => import('./vulnerability-assessment.mdx?raw'),
  },
  {
    id: 'ethical-hacking-penetration-testing',
    title: 'Penetration Testing',
    content: '',
    contentLoader: () => import('./penetration-testing.mdx?raw'),
  },
  {
    id: 'ethical-hacking-web-app-pentesting',
    title: 'Web App Pentesting',
    content: '',
    contentLoader: () => import('./web-app-pentesting.mdx?raw'),
  },
];
