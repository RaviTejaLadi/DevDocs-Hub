# Top 20 ReactJS Interview Questions

## Question 1. What Are Portals in React?

Portals allow you to render a child component into a different part of the DOM
that's outside the main parent hierarchy.

This is especially helpful when you're dealing with modals, tooltips, dropdowns,
or any element that needs to visually escape its parent container due to z-index
or overflow issues.

**Example:**

```javascript
import ReactDOM from 'react-dom';

const Modal = () => {
  return ReactDOM.createPortal(
    // This is the JSX that will be rendered outside the
    // parent component hierarchy
    <div className="modal">This is rendered using a portal</div>,

    // This is the DOM node where the portal content will be injected
    document.getElementById('portal-root')
  );
};
```

In your `index.html` file, you should have:

```html
<div id="root"></div>
<div id="portal-root"></div>
```

By rendering to a separate DOM node, you avoid layout issues caused by nesting
inside other components.

## Question 2. How to implement infinite Scroll in ReactJS?

Infinite scroll is a UI pattern where more content loads as the user reaches the
bottom of the page, instead of using pagination. This makes for a smoother user
experience, especially when displaying long data lists.

Here's how you can implement it using the IntersectionObserver API:

```javascript
import { useEffect, useRef, useState } from 'react';

function InfiniteScroll() {
  // Initialize 20 dummy items (0 to 19)
  const [items, setItems] = useState([...Array(20).keys()]);

  // Ref to track the loader element (used to detect scroll end)
  const loaderRef = useRef(null);

  // Function to load more items
  const loadMore = () => {
    // Generate 10 new items based on current length
    const newItems = Array.from({ length: 10 }, (_, i) => i + items.length);
    // Append new items to the existing list
    setItems((prev) => [...prev, ...newItems]);
  };

  useEffect(() => {
    // Create an IntersectionObserver to detect when loader is visible
    const observer = new IntersectionObserver((entries) => {
      // If loader div is in the viewport, trigger loadMore
      if (entries[0].isIntersecting) {
        loadMore();
      }
    });

    // Get the loader DOM element
    const loader = loaderRef.current;
    if (loader) observer.observe(loader); // Start observing loader

    // Cleanup: unobserve the loader when component updates/unmounts
    return () => loader && observer.unobserve(loader);
  }, [items]); // Re-run effect when items change

  return (
    <>
      {/* Render each item in the list */}
      {items.map((item) => (
        <div key={item}>Item #{item}</div>
      ))}

      {/* This div is the trigger for infinite scrolling */}
      <div ref={loaderRef}>Loading more...</div>
    </>
  );
}
```

This approach allows you to load more data only when needed, reducing the number
of items rendered simultaneously and improving performance.

## Question 3. How to Add Event Listeners Programmatically in React?

Although React uses a system called synthetic events to handle most
interactions, there are cases where you may need to work directly with the
native DOM API — for example, when handling scroll events on the window object
or custom listeners on third-party components.

Here's how you can do that using the useEffect hook.

**Example: Attaching a Scroll Event to the Window**

```javascript
import { useEffect } from 'react';

function ScrollComponent() {
  useEffect(() => {
    const handleScroll = () => {
      console.log('User is scrolling');
    };

    // Attach event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up to prevent memory leaks
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <div>Scroll the page to see the console log in action.</div>;
}
```

### Why the Cleanup Is Important?

In React, especially with functional components and hooks, failing to remove
event listeners can lead to memory leaks or duplicate handlers. The cleanup
function returned inside useEffect ensures that the event is properly removed
when the component is unmounted or re-rendered.

## Question 4. How React Works with the Virtual DOM?

The virtual DOM is a lightweight copy of the actual DOM. When your component's
state or props change, React creates a new virtual DOM tree and compares it with
the previous one.

Instead of immediately making changes to the real DOM, React first determines
what has changed by comparing the old and new virtual DOMs. Only the necessary
updates are then applied to the real DOM.

This process is much faster than direct manipulation because updating the real
DOM is expensive. By minimizing DOM mutations, React significantly improves
performance.

## Question 5. What Is the Diffing or Reconciliation Algorithm?

When state or props change, React performs a process called reconciliation,
where it compares the previous virtual DOM with the new one to determine what
has changed.

### How It Works:

1. **Element Type Comparison:** If elements are of different types (div vs
   span), React tears down the old element and builds a new one from scratch.

