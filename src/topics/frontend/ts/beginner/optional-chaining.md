# Optional Chaining

## Definition

Safely access nested properties.

## Syntax

```ts
const city = user?.address?.city;
```

## Function Call

```ts
callback?.();
```

## Interview Angle

Optional chaining prevents crashes when data is partially loaded or missing.

## Real-World Usage

```ts
type User = { profile?: { contact?: { email?: string } } };

function getEmail(user: User): string {
  return user.profile?.contact?.email ?? 'not-available';
}
```

## Pitfalls

- Optional chaining does not validate business rules; it only prevents throw.
- Overuse can hide where data should have been guaranteed.
