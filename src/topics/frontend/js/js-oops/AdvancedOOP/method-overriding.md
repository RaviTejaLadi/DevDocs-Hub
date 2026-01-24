# 🧠 Method Overriding - Explained Simply

## 📚 Table of Contents

1. 🔍 [Definition](#definition)
2. 🎯 [Why is it Important?](#why-is-it-important)
3. 🧱 [Syntax / Structure](#syntax--structure)
4. 💡 [Examples](#examples)

   - [Basic Example](#basic-example)
   - [Real-World Use Case](#real-world-use-case)

5. 🛠️ [When/Where to Use It](#whenwhere-to-use-it)
6. ⚠️ [Gotchas / Tips](#gotchas--tips)

---

## 🔍 Definition

**Method Overriding** means redefining a method in a child (sub) class that
already exists in its parent (super) class.

---

## 🎯 Why is it Important?

It allows a subclass to provide a specific implementation of a method already
defined in its superclass — enabling **custom behavior** and **polymorphism** in
object-oriented programming.

---

## 🧱 Syntax / Structure

```javascript
class Parent {
  greet() {
    console.log('Hello from Parent');
  }
}

class Child extends Parent {
  greet() {
    // Method Overriding
    console.log('Hello from Child');
  }
}

const obj = new Child();
obj.greet(); // Output: Hello from Child
```

---

## 💡 Examples

### 🔹 Basic Example

```javascript
class Animal {
  speak() {
    console.log('Animal speaks');
  }
}

class Dog extends Animal {
  speak() {
    console.log('Dog barks');
  }
}

const pet = new Dog();
pet.speak(); // Output: Dog barks
```

### 🌍 Real-World Use Case

Suppose you have a base class for a payment system:

```javascript
class Payment {
  process() {
    console.log('Processing generic payment');
  }
}

class CreditCardPayment extends Payment {
  process() {
    console.log('Processing credit card payment');
  }
}

class PayPalPayment extends Payment {
  process() {
    console.log('Processing PayPal payment');
  }
}

function makePayment(paymentMethod) {
  paymentMethod.process();
}

makePayment(new CreditCardPayment()); // Output: Processing credit card payment
makePayment(new PayPalPayment()); // Output: Processing PayPal payment
```

---

## 🛠️ When/Where to Use It

- Creating **custom behavior** in child classes
- Implementing **polymorphic functions**
- Building **frameworks/libraries** where base methods are overridden for
  specific needs
- Inheritance-heavy codebases like **game engines**, **UI components**, or
  **payment systems**

---

## ⚠️ Gotchas / Tips

🔸 **Use `super()` if you still want to access parent method:**

```javascript
class Parent {
  greet() {
    console.log('Hi from Parent');
  }
}

class Child extends Parent {
  greet() {
    super.greet(); // Calls Parent's greet()
    console.log('Hi from Child');
  }
}
```

🔸 **Only override when necessary** — unnecessary overriding can make code
harder to maintain.

🔸 **Watch method names carefully** — a typo won’t override, it will just create
a new method.

🔸 Avoid overriding constructor logic unless you fully understand the parent’s
constructor and use `super()` properly.
