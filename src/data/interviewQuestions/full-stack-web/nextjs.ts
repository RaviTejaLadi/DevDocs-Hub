import type { InterviewQA } from '../types';

export const nextjsQuestions: InterviewQA[] = [
  {
    id: 'nextjs-01',
    topicId: 'nextjs',
    level: 'entry',
    questionType: 'theory',
    question: 'What is Next.js?',
    answer:
      'Next.js is a React framework that enables several extra features, including server-side rendering and generating static websites. It provides an out-of-the-box solution for production React applications, including routing, optimized bundling, and SEO features.',
  },
  {
    id: 'nextjs-02',
    topicId: 'nextjs',
    level: 'entry',
    questionType: 'theory',
    question: 'What are the main features of Next.js?',
    answer: [
      '- **Server-Side Rendering (SSR)**',
      '- **Static Site Generation (SSG)**',
      '- **Incremental Static Regeneration (ISR)**',
      '- **File-based Routing**',
      '- **API Routes**',
      '- **Image Optimization**',
      '- **Built-in CSS and Sass support**',
      '- **Fast Refresh**',
    ].join('\n'),
  },
  {
    id: 'nextjs-03',
    topicId: 'nextjs',
    level: 'junior',
    questionType: 'theory',
    question: 'What is the difference between Next.js and React?',
    answer:
      'React is a JavaScript library for building user interfaces, while Next.js is a framework built on top of React. Next.js provides additional features like routing, SSR, and SSG that you would otherwise have to configure manually in a React application.',
  },
  {
    id: 'nextjs-04',
    topicId: 'nextjs',
    level: 'junior',
    questionType: 'theory',
    question: 'Explain File-based Routing in Next.js.',
    answer:
      'In Next.js, the file system is the main way to define routes. Any file inside the `pages` directory (or `app` directory in newer versions) automatically becomes a route based on its file name. For example, `pages/about.js` maps to `/about`.',
  },
  {
    id: 'nextjs-05',
    topicId: 'nextjs',
    level: 'mid',
    questionType: 'theory',
    question: 'What is Server-Side Rendering (SSR) and when should you use it?',
    answer:
      'SSR is the process of rendering a page on the server for every request. Use it when the page contains frequently updated data or needs to be personalized for each user at request time. It uses the `getServerSideProps` function (Pages Router).',
  },
  {
    id: 'nextjs-06',
    topicId: 'nextjs',
    level: 'mid',
    questionType: 'theory',
    question: 'What is Static Site Generation (SSG)?',
    answer:
      'SSG is the process of pre-rendering pages at build time. The HTML is generated once and reused for every request. It is very fast and can be served via CDN. It uses `getStaticProps` (Pages Router).',
  },
  {
    id: 'nextjs-07',
    topicId: 'nextjs',
    level: 'mid',
    questionType: 'theory',
    question: 'What is Incremental Static Regeneration (ISR)?',
    answer:
      'ISR allows you to update static content after the site has been built without needing a full rebuild. You can specify a `revalidate` time in `getStaticProps`, after which Next.js will attempt to re-generate the page in the background.',
  },
  {
    id: 'nextjs-08',
    topicId: 'nextjs',
    level: 'junior',
    questionType: 'theory',
    question: 'What are API Routes in Next.js?',
    answer:
      'API Routes provide a way to build an API within a Next.js app. Any file in `pages/api` is mapped to `/api/*` and treated as an API endpoint instead of a page. These run on the server.',
  },
  {
    id: 'nextjs-09',
    topicId: 'nextjs',
    level: 'junior',
    questionType: 'theory',
    question: 'What is the purpose of the `_app.js` file?',
    answer:
      'Next.js uses the `_app.js` component to initialize pages. You can use it to wrap all pages with a layout, persist state between page changes, or add global CSS.',
  },
  {
    id: 'nextjs-10',
    topicId: 'nextjs',
    level: 'junior',
    questionType: 'theory',
    question: 'What is the purpose of the `_document.js` file?',
    answer:
      "`_document.js` is used to augment the application's `<html>` and `<body>` tags. It is only rendered on the server and is typically used for SEO meta tags and loading custom fonts.",
  },
  {
    id: 'nextjs-11',
    topicId: 'nextjs',
    level: 'mid',
    questionType: 'theory',
    question: 'How do you handle dynamic routes in Next.js?',
    answer:
      'Dynamic routes are created by adding brackets to the filename, e.g., `pages/posts/[id].js`. You can access the `id` parameter via `useRouter` or in data fetching methods.',
  },
  {
    id: 'nextjs-12',
    topicId: 'nextjs',
    level: 'mid',
    questionType: 'theory',
    question: 'What is `getStaticPaths` used for?',
    answer:
      'In dynamic routes using SSG, `getStaticPaths` defines the list of paths that should be pre-rendered at build time.',
  },
  {
    id: 'nextjs-13',
    topicId: 'nextjs',
    level: 'senior',
    questionType: 'theory',
    question: 'Explain the new "App Router" introduced in Next.js 13.',
    answer:
      'The App Router uses a new directory structure (`app/`) and supports React Server Components, nested layouts, and better data fetching patterns. It simplifies complex routing and improves performance by reducing client-side JavaScript.',
  },
  {
    id: 'nextjs-14',
    topicId: 'nextjs',
    level: 'senior',
    questionType: 'theory',
    question: 'What are React Server Components (RSC)?',
    answer:
      'RSC allows components to be rendered exclusively on the server. They reduce the amount of JavaScript sent to the client and enable direct access to server-side resources like databases.',
  },
  {
    id: 'nextjs-15',
    topicId: 'nextjs',
    level: 'senior',
    questionType: 'theory',
    question: 'What is the difference between "use client" and "use server" directives?',
    answer:
      '`"use client"` marks a component as a Client Component, which can use hooks and event listeners. `"use server"` is used for Server Actions, which are server-side functions called from the client.',
  },
  {
    id: 'nextjs-16',
    topicId: 'nextjs',
    level: 'mid',
    questionType: 'theory',
    question: 'How does Next.js optimize images?',
    answer:
      'The `next/image` component automatically optimizes images by resizing them, serving them in modern formats like WebP, and lazy-loading them by default.',
  },
  {
    id: 'nextjs-17',
    topicId: 'nextjs',
    level: 'junior',
    questionType: 'theory',
    question: 'What is "Fast Refresh"?',
    answer:
      'Fast Refresh is a Next.js feature that gives you instantaneous feedback for edits made to your React components. It preserves component state while re-rendering only the changed parts.',
  },
  {
    id: 'nextjs-18',
    topicId: 'nextjs',
    level: 'mid',
    questionType: 'theory',
    question: 'How do you add global CSS in Next.js?',
    answer:
      'Global CSS should be imported into the `_app.js` file (Pages Router) or the root `layout.tsx` file (App Router).',
  },
  {
    id: 'nextjs-19',
    topicId: 'nextjs',
    level: 'mid',
    questionType: 'theory',
    question: 'What are CSS Modules?',
    answer:
      'Next.js supports CSS Modules out of the box. Files named `[name].module.css` create locally scoped class names to avoid naming conflicts.',
  },
  {
    id: 'nextjs-20',
    topicId: 'nextjs',
    level: 'senior',
    questionType: 'theory',
    question: 'Explain Middleware in Next.js.',
    answer:
      'Middleware allows you to run code before a request is completed. It is useful for authentication checks, redirects, and rewriting headers. It runs on the Edge Runtime.',
  },
  {
    id: 'nextjs-21',
    topicId: 'nextjs',
    level: 'mid',
    questionType: 'coding',
    question: 'How do you fetch data in a Client Component in the App Router?',
    answer: [
      'You can use standard React patterns like `useEffect` with `fetch`, or libraries like SWR or React Query.',
      '```tsx',
      '"use client";',
      'import { useState, useEffect } from "react";',
      '',
      'export default function Page() {',
      '  const [data, setData] = useState(null);',
      '  useEffect(() => {',
      '    fetch("/api/data").then(res => res.json()).then(setData);',
      '  }, []);',
      '  return <div>{JSON.stringify(data)}</div>;',
      '}',
      '```',
    ].join('\n'),
  },
  {
    id: 'nextjs-22',
    topicId: 'nextjs',
    level: 'mid',
    questionType: 'coding',
    question: 'How do you fetch data in a Server Component in the App Router?',
    answer: [
      'You can use `async/await` directly in the component.',
      '```tsx',
      'export default async function Page() {',
      '  const res = await fetch("https://api.example.com/data");',
      '  const data = await res.json();',
      '  return <div>{data.message}</div>;',
      '}',
      '```',
    ].join('\n'),
  },
  {
    id: 'nextjs-23',
    topicId: 'nextjs',
    level: 'junior',
    questionType: 'theory',
    question: 'What is the purpose of `next/link`?',
    answer:
      '`next/link` is used for client-side navigation between pages. It pre-fetches the target page in the background, making transitions feel instantaneous.',
  },
  {
    id: 'nextjs-24',
    topicId: 'nextjs',
    level: 'mid',
    questionType: 'theory',
    question: 'How do you handle redirects in Next.js?',
    answer:
      'You can use the `redirect` function in `getServerSideProps` (Pages) or `redirect()` in Server Components/Actions (App Router), or configure them in `next.config.js`.',
  },
  {
    id: 'nextjs-25',
    topicId: 'nextjs',
    level: 'senior',
    questionType: 'theory',
    question: 'What is the "Edge Runtime"?',
    answer:
      'The Edge Runtime is a lightweight execution environment used for Middleware and Edge API Routes. It supports a subset of Node.js APIs and is designed for low latency by running close to the user.',
  },
  {
    id: 'nextjs-26',
    topicId: 'nextjs',
    level: 'expert',
    questionType: 'theory',
    question: 'How does Next.js handle code splitting?',
    answer:
      'Next.js automatically code-splits your application. Each page only loads the JavaScript it needs. You can also use dynamic imports (`next/dynamic`) for component-level code splitting.',
  },
  {
    id: 'nextjs-27',
    topicId: 'nextjs',
    level: 'senior',
    questionType: 'theory',
    question: 'What are Server Actions?',
    answer:
      'Server Actions are asynchronous functions that run on the server. They can be invoked from both Client and Server Components to handle form submissions and data mutations without manual API routes.',
  },
  {
    id: 'nextjs-28',
    topicId: 'nextjs',
    level: 'mid',
    questionType: 'theory',
    question: 'Explain the purpose of `revalidatePath` and `revalidateTag`.',
    answer:
      'These are used in the App Router to purge cached data on-demand. `revalidatePath` clears cache for a specific URL, while `revalidateTag` clears cache for data tagged with a specific string during fetch.',
  },
  {
    id: 'nextjs-29',
    topicId: 'nextjs',
    level: 'junior',
    questionType: 'theory',
    question: 'How do you define a custom 404 page?',
    answer:
      'In the Pages Router, create a `pages/404.js` file. In the App Router, create a `not-found.js` file in any segment.',
  },
  {
    id: 'nextjs-30',
    topicId: 'nextjs',
    level: 'mid',
    questionType: 'theory',
    question: 'What is the difference between `Link` and `useRouter` for navigation?',
    answer:
      '`Link` is preferred for most navigation as it handles pre-fetching and is more accessible. `useRouter` (or `usePathname`/`useRouter` from `next/navigation`) is used for programmatic navigation (e.g., after a form submission).',
  },
  {
    id: 'nextjs-31',
    topicId: 'nextjs',
    level: 'senior',
    questionType: 'theory',
    question: 'How can you improve SEO in a Next.js application?',
    answer:
      'Use the `Metadata` API (App Router) or `Head` component (Pages Router) to manage meta tags. SSR and SSG ensure content is crawlable. `next/image` improves Core Web Vitals.',
  },
  {
    id: 'nextjs-32',
    topicId: 'nextjs',
    level: 'mid',
    questionType: 'theory',
    question: 'What is "Hydration"?',
    answer:
      'Hydration is the process where React attaches event listeners to the static HTML sent by the server, making the page interactive on the client.',
  },
  {
    id: 'nextjs-33',
    topicId: 'nextjs',
    level: 'senior',
    questionType: 'theory',
    question: 'What is the purpose of `generateMetadata`?',
    answer:
      'In the App Router, `generateMetadata` is used to dynamically create meta tags (like title and description) based on dynamic route parameters or fetched data.',
  },
  {
    id: 'nextjs-34',
    topicId: 'nextjs',
    level: 'mid',
    questionType: 'theory',
    question: 'How do you use environment variables in Next.js?',
    answer:
      'Store them in `.env.local`. Variables prefixed with `NEXT_PUBLIC_` are accessible in the browser; others are only available on the server.',
  },
  {
    id: 'nextjs-35',
    topicId: 'nextjs',
    level: 'expert',
    questionType: 'theory',
    question: 'Explain the "Stale-While-Revalidate" caching strategy in Next.js.',
    answer:
      'When a request is made to a stale page, Next.js serves the cached version (stale) while simultaneously triggering a background regeneration (revalidate). Once finished, the cache is updated for the next request.',
  },
  {
    id: 'nextjs-36',
    topicId: 'nextjs',
    level: 'junior',
    questionType: 'theory',
    question: 'What is the `public` folder used for?',
    answer:
      'The `public` folder stores static assets like images, fonts, and robots.txt. Files here are served at the root URL (e.g., `/public/logo.png` is accessed at `/logo.png`).',
  },
  {
    id: 'nextjs-37',
    topicId: 'nextjs',
    level: 'mid',
    questionType: 'theory',
    question: 'How do you optimize fonts in Next.js?',
    answer:
      'Use `next/font`. It automatically self-hosts fonts, removes external network requests for better privacy/performance, and prevents layout shifts.',
  },
  {
    id: 'nextjs-38',
    topicId: 'nextjs',
    level: 'senior',
    questionType: 'theory',
    question: 'What are "Parallel Routes"?',
    answer:
      'Parallel Routes allow you to simultaneously or conditionally render one or more pages in the same layout. They are defined using "slots" (e.g., `@analytics`, `@team`).',
  },
  {
    id: 'nextjs-39',
    topicId: 'nextjs',
    level: 'senior',
    questionType: 'theory',
    question: 'What are "Intercepting Routes"?',
    answer:
      'Intercepting Routes allow you to load a route within the current layout while masking the URL. Useful for patterns like modals that have their own URL.',
  },
  {
    id: 'nextjs-40',
    topicId: 'nextjs',
    level: 'mid',
    questionType: 'theory',
    question: 'How do you handle errors in the App Router?',
    answer:
      'Use `error.js` files to create error boundaries for specific route segments. Use `global-error.js` for the root layout.',
  },
  {
    id: 'nextjs-41',
    topicId: 'nextjs',
    level: 'expert',
    questionType: 'theory',
    question: 'Explain the Next.js compilation process (SWC).',
    answer:
      'Next.js uses SWC, a Rust-based compiler, to transform and minify JavaScript/TypeScript code. It is significantly faster than Babel.',
  },
  {
    id: 'nextjs-42',
    topicId: 'nextjs',
    level: 'junior',
    questionType: 'theory',
    question: 'How do you enable TypeScript in an existing Next.js project?',
    answer:
      'Create an empty `tsconfig.json` file and run `npm run dev`. Next.js will automatically detect the file and install the necessary types.',
  },
  {
    id: 'nextjs-43',
    topicId: 'nextjs',
    level: 'mid',
    questionType: 'theory',
    question: 'What is the purpose of `next.config.js`?',
    answer:
      'It allows you to customize various aspects of the Next.js build process, such as adding redirects, rewrites, custom Webpack config, and experimental features.',
  },
  {
    id: 'nextjs-44',
    topicId: 'nextjs',
    level: 'senior',
    questionType: 'theory',
    question: 'What is the difference between `fetch` in Next.js vs the browser?',
    answer:
      'Next.js extends the native `fetch` API to provide per-request caching, revalidation, and memoization of requests within the server runtime.',
  },
  {
    id: 'nextjs-45',
    topicId: 'nextjs',
    level: 'mid',
    questionType: 'theory',
    question: 'How do you implement a loading state in the App Router?',
    answer:
      'Create a `loading.js` file in the route segment. Next.js will automatically wrap the page in a React Suspense boundary using this component as the fallback.',
  },
  {
    id: 'nextjs-46',
    topicId: 'nextjs',
    level: 'junior',
    questionType: 'theory',
    question: 'What is the default port for Next.js?',
    answer: 'The default port is 3000.',
  },
  {
    id: 'nextjs-47',
    topicId: 'nextjs',
    level: 'mid',
    questionType: 'theory',
    question: 'How do you handle authentication in Next.js?',
    answer:
      'Common patterns include using libraries like NextAuth.js (Auth.js), Clerk, or iron-session. Middleware is often used to protect routes.',
  },
  {
    id: 'nextjs-48',
    topicId: 'nextjs',
    level: 'senior',
    questionType: 'theory',
    question: 'What is "Streaming" in Next.js?',
    answer:
      "Streaming allows you to break down the page's HTML into smaller chunks and progressively send them from the server to the client. This improves perceived performance by showing content faster.",
  },
  {
    id: 'nextjs-49',
    topicId: 'nextjs',
    level: 'mid',
    questionType: 'coding',
    question: 'How do you create a dynamic API route?',
    answer: [
      'Create a file like `pages/api/user/[id].js`.',
      '```js',
      'export default function handler(req, res) {',
      '  const { id } = req.query;',
      '  res.status(200).json({ userId: id });',
      '}',
      '```',
    ].join('\n'),
  },
  {
    id: 'nextjs-50',
    topicId: 'nextjs',
    level: 'senior',
    questionType: 'coding',
    question: 'How do you implement a Server Action for a form?',
    answer: [
      '```tsx',
      '// app/page.tsx',
      'export default function Page() {',
      '  async function createInvoice(formData: FormData) {',
      '    "use server";',
      '    const amount = formData.get("amount");',
      '    // mutate data...',
      '  }',
      '',
      '  return <form action={createInvoice}>...</form>;',
      '}',
      '```',
    ].join('\n'),
  },
  {
    id: 'nextjs-51',
    topicId: 'nextjs',
    level: 'mid',
    questionType: 'theory',
    question: 'What is the purpose of `output: "export"` in `next.config.js`?',
    answer:
      'It enables static exports, allowing you to deploy Next.js as a fully static site without a Node.js server.',
  },
  {
    id: 'nextjs-52',
    topicId: 'nextjs',
    level: 'junior',
    questionType: 'theory',
    question: 'What is the difference between `next dev`, `next build`, and `next start`?',
    answer:
      '`next dev` starts a development server with Fast Refresh. `next build` creates an optimized production build. `next start` starts the production server using that build.',
  },
  {
    id: 'nextjs-53',
    topicId: 'nextjs',
    level: 'mid',
    questionType: 'theory',
    question: 'How do you set a custom `<title>` for a page in the Pages Router?',
    answer: [
      'Use the `Head` component from `next/head`.',
      '```jsx',
      'import Head from "next/head";',
      '',
      'function Page() {',
      '  return (',
      '    <>',
      '      <Head><title>My Page Title</title></Head>',
      '      <div>Content</div>',
      '    </>',
      '  );',
      '}',
      '```',
    ].join('\n'),
  },
  {
    id: 'nextjs-54',
    topicId: 'nextjs',
    level: 'senior',
    questionType: 'theory',
    question: 'What are "Draft Mode" and "Preview Mode"?',
    answer:
      'These features allow you to bypass static generation and render pages at request-time to preview draft content from a CMS.',
  },
  {
    id: 'nextjs-55',
    topicId: 'nextjs',
    level: 'expert',
    questionType: 'theory',
    question: 'How does Next.js handle multi-zones?',
    answer:
      'Multi-zones allow you to merge multiple Next.js applications into a single domain using rewrites in `next.config.js`.',
  },
  {
    id: 'nextjs-56',
    topicId: 'nextjs',
    level: 'mid',
    questionType: 'theory',
    question: 'What is the difference between `router.push` and `router.replace`?',
    answer:
      '`router.push` adds a new entry to the browser history stack, while `router.replace` replaces the current entry, preventing the user from going back to the previous page via the back button.',
  },
  {
    id: 'nextjs-57',
    topicId: 'nextjs',
    level: 'senior',
    questionType: 'theory',
    question: 'How do you use "Route Handlers" in the App Router?',
    answer:
      'Route Handlers are defined in `route.js` (or `.ts`) files. They use the standard Web `Request` and `Response` objects and support HTTP methods like GET, POST, PUT, DELETE.',
  },
  {
    id: 'nextjs-58',
    topicId: 'nextjs',
    level: 'mid',
    questionType: 'theory',
    question: 'What is the purpose of `generateStaticParams`?',
    answer:
      'In the App Router, it replaces `getStaticPaths`. It is used in combination with dynamic route segments to statically generate routes at build time.',
  },
  {
    id: 'nextjs-59',
    topicId: 'nextjs',
    level: 'junior',
    questionType: 'theory',
    question: 'Does Next.js support Sass?',
    answer:
      'Yes, Next.js has built-in support for Sass after installing the `sass` package. You can use both `.scss` and `.sass` extensions.',
  },
  {
    id: 'nextjs-60',
    topicId: 'nextjs',
    level: 'expert',
    questionType: 'theory',
    question: 'Explain the "Partial Prerendering" (PPR) experimental feature.',
    answer:
      'PPR combines static and dynamic rendering on the same page. It renders a static shell immediately and streams dynamic parts as they become ready, providing the best of both worlds.',
  },
];
