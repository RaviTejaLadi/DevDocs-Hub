# 📦 Module Pattern in JavaScript

### _Encapsulating code & creating public/private scope – explained simply!_

---

## 📑 Table of Contents

1. 🔍 [Definition](#-definition)
2. ❓ [Why is it Important?](#-why-is-it-important)
3. 🧱 [Syntax / Structure](#-syntax--structure)
4. 💡 [Examples](#-examples)

   - ✨ [Basic Example](#-basic-example)
   - 🌐 [Real-World Use Case](#-real-world-use-case)

5. 📌 [When / Where to Use It](#-when--where-to-use-it)
6. ⚠️ [Gotchas / Tips](#-gotchas--tips)

---

## 🔍 Definition

The **Module Pattern** is a design pattern in JavaScript that allows you to
**encapsulate code** and create **private and public access** to variables and
functions.

---

## ❓ Why is it Important?

It helps keep your code **clean, organized, and safe** by:

- Hiding internal details (private logic)
- Avoiding variable collisions
- Exposing only what’s necessary (public API)

---

## 🧱 Syntax / Structure

```javascript
const MyModule = (function () {
  // Private variables & functions
  let privateVar = "I'm private";

  function privateFunction() {
    console.log(privateVar);
  }

  // Public API
  return {
    publicMethod: function () {
      privateFunction();
    },
  };
})();
```

---

## 💡 Examples

### ✨ Basic Example

```javascript
const Counter = (function () {
  let count = 0; // private

  return {
    increment: function () {
      count++;
      console.log(count);
    },
    reset: function () {
      count = 0;
    },
  };
})();

Counter.increment(); // 1
Counter.increment(); // 2
// Counter.count → undefined (it's private!)
```

---

### 🌐 Real-World Use Case

**Form Validation Module**

```javascript
const FormValidator = (function () {
  function isEmailValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  return {
    validateEmail: function (email) {
      return isEmailValid(email);
    },
  };
})();

// Usage
console.log(FormValidator.validateEmail('test@example.com')); // true
```

---

## 📌 When / Where to Use It

- In older JavaScript (pre-ES6) for code organization
- When building **libraries or plugins**
- To **protect internal logic** from external access
- Useful in **browser-based code** to avoid polluting global scope

---

## ⚠️ Gotchas / Tips

✅ **Do**:

- Keep private data truly hidden
- Use it for reusable code blocks

❌ **Avoid**:

- Overusing it when modern modules (`import/export`) can do the job
- Making the module too big or complex

💡 **Tip**: Use **IIFEs** (Immediately Invoked Function Expressions) to create
module patterns.
