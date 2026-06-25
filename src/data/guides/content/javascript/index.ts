import type { Guide } from '../..';

export const jsGuides: Guide[] = [
  {
    slug: 'js-guide-1',
    title: 'JavaScript Concepts Every Web Developer Must Learn in 2026',
    type: 'textual',
    publishedMonth: 'June',
    isNew: true,
    description:
      'In 2026, mastering JavaScript means building on a rock-solid foundation while embracing powerful new features that make code cleaner, more reliable, and more performant. The language has matured significantly, with several game-changing additions becoming standard.',
    contentLoader: () => import('./JavaScript-Concepts-Every-Web-Developer-Must-Learn-in-2026.mdx?raw'),
  },
  {
    slug: 'js-guide-2',
    title: 'Advanced JavaScript Concepts That Separate Junior and Senior Developers',
    type: 'textual',
    publishedMonth: 'June',
    isNew: true,
    description:
      'If the foundational concepts are your toolbox, then the advanced concepts are your architectural blueprints. Juniors know how to write code; seniors know why it runs the way it does, how to bend the language to their will, and when to use complex patterns for scalability.',
    contentLoader: () => import('./Advanced-JavaScript-Concepts-That-Separate-Junior-and-Senior-Developers.mdx?raw'),
  },
  {
    slug: 'js-guide-3',
    title: 'JavaScript Interview Topics Every Developer Must Master',
    type: 'textual',
    publishedMonth: 'June',
    isNew: true,
    description: `Interviewing for a JavaScript role in 2026 is a rigorous process. You aren't just tested on what you can build; you are tested on how the JavaScript engine builds it for you. Recruiters and senior engineers use specific topics to filter out those who "use" the language from those who "own" it.`,
    contentLoader: () => import('./JavaScript-Interview-Topics-Every-Developer-Must-Master.mdx?raw'),
  },
  {
    slug: 'js-guide-4',
    title: 'JavaScript Features You Should Stop Ignoring',
    type: 'textual',
    publishedMonth: 'June',
    isNew: true,
    description:
      'Stop using outdated patterns. Master nullish coalescing, optional chaining, private fields, and other modern JavaScript features that dramatically improve code quality and maintainability.',
    contentLoader: () => import('./JavaScript-Features-You-Should-Stop-Ignoring.mdx?raw'),
  },
  {
    slug: 'js-guide-5',
    title: 'JavaScript Concepts That Will Make You a Better React Developer',
    type: 'textual',
    publishedMonth: 'June',
    isNew: true,
    description:
      'React is just JavaScript with a declarative wrapper. Master closures, pure functions, the event loop, and other concepts to level up your React skills dramatically.',
    contentLoader: () => import('./JavaScript-Concepts-That-Will-Make-You-a-Better-React-Developer.mdx?raw'),
  },
  {
    slug: 'js-guide-6',
    title: 'JavaScript Mistakes Every Beginner Makes (And How to Avoid Them)',
    type: 'textual',
    publishedMonth: 'June',
    isNew: true,
    description:
      'Learn to avoid common pitfalls like confusing == with ===, mutating state directly, forgetting await, and creating memory leaks with Event listeners.',
    contentLoader: () => import('./JavaScript-Mistakes-Every-Beginner-Makes.mdx?raw'),
  },
  {
    slug: 'js-guide-7',
    title: 'JavaScript Array Methods Every Developer Should Know',
    type: 'textual',
    publishedMonth: 'June',
    isNew: true,
    description:
      'Master map, filter, reduce, find, some, every, flat, slice, splice, sort, and forEach for cleaner, more expressive, and more maintainable code.',
    contentLoader: () => import('./JavaScript-Array-Methods-Every-Developer-Should-Know.mdx?raw'),
  },
  {
    slug: 'js-guide-8',
    title: 'JavaScript Functions Every Developer Must Understand',
    type: 'textual',
    publishedMonth: 'June',
    isNew: true,
    description:
      'Understand Promise combinators, JSON methods, timing functions, fetch, the console API, URL encoding, and other essential built-in JavaScript functions.',
    contentLoader: () => import('./JavaScript-Functions-Every-Developer-Must-Understand.mdx?raw'),
  },
  {
    slug: 'js-guide-9',
    title: 'Modern JavaScript Features That Will Improve Your Code Instantly',
    type: 'textual',
    publishedMonth: 'June',
    isNew: true,
    description:
      'Upgrade your code with optional chaining, nullish coalescing, logical assignment operators, numeric separators, iterator helpers, and more modern ES features.',
    contentLoader: () => import('./Modern-JavaScript-Features-That-Will-Improve-Your-Code-Instantly.mdx?raw'),
  },
  {
    slug: 'js-guide-10',
    title: 'JavaScript Concepts That Power Every Modern Website',
    type: 'textual',
    publishedMonth: 'June',
    isNew: true,
    description:
      'Understand the DOM, event-driven architecture, async programming, reactive state management, service workers, Web APIs, and browser security features.',
    contentLoader: () => import('./JavaScript-Concepts-That-Power-Every-Modern-Website.mdx?raw'),
  },
];
