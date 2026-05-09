# Primitive Types

## Definition

Basic built-in data types.

## Types

```ts
let username: string = 'Ravi';
let age: number = 25;
let isAdmin: boolean = true;
let value: null = null;
let data: undefined = undefined;
let id: symbol = Symbol();
let big: bigint = 123n;
```

## Interview Angle

Primitive types are used to test whether you understand **type safety at boundaries**
(API data, form values, and config inputs).

## Practical Example

```ts
function isEligible(age: number, isBlocked: boolean): boolean {
  return age >= 18 && !isBlocked;
}
```

## Pitfalls

- Avoid `Number`, `String`, `Boolean` object types; use `number`, `string`, `boolean`.
- `null` and `undefined` are distinct values, especially under strict null checks.

## Quick Interview Prompt

"Model a user id that can be `string` or `number`, and justify when you would
normalize it to one type."
