# Modules and Imports

## Export

```ts
export const name = 'Ravi';
```

## Import

```ts
import { name } from './user';
```

## Default Export

```ts
export default function greet() {}
```

## Default Import

```ts
import greet from './greet';
```

## Interview Angle

Strong answers explain default vs named exports and how module boundaries improve
maintainability.

## Recommended Pattern

```ts
// user.service.ts
export function getUser() {}
export function updateUser() {}

// index.ts (barrel)
export * from './user.service';
```

## Pitfalls

- Mixing too many default exports makes refactors harder.
- Circular imports can cause undefined values at runtime.
