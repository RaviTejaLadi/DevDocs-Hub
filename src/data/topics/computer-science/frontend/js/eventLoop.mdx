# 📘 JavaScript Event Loop

---

## 🧠 Definition

The **Event Loop** is a mechanism in JavaScript that manages **execution of
code**, **event handling**, and **asynchronous operations** (like `setTimeout`,
`fetch`, etc.) in a **non-blocking way** using a **single-threaded** model.

> JS uses the event loop to handle **concurrent operations** like I/O while
> remaining single-threaded.

---

## 🏗️ Key Concepts

| Concept                         | Description                                               |
| ------------------------------- | --------------------------------------------------------- |
| **Call Stack**                  | The stack that tracks function execution (LIFO).          |
| **Web APIs / Browser APIs**     | Browser-provided APIs (e.g., setTimeout, DOM, AJAX).      |
| **Callback Queue / Task Queue** | Queue of functions (callbacks) waiting to be executed.    |
| **Microtask Queue**             | Higher-priority queue (e.g., promises, `queueMicrotask`). |
| **Event Loop**                  | The mechanism that coordinates all of the above.          |

---

## 📜 Syntax or Code Setup

There is **no syntax for the event loop itself**. It’s how JS internally manages
code execution.

However, you interact with it indirectly via:

```javascript
setTimeout(() => { ... });       // Macro task
Promise.resolve().then(() => { ... }); // Microtask
```

---

## ⚙️ How the Event Loop Works (Step-by-step)

1. JS starts executing code from top to bottom via **Call Stack**.
2. If it encounters **synchronous code**, it's executed immediately.
3. If it encounters **asynchronous code** (e.g. `setTimeout`, `Promise`):

   - It is sent to **Web APIs**.

4. Once async task is complete, the callback is moved to either:

   - **Microtask Queue** (Promise `.then`)
   - **Callback Queue** (e.g., `setTimeout`)

5. The **Event Loop**:

   - Checks if the Call Stack is empty.
   - If yes, it pushes microtasks first (priority).
   - Then, it processes macrotasks from the callback queue.

---

## 📊 Visual Diagram (ASCII-Based)

```
+------------------+       +----------------+        +------------------+
|  Call Stack      |<----->|  Event Loop    |<------>| Callback Queue   |
| (Executes code)  |       |  (Main engine) |        | (Macrotasks)     |
+------------------+       +----------------+        +------------------+
         ↑
         |
         |
         ↓
+------------------+
| Microtask Queue  |
| (Promises, etc.) |
+------------------+

    ↓ Web APIs →
[ setTimeout, fetch, DOM, etc. ]
```

---

## ✅ Example: Event Loop in Action

```javascript
console.log('Start');

setTimeout(() => {
  console.log('setTimeout'); // Macrotask
}, 0);

Promise.resolve().then(() => {
  console.log('Promise'); // Microtask
});

console.log('End');
```

### 🔄 Execution Order:

1. `console.log('Start')` → Call stack
2. `setTimeout(...)` → Web API → Callback Queue
3. `Promise.resolve().then(...)` → Microtask Queue
4. `console.log('End')` → Call stack
5. Event Loop → Microtask Queue → logs `Promise`
6. Event Loop → Callback Queue → logs `setTimeout`

### 🧾 Output:

```
Start
End
Promise
setTimeout
```

---

## 🛠️ Real-World Usage

- **setTimeout / setInterval**: Schedule delayed execution.
- **fetch / XMLHttpRequest**: Handle asynchronous data fetching.
- **Promises**: Handle async operations in a cleaner way.
- **Event Listeners**: Register callbacks for user interactions.

---

## 📌 Microtask vs Macrotask

| Feature  | Microtask (`Promise`)         | Macrotask (`setTimeout`)    |
| -------- | ----------------------------- | --------------------------- |
| Queue    | Microtask Queue               | Callback Queue              |
| Priority | Higher                        | Lower                       |
| Examples | `.then()`, `queueMicrotask()` | `setTimeout`, `setInterval` |

---

## 🧠 Interview Notes

- JS is **single-threaded** but **asynchronous**, thanks to the event loop.
- Microtasks (e.g. Promises) have **higher priority** than macrotasks.
- **Call stack is always cleared first** before micro/macro tasks are handled.
- `async/await` under the hood uses Promises → microtask queue.

---

## 🧪 Quiz

```javascript
console.log('1');

setTimeout(() => console.log('2'), 0);

Promise.resolve().then(() => console.log('3'));

console.log('4');
```

**Output?**

```
1
4
3
2
```

---

## 📎 Summary

| Component       | Role                                    |
| --------------- | --------------------------------------- |
| Call Stack      | Runs synchronous code                   |
| Web APIs        | Handle async actions like timers, fetch |
| Microtask Queue | Immediate tasks (Promises)              |
| Callback Queue  | Deferred tasks (setTimeout)             |
| Event Loop      | Manages queues and execution            |
