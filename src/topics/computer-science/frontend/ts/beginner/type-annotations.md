# Type Annotations

## Definition

Explicitly defining a variable's type.

## Syntax

```ts
let city: string = 'Bhubaneswar';
```

## Function Annotation

```ts
function add(a: number, b: number): number {
  return a + b;
}
```

## Interview Angle

Type annotations are most valuable at **public boundaries**: function params,
returns, APIs, and exported utilities.

## Real-World Example

```ts
type LoginResult = { token: string; expiresAt: number };

function login(email: string, password: string): Promise<LoginResult> {
  return fetch('/api/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  }).then((r) => r.json() as Promise<LoginResult>);
}
```

## Pitfalls

- Over-annotating local variables reduces readability when inference is enough.
- Missing return annotations in complex functions can hide accidental `any`.
