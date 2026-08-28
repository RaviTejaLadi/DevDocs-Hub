# 📖 Pages Router Interview Questions & Answers 🚀

## 🛣️ Routing Basics

### 1. 📁 Creating Routes in Pages-Based Routing

**Answer:** Create a directory in the `pages` directory and add an `index` file:

```javascript
pages / index.jsx; // Routes to: /
pages / blog / index.jsx; // Routes to: /blog
```

### 2. 🔗 Dynamic Route Creation

**Answer:** Use square brackets `[]` in the filename to create dynamic routes:

```javascript
pages / blogs / [id].js; // Routes to: /blogs/1, /blogs/2, etc.
blogs / [id] / index.js; // Routes to: /blogs/1, /blogs/2, etc.
app / products / [id] / page.jsx; // Routes to: /products/1, /products/2, etc.
pages / [...products] / index.js; // Catch-all: /products/1, /products/2, etc.
pages / [[...products]] / index.js; // Optional catch-all: /products, /products/1, etc.
```

### 3. 🧭 Client-Side Navigation

**Answer:** Use the `next/link` component for client-side navigation between
pages.

### 4. 📱 Router Hook

**Answer:** Use `next/router` to handle routing and navigation within a Next.js
app.

### 5. 🛣️ How Routing Works in Next.js

**Answer:** Next.js uses a file-based routing system in the pages directory
where each file automatically becomes a route.

---

## 📄 Special Files

### 6. 🏗️ The `_app.js` File

**Answer:** A custom App component that initializes pages and can add global
styles or layout components.

### 7. ❌ The `_error.js` File

**Answer:** A custom Error component that handles errors and displays custom
error messages.

### 8. 📋 The `_document.js` File

**Answer:** A custom Document component that allows customization of the HTML
document structure.

### 9. 🔍 Creating a 404 Page

**Answer:** Add a `404.js` file in the pages directory to create a custom 404
error page.

### 10. 🚨 Custom 500 Error Page

**Answer:** Create a `500.js` file in the pages directory:

```jsx
export default function Custom500() {
  return <h1>500 - Server-side error occurred</h1>;
}
```

### 11. ⚖️ \_app.js vs \_document.js

**Answer:**

- **\_app.js**: 🌍 For global components and application-level logic
- **\_document.js**: 📋 For modifying the HTML document structure

### 12. 📘 TypeScript Support

**Answer:** The `next-env.d.ts` file provides type definitions for TypeScript
support in Next.js.

---

## 📊 Data Fetching

### 13. ⚖️ getStaticProps vs getServerSideProps

**Answer:**

- **getStaticProps**: 🏗️ Fetches data at build time (Static Site Generation)
- **getServerSideProps**: 🔄 Fetches data on each request (Server-Side
  Rendering)

### 14. 🏗️ getStaticProps

**Answer:** A function used for static site generation to fetch data at build
time:

```jsx
export async function getStaticProps() {
  const res = await fetch('https://api.github.com/repos/vercel/next.js');
  const repo = await res.json();
  return { props: { repo } };
}

export default function Page({ repo }) {
  return <div>⭐ {repo.stargazers_count}</div>;
}
```

### 15. 🔄 getServerSideProps

**Answer:** A function used for server-side rendering to fetch data on each
request:

```jsx
export async function getServerSideProps() {
  const res = await fetch('https://api.github.com/repos/vercel/next.js');
  const repo = await res.json();
  return { props: { repo } };
}

export default function Page({ repo }) {
  return (
    <main>
      <p>⭐ {repo.stargazers_count}</p>
    </main>
  );
}
```

### 16. 🛤️ getStaticPaths

**Answer:** A function used with `getStaticProps` to specify dynamic routes for
pre-rendering:

```jsx
export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          name: 'next.js',
        },
      },
    ],
    fallback: false,
  };
}

export async function getStaticProps() {
  const res = await fetch('https://api.github.com/repos/vercel/next.js');
  const repo = await res.json();
  return { props: { repo } };
}

export default function Page({ repo }) {
  return <div>⭐ {repo.stargazers_count}</div>;
}
```

### 17. 🖥️ Client-Side Data Fetching

**Answer:** Fetch data on the client-side using `useEffect` and `fetch`:

```jsx
'use client';

import { useState, useEffect } from 'react';

export function Posts() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch('https://api.vercel.app/blog');
      const data = await res.json();
      setPosts(data);
    }
    fetchPosts();
  }, []);

  if (!posts) return <div>⏳ Loading...</div>;

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>📝 {post.title}</li>
      ))}
    </ul>
  );
}
```

### 18. 🔄 Client-side vs Server-side Rendering

**Answer:**

- **Client-side rendering**: 🖥️ Happens in the browser
- **Server-side rendering**: 🔄 Happens on the server

### 19. ⚡ Static Optimization

**Answer:** Automatically determine if a page can be statically generated for
better performance.

### 20. 🔄 ISR (Incremental Static Regeneration)

