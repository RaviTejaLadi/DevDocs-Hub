/* eslint-disable react-refresh/only-export-components -- This is a data-aggregation module, not a component module. Multiple constant + helper exports are intentional. */
import type { JSX } from 'react';
import { Icons } from '@/assets/Icons';
import {
  Binary,
  Network,
  NotebookTabs,
  Code2,
  Cog,
  Atom,
  Zap,
  Radio,
  Building2,
  Brain,
  Shield,
  GraduationCap,
  FlaskConical,
  FileCode2,
  Coffee,
  GitBranch,
  Workflow,
} from 'lucide-react';

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
import { mechanicalTopics } from './Mechanical';
import { basicScienceTopics } from './BasicScience';
import { electricalEngineeringTopics } from './Electrical-Engineering';
import { electronicsCommunicationTopics } from './Electronics-Communication';
import { civilEngineeringTopics } from './Civil-Engineering';
import { dataScienceAiTopics } from './Data-Science-AI';
import { cybersecurityTopics } from './Cybersecurity';
import { aptitudePlacementTopics } from './Aptitude-Placement';
import { chemicalEngineeringTopics } from './Chemical-Engineering';
import { pythonTopics } from './computer-science/python';
import { javaTopics } from './computer-science/java';
import { gitTopics } from './computer-science/git';
import { devopsTopics } from './computer-science/devops';

import type { TopicBadgeKind } from './topicBadges';

export type { TopicBadgeKind } from './topicBadges';
export { resolveTopicBadge, findTopicBadgeContext, TOPIC_BADGE_LABELS, topicBadgeToneClasses } from './topicBadges';

export interface TopicItem {
  id: string;
  title: string;
  content: string;
  /** Optional override; when omitted, badge is inferred from title and section context. */
  badge?: TopicBadgeKind;
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
 *   1. Create a folder under `src/data/topics/<YourStream>/` exporting `Topic[]`.
 *   2. Append a new entry to `STREAMS` below.
 *
 * Computer-science topic modules live under `src/data/topics/computer-science/`.
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
      description: `Master ${service.title} by learning cloud infrastructure, deployment strategies, scalability, monitoring, networking, security, and real-world production workflows used in modern applications.`,
      icon: cloudIconByServiceId[service.id],
      items: service.documents,
    })
  );

const transformDatabaseData = (): Topic[] =>
  databaseData.map((db) =>
    createTopic('database', {
      id: db.id,
      title: db.title,
      description: `Learn ${db.title} concepts including data modeling, querying, indexing, optimization, relationships, transactions, scaling, and database management for production-grade applications.`,
      icon: databaseIconByDBId[db.id],
      items: db.documents,
    })
  );

