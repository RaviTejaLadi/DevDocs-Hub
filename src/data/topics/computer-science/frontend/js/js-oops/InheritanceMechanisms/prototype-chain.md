# 🧠 Prototype Chain - Explained Simply

JavaScript uses something called a **prototype chain** to allow objects to
inherit features from other objects. Let’s break it down step-by-step.

---

## 📌 Definition

The **prototype chain** is a mechanism in JavaScript where objects can inherit
properties and methods from other objects via the `__proto__` link.

> Every object has a hidden `[[Prototype]]` (accessible via `__proto__`) that
> points to another object — forming a chain.

---

## ❓ Why is it Important?

It’s how **inheritance** works in JavaScript. Instead of duplicating code, you
can define shared methods on a prototype and have all similar objects reuse them
— saving memory and keeping code DRY (Don't Repeat Yourself).

---

## 🧱 Syntax/Structure

```javascript
function Animal(name) {
  this.name = name;
}

Animal.prototype.sayHello = function () {
  console.log(`Hi, I'm ${this.name}`);
};

const dog = new Animal('Buddy');

// Inheritance happens through the prototype chain
console.log(dog.__proto__ === Animal.prototype); // true
```

You can also use `Object.create()` to set the prototype manually:

```javascript
const animal = {
  speak() {
    console.log('Animal speaks');
  },
};

const dog = Object.create(animal);
dog.speak(); // Inherited from animal
```

---

## 🔍 Examples

### 💡 Basic Example

```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

const alice = new Person('Alice');
alice.greet(); // Hello, my name is Alice
```

➡️ Here, `alice` gets the `greet()` method from `Person.prototype` via the
prototype chain.

---

### 🌐 Real-World Use Case

```javascript
const vehicle = {
  start() {
    console.log('Engine started');
  },
};

const car = Object.create(vehicle);
car.drive = function () {
  console.log('Car is driving');
};

car.start(); // Inherited from vehicle
car.drive(); // Own method
```

➡️ In a system managing cars, bikes, etc., you can define common methods (like
`start()`) on a shared prototype to avoid duplication.

---

## 🛠️ When/Where to Use It

- Creating shared methods for constructors (e.g., `Array.prototype`,
  `Date.prototype`)
- Implementing inheritance between objects
- Optimizing memory usage by avoiding duplicate method definitions

---

## ⚠️ Gotchas/Tips

✅ **Use `Object.create()`** for simple prototypal inheritance. ⚠️ **Avoid
modifying `__proto__` directly** — it's slower and discouraged. ✅ Use
`Object.getPrototypeOf(obj)` instead of `obj.__proto__`. ⚠️ Changing prototypes
after instantiation can lead to unpredictable behavior.
