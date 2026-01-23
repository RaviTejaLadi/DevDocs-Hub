import { Terminal } from 'lucide-react';
import { htmlTopics } from './html';
import type { JSX } from 'react';
import { Icons } from '@/assets/Icons';
import { cssTopics } from './css';

// 1. Update Interface for Recursion
export interface TopicItem {
  id: string;
  title: string;
  content: string;
  items?: TopicItem[]; // New optional property for sub-items
}

export interface Topic {
  id: string;
  title: string;
  description: string;
  icon: JSX.Element;
  items: TopicItem[];
}

export type Topics = Topic[];

export const TOPICS: Topics = [
  {
    id: 'html',
    title: 'HTML',
    description: 'Structure web pages with semantic markup.',
    icon: Icons.HTML,
    items: htmlTopics,
  },
  {
    id: 'css',
    title: 'CSS',
    description: 'Style your web pages with modern layouts.',
    icon: Icons.CSS,
    items: cssTopics,
  },
  {
    id: 'react',
    title: 'React',
    description: 'The library for web and native user interfaces.',
    icon: <Terminal className="w-5 h-5" />,
    items: [
      {
        id: 'components',
        title: 'Your First Component',
        content: '# Components content...',
      },
      // 2. Example of Nested Structure
      {
        id: 'hooks',
        title: 'Hooks',
        content: '# Hooks Overview...',
        items: [
          {
            id: 'use-state',
            title: 'useState',
            content: '# useState Hook...',
          },
          {
            id: 'use-effect',
            title: 'useEffect',
            content: '# useEffect Hook...',
          },
        ],
      },
    ],
  },
];
