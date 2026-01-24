# **React Query Hooks Syntax Guide**

## Table of Contents

- [1. useQuery - Fetch Data](#1.-usequery---fetch-data)
- [2. useMutation - Modify Data](#2.-usemutation---modify-data)
- [3. useQueryClient - Access Query Client](#3.-usequeryclient---access-query-client)
- [4. useInfiniteQuery - Paginated/Lazy Data](#4.-useinfinitequery---paginatedlazy-data)
- [5. useIsFetching - Global Loading Indicator](#5.-useisfetching---global-loading-indicator)
- [6. useQueries - Parallel Queries (Dynamic)](<#6.-usequeries---parallel-queries-(dynamic)>)
- [Key Patterns](#key-patterns)
- [TypeScript Tip](#typescript-tip)

## 1. useQuery - Fetch Data

```tsx
const {
  data, // The successful response data
  error, // Error object if request failed
  isLoading, // True on first load (no cached data)
  isError, // True if error occurred
  isSuccess, // True if data fetched successfully
  isFetching, // True whenever a request is in flight
  refetch, // Function to manually refetch
  status, // 'loading' | 'error' | 'success'
  fetchStatus, // 'fetching' | 'paused' | 'idle'
} = useQuery({
  queryKey: ['key', dependencies], // Unique array key
  queryFn: fetchFunction, // Promise-returning function
  staleTime: 0, // How long until data becomes stale
  cacheTime: 5 * 60 * 1000, // How long to keep unused cache
  retry: 3, // Retry attempts on failure
  enabled: true, // Enable/disable the query
  refetchOnWindowFocus: true, // Auto-refetch on window focus
  onSuccess: (data) => {}, // Success callback
  onError: (error) => {}, // Error callback
});
```

**Use Case:**  
Fetching data that you **READ** from the server (GET requests).

---

## 2. useMutation - Modify Data

```tsx
const {
  mutate, // Function to trigger mutation
  mutateAsync, // Async version of mutate
  data, // Response data
  error, // Error object
  isPending, // True during mutation
  isSuccess, // True after successful mutation
  isError, // True if mutation failed
  status, // 'idle' | 'pending' | 'error' | 'success'
  reset, // Reset mutation state
} = useMutation({
  mutationFn: (variables) => apiCall(variables),
  onSuccess: (data, variables) => {},
  onError: (error, variables) => {},
  onSettled: () => {}, // Runs on success or error
});
```

**Usage Example:**

```tsx
mutate({ id: 1, name: 'New Name' });
// or with async/await:
const result = await mutateAsync({ id: 1, name: 'New Name' });
```

**Use Case:**  
Creating, updating, or deleting data (POST/PUT/PATCH/DELETE requests).

---

## 3. useQueryClient - Access Query Client

```tsx
const queryClient = useQueryClient();

// Common methods:
queryClient.invalidateQueries({
  queryKey: ['posts'], // Refetch all matching queries
});

queryClient.setQueryData(
  ['post', id],
  newData // Manually update cached data
);

queryClient.prefetchQuery({
  queryKey: ['posts'],
  queryFn: fetchPosts,
});
```

**Use Case:**  
Managing cache, triggering refetches, or optimistic updates.

---

## 4. useInfiniteQuery - Paginated/Lazy Data

```tsx
const {
  data, // Contains pages[] array
  fetchNextPage, // Load next page
  hasNextPage, // Boolean if more pages exist
  isFetchingNextPage, // True during next page load
} = useInfiniteQuery({
  queryKey: ['posts'],
  queryFn: ({ pageParam = 1 }) => fetchPage(pageParam),
  initialPageParam: 1, // Required in v5+
  getNextPageParam: (lastPage) => lastPage.nextPage,
  getPreviousPageParam: (firstPage) => firstPage.prevPage,
});
```

**Usage Example:**

```tsx
// Render items
{
  data.pages.map((page) =>
    page.items.map((item) => <Item key={item.id} {...item} />)
  );
}

// "Load More" button
<button
  onClick={() => fetchNextPage()}
  disabled={!hasNextPage || isFetchingNextPage}
>
  Load More
</button>;
```

**Use Case:**  
Infinite scroll, pagination, or chunked data loading.

---

## 5. useIsFetching - Global Loading Indicator

```tsx
const isFetching = useIsFetching();
// Returns number of active fetches

// With query key filter:
const isPostsFetching = useIsFetching({
  queryKey: ['posts'],
});
```

**Use Case:**  
Show a global loading spinner when any queries are fetching.

---

## 6. useQueries - Parallel Queries (Dynamic)

```tsx
const results = useQueries({
  queries: [
    { queryKey: ['post', 1], queryFn: fetchPost },
    { queryKey: ['post', 2], queryFn: fetchPost },
  ],
});
// Returns array of query results
```

**Use Case:**  
When you need to fetch multiple items in parallel with dynamic keys.

---

## Key Patterns

### **1. Dependent Queries**

```tsx
// Query runs only after userId is available
const { data: user } = useQuery({
  queryKey: ['user', userId],
  queryFn: () => fetchUser(userId),
  enabled: !!userId, // Disables until userId exists
});
```

### **2. Optimistic Updates**

```tsx
useMutation({
  mutationFn: updateTodo,
  onMutate: async (newTodo) => {
    await queryClient.cancelQueries(['todos']);
    const prevTodos = queryClient.getQueryData(['todos']);
    queryClient.setQueryData(['todos'], (old) => [...old, newTodo]);
    return { prevTodos }; // For rollback
  },
  onError: (err, newTodo, context) => {
    queryClient.setQueryData(['todos'], context.prevTodos);
  },
});
```

### **3. Prefetching**

```tsx
// Prefetch data on hover
<Link
  to="/posts"
  onMouseEnter={() =>
    queryClient.prefetchQuery({
      queryKey: ['posts'],
      queryFn: fetchPosts,
    })
  }
>
  Posts
</Link>
```

---

## TypeScript Tip

Always type your hooks for full safety:

```tsx
// For queries
useQuery<Post[], Error>({...});

// For mutations
useMutation<ResponseData, Error, Variables>({...});
```

These hooks cover 95% of React-Query use cases. The library handles caching,
retries, deduping, and more automatically!

**[⬆ Back to Top](#table-of-contents)**
