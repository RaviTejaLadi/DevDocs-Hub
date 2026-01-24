# **React-Query: Complete Guide with TypeScript**

## Table of Contents

- [What is React-Query?](#what-is-react-query?)
- [Advantages of React-Query](#advantages-of-react-query)
- [Complete Setup Guide with TypeScript (TSX)](<#complete-setup-guide-with-typescript-(tsx)>)
  - [1. Installation](#1.-installation)
  - [2. Basic Setup](#2.-basic-setup)
  - [3. Default Options Configuration](#3.-default-options-configuration)
  - [4. Basic Query Example](#4.-basic-query-example)
  - [5. Mutations (Creating/Updating Data)](<#5.-mutations-(creating/updating-data)>)
  - [6. Paginated Queries](#6.-paginated-queries)
- [Best Practices](#best-practices)

## What is React-Query?

React-Query is a powerful data-fetching library for React applications that:

- Manages server state
- Handles caching
- Provides background updates
- Manages request states (loading, error, success)
- Offers pagination, infinite loading, and mutation support

## Advantages of React-Query

1. **Simplified Data Fetching**: Reduces boilerplate code for API calls
2. **Automatic Caching**: Stores responses and intelligently reuses them
3. **Background Updates**: Silently refreshes stale data
4. **Optimistic Updates**: Allows UI updates before server confirmation
5. **Pagination Support**: Built-in hooks for paginated data
6. **TypeScript Support**: Excellent type inference and customization
7. **Devtools**: Built-in developer tools for debugging
8. **Window Focus Refetching**: Automatically refetches data when window regains
   focus

## Complete Setup Guide with TypeScript (TSX)

### 1. Installation

```bash
npm install @tanstack/react-query @tanstack/react-query-devtools
# or
yarn add @tanstack/react-query @tanstack/react-query-devtools
```

### 2. Basic Setup

Create a `QueryClientProvider` at the root of your application:

```tsx
// src/App.tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Todos from './Todos';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* Your application components */}
      <Todos />

      {/* Devtools (optional) */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
```

### 3. Default Options Configuration

Customize the default behavior:

```tsx
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      cacheTime: 1000 * 60 * 30, // 30 minutes
      retry: 2, // Will retry failed requests 2 times before displaying an error
      refetchOnWindowFocus: true,
    },
  },
});
```

### 4. Basic Query Example

```tsx
// src/components/Todos.tsx
import { useQuery } from '@tanstack/react-query';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const fetchTodos = async (): Promise<Todo[]> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

function Todos() {
  const { data, isLoading, isError, error } = useQuery<Todo[], Error>({
    queryKey: ['todos'],
    queryFn: fetchTodos,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Todos</h1>
      <ul>
        {data?.map((todo) => (
          <li key={todo.id}>
            {todo.title} - {todo.completed ? '✅' : '❌'}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
```

### 5. Mutations (Creating/Updating Data)

```tsx
// src/components/AddTodo.tsx
import { useMutation, useQueryClient } from '@tanstack/react-query';

interface NewTodo {
  title: string;
  completed: boolean;
}

const addTodo = async (newTodo: NewTodo): Promise<NewTodo> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newTodo),
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

function AddTodo() {
  const queryClient = useQueryClient();
  const mutation = useMutation<NewTodo, Error, NewTodo>({
    mutationFn: addTodo,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const title = formData.get('title') as string;

    mutation.mutate({ title, completed: false });
    form.reset();
  };

  return (
    <div>
      <h2>Add Todo</h2>
      <form onSubmit={handleSubmit}>
        <input name="title" required />
        <button type="submit" disabled={mutation.isLoading}>
          {mutation.isLoading ? 'Adding...' : 'Add Todo'}
        </button>
      </form>
      {mutation.isError && <div>Error: {mutation.error.message}</div>}
      {mutation.isSuccess && <div>Todo added successfully!</div>}
    </div>
  );
}

export default AddTodo;
```

### 6. Paginated Queries

```tsx
// src/components/PaginatedTodos.tsx
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const fetchPaginatedTodos = async (page: number): Promise<Todo[]> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=10`
  );
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

function PaginatedTodos() {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError, error, isPreviousData } = useQuery({
    queryKey: ['todos', page],
    queryFn: () => fetchPaginatedTodos(page),
    keepPreviousData: true,
  });

  return (
    <div>
      <h1>Paginated Todos</h1>
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error: {error.message}</div>
      ) : (
        <>
          <ul>
            {data?.map((todo) => (
              <li key={todo.id}>
                {todo.title} - {todo.completed ? '✅' : '❌'}
              </li>
            ))}
          </ul>
          <div>
            <button
              onClick={() => setPage((old) => Math.max(old - 1, 1))}
              disabled={page === 1}
            >
              Previous
            </button>
            <span>Current Page: {page}</span>
            <button
              onClick={() => {
                if (!isPreviousData) {
                  setPage((old) => old + 1);
                }
              }}
              disabled={isPreviousData || data?.length < 10}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default PaginatedTodos;
```

### 7. Infinite Queries

```tsx
// src/components/InfiniteTodos.tsx
import { useInfiniteQuery } from '@tanstack/react-query';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const fetchInfiniteTodos = async ({
  pageParam = 1,
}): Promise<{
  data: Todo[];
  nextPage: number | null;
}> => {
  const limit = 10;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos?_page=${pageParam}&_limit=${limit}`
  );
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return {
    data,
    nextPage: data.length === limit ? pageParam + 1 : null,
  };
};

function InfiniteTodos() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
    error,
  } = useInfiniteQuery({
    queryKey: ['infiniteTodos'],
    queryFn: fetchInfiniteTodos,
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });

  return (
    <div>
      <h1>Infinite Todos</h1>
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error: {error.message}</div>
      ) : (
        <>
          {data.pages.map((group, i) => (
            <div key={i}>
              {group.data.map((todo) => (
                <div key={todo.id}>
                  {todo.title} - {todo.completed ? '✅' : '❌'}
                </div>
              ))}
            </div>
          ))}
          <button
            onClick={() => fetchNextPage()}
            disabled={!hasNextPage || isFetchingNextPage}
          >
            {isFetchingNextPage
              ? 'Loading more...'
              : hasNextPage
              ? 'Load More'
              : 'Nothing more to load'}
          </button>
        </>
      )}
    </div>
  );
}

export default InfiniteTodos;
```

## Best Practices

1. **Query Keys**: Use structured query keys for better organization and
   invalidation

   ```tsx
   // Good
   ['todos', { status: 'done', page: 1 }];

   // Bad
   ('todos-done-page-1');
   ```

2. **Custom Hooks**: Encapsulate queries in custom hooks for reusability

   ```tsx
   export function useTodos() {
     return useQuery({
       queryKey: ['todos'],
       queryFn: fetchTodos,
     });
   }
   ```

3. **Error Handling**: Create a global error handler

   ```tsx
   const queryClient = new QueryClient({
     defaultOptions: {
       queries: {
         onError: (error) => {
           // Log to error reporting service
           console.error(error);
         },
       },
     },
   });
   ```

4. **Suspense**: Use with React Suspense for better loading states

   ```tsx
   const { data } = useQuery({
     queryKey: ['todos'],
     queryFn: fetchTodos,
     suspense: true,
   });
   ```

5. **Prefetching**: Prefetch data for better UX

   ```tsx
   const queryClient = useQueryClient();

   // Prefetch on hover
   <div onMouseEnter={() => queryClient.prefetchQuery(...)}>
   ```

React-Query significantly simplifies data management in React applications while
providing powerful features out of the box. The TypeScript integration ensures
type safety throughout your data fetching logic.

**[⬆ Back to Top](#table-of-contents)**
