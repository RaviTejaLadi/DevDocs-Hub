# ReturnType Utility

## Definition

`ReturnType<T>` extracts the return type from a function type.

## Example

```ts
function getUser() {
  return { id: 'u1', name: 'Ravi' };
}

type User = ReturnType<typeof getUser>;
```

## Interview Angle

Useful to keep inferred return shapes in sync with implementation.
