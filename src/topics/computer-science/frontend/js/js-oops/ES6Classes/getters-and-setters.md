# 🧠 Getters and Setters

## 📌 Definition

**Getters** and **Setters** are special methods in JavaScript that allow you to
control access to an object's properties.

- A **getter** retrieves (gets) the value of a property.
- A **setter** updates (sets) the value of a property.

---

## ❓ Why Is It Important?

They help **encapsulate** data and add **control logic** when accessing or
modifying properties. Great for validation, computed values, or debugging.

---

## 🧱 Syntax / Structure

```javascript
class Example {
  constructor(name) {
    this._name = name; // Use _ to indicate a private variable
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }
}
```

---

## 💡 Examples

### 🔹 Basic Example

```javascript
class Person {
  constructor(age) {
    this._age = age;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    if (value < 0) {
      console.log("Age can't be negative!");
    } else {
      this._age = value;
    }
  }
}

const user = new Person(25);
console.log(user.age); // ➤ 25
user.age = -5; // ➤ "Age can't be negative!"
user.age = 30;
console.log(user.age); // ➤ 30
```

---

### 🌍 Real-World Use Case: Formatting Full Name

```javascript
class User {
  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(name) {
    [this.firstName, this.lastName] = name.split(' ');
  }
}

const person = new User('John', 'Doe');
console.log(person.fullName); // ➤ "John Doe"

person.fullName = 'Jane Smith';
console.log(person.firstName); // ➤ "Jane"
console.log(person.lastName); // ➤ "Smith"
```

---

## 📍 When / Where to Use It

- 🔐 Encapsulation (hide internal logic or validation)
- 🧮 Computed properties (like `fullName`)
- 🧪 Debugging or logging access to properties
- 🚫 Validating input before updating a value

---

## ⚠️ Gotchas / Tips

✅ **Use `_` prefix** (like `_age`) to distinguish internal variables ❌ **Avoid
infinite loops** inside getters/setters (don’t call the getter/setter from
itself) 🧠 **Don’t overuse** – use only when logic is needed (else simple
properties work fine) 🔍 **Getter-only** can make a property read-only 🛠 Can be
used in **plain objects** too:

```javascript
const user = {
  firstName: 'Alice',
  lastName: 'Johnson',
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(user.fullName); // ➤ "Alice Johnson"
```
