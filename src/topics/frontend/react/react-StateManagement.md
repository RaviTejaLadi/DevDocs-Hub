# React State Management - Complete Guide

## Table of Contents

1. [Introduction to State](#introduction-to-state)
2. [useState Hook](#usestate-hook)
3. [useReducer Hook](#usereducer-hook)
4. [Context API](#context-api)
5. [State Lifting](#state-lifting)
6. [Local vs Global State](#local-vs-global-state)
7. [Advanced State Patterns](#advanced-state-patterns)
8. [Best Practices](#best-practices)

---

## Introduction to State

### Definition

State in React represents data that can change over time and affects what gets
rendered on the screen. When state changes, React automatically re-renders the
component to reflect the new state.

### Key Characteristics

- **Mutable**: State can be updated during the component's lifecycle
- **Local**: Each component instance has its own state
- **Reactive**: Changes trigger re-renders automatically
- **Preserved**: State persists between re-renders

### Types of State

1. **Local State**: Managed within a single component
2. **Shared State**: Shared between multiple components
3. **Global State**: Available throughout the entire application
4. **Server State**: Data fetched from external sources

### State vs Props

| State                 | Props              |
| --------------------- | ------------------ |
| Mutable               | Immutable          |
| Owned by component    | Passed from parent |
| Can be changed        | Read-only          |
| Internal to component | External input     |

---

## useState Hook

### Definition

`useState` is a React Hook that allows functional components to have local
state. It returns an array with the current state value and a function to update
it.

### Syntax

```jsx
const [state, setState] = useState(initialValue);
```

### Basic Usage

#### Simple State

```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
```

#### Multiple State Variables

```jsx
function UserForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState(0);
  const [isSubscribed, setIsSubscribed] = useState(false);

  return (
    <form>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(parseInt(e.target.value))}
      />
      <label>
        <input
          type="checkbox"
          checked={isSubscribed}
          onChange={(e) => setIsSubscribed(e.target.checked)}
        />
        Subscribe to newsletter
      </label>
    </form>
  );
}
```

### Advanced useState Patterns

#### Object State

```jsx
function UserProfile() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    preferences: {
      theme: 'light',
      notifications: true,
    },
  });

  const updateUser = (field, value) => {
    setUser((prevUser) => ({
      ...prevUser,
      [field]: value,
    }));
  };

  const updatePreference = (preference, value) => {
    setUser((prevUser) => ({
      ...prevUser,
      preferences: {
        ...prevUser.preferences,
        [preference]: value,
      },
    }));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        value={user.name}
        onChange={(e) => updateUser('name', e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={user.email}
        onChange={(e) => updateUser('email', e.target.value)}
      />
      <select
        value={user.preferences.theme}
        onChange={(e) => updatePreference('theme', e.target.value)}
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
      <label>
        <input
          type="checkbox"
          checked={user.preferences.notifications}
          onChange={(e) => updatePreference('notifications', e.target.checked)}
        />
        Enable notifications
      </label>
    </div>
  );
}
```

#### Array State

```jsx
function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos((prevTodos) => [
        ...prevTodos,
        {
          id: Date.now(),
          text: inputValue,
          completed: false,
        },
      ]);
      setInputValue('');
    }
  };

  const removeTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a todo..."
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => removeTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

#### Functional State Updates

```jsx
function Calculator() {
  const [result, setResult] = useState(0);
  const [history, setHistory] = useState([]);

  const performOperation = (operation, value) => {
    setResult((prevResult) => {
      const newResult = operation(prevResult, value);

      // Update history using functional update
      setHistory((prevHistory) => [
        ...prevHistory,
        {
          operation: `${prevResult} → ${newResult}`,
          timestamp: new Date().toLocaleTimeString(),
        },
      ]);

      return newResult;
    });
  };

  const add = (value) => performOperation((a, b) => a + b, value);
  const subtract = (value) => performOperation((a, b) => a - b, value);
  const multiply = (value) => performOperation((a, b) => a * b, value);
  const divide = (value) => performOperation((a, b) => a / b, value);

  const clear = () => {
    setResult(0);
    setHistory([]);
  };

  return (
    <div>
      <div>Result: {result}</div>
      <div>
        <button onClick={() => add(5)}>+5</button>
        <button onClick={() => subtract(3)}>-3</button>
        <button onClick={() => multiply(2)}>×2</button>
        <button onClick={() => divide(2)}>÷2</button>
        <button onClick={clear}>Clear</button>
      </div>
      <div>
        <h3>History:</h3>
        {history.map((entry, index) => (
          <div key={index}>
            {entry.operation} at {entry.timestamp}
          </div>
        ))}
      </div>
    </div>
  );
}
```

#### Lazy Initial State

```jsx
function ExpensiveComponent() {
  // Expensive computation only runs once
  const [data, setData] = useState(() => {
    console.log('Computing initial state...');
    return Array.from({ length: 1000 }, (_, i) => ({
      id: i,
      value: Math.random(),
    }));
  });

  const refreshData = () => {
    setData((prevData) =>
      prevData.map((item) => ({
        ...item,
        value: Math.random(),
      }))
    );
  };

  return (
    <div>
      <button onClick={refreshData}>Refresh Data</button>
      <div>Items: {data.length}</div>
    </div>
  );
}
```

---

## useReducer Hook

### Definition

`useReducer` is a React Hook that provides an alternative to `useState` for
managing complex state logic. It's particularly useful when state transitions
depend on the previous state or when managing multiple related state variables.

### Syntax

```jsx
const [state, dispatch] = useReducer(reducer, initialState);
```

### Basic Usage

#### Simple Counter with useReducer

```jsx
import React, { useReducer } from 'react';

// Reducer function
function counterReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    case 'SET':
      return { count: action.payload };
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}

function Counter() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-1</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
      <button onClick={() => dispatch({ type: 'SET', payload: 10 })}>
        Set to 10
      </button>
    </div>
  );
}
```

### Complex State Management

#### Todo Application with useReducer

```jsx
function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            text: action.payload,
            completed: false,
          },
        ],
      };

    case 'REMOVE_TODO':
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };

    case 'EDIT_TODO':
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, text: action.payload.text }
            : todo
        ),
      };

    case 'SET_FILTER':
      return {
        ...state,
        filter: action.payload,
      };

    case 'CLEAR_COMPLETED':
      return {
        ...state,
        todos: state.todos.filter((todo) => !todo.completed),
      };

    default:
      return state;
  }
}