2. **Same Type Optimization:** If elements are of the same type, React compares
   their attributes and recursively updates only what's changed.

3. **List Rendering with Keys:** React relies on keys to keep track of items in
   lists. When you update a list without keys, React may unnecessarily re-render
   or remove elements. With keys, React can identify items accurately and reuse
   existing DOM elements.

**Example:**

```javascript
// An array of fruit names
const fruits = ['Apple', 'Banana', 'Mango'];

return (
  <ul>
    {/* Loop through each fruit and render it as a list item */}
    {fruits.map((fruit) => (
      // Use the fruit name as a unique key (safe here
      // because values are unique and static)
      <li key={fruit}>{fruit}</li>
    ))}
  </ul>
);
```

In this example, using the key prop ensures React can track each list item
correctly during re-renders.

---

## Question 6. What is React Fiber, and how does rendering work?

React Fiber is the internal engine that powers React's rendering process.
Introduced in React 16, Fiber replaced the old stack-based architecture and
introduced a more flexible system for rendering and reconciliation.

It allows React to break rendering work into units and prioritize them, which is
especially helpful for keeping applications responsive during large updates.

The rendering process in React has two main phases: the render phase and the
commit phase. During the render phase, React builds a virtual representation of
the UI and determines what changes are needed. This phase is pure and can be
paused or interrupted.

In the commit phase, React applies those changes to the actual DOM and runs
lifecycle methods or useEffect hooks. This design makes React more efficient and
able to handle complex user interactions smoothly.

**Summary of the above is:**

**Rendering in React (with Fiber):**

- **Render Phase (Pure/No side effects):** React builds a work-in-progress tree
  by comparing the old and new virtual DOMs.
- **Commit Phase:** Changes are committed to the real DOM — here React updates
  the browser DOM, runs useEffect, etc.

## Question 7. Why is Client-Side Rendering (CSR) sometimes better than Server-Side Rendering (SSR)?

Client-side rendering means the JavaScript bundle is loaded in the browser and
then it renders the content dynamically. This approach often results in a
smoother and more interactive user experience after the initial load. Once the
JavaScript is loaded, navigation between pages feels faster because the browser
doesn't need to fetch a new HTML page from the server.

CSR is generally better for applications that rely heavily on interactivity or
personalized data, such as dashboards, internal tools, or SPAs (Single Page
Applications).

It also reduces the server's workload since most of the rendering is done in the
browser. While the initial load might be slower compared to SSR, caching, lazy
loading, and prefetching can help offset that drawback.

**Advantages over SSR:**

- Lighter server load.
- Better caching at CDN level (JS/CSS).
- Rich interactivity & faster transitions between routes after initial load.
- No need to wait for server response on each navigation.

**When is CSR better?**

- Internal tools, dashboards
- Authenticated user flows
- Apps where SEO isn't a concern

## Question 8. How does SSR work, what are its advantages, and what is hydration?

Server-side rendering (SSR) involves generating HTML content on the server and
sending it to the browser. When a user visits a page, the server processes the
React components, renders them into HTML, and sends that HTML to the client.
This allows the browser to display the content immediately, which is great for
performance and SEO.

After the HTML is displayed, React still needs to take over the page to make it
interactive. This is where hydration comes in. Hydration is the process of
attaching event listeners and other dynamic behavior to the static HTML. Until
hydration completes, certain features like buttons or form inputs may not work
properly.

SSR is especially beneficial for pages that need to be indexed by search engines
or show content quickly, such as landing pages, blogs, or e-commerce product
pages.

**Advantages of SSR:**

- Faster initial load (TTFB is good).
- Better for SEO (content is crawled immediately).
- Great for public marketing pages, e-commerce, and blogs.

## Question 9. What are the different ways to optimize a React application (client-side and SSR)?

On the client side, optimization techniques include code splitting using
React.lazy and Suspense, memoization using React.memo, useMemo, or useCallback,
and rendering optimization using virtualization libraries like react-window.

Avoiding unnecessary re-renders, debouncing expensive computations or input
events, and using efficient state management practices also help a lot.

For SSR-based applications, performance can be improved by caching rendered HTML
at the server or CDN level, reducing payload sizes, and using streaming SSR to
progressively send parts of the UI.

Optimizing data fetching (e.g., batching or parallel requests) and minimizing
server-side blocking operations are also important.

Both approaches benefit from analyzing performance with tools like React
DevTools, Chrome Lighthouse, and Web Vitals to catch bottlenecks and
regressions.

