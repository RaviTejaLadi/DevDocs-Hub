# Arrays

## Array Syntax

```ts
const numbers: number[] = [1, 2, 3];
```

## Generic Array Syntax

```ts
const users: Array<string> = ['A', 'B'];
```

## Readonly Array

```ts
const ids: readonly number[] = [1, 2];
```

## Interview Angle

Array questions test type modeling, immutability, and safe transforms.

## Common Patterns

```ts
type User = { id: number; name: string };

const users: User[] = [
  { id: 1, name: 'A' },
  { id: 2, name: 'B' },
];

const names = users.map((u) => u.name); // string[]
```

## Pitfalls

- `readonly` blocks mutation methods like `push`.
- Mixed arrays should usually be represented with unions intentionally, not by accident.

## Practice Prompt

"Given `Product[]`, return only in-stock product ids as `number[]`."
