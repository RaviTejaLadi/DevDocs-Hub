/* eslint-disable react-refresh/only-export-components -- This is a data-aggregation module, not a component module. Multiple constant + helper exports are intentional. */
import type { JSX } from 'react';
import { Icons } from '@/assets/Icons';
import { Binary, Network, NotebookTabs, Code2 } from 'lucide-react';

import { htmlTopics } from './computer-science/frontend/html';
import { cssTopics } from './computer-science/frontend/css';
import { reactTopics } from './computer-science/frontend/react';
import { jsTopics } from './computer-science/frontend/js';
import { tsConcepts } from './computer-science/frontend/ts';
import { nextTopics } from './computer-science/frontend/Next';
import { vueTopics } from './computer-science/frontend/vue';

import { expressTopics } from './computer-science/Backend/express';
import { nodeTopics } from './computer-science/Backend/node';

import { cloudServicesData } from './computer-science/Cloud';
import { databaseData } from './computer-science/Database';
import { dsaData } from './computer-science/DSA';
import { resourcesData } from './computer-science/Resources';
import { systemDesignData } from './computer-science/SystemDesign';

export interface TopicItem {
  id: string;
  title: string;
  content: string;
  items?: TopicItem[];
}

// Free-form category string – each Stream is free to define its own categories.
// Keeping it as `string` allows new streams (Mechanical, Basic Science, ...) to add
// their own grouping labels without having to widen a fixed union.
export type TopicCategory = string;

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

/**
 * A "Stream" is a top-level grouping of Topics — e.g. Computer Science,
 * Mechanical Engineering, Basic Science. The landing page renders one tab per
 * Stream and shows that stream's topics underneath.
 *
 * To add a new stream:
 *   1. Create a folder under `src/topics/<YourStream>/` exporting `Topic[]`.
 *   2. Append a new entry to `STREAMS` below.
 *
 * Computer-science topic modules live under `src/topics/computer-science/`.
 *
 * Every Topic.id must remain globally unique because routes live at
 * `/docs/:categoryId/:slug` regardless of stream.
 */
export interface Stream {
  id: string;
  title: string;
  description: string;
  icon?: JSX.Element;
  topics: Topic[];
}

type BaseTopic = Omit<Topic, 'type' | 'category'>;

const createTopic = (category: TopicCategory, topic: BaseTopic): Topic => ({
  ...topic,
  type: category,
  category,
});

const cloudIconByServiceId: Partial<Record<string, JSX.Element>> = {
  aws: Icons.AWS,
  azure: Icons.AZURE,
};

const databaseIconByDBId: Partial<Record<string, JSX.Element>> = {
  mongoDB: Icons.MONGODB,
  sql: Icons.SQL,
};

const transformCloudData = (): Topic[] =>
  cloudServicesData.map((service) =>
    createTopic('cloud', {
      id: service.id,
      title: service.title,
      description: `Learn about ${service.title}, a leading cloud platform.`,
      icon: cloudIconByServiceId[service.id],
      items: service.documents,
    })
  );

const transformDatabaseData = (): Topic[] =>
  databaseData.map((db) =>
    createTopic('database', {
      id: db.id,
      title: db.title,
      description: `Explore ${db.title}, a popular database solution.`,
      icon: databaseIconByDBId[db.id],
      items: db.documents,
    })
  );

const transformResourcesData = (): Topic[] =>
  resourcesData.map((resource) =>
    createTopic('resources', {
      id: resource.id,
      title: resource.title,
      description: 'Find helpful cheat sheets for various technologies.',
      icon: <NotebookTabs className="h-5 w-5" />,
      items: resource.children.map((child) => ({
        id: child.id,
        title: child.title,
        content: '',
        items: child.documents,
      })),
    })
  );

const computerScienceTopics: Topic[] = [
  createTopic('frontend', {
    id: 'html',
    title: 'HTML',
    description: 'Structure web pages with semantic markup.',
    icon: Icons.HTML,
    items: htmlTopics,
  }),
  createTopic('frontend', {
    id: 'css',
    title: 'CSS',
    description: 'Style your web pages with modern layouts.',
    icon: Icons.CSS,
    items: cssTopics,
  }),
  createTopic('frontend', {
    id: 'js',
    title: 'JavaScript',
    description: 'JavaScript is the programming language of the web.',
    icon: Icons.JS,
    items: jsTopics,
  }),
  createTopic('frontend', {
    id: 'typescript',
    title: 'TypeScript',
    description: 'A typed superset of JavaScript that compiles to plain JS.',
    icon: Icons.TS,
    items: tsConcepts,
  }),
  createTopic('frontend', {
    id: 'nextjs',
    title: 'Next.js',
    description: 'The React framework for production.',
    icon: Icons.NEXT,
    items: nextTopics,
  }),
  createTopic('frontend', {
    id: 'react',
    title: 'React.js',
    description: 'The library for web and native user interfaces.',
    icon: Icons.REACT,
    items: reactTopics,
  }),
  createTopic('frontend', {
    id: 'vue',
    title: 'Vue.js',
    description: 'The Progressive JavaScript Framework.',
    icon: Icons.VUE,
    items: vueTopics,
  }),
  createTopic('backend', {
    id: 'express',
    title: 'Express.js',
    description: 'Fast, unopinionated, minimalist web framework for Node.js.',
    icon: Icons.EXPRESS,
    items: expressTopics,
  }),
  createTopic('backend', {
    id: 'node',
    title: 'Node.js',
    description: "JavaScript runtime built on Chrome's V8 engine.",
    icon: Icons.NODE,
    items: nodeTopics,
  }),
  ...transformCloudData(),
  ...transformDatabaseData(),
  createTopic('dsa', {
    id: 'dsa',
    title: 'DSA',
    description: 'data structures and algorithms',
    icon: <Binary className="h-5 w-5" />,
    items: dsaData,
  }),
  createTopic('system-design', {
    id: 'system-design',
    title: 'System Design',
    description: 'system design',
    icon: <Network className="h-5 w-5" />,
    items: systemDesignData,
  }),
  ...transformResourcesData(),
];

/**
 * Add a new stream by appending an entry to this array.
 * Each stream has its own tab on the landing page.
 */
export const STREAMS: Stream[] = [
  {
    id: 'computer-science',
    title: 'Computer Science',
    description: 'Frontend, backend, DSA, system design, databases, cloud and more.',
    icon: <Code2 className="h-5 w-5" />,
    topics: computerScienceTopics,
  },
  // Uncomment below and re-import `mechanicalTopics`, `basicScienceTopics`, `Cog`, `Atom` from above.
  // {
  //   id: 'mechanical-engineering',
  //   title: 'Mechanical Engineering',
  //   description: 'Thermodynamics, fluid mechanics, machine design and manufacturing.',
  //   icon: <Cog className="h-5 w-5" />,
  //   topics: mechanicalTopics,
  // },
  // {
  //   id: 'basic-science',
  //   title: 'Basic Science',
  //   description: 'Physics, chemistry, mathematics and biology fundamentals.',
  //   icon: <Atom className="h-5 w-5" />,
  //   topics: basicScienceTopics,
  // },
];

/**
 * Backward-compatible flat list of all topics across every stream.
 * Used by the global search (NavBar), DocumentationPage routing and SidebarContent.
 */
export const TOPICS: Topics = STREAMS.flatMap((stream) => stream.topics);

/** Lookup the stream a given topic id belongs to. */
export const getStreamByTopicId = (topicId: string): Stream | undefined =>
  STREAMS.find((stream) => stream.topics.some((topic) => topic.id === topicId));
