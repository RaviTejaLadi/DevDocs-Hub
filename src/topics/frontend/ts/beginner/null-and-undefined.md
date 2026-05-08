# Null and Undefined

## Definition

Represents empty or missing values.

## Example

```ts
let value: null = null;
let data: undefined = undefined;
```

## Union Usage

```ts
let username: string | null = null;
```

## Interview Angle

Null handling is a frequent source of production bugs; interviewers expect
clear handling strategy under `strictNullChecks`.

## Safe Guard Pattern

```ts
function printLength(value: string | null) {
  if (value === null) return 0;
  return value.length;
}
```

## Pitfalls

- `undefined` often means "not provided", `null` often means "explicitly empty".
- Avoid non-null assertion (`!`) unless you can prove runtime safety.
