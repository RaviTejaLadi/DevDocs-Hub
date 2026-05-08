# Functions

## Function Types

```ts
function greet(name: string): string {
  return `Hello ${name}`;
}
```

## Optional Parameters

```ts
function login(username: string, password?: string) {}
```

## Default Parameters

```ts
function createUser(role: string = 'user') {}
```

## Arrow Functions

```ts
const multiply = (a: number, b: number): number => a * b;
```

## Interview Angle

Functions are a favorite interview topic because they combine parameters,
return types, optional/default args, and async behavior.

## Advanced Patterns

```ts
type Formatter = (value: string) => string;

function process(value: string, format: Formatter): string {
  return format(value);
}
```

```ts
function parse(value: string): number;
function parse(value: number): string;
function parse(value: string | number): string | number {
  return typeof value === 'string' ? Number(value) : String(value);
}
```

## Common Interview Questions

1. Difference between optional and default parameters?
2. When do you use function overloads vs union parameter types?
