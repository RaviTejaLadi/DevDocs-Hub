import type { TopicItem } from '@/data/topics';

export const fundamentalsTopics: TopicItem[] = [
  {
    id: 'fundamentals-introduction',
    title: '📖 Introduction',
    content: '',
    contentLoader: () => import('./introduction.mdx?raw'),
  },
  {
    id: 'fundamentals-cia-triad',
    title: 'CIA Triad',
    content: '',
    contentLoader: () => import('./cia-triad.mdx?raw'),
  },
  {
    id: 'fundamentals-threat-landscape',
    title: 'Threat Landscape',
    content: '',
    contentLoader: () => import('./threat-landscape.mdx?raw'),
  },
  {
    id: 'fundamentals-risk-management',
    title: 'Risk Management',
    content: '',
    contentLoader: () => import('./risk-management.mdx?raw'),
  },
  {
    id: 'fundamentals-security-policies',
    title: 'Security Policies',
    content: '',
    contentLoader: () => import('./security-policies.mdx?raw'),
  },
];
