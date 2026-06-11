import type { TopicItem } from '@/data/topics';

export const networkSecurityTopics: TopicItem[] = [
  {
    id: 'network-security-introduction',
    title: '📖 Introduction',
    content: '',
    contentLoader: () => import('./introduction.mdx?raw'),
  },
  {
    id: 'network-security-firewalls',
    title: 'Firewalls',
    content: '',
    contentLoader: () => import('./firewalls.mdx?raw'),
  },
  {
    id: 'network-security-ids-ips',
    title: 'IDS & IPS',
    content: '',
    contentLoader: () => import('./ids-ips.mdx?raw'),
  },
  {
    id: 'network-security-vpn',
    title: 'VPN',
    content: '',
    contentLoader: () => import('./vpn.mdx?raw'),
  },
  {
    id: 'network-security-wireless-security',
    title: 'Wireless Security',
    content: '',
    contentLoader: () => import('./wireless-security.mdx?raw'),
  },
];