function TodoApp() {
  const [state, dispatch] = useReducer(todoReducer, {
    todos: [],
    filter: 'all',
  });

  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim()) {
      dispatch({ type: 'ADD_TODO', payload: inputValue });
      setInputValue('');
    }
  };

  const filteredTodos = state.todos.filter((todo) => {
    if (state.filter === 'active') return !todo.completed;
    if (state.filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <div>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a todo..."
        />
        <button onClick={addTodo}>Add</button>
      </div>

      <div>
        <button
          onClick={() => dispatch({ type: 'SET_FILTER', payload: 'all' })}
          style={{ fontWeight: state.filter === 'all' ? 'bold' : 'normal' }}
        >
          All
        </button>
        <button
          onClick={() => dispatch({ type: 'SET_FILTER', payload: 'active' })}
          style={{ fontWeight: state.filter === 'active' ? 'bold' : 'normal' }}
        >
          Active
        </button>
        <button
          onClick={() => dispatch({ type: 'SET_FILTER', payload: 'completed' })}
          style={{
            fontWeight: state.filter === 'completed' ? 'bold' : 'normal',
          }}
        >
          Completed
        </button>
        <button onClick={() => dispatch({ type: 'CLEAR_COMPLETED' })}>
          Clear Completed
        </button>
      </div>

      <ul>
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}
            onRemove={() => dispatch({ type: 'REMOVE_TODO', payload: todo.id })}
            onEdit={(text) =>
              dispatch({
                type: 'EDIT_TODO',
                payload: { id: todo.id, text },
              })
            }
          />
        ))}
      </ul>
    </div>
  );
}

function TodoItem({ todo, onToggle, onRemove, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    onEdit(editText);
    setIsEditing(false);
  };

  return (
    <li>
      <input type="checkbox" checked={todo.completed} onChange={onToggle} />
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button onClick={handleEdit}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <div>
          <span
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
            }}
          >
            {todo.text}
          </span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={onRemove}>Remove</button>
        </div>
      )}
    </li>
  );
}
```

#### Form State Management

```jsx
function formReducer(state, action) {
  switch (action.type) {
    case 'SET_FIELD':
      return {
        ...state,
        values: {
          ...state.values,
          [action.field]: action.value,
        },
        errors: {
          ...state.errors,
          [action.field]: '',
        },
      };

    case 'SET_ERROR':
      return {
        ...state,
        errors: {
          ...state.errors,
          [action.field]: action.error,
        },
      };

    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.payload,
      };

    case 'RESET_FORM':
      return {
        values: { name: '', email: '', password: '' },
        errors: {},
        isLoading: false,
      };

    default:
      return state;
  }
}

