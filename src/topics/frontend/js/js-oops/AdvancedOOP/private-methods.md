# 🕵️‍♂️ Private Methods in JavaScript - Explained Simply

## 📚 Table of Contents

1. [🔍 Definition](#-definition)
2. [🎯 Why is it Important?](#-why-is-it-important)
3. [🧱 Syntax/Structure](#-syntaxstructure)
4. [💡 Examples](#-examples)

   - [🧪 Basic Example](#-basic-example)
   - [🏗️ Real-World Use Case](#-real-world-use-case)

5. [📌 When/Where to Use It](#-whenwhere-to-use-it)
6. [⚠️ Gotchas/Tips](#-gotchastips)

---

## 🔍 Definition

**Private methods** are class methods that can only be accessed from **within
the class** they are defined in — not from outside.

---

## 🎯 Why is it Important?

Private methods help **encapsulate logic** and protect internal code from being
accidentally accessed or modified from outside the class. This promotes **clean,
secure, and maintainable code**.

---

## 🧱 Syntax/Structure

You define a private method by prefixing it with a `#` symbol inside a class:

```js
class MyClass {
  #privateMethod() {
    console.log('This is private');
  }

  publicMethod() {
    this.#privateMethod(); // Allowed
  }
}
```

Trying to access `#privateMethod` from outside the class will throw an error.

---

## 💡 Examples

### 🧪 Basic Example

```js
class Counter {
  #count = 0;

  #logCount() {
    console.log(`Count is: ${this.#count}`);
  }

  increment() {
    this.#count++;
    this.#logCount();
  }
}

const counter = new Counter();
counter.increment(); // ✅ Works fine
// counter.#logCount(); ❌ Error: Private method
```

---

### 🏗️ Real-World Use Case

Imagine you're building a **Bank Account** class. You want to keep sensitive
operations like calculating interest private:

```js
class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
    this.#logTransaction('deposit', amount);
  }

  withdraw(amount) {
    if (amount <= this.#balance) {
      this.#balance -= amount;
      this.#logTransaction('withdraw', amount);
    }
  }

  #logTransaction(type, amount) {
    console.log(`Transaction: ${type} of $${amount}`);
  }
}

const account = new BankAccount();
account.deposit(100);
// account.#logTransaction("hack", 1000); ❌ Not allowed
```

---

## 📌 When/Where to Use It

Use private methods when:

- You have **helper functions** meant only for internal class use.
- You want to **prevent misuse** of internal logic by external code.
- You're designing a **secure component** or library.

---

## ⚠️ Gotchas/Tips

✅ **Do:**

- Use private methods for code you want to protect or isolate.
- Keep your class interface clean and focused.

⚠️ **Avoid:**

- Trying to access private methods from outside—they’re **not accessible**, even
  through workarounds.
- Using private methods too much—**over-encapsulation** can make testing harder.

💡 Tip: This feature works only in **modern JavaScript environments (ES2022+)**
— make sure your environment supports it!
