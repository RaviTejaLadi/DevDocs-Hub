import type { TopicItem } from '@/data/topics';

export const htmlTopics: TopicItem[] = [
  {
    id: 'html-getting-started',
    title: '🚀 Getting Started',
    content: '',
    items: [
      {
        id: 'intro',
        title: '📖 Introduction',
        content: '',
        contentLoader: () => import('./intro.mdx?raw'),
        excerpt: 'Introduction to HTML, the standard markup language for documents designed to be displayed in a web browser.',
      },
      {
        id: 'html-installation-and-setup',
        title: '🛠️ Installation & Setup',
        content: '',
        contentLoader: () => import('./installation-and-setup.mdx?raw'),
        excerpt: 'How to set up your development environment for HTML development.',
      },
      {
        id: 'html-must-know-topics',
        title: '📌 HTML Topics Every Developer Must Know',
        content: '',
        contentLoader: () => import('./html-must-know-topics.mdx?raw'),
        excerpt: 'A checklist of essential HTML concepts for modern web development.',
      },
      {
        id: 'html-basics',
        title: '🧱 HTML Basics',
        content: '',
        contentLoader: () => import('./html-basics.mdx?raw'),
        excerpt: 'Learn the basic building blocks of HTML: elements, tags, and attributes.',
      },
      {
        id: 'html-document-structure',
        title: '📄 Document Structure',
        content: '',
        contentLoader: () => import('./document-structure.mdx?raw'),
        excerpt: 'Understand the standard structure of an HTML5 document.',
      },
      {
        id: 'html-head-element',
        title: '🧠 The Head Element',
        content: '',
        contentLoader: () => import('./head-element.mdx?raw'),
        excerpt: 'Exploring the <head> section and its metadata, styles, and scripts.',
      },
    ],
  },
  {
    id: 'html-content-structure',
    title: '📝 Content & Structure',
    content: '',
    items: [
      {
        id: 'core-text-and-content-tags',
        title: '✏️ Core Text & Content Tags',
        content: '',
        contentLoader: () => import('./core-text-and-content-tags.mdx?raw'),
      },
      {
        id: 'links-and-navigation',
        title: '🔗 Links & Navigation',
        content: '',
        contentLoader: () => import('./links-and-navigation.mdx?raw'),
      },
      { id: 'lists', title: '📋 Lists', content: '', contentLoader: () => import('./lists.mdx?raw') },
      { id: 'tables', title: '📊 Tables', content: '', contentLoader: () => import('./tables.mdx?raw') },
      {
        id: 'images-and-media',
        title: '🖼️ Images & Media',
        content: '',
        contentLoader: () => import('./images-and-media.mdx?raw'),
      },
      {
        id: 'html-canvas-and-svg',
        title: '🎨 Canvas & SVG',
        content: '',
        contentLoader: () => import('./canvas-and-svg.mdx?raw'),
      },
      {
        id: 'html-iframes-and-embeds',
        title: '📺 iframes & Embeds',
        content: '',
        contentLoader: () => import('./iframes-and-embeds.mdx?raw'),
      },
    ],
  },
  {
    id: 'html-forms-interactive',
    title: '📥 Forms & Interactive',
    content: '',
    items: [
      { id: 'forms', title: '📋 Forms', content: '', contentLoader: () => import('./forms.mdx?raw') },
      { id: 'html5-apis', title: '⚡ HTML5 APIs', content: '', contentLoader: () => import('./html5-apis.mdx?raw') },
    ],
  },
  {
    id: 'html-semantic-seo',
    title: '🏷️ Semantic HTML & SEO',
    content: '',
    items: [
      {
        id: 'semantic-html',
        title: '🧩 Semantic HTML',
        content: '',
        contentLoader: () => import('./semantic-html.mdx?raw'),
      },
      {
        id: 'metadata-and-seo-basics',
        title: '🔍 Metadata & SEO Basics',
        content: '',
        contentLoader: () => import('./metadata-and-seo-basics.mdx?raw'),
      },
      {
        id: 'html-attributes',
        title: '🏷️ HTML Attributes',
        content: '',
        contentLoader: () => import('./html-attributes.mdx?raw'),
      },
      {
        id: 'html-data-attributes',
        title: '📦 Data Attributes',
        content: '',
        contentLoader: () => import('./data-attributes.mdx?raw'),
      },
      {
        id: 'html-microdata-schema',
        title: '📐 Microdata & Schema',
        content: '',
        contentLoader: () => import('./microdata-schema.mdx?raw'),
      },
    ],
  },
  {
    id: 'html-integration-quality',
    title: '🔗 Integration & Quality',
    content: '',
    items: [
      {
        id: 'html-and-css-relationship',
        title: '🎨 HTML & CSS Relationship',
        content: '',
        contentLoader: () => import('./html-and-css-relationship.mdx?raw'),
      },
      {
        id: 'html-and-js-relationship',
        title: '📜 HTML & JavaScript Relationship',
        content: '',
        contentLoader: () => import('./html-and-js-relationship.mdx?raw'),
      },
      {
        id: 'accessibility',
        title: '♿ Accessibility',
        content: '',
        contentLoader: () => import('./accessibility.mdx?raw'),
      },
      {
        id: 'best-practices',
        title: '✅ Best Practices',
        content: '',
        contentLoader: () => import('./best-practices.mdx?raw'),
      },
      {
        id: 'common-html-mistakes',
        title: '⚠️ Common HTML Mistakes',
        content: '',
        contentLoader: () => import('./common-html-mistakes.mdx?raw'),
      },
    ],
  },
  {
    id: 'html-interview',
    title: '💼 Interview Preparation',
    content: '',
    items: [
      {
        id: 'html-top-25-interview-questions',
        title: '📌 Top 25 Interview Questions',
        content: '',
        contentLoader: () => import('./top-25-interview-questions.mdx?raw'),
      },
    ],
  },
];
