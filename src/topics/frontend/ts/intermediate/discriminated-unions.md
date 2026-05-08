# Discriminated Unions

## Definition

A union with a shared literal field used for safe narrowing.

## Example

```ts
type Success = { status: 'success'; data: string };
type Failure = { status: 'error'; message: string };
type ApiResponse = Success | Failure;

function handleResponse(response: ApiResponse): string {
  if (response.status === 'success') return response.data;
  return response.message;
}
```

## Interview Angle

Preferred over loose unions because control flow is explicit and safe.
