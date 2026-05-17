# Exclude and Extract

## Definition

- `Exclude<T, U>` removes members from `T` that are assignable to `U`.
- `Extract<T, U>` keeps members from `T` that are assignable to `U`.

## Example

```ts
type Role = 'admin' | 'user' | 'guest';
type Allowed = Exclude<Role, 'guest'>; // 'admin' | 'user'
type Selected = Extract<Role, 'admin' | 'user'>; // 'admin' | 'user'
```

## Interview Angle

These are core for role-based filtering and event-type narrowing.
