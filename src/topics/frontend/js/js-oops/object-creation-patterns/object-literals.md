# 🧠 JavaScript Object Literals

Object literals are a powerful and common feature in JavaScript. This guide will
walk you through the essentials with examples and tips.

---

## 📚 Table of Contents

1. [🔍 Definition](#definition)
2. [❓ Why is it Important?](#why-is-it-important)
3. [🧱 Syntax / Structure](#syntax--structure)
4. [💡 Examples](#examples)

   - [📎 Basic Example](#basic-example)
   - [🌍 Real-World Use Case](#real-world-use-case)

5. [📌 When/Where to Use It](#whenwhere-to-use-it)
6. [⚠️ Gotchas / Tips](#gotchas--tips)

---

## 🔍 Definition

An **object literal** in JavaScript is a way to create a single object using
curly braces `{}` with key-value pairs.

```js
const person = {
  name: 'Alice',
  age: 25,
};
```

---

## ❓ Why is it Important?

Object literals make it easy to group related data and behavior (functions) in
one place. They're fundamental to structuring modern JavaScript apps.

---

## 🧱 Syntax / Structure

```js
const objectName = {
  key1: value1,
  key2: value2,
  ...
};
```

- Keys are strings (or identifiers)
- Values can be any type: string, number, array, function, etc.

---

## 💡 Examples

### 📎 Basic Example

```js
const car = {
  brand: 'Toyota',
  year: 2020,
  isElectric: false,
};

console.log(car.brand); // Output: Toyota
```

---

### 🌍 Real-World Use Case

Imagine building a contact list app:

```js
const contact = {
  name: 'John Doe',
  phone: '123-456-7890',
  email: 'john@example.com',
  sendMessage: function (message) {
    console.log(`Sending "${message}" to ${this.name}`);
  },
};

contact.sendMessage('Hello!');
// Output: Sending "Hello!" to John Doe
```

---

## 📌 When/Where to Use It

- Storing user info (e.g. profile, settings)
- Grouping configuration data
- Creating lightweight modules
- Passing structured data to functions

---

## ⚠️ Gotchas / Tips

✅ **Use shorthand when keys and variables share the same name:**

```js
const name = 'Anna';
const user = { name }; // same as { name: name }
```

🚫 **Don’t use `.` to access properties with spaces or special characters:**

```js
const obj = { 'first name': 'Bob' };
console.log(obj['first name']); // ✅
```

🔁 **You can nest objects:**

```js
const student = {
  name: 'Eva',
  grades: {
    math: 90,
    science: 85,
  },
};
```

🧠 **Functions inside objects are called methods**:

```js
const dog = {
  bark: function () {
    console.log('Woof!');
  },
};
dog.bark(); // Woof!
```
