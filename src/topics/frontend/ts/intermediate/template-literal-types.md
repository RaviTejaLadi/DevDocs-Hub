# Template Literal Types

## Definition

Create string unions by combining other string literal unions.

## Example

```ts
type Size = 'sm' | 'md' | 'lg';
type ButtonClass = `btn-${Size}`;
```

## Interview Angle

Great for enforcing naming conventions (events, classes, keys).

## Practical Pattern

```ts
type EventName = 'click' | 'focus';
type HandlerName = `on${Capitalize<EventName>}`; // onClick | onFocus
```
