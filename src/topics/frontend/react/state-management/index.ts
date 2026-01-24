import stateManagementIntro from './intro.md?raw';
import reduxToolkit from './Redux Toolkit.md?raw';
import zustand from './Zustand.md?raw';
import useReducerSetup from './useReducer and useContext in TypeScript.md?raw';

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
