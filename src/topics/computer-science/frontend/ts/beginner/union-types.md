# Union Types

## Definition

A value can be multiple possible types.

## Syntax

```ts
let id: string | number;
```

## Example

```ts
function print(value: string | number) {
  console.log(value);
}
```

## Interview Angle

Union types are tested to evaluate whether you can model real-world uncertainty
without using `any`.

## Real Example

```ts
type ApiStatus = 'idle' | 'loading' | 'success' | 'error';
let status: ApiStatus = 'idle';
```

## Pitfalls

- Accessing properties that are not shared across union members.
- Using broad unions (`string | number | boolean | object`) without narrowing strategy.
