import { FileCode, Layout, Terminal } from 'lucide-react';
import { htmlTopics } from './html';
import type { JSX } from 'react';

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
  color: string;
  bgColor: string;
  borderColor: string;
  hoverBg: string;
  items: TopicItem[];
}

export type Topics = Topic[];

export const TOPICS: Topics = [
  {
    id: 'html',
    title: 'HTML',
    description: 'Structure web pages with semantic markup.',
    icon: <FileCode className="w-5 h-5" />,
    color: 'text-orange-500',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
    hoverBg: 'hover:bg-orange-50',
    items: htmlTopics,
  },
  {
    id: 'css',
    title: 'CSS',
    description: 'Style your web pages with modern layouts.',
    icon: <Layout className="w-5 h-5" />,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    hoverBg: 'hover:bg-blue-50',
    items: [
      {
        id: 'box-model',
        title: 'Box Model',
        content:
          '# The Box Model\n\nAll HTML elements can be considered as boxes. In CSS, the term "box model" is used when talking about design and layout.\n\n## Box Model Components\n\nThe CSS box model consists of:\n\n* **Content** - The content of the box, where text and images appear\n* **Padding** - Clears an area around the content (transparent)\n* **Border** - A border that goes around the padding and content\n* **Margin** - Clears an area outside the border (transparent)\n\n```css\ndiv {\n  width: 300px;\n  padding: 20px;\n  border: 5px solid gray;\n  margin: 10px;\n}\n```',
      },
      {
        id: 'flexbox',
        title: 'Flexbox',
        content:
          '# Flexbox\n\nThe Flexible Box Layout Module makes it easier to design flexible responsive layout structure without using float or positioning.\n\n## Main Properties\n\n```css\n.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n}\n```\n\n### Key Concepts\n\n* `flex-direction` - Defines the direction of flex items\n* `justify-content` - Aligns items horizontally\n* `align-items` - Aligns items vertically\n* `flex-wrap` - Specifies whether flex items should wrap\n* `gap` - Sets the gap between flex items',
      },
      {
        id: 'grid',
        title: 'CSS Grid',
        content:
          '# CSS Grid Layout\n\nCSS Grid Layout excels at dividing a page into major regions or defining the relationship in terms of size, position, and layer.\n\n```css\n.grid-container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n}\n```\n\n## Grid Properties\n\n* `grid-template-columns` - Defines the columns\n* `grid-template-rows` - Defines the rows\n* `gap` - Sets the spacing between grid items\n* `grid-column` - Specifies how many columns an item will span\n* `grid-row` - Specifies how many rows an item will span',
      },
    ],
  },
  {
    id: 'react',
    title: 'React',
    description: 'The library for web and native user interfaces.',
    icon: <Terminal className="w-5 h-5" />,
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-50',
    borderColor: 'border-cyan-200',
    hoverBg: 'hover:bg-cyan-50',
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
