# **TODO Component**

## Table of Contents

1. [JavaScript Version](#javascript-version)
2. [TypeScript Version](#typescript-version)

## JavaScript Versions

### 1. Using useState

```jsx
import React, { useState } from 'react';

const TodoUseState = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
      setInput('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h2>TODO (useState)</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && addTodo()}
        placeholder="Add a new todo"
      />
      <button onClick={addTodo}>Add</button>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map((todo) => (
          <li key={todo.id} style={{ margin: '10px 0' }}>
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
            <button
              onClick={() => deleteTodo(todo.id)}
              style={{ marginLeft: '10px' }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoUseState;
```

### 2. Using useReducer

```jsx
import React, { useReducer } from 'react';

const initialState = {
  todos: [],
  input: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_INPUT':
      return { ...state, input: action.payload };
    case 'ADD_TODO':
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: Date.now(), text: state.input, completed: false },
        ],
        input: '',
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
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
};

const TodoUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addTodo = () => {
    if (state.input.trim()) {
      dispatch({ type: 'ADD_TODO' });
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h2>TODO (useReducer)</h2>
      <input
        type="text"
        value={state.input}
        onChange={(e) =>
          dispatch({ type: 'SET_INPUT', payload: e.target.value })
        }
        onKeyPress={(e) => e.key === 'Enter' && addTodo()}
        placeholder="Add a new todo"
      />
      <button onClick={addTodo}>Add</button>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {state.todos.map((todo) => (
          <li key={todo.id} style={{ margin: '10px 0' }}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() =>
                dispatch({ type: 'TOGGLE_TODO', payload: todo.id })
              }
            />
            <span
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
              }}
            >
              {todo.text}
            </span>
            <button
              onClick={() =>
                dispatch({ type: 'DELETE_TODO', payload: todo.id })
              }
              style={{ marginLeft: '10px' }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoUseReducer;
```

## TypeScript Versions

### 1. Using useState

```tsx
import React, { useState } from 'react';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoUseState: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState<string>('');

  const addTodo = (): void => {
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
      setInput('');
    }
  };

  const toggleTodo = (id: number): void => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number): void => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h2>TODO (useState)</h2>
      <input
        type="text"
        value={input}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setInput(e.target.value)
        }
        onKeyPress={(e: React.KeyboardEvent) => e.key === 'Enter' && addTodo()}
        placeholder="Add a new todo"
      />
      <button onClick={addTodo}>Add</button>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map((todo) => (
          <li key={todo.id} style={{ margin: '10px 0' }}>
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
            <button
              onClick={() => deleteTodo(todo.id)}
              style={{ marginLeft: '10px' }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoUseState;
```

### 2. Using useReducer

```tsx
import React, { useReducer } from 'react';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface State {
  todos: Todo[];
  input: string;
}

type Action =
  | { type: 'SET_INPUT'; payload: string }
  | { type: 'ADD_TODO' }
  | { type: 'TOGGLE_TODO'; payload: number }
  | { type: 'DELETE_TODO'; payload: number };

const initialState: State = {
  todos: [],
  input: '',
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_INPUT':
      return { ...state, input: action.payload };
    case 'ADD_TODO':
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: Date.now(), text: state.input, completed: false },
        ],
        input: '',
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
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
};

const TodoUseReducer: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addTodo = (): void => {
    if (state.input.trim()) {
      dispatch({ type: 'ADD_TODO' });
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h2>TODO (useReducer)</h2>
      <input
        type="text"
        value={state.input}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch({ type: 'SET_INPUT', payload: e.target.value })
        }
        onKeyPress={(e: React.KeyboardEvent) => e.key === 'Enter' && addTodo()}
        placeholder="Add a new todo"
      />
      <button onClick={addTodo}>Add</button>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {state.todos.map((todo) => (
          <li key={todo.id} style={{ margin: '10px 0' }}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() =>
                dispatch({ type: 'TOGGLE_TODO', payload: todo.id })
              }
            />
            <span
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
              }}
            >
              {todo.text}
            </span>
            <button
              onClick={() =>
                dispatch({ type: 'DELETE_TODO', payload: todo.id })
              }
              style={{ marginLeft: '10px' }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoUseReducer;
```
