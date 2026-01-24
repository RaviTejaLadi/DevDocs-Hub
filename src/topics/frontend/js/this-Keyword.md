# JavaScript `this` Keyword 📌

## 1. Definition 🧠

In JavaScript, the `this` keyword refers to the **object it belongs to**. Its
value is determined **by how a function is called**, not where it is defined.

---

## 2. Syntax 🧾

```javascript
this;
```

It is used within functions, methods, constructors, or globally.

---

## 3. Usage by Context 📍

### A. Global Context 🌍

In the browser:

```javascript
console.log(this); // window (global object)
```

In Node.js:

```javascript
console.log(this); // {}
```

---

### B. Inside Regular Functions 🧩

```javascript
function show() {
  console.log(this);
}

show(); // In browser: window, In strict mode: undefined
```

---

### C. Inside Object Methods 🧱

```javascript
const person = {
  name: 'Ravi',
  greet() {
    console.log(this.name);
  },
};

person.greet(); // Ravi
```

> 💡 Here, `this` refers to the `person` object.

---

### D. With Arrow Functions 🏹

```javascript
const person = {
  name: 'Ravi',
  greet: () => {
    console.log(this.name);
  },
};

person.greet(); // undefined
```

> ⚠️ Arrow functions **do not have their own `this`**. They inherit `this` from
> the surrounding lexical context.

---

### E. Constructor Functions 🏗️

```javascript
function Person(name) {
  this.name = name;
}

const p1 = new Person('Ravi');
console.log(p1.name); // Ravi
```

> ✅ Here, `this` refers to the newly created object.

---

### F. Class Context 🏫

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(this.name);
  }
}

const p = new Person('Ravi');
p.greet(); // Ravi
```

> `this` inside a class refers to the instance created.

---

### G. In `setTimeout` or `setInterval` ⏱️

```javascript
const person = {
  name: 'Ravi',
  greet() {
    setTimeout(function () {
      console.log(this.name);
    }, 1000);
  },
};

person.greet(); // undefined
```

#### ✅ Using Arrow Function to Fix It:

```javascript
const person = {
  name: 'Ravi',
  greet() {
    setTimeout(() => {
      console.log(this.name);
    }, 1000);
  },
};

person.greet(); // Ravi
```

---

### H. Manual Binding using `call`, `apply`, `bind` 🔧

#### 🔹 `call()` - invokes the function with a given `this`

```javascript
function show() {
  console.log(this.name);
}

const user = { name: 'Ravi' };
show.call(user); // Ravi
```

#### 🔹 `apply()` - same as `call` but takes an array of arguments

```javascript
show.apply(user); // Ravi
```

#### 🔹 `bind()` - returns a new function with bound `this`

```javascript
const boundShow = show.bind(user);
boundShow(); // Ravi
```

---

### I. In Event Handlers 🎯

```javascript
const btn = document.querySelector('button');
btn.addEventListener('click', function () {
  console.log(this); // the button element
});
```

> ⚠️ Arrow functions in event handlers will not refer to the element:

```javascript
btn.addEventListener('click', () => {
  console.log(this); // undefined or window
});
```

---

## 4. Summary Table 📋

| Context               | Value of `this`             |
| --------------------- | --------------------------- |
| Global (non-strict)   | `window`                    |
| Global (strict mode)  | `undefined`                 |
| Function (non-strict) | `window`                    |
| Function (strict)     | `undefined`                 |
| Object method         | That object                 |
| Arrow function        | Lexical parent context      |
| Constructor           | New instance                |
| `call`/`apply`/`bind` | Explicitly defined          |
| Class methods         | Class instance              |
| DOM event handler     | The element (in regular fn) |

---

## 5. Best Practices ✅

- Avoid using `this` in arrow functions if context is important.
- Use `bind`, `call`, or `apply` when passing methods as callbacks.
- Prefer class fields with arrow functions for auto-binding in React:

  ```js
  class App {
    handleClick = () => {
      console.log(this); // always bound to App
    };
  }
  ```
