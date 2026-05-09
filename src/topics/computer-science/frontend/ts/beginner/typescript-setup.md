# TypeScript Setup

## Definition

TypeScript is a superset of JavaScript that adds static typing and compile-time
checks.

## Install

```bash
npm install -D typescript
```

## Initialize Project

```bash
npx tsc --init
```

## Compile TypeScript

```bash
npx tsc
```

## Run TS File Directly

```bash
npm install -D ts-node
```

```bash
npx ts-node index.ts
```

## Interview Angle

- Explain **why teams use TypeScript**: safer refactors, better IDE autocomplete, and fewer runtime bugs.
- Mention that TypeScript checks happen at **build time**, not runtime.

## Production Setup Checklist

```bash
npm install -D typescript ts-node @types/node
```

```json
{
  "scripts": {
    "typecheck": "tsc --noEmit",
    "build": "tsc -p tsconfig.json",
    "dev": "ts-node src/index.ts"
  }
}
```

## Common Interview Questions

1. What is the difference between TypeScript and JavaScript?
2. Does TypeScript improve runtime performance?
3. Why run `tsc --noEmit` in CI?
