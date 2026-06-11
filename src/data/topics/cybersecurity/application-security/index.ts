import type { TopicItem } from '@/data/topics';

export const applicationSecurityTopics: TopicItem[] = [
  {
    id: 'application-security-introduction',
    title: '📖 Introduction',
    content: '',
    contentLoader: () => import('./introduction.mdx?raw'),
  },
  {
    id: 'application-security-owasp-top-10',
    title: 'OWASP Top 10',
    content: '',
    contentLoader: () => import('./owasp-top-10.mdx?raw'),
  },
  {
    id: 'application-security-secure-coding',
    title: 'Secure Coding',
    content: '',
    contentLoader: () => import('./secure-coding.mdx?raw'),
  },
  {
    id: 'application-security-api-security',
    title: 'API Security',
    content: '',
    contentLoader: () => import('./api-security.mdx?raw'),
  },
  {
    id: 'application-security-authentication-security',
    title: 'Authentication Security',
    content: '',
    contentLoader: () => import('./authentication-security.mdx?raw'),
  },
];