## Question 10. Give a real-life example of OOP (Object-Oriented Programming) in a React application.

A practical example of OOP in a React app could be a form builder system where
different input fields are modeled as classes. You might have a base class like
FormField and then extend it with specialized classes like TextInput, Checkbox,
or RadioButton. Each of these classes could have its render() method that
returns the appropriate JSX.

For instance, a TextInput class might render an input box with a placeholder,
while another Checkbox class renders a checkbox with a label. These classes
encapsulate their behavior and render logic, use inheritance to extend common
functionality, and demonstrate polymorphism by overriding the render() method.
This allows for reusable, scalable field generation in complex forms.

Using OOP principles like this can make code more organized and easier to
maintain, especially when dealing with a large number of dynamic components or
when building extensible UI systems.

## Question 11. What is theDifference Between `useMemo()` and `useCallback()`

**Both are performance optimization hooks, but they optimize different things:**

| Feature      | `useMemo`                  | `useCallback`                                |
| ------------ | -------------------------- | -------------------------------------------- |
| **Purpose**  | Memoizes a computed value  | Memoizes a function reference                |
| **Returns**  | The result of the function | The function itself                          |
| **Use Case** | Expensive calculations     | Passing stable callbacks to child components |

```javascript
// useMemo example
const sortedList = useMemo(() => {
  return largeList.sort((a, b) => a.value - b.value);
}, [largeList]);

// useCallback example
const handleClick = useCallback(() => {
  console.log('Clicked item:', itemId);
}, [itemId]);
```

## Question 12.What is `useRef()` and Its Use Cases

**A mutable container that persists across renders without causing re-renders:**

- **DOM Access:** Directly interact with DOM elements
- **Value Persistence:** Store mutable values that don't trigger updates
- **Previous Value Tracking:** Capture previous state/props

```javascript
function Timer() {
  const intervalRef = useRef(); // Stores interval ID
  const [count, setCount] = useState(0);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, []);

  return <div>Count: {count}</div>;
}
```

## Question 13. What are the React Performance Optimization Techniques?

### Core Optimization Strategies:

1. **Memoization**

   - `React.memo()` for components
   - `useMemo`/`useCallback` for values/functions

2. **Virtualization**

   - `react-window` or `react-virtualized` for large lists

3. **Code Splitting**

   - Route-based splitting with `React.lazy()`
   - Component-level splitting

4. **Bundle Optimization**
   - Tree shaking (remove unused code)
   - Minification/compression
   - Modern image formats (WebP, AVIF)

### Advanced Techniques:

```javascript
// Preloading components before they're needed
const Chat = React.lazy(() => import('./Chat'));

// Prefetching resources during idle time
<link rel="prefetch" href="chat-module.js" as="script">
```

## Question 14.What Are Higher-Order Components (HOC) in React?

**A function that takes a component and returns an enhanced component:**

```javascript
function withLogger(WrappedComponent) {
  return function (props) {
    useEffect(() => {
      console.log(`${WrappedComponent.name} mounted`);
      return () => console.log(`${WrappedComponent.name} unmounted`);
    }, []);

    return <WrappedComponent {...props} />;
  };
}

const EnhancedComponent = withLogger(MyComponent);
```

**Common HOC Use Cases:**

- Authentication/Authorization
- Logging/Analytics
- Data fetching
- Styling/theming

## Question 15.What is the Render Props Pattern in React?

**A technique for sharing code between components using a prop that's a
function:**

```javascript
function DataFetcher({ url, children }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, [url]);

  return children({ data, loading });
}

// Usage
<DataFetcher url="/api/user">
  {({ data, loading }) => (loading ? <Spinner /> : <Profile user={data} />)}
</DataFetcher>;
```

**Modern Alternatives:**

- Custom hooks often replace render props
- Context API for deep prop drilling scenarios

Here's a well-structured Q&A format for your React interview questions:

---

## Question 16. What are the alternatives to Prop Drilling?

Prop drilling occurs when passing data through multiple nested components,
leading to messy code. Alternatives include:

1. **Context API** – Best for global values (e.g., theme, user data):

   ```jsx
   const ThemeContext = React.createContext('light');

   function App() {
     return (
       <ThemeContext.Provider value="dark">
         <Dashboard />
       </ThemeContext.Provider>
     );
   }

   function Dashboard() {
     const theme = useContext(ThemeContext);
     return <div>Theme is {theme}</div>;
   }
   ```

