# Type-safe APIs

## Definition

Type-safe APIs keep request/response contracts explicit in TypeScript.

## Example

```ts
type User = { id: number; name: string };

async function api<T>(url: string): Promise<T> {
  const response = await fetch(url);
  return response.json() as Promise<T>;
}

const user = await api<User>('/api/user');
```

## Interview Angle

Focus on balancing compile-time safety with runtime validation.
