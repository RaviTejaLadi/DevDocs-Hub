# React Hooks Guide

## Introduction to Hooks

Hooks are like "magic functions" that let you "hook into" React features (like
state & lifecycle) from function components. They make React code cleaner and
easier to reuse.

---

## Basic Hooks

### `useState`

**Definition:** Lets you add state to functional components.  
**Syntax:**

```js
const [state, setState] = useState(initialValue);
```

**Example (Counter):**

```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

---

### `useEffect`

**Definition:** Runs side effects (like API calls, timers) after render.  
**Syntax:**

```js
useEffect(() => {
  /* effect */
}, [dependencies]);
```

**Example (Fetch Data):**

```jsx
import { useState, useEffect } from 'react';

function FetchData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []); // Empty array = runs once

  return <div>{data ? data.message : 'Loading...'}</div>;
}
```

---

### `useContext`

**Definition:** Lets you use React Context (global state) without nesting.  
**Syntax:**

```js
const value = useContext(MyContext);
```

**Example (Theme Toggler):**

```jsx
import { useContext, createContext, useState } from 'react';

const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Toggle Theme ({theme})
    </button>
  );
}
```

---

## Advanced Hooks

### `useReducer`

**Definition:** Like `useState` but for complex state logic (like Redux).  
**Syntax:**

```js
const [state, dispatch] = useReducer(reducer, initialState);
```

**Example (Todo List):**

```jsx
import { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { text: action.text, completed: false }];
    default:
      return state;
  }
}

function TodoList() {
  const [todos, dispatch] = useReducer(reducer, []);

  return (
    <div>
      <button onClick={() => dispatch({ type: 'ADD_TODO', text: 'New Todo' })}>
        Add Todo
      </button>
      <ul>
        {todos.map((todo, i) => (
          <li key={i}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}
```

---

### `useCallback`

**Definition:** Memoizes a function to prevent unnecessary re-renders.  
**Syntax:**

```js
const memoizedFn = useCallback(() => {
  /* function */
}, [deps]);
```

**Example (Optimized Button):**

```jsx
import { useCallback, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => setCount((c) => c + 1), []);

  return <button onClick={increment}>Count: {count}</button>;
}
```

---

### `useMemo`

**Definition:** Memoizes a value to avoid expensive calculations.  
**Syntax:**

```js
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

**Example (Expensive Calculation):**

```jsx
import { useMemo, useState } from 'react';

function ExpensiveComponent({ a, b }) {
  const result = useMemo(() => {
    console.log('Calculating...');
    return a * b;
  }, [a, b]);

  return <div>Result: {result}</div>;
}
```

---

### `useRef`

**Definition:** Keeps a mutable ref object (like `document.getElementById`).  
**Syntax:**

```js
const ref = useRef(initialValue);
```

**Example (Focus Input):**

```jsx
import { useRef } from 'react';

function FocusInput() {
  const inputRef = useRef();

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>Focus</button>
    </div>
  );
}
```

---

### `useImperativeHandle`

**Definition:** Customizes what a parent component sees in `ref`.  
**Syntax:**

```js
useImperativeHandle(ref, () => ({ method: () => {} }), [deps]);
```

**Example (Exposing Child Methods):**

```jsx
import { forwardRef, useImperativeHandle, useRef } from 'react';

const Child = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    sayHello: () => alert('Hello from Child!'),
  }));
  return <div>Child Component</div>;
});

function Parent() {
  const childRef = useRef();
  return (
    <div>
      <Child ref={childRef} />
      <button onClick={() => childRef.current.sayHello()}>Call Child</button>
    </div>
  );
}
```

---

### `useLayoutEffect`

**Definition:** Like `useEffect` but runs synchronously after DOM updates.  
**Syntax:**

```js
useLayoutEffect(() => {
  /* effect */
}, [deps]);
```

**Example (Measure DOM Element):**

```jsx
import { useLayoutEffect, useRef, useState } from 'react';

function MeasureDiv() {
  const [width, setWidth] = useState(0);
  const divRef = useRef();

  useLayoutEffect(() => {
    setWidth(divRef.current.offsetWidth);
  }, []);

  return <div ref={divRef}>Width: {width}px</div>;
}
```

---

### `useDebugValue`

**Definition:** Adds a label to custom hooks in React DevTools.  
**Syntax:**

```js
useDebugValue(value);
```

**Example (Debug Custom Hook):**

```jsx
import { useDebugValue, useState } from 'react';

function useCounter() {
  const [count, setCount] = useState(0);
  useDebugValue(`Count: ${count}`);
  return [count, setCount];
}

function App() {
  const [count] = useCounter();
  return <div>Count: {count}</div>;
}
```