const transformResourcesData = (): Topic[] =>
  resourcesData.map((resource) =>
    createTopic('resources', {
      id: resource.id,
      title: resource.title,
      description:
        'Access curated developer resources, cheat sheets, reference guides, best practices, interview preparation materials, and quick learning assets across multiple technologies.',
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
    description:
      'Learn HTML from fundamentals to advanced concepts including semantic elements, forms, accessibility, SEO-friendly markup, multimedia integration, and modern web document structure.',
    icon: Icons.HTML,
    items: htmlTopics,
  }),
  createTopic('frontend', {
    id: 'css',
    title: 'CSS',
    description:
      'Master CSS for building responsive, accessible, and visually engaging interfaces using Flexbox, Grid, animations, transitions, media queries, and modern styling techniques.',
    icon: Icons.CSS,
    items: cssTopics,
  }),
  createTopic('frontend', {
    id: 'js',
    title: 'JavaScript',
    description:
      'Understand JavaScript deeply by learning core language concepts, asynchronous programming, DOM manipulation, ES features, browser APIs, performance optimization, and application architecture.',
    icon: Icons.JS,
    items: jsTopics,
  }),
  createTopic('frontend', {
    id: 'typescript',
    title: 'TypeScript',
    description:
      'Build scalable and maintainable applications with TypeScript by mastering static typing, interfaces, generics, advanced types, tooling, and enterprise-level development patterns.',
    icon: Icons.TS,
    items: tsConcepts,
  }),
  createTopic('frontend', {
    id: 'nextjs',
    title: 'Next.js',
    description:
      'Develop production-ready full-stack React applications using Next.js with server-side rendering, static generation, routing, API handling, caching, authentication, and performance optimization.',
    icon: Icons.NEXT,
    items: nextTopics,
  }),
  createTopic('frontend', {
    id: 'react',
    title: 'React.js',
    description:
      'Learn React.js to create modern interactive user interfaces using components, hooks, state management, routing, performance optimization, reusable architecture, and ecosystem best practices.',
    icon: Icons.REACT,
    items: reactTopics,
  }),
  createTopic('frontend', {
    id: 'vue',
    title: 'Vue.js',
    description:
      'Explore Vue.js for building reactive frontend applications with component-driven architecture, directives, composition API, routing, state management, and smooth developer experience.',
    icon: Icons.VUE,
    items: vueTopics,
  }),
  createTopic('backend', {
    id: 'express',
    title: 'Express.js',
    description:
      'Learn Express.js for building scalable backend APIs and web applications with middleware, routing, authentication, error handling, REST architecture, and backend best practices.',
    icon: Icons.EXPRESS,
    items: expressTopics,
  }),
  createTopic('backend', {
    id: 'node',
    title: 'Node.js',
    description:
      'Master Node.js by understanding event-driven architecture, asynchronous programming, APIs, streams, authentication, scalability, performance tuning, and backend application development.',
    icon: Icons.NODE,
    items: nodeTopics,
  }),
  ...transformCloudData(),
  ...transformDatabaseData(),
  createTopic('dsa', {
    id: 'dsa',
    title: 'DSA',
    description:
      'Strengthen problem-solving skills with data structures and algorithms covering arrays, linked lists, trees, graphs, recursion, dynamic programming, searching, sorting, and coding interview preparation.',
    icon: <Binary className="h-5 w-5" />,
    items: dsaData,
  }),
  createTopic('system-design', {
    id: 'system-design',
    title: 'System Design',
    description:
      'Understand scalable system architecture including distributed systems, databases, caching, load balancing, microservices, messaging systems, reliability, scalability, and high-level application design.',
    icon: <Network className="h-5 w-5" />,
    items: systemDesignData,
  }),
  ...transformResourcesData(),
  createTopic('languages', {
    id: 'python',
    title: 'Python',
    description:
      'Learn Python programming from basics to OOP, modules, file handling, virtual environments, and popular libraries for automation and development.',
    icon: <FileCode2 className="h-5 w-5" />,
    items: pythonTopics,
  }),
  createTopic('languages', {
    id: 'java',
    title: 'Java',
    description:
      'Master Java with syntax, OOP, collections, multithreading, exception handling, and Spring Boot fundamentals for enterprise applications.',
    icon: <Coffee className="h-5 w-5" />,
    items: javaTopics,
  }),
  createTopic('devops', {
    id: 'git',
    title: 'Git & Version Control',
    description:
      'Learn Git fundamentals, branching, merging, rebasing, and collaborative workflows with GitHub for professional development.',
    icon: <GitBranch className="h-5 w-5" />,
    items: gitTopics,
  }),
  createTopic('devops', {
    id: 'devops',
    title: 'DevOps',
    description:
      'Understand DevOps practices including CI/CD, Kubernetes, monitoring, infrastructure as code, and Linux for modern software delivery.',
    icon: <Workflow className="h-5 w-5" />,
    items: devopsTopics,
  }),
];

/**
 * Add a new stream by appending an entry to this array.
 * Each stream has its own tab on the landing page.
 */
