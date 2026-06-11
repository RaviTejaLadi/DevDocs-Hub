import type { TopicItem } from '@/data/topics';

export const cryptographyTopics: TopicItem[] = [
  {
    id: 'cryptography-introduction',
    title: '📖 Introduction',
    content: '',
    contentLoader: () => import('./introduction.mdx?raw'),
  },
  {
    id: 'cryptography-symmetric-encryption',
    title: 'Symmetric Encryption',
    content: '',
    contentLoader: () => import('./symmetric-encryption.mdx?raw'),
  },
  {
    id: 'cryptography-asymmetric-encryption',
    title: 'Asymmetric Encryption',
    content: '',
    contentLoader: () => import('./asymmetric-encryption.mdx?raw'),
  },
  {
    id: 'cryptography-hashing',
    title: 'Hashing',
    content: '',
    contentLoader: () => import('./hashing.mdx?raw'),
  },
  {
    id: 'cryptography-digital-signatures',
    title: 'Digital Signatures',
    content: '',
    contentLoader: () => import('./digital-signatures.mdx?raw'),
  },
  {
    id: 'cryptography-tls-ssl',
    title: 'TLS & SSL',
    content: '',
    contentLoader: () => import('./tls-ssl.mdx?raw'),
  },
];
