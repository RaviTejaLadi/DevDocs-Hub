# 📘 Delegation: Objects Forwarding Method Calls to Other Objects

## 📑 Table of Contents

1. 📖 [Definition](#definition)
2. ❓ [Why is it Important?](#why-is-it-important)
3. 🛠️ [Syntax / Structure](#syntax--structure)
4. 🧪 [Examples](#examples)

   - 🔹 [Basic Example](#basic-example)
   - 🌍 [Real-World Use Case](#real-world-use-case)

5. 📍 [When / Where to Use It](#when--where-to-use-it)
6. ⚠️ [Gotchas / Tips](#gotchas--tips)

---

## 📖 Definition

**Delegation** in JavaScript means one object uses another object's method as if
it were its own. It "forwards" the call instead of defining the method itself.

---

## ❓ Why is it Important?

Delegation promotes **code reuse** and **separation of concerns**. Instead of
duplicating functionality, objects can **delegate** tasks to a shared handler.

---

## 🛠️ Syntax / Structure

```javascript
const handler = {
  greet() {
    console.log(`Hello, I am ${this.name}`);
  },
};

const user = {
  name: 'Alice',
};

// Delegating method call
user.__proto__ = handler; // Not recommended in production (use Object.setPrototypeOf)
user.greet(); // Hello, I am Alice
```

> ✅ Preferred: Use `Object.setPrototypeOf(user, handler);` instead of modifying
> `__proto__` directly.

---

## 🧪 Examples

### 🔹 Basic Example

```javascript
const animal = {
  speak() {
    console.log(`${this.name} makes a sound.`);
  },
};

const dog = {
  name: 'Buddy',
};

// Delegate speak to animal
Object.setPrototypeOf(dog, animal);

dog.speak(); // Buddy makes a sound.
```

---

### 🌍 Real-World Use Case

Imagine a **button** component delegating common behavior (like `click`) to a
general UI component:

```javascript
const UIComponent = {
  click() {
    console.log(`${this.label} was clicked.`);
  },
};

const button = {
  label: 'Submit',
};

Object.setPrototypeOf(button, UIComponent);

button.click(); // Submit was clicked.
```

This helps avoid redefining `click()` in every UI element.

---

## 📍 When / Where to Use It

- In **object composition** (instead of class inheritance)
- When building **shared behavior** (e.g., logging, validation)
- For **code reuse** in frameworks or libraries
- In **prototypes**, to share methods across instances

---

## ⚠️ Gotchas / Tips

- ❗ Avoid `__proto__` in production code. Use `Object.setPrototypeOf()`.
- 🔄 Delegation uses the prototype chain, so be careful with `this`. It refers
  to the **calling object**, not the one that defines the method.
- 🚀 Great for **dynamic behavior**, but overusing it can make code harder to
  debug.
