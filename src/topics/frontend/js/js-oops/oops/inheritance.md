# 🌳 Inheritance

## 📚 Table of Contents

1. [🔍 Definition](#-definition)
2. [🎯 Why is it Important?](#-why-is-it-important)
3. [📐 Syntax/Structure](#-syntaxstructure)
4. [💡 Examples](#-examples)

   - [📦 Basic Example](#-basic-example)
   - [🏪 Real-World Use Case](#-real-world-use-case)

5. [🧭 When/Where to Use It](#-whenwhere-to-use-it)
6. [⚠️ Gotchas & Tips](#-gotchastips)

---

## 🔍 Definition

**Inheritance** in JavaScript allows one object or class to access the
properties and methods of another. It helps create a hierarchy where a _child_
class inherits from a _parent_ class.

---

## 🎯 Why is it Important?

Inheritance promotes **code reuse**, helps avoid duplication, and makes your
code more **organized** and **scalable**—perfect for large projects or shared
behavior.

---

## 📐 Syntax/Structure

Using **ES6 classes**:

```js
class Parent {
  greet() {
    console.log('Hello from Parent');
  }
}

class Child extends Parent {
  sayHi() {
    console.log('Hi from Child');
  }
}
```

The keyword `extends` is used for inheritance, and `super()` is used to call the
parent constructor.

---

## 💡 Examples

### 📦 Basic Example

```js
class Animal {
  speak() {
    console.log('Animal makes a sound');
  }
}

class Dog extends Animal {
  bark() {
    console.log('Dog barks');
  }
}

const dog = new Dog();
dog.speak(); // Inherited
dog.bark(); // Own method
```

### 🏪 Real-World Use Case

```js
class User {
  constructor(name) {
    this.name = name;
  }
  login() {
    console.log(`${this.name} logged in`);
  }
}

class Admin extends User {
  deleteUser(user) {
    console.log(`${this.name} deleted ${user}`);
  }
}

const admin = new Admin('Alice');
admin.login(); // Inherited from User
admin.deleteUser('Bob'); // Admin-specific
```

---

## 🧭 When/Where to Use It

✅ Use Inheritance when:

- You have **shared functionality** (e.g., users with different roles).
- You want to follow **DRY (Don't Repeat Yourself)** principles.
- You're working with **hierarchical relationships** (e.g., Vehicle → Car →
  ElectricCar).

---

## ⚠️ Gotchas/Tips

✅ **Tips:**

- Use `super()` in the child constructor before using `this`.
- Prefer **composition** over inheritance when things get too complex.

⚠️ **Common Mistakes:**

- Forgetting to call `super()` in subclass constructor.
- Overusing inheritance—can make code rigid and harder to maintain.