function RegistrationForm() {
  const [state, dispatch] = useReducer(formReducer, {
    values: { name: '', email: '', password: '' },
    errors: {},
    isLoading: false,
  });

  const validateField = (field, value) => {
    let error = '';

    switch (field) {
      case 'name':
        if (!value.trim()) error = 'Name is required';
        else if (value.length < 2) error = 'Name must be at least 2 characters';
        break;
      case 'email':
        if (!value.trim()) error = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(value)) error = 'Email is invalid';
        break;
      case 'password':
        if (!value) error = 'Password is required';
        else if (value.length < 6)
          error = 'Password must be at least 6 characters';
        break;
    }

    if (error) {
      dispatch({ type: 'SET_ERROR', field, error });
    }

    return !error;
  };

  const handleChange = (field, value) => {
    dispatch({ type: 'SET_FIELD', field, value });
  };

  const handleBlur = (field) => {
    validateField(field, state.values[field]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = Object.keys(state.values).every((field) =>
      validateField(field, state.values[field])
    );

    if (isValid) {
      dispatch({ type: 'SET_LOADING', payload: true });

      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log('Form submitted:', state.values);
        dispatch({ type: 'RESET_FORM' });
      } catch (error) {
        console.error('Submission failed:', error);
      } finally {
        dispatch({ type: 'SET_LOADING', payload: false });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={state.values.name}
          onChange={(e) => handleChange('name', e.target.value)}
          onBlur={() => handleBlur('name')}
        />
        {state.errors.name && (
          <span className="error">{state.errors.name}</span>
        )}
      </div>

      <div>
        <input
          type="email"
          placeholder="Email"
          value={state.values.email}
          onChange={(e) => handleChange('email', e.target.value)}
          onBlur={() => handleBlur('email')}
        />
        {state.errors.email && (
          <span className="error">{state.errors.email}</span>
        )}
      </div>

      <div>
        <input
          type="password"
          placeholder="Password"
          value={state.values.password}
          onChange={(e) => handleChange('password', e.target.value)}
          onBlur={() => handleBlur('password')}
        />
        {state.errors.password && (
          <span className="error">{state.errors.password}</span>
        )}
      </div>

      <button type="submit" disabled={state.isLoading}>
        {state.isLoading ? 'Registering...' : 'Register'}
      </button>
    </form>
  );
}
```

---

## Context API

### Definition

The Context API provides a way to share data between components without having
to pass props down manually at every level. It's designed for sharing data that
can be considered "global" for a tree of React components.

### Basic Context Setup

#### Creating and Using Context

```jsx
import React, { createContext, useContext, useState } from 'react';

// Create Context
const ThemeContext = createContext();

// Provider Component
function ThemeProvider({ children }) {
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
}

// Custom Hook for using Theme Context
function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

// Components using the context
function App() {
  return (
    <ThemeProvider>
      <Header />
      <MainContent />
      <Footer />
    </ThemeProvider>
  );
}

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

function MainContent() {
  const { theme } = useTheme();

  return (
    <main
      style={{
        backgroundColor: theme === 'light' ? '#f5f5f5' : '#222',
        color: theme === 'light' ? '#333' : '#fff',
        minHeight: '400px',
      }}
    >
      <p>This is the main content area.</p>
      <UserProfile />
    </main>
  );
}

function UserProfile() {
  const { theme } = useTheme();

  return (
    <div
      style={{
        border: `1px solid ${theme === 'light' ? '#ccc' : '#555'}`,
        padding: '10px',
        margin: '10px',
      }}
    >
      <h3>User Profile</h3>
      <p>Theme: {theme}</p>
    </div>
  );
}

function Footer() {
  const { theme } = useTheme();

  return (
    <footer
      style={{
        backgroundColor: theme === 'light' ? '#e9e9e9' : '#111',
        color: theme === 'light' ? '#333' : '#fff',
        padding: '20px',
        textAlign: 'center',
      }}
    >
      <p>&copy; 2024 My App</p>
    </footer>
  );
}
```

### Complex Context with useReducer

#### Authentication Context

```jsx
import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Auth Context
const AuthContext = createContext();

// Auth Reducer
function authReducer(state, action) {
  switch (action.type) {
    case 'LOGIN_START':
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        user: action.payload,
        error: null,
      };

    case 'LOGIN_FAILURE':
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };

    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        error: null,
      };

    case 'UPDATE_USER':
      return {
        ...state,
        user: { ...state.user, ...action.payload },
      };

    default:
      return state;
  }
}

