# Objects

## Object Type

```ts
const user: {
  name: string;
  age: number;
} = {
  name: 'Ravi',
  age: 25,
};
```

## Nested Object

```ts
const employee: {
  name: string;
  address: {
    city: string;
  };
} = {
  name: 'John',
  address: {
    city: 'Delhi',
  },
};
```

## Interview Angle

Objects are usually asked with API modeling and optional/nested properties.

## Better Reuse With Types

```ts
type Address = { city: string; country?: string };
type Employee = { name: string; address: Address };

const emp: Employee = { name: 'Ravi', address: { city: 'Bengaluru' } };
```

## Pitfalls

- Avoid repeating inline object types; use `type`/`interface` for reuse.
- Be careful with optional nested fields from backend responses.

## Common Interview Question

"How would you model partially loaded user profile data?"
