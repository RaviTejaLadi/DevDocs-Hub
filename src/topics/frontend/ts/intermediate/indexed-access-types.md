# Indexed Access Types

## Definition

Access property types using bracket notation on types.

## Example

```ts
type User = {
  id: string;
  name: string;
  age: number;
};

type UserName = User['name']; // string
type UserValue = User['name' | 'age']; // string | number
```

## Interview Angle

Important for building reusable typed selectors and APIs.

## Pitfalls

- Accessing invalid keys causes compile-time errors (which is good).
