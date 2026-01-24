# 🔒 Private Fields in JavaScript

Private fields in JavaScript help you keep certain parts of a class _hidden_
from the outside world. Let’s break it down simply with examples and tips!

---

## 📚 Table of Contents

1. [🔍 Definition](#-definition)
2. [❓ Why is it important?](#-why-is-it-important)
3. [🛠️ Syntax/Structure](#-syntaxstructure)
4. [💡 Examples](#-examples)

   - [✅ Basic Example](#-basic-example)
   - [🌍 Real-World Use Case](#-real-world-use-case)

5. [📌 When/Where to Use It](#-whenwhere-to-use-it)
6. [⚠️ Gotchas/Tips](#-gotchastips)

---

## 🔍 Definition

**Private fields** are variables in a class that are only accessible _inside_
that class — not from the outside code.

---

## ❓ Why is it important?

Private fields keep your data **safe and encapsulated**, preventing outside code
from accidentally changing internal state.

---

## 🛠️ Syntax/Structure

To create a private field, use a `#` prefix before the name:

```js
class MyClass {
  #privateData = 'secret';

  getSecret() {
    return this.#privateData;
  }
}
```

- The `#` makes the field private.
- Access is only allowed _within_ the class.

---

## 💡 Examples

### ✅ Basic Example

```js
class User {
  #password;

  constructor(password) {
    this.#password = password;
  }

  checkPassword(input) {
    return input === this.#password;
  }
}

const user = new User('1234');
console.log(user.checkPassword('1234')); // true
console.log(user.#password); // ❌ Error: Private field not accessible
```

---

### 🌍 Real-World Use Case

Imagine you’re building a banking app:

```js
class BankAccount {
  #balance = 0;

  deposit(amount) {
    if (amount > 0) this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount();
account.deposit(1000);
console.log(account.getBalance()); // 1000
console.log(account.#balance); // ❌ Error
```

This ensures no one can directly change the balance from outside the class.

---

## 📌 When/Where to Use It

Use private fields when:

- You want to protect sensitive data (like passwords or balances).
- Internal logic or helper variables shouldn't be exposed.
- You’re building components or libraries with strict interfaces.

---

## ⚠️ Gotchas/Tips

- ❗ You **must** declare private fields with `#` before using them.
- ❗ They only work in **classes**, not in plain objects.
- ✅ Use private fields for **data hiding** and **cleaner APIs**.
- ❌ Don't try to access them outside — it’ll throw an error, not just return
  `undefined`.