2. **State Management Libraries** – Redux, Zustand, or Recoil for app-wide
   state.
3. **Higher-Order Components (HOCs)** – Wrap components to inject props.

---

## Question 17. What is `React.memo` and how does it work?

`React.memo` optimizes performance by memoizing a component. It prevents
re-renders if props are unchanged:

```jsx
const Greeting = React.memo(({ name }) => {
  console.log("Rendered only if 'name' changes!");
  return <p>Hello, {name}</p>;
});
```

- **Custom Comparison:**
  ```jsx
  React.memo(Component, (prevProps, nextProps) => {
    return prevProps.id === nextProps.id; // Re-render only if 'id' changes
  });
  ```

---

## Question 18. Explain `useImperativeHandle`, `useLayoutEffect`, and `useDebugValue`.

1. **`useImperativeHandle`** – Customizes ref behavior for parent components:

   ```jsx
   useImperativeHandle(ref, () => ({
     focusInput: () => inputRef.current.focus(),
   }));
   ```

2. **`useLayoutEffect`** – Runs synchronously after DOM mutations (use for
   layout measurements):

   ```jsx
   useLayoutEffect(() => {
     const height = ref.current.offsetHeight;
   }, []);
   ```

3. **`useDebugValue`** – Debugs custom hooks in React DevTools:
   ```jsx
   useDebugValue(value, (v) => `Formatted: ${v}`);
   ```

---

## Question 19. Differences between Class-based and Function-based Components?

| **Class Components**                          | **Function Components**      |
| --------------------------------------------- | ---------------------------- |
| Uses `this.state`/`setState`                  | Uses `useState`/`useReducer` |
| Lifecycle methods (`componentDidMount`, etc.) | `useEffect` for side effects |
| More boilerplate                              | Cleaner, hooks-based logic   |
| Requires `this` binding                       | No `this` issues             |

**Example (Counter):**

- **Class:**
  ```jsx
  class Counter extends React.Component {
    state = { count: 0 };
    render() {
      return (
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          {this.state.count}
        </button>
      );
    }
  }
  ```
- **Function:**
  ```jsx
  function Counter() {
    const [count, setCount] = useState(0);
    return <button onClick={() => setCount(count + 1)}>{count}</button>;
  }
  ```

---

## Question 20. What are Error Boundaries in React?

Error boundaries catch JavaScript errors in child components and display
fallback UI (class components only):

```jsx
class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h2>Oops! Something went wrong.</h2>;
    }
    return this.props.children;
  }
}

// Usage:
<ErrorBoundary>
  <Profile /> {/* Errors here show fallback UI */}
</ErrorBoundary>;
```

- **Limitations:** Does not catch errors in event handlers or async code.

## Question 21. Explain Lifecycle Methods in ReactJS?

React class components have special lifecycle methods that run at different
stages of a component's life — mounting, updating, and unmounting.

- `componentDidMount` runs once after the component appears on screen. Perfect
  for fetching data.
- `componentDidUpdate` runs after every update (props or state change).
- `componentWillUnmount` runs right before the component disappears — clean up
  timers, listeners here.

**Example:**

```javascript
class Timer extends React.Component {
  // Runs once after the component mounts
  componentDidMount() {
    console.log('Timer mounted');
    // Start an interval timer that logs "Tick" every second
    this.timerID = setInterval(() => console.log('Tick'), 1000);
  }

  // Runs after every update; checks if 'start' prop changed
  componentDidUpdate(prevProps) {
    if (prevProps.start !== this.props.start) {
      console.log('Start prop changed');
    }
  }

  // Runs before the component unmounts; clean up the interval timer
  componentWillUnmount() {
    clearInterval(this.timerID);
    console.log('Timer cleaned up');
  }

  // Render method outputs some text
  render() {
    return <div>Timer is running</div>;
  }
}
```

In functional components, you handle these with `useEffect`:

```javascript
useEffect(() => {
  // Runs once when the component mounts
  console.log('Mounted');

  // Cleanup function runs when the component unmounts
  return () => console.log('Cleanup on unmount');
}, []); // Empty dependency array means this runs only on mount and unmount
```

---

## Question 22. What is the difference between Redux, Redux Toolkit, Redux Thunk, and Zustand in ReactJS?

Managing global state can be done in different ways:

