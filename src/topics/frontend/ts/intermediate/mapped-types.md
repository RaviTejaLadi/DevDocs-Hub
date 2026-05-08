# Mapped Types

## Definition

Mapped types transform all properties of an existing type.

## Example

```ts
type Flags<T> = {
  [K in keyof T]: boolean;
};
```

```ts
type User = { name: string; age: number };
type UserFlags = Flags<User>; // { name: boolean; age: boolean }
```

## Interview Angle

Used internally by many utility types (`Partial`, `Readonly`, `Pick`).

## Practice Prompt

Create `Nullable<T>` so every property becomes `T[K] | null`.
