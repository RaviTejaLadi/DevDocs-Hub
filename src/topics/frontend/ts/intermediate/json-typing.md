# JSON Typing

## Definition

JSON parsing should be typed and validated to avoid unsafe assumptions.

## Example

```ts
type Product = { id: number; title: string };

const raw = '{"id":1,"title":"Book"}';
const parsed = JSON.parse(raw) as Product;
```

## Interview Angle

Strong answer: "Type assertion is not runtime validation. Use schema validation for untrusted JSON."
