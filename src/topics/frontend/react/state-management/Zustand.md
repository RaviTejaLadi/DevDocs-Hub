# Zustand: A Simple State Management Solution

## Table of Contents

- [What is Zustand?](#what-is-zustand?)
- [Key Benefits](#key-benefits:)
- [Complete Setup Guide](#complete-setup-guide)
- [Example 1: Basic Counter Store](#example-1:-basic-counter-store)
- [Example 2: Todo List with Async Actions](#example-2:-todo-list-with-async-actions)
- [Best Practices](#best-practices)
- [Error Handling](#error-handling)
- [Debugging](#debugging)
- [Easy-to-Remember Summary](#easy-to-remember-summary)

## What is Zustand?

Zustand (German for "state") is a lightweight state management library for React
that provides a simple API to manage global state without the complexity of
Redux or Context API.

## Key Benefits:

- Minimal boilerplate
- No providers needed (unlike Context API)
- Can be used outside React components
- Built-in middleware support
- Excellent TypeScript support

## Complete Setup Guide

### 1. Install Zustand

```bash
npm install zustand
# or
yarn add zustand
```

## Example 1: Basic Counter Store

```tsx
// stores/counterStore.ts
import { create } from 'zustand';

interface CounterState {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

export const useCounterStore = create<CounterState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}));

// components/Counter.tsx
import { useCounterStore } from '../stores/counterStore';

export function Counter() {
  const { count, increment, decrement, reset } = useCounterStore();

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
```

## Example 2: Todo List with Async Actions

```tsx
// stores/todoStore.ts
import { create } from 'zustand';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoState {
  todos: Todo[];
  loading: boolean;
  error: string | null;
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
  fetchTodos: () => Promise<void>;
}

export const useTodoStore = create<TodoState>((set) => ({
  todos: [],
  loading: false,
  error: null,
  addTodo: (text) =>
    set((state) => ({
      todos: [...state.todos, { id: Date.now(), text, completed: false }],
    })),
  toggleTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    })),
  fetchTodos: async () => {
    set({ loading: true, error: null });
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos'
      );
      const data = await response.json();
      set({ todos: data.slice(0, 5), loading: false });
    } catch (err) {
      set({ error: 'Failed to fetch todos', loading: false });
    }
  },
}));

// components/TodoList.tsx
import { useEffect } from 'react';
import { useTodoStore } from '../stores/todoStore';

export function TodoList() {
  const { todos, loading, error, addTodo, toggleTodo, fetchTodos } =
    useTodoStore();

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Todos</h2>
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
          </li>
        ))}
      </ul>
      <button onClick={() => addTodo(`New Todo ${todos.length + 1}`)}>
        Add Todo
      </button>
    </div>
  );
}
```

## Best Practices

1. **Organize Stores**: Keep each store in its own file under a `stores`
   directory
2. **Type Safety**: Always define interfaces for your state
3. **Selective State**: Use selectors to prevent unnecessary re-renders

   ```tsx
   // Instead of:
   const { count } = useCounterStore();

   // Better:
   const count = useCounterStore((state) => state.count);
   ```

4. **Derived State**: Compute derived values in the store

   ```tsx
   // In your store:
   totalTodos: (state) => state.todos.length,
   completedTodos: (state) => state.todos.filter(todo => todo.completed).length,
   ```

5. **Middleware**: Use middleware for logging, persistence, etc.

   ```tsx
   import { create } from 'zustand';
   import { persist } from 'zustand/middleware';

   export const useStore = create(persist(
     (set) => ({ ... }),
     { name: 'store-name' }
   ));
   ```

## Error Handling

1. **Async Actions**: Always handle errors in async operations

   ```tsx
   fetchTodos: async () => {
     set({ loading: true, error: null });
     try {
       // API call
     } catch (err) {
       set({ error: err.message, loading: false });
     }
   },
   ```

2. **Boundary Checks**: Validate inputs in actions
   ```tsx
   addTodo: (text) => {
     if (!text.trim()) {
       set({ error: 'Todo text cannot be empty' });
       return;
     }
     // Proceed with adding
   },
   ```

## Debugging

1. **Log State Changes**:

   ```tsx
   import { devtools } from 'zustand/middleware';

   export const useStore = create(devtools(store));
   ```

2. **React DevTools**: Inspect the Zustand store in React DevTools

3. **Console Logging**:

   ```tsx
   // Subscribe to store changes
   const unsubscribe = useStore.subscribe((state) =>
     console.log('State changed:', state)
   );

   // Remember to unsubscribe in useEffect cleanup
   useEffect(() => () => unsubscribe(), []);
   ```

## Easy-to-Remember Summary

1. **Create Store**: `create` with state + actions
2. **Use Store**: `useStore()` hook in components
3. **Update State**: `set` function in actions
4. **TypeScript**: Define interfaces for type safety
5. **Optimize**: Use selectors to prevent re-renders
6. **Debug**: Use devtools middleware
7. **Async**: Handle loading/error states

Zustand keeps state management simple while being powerful enough for most
applications!

**[⬆ Back to Top](#table-of-contents)**
