# 📘 Class Declaration in JavaScript

## 📑 Table of Contents

1. 🔍 [Definition](#definition)
2. 🎯 [Why is it Important?](#why-is-it-important)
3. 🧱 [Syntax/Structure](#syntaxstructure)
4. 💡 [Examples](#examples)

   - 🧪 [Basic Example](#basic-example)
   - 🛠️ [Real-World Use Case](#real-world-use-case)

5. 📍 [When/Where to Use It](#whenwhere-to-use-it)
6. ⚠️ [Gotchas/Tips](#gotchastips)

---

## 🔍 Definition

A **class declaration** in JavaScript is a blueprint for creating objects with
shared structure and behavior (like properties and methods).

👉 Think of it like a recipe for making multiple cakes (objects) from the same
mold (class).

---

## 🎯 Why is it Important?

Class declarations make your code more **organized**, **reusable**, and easier
to manage, especially in large applications. They're central to
**object-oriented programming (OOP)** in JavaScript.

---

## 🧱 Syntax/Structure

```javascript
class ClassName {
  constructor(parameter1, parameter2) {
    this.property1 = parameter1;
    this.property2 = parameter2;
  }

  method1() {
    // action
  }

  method2() {
    // action
  }
}
```

---

## 💡 Examples

### 🧪 Basic Example

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

const dog = new Animal('Buddy');
dog.speak(); // Buddy makes a sound.
```

### 🛠️ Real-World Use Case

```javascript
class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }

  login() {
    console.log(`${this.username} has logged in.`);
  }

  logout() {
    console.log(`${this.username} has logged out.`);
  }
}

const user1 = new User('janeDoe', 'jane@example.com');
user1.login(); // janeDoe has logged in.
```

---

## 📍 When/Where to Use It

✅ Use class declarations when:

- Creating multiple similar objects (e.g., Users, Products, Vehicles).
- Organizing code into modular components (especially in frameworks like React).
- Implementing object-oriented designs.

---

## ⚠️ Gotchas/Tips

⚠️ **Common Mistakes:**

- Forgetting to use `new` keyword when creating an instance:
  `const user = new User(...)`
- Misusing `this` — it refers to the object being created; don’t confuse it with
  global `this`.

💡 **Best Practices:**

- Keep your classes small and focused on one responsibility.
- Use meaningful method and property names.
- Use **inheritance** with `extends` when creating specialized versions of a
  class.
