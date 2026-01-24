# 🏭 Factory Functions

Factory functions are a powerful concept in JavaScript that helps you create
objects more efficiently. Let’s break it down!

---

## 📚 Table of Contents

1. [🧾 Definition](#definition)
2. [❓ Why Is It Important?](#why-is-it-important)
3. [🔧 Syntax/Structure](#syntaxstructure)
4. [💡 Examples](#examples)

   - [Basic Example](#basic-example)
   - [Real-World Use Case](#real-world-use-case)

5. [📍 When/Where to Use It](#whenwhere-to-use-it)
6. [⚠️ Gotchas/Tips](#gotchastips)

---

## 🧾 Definition

A **factory function** is a function that returns a new object every time it's
called. It’s an alternative to using classes or constructor functions.

---

## ❓ Why Is It Important?

Factory functions provide a **simple and flexible** way to create multiple
similar objects without using `class` or `new`. They help in **code reuse** and
can **encapsulate private data** using closures.

---

## 🔧 Syntax/Structure

```javascript
function createItem(name, price) {
  return {
    name,
    price,
    describe() {
      return `Item: ${name}, Price: $${price}`;
    },
  };
}
```

Call `createItem()` to generate a new object.

---

## 💡 Examples

### Basic Example

```javascript
function createUser(name, age) {
  return {
    name,
    age,
    greet() {
      console.log(`Hi, I'm ${name} and I'm ${age} years old.`);
    },
  };
}

const user1 = createUser('Alice', 30);
user1.greet(); // Hi, I'm Alice and I'm 30 years old.
```

---

### Real-World Use Case

Imagine you're building a shopping cart system:

```javascript
function createProduct(id, title, price) {
  return {
    id,
    title,
    price,
    getTotal(quantity) {
      return price * quantity;
    },
  };
}

const laptop = createProduct(101, 'Laptop', 899);
console.log(laptop.getTotal(2)); // 1798
```

Here, each product is created with a factory function and can calculate totals
independently.

---

## 📍 When/Where to Use It

- When you need to create **multiple similar objects**
- When you want to **encapsulate private logic/data**
- In **functional programming** or when avoiding `this`
- In **React or frontend logic** for component configuration

---

## ⚠️ Gotchas/Tips

✅ **Do:**

- Use factory functions for **clean, reusable code**
- Combine with **closures** for private variables

❌ **Avoid:**

- Using factory functions for complex inheritance trees (use `class` if needed)
- Forgetting to return an object — it’ll return `undefined`

🔒 Want private data? Use closure:

```javascript
function createCounter() {
  let count = 0;
  return {
    increment() {
      count++;
    },
    getCount() {
      return count;
    },
  };
}

const counter = createCounter();
counter.increment();
console.log(counter.getCount()); // 1
```
