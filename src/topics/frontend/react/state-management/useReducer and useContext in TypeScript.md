# State Management with useReducer and useContext in TypeScript

Here's a complete setup for state management using only React's built-in hooks
(`useReducer` and `useContext`) without any external packages. I'll provide 4
small examples with TypeScript typing.

## Table of Contents

- [1. Basic Counter Example](#1.-basic-counter-example)
- [2. Todo List Example](#2.-todo-list-example)
- [3. Theme Toggle Example](#3.-theme-toggle-example)
- [4. Form State Example](#4.-form-state-example)
- [Combined App Example](#combined-app-example)

## 1. Basic Counter Example

```tsx
import React, { createContext, useContext, useReducer, Dispatch } from 'react';

// 1. Define types
type CounterState = {
  count: number;
};

type CounterAction =
  | { type: 'increment' }
  | { type: 'decrement' }
  | { type: 'reset' };

// 2. Create context
const CounterContext = createContext<
  | {
      state: CounterState;
      dispatch: Dispatch<CounterAction>;
    }
  | undefined
>(undefined);

// 3. Create reducer
function counterReducer(
  state: CounterState,
  action: CounterAction
): CounterState {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      throw new Error('Unknown action type');
  }
}

// 4. Create provider component
const CounterProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

// 5. Create custom hook for consuming context
function useCounter() {
  const context = useContext(CounterContext);
  if (context === undefined) {
    throw new Error('useCounter must be used within a CounterProvider');
  }
  return context;
}

// 6. Example component using the counter
const CounterComponent: React.FC = () => {
  const { state, dispatch } = useCounter();

  return (
    <div>
      <h2>Counter: {state.count}</h2>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
};

// 7. App component that wraps everything with the provider
const App: React.FC = () => {
  return (
    <CounterProvider>
      <CounterComponent />
    </CounterProvider>
  );
};

export default App;
```

## 2. Todo List Example

```tsx
// Todo List Example
type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

type TodoState = {
  todos: Todo[];
};

type TodoAction =
  | { type: 'add'; text: string }
  | { type: 'toggle'; id: number }
  | { type: 'delete'; id: number };

const TodoContext = createContext<
  | {
      state: TodoState;
      dispatch: Dispatch<TodoAction>;
    }
  | undefined
>(undefined);

function todoReducer(state: TodoState, action: TodoAction): TodoState {
  switch (action.type) {
    case 'add':
      return {
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            text: action.text,
            completed: false,
          },
        ],
      };
    case 'toggle':
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    case 'delete':
      return {
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    default:
      throw new Error('Unknown action type');
  }
}

const TodoProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(todoReducer, { todos: [] });

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

function useTodos() {
  const context = useContext(TodoContext);
  if (context === undefined) {
    throw new Error('useTodos must be used within a TodoProvider');
  }
  return context;
}

const TodoList: React.FC = () => {
  const { state, dispatch } = useTodos();
  const [input, setInput] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch({ type: 'add', text: input });
      setInput('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a todo"
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {state.todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
              }}
              onClick={() => dispatch({ type: 'toggle', id: todo.id })}
            >
              {todo.text}
            </span>
            <button onClick={() => dispatch({ type: 'delete', id: todo.id })}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Add to App component:
// <TodoProvider>
//   <TodoList />
// </TodoProvider>
```

## 3. Theme Toggle Example

```tsx
// Theme Toggle Example
type ThemeState = {
  theme: 'light' | 'dark';
};

type ThemeAction = { type: 'toggle' };

const ThemeContext = createContext<
  | {
      state: ThemeState;
      dispatch: Dispatch<ThemeAction>;
    }
  | undefined
>(undefined);

function themeReducer(state: ThemeState, action: ThemeAction): ThemeState {
  switch (action.type) {
    case 'toggle':
      return {
        theme: state.theme === 'light' ? 'dark' : 'light',
      };
    default:
      throw new Error('Unknown action type');
  }
}

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(themeReducer, { theme: 'light' });

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

const ThemeToggle: React.FC = () => {
  const { state, dispatch } = useTheme();

  return (
    <div
      style={{
        background: state.theme === 'light' ? '#fff' : '#333',
        color: state.theme === 'light' ? '#000' : '#fff',
        padding: '20px',
        minHeight: '100vh',
      }}
    >
      <h2>Current Theme: {state.theme}</h2>
      <button onClick={() => dispatch({ type: 'toggle' })}>Toggle Theme</button>
    </div>
  );
};

// Add to App component:
// <ThemeProvider>
//   <ThemeToggle />
// </ThemeProvider>
```

## 4. Form State Example

```tsx
// Form State Example
type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  errors: {
    firstName?: string;
    lastName?: string;
    email?: string;
  };
};

type FormAction =
  | { type: 'updateField'; field: string; value: string }
  | { type: 'validate' }
  | { type: 'reset' };

const FormContext = createContext<
  | {
      state: FormState;
      dispatch: Dispatch<FormAction>;
    }
  | undefined
>(undefined);

function formReducer(state: FormState, action: FormAction): FormState {
  switch (action.type) {
    case 'updateField':
      return {
        ...state,
        [action.field]: action.value,
        errors: {
          ...state.errors,
          [action.field]: undefined,
        },
      };
    case 'validate':
      const errors: FormState['errors'] = {};
      if (!state.firstName) errors.firstName = 'First name is required';
      if (!state.lastName) errors.lastName = 'Last name is required';
      if (!state.email.includes('@')) errors.email = 'Invalid email';
      return { ...state, errors };
    case 'reset':
      return {
        firstName: '',
        lastName: '',
        email: '',
        errors: {},
      };
    default:
      throw new Error('Unknown action type');
  }
}

const FormProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(formReducer, {
    firstName: '',
    lastName: '',
    email: '',
    errors: {},
  });

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {children}
    </FormContext.Provider>
  );
};

function useForm() {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error('useForm must be used within a FormProvider');
  }
  return context;
}

const FormComponent: React.FC = () => {
  const { state, dispatch } = useForm();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({ type: 'validate' });

    // Check if there are no errors
    if (Object.values(state.errors).every((error) => !error)) {
      alert(`Form submitted: ${JSON.stringify(state, null, 2)}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name:</label>
        <input
          value={state.firstName}
          onChange={(e) =>
            dispatch({
              type: 'updateField',
              field: 'firstName',
              value: e.target.value,
            })
          }
        />
        {state.errors.firstName && (
          <span style={{ color: 'red' }}>{state.errors.firstName}</span>
        )}
      </div>
      <div>
        <label>Last Name:</label>
        <input
          value={state.lastName}
          onChange={(e) =>
            dispatch({
              type: 'updateField',
              field: 'lastName',
              value: e.target.value,
            })
          }
        />
        {state.errors.lastName && (
          <span style={{ color: 'red' }}>{state.errors.lastName}</span>
        )}
      </div>
      <div>
        <label>Email:</label>
        <input
          value={state.email}
          onChange={(e) =>
            dispatch({
              type: 'updateField',
              field: 'email',
              value: e.target.value,
            })
          }
        />
        {state.errors.email && (
          <span style={{ color: 'red' }}>{state.errors.email}</span>
        )}
      </div>
      <button type="submit">Submit</button>
      <button type="button" onClick={() => dispatch({ type: 'reset' })}>
        Reset
      </button>
    </form>
  );
};

// Add to App component:
// <FormProvider>
//   <FormComponent />
// </FormProvider>
```

## Combined App Example

Here's how you could combine all these examples in a single app:

```tsx
const App: React.FC = () => {
  return (
    <div>
      <CounterProvider>
        <h1>Counter Example</h1>
        <CounterComponent />
      </CounterProvider>

      <TodoProvider>
        <h1>Todo List Example</h1>
        <TodoList />
      </TodoProvider>

      <ThemeProvider>
        <h1>Theme Toggle Example</h1>
        <ThemeToggle />
      </ThemeProvider>

      <FormProvider>
        <h1>Form Example</h1>
        <FormComponent />
      </FormProvider>
    </div>
  );
};

export default App;
```

This setup demonstrates how to use `useReducer` and `useContext` for state
management in React with TypeScript. Each example follows the same pattern:

1. Define state and action types
2. Create a context
3. Create a reducer function
4. Create a provider component
5. Create a custom hook for consuming the context
6. Create components that use the state

This pattern provides a clean separation of concerns and makes your state
management predictable and type-safe.

**[⬆ Back to Top](#table-of-contents)**
