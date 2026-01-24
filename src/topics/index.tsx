import type { JSX } from 'react';
import { Icons } from '@/assets/Icons';

import { htmlTopics } from './frontend/html';
import { cssTopics } from './frontend/css';
import { reactTopics } from './frontend/react';
import { jsTopics } from './frontend/js';
import { tsConcepts } from './frontend/ts';
import { nextTopics } from './frontend/Next';
import { vueTopics } from './frontend/vue';

import { expressTopics } from './Backend/express';
import { nodeTopics } from './Backend/node';

import { cloudServicesData } from './Cloud';
import { databaseData } from './Database';
import { dsaData } from './DSA';
import { resourcesData } from './Resources';
import { systemDesignData } from './SystemDesign';

/* -------------------------------------------------------------------------- */
/*                                    Types                                   */
/* -------------------------------------------------------------------------- */

export interface TopicItem {
  id: string;
  title: string;
  content: string;
  items?: TopicItem[];
}

export type TopicCategory = 'frontend' | 'backend' | 'cloud' | 'database' | 'dsa' | 'resources' | 'system-design';

export interface Topic {
  id: string;
  title: string;
  description: string;
  icon?: JSX.Element;
  items: TopicItem[];
  type: TopicCategory;
  category: TopicCategory;
}

export type Topics = Topic[];

/* -------------------------------------------------------------------------- */
/*                              Transform Helpers                             */
/* -------------------------------------------------------------------------- */

const transformCloudData = (): Topic[] =>
  cloudServicesData.map((service) => ({
    id: service.id,
    title: service.title,
    description: `Learn about ${service.title}, a leading cloud platform.`,
    icon: Icons.NODE,
    items: service.documents,
    type: 'cloud',
    category: 'cloud',
  }));

const transformDatabaseData = (): Topic[] =>
  databaseData.map((db) => ({
    id: db.id,
    title: db.title,
    description: `Explore ${db.title}, a popular database solution.`,
    icon: Icons.NODE,
    items: db.documents,
    type: 'database',
    category: 'database',
  }));

const transformDsaData = (): Topic[] =>
  dsaData.map((dsa) => ({
    id: dsa.id,
    title: dsa.title,
    description: `Master Data Structures and Algorithms with ${dsa.title}.`,
    icon: Icons.NODE,
    items: dsa.documents,
    type: 'dsa',
    category: 'dsa',
  }));

const transformResourcesData = (): Topic[] =>
  resourcesData.map((resource) => ({
    id: resource.id,
    title: resource.title,
    description: 'Find helpful cheat sheets for various technologies.',
    icon: Icons.NODE,
    items: resource.children.map((child) => ({
      id: child.id,
      title: child.title,
      content: '',
      items: child.documents,
    })),
    type: 'resources',
    category: 'resources',
  }));

const transformSystemDesignData = (): Topic[] =>
  systemDesignData.map((sd) => {
    const items =
      'documents' in sd && sd.documents ? sd.documents : 'document' in sd && sd.document ? [sd.document] : [];

    return {
      id: sd.id,
      title: sd.title,
      description: `Learn the principles of System Design with ${sd.title}.`,
      icon: Icons.NODE,
      items,
      type: 'system-design',
      category: 'system-design',
    };
  });

/* -------------------------------------------------------------------------- */
/*                                Main Export                                 */
/* -------------------------------------------------------------------------- */

export const TOPICS: Topics = [
  {
    id: 'html',
    title: 'HTML',
    description: 'Structure web pages with semantic markup.',
    icon: Icons.HTML,
    items: htmlTopics,
    type: 'frontend',
    category: 'frontend',
  },
  {
    id: 'css',
    title: 'CSS',
    description: 'Style your web pages with modern layouts.',
    icon: Icons.CSS,
    items: cssTopics,
    type: 'frontend',
    category: 'frontend',
  },
  {
    id: 'js',
    title: 'JavaScript',
    description: 'JavaScript is the programming language of the web.',
    icon: Icons.JS,
    items: jsTopics,
    type: 'frontend',
    category: 'frontend',
  },
  {
    id: 'typescript',
    title: 'TypeScript',
    description: 'A typed superset of JavaScript that compiles to plain JS.',
    icon: Icons.TS,
    items: tsConcepts,
    type: 'frontend',
    category: 'frontend',
  },
  {
    id: 'nextjs',
    title: 'Next.js',
    description: 'The React framework for production.',
    icon: Icons.NEXT,
    items: nextTopics,
    type: 'frontend',
    category: 'frontend',
  },
  {
    id: 'react',
    title: 'React.js',
    description: 'The library for web and native user interfaces.',
    icon: Icons.REACT,
    items: reactTopics,
    type: 'frontend',
    category: 'frontend',
  },
  {
    id: 'vue',
    title: 'Vue.js',
    description: 'The Progressive JavaScript Framework.',
    icon: Icons.VUE,
    items: vueTopics,
    type: 'frontend',
    category: 'frontend',
  },
  {
    id: 'express',
    title: 'Express.js',
    description: 'Fast, unopinionated, minimalist web framework for Node.js.',
    icon: Icons.EXPRESS,
    items: expressTopics,
    type: 'backend',
    category: 'backend',
  },
  {
    id: 'node',
    title: 'Node.js',
    description: "JavaScript runtime built on Chrome's V8 engine.",
    icon: Icons.NODE,
    items: nodeTopics,
    type: 'backend',
    category: 'backend',
  },

  ...transformCloudData(),
  ...transformDatabaseData(),
  ...transformDsaData(),
  ...transformResourcesData(),
  ...transformSystemDesignData(),
];
