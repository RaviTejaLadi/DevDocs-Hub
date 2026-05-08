# infer Keyword

## Definition

`infer` captures a type inside conditional types.

## Example

```ts
type GetReturnType<T> = T extends (...args: never[]) => infer R ? R : never;

type R1 = GetReturnType<() => string>; // string
```

## Interview Angle

`infer` is a frequent advanced interview question in TypeScript-heavy roles.

## Pitfall

Avoid unreadable one-liners; prefer small named utility types.
