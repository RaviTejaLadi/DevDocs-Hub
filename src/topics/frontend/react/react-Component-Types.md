# React Functional vs Class Components: Complete Guide

## Table of Contents

1. [Introduction](#introduction)
2. [Definitions](#definitions)
3. [Basic Syntax Comparison](#basic-syntax-comparison)
4. [Component Lifecycle](#component-lifecycle)
5. [State Management](#state-management)
6. [Props Handling](#props-handling)
7. [Event Handling](#event-handling)
8. [Performance Considerations](#performance-considerations)
9. [Modern Usage Patterns](#modern-usage-patterns)
10. [Migration Guidelines](#migration-guidelines)
11. [Best Practices](#best-practices)
12. [Conclusion](#conclusion)

## Introduction

React components are the building blocks of React applications. There are two
primary ways to define components: functional components and class components.
While both serve the same purpose, they differ in syntax, capabilities, and
modern usage patterns.

## Definitions

### Functional Components

Functional components are JavaScript functions that return JSX. They are
simpler, more concise, and have become the preferred approach in modern React
development, especially after the introduction of React Hooks.

### Class Components

Class components are ES6 classes that extend `React.Component`. They were the
primary way to create stateful components before hooks were introduced and
provide access to lifecycle methods and state management through class methods.

## Basic Syntax Comparison

### Functional Component Syntax

```jsx
import React from 'react';

function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Arrow function syntax
const Welcome = (props) => {
  return <h1>Hello, {props.name}!</h1>;
};

export default Welcome;
```

### Class Component Syntax

```jsx
import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}

export default Welcome;
```

## Component Lifecycle

### Functional Components with Hooks

```jsx
import React, { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Equivalent to componentDidMount and componentDidUpdate
  useEffect(() => {
    fetchUser(userId);
  }, [userId]);

  // Equivalent to componentWillUnmount
  useEffect(() => {
    return () => {
      // Cleanup function
      console.log('Component unmounting');
    };
  }, []);

  const fetchUser = async (id) => {
    setLoading(true);
    try {
      const userData = await api.getUser(id);
      setUser(userData);
    } catch (error) {
      console.error('Error fetching user:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (!user) return <div>User not found</div>;

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}
```

### Class Components with Lifecycle Methods

```jsx
import React, { Component } from 'react';

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchUser(this.props.userId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.userId !== this.props.userId) {
      this.fetchUser(this.props.userId);
    }
  }

  componentWillUnmount() {
    console.log('Component unmounting');
  }

  fetchUser = async (id) => {
    this.setState({ loading: true });
    try {
      const userData = await api.getUser(id);
      this.setState({ user: userData });
    } catch (error) {
      console.error('Error fetching user:', error);
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { user, loading } = this.state;

    if (loading) return <div>Loading...</div>;
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

## State Management

### Functional Components with useState Hook

```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <h3>Hello, {name}!</h3>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
```

### Class Components with this.state

```jsx
import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: '',
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  reset = () => {
    this.setState({ count: 0 });
  };

  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  };

  render() {
    const { count, name } = this.state;

    return (
      <div>
        <input
          type="text"
          value={name}
          onChange={this.handleNameChange}
          placeholder="Enter your name"
        />
        <h3>Hello, {name}!</h3>
        <p>Count: {count}</p>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}
```

## Props Handling

### Functional Components

```jsx
// Simple props
function Greeting({ name, age, isVip = false }) {
  return (
    <div>
      <h2>Hello, {name}!</h2>
      <p>Age: {age}</p>
      {isVip && <span className="vip-badge">VIP Member</span>}
    </div>
  );
}

// Props with destructuring and default values
function ProductCard({ product, onAddToCart, showPrice = true }) {
  const { name, price, image, description } = product;

  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      {showPrice && <span className="price">${price}</span>}
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
}
```

### Class Components

```jsx
class Greeting extends Component {
  static defaultProps = {
    isVip: false,
  };

  render() {
    const { name, age, isVip } = this.props;

    return (
      <div>
        <h2>Hello, {name}!</h2>
        <p>Age: {age}</p>
        {isVip && <span className="vip-badge">VIP Member</span>}
      </div>
    );
  }
}

class ProductCard extends Component {
  static defaultProps = {
    showPrice: true,
  };

  render() {
    const { product, onAddToCart, showPrice } = this.props;
    const { name, price, image, description } = product;

    return (
      <div className="product-card">
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>{description}</p>
        {showPrice && <span className="price">${price}</span>}
        <button onClick={() => onAddToCart(product)}>Add to Cart</button>
      </div>
    );
  }
}
```

## Event Handling

### Functional Components

```jsx
function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleReset = () => {
    setFormData({ email: '', password: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        placeholder="Email"
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleInputChange}
        placeholder="Password"
      />
      <button type="submit">Login</button>
      <button type="button" onClick={handleReset}>
        Reset
      </button>
    </form>
  );
}
```

### Class Components

```jsx
class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', this.state);
  };

  handleReset = () => {
    this.setState({ email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="email"
          name="email"
          value={email}
          onChange={this.handleInputChange}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={this.handleInputChange}
          placeholder="Password"
        />
        <button type="submit">Login</button>
        <button type="button" onClick={this.handleReset}>
          Reset
        </button>
      </form>
    );
  }
}
```

## Performance Considerations

### Functional Components Optimization

```jsx
import React, { memo, useMemo, useCallback } from 'react';

const ExpensiveList = memo(function ExpensiveList({ items, onItemClick }) {
  // Memoize expensive calculations
  const processedItems = useMemo(() => {
    return items.map((item) => ({
      ...item,
      displayName: item.name.toUpperCase(),
      isExpensive: item.price > 100,
    }));
  }, [items]);

  // Memoize callback functions
  const handleItemClick = useCallback(
    (itemId) => {
      onItemClick(itemId);
    },
    [onItemClick]
  );

  return (
    <ul>
      {processedItems.map((item) => (
        <li key={item.id} onClick={() => handleItemClick(item.id)}>
          {item.displayName} - ${item.price}
          {item.isExpensive && <span> 💎</span>}
        </li>
      ))}
    </ul>
  );
});
```

### Class Components Optimization

```jsx
import React, { Component, PureComponent } from 'react';

class ExpensiveList extends PureComponent {
  processItems = (items) => {
    return items.map((item) => ({
      ...item,
      displayName: item.name.toUpperCase(),
      isExpensive: item.price > 100,
    }));
  };

  handleItemClick = (itemId) => {
    this.props.onItemClick(itemId);
  };

  render() {
    const { items } = this.props;
    const processedItems = this.processItems(items);

    return (
      <ul>
        {processedItems.map((item) => (
          <li key={item.id} onClick={() => this.handleItemClick(item.id)}>
            {item.displayName} - ${item.price}
            {item.isExpensive && <span> 💎</span>}
          </li>
        ))}
      </ul>
    );
  }
}
```

## Modern Usage Patterns

### Custom Hooks (Functional Components)

```jsx
import { useState, useEffect } from 'react';

// Custom hook for API calls
function useApi(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

// Using the custom hook
function UserList() {
  const { data: users, loading, error } = useApi('/api/users');

  if (loading) return <div>Loading users...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <ul>
      {users?.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

### Higher-Order Components (Class Components)

```jsx
// HOC for loading state
function withLoading(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = { loading: true };
    }

    componentDidMount() {
      // Simulate loading
      setTimeout(() => {
        this.setState({ loading: false });
      }, 1000);
    }

    render() {
      if (this.state.loading) {
        return <div>Loading...</div>;
      }

      return <WrappedComponent {...this.props} />;
    }
  };
}

// Using the HOC
const UserProfileWithLoading = withLoading(UserProfile);
```

## Migration Guidelines

### Converting Class to Functional Component

**Before (Class Component):**

```jsx
class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ seconds: this.state.seconds + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <div>Seconds: {this.state.seconds}</div>;
  }
}
```

**After (Functional Component):**

```jsx
function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div>Seconds: {seconds}</div>;
}
```

## Best Practices

### Functional Components Best Practices

- Use functional components for new development
- Leverage custom hooks for reusable logic
- Use `useCallback` and `useMemo` for performance optimization
- Keep components small and focused
- Use TypeScript for better type safety

### Class Components Best Practices

- Use `PureComponent` or implement `shouldComponentUpdate` for optimization
- Bind methods in constructor or use arrow functions
- Avoid direct state mutation
- Use lifecycle methods appropriately
- Consider migration to functional components for new features

### General Best Practices

```jsx
// Good: Descriptive component names
function UserProfileCard({ user }) {
  /* ... */
}

// Good: Props destructuring
function Button({ variant, size, children, onClick }) {
  /* ... */
}

// Good: Default props
function Avatar({ src, alt, size = 'medium' }) {
  /* ... */
}

// Good: PropTypes or TypeScript for type checking
import PropTypes from 'prop-types';

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};
```

## Conclusion

Functional components with hooks have become the modern standard for React
development due to their simplicity, reusability, and performance benefits.
While class components are still supported and valid, new projects should favor
functional components. Understanding both patterns is essential for maintaining
existing codebases and making informed architectural decisions.

**Key Takeaways:**

- Functional components are simpler and more concise
- Hooks provide powerful state and lifecycle management
- Class components are still valid but considered legacy
- Performance optimization techniques exist for both patterns
- Migration from class to functional components is straightforward
- Choose the pattern that best fits your project's needs and constraints

**[⬆ Back to Top](#table-of-contents)**
