# Generics Basics

## Definition

Reusable type-safe components.

## Generic Function

```ts
function identity<T>(value: T): T {
  return value;
}
```

## Usage

```ts
identity<string>('hello');
identity<number>(10);
```

## Generic Array

```ts
const items: Array<number> = [1, 2];
```

## Interview Angle

Generics measure whether you can write reusable logic while preserving type safety.

## Generic API Response

```ts
type ApiResponse<T> = {
  data: T;
  message: string;
};

const userResponse: ApiResponse<{ id: string; name: string }> = {
  data: { id: 'u1', name: 'Ravi' },
  message: 'ok',
};
```

## Pitfalls

- Overusing `<T = any>` removes the value of generics.
- Generic names should be meaningful (`TUser`, `TResult`) in complex types.
