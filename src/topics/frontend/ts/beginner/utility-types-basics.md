# Utility Types Basics

## Partial

Makes all properties optional.

```ts
type User = {
  name: string;
  age: number;
};

type PartialUser = Partial<User>;
```

## Required

Makes all properties required.

```ts
type RequiredUser = Required<User>;
```

## Readonly

Makes properties immutable.

```ts
type ReadonlyUser = Readonly<User>;
```

## Pick

Select specific properties.

```ts
type UserPreview = Pick<User, 'name'>;
```

## Omit

Remove specific properties.

```ts
type UserWithoutAge = Omit<User, 'age'>;
```

## Record

Create object types dynamically.

```ts
type Users = Record<string, number>;
```

## Interview Angle

Utility types are asked frequently because they reduce duplication in real code.

## Practical Example

```ts
type User = { id: string; name: string; email: string; age: number };
type UserPatch = Partial<Pick<User, 'name' | 'email'>>;
```

## Quick Decision Guide

- `Partial<T>`: update forms / PATCH payloads.
- `Pick<T, K>`: API projection for list views.
- `Omit<T, K>`: remove sensitive/private fields.
- `Record<K, V>`: dictionaries/maps by key.