// Auth Provider
function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, {
    isAuthenticated: false,
    user: null,
    isLoading: false,
    error: null,
  });

  // Check for existing session on mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Validate token and get user info
      validateToken(token);
    }
  }, []);

  const validateToken = async (token) => {
    dispatch({ type: 'LOGIN_START' });
    try {
      // Simulate API call
      const response = await fetch('/api/verify-token', {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.ok) {
        const user = await response.json();
        dispatch({ type: 'LOGIN_SUCCESS', payload: user });
      } else {
        localStorage.removeItem('token');
        dispatch({ type: 'LOGIN_FAILURE', payload: 'Invalid token' });
      }
    } catch (error) {
      dispatch({ type: 'LOGIN_FAILURE', payload: error.message });
    }
  };

  const login = async (credentials) => {
    dispatch({ type: 'LOGIN_START' });
    try {
      // Simulate login API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (
        credentials.email === 'user@example.com' &&
        credentials.password === 'password'
      ) {
        const user = {
          id: 1,
          email: credentials.email,
          name: 'John Doe',
        };
        const token = 'fake-jwt-token';

        localStorage.setItem('token', token);
        dispatch({ type: 'LOGIN_SUCCESS', payload: user });
      } else {
        dispatch({ type: 'LOGIN_FAILURE', payload: 'Invalid credentials' });
      }
    } catch (error) {
      dispatch({ type: 'LOGIN_FAILURE', payload: error.message });
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    dispatch({ type: 'LOGOUT' });
  };

  const updateUser = (userData) => {
    dispatch({ type: 'UPDATE_USER', payload: userData });
  };

  const value = {
    ...state,
    login,
    logout,
    updateUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Custom hook
function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

// Login Component
function LoginForm() {
  const { login, isLoading, error } = useAuth();
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    login(credentials);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="email"
          placeholder="Email"
          value={credentials.email}
          onChange={(e) =>
            setCredentials((prev) => ({
              ...prev,
              email: e.target.value,
            }))
          }
          required
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          value={credentials.password}
          onChange={(e) =>
            setCredentials((prev) => ({
              ...prev,
              password: e.target.value,
            }))
          }
          required
        />
      </div>
      {error && <div className="error">{error}</div>}
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Logging in...' : 'Login'}
      </button>
    </form>
  );
}

// Protected Route Component
function ProtectedRoute({ children }) {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? children : <LoginForm />;
}

// Dashboard Component
function Dashboard() {
  const { user, logout, updateUser } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user?.name || '');

  const handleUpdateName = () => {
    updateUser({ name });
    setIsEditing(false);
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <p>Welcome, {user?.name}!</p>
        <p>Email: {user?.email}</p>

        {isEditing ? (
          <div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button onClick={handleUpdateName}>Save</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        ) : (
          <button onClick={() => setIsEditing(true)}>Edit Name</button>
        )}

        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
}

// App with Auth
function App() {
  return (
    <AuthProvider>
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    </AuthProvider>
  );
}
```

### Multiple Contexts

```jsx
// Multiple context providers
function AppProviders({ children }) {
  return (
    <AuthProvider>
      <ThemeProvider>
        <NotificationProvider>
          <SettingsProvider>{children}</SettingsProvider>
        </NotificationProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}

// Component using multiple contexts
function Header() {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const { showNotification } = useNotification();
  const { settings } = useSettings();

  const handleLogout = () => {
    logout();
    showNotification('Logged out successfully', 'success');
  };

  return (
    <header className={`header ${theme}`}>
      <h1>Welcome, {user?.name}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <button onClick={handleLogout}>Logout</button>
    </header>
  );
}
```

---

## State Lifting

### Definition

State lifting is the process of moving state up to the closest common ancestor
of components that need to share that state. This allows multiple child
components to access and modify the same state.

### Basic State Lifting Example

```jsx
// Parent component manages shared state
function TemperatureApp() {
  const [temperature, setTemperature] = useState(0);
  const [scale, setScale] = useState('celsius');

  const handleCelsiusChange = (value) => {
    setTemperature(value);
    setScale('celsius');
  };

  const handleFahrenheitChange = (value) => {
    setTemperature(value);
    setScale('fahrenheit');
  };

  const celsius = scale === 'fahrenheit' ? toCelsius(temperature) : temperature;
  const fahrenheit =
    scale === 'celsius' ? toFahrenheit(temperature) : temperature;

  return (
    <div>
      <TemperatureInput
        scale="celsius"
        temperature={celsius}
        onTemperatureChange={handleCelsiusChange}
      />
      <TemperatureInput
        scale="fahrenheit"
        temperature={fahrenheit}
        onTemperatureChange={handleFahrenheitChange}
      />
      <BoilingVerdict celsius={parseFloat(celsius)} />
    </div>
  );
}

// Child components receive state and callbacks as props
function TemperatureInput({ scale, temperature, onTemperatureChange }) {
  const scaleNames = {
    celsius: 'Celsius',
    fahrenheit: 'Fahrenheit',
  };

  return (
    <fieldset>
      <legend>Enter temperature in {scaleNames[scale]}:</legend>
      <input
        value={temperature}
        onChange={(e) => onTemperatureChange(e.target.value)}
      />
    </fieldset>
  );
}

function BoilingVerdict({ celsius }) {
  if (celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

// Utility functions
function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}
```

### Complex State Lifting Example

```jsx
// Shopping Cart Application
function ShoppingApp() {
  const [products] = useState([
    { id: 1, name: 'Laptop', price: 999, stock: 5 },
    { id: 2, name: 'Phone', price: 699, stock: 10 },
    { id: 3, name: 'Tablet', price: 399, stock: 8 },
  ]);

  const [cart, setCart] = useState([]);
  const [user, setUser] = useState({ name: 'John Doe', balance: 2000 });

  const addToCart = (productId, quantity = 1) => {
    const product = products.find((p) => p.id === productId);
    if (!product || product.stock < quantity) return;

    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.productId === productId
      );
      if (existingItem) {
        return prevCart.map((item) =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevCart, { productId, quantity, price: product.price }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.productId !== productId)
    );
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCart((prevCart) =>
      prevCart.map((item) =>
        item.productId === productId ? { ...item, quantity } : item
      )
    );
  };

  const checkout = () => {
    const total = getCartTotal();
    if (user.balance >= total) {
      setUser((prevUser) => ({
        ...prevUser,
        balance: prevUser.balance - total,
      }));
      setCart([]);
      alert('Purchase successful!');
    } else {
      alert('Insufficient balance!');
    }
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getCartItemsCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div>
      <Header user={user} cartItemsCount={getCartItemsCount()} />
      <ProductList products={products} onAddToCart={addToCart} />
      <Cart
        cart={cart}
        products={products}
        onUpdateQuantity={updateQuantity}
        onRemoveFromCart={removeFromCart}
        onCheckout={checkout}
        total={getCartTotal()}
        userBalance={user.balance}
      />
    </div>
  );
}

function Header({ user, cartItemsCount }) {
  return (
    <header>
      <h1>Shopping App</h1>
      <div>
        <span>Welcome, {user.name}</span>
        <span>Balance: ${user.balance}</span>
        <span>Cart ({cartItemsCount})</span>
      </div>
    </header>
  );
}

function ProductList({ products, onAddToCart }) {
  return (
    <div>
      <h2>Products</h2>
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}

function ProductItem({ product, onAddToCart }) {
  return (
    <div className="product-item">
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <p>Stock: {product.stock}</p>
      <button
        onClick={() => onAddToCart(product.id)}
        disabled={product.stock === 0}
      >
        Add to Cart
      </button>
    </div>
  );
}

function Cart({
  cart,
  products,
  onUpdateQuantity,
  onRemoveFromCart,
  onCheckout,
  total,
  userBalance,
}) {
  if (cart.length === 0) {
    return <div>Your cart is empty</div>;
  }

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.map((item) => {
        const product = products.find((p) => p.id === item.productId);
        return (
          <CartItem
            key={item.productId}
            item={item}
            product={product}
            onUpdateQuantity={onUpdateQuantity}
            onRemove={onRemoveFromCart}
          />
        );
      })}
      <div>
        <h3>Total: ${total}</h3>
        <button onClick={onCheckout} disabled={userBalance < total}>
          Checkout
        </button>
      </div>
    </div>
  );
}

function CartItem({ item, product, onUpdateQuantity, onRemove }) {
  return (
    <div className="cart-item">
      <h4>{product.name}</h4>
      <p>Price: ${item.price}</p>
      <div>
        <button
          onClick={() => onUpdateQuantity(item.productId, item.quantity - 1)}
        >
          -
        </button>
        <span>Quantity: {item.quantity}</span>
        <button
          onClick={() => onUpdateQuantity(item.productId, item.quantity + 1)}
        >
          +
        </button>
      </div>
      <p>Subtotal: ${item.price * item.quantity}</p>
      <button onClick={() => onRemove(item.productId)}>Remove</button>
    </div>
  );
}
```

---

## Local vs Global State

### Local State

State that belongs to a single component and doesn't need to be shared.

#### When to Use Local State

- Form input values
- UI state (modals, dropdowns, toggles)
- Component-specific data
- Temporary state

#### Examples of Local State

```jsx
// Modal component with local state
function Modal({ isOpen, onClose, children }) {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
    }
  }, [isOpen]);

  if (!isOpen && !isAnimating) return null;

  return (
    <div
      className={`modal ${isAnimating ? 'modal-open' : ''}`}
      onClick={onClose}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

// Search component with local state
function SearchComponent({ onSearch }) {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (query.length > 2) {
      setIsLoading(true);
      // Simulate API call for suggestions
      setTimeout(() => {
        setSuggestions([
          `${query} suggestion 1`,
          `${query} suggestion 2`,
          `${query} suggestion 3`,
        ]);
        setIsLoading(false);
      }, 300);
    } else {
      setSuggestions([]);
    }
  }, [query]);

  return (
    <div className="search-component">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      {isLoading && <div>Loading suggestions...</div>}
      {suggestions.length > 0 && (
        <ul className="suggestions">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => {
                setQuery(suggestion);
                onSearch(suggestion);
                setSuggestions([]);
              }}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
```

### Global State

State that needs to be accessed by multiple components across the application.

#### When to Use Global State

- User authentication
- Application theme
- Language/localization
- Shopping cart contents
- Notifications
- App-wide settings

#### Global State Implementation

```jsx
// Global App State using Context + useReducer
const AppStateContext = createContext();

function appStateReducer(state, action) {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };

    case 'SET_THEME':
      return { ...state, theme: action.payload };

    case 'ADD_NOTIFICATION':
      return {
        ...state,
        notifications: [...state.notifications, action.payload],
      };

    case 'REMOVE_NOTIFICATION':
      return {
        ...state,
        notifications: state.notifications.filter(
          (n) => n.id !== action.payload
        ),
      };

    case 'SET_LANGUAGE':
      return { ...state, language: action.payload };

    case 'UPDATE_SETTINGS':
      return {
        ...state,
        settings: { ...state.settings, ...action.payload },
      };

    default:
      return state;
  }
}

