import { Terminal } from 'lucide-react';
import { htmlTopics } from './html';
import type { JSX } from 'react';
import { Icons } from '@/assets/Icons';
import { cssTopics } from './css';

export interface TopicItem {
  id: string;
  title: string;
  content: string;
}

export interface Topic {
  id: string;
  title: string;
  description: string;
  icon: JSX.Element;
  items: TopicItem[];
}

export type Topics = Topic[];

export const TOPICS: Topics = [
  {
    id: 'html',
    title: 'HTML',
    description: 'Structure web pages with semantic markup.',
    icon: Icons.HTML,
    items: htmlTopics,
  },
  {
    id: 'css',
    title: 'CSS',
    description: 'Style your web pages with modern layouts.',
    icon: Icons.CSS,
    items: cssTopics,
  },
  {
    id: 'react',
    title: 'React',
    description: 'The library for web and native user interfaces.',
    icon: <Terminal className="w-5 h-5" />,
    items: [
      {
        id: 'components',
        title: 'Your First Component',
        content:
          '# Components\n\nReact applications are made out of components. A component is a piece of the UI (user interface) that has its own logic and appearance.\n\n```jsx\nfunction Profile() {\n  return (\n    <img\n      src="https://i.imgur.com/MK3eW3Am.jpg"\n      alt="Katherine Johnson"\n    />\n  );\n}\n\nexport default function Gallery() {\n  return (\n    <section>\n      <h1>Amazing Scientists</h1>\n      <Profile />\n      <Profile />\n      <Profile />\n    </section>\n  );\n}\n```\n\n## Key Points\n\n* Components are reusable pieces of UI\n* Component names must start with a capital letter\n* Components can be nested inside other components',
      },
      {
        id: 'hooks',
        title: 'Using Hooks',
        content:
          "# Hooks\n\nHooks let you use different React features from your components. You can either use the built-in Hooks or combine them to build your own.\n\n## Common Built-in Hooks\n\n* `useState` - Lets you add state to your component\n* `useEffect` - Lets you synchronize with external systems\n* `useContext` - Lets you read and subscribe to context\n* `useRef` - Lets you reference a value not needed for rendering\n* `useMemo` - Lets you cache expensive calculations\n* `useCallback` - Lets you cache function definitions\n\n```jsx\nimport { useState } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  \n  return (\n    <button onClick={() => setCount(count + 1)}>\n      Clicked {count} times\n    </button>\n  );\n}\n```",
      },
    ],
  },
];
