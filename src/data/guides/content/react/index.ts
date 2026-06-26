import type { Guide } from '../..';

export const reactGuides: Guide[] = [
  {
    slug: 'react-guide-1',
    title: 'React Hooks Every Developer Should Know',
    type: 'textual',
    publishedMonth: 'June',
    isNew: true,
    description:
      'Covers useState, useEffect, useMemo, useCallback, useRef, useReducer, useContext, useId, useTransition, and useDeferredValue with practical examples.',
    contentLoader: () => import('./React-Hooks-Every-Developer-Should-Know.mdx?raw'),
  },
  {
    slug: 'react-guide-2',
    title: 'React Performance Optimization Techniques',
    type: 'textual',
    publishedMonth: 'June',
    isNew: true,
    description:
      'Learn about re-renders, memoization, virtualization, lazy loading, code splitting, and bundle optimization for faster React applications.',
    contentLoader: () => import('./React-Performance-Optimization-Techniques.mdx?raw'),
  },
  {
    slug: 'react-guide-3',
    title: 'React Component Patterns for Scalable Applications',
    type: 'textual',
    publishedMonth: 'June',
    isNew: true,
    description:
      'Explore compound components, controlled/uncontrolled components, render props, composition, and headless components for building scalable UIs.',
    contentLoader: () => import('./React-Component-Patterns-for-Scalable-Applications.mdx?raw'),
  },
  {
    slug: 'react-guide-4',
    title: 'Common React Mistakes Every Developer Makes',
    type: 'textual',
    publishedMonth: 'June',
    isNew: true,
    description:
      'Avoid pitfalls like missing keys, mutating state, stale closures, incorrect dependencies, unnecessary state, and other frequent React mistakes.',
    contentLoader: () => import('./Common-React-Mistakes-Every-Developer-Makes.mdx?raw'),
  },
  {
    slug: 'react-guide-5',
    title: 'React State Management Concepts Every Developer Should Understand',
    type: 'textual',
    publishedMonth: 'June',
    isNew: true,
    description:
      'Master local state, Context, reducers, lifting state up, derived state, and choosing the right state management approach for your app.',
    contentLoader: () => import('./React-State-Management-Concepts.mdx?raw'),
  },
  {
    slug: 'react-guide-6',
    title: 'React Form Handling Techniques',
    type: 'textual',
    publishedMonth: 'June',
    isNew: true,
    description:
      'Learn controlled vs. uncontrolled inputs, validation, dynamic forms, file uploads, and handling complex forms with React Hook Form.',
    contentLoader: () => import('./React-Form-Handling-Techniques.mdx?raw'),
  },
  {
    slug: 'react-guide-7',
    title: 'React Debugging Techniques Every Developer Should Know',
    type: 'textual',
    publishedMonth: 'June',
    isNew: true,
    description:
      'Use React DevTools, Profiler, debugging hooks, tracing re-renders, network debugging, and common troubleshooting workflows.',
    contentLoader: () => import('./React-Debugging-Techniques.mdx?raw'),
  },
  {
    slug: 'react-guide-8',
    title: 'React Interview Questions with Practical Examples',
    type: 'textual',
    publishedMonth: 'June',
    isNew: true,
    description:
      'Focus on concepts that appear frequently in frontend interviews, explained with real code and practical implementation patterns.',
    contentLoader: () => import('./React-Interview-Questions-with-Practical-Examples.mdx?raw'),
  },
  {
    slug: 'react-guide-9',
    title: 'React Best Practices for Production Applications',
    type: 'textual',
    publishedMonth: 'June',
    isNew: true,
    description:
      'Covers folder structure, error boundaries, environment variables, accessibility, code organization, security, and deployment readiness.',
    contentLoader: () => import('./React-Best-Practices-for-Production-Applications.mdx?raw'),
  },
  {
    slug: 'react-guide-10',
    title: 'React Anti-Patterns That Hurt Performance and Maintainability',
    type: 'textual',
    publishedMonth: 'June',
    isNew: true,
    description:
      'Identify and fix prop drilling, overusing Context, anonymous functions in the wrong places, deeply nested state, duplicated state, and unnecessary effects.',
    contentLoader: () => import('./React-Anti-Patterns-That-Hurt-Performance-and-Maintainability.mdx?raw'),
  },
];
