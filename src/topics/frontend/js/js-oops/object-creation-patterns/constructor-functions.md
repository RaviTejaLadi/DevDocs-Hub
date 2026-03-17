# 🏗️ Constructor Functions

Learn how to create reusable objects in JavaScript using constructor functions!

---

## 🔍 Definition

A **constructor function** is a special type of function used to create and
initialize objects in JavaScript.

---

## ❓ Why Is It Important?

Constructor functions help you create **multiple objects with the same structure
and behavior**—great for code reuse and object-oriented programming.

---

## 🧱 Syntax / Structure

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}
```

- Capitalize the function name (convention)
- Use `this` to assign values to object properties
- Use `new` keyword when creating objects

---

## 💡 Examples

### 🧪 Basic Example

```javascript
function Car(make, model) {
  this.make = make;
  this.model = model;
}

const myCar = new Car('Toyota', 'Corolla');

console.log(myCar.make); // Output: Toyota
console.log(myCar.model); // Output: Corolla
```

### 🌍 Real-World Use Case

```javascript
function User(username, email) {
  this.username = username;
  this.email = email;
  this.login = function () {
    console.log(`${this.username} has logged in.`);
  };
}

const user1 = new User('jane_doe', 'jane@example.com');
user1.login(); // Output: jane_doe has logged in.
```

This is useful in web apps where you manage multiple users.

---

## 📌 When/Where to Use It

- When you need to **create many similar objects**
- When building **custom data types** or **models** (e.g., `User`, `Product`)
- Great for **object-oriented programming patterns**

---

## ⚠️ Gotchas / Tips

✅ **Always use `new`** when calling constructor functions:

```js
const obj = new MyConstructor(); // Correct ✅
```

❌ Calling without `new` won't create an object:

```js
const obj = MyConstructor(); // Incorrect ❌
```

💡 Use methods on the prototype to save memory:

```js
function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function () {
  console.log(`${this.name} makes a noise.`);
};
```
