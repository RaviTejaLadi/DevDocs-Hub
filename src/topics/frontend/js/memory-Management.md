# 🧠 JavaScript Memory Management

## 📘 1. Definition

**Memory management** in JavaScript is the process of:

- **Allocating memory** when variables, objects, arrays, or functions are
  created.
- **Using memory** during program execution.
- **Automatically reclaiming memory** no longer needed using **Garbage
  Collection (GC)**.

JavaScript is a **garbage-collected language**, meaning memory deallocation is
mostly automatic.

---

## 📦 2. Memory Lifecycle Phases

### 1. **Allocation**: Reserving memory.

### 2. **Use**: Reading or writing to memory.

### 3. **Release**: Freeing memory when no longer needed.

> ✅ Most of this is handled automatically by the JS engine (like V8 in Chrome),
> but poor coding can lead to memory leaks.

---

## ⚙️ 3. Memory Allocation

### ✅ Syntax: Variable/Value Declarations

```js
// Primitives
let num = 10; // Allocates memory for a number
let str = 'Hello'; // Allocates memory for a string

// Objects
let obj = { name: 'Ravi' }; // Allocates for object + its properties

// Arrays
let arr = [1, 2, 3]; // Allocates memory for array structure

// Functions
function greet() {
  console.log('Hi!');
}
```

> JS automatically allocates memory during declaration.

---

## 🗑️ 4. Garbage Collection (GC)

### ✅ Definition:

Garbage Collection is the **automatic** process of finding **unused variables or
values** and **freeing their memory**.

### ✅ Rule Used: **Reachability**

- Values are **reachable** if:

  - They're in the current scope.
  - They're referenced by reachable values.

### ✅ Common Algorithm: **Mark and Sweep**

#### Steps:

1. GC roots (like global object) are "marked."
2. Any reference from GC roots are recursively marked.
3. Unmarked values are deleted (swept).

---

## 📉 5. Memory Leaks

A **memory leak** happens when memory that’s no longer needed is **not
released**.

### ✅ Common Causes:

| Cause                   | Description                                 |
| ----------------------- | ------------------------------------------- |
| Unused global variables | Never removed, stay in memory               |
| Closures holding refs   | Inner functions holding outdated outer refs |
| DOM references          | Variables referencing removed DOM nodes     |
| Detached elements       | JS refs to DOM nodes removed from DOM       |

### ❌ Example:

```js
let leaks = [];
function addLeak() {
  leaks.push(document.querySelector('body')); // Memory leak if repeated
}
```

---

## 🔍 6. Usage Best Practices

### ✅ Do:

- Use `let`/`const` (not `var`) for scope-bound allocation
- Set unused objects to `null` to dereference them
- Use **WeakMap/WeakSet** for optional memory-managed collections

### ❌ Don’t:

- Keep unnecessary references (especially in long-lived apps like SPAs)
- Overuse global variables
- Forget to clean up event listeners

---

## 🧠 7. WeakMap / WeakSet (Memory-safe structures)

### ✅ Definition:

Collections that **do not prevent GC** if the key becomes unreachable.

### 🔐 Syntax:

```js
const cache = new WeakMap();

(function () {
  let user = { name: 'Ravi' };
  cache.set(user, 'cached');
  // Once user is out of scope, memory is freed
})();
```

---

## 🔄 8. Closures & Memory

### ✅ Closures can cause memory leaks if they capture large or unnecessary data.

### 🧠 Example:

```js
function outer() {
  let bigData = new Array(1000000).fill('data');

  return function inner() {
    console.log(bigData[0]); // inner holds ref to bigData
  };
}
let leaky = outer();
```

> `bigData` cannot be garbage collected because `inner` still references it.

---

## 🧼 9. Manual Memory Management? Nope.

You **cannot** manually free memory in JS like in C++ (`free()`), but:

- You can **dereference** by setting variables to `null` or `undefined`.
- You can **unregister event listeners**, remove timers, etc.

```js
element.removeEventListener('click', handler);
timerId = null;
largeArray = null;
```

---

## 📊 10. Visual Summary

```plaintext
┌────────────────────┐
│   JS Memory Model  │
├────────────────────┤
│ Stack (Primitives) │  ← Fast, small
├────────────────────┤
│ Heap (Objects)     │  ← Large, GC happens here
└────────────────────┘
         ↓
 [Reachability Checked]
         ↓
 [Unused memory swept]
```

---

## 🧪 11. Debugging Tools

### 🔍 Chrome DevTools → Memory Tab

- Use **Heap Snapshot**
- Use **Allocation Timeline**
- Look for **Detached Nodes**, **Retained Size**, etc.

---

## ✅ 12. Final Best Practices

| Practice               | Benefit                   |
| ---------------------- | ------------------------- |
| Use local scopes       | Automatic cleanup         |
| Nullify large objects  | Help GC                   |
| Use WeakMaps/Sets      | Prevent strong references |
| Remove event listeners | Prevent DOM leaks         |
| Avoid globals          | Reduce long-lived memory  |
| Monitor with DevTools  | Debug leaks               |

---

## 🧾 13. References

- [MDN - Memory Management](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management)
- [Google Developers: JS Memory Leaks](https://developers.google.com/web/tools/memory-problems)
