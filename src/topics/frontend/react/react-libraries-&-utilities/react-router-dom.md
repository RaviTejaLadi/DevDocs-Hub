# **React Router DOM: A Complete Guide**

## Table of Contents

- [What is React Router DOM?](#what-is-react-router-dom?)
- [Key Advantages of React Router DOM](#key-advantages-of-react-router-dom)
- [Complete Setup in TSX](#complete-setup-in-tsx)
  - [Installation](#1.-installation)
  - [Basic Setup](#2.-basic-setup)
- [Different Use Cases](#different-use-cases)
  - [For Small Applications](#for-small-applications)
    - [Basic Routing](#1.-basic-routing)
    - [URL Parameters](#2.-url-parameters)
  - [For Large Applications](#for-large-applications)
    - [Route Configuration File](#1.-route-configuration-file)
    - [Lazy Loading with Code Splitting](#2.-lazy-loading-with-code-splitting)
    - [Nested Routes with Layouts](#3.-nested-routes-with-layouts)
    - [Protected Routes (Authentication)](<#4.-protected-routes-(authentication)>)
- [Advanced Features](#advanced-features)
  - [Programmatic Navigation](#1.-programmatic-navigation)
  - [Query Parameters](#2.-query-parameters)
  - [Route Loaders (Data Fetching)](<#3.-route-loaders-(data-fetching)>)
- [Best Practices](#best-practices)
- [Example: Complete Small App Structure](#example:-complete-small-app-structure)

## What is React Router DOM?

React Router DOM is the most popular routing library for React applications. It
enables navigation between views (components) in a React application, allows the
browser URL to be changed, and keeps the UI in sync with the URL.

## Key Advantages of React Router DOM

1. **Declarative routing**: Define routes in a declarative way similar to React
   components
2. **Dynamic routing**: Routes can be loaded dynamically based on the app's
   needs
3. **Nested routes**: Supports complex nested route structures
4. **Navigation**: Provides easy-to-use navigation components
5. **URL parameters**: Supports URL parameters and query strings
6. **Code splitting**: Works well with lazy loading and code splitting
7. **History management**: Handles browser history seamlessly

## Complete Setup in TSX

### 1. Installation

First, install the package:

```bash
npm install react-router-dom
# or
yarn add react-router-dom
```

### 2. Basic Setup

```tsx
// main.tsx or App.tsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Import your components
import Home from './pages/Home';
import About from './pages/About';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'about',
    element: <About />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
```

## Different Use Cases

### For Small Applications

#### 1. Basic Routing

```tsx
// App.tsx
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
```

#### 2. URL Parameters

```tsx
// App.tsx
<Routes>
  <Route path="/users/:userId" element={<UserProfile />} />
</Routes>;

// UserProfile.tsx
import { useParams } from 'react-router-dom';

function UserProfile() {
  const { userId } = useParams<{ userId: string }>();
  return <div>User ID: {userId}</div>;
}
```

### For Large Applications

#### 1. Route Configuration File

```tsx
// routes.tsx
import { RouteObject } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import UserProfile from './pages/UserProfile';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/users/:userId',
    element: <UserProfile />,
  },
];

export default routes;

// App.tsx
import { useRoutes } from 'react-router-dom';
import routes from './routes';

function App() {
  const routing = useRoutes(routes);
  return routing;
}
```

#### 2. Lazy Loading with Code Splitting

```tsx
// routes.tsx
import { lazy, Suspense } from 'react';
import { RouteObject } from 'react-router-dom';
import LoadingSpinner from './components/LoadingSpinner';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <Home />
      </Suspense>
    ),
  },
  {
    path: '/about',
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <About />
      </Suspense>
    ),
  },
];
```

#### 3. Nested Routes with Layouts

```tsx
// routes.tsx
const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />, // Layout component
    children: [
      { index: true, element: <Dashboard /> },
      { path: 'profile', element: <Profile /> },
      { path: 'settings', element: <Settings /> },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
    ],
  },
];
```

#### 4. Protected Routes (Authentication)

```tsx
// ProtectedRoute.tsx
import { Navigate, Outlet } from 'react-router-dom';

interface ProtectedRouteProps {
  isAllowed: boolean;
  redirectPath?: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  isAllowed,
  redirectPath = '/login',
}) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;

// routes.tsx
const routes: RouteObject[] = [
  {
    path: '/',
    element: <ProtectedRoute isAllowed={userIsLoggedIn} />,
    children: [
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'profile', element: <Profile /> },
    ],
  },
];
```

## Advanced Features

### 1. Programmatic Navigation

```tsx
import { useNavigate } from 'react-router-dom';

function LoginButton() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform login logic
    navigate('/dashboard', { replace: true });
  };

  return <button onClick={handleLogin}>Login</button>;
}
```

### 2. Query Parameters

```tsx
import { useSearchParams } from 'react-router-dom';

function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');

  return <div>Search results for: {query}</div>;
}
```

### 3. Route Loaders (Data Fetching)

```tsx
// routes.tsx
const router = createBrowserRouter([
  {
    path: '/users/:userId',
    element: <UserProfile />,
    loader: async ({ params }) => {
      return fetch(`/api/users/${params.userId}`);
    },
    errorElement: <ErrorBoundary />,
  },
]);

// UserProfile.tsx
import { useLoaderData } from 'react-router-dom';

function UserProfile() {
  const userData = useLoaderData() as User;
  return <div>{userData.name}</div>;
}
```

## Best Practices

1. **Organize routes**: Keep route configurations separate from components
2. **Use lazy loading**: For better performance in large apps
3. **Implement error boundaries**: Provide good error handling
4. **Use TypeScript**: For type safety in route parameters and loader data
5. **Centralize route paths**: Define route paths as constants to avoid typos
6. **Protect sensitive routes**: Implement authentication checks
7. **Use nested routes**: For better layout management

## Example: Complete Small App Structure

```bash
/src
  /components
  /pages
    Home.tsx
    About.tsx
    NotFound.tsx
  /routes
    index.tsx
  App.tsx
  main.tsx
```

```tsx
// /src/routes/index.tsx
import { RouteObject } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import NotFound from '../pages/NotFound';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: '/about',
    element: <About />,
  },
];

export default routes;

// /src/main.tsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from './routes';

const router = createBrowserRouter(routes);

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
```

React Router DOM provides a flexible and powerful way to handle routing in React
applications, from small single-page apps to large enterprise applications with
complex routing needs.

**[⬆ Back to Top](#table-of-contents)**