**Answer:** Update static pages after build without redeploying the entire
application.

---

## 🎨 Styling

### 21. 🌍 Global CSS

**Answer:** Import CSS files in `_app.js` to add global styles.

### 22. 🖼️ Image Optimization

**Answer:** Use the `next/image` component to optimize and serve images
efficiently.

### 23. 💅 CSS-in-JS

**Answer:** Use libraries like styled-components or Emotion for CSS-in-JS
solutions.

### 24. 🎨 Sass Support

**Answer:** Install sass and import `.scss` files in your components:

**next.config.js:**

```js
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  sassOptions: {
    implementation: 'sass-embedded',
  },
};

export default nextConfig;
```

**app/variables.module.scss:**

```scss
$primary-color: #64ff00;

:export {
  primaryColor: $primary-color;
}
```

**app/page.jsx:**

```jsx
import variables from './variables.module.scss';

export default function Page() {
  return <h1 style={{ color: variables.primaryColor }}>🎨 Hello, Next.js!</h1>;
}
```

---

## 🔌 API Routes

### 25. 🛠️ Creating API Endpoints

**Answer:** Add files to the `pages/api` or `app/api` directory to create API
endpoints.

### 26. 📝 Form Handling

**Answer:** Handle form submissions using client-side form handling or API
routes for server-side processing.

---

## 🚀 Advanced Features

### 27. 🔐 Authentication

**Answer:** Implement authentication using libraries like AuthJS, JWT, or custom
authentication logic.

### 28. 📦 Code Splitting with Dynamic Imports

**Answer:** Use `next/dynamic` to enable dynamic imports and code splitting:

```jsx
'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';

const ComponentA = dynamic(() => import('../components/A'));
const ComponentB = dynamic(() => import('../components/B'));
const ComponentC = dynamic(() => import('../components/C'), { ssr: false });

export default function ClientComponentExample() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div>
      {/* 🚀 Load immediately, but in a separate client bundle */}
      <ComponentA />

      {/* 🔄 Load on demand, only when condition is met */}
      {showMore && <ComponentB />}
      <button onClick={() => setShowMore(!showMore)}>🔄 Toggle</button>

      {/* 🖥️ Load only on the client side */}
      <ComponentC />
    </div>
  );
}
```

### 29. 🏷️ Meta Tags

**Answer:** Add meta tags using the Head component from `next/head` or metadata
export:

```jsx
export const metadata = {
  title: 'NextJS',
  description: 'A React Framework for building full-stack web applications',
};

export default function Page() {
  return <div>🚀 Welcome to Next.js!</div>;
}
```

### 30. 🌐 Internationalization

**Answer:** Use the `useTranslation` hook for handling translations when using
i18n.

### 31. ⚡ AMP (Accelerated Mobile Pages)

**Answer:** Enable AMP by adding the `amp` attribute to a page component for
fast-loading mobile pages.

### 32. 🔧 State Management

**Answer:** Set up Redux in a Next.js project by creating a Redux store and
integrating it with `_app.js`.

---

## ⚙️ Configuration

### 33. 📦 Webpack Configuration

**Answer:** Extend the Webpack configuration in `next.config.js`:

```js
module.exports = {
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    // 🔧 Important: return the modified config
    return config;
  },
};
```

### 34. 🔌 Plugin Composition

**Answer:** Use `next-compose-plugins` to compose multiple plugins in
`next.config.js`.

### 35. 📁 Base Path Configuration

**Answer:** Use the `basePath` option to specify a base path for the
application.

### 36. 🖥️ Server Runtime Config

**Answer:** Use `serverRuntimeConfig` for configuration only available on the
server side.

### 37. 🔧 Polyfills

**Answer:** Add polyfills by customizing the webpack configuration in
`next.config.js`.

---

## 🚨 Error Handling

### 38. 🔍 Custom Error Pages

**Answer:** Create custom error pages by adding `_error.js` in the pages
directory.

### 39. 🛡️ Middleware

**Answer:** Handle middleware using middleware functions in `next.config.js`.

---

## 📚 Key Concepts

### 40. 📁 Directory Structure

**Answer:**

- **pages**: 🛣️ Contains routable components
- **components**: 🧩 Contains reusable UI components

### 41. 🖥️ Client Runtime Configuration

**Answer:** Configuration available on both client and server sides.

### 42. 🔄 Purpose of \_error.js

**Answer:** To customize the error page for HTTP errors and provide better user
experience during failures.

---

## 🎯 Best Practices

✅ **Do:**

- Use `getStaticProps` for static content
- Implement proper error handling
- Optimize images with `next/image`
- Use dynamic imports for code splitting

❌ **Don't:**

- Mix client and server-side rendering unnecessarily
- Forget to handle loading states
- Skip image optimization
- Ignore accessibility requirements

---

_This guide covers the essential aspects of Next.js Pages Router. For more
advanced topics and updates, refer to the official Next.js documentation._
