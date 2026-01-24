# 🔐 JavaScript Strict Mode

## 📘 Definition

**Strict Mode** is a feature in JavaScript that enforces stricter parsing and
error handling on your code. It helps catch common coding mistakes and makes the
language behave more consistently.

> Introduced in ECMAScript 5 (ES5), `'use strict'` can be applied to entire
> scripts or individual functions.

---

## 🔤 Syntax

```javascript
'use strict'; // at the top of a script or function
```

You can enable strict mode in:

### ✅ Entire Script

```javascript
'use strict';

let x = 3.14; // valid
```

### ✅ Function Scope

```javascript
function myFunction() {
  'use strict';
  // Strict mode only applies inside this function
}
```

---

## 🎯 Why Use Strict Mode?

- Makes debugging easier (throws more errors)
- Prevents the use of undeclared variables
- Eliminates `this` coercion to `window` (in functions)
- Disallows duplicate parameter names
- Prepares your code for future JavaScript versions

---

## 📛 Common Errors Prevented by Strict Mode

| Error Type           | Description                                                   |
| -------------------- | ------------------------------------------------------------- |
| Undeclared variables | Forces you to declare variables with `let`, `const`, or `var` |
| Read-only properties | Prevents assigning values to non-writable properties          |
| `this` keyword       | `this` in functions is `undefined`, not `window`              |
| Octal literals       | Prohibits usage of octal number literals (`0755`)             |
| Duplicate parameters | Disallows repeating function parameter names                  |

---

## ⚠️ Differences in Behavior (Strict Mode vs. Non-Strict)

### 🔸 Without Strict Mode

```javascript
x = 10; // no error, x becomes a global variable
console.log(x); // 10
```

### 🔹 With Strict Mode

```javascript
'use strict';
x = 10; // ReferenceError: x is not defined
```

---

## ✅ Examples

### 1. ✅ Prevent Accidental Globals

```javascript
'use strict';
x = 3.14; // ❌ ReferenceError
```

### 2. ✅ Catch Silent Failures

```javascript
'use strict';
const obj = {};
Object.defineProperty(obj, 'name', { value: 'Ravi', writable: false });

obj.name = 'Kumar'; // ❌ TypeError: Cannot assign to read only property
```

### 3. ✅ Disallow Duplicates

```javascript
'use strict';
function sum(a, a, c) {
  return a + a + c;
}
// ❌ SyntaxError: Duplicate parameter name not allowed in strict mode
```

### 4. ✅ `this` is undefined in functions

```javascript
'use strict';
function showThis() {
  console.log(this); // undefined
}
showThis();
```

### 5. ✅ Invalid delete usage

```javascript
'use strict';
let x = 5;
delete x; // ❌ SyntaxError
```

---

## 🧠 Best Practices

- Always use `'use strict';` at the top of your JavaScript files.
- Modern JavaScript modules (`import/export`) and classes are **always in strict
  mode**.
- Helps enforce **clean code** and avoid **sloppy mistakes**.

---

## 🚀 Auto-Strict (ES6 Modules)

```js
// modules are strict by default
export function test() {
  undeclaredVar = 10; // ReferenceError
}
```

---

## 📎 Summary Table

| Feature                   | Strict Mode | Non-Strict Mode |
| ------------------------- | ----------- | --------------- |
| Undeclared Variables      | Error       | Allowed         |
| `this` in global function | `undefined` | `window` object |
| Duplicate function params | Error       | Allowed         |
| Octal literals            | Error       | Allowed         |
| `delete` on variables     | Error       | Allowed         |

---

## 📌 Final Tip

Use strict mode to:

- Write **cleaner**, more **secure**, and **predictable** JavaScript.
- Help your code prepare for the **future of ECMAScript**.
