# 🛠️ Constructor Method

## 📚 Table of Contents

1. [📖 Definition](#definition)
2. [❓ Why Is It Important?](#importance)
3. [🧱 Syntax / Structure](#syntax)
4. [💡 Examples](#examples)

   - [🔹 Basic Example](#basic-example)
   - [🌍 Real-World Use Case](#real-world-use-case)

5. [📌 When/Where to Use It](#when-to-use)
6. [⚠️ Gotchas / Tips](#tips)

---

## 📖 Definition

In JavaScript, the **constructor method** is a special function inside a class
that creates and initializes objects.

---

## ❓ Why Is It Important?

It helps you **automatically set up new objects** with default or custom
values—like giving each new user a name, ID, etc.

---

## 🧱 Syntax / Structure

```javascript
class ClassName {
  constructor(parameters) {
    this.property = value;
  }
}
```

---

## 💡 Examples

### 🔹 Basic Example

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }
}

const user1 = new Person('Alice');
console.log(user1.name); // Output: Alice
```

---

### 🌍 Real-World Use Case

Imagine you're making a **shopping cart** system where each item has a name and
price.

```javascript
class Item {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

const item1 = new Item('Laptop', 1200);
const item2 = new Item('Phone', 800);

console.log(item1.name); // Laptop
console.log(item2.price); // 800
```

---

## 📌 When/Where to Use It

Use the constructor method when:

- You’re creating **multiple similar objects** (e.g., users, items, cars)
- You want to **initialize properties** when an object is created
- You’re working with **classes in OOP (Object-Oriented Programming)**

---

## ⚠️ Gotchas / Tips

✅ Always name the constructor method exactly `constructor` ✅ Use `this` to
refer to the current object ⚠️ Don’t return anything manually from a constructor
⚠️ Forgetting `new` keyword when creating an object will cause issues

```javascript
const user = Person('Bob'); // ❌ This won't work!
const user = new Person('Bob'); // ✅ Correct!
```
