import { htmlTopics } from './frontend/html';
import type { JSX } from 'react';
import { Icons } from '@/assets/Icons';
import { cssTopics } from './frontend/css';
import { reactTopics } from './frontend/react';
import { jsTopics } from './frontend/js';
import { tsConcepts } from './frontend/ts';
import { nextTopics } from './frontend/Next';
import { vueTopics } from './frontend/vue';

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
    id: 'js',
    title: 'JavaScript',
    description: 'javascript is the programming language of the web.',
    icon: Icons.JS,
    items: jsTopics,
  },
  {
    id: 'typescript',
    title: 'TypeScript',
    description: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.',
    icon: Icons.TS,
    items: tsConcepts,
  },
  {
    id: 'nextjs',
    title: 'Next.js',
    description: 'The React framework for production.',
    icon: Icons.NEXT,
    items: nextTopics,
  },
  {
    id: 'react',
    title: 'React.js',
    description: 'The library for web and native user interfaces.',
    icon: Icons.REACT,
    items: reactTopics,
  },
  {
    id: 'vue',
    title: 'Vue.js',
    description: 'The Progressive JavaScript Framework.',
    icon: Icons.VUE,
    items: vueTopics,
  },
];