function AppStateProvider({ children }) {
  const [state, dispatch] = useReducer(appStateReducer, {
    user: null,
    theme: 'light',
    language: 'en',
    notifications: [],
    settings: {
      emailNotifications: true,
      pushNotifications: false,
      autoSave: true,
    },
  });

  // Actions
  const setUser = (user) => {
    dispatch({ type: 'SET_USER', payload: user });
  };

  const setTheme = (theme) => {
    dispatch({ type: 'SET_THEME', payload: theme });
    localStorage.setItem('theme', theme);
  };

  const addNotification = (message, type = 'info') => {
    const notification = {
      id: Date.now(),
      message,
      type,
      timestamp: new Date(),
    };
    dispatch({ type: 'ADD_NOTIFICATION', payload: notification });

    // Auto-remove after 5 seconds
    setTimeout(() => {
      dispatch({ type: 'REMOVE_NOTIFICATION', payload: notification.id });
    }, 5000);
  };

  const removeNotification = (id) => {
    dispatch({ type: 'REMOVE_NOTIFICATION', payload: id });
  };

  const setLanguage = (language) => {
    dispatch({ type: 'SET_LANGUAGE', payload: language });
    localStorage.setItem('language', language);
  };

  const updateSettings = (newSettings) => {
    dispatch({ type: 'UPDATE_SETTINGS', payload: newSettings });
  };

  const value = {
    ...state,
    setUser,
    setTheme,
    addNotification,
    removeNotification,
    setLanguage,
    updateSettings,
  };

  return (
    <AppStateContext.Provider value={value}>
      {children}
    </AppStateContext.Provider>
  );
}

