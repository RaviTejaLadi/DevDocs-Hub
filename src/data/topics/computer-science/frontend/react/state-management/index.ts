import stateManagementIntro from './intro.mdx?raw';
import reduxToolkit from './Redux Toolkit.mdx?raw';
import zustand from './Zustand.mdx?raw';
import useReducerSetup from './useReducer and useContext in TypeScript.mdx?raw';

export const stateManagementConcepts = [
  {
    id: 'intro-to-state-management',
    title: '📚 Introduction',
    content: stateManagementIntro,
  },
  {
    id: 'use-reducer-setup',
    title: '⚙️ useReducer Setup',
    content: useReducerSetup,
  },
  {
    id: 'redux-toolkit',
    title: '📦 Redux Toolkit',
    content: reduxToolkit,
  },
  {
    id: 'zustand',
    title: '🐻 Zustand',
    content: zustand,
  },
];
