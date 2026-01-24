# **Complete Guide to React Error Handling**

## Table of Contents

1. [Introduction](#1.-introduction)
2. [Core Concepts](#2.-core-concepts)
3. [Error Boundaries](#3.-error-boundaries)
4. [Error Boundary Lifecycle Methods](#4.-error-boundary-lifecycle-methods)
5. [Error Boundary Implementation](#5.-error-boundary-implementation)
6. [Error Types in React](#6.-error-types-in-react)
7. [Best Practices](#7.-best-practices)
8. [Advanced Error Handling Patterns](#8.-advanced-error-handling-patterns)
9. [Testing Error Boundaries](#9.-testing-error-boundaries)
10. [Common Pitfalls](#10.-common-pitfalls)
11. [Production Considerations](#11.-production-considerations)

---

## 1. Introduction

### Definition

React error handling is a mechanism to catch and manage JavaScript errors that
occur during component rendering, lifecycle methods, and constructors. It
prevents the entire application from crashing when errors occur in specific
components.

### Purpose

- **Graceful Degradation**: Show fallback UI instead of a blank screen
- **User Experience**: Maintain application functionality when parts fail
- **Debugging**: Capture error information for development and monitoring
- **Stability**: Prevent cascading failures that could crash the entire app

---

## 2. Core Concepts

### 2.1 Error Propagation

In React, uncaught errors in components bubble up through the component tree
until they reach an error boundary or the root of the application.

### 2.2 Error Boundaries

Special React components that catch JavaScript errors anywhere in their child
component tree, log those errors, and display fallback UI.

### 2.3 Error Recovery

The process of handling errors gracefully and potentially allowing users to
recover from error states.

---

## 3. Error Boundaries

### Definition

Error boundaries are React components that implement either
`componentDidCatch()` or `static getDerivedStateFromError()` lifecycle methods.

### Key Characteristics

- Only catch errors in **child components**
- Do **not** catch errors in:
  - Event handlers
  - Asynchronous code (setTimeout, promises)
  - Server-side rendering
  - Errors thrown in the error boundary itself

### When to Use

- Wrap entire application sections
- Protect critical user flows
- Isolate potentially unstable components
- Third-party component integration

---

## 4. Error Boundary Lifecycle Methods

### 4.1 `static getDerivedStateFromError(error)`

**Purpose**: Update state to show fallback UI

**Syntax**:

```javascript
static getDerivedStateFromError(error) {
  // Update state to show fallback UI
  return { hasError: true };
}
```

**Parameters**:

- `error`: The error that was thrown

**Returns**:

- State object to update component state
- `null` if no state update needed

**Usage**: Called during the render phase, so side effects are not permitted.

### 4.2 `componentDidCatch(error, errorInfo)`

**Purpose**: Log error information and perform side effects

**Syntax**:

```javascript
componentDidCatch(error, errorInfo) {
  // Log error to error reporting service
  console.error('Error caught by boundary:', error, errorInfo);
}
```

**Parameters**:

- `error`: The error that was thrown
- `errorInfo`: Object with `componentStack` property containing stack trace

**Usage**: Called during the commit phase, so side effects are permitted.

---

## 5. Error Boundary Implementation

### 5.1 Basic Error Boundary

```javascript
import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state to show fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error information
    console.error('Error Boundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
```

### 5.2 Enhanced Error Boundary with Props

```javascript
class EnhancedErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });

    // Log to external service
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div>
            <h2>Something went wrong</h2>
            <details style={{ whiteSpace: 'pre-wrap' }}>
              {this.state.error && this.state.error.toString()}
              <br />
              {this.state.errorInfo.componentStack}
            </details>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
```

### 5.3 Functional Error Boundary with Hooks

```javascript
import { useState, useEffect } from 'react';

function FunctionalErrorBoundary({ children, fallback }) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const errorHandler = (error, errorInfo) => {
      setHasError(true);
      console.error('Error caught:', error, errorInfo);
    };

    // Note: This is a simplified example
    // Functional components can't catch errors the same way
    // Use react-error-boundary library for production

    return () => {
      // Cleanup
    };
  }, []);

  if (hasError) {
    return fallback || <div>Something went wrong</div>;
  }

  return children;
}
```

---

## 6. Error Types in React

### 6.1 Render Errors

Errors that occur during component rendering.

```javascript
function ProblematicComponent() {
  const data = null;
  return (
    <div>
      {data.map((item) => (
        <span key={item.id}>{item.name}</span>
      ))}
    </div>
  );
  // Error: Cannot read property 'map' of null
}
```

### 6.2 Lifecycle Method Errors

Errors in component lifecycle methods.

```javascript
class ComponentWithError extends React.Component {
  componentDidMount() {
    throw new Error('Error in componentDidMount');
  }

  render() {
    return <div>This component will error on mount</div>;
  }
}
```

### 6.3 Constructor Errors

Errors in component constructors.

```javascript
class ComponentWithConstructorError extends React.Component {
  constructor(props) {
    super(props);
    throw new Error('Constructor error');
  }

  render() {
    return <div>Never rendered</div>;
  }
}
```

---

## 7. Best Practices

### 7.1 Error Boundary Placement

- Place at strategic points in component tree
- Don't wrap every component
- Consider user experience and recovery options

```javascript
function App() {
  return (
    <div>
      <Header />
      <ErrorBoundary>
        <MainContent />
      </ErrorBoundary>
      <ErrorBoundary>
        <Sidebar />
      </ErrorBoundary>
      <Footer />
    </div>
  );
}
```

### 7.2 Meaningful Error Messages

Provide context-specific error messages and recovery options.

```javascript
function UserProfileErrorBoundary({ children }) {
  return (
    <ErrorBoundary
      fallback={
        <div>
          <h3>Unable to load user profile</h3>
          <p>Please refresh the page or try again later.</p>
          <button onClick={() => window.location.reload()}>Refresh Page</button>
        </div>
      }
    >
      {children}
    </ErrorBoundary>
  );
}
```

### 7.3 Error Reporting

Implement proper error logging and reporting.

```javascript
function logErrorToService(error, errorInfo) {
  // Send to error reporting service
  if (process.env.NODE_ENV === 'production') {
    // Example with a hypothetical error service
    errorReportingService.captureException(error, {
      extra: errorInfo,
    });
  }
}

class ErrorBoundary extends React.Component {
  componentDidCatch(error, errorInfo) {
    logErrorToService(error, errorInfo);
  }
}
```

---

## 8. Advanced Error Handling Patterns

### 8.1 Retry Mechanism

```javascript
class RetryErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      retryCount: 0,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error:', error, errorInfo);
  }

  handleRetry = () => {
    this.setState((prevState) => ({
      hasError: false,
      retryCount: prevState.retryCount + 1,
    }));
  };

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h3>Something went wrong</h3>
          {this.state.retryCount < 3 && (
            <button onClick={this.handleRetry}>
              Try Again ({this.state.retryCount}/3)
            </button>
          )}
          {this.state.retryCount >= 3 && <p>Please refresh the page</p>}
        </div>
      );
    }

    return this.props.children;
  }
}
```

### 8.2 Context-Based Error Handling

```javascript
const ErrorContext = React.createContext();

function ErrorProvider({ children }) {
  const [errors, setErrors] = useState([]);

  const addError = (error) => {
    setErrors((prev) => [...prev, { id: Date.now(), error }]);
  };

  const removeError = (id) => {
    setErrors((prev) => prev.filter((err) => err.id !== id));
  };

  return (
    <ErrorContext.Provider value={{ errors, addError, removeError }}>
      {children}
      <ErrorDisplay errors={errors} onRemove={removeError} />
    </ErrorContext.Provider>
  );
}
```

### 8.3 Async Error Handling

```javascript
function AsyncErrorHandler({ children }) {
  const [asyncError, setAsyncError] = useState(null);

  useEffect(() => {
    const handleUnhandledRejection = (event) => {
      setAsyncError(event.reason);
    };

    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener(
        'unhandledrejection',
        handleUnhandledRejection
      );
    };
  }, []);

  if (asyncError) {
    return (
      <div>
        <h3>An error occurred</h3>
        <button onClick={() => setAsyncError(null)}>Dismiss</button>
      </div>
    );
  }

  return children;
}
```

---

## 9. Testing Error Boundaries

### 9.1 Testing Setup

```javascript
import { render, screen } from '@testing-library/react';
import ErrorBoundary from './ErrorBoundary';

const ThrowError = ({ shouldThrow }) => {
  if (shouldThrow) {
    throw new Error('Test error');
  }
  return <div>No error</div>;
};

describe('ErrorBoundary', () => {
  it('catches and displays error', () => {
    // Suppress console.error for this test
    const spy = jest.spyOn(console, 'error').mockImplementation(() => {});

    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    );

    expect(screen.getByText(/something went wrong/i)).toBeInTheDocument();

    spy.mockRestore();
  });
});
```

### 9.2 Testing Error Recovery

```javascript
it('allows retry after error', () => {
  const { rerender } = render(
    <RetryErrorBoundary>
      <ThrowError shouldThrow={true} />
    </RetryErrorBoundary>
  );

  // Error state
  expect(screen.getByText(/try again/i)).toBeInTheDocument();

  // Click retry
  fireEvent.click(screen.getByText(/try again/i));

  // Re-render with no error
  rerender(
    <RetryErrorBoundary>
      <ThrowError shouldThrow={false} />
    </RetryErrorBoundary>
  );

  expect(screen.getByText('No error')).toBeInTheDocument();
});
```

---

## 10. Common Pitfalls

### 10.1 Error Boundaries Don't Catch All Errors

```javascript
// ❌ These are NOT caught by error boundaries:
function ProblematicComponent() {
  const handleClick = () => {
    throw new Error('Event handler error'); // Not caught
  };

  useEffect(() => {
    setTimeout(() => {
      throw new Error('Async error'); // Not caught
    }, 1000);
  }, []);

  return <button onClick={handleClick}>Click me</button>;
}
```

### 10.2 Infinite Error Loops

```javascript
// ❌ Avoid throwing errors in error boundary render
class BadErrorBoundary extends React.Component {
  render() {
    if (this.state.hasError) {
      throw new Error('Error in error boundary'); // Infinite loop!
    }
    return this.props.children;
  }
}
```

### 10.3 Over-wrapping Components

```javascript
// ❌ Too granular
function App() {
  return (
    <ErrorBoundary>
      <ErrorBoundary>
        <ErrorBoundary>
          <Component />
        </ErrorBoundary>
      </ErrorBoundary>
    </ErrorBoundary>
  );
}
```

---

## 11. Production Considerations

### 11.1 Error Monitoring Integration

```javascript
import * as Sentry from '@sentry/react';

class ProductionErrorBoundary extends React.Component {
  componentDidCatch(error, errorInfo) {
    Sentry.withScope((scope) => {
      scope.setTag('component', 'ErrorBoundary');
      scope.setContext('errorInfo', errorInfo);
      Sentry.captureException(error);
    });
  }
}
```

### 11.2 Feature Flags for Error Boundaries

```javascript
function ConditionalErrorBoundary({ children, feature }) {
  if (featureFlags.isEnabled(feature)) {
    return <ErrorBoundary>{children}</ErrorBoundary>;
  }
  return children;
}
```

### 11.3 Performance Considerations

```javascript
// Memoize error boundary to prevent unnecessary re-renders
const MemoizedErrorBoundary = React.memo(ErrorBoundary);

// Use error boundaries strategically to minimize performance impact
function OptimizedApp() {
  return (
    <div>
      <Header /> {/* No error boundary needed */}
      <MemoizedErrorBoundary>
        <ExpensiveComponent />
      </MemoizedErrorBoundary>
    </div>
  );
}
```

---

## Summary

React error handling through error boundaries provides a robust way to manage
errors in React applications. Key takeaways:

- Use error boundaries to catch errors in component trees
- Implement both `getDerivedStateFromError` and `componentDidCatch`
- Place error boundaries strategically, not everywhere
- Provide meaningful fallback UI and recovery options
- Remember that error boundaries don't catch all types of errors
- Test error scenarios thoroughly
- Integrate with error monitoring services in production

Error boundaries are essential for building resilient React applications that
gracefully handle failures and maintain good user experience even when things go
wrong.

**[⬆ Back to Top](#table-of-contents)**
