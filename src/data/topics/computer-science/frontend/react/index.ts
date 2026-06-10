import type { TopicItem } from '@/data/topics';
import { stateManagementConcepts } from './state-management';
import { reactUtilsConcepts } from './react-libraries-&-utilities';
import { reactCodingConcepts } from './react-machine-coding';

export const reactTopics: TopicItem[] = [
  {
    id: 'react-getting-started',
    title: '🚀 Getting Started',
    content: '',
    items: [
      {
        id: 'intro-to-react',
        title: '👋 Introduction to React',
        content: '',
        contentLoader: () => import('./react-intro.mdx?raw'),
      },
      {
        id: 'react-installation-and-setup',
        title: '🛠️ Installation & Setup',
        content: '',
        contentLoader: () => import('./installation-and-setup.mdx?raw'),
      },
      {
        id: 'react-create-react-app-vite',
        title: '⚡ Create React App & Vite',
        content: '',
        contentLoader: () => import('./create-react-app-vite.mdx?raw'),
      },
      {
        id: 'react-tsx-setup',
        title: '🛠️ React TypeScript Setup',
        content: '',
        contentLoader: () => import('./react-tsx-setup.mdx?raw'),
      },
    ],
  },
  {
    id: 'react-core-concepts',
    title: '⚛️ Core Concepts',
    content: '',
    items: [
      {
        id: 'react-components',
        title: '⚛️ Components and Props',
        content: '',
        contentLoader: () => import('./react-Components.mdx?raw'),
      },
      {
        id: 'react-props-and-state',
        title: '📦 Props & State',
        content: '',
        contentLoader: () => import('./props-and-state.mdx?raw'),
      },
      { id: 'react-jsx', title: '📝 JSX Syntax', content: '', contentLoader: () => import('./react-Jsx.mdx?raw') },
      {
        id: 'react-functional-vs-class',
        title: '⚖️ Functional vs Class Components',
        content: '',
        contentLoader: () => import('./react-Component-Types.mdx?raw'),
      },
      {
        id: 'react-controlled-uncontrolled',
        title: '🎛️ Controlled vs Uncontrolled',
        content: '',
        contentLoader: () => import('./controlled-uncontrolled-components.mdx?raw'),
      },
      {
        id: 'react-virtual-dom',
        title: '👻 Virtual DOM',
        content: '',
        contentLoader: () => import('./react-VirtualDom.mdx?raw'),
      },
      {
        id: 'react-lifecycle',
        title: '⏳ Component Lifecycle',
        content: '',
        contentLoader: () => import('./react-Lifecycle.mdx?raw'),
      },
      { id: 'react-forms', title: '📋 Forms in React', content: '', contentLoader: () => import('./forms-in-react.mdx?raw') },
    ],
  },
  {
    id: 'react-hooks',
    title: '🎣 Hooks',
    content: '',
    items: [
      { id: 'react-hooks', title: '🎣 Hooks in React', content: '', contentLoader: () => import('./hooks.mdx?raw') },
      { id: 'react-custom-hooks', title: '🪝 Custom Hooks', content: '', contentLoader: () => import('./custom-hooks.mdx?raw') },
      {
        id: 'react-memo-usememo-usecallback',
        title: '⚡ memo, useMemo & useCallback',
        content: '',
        contentLoader: () => import('./react-memo-usememo-usecallback.mdx?raw'),
      },
      { id: 'react-suspense', title: '⏳ Suspense', content: '', contentLoader: () => import('./react-suspense.mdx?raw') },
      { id: 'react-portals', title: '🌀 Portals', content: '', contentLoader: () => import('./react-portals.mdx?raw') },
    ],
  },
  {
    id: 'react-state-data',
    title: '🔄 State & Data',
    content: '',
    items: [
      {
        id: 'react-state-management',
        title: '🔄 State Management Overview',
        content: '',
        contentLoader: () => import('./react-StateManagement.mdx?raw'),
      },
      {
        id: 'react-context-api',
        title: '🌐 Context API',
        content: '',
        contentLoader: () => import('./react-ContextApi.mdx?raw'),
      },
      { id: 'react-redux', title: '📦 Redux State Management', content: '', contentLoader: () => import('./react-Redux.mdx?raw') },
      {
        id: 'react-query-tanstack',
        title: '🔄 TanStack Query',
        content: '',
        contentLoader: () => import('./react-query-tanstack.mdx?raw'),
      },
      { id: 'react-jotai-recoil', title: '⚛️ Jotai & Recoil', content: '', contentLoader: () => import('./jotai-recoil.mdx?raw') },
      {
        id: 'react-state-management-guides',
        title: '📚 State Management Guides',
        content: '',
        items: stateManagementConcepts,
      },
    ],
  },
  {
    id: 'react-routing-navigation',
    title: '🛣️ Routing & Navigation',
    content: '',
    items: [
      { id: 'react-routing', title: '🛣️ Routing with React Router', content: '', contentLoader: () => import('./react-Routing.mdx?raw') },
    ],
  },
  {
    id: 'react-advanced',
    title: '🔬 Advanced',
    content: '',
    items: [
      { id: 'react-18-features', title: '✨ React 18 Features', content: '', contentLoader: () => import('./react-18-features.mdx?raw') },
      { id: 'react-19-features', title: '🆕 React 19 Features', content: '', contentLoader: () => import('./react-19-features.mdx?raw') },
      {
        id: 'react-performance',
        title: '⚡ Performance Optimization',
        content: '',
        contentLoader: () => import('./react-Performance.mdx?raw'),
      },
      {
        id: 'react-error-handling',
        title: '❌ Error Handling',
        content: '',
        contentLoader: () => import('./react-ErrorHandling.mdx?raw'),
      },
      { id: 'react-testing', title: '🧪 Testing in React', content: '', contentLoader: () => import('./react-Testing.mdx?raw') },
      { id: 'react-server-side-rendering', title: '🖥️ Server Side Rendering', content: '', contentLoader: () => import('./react-SSR.mdx?raw') },
      { id: 'react-storybook', title: '📚 Storybook', content: '', contentLoader: () => import('./storybook.mdx?raw') },
      { id: 'react-devtools', title: '🔧 React DevTools', content: '', contentLoader: () => import('./react-devtools.mdx?raw') },
    ],
  },
  {
    id: 'react-libraries',
    title: '📚 Libraries & Utilities',
    content: '',
    items: reactUtilsConcepts,
  },
  {
    id: 'react-machine-coding',
    title: '💻 Machine Coding',
    content: '',
    items: reactCodingConcepts,
  },
  {
    id: 'react-interview',
    title: '💼 Interview Preparation',
    content: '',
    items: [
      {
        id: 'react-top-25',
        title: '📌 Top 25 Interview Questions',
        content: '',
        contentLoader: () => import('./top-25.mdx?raw'),
      },
      {
        id: 'react-q&a',
        title: '❓ Interview Questions',
        content: '',
        contentLoader: () => import('./interview-questions.mdx?raw'),
      },
    ],
  },
];
