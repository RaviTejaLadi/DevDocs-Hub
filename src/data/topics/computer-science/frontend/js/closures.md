# 📦 JavaScript Closures – A Complete Guide

## 📘 1. Definition

A **closure** is a function that **remembers its outer variables** and has
access to them **even after the outer function has returned**.

> In simpler terms: _A closure is created when a function is defined inside
> another function and gains access to the outer function’s variables._

---

## 🧩 2. Syntax

```javascript
function outerFunction() {
  let outerVariable = 'I am from outer scope';

  function innerFunction() {
    console.log(outerVariable); // innerFunction "closes over" outerVariable
  }

  return innerFunction;
}
```

---

## 🛠️ 3. How It Works

When `outerFunction()` is called, it returns `innerFunction`, but
`innerFunction` **still retains access** to `outerVariable` even after
`outerFunction` has finished executing.

```javascript
const closureFunc = outerFunction();
closureFunc(); // Output: I am from outer scope
```

---

## 🔍 4. Characteristics of Closures

- Can **access variables** from the outer scope.
- Maintain **state** between function calls.
- Useful in **data encapsulation** and **functional programming**.
- Commonly used in **callbacks**, **event handlers**, and **module patterns**.

---

## 🧪 5. Examples

### ✅ Basic Closure

```javascript
function greet(name) {
  return function (message) {
    console.log(`${message}, ${name}`);
  };
}

const greetJohn = greet('John');
greetJohn('Hello'); // Output: Hello, John
```

---

### 💾 Counter Using Closure (State Preservation)

```javascript
function createCounter() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}

const counter = createCounter();
counter(); // 1
counter(); // 2
```

---

### 🔐 Data Encapsulation with Closures

```javascript
function secretHolder(secret) {
  return {
    getSecret: function () {
      return secret;
    },
  };
}

const holder = secretHolder('Hidden info');
console.log(holder.getSecret()); // Output: Hidden info
```

---

### 🕸️ Loop with Closure Issue & Fix

#### ❌ Incorrect (Var has function scope)

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i); // prints 3 every time
  }, 1000);
}
```

#### ✅ Fixed Using Closure

```javascript
for (var i = 0; i < 3; i++) {
  (function (index) {
    setTimeout(function () {
      console.log(index); // prints 0, 1, 2
    }, 1000);
  })(i);
}
```

---

## 🧠 6. When to Use Closures

| Use Case               | Description                             |
| ---------------------- | --------------------------------------- |
| **Private Variables**  | Hide implementation details             |
| **Function Factories** | Return functions with pre-defined logic |
| **Event Handlers**     | Retain state inside callbacks           |
| **Memoization**        | Cache values with retained variables    |
| **Modules**            | Encapsulate functionality               |

---

## 🧼 7. Gotchas / Things to Watch

- Overusing closures may lead to **memory leaks** if variables are not released.
- Too many closures can make code **hard to read**.
- Be careful when using closures **inside loops** with `var`.

---

## 🎯 8. Conclusion

Closures are a **powerful core feature** of JavaScript. Mastering them gives you
deep control over variable scope, state, and encapsulation.

> 💡 _If you understand closures well, you're thinking like a true JavaScript
> developer._
