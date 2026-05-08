# Promise Typing

## Promise Type

```ts
function fetchUser(): Promise<string> {
  return Promise.resolve('Ravi');
}
```

## Async Return Type

```ts
async function getUser(): Promise<string> {
  return 'Ravi';
}
```

## Interview Angle

Promise typing shows whether you can model async API contracts correctly.

## Generic Promise Response

```ts
type ApiResult<T> = Promise<{ data: T; error: string | null }>;

function fetchProfile(): ApiResult<{ id: string; name: string }> {
  return Promise.resolve({ data: { id: '1', name: 'Ravi' }, error: null });
}
```

## Pitfalls

- Never use `Promise<any>` unless unavoidable.
- Ensure rejected states are represented (throw, union, or result object).