function useAppState() {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error('useAppState must be used within an AppStateProvider');
  }
  return context;
}

// Components using global state
function Navbar() {
  const { user, theme, setTheme, addNotification } = useAppState();

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    addNotification(`Switched to ${newTheme} theme`, 'success');
  };

  return (
    <nav className={`navbar ${theme}`}>
      <div>Welcome, {user?.name || 'Guest'}</div>
      <button onClick={toggleTheme}>{theme === 'light' ? '🌙' : '☀️'}</button>
    </nav>
  );
}

function NotificationCenter() {
  const { notifications, removeNotification } = useAppState();

  return (
    <div className="notification-center">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className={`notification ${notification.type}`}
        >
          <span>{notification.message}</span>
          <button onClick={() => removeNotification(notification.id)}>×</button>
        </div>
      ))}
    </div>
  );
}
```

---

## Advanced State Patterns

### Custom Hooks for State Logic

```jsx
// Custom hook for form state management
function useForm(initialValues, validationSchema) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const setValue = (name, value) => {
    setValues((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const setTouched = (name) => {
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const validate = () => {
    const newErrors = {};

    Object.keys(validationSchema).forEach((field) => {
      const rules = validationSchema[field];
      const value = values[field];

      for (const rule of rules) {
        if (!rule.test(value)) {
          newErrors[field] = rule.message;
          break;
        }
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (onSubmit) => {
    setIsSubmitting(true);

    // Mark all fields as touched
    const allTouched = Object.keys(initialValues).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {});
    setTouched(allTouched);

    if (validate()) {
      try {
        await onSubmit(values);
      } catch (error) {
        console.error('Form submission error:', error);
      }
    }

    setIsSubmitting(false);
  };

  const reset = () => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
    setIsSubmitting(false);
  };

  return {
    values,
    errors,
    touched,
    isSubmitting,
    setValue,
    setTouched,
    handleSubmit,
    reset,
    isValid: Object.keys(errors).length === 0,
  };
}

// Usage of custom form hook
function ContactForm() {
  const validationSchema = {
    name: [
      {
        test: (value) => value && value.trim().length > 0,
        message: 'Name is required',
      },
      {
        test: (value) => value && value.length >= 2,
        message: 'Name must be at least 2 characters',
      },
    ],
    email: [
      {
        test: (value) => value && value.trim().length > 0,
        message: 'Email is required',
      },
      {
        test: (value) => /\S+@\S+\.\S+/.test(value),
        message: 'Email is invalid',
      },
    ],
    message: [
      {
        test: (value) => value && value.trim().length > 0,
        message: 'Message is required',
      },
      {
        test: (value) => value && value.length >= 10,
        message: 'Message must be at least 10 characters',
      },
    ],
  };

  const form = useForm({ name: '', email: '', message: '' }, validationSchema);

  const onSubmit = async (values) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('Form submitted:', values);
    form.reset();
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit(onSubmit);
      }}
    >
      <div>
        <input
          type="text"
          placeholder="Name"
          value={form.values.name}
          onChange={(e) => form.setValue('name', e.target.value)}
          onBlur={() => form.setTouched('name')}
        />
        {form.touched.name && form.errors.name && (
          <span className="error">{form.errors.name}</span>
        )}
      </div>

      <div>
        <input
          type="email"
          placeholder="Email"
          value={form.values.email}
          onChange={(e) => form.setValue('email', e.target.value)}
          onBlur={() => form.setTouched('email')}
        />
        {form.touched.email && form.errors.email && (
          <span className="error">{form.errors.email}</span>
        )}
      </div>

      <div>
        <textarea
          placeholder="Message"
          value={form.values.message}
          onChange={(e) => form.setValue('message', e.target.value)}
          onBlur={() => form.setTouched('message')}
        />
        {form.touched.message && form.errors.message && (
          <span className="error">{form.errors.message}</span>
        )}
      </div>

      <button type="submit" disabled={form.isSubmitting || !form.isValid}>
        {form.isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
```

### State Machine Pattern

```jsx
// Simple state machine for data fetching
function useAsyncState() {
  const [state, setState] = useState({
    status: 'idle', // idle | loading | success | error
    data: null,
    error: null,
  });

  const execute = async (asyncFunction) => {
    setState({ status: 'loading', data: null, error: null });

    try {
      const data = await asyncFunction();
      setState({ status: 'success', data, error: null });
      return data;
    } catch (error) {
      setState({ status: 'error', data: null, error });
      throw error;
    }
  };

  const reset = () => {
    setState({ status: 'idle', data: null, error: null });
  };

  return {
    ...state,
    execute,
    reset,
    isIdle: state.status === 'idle',
    isLoading: state.status === 'loading',
    isSuccess: state.status === 'success',
    isError: state.status === 'error',
  };
}

// Usage of async state hook
function UserProfile({ userId }) {
  const asyncState = useAsyncState();

  useEffect(() => {
    if (userId) {
      asyncState.execute(async () => {
        const response = await fetch(`/api/users/${userId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch user');
        }
        return response.json();
      });
    }
  }, [userId]);

  if (asyncState.isIdle) {
    return <div>Select a user to view profile</div>;
  }

  if (asyncState.isLoading) {
    return <div>Loading user profile...</div>;
  }

  if (asyncState.isError) {
    return (
      <div>
        <div>Error: {asyncState.error.message}</div>
        <button onClick={() => asyncState.execute(() => fetchUser(userId))}>
          Retry
        </button>
      </div>
    );
  }

  if (asyncState.isSuccess && asyncState.data) {
    return (
      <div>
        <h2>{asyncState.data.name}</h2>
        <p>{asyncState.data.email}</p>
        <p>{asyncState.data.bio}</p>
      </div>
    );
  }

  return null;
}
```

---

## Best Practices

### State Structure Best Practices

#### 1. Keep State Flat

```jsx
// Good: Flat state structure
const [user, setUser] = useState({
  id: 1,
  name: 'John',
  email: 'john@example.com',
});

const [preferences, setPreferences] = useState({
  theme: 'light',
  notifications: true,
});

// Avoid: Deeply nested state
const [appState, setAppState] = useState({
  user: {
    profile: {
      personal: {
        name: 'John',
        email: 'john@example.com',
      },
    },
  },
});
```

#### 2. Group Related State

```jsx
// Good: Related state grouped together
const [formState, setFormState] = useState({
  values: { name: '', email: '' },
  errors: {},
  isSubmitting: false,
});

// Less ideal: Separate state for related data
const [formValues, setFormValues] = useState({ name: '', email: '' });
const [formErrors, setFormErrors] = useState({});
const [isSubmitting, setIsSubmitting] = useState(false);
```

#### 3. Use Proper State Updates

```jsx
// Good: Functional updates for state that depends on previous state
const increment = () => {
  setCount((prevCount) => prevCount + 1);
};

// Good: Spread operator for object updates
const updateUser = (newData) => {
  setUser((prevUser) => ({ ...prevUser, ...newData }));
};

// Avoid: Direct state mutation
const badUpdate = () => {
  user.name = 'New Name'; // This won't trigger re-render
  setUser(user);
};
```

### Performance Optimization

#### 1. Minimize Re-renders

```jsx
// Use React.memo for expensive components
const ExpensiveComponent = React.memo(function ExpensiveComponent({
  data,
  onUpdate,
}) {
  // Expensive rendering logic
  return <div>{/* Rendered content */}</div>;
});

// Use useCallback for event handlers
function ParentComponent() {
  const [items, setItems] = useState([]);

  const handleItemUpdate = useCallback((id, newData) => {
    setItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, ...newData } : item))
    );
  }, []);

  return (
    <div>
      {items.map((item) => (
        <ExpensiveComponent
          key={item.id}
          data={item}
          onUpdate={handleItemUpdate}
        />
      ))}
    </div>
  );
}
```

#### 2. Optimize Context Usage

```jsx
// Split contexts to prevent unnecessary re-renders
const UserContext = createContext();
const ThemeContext = createContext();
const SettingsContext = createContext();

// Instead of one large context
const AppContext = createContext();
```

#### 3. Use Local State When Possible

```jsx
// Good: Keep UI state local
function Dropdown({ options, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>Toggle Dropdown</button>
      {isOpen && (
        <ul>
          {options.map((option) => (
            <li key={option.id} onClick={() => onSelect(option)}>
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
```

### State Management Guidelines

#### 1. Choose the Right Tool

- **useState**: Simple local state
- **useReducer**: Complex state logic with multiple related values
- **Context**: Avoiding prop drilling for global state
- **External libraries**: Very complex global state management

#### 2. Error Boundaries for State Errors

```jsx
class StateErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('State error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong with the application state.</h1>;
    }

    return this.props.children;
  }
}
```

#### 3. Testing State Logic

```jsx
// Custom hook for testing
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
}

// Test example (using React Testing Library)
import { renderHook, act } from '@testing-library/react';

test('useCounter should increment count', () => {
  const { result } = renderHook(() => useCounter(0));

  act(() => {
    result.current.increment();
  });

  expect(result.current.count).toBe(1);
});
```

This comprehensive guide covers all aspects of React State Management, from
basic useState to complex patterns with Context API and custom hooks. Each
section provides practical examples and best practices to help you effectively
manage state in your React applications.
