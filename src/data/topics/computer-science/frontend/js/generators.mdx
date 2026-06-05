# 📘 JavaScript Generators Guide

---

## 🧠 1. Definition

A **Generator** is a special type of function in JavaScript that can be paused
and resumed. It returns an **iterator**, allowing you to control the function
execution step-by-step.

> Generator functions use the `function*` syntax and `yield` keyword to pause
> execution.

---

## 🧪 2. Syntax

```javascript
function* generatorFunction() {
  yield value1;
  yield value2;
  // ...
}
```

- `function*` declares a generator function.
- `yield` pauses the function and returns a value.
- `.next()` resumes the function from where it was paused.

---

## ⚙️ 3. Basic Usage

```javascript
function* simpleGenerator() {
  yield 'Hello';
  yield 'World';
}

const gen = simpleGenerator();

console.log(gen.next()); // { value: 'Hello', done: false }
console.log(gen.next()); // { value: 'World', done: false }
console.log(gen.next()); // { value: undefined, done: true }
```

---

## 🔁 4. Looping Through a Generator

```javascript
function* countToThree() {
  yield 1;
  yield 2;
  yield 3;
}

for (let value of countToThree()) {
  console.log(value);
}
// Output: 1 2 3
```

---

## 🧰 5. Use Case: Custom Iterators

```javascript
function* idGenerator() {
  let id = 1;
  while (true) {
    yield id++;
  }
}

const ids = idGenerator();
console.log(ids.next().value); // 1
console.log(ids.next().value); // 2
console.log(ids.next().value); // 3
```

---

## 🔁 6. Generator with Parameters

```javascript
function* multiplyGenerator(num) {
  yield num * 1;
  yield num * 2;
  yield num * 3;
}

const gen = multiplyGenerator(5);
console.log(gen.next().value); // 5
console.log(gen.next().value); // 10
console.log(gen.next().value); // 15
```

---

## 🧪 7. Passing Data to Generator with `.next(value)`

```javascript
function* interactGenerator() {
  const name = yield "What's your name?";
  yield `Hello, ${name}`;
}

const gen = interactGenerator();
console.log(gen.next().value); // "What's your name?"
console.log(gen.next('Ravi').value); // "Hello, Ravi"
```

---

## 🛑 8. Generator Completion

- A generator is done when:

  - It finishes execution
  - Or it hits a `return` statement

```javascript
function* doneExample() {
  yield 1;
  return 2;
  yield 3; // never reached
}

const gen = doneExample();
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: true }
console.log(gen.next()); // { value: undefined, done: true }
```

---

## ⚠️ 9. Error Handling in Generators

```javascript
function* errorGen() {
  try {
    yield 1;
  } catch (e) {
    console.log('Caught:', e);
  }
}

const gen = errorGen();
gen.next();
gen.throw(new Error('Something went wrong')); // Caught: Error
```

---

## 🔄 10. Delegating with `yield*`

```javascript
function* subGenerator() {
  yield 'A';
  yield 'B';
}

function* mainGenerator() {
  yield 1;
  yield* subGenerator(); // delegate to subGenerator
  yield 3;
}

const gen = mainGenerator();
console.log([...gen]); // [1, "A", "B", 3]
```

---

## 💡 11. Real-World Use Cases

| Use Case                  | Description                                |
| ------------------------- | ------------------------------------------ |
| Lazy Evaluation           | Generate large sequences on-demand         |
| Infinite Data Structures  | e.g., paginated data, ID generators        |
| State Machines            | Maintain internal state between calls      |
| Asynchronous Control Flow | With async generators and `for await...of` |

---

## 🚀 12. Async Generators (Bonus)

```javascript
async function* asyncNumbers() {
  yield 1;
  yield 2;
  yield 3;
}

(async () => {
  for await (let num of asyncNumbers()) {
    console.log(num);
  }
})();
```

---

## ✅ 13. Summary Table

| Keyword     | Purpose                                |
| ----------- | -------------------------------------- |
| `function*` | Declares a generator function          |
| `yield`     | Pauses function and returns value      |
| `.next()`   | Resumes execution and sends value in   |
| `.throw()`  | Injects error inside generator         |
| `yield*`    | Delegates control to another generator |