export const STREAMS: Stream[] = [
  {
    id: 'computer-science',
    title: 'Computer Science',
    description:
      'Comprehensive learning resources covering frontend, backend, databases, cloud computing, system design, DSA, software engineering practices, and modern web development technologies.',
    icon: <Code2 className="h-5 w-5" />,
    topics: computerScienceTopics,
  },
  {
    id: 'mechanical-engineering',
    title: 'Mechanical Engineering',
    description:
      'Explore core mechanical engineering subjects including thermodynamics, fluid mechanics, machine design, manufacturing processes, mechanics, material science, and industrial engineering concepts.',
    icon: <Cog className="h-5 w-5" />,
    topics: mechanicalTopics,
  },
  {
    id: 'basic-science',
    title: 'Basic Science',
    description:
      'Learn foundational science subjects including physics, chemistry, biology, and mathematics with concepts essential for engineering, research, academics, and technical problem solving.',
    icon: <Atom className="h-5 w-5" />,
    topics: basicScienceTopics,
  },
  {
    id: 'electrical-engineering',
    title: 'Electrical Engineering',
    description:
      'Study circuit theory, electrical machines, power systems, power electronics, and control systems for electrical engineering curricula and exams.',
    icon: <Zap className="h-5 w-5" />,
    topics: electricalEngineeringTopics,
  },
  {
    id: 'electronics-communication',
    title: 'Electronics & Communication',
    description:
      'Explore digital and analog electronics, signals and systems, communication engineering, and microprocessors for ECE students.',
    icon: <Radio className="h-5 w-5" />,
    topics: electronicsCommunicationTopics,
  },
  {
    id: 'civil-engineering',
    title: 'Civil Engineering',
    description:
      'Learn structural engineering, concrete technology, geotechnical engineering, surveying, and transportation for civil engineering programs.',
    icon: <Building2 className="h-5 w-5" />,
    topics: civilEngineeringTopics,
  },
  {
    id: 'chemical-engineering',
    title: 'Chemical Engineering',
    description:
      'Cover unit operations, reaction engineering, process control, and plant design for chemical engineering students and professionals.',
    icon: <FlaskConical className="h-5 w-5" />,
    topics: chemicalEngineeringTopics,
  },
  {
    id: 'data-science-ai',
    title: 'Data Science & AI',
    description:
      'Build skills in Python for data science, statistics, machine learning, deep learning, NLP, and data engineering pipelines.',
    icon: <Brain className="h-5 w-5" />,
    topics: dataScienceAiTopics,
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description:
      'Learn security fundamentals, network and application security, cryptography, and ethical hacking for modern IT roles.',
    icon: <Shield className="h-5 w-5" />,
    topics: cybersecurityTopics,
  },
  {
    id: 'aptitude-placement',
    title: 'Aptitude & Placement',
    description:
      'Prepare for placements with quantitative aptitude, logical reasoning, verbal ability, and interview preparation guides.',
    icon: <GraduationCap className="h-5 w-5" />,
    topics: aptitudePlacementTopics,
  },
];

/**
 * Backward-compatible flat list of all topics across every stream.
 * Used by the global search (NavBar), DocumentationPage routing and SidebarContent.
 */
export const TOPICS: Topics = STREAMS.flatMap((stream) => stream.topics);

/** Lookup the stream a given topic id belongs to. */
export const getStreamByTopicId = (topicId: string): Stream | undefined =>
  STREAMS.find((stream) => stream.topics.some((topic) => topic.id === topicId));

/** Inclusive `[start, end]` indices in `TOPICS` for every topic in this stream (contiguous block). */
export function getCatalogBoundsForStream(stream: Stream): { start: number; end: number } | null {
  const firstId = stream.topics[0]?.id;
  if (!firstId) return null;
  const start = TOPICS.findIndex((t) => t.id === firstId);
  if (start < 0) return null;
  return { start, end: start + stream.topics.length - 1 };
}
