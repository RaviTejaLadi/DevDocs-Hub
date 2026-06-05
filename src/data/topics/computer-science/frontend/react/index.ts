import type { TopicItem } from '@/data/topics';
import reactIntro from './react-intro.mdx?raw';
import reactInstallationAndSetup from './installation-and-setup.mdx?raw';
import createReactAppVite from './create-react-app-vite.mdx?raw';
import reactComponents from './react-Components.mdx?raw';
import reactJsx from './react-Jsx.mdx?raw';
import reactComponentTypes from './react-Component-Types.mdx?raw';
import propsAndState from './props-and-state.mdx?raw';
import controlledUncontrolledComponents from './controlled-uncontrolled-components.mdx?raw';
import reactVirtualDom from './react-VirtualDom.mdx?raw';
import hooks from './hooks.mdx?raw';
import customHooks from './custom-hooks.mdx?raw';
import reactMemoUsememoUsecallback from './react-memo-usememo-usecallback.mdx?raw';
import reactLifecycle from './react-Lifecycle.mdx?raw';
import reactSuspense from './react-suspense.mdx?raw';
import reactPortals from './react-portals.mdx?raw';
import react18Features from './react-18-features.mdx?raw';
import react19Features from './react-19-features.mdx?raw';
import formsInReact from './forms-in-react.mdx?raw';
import reactStateManagement from './react-StateManagement.mdx?raw';
import reactContextApi from './react-ContextApi.mdx?raw';
import reactRedux from './react-Redux.mdx?raw';
import reactQueryTanstack from './react-query-tanstack.mdx?raw';
import jotaiRecoil from './jotai-recoil.mdx?raw';
import reactRouting from './react-Routing.mdx?raw';
import reactPerformance from './react-Performance.mdx?raw';
import reactErrorHandling from './react-ErrorHandling.mdx?raw';
import reactTesting from './react-Testing.mdx?raw';
import reactSSR from './react-SSR.mdx?raw';
import reactTsxSetup from './react-tsx-setup.mdx?raw';
import storybook from './storybook.mdx?raw';
import reactDevtools from './react-devtools.mdx?raw';
import reactInterviewQuestions from './interview-questions.mdx?raw';
import top25ImportantQuestions from './top-25.mdx?raw';
import { stateManagementConcepts } from './state-management';
import { reactUtilsConcepts } from './react-libraries-&-utilities';
import { reactCodingConcepts } from './react-machine-coding';

export const reactTopics: TopicItem[] = [
  {
    id: 'react-getting-started',
    title: '🚀 Getting Started',
    content: '',
    items: [
      { id: 'intro-to-react', title: '👋 Introduction to React', content: reactIntro },
      { id: 'react-installation-and-setup', title: '🛠️ Installation & Setup', content: reactInstallationAndSetup },
      { id: 'react-create-react-app-vite', title: '⚡ Create React App & Vite', content: createReactAppVite },
      { id: 'react-tsx-setup', title: '🛠️ React TypeScript Setup', content: reactTsxSetup },
    ],
  },
  {
    id: 'react-core-concepts',
    title: '⚛️ Core Concepts',
    content: '',
    items: [
      { id: 'react-components', title: '⚛️ Components and Props', content: reactComponents },
      { id: 'react-props-and-state', title: '📦 Props & State', content: propsAndState },
      { id: 'react-jsx', title: '📝 JSX Syntax', content: reactJsx },
      { id: 'react-functional-vs-class', title: '⚖️ Functional vs Class Components', content: reactComponentTypes },
      {
        id: 'react-controlled-uncontrolled',
        title: '🎛️ Controlled vs Uncontrolled',
        content: controlledUncontrolledComponents,
      },
      { id: 'react-virtual-dom', title: '👻 Virtual DOM', content: reactVirtualDom },
      { id: 'react-lifecycle', title: '⏳ Component Lifecycle', content: reactLifecycle },
      { id: 'react-forms', title: '📋 Forms in React', content: formsInReact },
    ],
  },
  {
    id: 'react-hooks',
    title: '🎣 Hooks',
    content: '',
    items: [
      { id: 'react-hooks', title: '🎣 Hooks in React', content: hooks },
      { id: 'react-custom-hooks', title: '🪝 Custom Hooks', content: customHooks },
      {
        id: 'react-memo-usememo-usecallback',
        title: '⚡ memo, useMemo & useCallback',
        content: reactMemoUsememoUsecallback,
      },
      { id: 'react-suspense', title: '⏳ Suspense', content: reactSuspense },
      { id: 'react-portals', title: '🌀 Portals', content: reactPortals },
    ],
  },
  {
    id: 'react-state-data',
    title: '🔄 State & Data',
    content: '',
    items: [
      { id: 'react-state-management', title: '🔄 State Management Overview', content: reactStateManagement },
      { id: 'react-context-api', title: '🌐 Context API', content: reactContextApi },
      { id: 'react-redux', title: '📦 Redux State Management', content: reactRedux },
      { id: 'react-query-tanstack', title: '🔄 TanStack Query', content: reactQueryTanstack },
      { id: 'react-jotai-recoil', title: '⚛️ Jotai & Recoil', content: jotaiRecoil },
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
    items: [{ id: 'react-routing', title: '🛣️ Routing with React Router', content: reactRouting }],
  },
  {
    id: 'react-advanced',
    title: '🔬 Advanced',
    content: '',
    items: [
      { id: 'react-18-features', title: '✨ React 18 Features', content: react18Features },
      { id: 'react-19-features', title: '🆕 React 19 Features', content: react19Features },
      { id: 'react-performance', title: '⚡ Performance Optimization', content: reactPerformance },
      { id: 'react-error-handling', title: '❌ Error Handling', content: reactErrorHandling },
      { id: 'react-testing', title: '🧪 Testing in React', content: reactTesting },
      { id: 'react-server-side-rendering', title: '🖥️ Server Side Rendering', content: reactSSR },
      { id: 'react-storybook', title: '📚 Storybook', content: storybook },
      { id: 'react-devtools', title: '🔧 React DevTools', content: reactDevtools },
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
      { id: 'react-top-25', title: '📌 Top 25 Interview Questions', content: top25ImportantQuestions },
      { id: 'react-q&a', title: '❓ Interview Questions', content: reactInterviewQuestions },
    ],
  },
];
