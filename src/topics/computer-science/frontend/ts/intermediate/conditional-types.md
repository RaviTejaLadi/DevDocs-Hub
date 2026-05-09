# Conditional Types

## Definition

Conditional types choose one type or another based on a condition.

## Example

```ts
type IsString<T> = T extends string ? true : false;

type A = IsString<string>; // true
type B = IsString<number>; // false
```

## Interview Angle

Key for advanced utility types and generic APIs.

## Pitfalls

- Distribution over unions can be surprising; test with examples.
