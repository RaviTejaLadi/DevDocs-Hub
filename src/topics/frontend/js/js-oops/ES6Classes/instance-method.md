# 📘 Instance Methods

## 📑 Table of Contents

1. 📖 [Definition](#definition)
2. ❓ [Why is it Important?](#why-is-it-important)
3. 🧱 [Syntax / Structure](#syntax--structure)
4. 🧪 [Examples](#examples)

   - 🔹 [Basic Example](#basic-example)
   - 🌍 [Real-World Use Case](#real-world-use-case)

5. 🚀 [When / Where to Use It](#when--where-to-use-it)
6. ⚠️ [Gotchas / Tips](#gotchas--tips)

---

## 📖 Definition

**Instance methods** are functions defined inside a class that can be used by
**instances** (objects) created from that class.

---

## ❓ Why is it Important?

Instance methods let each object created from a class have behavior — things it
can **do** — while keeping code organized and reusable.

---

## 🧱 Syntax / Structure

```javascript
class ClassName {
  methodName() {
    // method code
  }
}

const obj = new ClassName();
obj.methodName(); // calling the instance method
```

---

## 🧪 Examples

### 🔹 Basic Example

```javascript
class Dog {
  bark() {
    console.log('Woof!');
  }
}

const myDog = new Dog();
myDog.bark(); // Output: Woof!
```

### 🌍 Real-World Use Case

```javascript
class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(
      `${this.owner} deposited $${amount}. New balance: $${this.balance}`
    );
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log('Insufficient funds!');
    } else {
      this.balance -= amount;
      console.log(
        `${this.owner} withdrew $${amount}. Remaining balance: $${this.balance}`
      );
    }
  }
}

const account = new BankAccount('Alice', 100);
account.deposit(50); // Alice deposited $50. New balance: $150
account.withdraw(30); // Alice withdrew $30. Remaining balance: $120
```

---

## 🚀 When / Where to Use It

Use instance methods when:

- You need **object-specific behavior** (e.g., actions like `.save()`,
  `.start()`, `.withdraw()`).
- Working with **OOP (Object-Oriented Programming)** patterns.
- Building **modular, reusable components** in frameworks like React or Node.js.

---

## ⚠️ Gotchas / Tips

✅ **Don't forget `this.`** — It refers to the current instance. 🚫 Avoid using
**arrow functions** for instance methods inside classes — they don’t bind `this`
correctly in all contexts. 📚 Group related methods inside classes for better
readability and structure. 🧼 Keep methods small and focused — one method should
do one thing well.
