# 🔁 JavaScript Currying Functions

---

## 📘 1. Definition

**Currying** is a functional programming technique where a function with
multiple arguments is **transformed into a series of functions**, each taking
one argument at a time.

> In simple words, currying breaks a function with `n` parameters into `n` unary
> functions (functions with one parameter).

---

## 🔣 2. Syntax

```javascript
// Normal Function
function add(a, b) {
  return a + b;
}

// Curried Function
function curriedAdd(a) {
  return function (b) {
    return a + b;
  };
}

// ES6 Arrow Syntax
const curriedAddArrow = (a) => (b) => a + b;
```

---

## 🧠 3. Why Use Currying? (Use Cases)

| Use Case                | Description                                                        |
| ----------------------- | ------------------------------------------------------------------ |
| ✅ Reusability          | Allows creation of reusable function chains                        |
| ✅ Function Composition | Makes it easier to compose smaller functions into larger pipelines |
| ✅ Partial Application  | Fix some arguments and reuse the remaining later                   |
| ✅ Code Readability     | Cleaner and more declarative code                                  |

---

## 🧪 4. Basic Example

```javascript
// Without Currying
function multiply(a, b) {
  return a * b;
}

console.log(multiply(2, 3)); // 6

// With Currying
function curriedMultiply(a) {
  return function (b) {
    return a * b;
  };
}

const double = curriedMultiply(2);
console.log(double(3)); // 6
```

---

## ⚙️ 5. Advanced Example – Using Arrow Functions

```javascript
const greet = (greeting) => (name) => `${greeting}, ${name}!`;

const sayHello = greet('Hello');
console.log(sayHello('Ravi')); // Hello, Ravi!
```

---

## 🧰 6. Currying vs Partial Application

| Concept           | Currying                               | Partial Application        |
| ----------------- | -------------------------------------- | -------------------------- |
| Transformation    | Converts function into unary functions | Fixes some parameters      |
| Argument Handling | One argument at a time                 | Multiple arguments at once |
| Example           | `f(a)(b)(c)`                           | `f(a, b)(c)`               |

---

## 🧩 7. Real-world Use Case (DOM Example)

```javascript
const updateStyle = (property) => (value) => (element) =>
  (element.style[property] = value);

const setColorRed = updateStyle('color')('red');
setColorRed(document.querySelector('h1'));
```

---

## 🛠️ 8. Implement Your Own Curry Function

```javascript
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function (...nextArgs) {
        return curried.apply(this, args.concat(nextArgs));
      };
    }
  };
}

// Usage
function sum(a, b, c) {
  return a + b + c;
}

const curriedSum = curry(sum);
console.log(curriedSum(1)(2)(3)); // 6
console.log(curriedSum(1, 2)(3)); // 6
```

---

## 📌 9. Points to Remember

- Currying ≠ Partial Application (though they are related)
- Makes functions pure and reusable
- Very useful in **React**, **Redux**, and **functional JS libraries** like
  `lodash/fp` or `Ramda`

---

## 🔚 10. Summary

✅ Currying transforms multi-arg functions → chained unary functions ✅ It
enables better code **composition**, **reusability**, and **readability** ✅
Implementable in native JavaScript with closures and recursion

---

Great. Here's a **visual diagram + comparison of currying vs compose vs pipe**,
all part of functional programming in JavaScript.

---

# 🧠 Currying vs Compose vs Pipe – With Visuals

---

## 🔁 Currying – Visual Diagram

```js
// Original function
f(a, b, c)

// Curried version
f(a)(b)(c)

// Diagram:
     ┌────┐   ┌────┐   ┌────┐
 a → │ f1 │ → │ f2 │ → │ f3 │ → result
     └────┘   └────┘   └────┘
```

- Each function returns the next until all arguments are consumed.

---

## 🧩 Compose – Visual Diagram

**Definition:** Compose **runs functions right to left**

```js
compose(f, g, h)(x) → f(g(h(x)))
```

```js
const compose =
  (...fns) =>
  (x) =>
    fns.reduceRight((acc, fn) => fn(acc), x);

// Example:
const add = (x) => x + 1;
const double = (x) => x * 2;

const composed = compose(add, double);
console.log(composed(3)); // add(double(3)) → 7
```

### Diagram:

```
x → h → g → f → result
```

---

## 🔃 Pipe – Visual Diagram

**Definition:** Pipe **runs functions left to right**

```js
pipe(h, g, f)(x) → f(g(h(x)))
```

```js
const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((acc, fn) => fn(acc), x);

// Example:
const add = (x) => x + 1;
const double = (x) => x * 2;

const piped = pipe(double, add);
console.log(piped(3)); // add(double(3)) → 7
```

### Diagram:

```
x → double → add → result
```

---

## 🔍 Currying vs Compose vs Pipe – Comparison Table

| Feature        | Currying                         | Compose                               | Pipe                                  |
| -------------- | -------------------------------- | ------------------------------------- | ------------------------------------- |
| Purpose        | Breaks function into unary chain | Composes right-to-left function chain | Composes left-to-right function chain |
| Syntax Example | `f(a)(b)(c)`                     | `compose(f, g)(x)`                    | `pipe(g, f)(x)`                       |
| Usage Style    | Argument staging / reusability   | Functional composition                | Functional composition                |
| Direction      | Top-down argument chaining       | Right to left                         | Left to right                         |
| Common In      | React, Lodash/fp, Ramda          | Redux, RxJS, Functional JS            | RxJS, Streams, Functional JS          |

---

## 🔚 Final Tip

🧩 Use **currying** when:

- You want to **partially apply** arguments
- You want to **reuse** preset logic

🔁 Use **compose/pipe** when:

- You want to chain function **transformations**
- You need **clean, declarative** pipelines
