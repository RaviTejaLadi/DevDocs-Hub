import jsIntro from './js-intro.mdx?raw';
import Arrays from './arrays.mdx?raw';
import objects from './objects.mdx?raw';
import eventHandling from './event-handling.mdx?raw';
import debounceAndThrottle from './Debouncing & Throttling.mdx?raw';
import variablesAndScoping from './Variables & Scoping.mdx?raw';
import dataTypesAndTypeConversion from './Data Types & Type Conversion.mdx?raw';
import webStorageApi from './web-storage-api.mdx?raw';
import loopingStatements from './looping-statements.mdx?raw';
import conditionalStatements from './conditional-statements.mdx?raw';
import promises from './promise-combinators.mdx?raw';
import asyncAwait from './async-await.mdx?raw';
import closures from './closures.mdx?raw';
import prototypesAndInheritance from './prototypes-And-Inheritance.mdx?raw';
import thisKeyword from './this-Keyword.mdx?raw';
import callApplyBind from './call-Apply-Bind.mdx?raw';
import hoisting from './hoisting.mdx?raw';
import es6Features from './es6Features.mdx?raw';
import domManipulation from './dom-Manipulation.mdx?raw';
import eventLoop from './eventLoop.mdx?raw';
import functions from './functions.mdx?raw';
import functionsBestPractices from './function-best-practices.mdx?raw';
import callbackFunctions from './callback-Functions.mdx?raw';
import errorHandling from './error-Handling.mdx?raw';
import fetchApi from './fetchApi.mdx?raw';
import modules from './modules.mdx?raw';
import designPatterns from './design-Patterns.mdx?raw';
import memoryManagement from './memory-Management.mdx?raw';
import currying from './currying.mdx?raw';
import webWorkers from './webWorkers.mdx?raw';
import strictMode from './strictMode.mdx?raw';
import generators from './generators.mdx?raw';
import proxyAndReflect from './proxyAndReflect.mdx?raw';
import polyfills from './polyfills.mdx?raw';
import { jsOOPSConcepts } from './js-oops';
import top25JavascriptQuestions from './interview-prep/top-25-javascript-questions.mdx?raw';
import type { TopicItem } from '@/data/topics';

export const jsTopics: TopicItem[] = [
  {
    id: 'js-fundamentals',
    title: '📚 JavaScript Fundamentals',
    content: '',
    items: [
      { id: 'intro-to-js', title: '📖 Introduction to JavaScript', content: jsIntro },

      {
        id: 'js-datatypes-And-TypeConversion',
        title: '🔢 Data Types & Type Conversion',
        content: dataTypesAndTypeConversion,
      },

      {
        id: 'js-variables-&-scoping',
        title: '🧠 Variables & Scope',
        content: variablesAndScoping,
      },

      {
        id: 'js-conditional-statements',
        title: '❓ Conditional Statements',
        content: conditionalStatements,
      },

      {
        id: 'js-looping-statements',
        title: '🔄 Loops & Iteration',
        content: loopingStatements,
      },

      {
        id: 'js-functions',
        title: '📞 Functions',
        content: functions,
      },

      {
        id: 'js-functions-best-practices',
        title: '📝 Function Best Practices',
        content: functionsBestPractices,
      },

      {
        id: 'js-array-methods',
        title: '📊 Arrays & Array Methods',
        content: Arrays,
      },

      {
        id: 'js-objects',
        title: '🗃️ Objects & Object Methods',
        content: objects,
      },

      {
        id: 'js-strict-mode',
        title: '📏 Strict Mode',
        content: strictMode,
      },
    ],
  },

  {
    id: 'js-modern-javascript',
    title: '✨ Modern JavaScript (ES6+)',
    content: '',
    items: [
      {
        id: 'js-es6-features',
        title: '✨ ES6+ Features',
        content: es6Features,
      },

      {
        id: 'js-modules',
        title: '📦 ES Modules',
        content: modules,
      },
    ],
  },

  {
    id: 'js-core-concepts',
    title: '🧩 Core JavaScript Concepts',
    content: '',
    items: [
      {
        id: 'js-hoisting',
        title: '🔼 Hoisting',
        content: hoisting,
      },

      {
        id: 'js-this-keyword',
        title: '👈 this Keyword',
        content: thisKeyword,
      },

      {
        id: 'js-call-apply-bind',
        title: '🔗 call, apply & bind',
        content: callApplyBind,
      },

      {
        id: 'js-closures',
        title: '🔒 Closures',
        content: closures,
      },

      {
        id: 'js-prototypes-inheritance',
        title: '🧬 Prototypes & Inheritance',
        content: prototypesAndInheritance,
      },

      {
        id: 'js-error-handling',
        title: '❌ Error Handling',
        content: errorHandling,
      },
    ],
  },

  {
    id: 'js-dom-browser',
    title: '🖥️ Browser & DOM APIs',
    content: '',
    items: [
      {
        id: 'js-dom-manipulation',
        title: '🖥️ DOM Manipulation',
        content: domManipulation,
      },

      {
        id: 'js-event-handling',
        title: '🎮 Event Handling',
        content: eventHandling,
      },

      {
        id: 'js-web-storage-api',
        title: '💾 Web Storage API',
        content: webStorageApi,
      },

      {
        id: 'js-fetch-api',
        title: '🌐 Fetch API',
        content: fetchApi,
      },
    ],
  },

  {
    id: 'js-async-concurrency',
    title: '⏱️ Async JavaScript',
    content: '',
    items: [
      {
        id: 'js-callback-functions',
        title: '📲 Callback Functions',
        content: callbackFunctions,
      },

      {
        id: 'js-promises',
        title: '🤝 Promises & Promise Combinators',
        content: promises,
      },

      {
        id: 'js-async-await',
        title: '⏳ Async / Await',
        content: asyncAwait,
      },

      {
        id: 'js-event-loop',
        title: '♻️ Event Loop',
        content: eventLoop,
      },

      {
        id: 'js-debouncing-&-throttling',
        title: '⏱️ Debouncing & Throttling',
        content: debounceAndThrottle,
      },
    ],
  },

  {
    id: 'javascript-oops',
    title: '🏛️ Object-Oriented JavaScript',
    content: '',
    items: jsOOPSConcepts,
  },

  {
    id: 'js-advanced',
    title: '🚀 Advanced JavaScript',
    content: '',
    items: [
      {
        id: 'js-currying',
        title: '🏹 Currying',
        content: currying,
      },

      {
        id: 'js-generators',
        title: '🌀 Generators',
        content: generators,
      },

      {
        id: 'js-proxy-reflect',
        title: '🪞 Proxy & Reflect',
        content: proxyAndReflect,
      },

      {
        id: 'js-memory-management',
        title: '🧠 Memory Management',
        content: memoryManagement,
      },

      {
        id: 'js-web-workers',
        title: '👷 Web Workers',
        content: webWorkers,
      },

      {
        id: 'js-polyfills',
        title: '✨ Polyfills',
        content: polyfills,
      },

      {
        id: 'js-design-patterns',
        title: '🎨 Design Patterns',
        content: designPatterns,
      },
    ],
  },

  {
    id: 'js-interview',
    title: '💼 Interview Preparation',
    content: '',
    items: [
      {
        id: 'js-top-25-interview-questions',
        title: '📌 Top 25 JavaScript Interview Questions',
        content: top25JavascriptQuestions,
      },
    ],
  },
];
