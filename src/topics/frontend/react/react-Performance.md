# React Performance Optimization - Complete Guide

## Table of Contents

1. [Introduction](#introduction)
2. [React.memo()](<#react.memo()>)
3. [useMemo Hook](#usememo-hook)
4. [useCallback Hook](#usecallback-hook)
5. [Code Splitting with React.lazy()](<#code-splitting-with-react.lazy()>)
6. [Virtual Scrolling](#virtual-scrolling)
7. [Bundle Analysis](#bundle-analysis)
8. [Image Optimization](#image-optimization)
9. [State Management Optimization](#state-management-optimization)
10. [Avoiding Unnecessary Re-renders](#avoiding-unnecessary-re-renders)
11. [Performance Monitoring Tools](#performance-monitoring-tools)
12. [Best Practices Summary](#best-practices-summary)

---

## Introduction

React Performance Optimization involves techniques and strategies to improve the
speed, responsiveness, and efficiency of React applications. The goal is to
minimize unnecessary re-renders, reduce bundle sizes, and optimize resource
loading to provide a smooth user experience.

### Key Performance Metrics

- **First Contentful Paint (FCP)**: Time until first content appears
- **Largest Contentful Paint (LCP)**: Time until main content loads
- **Time to Interactive (TTI)**: Time until page becomes interactive
- **Cumulative Layout Shift (CLS)**: Visual stability measure

---

## React.memo()

### Definition

React.memo is a higher-order component that memoizes the result of a component.
It only re-renders when its props change, preventing unnecessary re-renders when
parent components update.

### Syntax

```javascript
const MemoizedComponent = React.memo(Component, areEqual?)
```

### Parameters

- `Component`: The component to memoize
- `areEqual` (optional): Custom comparison function

### Usage

Use React.memo for:

- Components that render often with the same props
- Expensive components that don't need frequent updates
- Child components in lists or grids

### Examples

#### Basic React.memo

```javascript
import React from 'react';

// Without React.memo - re-renders on every parent update
const ExpensiveComponent = ({ name, age }) => {
  console.log('ExpensiveComponent rendered');
  return (
    <div>
      <h3>{name}</h3>
      <p>Age: {age}</p>
    </div>
  );
};

// With React.memo - only re-renders when props change
const MemoizedExpensiveComponent = React.memo(({ name, age }) => {
  console.log('MemoizedExpensiveComponent rendered');
  return (
    <div>
      <h3>{name}</h3>
      <p>Age: {age}</p>
    </div>
  );
});

// Parent component
const App = () => {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({ name: 'John', age: 25 });

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      <ExpensiveComponent name={user.name} age={user.age} />
      <MemoizedExpensiveComponent name={user.name} age={user.age} />
    </div>
  );
};
```

#### React.memo with Custom Comparison

```javascript
const UserCard = React.memo(
  ({ user, theme }) => {
    return (
      <div className={`card ${theme}`}>
        <h3>{user.name}</h3>
        <p>{user.email}</p>
      </div>
    );
  },
  (prevProps, nextProps) => {
    // Custom comparison - only re-render if user data or theme changes
    return (
      prevProps.user.id === nextProps.user.id &&
      prevProps.theme === nextProps.theme
    );
  }
);
```

---

## useMemo Hook

### Definition

useMemo is a React Hook that memoizes expensive calculations between re-renders.
It only recalculates when its dependencies change.

### Syntax

```javascript
const memoizedValue = useMemo(() => expensiveCalculation(a, b), [a, b]);
```

### Parameters

- `calculateValue`: Function that returns the value to memoize
- `dependencies`: Array of dependencies that trigger recalculation

### Usage

Use useMemo for:

- Expensive calculations or data transformations
- Creating objects or arrays that are passed as props
- Filtering or sorting large datasets

### Examples

#### Basic useMemo

```javascript
import React, { useMemo, useState } from 'react';

const ExpensiveCalculationComponent = ({ items, filter }) => {
  // Without useMemo - calculation runs on every render
  const expensiveValue = items
    .filter((item) => item.category === filter)
    .reduce((sum, item) => sum + item.price, 0);

  // With useMemo - calculation only runs when items or filter change
  const memoizedExpensiveValue = useMemo(() => {
    console.log('Calculating expensive value...');
    return items
      .filter((item) => item.category === filter)
      .reduce((sum, item) => sum + item.price, 0);
  }, [items, filter]);

  return (
    <div>
      <p>Total Value: ${memoizedExpensiveValue}</p>
    </div>
  );
};
```

#### useMemo for Object Creation

```javascript
const UserProfile = ({ userId, userData }) => {
  // Without useMemo - new object created on every render
  const userStats = {
    totalPosts: userData.posts?.length || 0,
    totalLikes: userData.posts?.reduce((sum, post) => sum + post.likes, 0) || 0,
    joinDate: new Date(userData.createdAt).toLocaleDateString(),
  };

  // With useMemo - object only recreated when userData changes
  const memoizedUserStats = useMemo(() => {
    return {
      totalPosts: userData.posts?.length || 0,
      totalLikes:
        userData.posts?.reduce((sum, post) => sum + post.likes, 0) || 0,
      joinDate: new Date(userData.createdAt).toLocaleDateString(),
    };
  }, [userData]);

  return (
    <div>
      <h2>User Statistics</h2>
      <p>Posts: {memoizedUserStats.totalPosts}</p>
      <p>Likes: {memoizedUserStats.totalLikes}</p>
      <p>Joined: {memoizedUserStats.joinDate}</p>
    </div>
  );
};
```

---

## useCallback Hook

### Definition

useCallback is a React Hook that memoizes callback functions between re-renders.
It returns the same function instance when dependencies haven't changed.

### Syntax

```javascript
const memoizedCallback = useCallback(() => {
  // callback logic
}, [dependencies]);
```

### Parameters

- `fn`: The callback function to memoize
- `dependencies`: Array of dependencies that trigger function recreation

### Usage

Use useCallback for:

- Functions passed as props to memoized components
- Event handlers in child components
- Functions used as dependencies in other hooks

### Examples

#### Basic useCallback

```javascript
import React, { useCallback, useState } from 'react';

const TodoItem = React.memo(({ todo, onToggle, onDelete }) => {
  console.log(`TodoItem ${todo.id} rendered`);
  return (
    <div>
      <span
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
      >
        {todo.text}
      </span>
      <button onClick={() => onToggle(todo.id)}>Toggle</button>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  );
});

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build an app', completed: false },
  ]);

  // Without useCallback - new function created on every render
  const handleToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // With useCallback - function only recreated when todos change
  const memoizedHandleToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      );
    },
    [todos]
  );

  const memoizedHandleDelete = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos]
  );

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={memoizedHandleToggle}
          onDelete={memoizedHandleDelete}
        />
      ))}
    </div>
  );
};
```

#### useCallback with Custom Hooks

```javascript
const useSearch = (initialQuery = '') => {
  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const search = useCallback(async (searchTerm) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/search?q=${searchTerm}`);
      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error('Search failed:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  const debouncedSearch = useCallback(debounce(search, 300), [search]);

  return { query, setQuery, results, loading, search: debouncedSearch };
};
```

---

## Code Splitting with React.lazy()

### Definition

Code splitting is a technique that splits your bundle into smaller chunks,
loading only the necessary code for the current view. React.lazy() enables
dynamic imports for components.

### Syntax

```javascript
const LazyComponent = React.lazy(() => import('./Component'));
```

### Usage

Use code splitting for:

- Route-based splitting
- Large components or libraries
- Features that aren't immediately needed

### Examples

#### Route-based Code Splitting

```javascript
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Lazy load components
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));

const LoadingSpinner = () => (
  <div className="loading-spinner">
    <div>Loading...</div>
  </div>
);

const App = () => {
  return (
    <Router>
      <div className="app">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/dashboard">Dashboard</Link>
        </nav>

        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
};
```

#### Component-based Code Splitting

```javascript
import React, { useState, Suspense } from 'react';

const HeavyChart = React.lazy(() => import('./HeavyChart'));
const HeavyDataTable = React.lazy(() => import('./HeavyDataTable'));

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="dashboard">
      <div className="tabs">
        <button
          onClick={() => setActiveTab('overview')}
          className={activeTab === 'overview' ? 'active' : ''}
        >
          Overview
        </button>
        <button
          onClick={() => setActiveTab('charts')}
          className={activeTab === 'charts' ? 'active' : ''}
        >
          Charts
        </button>
        <button
          onClick={() => setActiveTab('data')}
          className={activeTab === 'data' ? 'active' : ''}
        >
          Data
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'overview' && (
          <div>
            <h2>Dashboard Overview</h2>
            <p>Quick statistics and summary...</p>
          </div>
        )}

        {activeTab === 'charts' && (
          <Suspense fallback={<div>Loading charts...</div>}>
            <HeavyChart />
          </Suspense>
        )}

        {activeTab === 'data' && (
          <Suspense fallback={<div>Loading data table...</div>}>
            <HeavyDataTable />
          </Suspense>
        )}
      </div>
    </div>
  );
};
```

---

## Virtual Scrolling

### Definition

Virtual scrolling is a technique that renders only visible items in a large
list, significantly improving performance for large datasets by reducing DOM
nodes.

### Usage

Use virtual scrolling for:

- Lists with thousands of items
- Data tables with many rows
- Chat messages or feeds
- Image galleries with many items

### Examples

#### Basic Virtual Scrolling Implementation

```javascript
import React, { useState, useEffect, useRef } from 'react';

const VirtualList = ({ items, itemHeight = 50, containerHeight = 400 }) => {
  const [scrollTop, setScrollTop] = useState(0);
  const scrollElementRef = useRef();

  const startIndex = Math.floor(scrollTop / itemHeight);
  const endIndex = Math.min(
    startIndex + Math.ceil(containerHeight / itemHeight) + 1,
    items.length
  );

  const visibleItems = items.slice(startIndex, endIndex);

  const handleScroll = (e) => {
    setScrollTop(e.target.scrollTop);
  };

  return (
    <div
      ref={scrollElementRef}
      style={{
        height: containerHeight,
        overflow: 'auto',
        border: '1px solid #ccc',
      }}
      onScroll={handleScroll}
    >
      <div style={{ height: items.length * itemHeight, position: 'relative' }}>
        <div
          style={{
            transform: `translateY(${startIndex * itemHeight}px)`,
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
          }}
        >
          {visibleItems.map((item, index) => (
            <div
              key={startIndex + index}
              style={{
                height: itemHeight,
                padding: '10px',
                borderBottom: '1px solid #eee',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <strong>Item {startIndex + index}:</strong> {item.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Usage example
const App = () => {
  const [items] = useState(() =>
    Array.from({ length: 10000 }, (_, i) => ({
      id: i,
      name: `Item ${i}`,
      value: Math.random() * 100,
    }))
  );

  return (
    <div>
      <h1>Virtual Scrolling Demo</h1>
      <p>Rendering {items.length} items efficiently</p>
      <VirtualList items={items} />
    </div>
  );
};
```

#### Advanced Virtual Grid

```javascript
const VirtualGrid = ({
  items,
  itemWidth = 200,
  itemHeight = 150,
  containerWidth = 800,
  containerHeight = 600,
  gap = 10,
}) => {
  const [scrollTop, setScrollTop] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const itemsPerRow = Math.floor(containerWidth / (itemWidth + gap));
  const totalRows = Math.ceil(items.length / itemsPerRow);

  const startRow = Math.floor(scrollTop / (itemHeight + gap));
  const endRow = Math.min(
    startRow + Math.ceil(containerHeight / (itemHeight + gap)) + 1,
    totalRows
  );

  const visibleItems = [];
  for (let row = startRow; row < endRow; row++) {
    for (let col = 0; col < itemsPerRow; col++) {
      const index = row * itemsPerRow + col;
      if (index < items.length) {
        visibleItems.push({
          ...items[index],
          x: col * (itemWidth + gap),
          y: row * (itemHeight + gap),
          index,
        });
      }
    }
  }

  return (
    <div
      style={{
        width: containerWidth,
        height: containerHeight,
        overflow: 'auto',
        border: '1px solid #ccc',
      }}
      onScroll={(e) => {
        setScrollTop(e.target.scrollTop);
        setScrollLeft(e.target.scrollLeft);
      }}
    >
      <div
        style={{
          width: itemsPerRow * (itemWidth + gap),
          height: totalRows * (itemHeight + gap),
          position: 'relative',
        }}
      >
        {visibleItems.map((item) => (
          <div
            key={item.index}
            style={{
              position: 'absolute',
              left: item.x,
              top: item.y,
              width: itemWidth,
              height: itemHeight,
              backgroundColor: '#f0f0f0',
              border: '1px solid #ddd',
              borderRadius: '4px',
              padding: '10px',
              boxSizing: 'border-box',
            }}
          >
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
```

---

## Bundle Analysis

### Definition

Bundle analysis involves examining your application's JavaScript bundles to
identify optimization opportunities, unused code, and large dependencies.

### Tools

- **webpack-bundle-analyzer**: Visual analysis of webpack bundles
- **source-map-explorer**: Analyze bundles using source maps
- **bundlephobia**: Check npm package sizes

### Usage

Use bundle analysis to:

- Identify large dependencies
- Find unused code
- Optimize import strategies
- Monitor bundle size over time

### Examples

#### Setting up webpack-bundle-analyzer

```bash
# Install the analyzer
npm install --save-dev webpack-bundle-analyzer

# Add to package.json scripts
{
  "scripts": {
    "analyze": "npm run build && npx webpack-bundle-analyzer build/static/js/*.js"
  }
}

# Run analysis
npm run analyze
```

#### Tree Shaking Optimization

```javascript
// ❌ Bad - imports entire library
import _ from 'lodash';
import moment from 'moment';
import * as MaterialUI from '@material-ui/core';

const processData = (data) => {
  return _.uniqBy(data, 'id');
};

// ✅ Good - imports only what's needed
import { uniqBy } from 'lodash';
import { format } from 'date-fns';
import { Button, TextField } from '@material-ui/core';

const processData = (data) => {
  return uniqBy(data, 'id');
};
```

#### Dynamic Imports for Large Libraries

```javascript
// ❌ Bad - large library loaded upfront
import { Chart } from 'chart.js';

const Dashboard = () => {
  // Component code
};

// ✅ Good - load library only when needed
const Dashboard = () => {
  const [chartData, setChartData] = useState(null);
  const [Chart, setChart] = useState(null);

  const loadChart = async () => {
    if (!Chart) {
      const chartModule = await import('chart.js');
      setChart(chartModule.Chart);
    }
  };

  useEffect(() => {
    if (chartData) {
      loadChart();
    }
  }, [chartData]);

  return (
    <div>
      <button onClick={() => setChartData(mockData)}>Load Chart</button>
      {Chart && chartData && <ChartComponent Chart={Chart} data={chartData} />}
    </div>
  );
};
```

---

## Image Optimization

### Definition

Image optimization involves reducing image file sizes, implementing lazy
loading, and using appropriate formats to improve loading performance.

### Techniques

- **Lazy loading**: Load images when they're about to be visible
- **WebP format**: Modern image format with better compression
- **Responsive images**: Serve different sizes based on screen size
- **Image compression**: Reduce file size without significant quality loss

### Examples

#### Lazy Loading Images

```javascript
import React, { useState, useRef, useEffect } from 'react';

const LazyImage = ({ src, alt, placeholder, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imgRef} className={className}>
      {isInView && (
        <img
          src={src}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          style={{
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out',
          }}
        />
      )}
      {!isLoaded && isInView && (
        <div className="image-placeholder">{placeholder || 'Loading...'}</div>
      )}
    </div>
  );
};

// Progressive image loading
const ProgressiveImage = ({ src, placeholder, alt }) => {
  const [currentSrc, setCurrentSrc] = useState(placeholder);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setCurrentSrc(src);
      setLoading(false);
    };
    img.src = src;
  }, [src]);

  return (
    <img
      src={currentSrc}
      alt={alt}
      style={{
        filter: loading ? 'blur(5px)' : 'none',
        transition: 'filter 0.3s ease-in-out',
      }}
    />
  );
};
```

#### Responsive Image Component

```javascript
const ResponsiveImage = ({ src, alt, sizes = [400, 800, 1200], className }) => {
  const generateSrcSet = () => {
    return sizes.map((size) => `${src}?w=${size} ${size}w`).join(', ');
  };

  const generateSizes = () => {
    return [
      '(max-width: 480px) 400px',
      '(max-width: 768px) 800px',
      '1200px',
    ].join(', ');
  };

  return (
    <img
      src={src}
      srcSet={generateSrcSet()}
      sizes={generateSizes()}
      alt={alt}
      className={className}
      loading="lazy"
    />
  );
};
```

---

## State Management Optimization

### Definition

State management optimization involves structuring and managing state
efficiently to minimize unnecessary re-renders and improve application
performance.

### Techniques

- **State colocation**: Keep state close to where it's used
- **State normalization**: Flatten nested state structures
- **Selective subscriptions**: Subscribe only to needed state slices
- **State splitting**: Separate frequently changing state

### Examples

#### State Colocation

```javascript
// ❌ Bad - state lifted too high
const App = () => {
  const [userProfile, setUserProfile] = useState({});
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [notifications, setNotifications] = useState([]);

  return (
    <div>
      <Header notifications={notifications} />
      <UserProfile profile={userProfile} onUpdate={setUserProfile} />
      <PostsList
        posts={posts}
        comments={comments}
        onPostUpdate={setPosts}
        onCommentUpdate={setComments}
      />
    </div>
  );
};

// ✅ Good - state colocated
const App = () => {
  return (
    <div>
      <Header /> {/* Manages its own notifications */}
      <UserProfile /> {/* Manages its own profile state */}
      <PostsList /> {/* Manages its own posts and comments */}
    </div>
  );
};

const Header = () => {
  const [notifications, setNotifications] = useState([]);

  // Header-specific logic
  return <header>{/* ... */}</header>;
};
```

#### State Normalization

```javascript
// ❌ Bad - nested state structure
const [state, setState] = useState({
  posts: [
    {
      id: 1,
      title: 'Post 1',
      author: { id: 1, name: 'John' },
      comments: [{ id: 1, text: 'Comment 1', author: { id: 2, name: 'Jane' } }],
    },
  ],
});

// ✅ Good - normalized state structure
const [state, setState] = useState({
  posts: {
    byId: {
      1: { id: 1, title: 'Post 1', authorId: 1, commentIds: [1] },
    },
    allIds: [1],
  },
  users: {
    byId: {
      1: { id: 1, name: 'John' },
      2: { id: 2, name: 'Jane' },
    },
    allIds: [1, 2],
  },
  comments: {
    byId: {
      1: { id: 1, text: 'Comment 1', authorId: 2 },
    },
    allIds: [1],
  },
});

// Selectors for accessing normalized data
const getPost = (state, postId) => state.posts.byId[postId];
const getPostAuthor = (state, postId) => {
  const post = getPost(state, postId);
  return state.users.byId[post.authorId];
};
const getPostComments = (state, postId) => {
  const post = getPost(state, postId);
  return post.commentIds.map((id) => state.comments.byId[id]);
};
```

#### State Splitting for Performance

```javascript
// ❌ Bad - single state causing unnecessary re-renders
const Dashboard = () => {
  const [state, setState] = useState({
    user: { name: 'John', email: 'john@example.com' },
    posts: [],
    notifications: [],
    settings: { theme: 'dark', language: 'en' },
  });

  // Any state update re-renders entire component
  const updateNotifications = (newNotifications) => {
    setState((prev) => ({ ...prev, notifications: newNotifications }));
  };

  return (
    <div>
      <UserInfo user={state.user} />
      <PostsList posts={state.posts} />
      <NotificationBell notifications={state.notifications} />
      <Settings settings={state.settings} />
    </div>
  );
};

// ✅ Good - split state for targeted updates
const Dashboard = () => {
  const [user, setUser] = useState({ name: 'John', email: 'john@example.com' });
  const [posts, setPosts] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [settings, setSettings] = useState({ theme: 'dark', language: 'en' });

  return (
    <div>
      <UserInfo user={user} onUpdate={setUser} />
      <PostsList posts={posts} onUpdate={setPosts} />
      <NotificationBell
        notifications={notifications}
        onUpdate={setNotifications}
      />
      <Settings settings={settings} onUpdate={setSettings} />
    </div>
  );
};
```

---

## Avoiding Unnecessary Re-renders

### Definition

Preventing unnecessary re-renders involves identifying and eliminating renders
that don't result in actual DOM changes or user-visible updates.

### Common Causes

- Creating objects/arrays in render
- Passing new function references as props
- Unnecessary state updates
- Poor component structure

### Examples

#### Avoiding Object Creation in Render

```javascript
// ❌ Bad - new objects created on every render
const UserCard = ({ user }) => {
  const cardStyle = {
    padding: '16px',
    border: '1px solid #ccc',
    borderRadius: '8px',
  };

  const buttonProps = {
    type: 'button',
    className: 'btn-primary',
  };

  return (
    <div style={cardStyle}>
      <h3>{user.name}</h3>
      <button {...buttonProps}>Edit</button>
    </div>
  );
};

// ✅ Good - objects defined outside render
const cardStyle = {
  padding: '16px',
  border: '1px solid #ccc',
  borderRadius: '8px',
};

const buttonProps = {
  type: 'button',
  className: 'btn-primary',
};

const UserCard = ({ user }) => {
  return (
    <div style={cardStyle}>
      <h3>{user.name}</h3>
      <button {...buttonProps}>Edit</button>
    </div>
  );
};
```

#### Conditional Rendering Optimization

```javascript
// ❌ Bad - creates new array on every render
const TodoList = ({ todos, filter }) => {
  const filteredTodos = todos.filter((todo) => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'active') return !todo.completed;
    return true;
  });

  return (
    <ul>
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

// ✅ Good - memoized filtering
const TodoList = ({ todos, filter }) => {
  const filteredTodos = useMemo(() => {
    return todos.filter((todo) => {
      if (filter === 'completed') return todo.completed;
      if (filter === 'active') return !todo.completed;
      return true;
    });
  }, [todos, filter]);

  return (
    <ul>
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};
```

#### Optimizing Context Usage

```javascript
// ❌ Bad - entire context value recreated on every render
const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState('light');
  const [notifications, setNotifications] = useState([]);

  // New object created on every render
  const contextValue = {
    user,
    setUser,
    theme,
    setTheme,
    notifications,
    setNotifications,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

// ✅ Good - memoized context value
const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState('light');
  const [notifications, setNotifications] = useState([]);

  const contextValue = useMemo(
    () => ({
      user,
      setUser,
      theme,
      setTheme,
      notifications,
      setNotifications,
    }),
    [user, theme, notifications]
  );

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

// ✅ Even better - split contexts by update frequency
const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const value = useMemo(() => ({ user, setUser }), [user]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const value = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
```

---

## Performance Monitoring Tools

### Definition

Performance monitoring tools help identify performance bottlenecks, measure
rendering times, and track optimization improvements in React applications.

### Built-in React Tools

- **React DevTools Profiler**: Analyze component render times
- **React.StrictMode**: Detect side effects and unsafe practices
- **Performance API**: Measure custom metrics

### Third-party Tools

- **Lighthouse**: Overall performance auditing
- **Web Vitals**: Core web performance metrics
- **React Query DevTools**: API call optimization

### Examples

#### Using React DevTools Profiler

```javascript
// Wrap components to profile performance
import { Profiler } from 'react';

const onRenderCallback = (
  id,
  phase,
  actualDuration,
  baseDuration,
  startTime,
  commitTime
) => {
  console.log('Profiler:', {
    id,
    phase, // 'mount' or 'update'
    actualDuration, // Time spent rendering
    baseDuration, // Estimated time without memoization
    startTime,
    commitTime,
  });
};

const App = () => {
  return (
    <Profiler id="App" onRender={onRenderCallback}>
      <Header />
      <MainContent />
      <Footer />
    </Profiler>
  );
};

// Profile specific components
const ExpensiveComponent = () => {
  return (
    <Profiler id="ExpensiveComponent" onRender={onRenderCallback}>
      <div>{/* Expensive rendering logic */}</div>
    </Profiler>
  );
};
```

#### Custom Performance Monitoring

```javascript
// Performance monitoring hook
const usePerformanceMonitor = (componentName) => {
  const startTimeRef = useRef();

  useEffect(() => {
    startTimeRef.current = performance.now();

    return () => {
      const endTime = performance.now();
      const duration = endTime - startTimeRef.current;

      console.log(`${componentName} render time: ${duration.toFixed(2)}ms`);

      // Send to analytics service
      if (duration > 100) {
        analytics.track('slow_component_render', {
          component: componentName,
          duration,
        });
      }
    };
  });
};

// Usage in components
const SlowComponent = () => {
  usePerformanceMonitor('SlowComponent');

  return <div>{/* Component content */}</div>;
};
```

#### Web Vitals Monitoring

```javascript
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

// Monitor Core Web Vitals
const initializeWebVitals = () => {
  getCLS(console.log);
  getFID(console.log);
  getFCP(console.log);
  getLCP(console.log);
  getTTFB(console.log);
};

// Custom hook for monitoring
const useWebVitals = () => {
  useEffect(() => {
    const handleCLS = (metric) => {
      // Cumulative Layout Shift
      analytics.track('web_vital', {
        name: 'CLS',
        value: metric.value,
        rating:
          metric.value > 0.25
            ? 'poor'
            : metric.value > 0.1
            ? 'needs-improvement'
            : 'good',
      });
    };

    const handleLCP = (metric) => {
      // Largest Contentful Paint
      analytics.track('web_vital', {
        name: 'LCP',
        value: metric.value,
        rating:
          metric.value > 4000
            ? 'poor'
            : metric.value > 2500
            ? 'needs-improvement'
            : 'good',
      });
    };

    getCLS(handleCLS);
    getLCP(handleLCP);
  }, []);
};
```

---

## Best Practices Summary

### Performance Optimization Checklist

#### Component Optimization

- ✅ Use React.memo for expensive components
- ✅ Implement useMemo for expensive calculations
- ✅ Use useCallback for stable function references
- ✅ Avoid creating objects/arrays in render
- ✅ Colocate state close to where it's used

#### Bundle Optimization

- ✅ Implement code splitting with React.lazy
- ✅ Use dynamic imports for large libraries
- ✅ Enable tree shaking in build tools
- ✅ Analyze bundle size regularly
- ✅ Avoid importing entire libraries

#### Rendering Optimization

- ✅ Implement virtual scrolling for large lists
- ✅ Use proper key props in lists
- ✅ Avoid unnecessary re-renders
- ✅ Split components appropriately
- ✅ Use Suspense for loading states

#### Asset Optimization

- ✅ Implement image lazy loading
- ✅ Use responsive images
- ✅ Optimize image formats (WebP, AVIF)
- ✅ Compress images appropriately
- ✅ Use CDN for static assets

#### State Management

- ✅ Normalize complex state structures
- ✅ Split contexts by update frequency
- ✅ Avoid unnecessary state updates
- ✅ Use proper dependency arrays in hooks
- ✅ Implement efficient data structures

### Performance Anti-patterns to Avoid

```javascript
// ❌ Anti-patterns
const BadComponent = ({ items }) => {
  // Creating objects in render
  const style = { color: 'red' };

  // Expensive operation in render
  const expensiveValue = items.reduce((sum, item) => sum + item.value, 0);

  // New function on every render
  const handleClick = () => console.log('clicked');

  // Unnecessary state update
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(count); // Same value
  }, [count]);

  return (
    <div style={style}>
      {items.map((item, index) => (
        // Using index as key
        <div key={index} onClick={handleClick}>
          {item.name}
        </div>
      ))}
    </div>
  );
};

// ✅ Optimized version
const style = { color: 'red' };

const GoodComponent = ({ items }) => {
  const expensiveValue = useMemo(
    () => items.reduce((sum, item) => sum + item.value, 0),
    [items]
  );

  const handleClick = useCallback(() => console.log('clicked'), []);

  return (
    <div style={style}>
      <div>Total: {expensiveValue}</div>
      {items.map((item) => (
        <div key={item.id} onClick={handleClick}>
          {item.name}
        </div>
      ))}
    </div>
  );
};
```

### Monitoring and Measurement

```javascript
// Performance measurement utilities
const measureComponentPerformance = (WrappedComponent, componentName) => {
  return (props) => {
    const startTime = performance.now();

    useEffect(() => {
      const endTime = performance.now();
      console.log(`${componentName} render: ${endTime - startTime}ms`);
    });

    return <WrappedComponent {...props} />;
  };
};

// Bundle size monitoring
const reportBundleSize = () => {
  if ('navigator' in window && 'connection' in navigator) {
    const connection = navigator.connection;
    console.log('Network:', {
      effectiveType: connection.effectiveType,
      downlink: connection.downlink,
      rtt: connection.rtt,
    });
  }
};

// Memory usage monitoring
const monitorMemoryUsage = () => {
  if ('memory' in performance) {
    const memory = performance.memory;
    console.log('Memory:', {
      used: Math.round(memory.usedJSHeapSize / 1048576) + ' MB',
      total: Math.round(memory.totalJSHeapSize / 1048576) + ' MB',
      limit: Math.round(memory.jsHeapSizeLimit / 1048576) + ' MB',
    });
  }
};
```

### Conclusion

React performance optimization is an ongoing process that requires careful
analysis, measurement, and iterative improvement. The key is to identify
bottlenecks early, apply appropriate optimization techniques, and continuously
monitor performance metrics. Remember that premature optimization can be
counterproductive, so always measure before and after implementing optimizations
to ensure they provide meaningful benefits.

Focus on the most impactful optimizations first:

1. Eliminate unnecessary re-renders
2. Implement code splitting for large bundles
3. Optimize images and assets
4. Use virtual scrolling for large datasets
5. Monitor and measure performance regularly

By following these practices and using the techniques outlined in this guide,
you can build React applications that are fast, responsive, and provide
excellent user experiences across all devices and network conditions.

**[⬆ Back to Top](#table-of-contents)**
