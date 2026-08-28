# 🧠 JavaScript Proxy & Reflect — Complete Guide

## 📘 1. What is `Proxy` in JavaScript?

A `Proxy` is an object that wraps another object and **intercepts** operations
performed on it (like reading, writing, deleting properties).

### 🔑 Definition:

> `Proxy` lets you **customize** the behavior of fundamental operations on
> objects (like property lookup, assignment, enumeration, function invocation,
> etc.)

---

## 🧪 2. Proxy Syntax

```js
const proxy = new Proxy(target, handler);
```

- `target`: The original object you want to wrap.
- `handler`: An object with **trap methods** that intercept operations.

---

## 🧰 3. Basic Usage of Proxy

### ✅ Example: Intercepting `get`

```js
const user = {
  name: 'Ravi',
  role: 'Developer',
};

const proxy = new Proxy(user, {
  get(target, prop) {
    return prop in target ? target[prop] : 'Not Found';
  },
});

console.log(proxy.name); // Ravi
console.log(proxy.age); // Not Found
```

---

## 🛠️ 4. Common Proxy Traps (Handler Methods)

| Trap             | Description                           | Example                  |
| ---------------- | ------------------------------------- | ------------------------ |
| `get`            | Intercepts reading a property         | `proxy.name`             |
| `set`            | Intercepts setting a property         | `proxy.name = "John"`    |
| `has`            | Intercepts `in` operator              | `"name" in proxy`        |
| `deleteProperty` | Intercepts `delete` operation         | `delete proxy.name`      |
| `apply`          | Intercepts function calls             | `proxy()` (on functions) |
| `construct`      | Intercepts `new proxy()` construction | `new proxy()`            |
| `ownKeys`        | Intercepts keys during iteration      | `Object.keys(proxy)`     |

---

## 🧪 5. Proxy Example with `set` and `deleteProperty`

```js
const user = {};

const proxy = new Proxy(user, {
  set(target, prop, value) {
    if (typeof value === 'string') {
      target[prop] = value;
      return true;
    } else {
      console.log('Only strings are allowed');
      return false;
    }
  },
  deleteProperty(target, prop) {
    console.log(`Deleting ${prop}`);
    return delete target[prop];
  },
});

proxy.name = 'Ravi'; // OK
proxy.age = 25; // Only strings are allowed
delete proxy.name; // Deleting name
```

---

## 📘 6. What is `Reflect` in JavaScript?

`Reflect` is a built-in object that provides methods for **interacting with
object internals**, mirroring the default behavior of `Proxy` traps.

### 🔑 Definition:

> `Reflect` provides **default behavior methods** that correspond to the same
> operations that Proxy traps can intercept.

---

## 🧪 7. Reflect Syntax

```js
Reflect.method(target, ...args);
```

---

## 📋 8. Common Reflect Methods

| Method                     | Description                          |
| -------------------------- | ------------------------------------ |
| `Reflect.get()`            | Get property value                   |
| `Reflect.set()`            | Set property value                   |
| `Reflect.has()`            | Check if property exists             |
| `Reflect.deleteProperty()` | Delete property                      |
| `Reflect.ownKeys()`        | Return an array of the object's keys |
| `Reflect.apply()`          | Call a function                      |
| `Reflect.construct()`      | Like `new` operator                  |
| `Reflect.defineProperty()` | Define a property                    |
| `Reflect.getPrototypeOf()` | Get prototype                        |
| `Reflect.setPrototypeOf()` | Set prototype                        |

---

## 🔁 9. Using Reflect with Proxy (Best Practice)

Using `Reflect` inside proxy traps ensures **default behavior is preserved**.

### ✅ Example:

```js
const user = { name: 'Ravi' };

const proxy = new Proxy(user, {
  get(target, prop) {
    console.log(`Getting ${prop}`);
    return Reflect.get(target, prop);
  },
  set(target, prop, value) {
    console.log(`Setting ${prop} = ${value}`);
    return Reflect.set(target, prop, value);
  },
});

proxy.name = 'Amit'; // Setting name = Amit
console.log(proxy.name); // Getting name → Amit
```

---

## 📦 10. Example: Logging All Operations

```js
const data = { count: 0 };

const loggerProxy = new Proxy(data, {
  get(target, prop) {
    console.log(`Accessed: ${prop}`);
    return Reflect.get(target, prop);
  },
  set(target, prop, value) {
    console.log(`Changed: ${prop} = ${value}`);
    return Reflect.set(target, prop, value);
  },
  deleteProperty(target, prop) {
    console.log(`Deleted: ${prop}`);
    return Reflect.deleteProperty(target, prop);
  },
});

loggerProxy.count; // Accessed: count
loggerProxy.count = 10; // Changed: count = 10
delete loggerProxy.count; // Deleted: count
```

---

## 🔐 11. Example: Access Control with Proxy

```js
const privateData = {
  secret: '1234',
  public: 'Hello',
};

const secureProxy = new Proxy(privateData, {
  get(target, prop) {
    if (prop.startsWith('_') || prop === 'secret') {
      throw new Error('Access denied');
    }
    return Reflect.get(target, prop);
  },
});

console.log(secureProxy.public); // Hello
console.log(secureProxy.secret); // ❌ Error: Access denied
```

---

## 🧠 12. Why Use Proxy + Reflect?

| Reason                 | Description                                      |
| ---------------------- | ------------------------------------------------ |
| **Meta-programming**   | Change behavior of objects dynamically           |
| **Validation**         | Validate or restrict assignments                 |
| **Logging/Tracing**    | Log operations for debugging                     |
| **Data binding**       | Track changes for reactive programming           |
| **Security**           | Restrict access to private/internal properties   |
| **Default delegation** | `Reflect` avoids rewriting native logic manually |

---

## 🏁 Summary

| Feature  | Proxy                         | Reflect                           |
| -------- | ----------------------------- | --------------------------------- |
| Purpose  | Intercepts & customizes ops   | Provides default behavior methods |
| Use Case | Validation, logging, security | Used inside Proxy traps           |
| Usage    | `new Proxy(target, handler)`  | `Reflect.method(target, args...)` |
