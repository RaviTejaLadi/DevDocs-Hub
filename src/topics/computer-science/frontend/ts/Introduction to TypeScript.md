# Introduction to TypeScript

## What is TypeScript?

TypeScript is a typed superset of JavaScript developed by Microsoft.  
It adds static type checking during development and compiles to plain JavaScript.

## Why use TypeScript?

- Catch errors earlier with compile-time checks
- Improve code readability with explicit types
- Get better IDE support (autocomplete, refactoring, navigation)
- Scale codebases more safely in team environments
- Adopt gradually in existing JavaScript projects

## Quick setup

```bash
npm install --save-dev typescript
npx tsc --init
```

Minimal `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "strict": true,
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src/**/*"]
}
```

Compile:

```bash
npx tsc
npx tsc --watch
```

## Core concepts

### Primitive types

```typescript
let username: string = 'Ravi';
let age: number = 25;
let isActive: boolean = true;
let nothing: null = null;
let notSet: undefined = undefined;
```

### Type inference and annotations

```typescript
let count = 10; // inferred as number
let title: string = 'TypeScript Basics'; // explicit annotation
```

### Functions

```typescript
function add(a: number, b: number): number {
  return a + b;
}

function greet(name: string, prefix = 'Hello'): string {
  return `${prefix}, ${name}`;
}
```

### Arrays, tuples, and objects

```typescript
const scores: number[] = [90, 85, 88];
const user: [number, string] = [1, 'Ravi'];

const profile: { name: string; city?: string } = {
  name: 'Ravi',
};
```

### Interfaces and type aliases

```typescript
interface User {
  id: number;
  name: string;
}

type Status = 'pending' | 'done';
```

### Union and literal types

```typescript
let id: string | number;
id = 'emp-101';
id = 101;

type Theme = 'light' | 'dark';
```

### Classes

```typescript
class Person {
  constructor(
    public name: string,
    private age: number
  ) {}

  getAge(): number {
    return this.age;
  }
}
```

### Generics

```typescript
function identity<T>(value: T): T {
  return value;
}

const text = identity<string>('hello');
const num = identity<number>(42);
```

### Modules

```typescript
// math.ts
export const add = (a: number, b: number) => a + b;

// app.ts
import { add } from './math';
```

## Strict mode and safe typing

- Keep `strict: true` enabled in `tsconfig.json`
- Prefer `unknown` over `any` when type is uncertain
- Use type narrowing (`typeof`, `in`, `instanceof`) before unsafe operations
- Use optional chaining (`?.`) and nullish coalescing (`??`) for nullable data

## Common beginner mistakes

- Using `any` everywhere
- Disabling strict checks too early
- Overusing type assertions (`as`) instead of narrowing
- Writing very complex types before mastering basics

## Next steps

- Practice by converting small JavaScript files to TypeScript
- Learn utility types: `Partial`, `Pick`, `Omit`, `Record`
- Explore framework usage (React, Node.js, Next.js)
- Study advanced topics after fundamentals are comfortable
