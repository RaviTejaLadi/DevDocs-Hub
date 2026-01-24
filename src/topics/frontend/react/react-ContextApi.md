# React Context API - Complete Guide

## Table of Contents

1. [Introduction](#introduction)
2. [Definitions](#definitions)
3. [Core Concepts](#core-concepts)
4. [Syntax](#syntax)
5. [Basic Usage](#basic-usage)
6. [Examples](#examples)
   - [Simple Theme Context](#simple-theme-context)
   - [User Authentication Context](#user-authentication-context)
   - [Shopping Cart Context](#shopping-cart-context)
7. [Best Practices](#best-practices)
8. [Common Patterns](#common-patterns)
9. [Performance Considerations](#performance-considerations)
10. [Troubleshooting](#troubleshooting)

---

## Introduction

The React Context API is a powerful feature that allows you to share data
between components without having to pass props down manually at every level.
It's designed to solve the "prop drilling" problem where you need to pass data
through many intermediate components that don't actually use the data
themselves.

Context provides a way to pass data through the component tree without having to
pass props down manually at every level. It's particularly useful for data that
can be considered "global" for a tree of React components, such as the current
authenticated user, theme, or preferred language.

---

## Definitions

### Context

A React feature that allows components to share values without explicitly
passing them through props at every level of the component tree.

### Provider

A React component that allows consuming components to subscribe to context
changes. It accepts a `value` prop to be passed to consuming components that are
descendants of this Provider.

### Consumer

A React component that subscribes to context changes. It requires a function as
a child that receives the current context value and returns a React node.

### useContext Hook

A React Hook that allows functional components to consume context values more
easily than using the Consumer component.

### Context Object

The object returned by `React.createContext()` that contains both Provider and
Consumer components.

---

## Core Concepts

### 1. Creating Context

Context is created using `React.createContext()` which returns an object with
Provider and Consumer components.

### 2. Providing Context

The Provider component makes the context value available to all its descendant
components.

### 3. Consuming Context

Components can consume context values using either the Consumer component or the
useContext hook.

### 4. Default Values

Context can have default values that are used when a component doesn't have a
matching Provider above it in the tree.

---

## Syntax

### Creating Context

```javascript
const MyContext = React.createContext(defaultValue);
```

### Provider Component

```javascript
<MyContext.Provider value={someValue}>
  {/* Child components */}
</MyContext.Provider>
```

### Consumer Component

```javascript
<MyContext.Consumer>
  {value => /* render something based on the context value */}
</MyContext.Consumer>
```

### useContext Hook

```javascript
const value = useContext(MyContext);
```

---

## Basic Usage

### Step 1: Create Context

```javascript
import React, { createContext } from 'react';

const MyContext = createContext();
```

### Step 2: Provide Context

```javascript
function App() {
  const contextValue = 'Hello from Context!';

  return (
    <MyContext.Provider value={contextValue}>
      <ChildComponent />
    </MyContext.Provider>
  );
}
```

### Step 3: Consume Context

```javascript
import { useContext } from 'react';

function ChildComponent() {
  const value = useContext(MyContext);

  return <div>{value}</div>;
}
```

---

## Examples

### Simple Theme Context

#### Creating the Theme Context

```javascript
import React, { createContext, useContext, useState } from 'react';

// Create context with default values
const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
});

// Custom hook for using theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Theme Provider Component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const value = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
```

#### Using the Theme Context

```javascript
// App Component
function App() {
  return (
    <ThemeProvider>
      <Header />
      <MainContent />
      <Footer />
    </ThemeProvider>
  );
}

// Header Component
function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header
      style={{
        backgroundColor: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#333' : '#fff',
      }}
    >
      <h1>My App</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'dark' : 'light'} theme
      </button>
    </header>
  );
}

// MainContent Component
function MainContent() {
  const { theme } = useTheme();

  return (
    <main
      style={{
        backgroundColor: theme === 'light' ? '#f5f5f5' : '#444',
        color: theme === 'light' ? '#333' : '#fff',
        padding: '20px',
      }}
    >
      <p>Current theme: {theme}</p>
    </main>
  );
}
```

### User Authentication Context

```javascript
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in (e.g., from localStorage)
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const value = {
    user,
    login,
    logout,
    loading,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Usage in components
function LoginButton() {
  const { isAuthenticated, user, logout } = useAuth();

  if (isAuthenticated) {
    return (
      <div>
        <span>Welcome, {user.name}!</span>
        <button onClick={logout}>Logout</button>
      </div>
    );
  }

  return <button>Login</button>;
}
```

### Shopping Cart Context

```javascript
import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

// Cart reducer
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
      };

    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      };

    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };

    case 'CLEAR_CART':
      return {
        ...state,
        items: [],
      };

    default:
      return state;
  }
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  const addItem = (item) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id } });
  };

  const updateQuantity = (id, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const getTotalPrice = () => {
    return state.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const getTotalItems = () => {
    return state.items.reduce((total, item) => total + item.quantity, 0);
  };

  const value = {
    items: state.items,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    getTotalPrice,
    getTotalItems,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// Usage
function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <div>
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={() => addItem(product)}>Add to Cart</button>
    </div>
  );
}

function CartSummary() {
  const { items, getTotalPrice, getTotalItems } = useCart();

  return (
    <div>
      <h3>Cart Summary</h3>
      <p>Items: {getTotalItems()}</p>
      <p>Total: ${getTotalPrice().toFixed(2)}</p>
    </div>
  );
}
```

---

## Best Practices

### 1. Create Custom Hooks

Always create custom hooks for consuming context to provide better error
handling and cleaner API.

```javascript
export const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error('useMyContext must be used within MyProvider');
  }
  return context;
};
```

### 2. Split Contexts by Concern

Don't put everything in one massive context. Split by logical concerns.

```javascript
// Good: Separate contexts
const AuthContext = createContext();
const ThemeContext = createContext();
const CartContext = createContext();

// Avoid: One giant context
const AppContext = createContext(); // Contains auth, theme, cart, etc.
```

### 3. Provide Default Values

Always provide meaningful default values when creating context.

```javascript
const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {
    console.warn('toggleTheme called outside of ThemeProvider');
  },
});
```

### 4. Use TypeScript for Better DX

```typescript
interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
```

### 5. Memoize Context Values

Use useMemo to prevent unnecessary re-renders when context values are objects.

```javascript
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const value = useMemo(
    () => ({
      user,
      login: (userData) => setUser(userData),
      logout: () => setUser(null),
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
```

---

## Common Patterns

### 1. Context with Reducer

Use useReducer for complex state management within context.

```javascript
const StateContext = createContext();

function StateProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
}
```

### 2. Multiple Providers Pattern

```javascript
function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <CartProvider>
          <Router>
            <Routes />
          </Router>
        </CartProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}
```

### 3. Compound Component Pattern

```javascript
const Tabs = {
  Provider: TabsProvider,
  List: TabsList,
  Tab: Tab,
  Panel: TabPanel,
};

// Usage
<Tabs.Provider>
  <Tabs.List>
    <Tabs.Tab>Tab 1</Tabs.Tab>
    <Tabs.Tab>Tab 2</Tabs.Tab>
  </Tabs.List>
  <Tabs.Panel>Panel 1</Tabs.Panel>
  <Tabs.Panel>Panel 2</Tabs.Panel>
</Tabs.Provider>;
```

---

## Performance Considerations

### 1. Context Splitting

Split frequently changing and rarely changing data into separate contexts.

```javascript
// Fast changing data
const UserPreferencesContext = createContext();

// Slow changing data
const UserProfileContext = createContext();
```

### 2. Memoization

Use React.memo and useMemo to prevent unnecessary re-renders.

```javascript
const ExpensiveChild = React.memo(({ data }) => {
  return <div>{/* Expensive rendering */}</div>;
});
```

### 3. Context Selector Pattern

For large contexts, consider implementing a selector pattern.

```javascript
const useAppContext = (selector) => {
  const context = useContext(AppContext);
  return selector(context);
};

// Usage
const userName = useAppContext((state) => state.user.name);
```

---

## Troubleshooting

### Common Issues and Solutions

#### 1. Context is undefined

**Problem**: Getting undefined when consuming context. **Solution**: Ensure the
component is wrapped in the Provider.

```javascript
// Wrong
function App() {
  return <MyComponent />; // No provider
}

// Correct
function App() {
  return (
    <MyProvider>
      <MyComponent />
    </MyProvider>
  );
}
```

#### 2. Context not updating

**Problem**: Context value changes but components don't re-render. **Solution**:
Ensure you're not creating new objects on every render without memoization.

```javascript
// Wrong - creates new object on every render
const value = {
  user,
  login,
  logout,
};

// Correct - memoized
const value = useMemo(
  () => ({
    user,
    login,
    logout,
  }),
  [user]
);
```

#### 3. Performance issues

**Problem**: Too many re-renders when context changes. **Solution**: Split
context or use React.memo to optimize child components.

#### 4. Testing context

```javascript
// Test utility
const renderWithContext = (component, contextValue) => {
  return render(
    <MyContext.Provider value={contextValue}>{component}</MyContext.Provider>
  );
};
```

---

## Conclusion

The React Context API is a powerful tool for managing global state and avoiding
prop drilling. When used correctly with proper patterns and optimizations, it
can significantly improve your application's architecture and maintainability.
Remember to keep contexts focused, provide good defaults, and consider
performance implications when designing your context structure.

**[⬆ Back to Top](#table-of-contents)**
