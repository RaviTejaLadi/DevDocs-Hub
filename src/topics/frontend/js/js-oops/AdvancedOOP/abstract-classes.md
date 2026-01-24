# 📘 Abstract Classes - Explained Simply

## 📚 Table of Contents

1. 🔍 [What is an Abstract Class?](#what-is-an-abstract-class)
2. ❓ [Why Are Abstract Classes Important?](#why-are-abstract-classes-important)
3. 🧱 [Syntax & Structure](#syntax--structure)
4. 🧪 [Examples](#examples)

   - ✅ [Basic Example](#basic-example)
   - 🌍 [Real-World Use Case](#real-world-use-case)

5. 📍 [When to Use Abstract Classes](#when-to-use-abstract-classes)
6. ⚠️ [Gotchas & Tips](#gotchas--tips)

---

## 🔍 What is an Abstract Class?

An **abstract class** is a class that **cannot be instantiated directly** and is
meant to be **extended** by other classes. It often contains **abstract
methods** that must be implemented by child classes.

---

## ❓ Why Are Abstract Classes Important?

They help define a **blueprint for other classes**, ensuring a consistent
structure and enforcing shared behaviors across related objects.

---

## 🧱 Syntax & Structure

JavaScript doesn’t support "true" abstract classes natively like some languages
(e.g., Java), but you can **simulate** them using base classes and
error-throwing methods:

```javascript
class Animal {
  constructor() {
    if (new.target === Animal) {
      throw new Error('Cannot instantiate abstract class Animal directly.');
    }
  }

  makeSound() {
    throw new Error("Abstract method 'makeSound' must be implemented.");
  }
}
```

Child classes must **extend** this base and implement the missing methods:

```javascript
class Dog extends Animal {
  makeSound() {
    console.log('Woof!');
  }
}
```

---

## 🧪 Examples

### ✅ Basic Example

```javascript
class Shape {
  constructor() {
    if (new.target === Shape) {
      throw new Error('Cannot instantiate abstract class Shape directly.');
    }
  }

  draw() {
    throw new Error('draw() must be implemented.');
  }
}

class Circle extends Shape {
  draw() {
    console.log('Drawing a circle...');
  }
}

const myCircle = new Circle();
myCircle.draw(); // Output: Drawing a circle...
```

---

### 🌍 Real-World Use Case

Imagine a **payment system** with different payment methods:

```javascript
class PaymentProcessor {
  constructor() {
    if (new.target === PaymentProcessor) {
      throw new Error('Cannot instantiate abstract class.');
    }
  }

  processPayment() {
    throw new Error('processPayment() must be implemented.');
  }
}

class PayPal extends PaymentProcessor {
  processPayment() {
    console.log('Processing payment through PayPal.');
  }
}

class CreditCard extends PaymentProcessor {
  processPayment() {
    console.log('Processing payment through Credit Card.');
  }
}
```

> ✅ This ensures that _all payment methods_ have a `processPayment()` method.

---

## 📍 When to Use Abstract Classes

Use them when:

- You want to define a **common interface or contract** for subclasses.
- You have **shared logic** but need subclasses to define their own specific
  behaviors.
- You want to **prevent instantiation** of a base class.

Common use cases:

- UI components (e.g., Button, Checkbox, InputField)
- File system (e.g., File, Folder)
- Game elements (e.g., Character, Enemy, Weapon)

---

## ⚠️ Gotchas & Tips

🔸 **JavaScript doesn't have built-in abstract classes** – simulate them using
base classes and manual checks. 🔸 Always use `new.target` in constructors to
block direct instantiation. 🔸 Throw errors inside methods that should be
overridden. 🔸 Avoid implementing too much logic in the abstract class; keep it
focused on shared structure.
