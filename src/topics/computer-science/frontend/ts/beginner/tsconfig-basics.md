# tsconfig Basics

## Definition

`tsconfig.json` configures how TypeScript behaves.

## Common Config

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "strict": true,
    "rootDir": "./src",
    "outDir": "./dist",
    "moduleResolution": "Node",
    "esModuleInterop": true
  }
}
```

## Important Options

| Option          | Purpose                       |
| --------------- | ----------------------------- |
| target          | JS version output             |
| module          | Module system                 |
| strict          | Enables strict type checking  |
| rootDir         | Source folder                 |
| outDir          | Build folder                  |
| esModuleInterop | Better CommonJS compatibility |

## Interview Angle

`tsconfig.json` is often discussed as the **contract of type safety** for a
repo. Strong candidates can justify each key flag.

## High-Value Compiler Options

```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "noUncheckedIndexedAccess": true,
    "skipLibCheck": true
  }
}
```

## Pitfalls

- Turning `strict` off to "fix" errors usually hides real bugs.
- Keeping `rootDir` and project folders mismatched causes confusing build paths.

## Common Interview Questions

1. Why is `strictNullChecks` important in large codebases?
2. When would you use `skipLibCheck`?
