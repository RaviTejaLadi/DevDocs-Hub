# 📘 JavaScript ES6 Features – Complete Guide

> **ES6** (ECMAScript 2015) introduced significant updates to JavaScript, making
> it more powerful, readable, and easier to write.

---

## 1. `let` and `const`

### ✅ Definition

- `let`: Declares a block-scoped variable (can be reassigned).
- `const`: Declares a block-scoped constant (cannot be reassigned).

### 🔤 Syntax

```js
let variableName = value;
const constantName = value;
```

### 🧑‍💻 Usage & Example

```js
let name = 'John';
name = 'Doe'; // allowed

const age = 30;
// age = 40; ❌ Error: Assignment to constant variable
```

---

## 2. Arrow Functions (`=>`)

### ✅ Definition

Shorter syntax for writing functions. Inherits `this` from parent scope.

### 🔤 Syntax

```js
const functionName = (param1, param2) => expression;
```

### 🧑‍💻 Usage & Example

```js
// Regular Function
function add(a, b) {
  return a + b;
}

// Arrow Function
const add = (a, b) => a + b;

console.log(add(2, 3)); // 5
```

---

## 3. Template Literals (Backticks)

### ✅ Definition

String literals allowing embedded expressions and multi-line strings.

### 🔤 Syntax

```js
`string text ${expression}`;
```

### 🧑‍💻 Usage & Example

```js
const name = 'Ravi';
const greeting = `Hello, ${name}!`;

console.log(greeting); // Hello, Ravi!
```

---

## 4. Destructuring

### ✅ Definition

Extract values from arrays or objects into variables.

### 🔤 Syntax

```js
const [a, b] = array;
const { x, y } = object;
```

### 🧑‍💻 Usage & Example

```js
// Array Destructuring
const nums = [1, 2];
const [a, b] = nums;

// Object Destructuring
const person = { name: 'Alice', age: 25 };
const { name, age } = person;
```

---

## 5. Default Parameters

### ✅ Definition

Set default values for function parameters.

### 🔤 Syntax

```js
function func(param = defaultValue) { ... }
```

### 🧑‍💻 Usage & Example

```js
function greet(name = 'Guest') {
  console.log(`Hello, ${name}`);
}

greet(); // Hello, Guest
```

---

## 6. Rest Parameters (`...`)

### ✅ Definition

Combines multiple arguments into a single array.

### 🔤 Syntax

```js
function func(...args) {}
```

### 🧑‍💻 Usage & Example

```js
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b);
}

console.log(sum(1, 2, 3)); // 6
```

---

## 7. Spread Operator (`...`)

### ✅ Definition

Expands arrays or objects into individual elements.

### 🔤 Syntax

```js
[...array], { ...object };
```

### 🧑‍💻 Usage & Example

```js
const arr1 = [1, 2];
const arr2 = [...arr1, 3]; // [1, 2, 3]

const obj1 = { a: 1 };
const obj2 = { ...obj1, b: 2 }; // { a: 1, b: 2 }
```

---

## 8. Enhanced Object Literals

### ✅ Definition

Shorthand syntax for object properties and methods.

### 🔤 Syntax

```js
const name = "Bob";
const user = { name, greet() { ... } };
```

### 🧑‍💻 Usage & Example

```js
const name = 'Bob';
const user = {
  name,
  greet() {
    return `Hi ${this.name}`;
  },
};
```

---

## 9. Classes

### ✅ Definition

ES6 introduced class syntax for object-oriented programming.

### 🔤 Syntax

```js
class ClassName {
  constructor() {}
  methodName() {}
}
```

### 🧑‍💻 Usage & Example

```js
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, ${this.name}`);
  }
}

const p = new Person('Ravi');
p.greet(); // Hello, Ravi
```

---

## 10. Promises

### ✅ Definition

Handle asynchronous operations in a more manageable way.

### 🔤 Syntax

```js
new Promise((resolve, reject) => { ... });
```

### 🧑‍💻 Usage & Example

```js
const fetchData = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('Data loaded'), 1000);
  });

fetchData().then(console.log); // Data loaded
```

---

## 11. Modules (`import` / `export`)

### ✅ Definition

ES6 supports modular JavaScript with `import` and `export`.

### 🔤 Syntax

```js
// file.js
export const name = 'Ravi';

// main.js
import { name } from './file.js';
```

### 🧑‍💻 Usage & Example

```js
// utils.js
export function greet(name) {
  return `Hello, ${name}`;
}

// main.js
import { greet } from './utils.js';
console.log(greet('Ravi'));
```

---

## 12. `for...of` Loop

### ✅ Definition

Iterates over iterable objects (arrays, strings, etc.).

### 🔤 Syntax

```js
for (let value of iterable) {
}
```

### 🧑‍💻 Usage & Example

```js
const arr = [10, 20, 30];

for (let num of arr) {
  console.log(num);
}
```

---

## 13. Symbol

### ✅ Definition

A unique and immutable primitive value.

### 🔤 Syntax

```js
const sym = Symbol('description');
```

### 🧑‍💻 Usage & Example

```js
const id = Symbol('id');
const user = {
  name: 'Ravi',
  [id]: 123,
};

console.log(user[id]); // 123
```

---

## 14. `Map` and `Set`

### ✅ Definition

- **Map**: Key-value pairs with any type of key.
- **Set**: Collection of unique values.

### 🔤 Syntax

```js
const map = new Map();
const set = new Set();
```

### 🧑‍💻 Usage & Example

```js
const map = new Map();
map.set('key', 'value');

const set = new Set();
set.add(1);
set.add(1); // Won't be added again
```

---

## 15. `Object.assign()`

### ✅ Definition

Copies values from source to target object.

### 🔤 Syntax

```js
Object.assign(target, ...sources);
```

### 🧑‍💻 Usage & Example

```js
const target = { a: 1 };
const source = { b: 2 };
const merged = Object.assign(target, source);

console.log(merged); // { a: 1, b: 2 }
```

---

## ✅ Summary Table

| Feature            | Purpose                           |
| ------------------ | --------------------------------- |
| `let`, `const`     | Block scope variables             |
| Arrow functions    | Short function syntax             |
| Template literals  | Strings with interpolation        |
| Destructuring      | Unpack values from arrays/objects |
| Default parameters | Set default values in functions   |
| Rest/Spread        | Handle multiple elements          |
| Enhanced objects   | Cleaner object declarations       |
| Classes            | OOP syntax                        |
| Promises           | Async handling                    |
| Modules            | Code modularization               |
| `for...of`         | Loop over iterables               |
| Symbol             | Unique identifiers                |
| `Map`, `Set`       | Data structures                   |
| `Object.assign()`  | Merge objects                     |
