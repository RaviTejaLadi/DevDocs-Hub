# typeof Operator

## Definition

`typeof` extracts a type from a runtime value.

## Example

```ts
const settings = {
  darkMode: true,
  pageSize: 20,
};

type Settings = typeof settings;
```

## Interview Angle

Useful when you want one source of truth for both runtime object and compile-time type.

## Common Pattern

```ts
const routes = {
  home: '/',
  profile: '/profile',
} as const;

type RouteName = keyof typeof routes;
```
