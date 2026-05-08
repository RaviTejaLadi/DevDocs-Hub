# Intersection Types

## Definition

Intersection types combine multiple types into one.

## Example

```ts
type User = { name: string };
type Admin = { role: string };
type AdminUser = User & Admin;
```

## Interview Angle

Useful for composing domain models from smaller reusable pieces.

## Pitfall

Conflicting property types in intersections can produce `never`.
