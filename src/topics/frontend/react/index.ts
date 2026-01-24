import reactIntro from './react-intro.md?raw';
import reactInterviewQuestions from './interview-questions.md?raw';
import reactTsxSetup from './react-tsx-setup.md?raw';
import hooks from './hooks.md?raw';
import reactComponents from './react-Components.md?raw';
import reactStateManagement from './react-StateManagement.md?raw';
import reactLifecycle from './react-Lifecycle.md?raw';
import reactVirtualDom from './react-VirtualDom.md?raw';
import reactRouting from './react-Routing.md?raw';
import reactContextApi from './react-ContextApi.md?raw';
import reactPerformance from './react-Performance.md?raw';
import reactTesting from './react-Testing.md?raw';
import reactRedux from './react-Redux.md?raw';
import reactJsx from './react-Jsx.md?raw';
import reactErrorHandling from './react-ErrorHandling.md?raw';
import reactSSR from './react-SSR.md?raw';
import reactComponentTypes from './react-Component-Types.md?raw';
import top25ImportantQuestions from './top-25.md?raw';
import type { TopicItem } from '@/topics';

export const reactTopics:TopicItem[] = [
  {
    id: 'intro-to-react',
    title: '👋 Introduction to React',
    content: reactIntro,
  },
  {
    id: 'react-q&a',
    title: '❓ Interview Questions',
    content: reactInterviewQuestions,
  },
  {
    id: 'react-top-25',
    title: '📌 Most Asked Top 25 Interview Questions',
    content: top25ImportantQuestions,
  },
  {
    id: 'react-components',
    title: '⚛️ Components and Props',
    content: reactComponents,
  },
  {
    id: 'react-hooks',
    title: '🎣 Hooks in React',
    content: hooks,
  },
  {
    id: 'react-state-management',
    title: '🔄 State Management',
    content: reactStateManagement,
  },
  {
    id: 'react-jsx',
    title: '📝 JSX Syntax',
    content: reactJsx,
  },
  {
    id: 'react-routing',
    title: '🛣️ Routing with React Router',
    content: reactRouting,
  },
  {
    id: 'react-context-api',
    title: '🌐 Context API',
    content: reactContextApi,
  },
  {
    id: 'react-redux',
    title: '📦 Redux State Management',
    content: reactRedux,
  },
  {
    id: 'react-functional-vs-class',
    title: '⚖️ Functional vs Class Components',
    content: reactComponentTypes,
  },
  {
    id: 'react-lifecycle',
    title: '⏳ Component Lifecycle',
    content: reactLifecycle,
  },
  {
    id: 'react-virtual-dom',
    title: '👻 Virtual DOM',
    content: reactVirtualDom,
  },
  {
    id: 'react-performance',
    title: '⚡ Performance Optimization',
    content: reactPerformance,
  },
  {
    id: 'react-testing',
    title: '🧪 Testing in React',
    content: reactTesting,
  },
  {
    id: 'react-error-handling',
    title: '❌ Error Handling',
    content: reactErrorHandling,
  },
  {
    id: 'react-tsx-setup',
    title: '🛠️ React TypeScript Setup',
    content: reactTsxSetup,
  },
  {
    id: 'react-server-side-rendering',
    title: '🖥️ Server Side Rendering',
    content: reactSSR,
  },
];
