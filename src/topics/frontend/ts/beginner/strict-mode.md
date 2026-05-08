# Strict Mode

## Definition

Enables stricter type checking.

## Enable

```json
{
  "compilerOptions": {
    "strict": true
  }
}
```

## Important Strict Checks

| Option              | Purpose                 |
| ------------------- | ----------------------- |
| noImplicitAny       | Prevents implicit any   |
| strictNullChecks    | Proper null handling    |
| strictFunctionTypes | Safer function typing   |
| noUnusedLocals      | Detect unused variables |

## Example

```ts
function greet(name) {
  return name;
}
```

Error because `name` becomes implicit `any`.

Correct:

```ts
function greet(name: string) {
  return name;
}
```

## Interview Angle

`strict` mode indicates engineering maturity; it catches bugs early and improves
confidence in refactors.

## Migration Strategy (Commonly Asked)

1. Enable `strict` in CI first with `noEmit`.
2. Fix high-impact modules first (API/data layer).
3. Avoid disabling flags globally; use targeted fixes.

## Practical Tip

Run this command in pipelines:

```bash
npx tsc --noEmit
```
