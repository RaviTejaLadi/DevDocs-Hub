# Nullish Coalescing

## Definition

Provides fallback only for `null` or `undefined`.

## Syntax

```ts
const username = value ?? 'Guest';
```

## Difference from ||

```ts
const result = 0 || 10; // 10
const safe = 0 ?? 10; // 0
```

## Interview Angle

Interviewers check whether you understand when `||` breaks valid falsy values.

## Good Defaults Pattern

```ts
function getPageSize(value: number | null | undefined): number {
  return value ?? 20;
}
```

## Pitfalls

- `||` treats `0`, `''`, and `false` as fallback triggers.
- `??` should be used when only `null`/`undefined` are considered missing.