- **Redux**: Classic state management tool. Uses actions and reducers. Requires
  some boilerplate.
- **Redux Toolkit (RTK)**: The modern, recommended way to use Redux. Less
  boilerplate, built-in utilities like `createSlice`.
- **Redux Thunk**: Middleware that lets you write async logic in Redux action
  creators.
- **Zustand**: Lightweight alternative. No actions or reducers, just direct
  state and setters.

**Redux Toolkit example:**

```javascript
import { createSlice } from '@reduxjs/toolkit';

// Define a slice for counter state with initial value 0
const counterSlice = createSlice({
  name: 'counter', // Name of this slice
  initialState: 0, // Initial state value
  reducers: {
    // Reducer to increment the counter
    increment: (state) => state + 1,
    // Reducer to decrement the counter
    decrement: (state) => state - 1,
  },
});

// Export the generated action creators for use in components
export const { increment, decrement } = counterSlice.actions;

// Export the reducer to configure the store
export default counterSlice.reducer;
```

**Zustand example:**

```javascript
import create from 'zustand';

// Create a Zustand store with initial state and actions
const useStore = create((set) => ({
  count: 0, // Initial count value

  // Action to increment the count
  increment: () => set((state) => ({ count: state.count + 1 })),
}));

// Usage in components:
// const count = useStore(state => state.count);
// const increment = useStore(state => state.increment);
```

---

## Question 23. What is React Router and RBAC (Route-Based Access Control)? How to implement private protected routes?

React Router lets you declare routes in your React app, like `/home`,
`/profile`, etc.  
RBAC means controlling access based on user roles (admin, user, guest).

To protect routes, wrap components in a private route that checks auth:

```javascript
import { Navigate } from 'react-router-dom';

// Component to protect routes that require authentication
const PrivateRoute = ({ children }) => {
  // Check if the user is logged in by looking for token in localStorage
  const isLoggedIn = Boolean(localStorage.getItem('token'));

  // If logged in, render children components; otherwise redirect to login
  return isLoggedIn ? children : <Navigate to="/login" />;
};
```

Use it like this:

```javascript
<Route
  path="/dashboard" // Define the route path
  element={
    // Wrap the Dashboard component inside PrivateRoute
    // This ensures only authenticated users can access it
    <PrivateRoute>
      <Dashboard />
    </PrivateRoute>
  }
/>
```

You can extend it for roles:

```javascript
const RoleProtectedRoute = ({ children, allowedRoles }) => {
  // Get the current user's role (e.g., from localStorage,
  // context, or a utility)
  const userRole = getUserRole();

  // Check if the user's role is allowed to access this route
  if (!allowedRoles.includes(userRole)) {
    // If not allowed, redirect to an "unauthorized" page
    return <Navigate to="/unauthorized" />;
  }

  // If allowed, render the child components
  return children;
};
```

---

## Question 24. Explain React testing. Like Unit-testing, JEST, react-testing-library, etc.

Unit testing tests small pieces (functions, components) individually.  
Jest is the test runner and assertion library.  
React Testing Library (RTL) helps test React components from a user's
perspective.

**Example test with Jest and RTL:**

```javascript
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

test('calls onClick when clicked', () => {
  // Create a mock function to track clicks
  const onClick = jest.fn();

  // Render the Button component with label and mock click handler
  render(<Button label="Click me" onClick={onClick} />);

  // Simulate a user clicking the button by finding it via its text
  fireEvent.click(screen.getByText('Click me'));

  // Assert that the click handler was called exactly once
  expect(onClick).toHaveBeenCalledTimes(1);
});
```

This tests that clicking the button calls the click handler.

---

### Question 25. Why would you choose Next.js instead of React.js?

Next.js is built on React but comes with many features out of the box:

- Supports Server-Side Rendering (SSR) and Static Site Generation (SSG) for
  better SEO and performance.
- Uses file-based routing, so you don't manually configure routes.
- Has API routes to write backend endpoints inside your app.
- Provides image optimization and automatic code splitting.

**Simple Next.js page example:**

```javascript
// pages/about.js

// This is a simple page component in Next.js
// Because it's inside the "pages" folder,
// it automatically becomes a route at "/about"
export default function About() {
  return <h1>About Us</h1>; // Render a heading on the page
}
```

No router setup needed — the filename becomes the route.

**Choose Next.js if you want:**

- Better SEO out of the box
- Faster initial page loads
- A full-stack React framework
