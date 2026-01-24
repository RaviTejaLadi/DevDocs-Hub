# **React Server-Side Rendering (SSR) Complete Guide**

## Table of Contents

1. [Introduction](#introduction)
2. [Key Definitions](#key-definitions)
3. [How SSR Works](#how-ssr-works)
4. [Benefits and Drawbacks](#benefits-and-drawbacks)
5. [Core APIs and Syntax](#core-apis-and-syntax)
6. [Basic Implementation](#basic-implementation)
7. [Advanced Patterns](#advanced-patterns)
8. [Frameworks and Tools](#frameworks-and-tools)
9. [Performance Considerations](#performance-considerations)
10. [Best Practices](#best-practices)
11. [Common Pitfalls](#common-pitfalls)
12. [Examples](#examples)

## Introduction

React Server-Side Rendering (SSR) is a technique where React components are
rendered on the server instead of the client browser. The server generates the
initial HTML markup and sends it to the client, where React then "hydrates" the
static HTML to make it interactive.

## Key Definitions

### Server-Side Rendering (SSR)

The process of rendering React components on the server and sending the
resulting HTML to the client.

### Hydration

The process where React takes over the server-rendered HTML on the client side,
attaching event listeners and making the page interactive.

### Universal/Isomorphic JavaScript

Code that can run both on the server and client environments.

### Static Site Generation (SSG)

Pre-rendering pages at build time rather than request time.

### Client-Side Rendering (CSR)

Traditional React rendering where components are rendered entirely in the
browser.

### Time to First Byte (TTFB)

The time between the initial request and when the server starts sending data.

### First Contentful Paint (FCP)

The time when the browser renders the first piece of content.

## How SSR Works

### Traditional CSR Flow

1. Browser requests page
2. Server sends minimal HTML with JavaScript bundle
3. Browser downloads and executes JavaScript
4. React renders components in browser
5. Page becomes interactive

### SSR Flow

1. Browser requests page
2. Server renders React components to HTML
3. Server sends complete HTML with embedded data
4. Browser displays content immediately
5. JavaScript bundle loads and hydrates the page
6. Page becomes fully interactive

## Benefits and Drawbacks

### Benefits

- **Improved SEO**: Search engines can crawl the fully rendered HTML
- **Faster Initial Page Load**: Users see content immediately
- **Better Performance on Slow Devices**: Less client-side processing required
- **Social Media Sharing**: Meta tags are properly rendered for link previews
- **Accessibility**: Content is available even if JavaScript fails

### Drawbacks

- **Increased Server Load**: Server must render each request
- **Complex Setup**: More infrastructure and configuration required
- **Slower Navigation**: Subsequent page loads may be slower than CSR
- **Development Complexity**: Need to handle server and client environments
- **Hosting Costs**: Requires server infrastructure instead of static hosting

## Core APIs and Syntax

### Server-Side APIs

#### `renderToString()`

```javascript
import { renderToString } from 'react-dom/server';

const html = renderToString(<App />);
```

Renders a React component to its initial HTML string.

#### `renderToStaticMarkup()`

```javascript
import { renderToStaticMarkup } from 'react-dom/server';

const html = renderToStaticMarkup(<App />);
```

Similar to `renderToString()` but doesn't create extra DOM attributes that React
uses internally.

#### `renderToPipeableStream()` (React 18+)

```javascript
import { renderToPipeableStream } from 'react-dom/server';

const stream = renderToPipeableStream(<App />, {
  onShellReady() {
    response.setHeader('content-type', 'text/html');
    stream.pipe(response);
  },
});
```

Renders to a stream for better performance with large applications.

### Client-Side APIs

#### `hydrate()` (Legacy)

```javascript
import { hydrate } from 'react-dom';

hydrate(<App />, document.getElementById('root'));
```

#### `hydrateRoot()` (React 18+)

```javascript
import { hydrateRoot } from 'react-dom/client';

hydrateRoot(document.getElementById('root'), <App />);
```

## Basic Implementation

### 1. Project Structure

```tsx
project/
├── src/
│   ├── components/
│   │   └── App.js
│   ├── server.js
│   └── client.js
├── public/
│   └── index.html
└── package.json
```

### 2. Shared Component (src/components/App.js)

```javascript
import React from 'react';

const App = ({ initialData }) => {
  const [count, setCount] = React.useState(initialData?.count || 0);

  return (
    <div>
      <h1>SSR React App</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default App;
```

### 3. Server Implementation (src/server.js)

```javascript
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './components/App.js';

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
  const initialData = { count: 5 };

  const html = renderToString(<App initialData={initialData} />);

  const fullHtml = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>SSR React App</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__INITIAL_DATA__ = ${JSON.stringify(initialData)};
        </script>
        <script src="/bundle.js"></script>
      </body>
    </html>
  `;

  res.send(fullHtml);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

### 4. Client Implementation (src/client.js)

```javascript
import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import App from './components/App.js';

const initialData = window.__INITIAL_DATA__;

hydrateRoot(document.getElementById('root'), <App initialData={initialData} />);
```

## Advanced Patterns

### Data Fetching Patterns

#### 1. Data Fetching on Server

```javascript
// In your server route
app.get('/users/:id', async (req, res) => {
  try {
    const userData = await fetchUserData(req.params.id);
    const html = renderToString(<UserProfile user={userData} />);

    const fullHtml = `
      <!DOCTYPE html>
      <html>
        <body>
          <div id="root">${html}</div>
          <script>
            window.__USER_DATA__ = ${JSON.stringify(userData)};
          </script>
          <script src="/bundle.js"></script>
        </body>
      </html>
    `;

    res.send(fullHtml);
  } catch (error) {
    res.status(500).send('Error loading user data');
  }
});
```

#### 2. Component-Level Data Requirements

```javascript
// Higher-order component pattern
const withServerData = (WrappedComponent, dataFetcher) => {
  const WithServerDataComponent = (props) => {
    return <WrappedComponent {...props} />;
  };

  WithServerDataComponent.getServerData = dataFetcher;
  return WithServerDataComponent;
};

const UserProfile = ({ user }) => (
  <div>
    <h1>{user.name}</h1>
    <p>{user.email}</p>
  </div>
);

export default withServerData(UserProfile, async (params) => {
  return await fetchUserData(params.id);
});
```

### Streaming SSR (React 18+)

```javascript
import { renderToPipeableStream } from 'react-dom/server';
import { Suspense } from 'react';

const App = () => (
  <html>
    <body>
      <div id="root">
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <SlowComponent />
        </Suspense>
        <Footer />
      </div>
    </body>
  </html>
);

app.get('*', (req, res) => {
  const stream = renderToPipeableStream(<App />, {
    onShellReady() {
      res.setHeader('content-type', 'text/html');
      stream.pipe(res);
    },
    onError(error) {
      console.error(error);
      res.status(500).send('Server Error');
    },
  });
});
```

## Frameworks and Tools

### Next.js

The most popular React SSR framework with built-in optimizations.

```javascript
// pages/index.js
export default function Home({ posts }) {
  return (
    <div>
      <h1>Blog Posts</h1>
      {posts.map((post) => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
        </article>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  const posts = await fetchPosts();
  return { props: { posts } };
}
```

### Gatsby

Static site generator with SSR capabilities.

### Remix

Full-stack web framework focused on web standards.

### Custom Solutions

Using tools like Webpack, Babel, and Express for custom SSR setups.

## Performance Considerations

### Caching Strategies

#### 1. Page-Level Caching

```javascript
const cache = new Map();

app.get('/product/:id', (req, res) => {
  const cacheKey = `product-${req.params.id}`;

  if (cache.has(cacheKey)) {
    return res.send(cache.get(cacheKey));
  }

  const html = renderProductPage(req.params.id);
  cache.set(cacheKey, html);
  res.send(html);
});
```

#### 2. Component-Level Caching

```javascript
import LRU from 'lru-cache';

const componentCache = new LRU({ max: 100 });

const CacheableComponent = ({ data }) => {
  const cacheKey = JSON.stringify(data);

  if (componentCache.has(cacheKey)) {
    return componentCache.get(cacheKey);
  }

  const rendered = <ExpensiveComponent data={data} />;
  componentCache.set(cacheKey, rendered);
  return rendered;
};
```

### Code Splitting for SSR

```javascript
import { lazy, Suspense } from 'react';

const LazyComponent = lazy(() => import('./LazyComponent'));

const App = () => (
  <div>
    <Header />
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  </div>
);
```

## Best Practices

### 1. Environment Detection

```javascript
const isServer = typeof window === 'undefined';

const MyComponent = () => {
  React.useEffect(() => {
    if (!isServer) {
      // Client-only code
      analytics.track('page_view');
    }
  }, []);

  return <div>Content</div>;
};
```

### 2. Handling Different Data on Server vs Client

```javascript
const MyComponent = () => {
  const [data, setData] = React.useState(
    typeof window !== 'undefined' ? window.__INITIAL_DATA__ : null
  );

  React.useEffect(() => {
    if (!data) {
      fetchData().then(setData);
    }
  }, []);

  if (!data) return <div>Loading...</div>;

  return <div>{data.content}</div>;
};
```

### 3. CSS-in-JS Considerations

```javascript
import styled, { ServerStyleSheet } from 'styled-components';

// Server-side
const sheet = new ServerStyleSheet();
const html = renderToString(sheet.collectStyles(<App />));
const styleTags = sheet.getStyleTags();
```

### 4. Error Boundaries for SSR

```javascript
class SSRErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    if (typeof window === 'undefined') {
      console.error('SSR Error:', error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong during rendering.</h1>;
    }

    return this.props.children;
  }
}
```

## Common Pitfalls

### 1. Hydration Mismatches

**Problem**: Server and client render different content.

```javascript
// ❌ Bad: Different content on server vs client
const BadComponent = () => {
  const [time, setTime] = React.useState(new Date().toISOString());
  return <div>Current time: {time}</div>;
};

// ✅ Good: Consistent initial render
const GoodComponent = () => {
  const [time, setTime] = React.useState(null);

  React.useEffect(() => {
    setTime(new Date().toISOString());
  }, []);

  return <div>Current time: {time || 'Loading...'}</div>;
};
```

### 2. Browser-Only APIs

```javascript
// ❌ Bad: Using browser APIs directly
const BadComponent = () => {
  const width = window.innerWidth; // Error on server
  return <div>Width: {width}</div>;
};

// ✅ Good: Checking environment
const GoodComponent = () => {
  const [width, setWidth] = React.useState(0);

  React.useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return <div>Width: {width}</div>;
};
```

### 3. Memory Leaks

```javascript
// ❌ Bad: Not cleaning up server-side resources
app.get('*', (req, res) => {
  const stream = renderToPipeableStream(<App />);
  stream.pipe(res);
  // Stream not properly closed
});

// ✅ Good: Proper cleanup
app.get('*', (req, res) => {
  const stream = renderToPipeableStream(<App />, {
    onShellReady() {
      stream.pipe(res);
    },
    onError() {
      stream.destroy();
    },
  });
});
```

## Examples

### Example 1: Basic E-commerce Product Page

```javascript
// ProductPage.js
const ProductPage = ({ product, reviews }) => {
  const [selectedImage, setSelectedImage] = React.useState(0);

  return (
    <div className="product-page">
      <div className="product-images">
        <img src={product.images[selectedImage]} alt={product.name} />
        <div className="image-thumbnails">
          {product.images.map((img, index) => (
            <img
              key={index}
              src={img}
              onClick={() => setSelectedImage(index)}
              className={index === selectedImage ? 'active' : ''}
            />
          ))}
        </div>
      </div>

      <div className="product-info">
        <h1>{product.name}</h1>
        <p className="price">${product.price}</p>
        <p className="description">{product.description}</p>

        <button className="add-to-cart">Add to Cart</button>
      </div>

      <div className="reviews">
        <h2>Customer Reviews</h2>
        {reviews.map((review) => (
          <div key={review.id} className="review">
            <h3>{review.title}</h3>
            <p>{review.content}</p>
            <span className="rating">Rating: {review.rating}/5</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Server route
app.get('/product/:id', async (req, res) => {
  const [product, reviews] = await Promise.all([
    fetchProduct(req.params.id),
    fetchProductReviews(req.params.id),
  ]);

  const html = renderToString(
    <ProductPage product={product} reviews={reviews} />
  );

  res.send(createHtmlTemplate(html, { product, reviews }));
});
```

### Example 2: Blog with Dynamic Content

```javascript
// BlogPost.js
const BlogPost = ({ post, relatedPosts }) => {
  const [comments, setComments] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const loadComments = async () => {
    setLoading(true);
    const fetchedComments = await fetch(`/api/posts/${post.id}/comments`);
    setComments(await fetchedComments.json());
    setLoading(false);
  };

  return (
    <article className="blog-post">
      <header>
        <h1>{post.title}</h1>
        <time dateTime={post.publishedAt}>
          {new Date(post.publishedAt).toLocaleDateString()}
        </time>
        <div className="author">By {post.author.name}</div>
      </header>

      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <aside className="related-posts">
        <h2>Related Posts</h2>
        {relatedPosts.map((related) => (
          <a key={related.id} href={`/blog/${related.slug}`}>
            <h3>{related.title}</h3>
            <p>{related.excerpt}</p>
          </a>
        ))}
      </aside>

      <section className="comments">
        <h2>Comments</h2>
        <button onClick={loadComments} disabled={loading}>
          {loading ? 'Loading...' : 'Load Comments'}
        </button>

        {comments.map((comment) => (
          <div key={comment.id} className="comment">
            <strong>{comment.author}</strong>
            <p>{comment.content}</p>
            <time>{new Date(comment.createdAt).toLocaleDateString()}</time>
          </div>
        ))}
      </section>
    </article>
  );
};
```

### Example 3: Dashboard with Real-time Data

```javascript
// Dashboard.js
const Dashboard = ({ initialMetrics, userRole }) => {
  const [metrics, setMetrics] = React.useState(initialMetrics);
  const [lastUpdate, setLastUpdate] = React.useState(new Date());

  React.useEffect(() => {
    const interval = setInterval(async () => {
      if (userRole === 'admin') {
        const updatedMetrics = await fetch('/api/metrics').then((r) =>
          r.json()
        );
        setMetrics(updatedMetrics);
        setLastUpdate(new Date());
      }
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, [userRole]);

  return (
    <div className="dashboard">
      <header>
        <h1>Analytics Dashboard</h1>
        <p>Last updated: {lastUpdate.toLocaleTimeString()}</p>
      </header>

      <div className="metrics-grid">
        <MetricCard
          title="Total Users"
          value={metrics.totalUsers}
          change={metrics.userGrowth}
        />
        <MetricCard
          title="Revenue"
          value={`$${metrics.revenue.toLocaleString()}`}
          change={metrics.revenueGrowth}
        />
        <MetricCard
          title="Active Sessions"
          value={metrics.activeSessions}
          change={metrics.sessionGrowth}
        />
      </div>

      {userRole === 'admin' && (
        <div className="admin-section">
          <h2>Admin Controls</h2>
          <button>Export Data</button>
          <button>Generate Report</button>
        </div>
      )}
    </div>
  );
};

const MetricCard = ({ title, value, change }) => (
  <div className="metric-card">
    <h3>{title}</h3>
    <p className="value">{value}</p>
    <span className={`change ${change >= 0 ? 'positive' : 'negative'}`}>
      {change >= 0 ? '+' : ''}
      {change}%
    </span>
  </div>
);
```

This comprehensive guide covers all aspects of React Server-Side Rendering, from
basic concepts to advanced implementation patterns. Each section builds upon the
previous one, providing a structured learning path for understanding and
implementing SSR in React applications.

**[⬆ Back to Top](#table-of-contents)**
