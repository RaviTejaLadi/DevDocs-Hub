# Redux Toolkit: Simplified Guide

Redux Toolkit (RTK) is the official, opinionated, batteries-included toolset for
efficient Redux development. It simplifies most Redux tasks, prevents common
mistakes, and makes your Redux code simpler and easier to maintain.

## Table of Contents

- [Why Redux Toolkit?](#why-redux-toolkit?)
- [Complete Setup Guide](#complete-setup-guide)
- [Creating Two Basic Slices](#creating-two-basic-slices)
- [Using Redux in Components](#using-redux-in-components)
- [Best Practices](#best-practices)
- [Error Handling](#error-handling)
- [Debugging](#debugging)
- [Easy-to-Remember Summary](#easy-to-remember-summary)

## Why Redux Toolkit?

- Simplifies Redux setup
- Reduces boilerplate code
- Includes useful utilities like `createSlice`, `createAsyncThunk`
- Comes with Redux Thunk middleware by default
- Includes DevTools integration

## Complete Setup Guide

### 1. Install Required Packages

```bash
npm install @reduxjs/toolkit react-redux
```

### 2. Create a Basic Store

```javascript
// app/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import userReducer from '../features/users/userSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
  },
});
```

### 3. Provide the Store to Your React App

```javascript
// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './app/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

## Creating Two Basic Slices

### 1. Counter Slice Example

```javascript
// features/counter/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  status: 'idle', // 'idle' | 'loading' | 'failed'
  error: null,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, reset } =
  counterSlice.actions;

// Selectors
export const selectCount = (state) => state.counter.value;
export const selectCounterStatus = (state) => state.counter.status;

export default counterSlice.reducer;
```

### 2. User Slice Example with Async Thunk

```javascript
// features/users/userSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  users: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

// Async thunk for fetching users
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/users'
  );
  return response.data;
});

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    removeUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
    resetUsers: (state) => {
      state.users = [];
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

// Action creators
export const { addUser, removeUser, resetUsers } = userSlice.actions;

// Selectors
export const selectAllUsers = (state) => state.users.users;
export const selectUsersStatus = (state) => state.users.status;
export const selectUsersError = (state) => state.users.error;

export default userSlice.reducer;
```

## Using Redux in Components

### Counter Component Example

```javascript
// features/counter/Counter.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectCount,
  increment,
  decrement,
  incrementByAmount,
  reset,
} from './counterSlice';

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>Add 5</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}
```

### Users Component Example

```javascript
// features/users/UsersList.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectAllUsers,
  selectUsersStatus,
  selectUsersError,
  fetchUsers,
} from './userSlice';

export function UsersList() {
  const users = useSelector(selectAllUsers);
  const status = useSelector(selectUsersStatus);
  const error = useSelector(selectUsersError);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUsers());
    }
  }, [status, dispatch]);

  let content;

  if (status === 'loading') {
    content = <div>Loading...</div>;
  } else if (status === 'succeeded') {
    content = users.map((user) => (
      <div key={user.id}>
        <h3>{user.name}</h3>
        <p>{user.email}</p>
      </div>
    ));
  } else if (status === 'failed') {
    content = <div>{error}</div>;
  }

  return (
    <section>
      <h2>Users</h2>
      {content}
    </section>
  );
}
```

## Best Practices

1. **Organize by Feature**: Keep all Redux logic for a feature in a single file
   (the "slice" pattern).

2. **Use createSlice**: Always use `createSlice` to generate reducers and
   actions.

3. **Immutable Updates**: Write "mutating" logic in reducers (it's converted to
   immutable updates internally).

4. **Normalize Data**: Keep state normalized (flattened) for better performance.

5. **Use Selectors**: Create and export selector functions for accessing state.

6. **Async Logic**: Use `createAsyncThunk` for async operations.

7. **Type Safety**: Consider using TypeScript for better type safety.

## Error Handling

1. **In Async Thunks**:

   - Use the `rejected` case in `extraReducers`
   - Store error messages in state
   - Display meaningful error messages to users

2. **In Components**:
   - Check status and error from state
   - Show loading/error states appropriately

```javascript
// Example error handling in component
if (status === 'failed') {
  return <div>Error: {error}</div>;
}
```

## Debugging

1. **Redux DevTools**:

   - Included automatically with Redux Toolkit
   - Access via browser extension
   - View action history, state diffs, and dispatch actions manually

2. **Logging Middleware**:

   ```javascript
   const store = configureStore({
     reducer: rootReducer,
     middleware: (getDefaultMiddleware) =>
       getDefaultMiddleware().concat(logger),
   });
   ```

3. **Debugging Tips**:
   - Check action types in DevTools
   - Verify payloads are correct
   - Look at state before/after each action
   - Use the RTK Query dev tools if using RTK Query

## Easy-to-Remember Summary

1. **Setup**:

   - `configureStore` for store
   - `Provider` at top level

2. **Slices**:

   - `createSlice` for reducers + actions
   - `createAsyncThunk` for async

3. **Components**:

   - `useSelector` to read state
   - `useDispatch` to send actions

4. **Best Practices**:

   - Feature organization
   - Selector functions
   - Status tracking

5. **Debugging**:
   - DevTools extension
   - Action/state logging

Redux Toolkit simplifies Redux by providing these utilities while enforcing best
practices, making your Redux code more maintainable and less error-prone.

**[⬆ Back to Top](#table-of-contents)**
