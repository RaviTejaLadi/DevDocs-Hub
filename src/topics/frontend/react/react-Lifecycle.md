# React Component Lifecycle Guide

## Table of Contents

1. [Introduction](#introduction)
2. [Component Lifecycle Overview](#component-lifecycle-overview)
3. [Mounting Phase](#mounting-phase)
4. [Updating Phase](#updating-phase)
5. [Unmounting Phase](#unmounting-phase)
6. [Error Handling Phase](#error-handling-phase)
7. [Hooks vs Class Components](#hooks-vs-class-components)
8. [Best Practices](#best-practices)
9. [Common Patterns](#common-patterns)

---

## Introduction

React component lifecycle refers to the series of methods that are invoked in
different stages of a component's existence. These methods allow you to hook
into different points in a component's lifecycle to perform side effects, clean
up resources, and optimize performance.

**Key Concepts:**

- **Lifecycle Methods**: Special methods that React calls at specific times
- **Phases**: Different stages of a component's life (mounting, updating,
  unmounting)
- **Side Effects**: Operations like API calls, subscriptions, or DOM
  manipulation

---

## Component Lifecycle Overview

### The Three Main Phases

1. **Mounting**: Component is being created and inserted into the DOM
2. **Updating**: Component is being re-rendered as a result of changes to props
   or state
3. **Unmounting**: Component is being removed from the DOM

### Lifecycle Flow Diagram

```
Mounting → Updating → Unmounting
    ↓         ↓          ↓
constructor  render    componentWillUnmount
    ↓         ↓
render   componentDidUpdate
    ↓
componentDidMount
```

---

## Mounting Phase

Components are created and inserted into the DOM during the mounting phase.

### 1. constructor()

**Definition**: The constructor is called before the component is mounted. It's
used for initializing state and binding methods.

**Syntax**:

```javascript
constructor(props) {
  super(props);
  // Initialize state
  // Bind methods
}
```

**Usage**:

- Initialize local state
- Bind event handlers
- Should always call `super(props)` first

**Example**:

```javascript
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      isLoading: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}
```

### 2. render()

**Definition**: The render method is required and returns the JSX that
represents the component's UI.

**Syntax**:

```javascript
render() {
  return (
    // JSX elements
  );
}
```

**Usage**:

- Must be pure (no side effects)
- Should not modify component state
- Returns JSX, null, or false

**Example**:

```javascript
render() {
  const { isLoading } = this.state;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Welcome!</h1>
      <p>Content loaded successfully</p>
    </div>
  );
}
```

### 3. componentDidMount()

**Definition**: Called immediately after the component is mounted. Perfect for
side effects and API calls.

**Syntax**:

```javascript
componentDidMount() {
  // Side effects code here
}
```

**Usage**:

- API calls and data fetching
- Setting up subscriptions
- DOM manipulation
- Starting timers

**Example**:

```javascript
class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      loading: true,
    };
  }

  componentDidMount() {
    // API call
    fetch(`/api/users/${this.props.userId}`)
      .then((response) => response.json())
      .then((user) => {
        this.setState({ user, loading: false });
      })
      .catch((error) => {
        console.error('Error fetching user:', error);
        this.setState({ loading: false });
      });

    // Set up a timer
    this.timer = setInterval(() => {
      console.log('Timer tick');
    }, 1000);
  }

  componentWillUnmount() {
    // Cleanup timer
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  render() {
    const { user, loading } = this.state;

    if (loading) return <div>Loading user...</div>;
    if (!user) return <div>User not found</div>;

    return (
      <div>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    );
  }
}
```

---

## Updating Phase

Components update when props or state changes occur.

### 1. render()

**Definition**: Called again to re-render the component with new data.

**Usage**: Same as mounting phase, but now with updated props/state.

### 2. componentDidUpdate()

**Definition**: Called immediately after the component updates. Useful for side
effects based on prop/state changes.

**Syntax**:

```javascript
componentDidUpdate(prevProps, prevState, snapshot) {
  // Code to run after update
}
```

**Parameters**:

- `prevProps`: Previous props object
- `prevState`: Previous state object
- `snapshot`: Value returned from getSnapshotBeforeUpdate()

**Usage**:

- API calls when props change
- DOM operations after update
- Comparing previous and current props/state

**Example**:

```javascript
class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.fetchResults(this.props.searchTerm);
  }

  componentDidUpdate(prevProps) {
    // Only fetch if search term changed
    if (prevProps.searchTerm !== this.props.searchTerm) {
      this.fetchResults(this.props.searchTerm);
    }

    // Scroll to top when results change
    if (prevProps.searchTerm !== this.props.searchTerm) {
      window.scrollTo(0, 0);
    }
  }

  fetchResults(searchTerm) {
    if (!searchTerm) return;

    this.setState({ loading: true });

    fetch(`/api/search?q=${searchTerm}`)
      .then((response) => response.json())
      .then((results) => {
        this.setState({ results, loading: false });
      });
  }

  render() {
    const { results, loading } = this.state;

    return (
      <div>
        <h2>Search Results for: {this.props.searchTerm}</h2>
        {loading ? (
          <div>Searching...</div>
        ) : (
          <ul>
            {results.map((result) => (
              <li key={result.id}>{result.title}</li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}
```

### 3. getSnapshotBeforeUpdate()

**Definition**: Called right before the DOM is updated. Captures information
from the DOM before it changes.

**Syntax**:

```javascript
getSnapshotBeforeUpdate(prevProps, prevState) {
  // Return snapshot value or null
}
```

**Usage**:

- Capture scroll position
- Measure DOM elements before update
- Pass data to componentDidUpdate

**Example**:

```javascript
class ChatWindow extends React.Component {
  constructor(props) {
    super(props);
    this.listRef = React.createRef();
    this.state = {
      messages: [],
    };
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // Capture scroll position before new messages are added
    const list = this.listRef.current;
    if (prevState.messages.length < this.state.messages.length) {
      return list.scrollHeight - list.scrollTop;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // Adjust scroll position to maintain user's view
    if (snapshot !== null) {
      const list = this.listRef.current;
      list.scrollTop = list.scrollHeight - snapshot;
    }
  }

  render() {
    return (
      <div ref={this.listRef} style={{ height: '400px', overflow: 'auto' }}>
        {this.state.messages.map((message) => (
          <div key={message.id}>{message.text}</div>
        ))}
      </div>
    );
  }
}
```

---

## Unmounting Phase

### componentWillUnmount()

**Definition**: Called immediately before a component is unmounted and
destroyed. Used for cleanup.

**Syntax**:

```javascript
componentWillUnmount() {
  // Cleanup code here
}
```

**Usage**:

- Clear timers and intervals
- Cancel network requests
- Remove event listeners
- Clean up subscriptions

**Example**:

```javascript
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  componentDidMount() {
    // Set up interval
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        seconds: prevState.seconds + 1,
      }));
    }, 1000);

    // Add event listener
    this.handleResize = () => {
      console.log('Window resized');
    };
    window.addEventListener('resize', this.handleResize);

    // Set up WebSocket connection
    this.websocket = new WebSocket('ws://localhost:8080');
    this.websocket.onmessage = (event) => {
      console.log('Received:', event.data);
    };
  }

  componentWillUnmount() {
    // Clean up interval
    if (this.interval) {
      clearInterval(this.interval);
    }

    // Remove event listener
    window.removeEventListener('resize', this.handleResize);

    // Close WebSocket connection
    if (this.websocket) {
      this.websocket.close();
    }

    // Cancel any pending network requests
    if (this.abortController) {
      this.abortController.abort();
    }
  }

  render() {
    return <div>Timer: {this.state.seconds} seconds</div>;
  }
}
```

---

## Error Handling Phase

### componentDidCatch()

**Definition**: Called when an error occurs during rendering, in lifecycle
methods, or in constructors of child components.

**Syntax**:

```javascript
componentDidCatch(error, errorInfo) {
  // Handle error
}
```

**Usage**:

- Log error information
- Display fallback UI
- Report errors to error tracking services

**Example**:

```javascript
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    // Update state to show fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error details
    console.error('Error caught by boundary:', error);
    console.error('Error info:', errorInfo);

    // Report to error tracking service
    // logErrorToService(error, errorInfo);

    this.setState({ error: error.message });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '20px', border: '1px solid red' }}>
          <h2>Something went wrong!</h2>
          <p>{this.state.error}</p>
          <button
            onClick={() => this.setState({ hasError: false, error: null })}
          >
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Usage
function App() {
  return (
    <ErrorBoundary>
      <MyComponent />
      <AnotherComponent />
    </ErrorBoundary>
  );
}
```

---

## Hooks vs Class Components

### Function Components with Hooks

Modern React uses hooks to handle lifecycle events in function components:

**useState**: Replaces constructor and state management

```javascript
const [count, setCount] = useState(0);
```

**useEffect**: Replaces componentDidMount, componentDidUpdate, and
componentWillUnmount

```javascript
function MyComponent() {
  const [data, setData] = useState(null);

  // Equivalent to componentDidMount
  useEffect(() => {
    fetchData().then(setData);
  }, []); // Empty dependency array

  // Equivalent to componentDidUpdate (when count changes)
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]); // Dependency array with count

  // Equivalent to componentWillUnmount
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('Timer tick');
    }, 1000);

    return () => {
      clearInterval(timer); // Cleanup function
    };
  }, []);

  return <div>{data ? data.name : 'Loading...'}</div>;
}
```

### Migration Example

**Class Component**:

```javascript
class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: null, loading: true };
  }

  componentDidMount() {
    this.fetchUser();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.userId !== this.props.userId) {
      this.fetchUser();
    }
  }

  fetchUser() {
    fetch(`/api/users/${this.props.userId}`)
      .then((res) => res.json())
      .then((user) => this.setState({ user, loading: false }));
  }

  render() {
    const { user, loading } = this.state;
    if (loading) return <div>Loading...</div>;
    return <div>{user.name}</div>;
  }
}
```

**Function Component with Hooks**:

```javascript
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/users/${userId}`)
      .then((res) => res.json())
      .then((user) => {
        setUser(user);
        setLoading(false);
      });
  }, [userId]); // Re-run when userId changes

  if (loading) return <div>Loading...</div>;
  return <div>{user.name}</div>;
}
```

---

## Best Practices

### 1. Cleanup in componentWillUnmount

Always clean up resources to prevent memory leaks:

```javascript
componentDidMount() {
  this.timer = setInterval(this.tick, 1000);
  document.addEventListener('click', this.handleClick);
}

componentWillUnmount() {
  clearInterval(this.timer);
  document.removeEventListener('click', this.handleClick);
}
```

### 2. Conditional Logic in componentDidUpdate

Always check if props/state actually changed:

```javascript
componentDidUpdate(prevProps, prevState) {
  if (prevProps.userId !== this.props.userId) {
    this.fetchUserData();
  }

  if (prevState.searchTerm !== this.state.searchTerm) {
    this.performSearch();
  }
}
```

### 3. Error Boundaries

Wrap components that might fail:

```javascript
<ErrorBoundary>
  <UserProfile userId={userId} />
</ErrorBoundary>
```

### 4. Avoid Side Effects in render()

Keep render method pure:

```javascript
// ❌ Wrong
render() {
  this.fetchData(); // Side effect in render
  return <div>{this.state.data}</div>;
}

// ✅ Correct
componentDidMount() {
  this.fetchData(); // Side effect in lifecycle method
}

render() {
  return <div>{this.state.data}</div>;
}
```

---

## Common Patterns

### 1. Data Fetching Pattern

```javascript
class DataComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      loading: true,
      error: null,
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch('/api/data');
      const data = await response.json();
      this.setState({ data, loading: false });
    } catch (error) {
      this.setState({ error: error.message, loading: false });
    }
  }

  render() {
    const { data, loading, error } = this.state;

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!data) return <div>No data</div>;

    return <div>{/* Render data */}</div>;
  }
}
```

### 2. Subscription Pattern

```javascript
class SubscriptionComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: null };
  }

  componentDidMount() {
    this.subscription = DataService.subscribe(this.props.topic, (data) =>
      this.setState({ data })
    );
  }

  componentDidUpdate(prevProps) {
    if (prevProps.topic !== this.props.topic) {
      this.subscription.unsubscribe();
      this.subscription = DataService.subscribe(this.props.topic, (data) =>
        this.setState({ data })
      );
    }
  }

  componentWillUnmount() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  render() {
    return <div>{this.state.data}</div>;
  }
}
```

### 3. Timer Pattern

```javascript
class TimerComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return <div>Current time: {this.state.time.toLocaleTimeString()}</div>;
  }
}
```

This comprehensive guide covers all aspects of React component lifecycle methods
with practical examples and best practices for both class components and modern
function components with hooks.

**[⬆ Back to Top](#table-of-contents)**
