# Intermediate

---

# Generic Constraints

## Definition

Restrict generic types to specific structures.

## Syntax

```ts
function printLength<T extends { length: number }>(value: T) {
  console.log(value.length);
}
```

## Usage

```ts
printLength("hello");
printLength([1, 2, 3]);
```

## Invalid

```ts
printLength(100);
```

---

# keyof Operator

## Definition

Gets all keys from a type as a union.

## Syntax

```ts
type User = {
  name: string;
  age: number;
};

type UserKeys = keyof User;
```

## Result

```ts
"name" | "age"
```

## Example

```ts
function getValue<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}
```

---

# typeof Operator

## Definition

Extracts the type from a variable or object.

## Example

```ts
const user = {
  name: "Ravi",
  age: 25
};

type User = typeof user;
```

## Function Example

```ts
const settings = {
  darkMode: true
};

type Settings = typeof settings;
```

---

# Indexed Access Types

## Definition

Access a property type using brackets.

## Syntax

```ts
type User = {
  name: string;
  age: number;
};

type UserName = User["name"];
```

## Multiple Properties

```ts
type UserValues = User["name" | "age"];
```

---

# Mapped Types

## Definition

Create new types by transforming existing types.

## Basic Syntax

```ts
type Options<T> = {
  [K in keyof T]: boolean;
};
```

## Example

```ts
type User = {
  name: string;
  age: number;
};

type UserFlags = Options<User>;
```

## Result

```ts
{
  name: boolean;
  age: boolean;
}
```

---

# Conditional Types

## Definition

Apply types conditionally.

## Syntax

```ts
type IsString<T> = T extends string ? true : false;
```

## Usage

```ts
type A = IsString<string>;
type B = IsString<number>;
```

---

# Discriminated Unions

## Definition

Union types with a shared discriminating property.

## Example

```ts
type Success = {
  status: "success";
  data: string;
};

type Error = {
  status: "error";
  message: string;
};

type Response = Success | Error;
```

## Narrowing

```ts
function handleResponse(response: Response) {
  if (response.status === "success") {
    console.log(response.data);
  }
}
```

---

# Type Guards

## Definition

Checks that narrow types safely.

## typeof Guard

```ts
function print(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  }
}
```

## instanceof Guard

```ts
if (date instanceof Date) {
  console.log(date.getFullYear());
}
```

## Custom Type Guard

```ts
type User = {
  name: string;
};

function isUser(value: unknown): value is User {
  return typeof value === "object" && value !== null && "name" in value;
}
```

---

# Intersection Types

## Definition

Combine multiple types into one.

## Syntax

```ts
type User = {
  name: string;
};

type Admin = {
  role: string;
};

type AdminUser = User & Admin;
```

## Result

```ts
{
  name: string;
  role: string;
}
```

---

# Template Literal Types

## Definition

Create string types dynamically.

## Syntax

```ts
type Size = "sm" | "md" | "lg";

type ButtonClass = `btn-${Size}`;
```

## Result

```ts
"btn-sm" | "btn-md" | "btn-lg"
```

---

# Pick and Omit

# Pick

## Definition

Select specific properties.

## Example

```ts
type User = {
  name: string;
  age: number;
  email: string;
};

type UserPreview = Pick<User, "name" | "email">;
```

---

# Omit

## Definition

Remove specific properties.

## Example

```ts
type PublicUser = Omit<User, "email">;
```

---

# Record Utility

## Definition

Creates object types with dynamic keys.

## Syntax

```ts
type Users = Record<string, number>;
```

## Example

```ts
const scores: Record<string, number> = {
  Ravi: 95,
  John: 88
};
```

---

# Exclude and Extract

# Exclude

## Definition

Removes types from a union.

## Example

```ts
type Role = "admin" | "user" | "guest";

type Allowed = Exclude<Role, "guest">;
```

## Result

```ts
"admin" | "user"
```

---

# Extract

## Definition

Keeps matching types from a union.

## Example

```ts
type Selected = Extract<Role, "admin" | "user">;
```

## Result

```ts
"admin" | "user"
```

---

# ReturnType Utility

## Definition

Extracts a function’s return type.

## Example

```ts
function getUser() {
  return {
    name: "Ravi"
  };
}

type User = ReturnType<typeof getUser>;
```

---

# infer Keyword

## Definition

Infer types inside conditional types.

## Example

```ts
type GetReturnType<T> = T extends (...args: any[]) => infer R
  ? R
  : never;
```

## Usage

```ts
type Result = GetReturnType<() => string>;
```

## Result

```ts
string
```

---

# Type-safe APIs

## Definition

Ensure API requests and responses are typed.

## API Response Type

```ts
type User = {
  id: number;
  name: string;
};
```

## Fetch Example

```ts
async function fetchUser(): Promise<User> {
  const response = await fetch("/api/user");
  return response.json();
}
```

## Generic API Wrapper

```ts
async function api<T>(url: string): Promise<T> {
  const response = await fetch(url);
  return response.json();
}
```

---

# JSON Typing

## Definition

Type JSON responses safely.

## Example

```ts
type Product = {
  id: number;
  title: string;
};

const data: Product = JSON.parse(jsonString);
```

## Safer Approach

```ts
const data = JSON.parse(jsonString) as Product;
```

---

# Environment Typing

## Definition

Type environment variables properly.

## env.d.ts

```ts
declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "development" | "production";
    API_URL: string;
  }
}
```

## Usage

```ts
process.env.API_URL;
```

---

# ESLint Integration

## Install

```bash
npm install -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

## Config

```js
module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ]
};
```

## Benefits

* Better code quality
* Detect unsafe types
* Consistent style

---

# React TypeScript

## Functional Component

```tsx
type Props = {
  title: string;
};

function Header({ title }: Props) {
  return <h1>{title}</h1>;
}
```

## useState Typing

```tsx
const [count, setCount] = useState<number>(0);
```

## useRef Typing

```tsx
const inputRef = useRef<HTMLInputElement>(null);
```

## Event Typing

```tsx
function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
  console.log(event.target.value);
}
```

---

# JSX Typing

## JSX Element Type

```tsx
const element: JSX.Element = <div>Hello</div>;
```

## Children Typing

```tsx
type Props = {
  children: React.ReactNode;
};
```

## Component Props

```tsx
type ButtonProps = {
  onClick: () => void;
};
```

---

# Node.js Typing

## Install Types

```bash
npm install -D @types/node
```

## File System Example

```ts
import fs from "fs";

fs.readFileSync("file.txt", "utf-8");
```

## Path Example

```ts
import path from "path";

const filePath = path.join(__dirname, "test.txt");
```

## Process Typing

```ts
process.env.NODE_ENV;
```
