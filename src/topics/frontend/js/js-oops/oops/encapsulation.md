# 🌐 Encapsulation

## 📚 Table of Contents

1. [🔍 Definition](#-definition)
2. [❓ Why is it Important?](#-why-is-it-important)
3. [🧱 Syntax/Structure](#-syntaxstructure)
4. [🧪 Examples](#-examples)

   - [⚙️ Basic Example](#-basic-example)
   - [🏢 Real-World Use Case](#-real-world-use-case)

5. [📌 When/Where to Use It](#-whenwhere-to-use-it)
6. [⚠️ Gotchas/Tips](#-gotchastips)

---

## 🔍 Definition

Encapsulation is the concept of bundling data (properties) and methods
(functions) that operate on that data into a single unit—usually an object or
class—and restricting direct access to some of that data.

---

## ❓ Why is it Important?

Encapsulation helps **protect your code** by hiding internal details and only
exposing what’s necessary. This reduces bugs, improves maintainability, and
keeps your code organized.

---

## 🧱 Syntax/Structure

```javascript
class Person {
  #age; // private field (encapsulated)

  constructor(name, age) {
    this.name = name;
    this.#age = age;
  }

  getAge() {
    return this.#age; // controlled access
  }

  setAge(newAge) {
    if (newAge > 0) {
      this.#age = newAge;
    }
  }
}
```

- `#age`: A private field that cannot be accessed directly outside the class.
- `getAge()` and `setAge()`: Public methods to interact with private data
  safely.

---

## 🧪 Examples

### ⚙️ Basic Example

```javascript
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
account.deposit(100);
console.log(account.getBalance()); // ✅ 100
console.log(account.#balance); // ❌ Error: Private field
```

### 🏢 Real-World Use Case

**User Authentication System**

```javascript
class User {
  #password;

  constructor(username, password) {
    this.username = username;
    this.#password = password;
  }

  validatePassword(input) {
    return this.#password === input;
  }
}

const user = new User('admin', 'secure123');
console.log(user.validatePassword('secure123')); // ✅ true
console.log(user.#password); // ❌ Error: Private field
```

Encapsulation hides sensitive data like passwords and only allows access through
safe methods.

---

## 📌 When/Where to Use It

- 🔐 Sensitive data (e.g., passwords, tokens)
- 🧩 Modular components (e.g., classes in large apps)
- ⚙️ APIs or Libraries (hide internal logic)
- 🧼 Maintainable and clean codebases

---

## ⚠️ Gotchas/Tips

- ⚠️ **Don’t over-hide**: Only make private what truly needs protection.
- ✅ Use `#` for true private fields (ES6+).
- 📦 Use `getters/setters` to manage access to private data safely.
- 🧪 Keep your methods focused—avoid mixing logic and data validation in the
  same function.
