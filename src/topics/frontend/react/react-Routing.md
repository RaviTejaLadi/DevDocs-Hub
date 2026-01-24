# React Router: Comprehensive Guide

React Router is the standard routing library for React applications, enabling
navigation between different components while maintaining a single-page
application (SPA) architecture.

## Table of Contents

1. [Core Concepts](#core-concepts)
2. [Installation](#installation)
3. [Basic Routing](#basic-routing)
4. [Route Parameters](#route-parameters)
5. [Nested Routes](#nested-routes)
6. [Navigation](#navigation)
7. [Programmatic Navigation](#programmatic-navigation)
8. [Protected Routes](#protected-routes)
9. [404 Handling](#404-handling)
10. [Advanced Features](#advanced-features)

---

## Core Concepts

### 1. Router

The top-level component that wraps your entire application and enables routing
functionality.

**Types:**

- `BrowserRouter`: Uses HTML5 history API (recommended for most apps)
- `HashRouter`: Uses URL hash (good for static sites)
- `MemoryRouter`: Keeps history in memory (useful for testing)

### 2. Routes

A container for Route components that determines which component to render based
on the current URL.

### 3. Route

Defines a mapping between a URL path and a React component.

### 4. Link

A component for creating navigation links that don't trigger page reloads.

---

## Installation

```bash
npm install react-router-dom
# or
yarn add react-router-dom
```

---

## Basic Routing

### Syntax

```jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
```

### Explanation

- `Router`: Wraps the entire application
- `Routes`: Container for all Route definitions
- `Route`: Maps a path to a component
  - `path`: URL path to match
  - `element`: Component to render when path matches

---

## Route Parameters

### Dynamic Segments

Extract values from the URL.

#### Syntax

```jsx
<Route path="/users/:userId" element={<UserProfile />} />
```

#### Accessing Parameters

```jsx
import { useParams } from 'react-router-dom';

function UserProfile() {
  const { userId } = useParams();
  return <div>User ID: {userId}</div>;
}
```

### Optional Parameters

```jsx
<Route path="/products/:category?/:id?" element={<Products />} />
```

---

## Nested Routes

### Parent Route Setup

```jsx
<Route path="/dashboard" element={<Dashboard />}>
  <Route path="profile" element={<Profile />} />
  <Route path="settings" element={<Settings />} />
</Route>
```

### Outlet Component

Parent component must render an `<Outlet />` where nested routes should appear.

```jsx
import { Outlet } from 'react-router-dom';

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <nav>{/* Navigation links */}</nav>
      <Outlet /> {/* Nested routes render here */}
    </div>
  );
}
```

---

## Navigation

### Link Component

Creates navigation links that don't reload the page.

```jsx
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}
```

### NavLink Component

Special Link that adds styling attributes when active.

```jsx
<NavLink
  to="/about"
  style={({ isActive }) => ({ color: isActive ? 'red' : 'blue' })}
>
  About
</NavLink>
```

---

## Programmatic Navigation

### useNavigate Hook

```jsx
import { useNavigate } from 'react-router-dom';

function LoginButton() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform login logic
    navigate('/dashboard');
  };

  return <button onClick={handleLogin}>Login</button>;
}
```

### Navigation Options

```jsx
// Navigate with state
navigate('/dashboard', { state: { from: 'login' } });

// Replace current entry in history
navigate('/dashboard', { replace: true });

// Go back
navigate(-1);
```

---

## Protected Routes

### Authentication Wrapper

```jsx
function PrivateRoute({ children }) {
  const { user } = useAuth(); // Your authentication logic
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
```

### Usage

```jsx
<Route
  path="/dashboard"
  element={
    <PrivateRoute>
      <Dashboard />
    </PrivateRoute>
  }
/>
```

---

## 404 Handling

### Catch-all Route

```jsx
<Route path="*" element={<NotFound />} />
```

### Example Component

```jsx
function NotFound() {
  return (
    <div>
      <h1>404 - Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/">Go Home</Link>
    </div>
  );
}
```

---

## Advanced Features

### Lazy Loading with React.lazy

```jsx
const About = React.lazy(() => import('./About'));

<Route
  path="/about"
  element={
    <React.Suspense fallback={<div>Loading...</div>}>
      <About />
    </React.Suspense>
  }
/>;
```

### Location State

```jsx
// Sending state
<Link to="/dashboard" state={{ from: 'home' }}>
  Dashboard
</Link>;

// Accessing state
const location = useLocation();
console.log(location.state.from); // 'home'
```

### Query Parameters

```jsx
import { useSearchParams } from 'react-router-dom';

function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');

  return <div>Search Query: {query}</div>;
}

// URL: /search?q=react
```

---

## Complete Example

```jsx
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
  useNavigate,
  Outlet,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users">Users</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/users" element={<UsersLayout />}>
          <Route index element={<UserList />} />
          <Route path=":userId" element={<UserProfile />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Us</h1>;
}

function UsersLayout() {
  return (
    <div>
      <h2>Users</h2>
      <Outlet />
    </div>
  );
}

function UserList() {
  const users = ['alice', 'bob', 'charlie'];
  const navigate = useNavigate();

  return (
    <ul>
      {users.map((user) => (
        <li key={user}>
          <button onClick={() => navigate(`/users/${user}`)}>{user}</button>
        </li>
      ))}
    </ul>
  );
}

function UserProfile() {
  const { userId } = useParams();
  return <h3>Profile: {userId}</h3>;
}

function NotFound() {
  return <h1>404 - Page Not Found</h1>;
}
```

This comprehensive guide covers all the essential aspects of React Router with
clear definitions, syntax examples, and practical usage patterns.
