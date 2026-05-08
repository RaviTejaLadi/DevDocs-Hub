# Type Inference

## Definition

TypeScript automatically detects the type.

## Example

```ts
let username = 'Ravi'; // inferred as string
```

```ts
let count = 10; // inferred as number
```

## Best Practice

Use inference when type is obvious.

## Interview Angle

Good TypeScript style balances **explicitness and inference**.
Interviewers often check if you know where inference fails.

## When To Annotate Explicitly

- Function return types in shared modules.
- Empty arrays/objects where inference becomes `never[]` or `{}`.
- Complex unions that must stay stable across refactors.

## Pitfalls

```ts
const items = []; // inferred as any[] (or never[] depending on context)
items.push('A');
```

Prefer:

```ts
const items: string[] = [];
```
