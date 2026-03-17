# 📘 Explicit Binding: Using `call()`, `apply()`, and `bind()` to Control `this` Context

JavaScript gives you tools to **manually control what `this` refers to** in a
function using `call()`, `apply()`, and `bind()`. Let’s break it down in a
simple way.

---

## 🔍 Definition

**Explicit binding** lets you manually set the value of `this` inside a function
using `call()`, `apply()`, or `bind()`.

---

## ❓ Why is it important?

In JavaScript, `this` can be unpredictable. These methods let you **control
exactly what `this` refers to**, especially when borrowing methods or working
with callbacks.

---

## 🧱 Syntax/Structure

```javascript
functionName.call(thisArg, arg1, arg2, ...)
functionName.apply(thisArg, [arg1, arg2, ...])
const newFunc = functionName.bind(thisArg)
```

---

## 💡 Examples

### 🧪 Basic Example

```javascript
const person = {
  name: 'Alice',
};

function greet(greeting) {
  console.log(`${greeting}, my name is ${this.name}`);
}

greet.call(person, 'Hello'); // Hello, my name is Alice
```

### 🌍 Real-World Use Case

Suppose you're using a method in one object with another object’s data:

```javascript
const user1 = {
  name: 'John',
  sayHello: function () {
    console.log(`Hi, I’m ${this.name}`);
  },
};

const user2 = { name: 'Emma' };

// Borrow method from user1 for user2
user1.sayHello.call(user2); // Hi, I’m Emma
```

Or fixing `this` in asynchronous code:

```javascript
const timer = {
  seconds: 0,
  start: function () {
    setInterval(
      function () {
        this.seconds++;
        console.log(this.seconds);
      }.bind(this),
      1000
    );
  },
};

timer.start(); // Works correctly because of bind()
```

---

## 🛠️ When/Where to Use It

- When borrowing functions between objects.
- To fix `this` inside asynchronous functions (like in
  `setTimeout`/`setInterval`).
- In event handlers or callback functions where `this` might get lost.
- When you want to create a new function with locked `this` using `bind()`.

---

## ⚠️ Gotchas/Tips

- `call()` and `apply()` **invoke the function immediately**, while `bind()`
  **returns a new function**.
- `apply()` is great when you have arguments as an array.
- Don’t forget: arrow functions don’t have their own `this` — they inherit from
  their parent scope.
- Using `bind()` repeatedly does **not** rebind a function. The first bind
  sticks.
