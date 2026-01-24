# JavaScript `call`, `apply`, and `bind`

These three methods are used to **control the context (`this`)** inside
functions and to **invoke functions** in a flexible way.

---

## 📌 1. `call()`

### ✅ Definition:

The `call()` method calls a function with a given `this` value and **arguments
provided individually**.

---

### 📘 Syntax:

```javascript
functionName.call(thisArg, arg1, arg2, ...);
```

- `thisArg`: The value to use as `this` when calling the function.
- `arg1, arg2, ...`: Arguments passed **individually** to the function.

---

### 🔧 Usage:

- To **borrow a method** from another object.
- To **set `this` explicitly**.

---

### ✅ Example:

```javascript
function greet(greeting, punctuation) {
  console.log(`${greeting}, ${this.name}${punctuation}`);
}

const person = { name: 'Ravi' };

greet.call(person, 'Hello', '!');
// Output: Hello, Ravi!
```

---

## 📌 2. `apply()`

### ✅ Definition:

The `apply()` method calls a function with a given `this` value and **arguments
provided as an array (or array-like object)**.

---

### 📘 Syntax:

```javascript
functionName.apply(thisArg, [arg1, arg2, ...]);
```

- `thisArg`: The value to use as `this`.
- `[arg1, arg2, ...]`: Arguments passed **as an array**.

---

### 🔧 Usage:

- Similar to `call()`, but when arguments are **already in an array**.

---

### ✅ Example:

```javascript
function greet(greeting, punctuation) {
  console.log(`${greeting}, ${this.name}${punctuation}`);
}

const person = { name: 'Ravi' };

greet.apply(person, ['Hi', '.']);
// Output: Hi, Ravi.
```

---

## 📌 3. `bind()`

### ✅ Definition:

The `bind()` method returns a **new function**, with `this` bound to the
provided value. It **does not invoke** the function immediately.

---

### 📘 Syntax:

```javascript
const newFunc = functionName.bind(thisArg, arg1, arg2, ...);
```

- `thisArg`: The value to use as `this`.
- `arg1, arg2, ...`: Arguments optionally pre-filled (partial application).

---

### 🔧 Usage:

- Useful when **passing a method as a callback** and you want to preserve
  `this`.
- Used for **partial function application**.

---

### ✅ Example:

```javascript
function greet(greeting, punctuation) {
  console.log(`${greeting}, ${this.name}${punctuation}`);
}

const person = { name: 'Ravi' };

const greetPerson = greet.bind(person, 'Hey');
greetPerson('?');
// Output: Hey, Ravi?
```

---

## 🆚 Comparison Table

| Feature            | `call()`        | `apply()`        | `bind()`                        |
| ------------------ | --------------- | ---------------- | ------------------------------- |
| Executes function? | ✅ Yes          | ✅ Yes           | ❌ No (returns new function)    |
| Arguments format   | List (`a, b`)   | Array (`[a, b]`) | List or partial (`a, b`)        |
| Changes `this`?    | ✅ Yes          | ✅ Yes           | ✅ Yes (permanently for new fn) |
| Returns value?     | Function result | Function result  | New bound function              |

---

## ✅ Real-World Use Case: Method Borrowing

```javascript
const person1 = {
  name: 'Alice',
  greet() {
    console.log(`Hello, I'm ${this.name}`);
  },
};

const person2 = { name: 'Bob' };

person1.greet.call(person2); // Output: Hello, I'm Bob
```

---

## 🧠 Summary

- Use **`call()`** when you have arguments individually.
- Use **`apply()`** when arguments are in an array.
- Use **`bind()`** when you need a new function with a bound `this`.
