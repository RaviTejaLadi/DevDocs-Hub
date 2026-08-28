# 🧵 JavaScript Web Workers

## 🧠 Definition

A **Web Worker** is a JavaScript feature that allows you to run scripts in
**background threads**. This prevents blocking the main thread (UI thread),
enhancing performance and responsiveness—especially for CPU-intensive tasks.

> **Key Purpose**: Offload heavy or long-running computations away from the main
> thread.

---

## 📜 Syntax

### Main Thread (main.js)

```js
const worker = new Worker('worker.js');

worker.postMessage('Hello from main thread');

worker.onmessage = function (event) {
  console.log('Message from worker:', event.data);
};
```

### Worker Thread (worker.js)

```js
onmessage = function (event) {
  console.log('Message from main thread:', event.data);
  postMessage('Hello from worker');
};
```

---

## 🧰 Usage

### ✅ When to Use

- Complex computations (e.g. image processing, large data parsing)
- Real-time data processing (e.g. games, simulations)
- Keeping UI responsive while background tasks run

### ❌ When Not to Use

- For simple tasks
- Tasks that require DOM access (not allowed in workers)

---

## 🧪 Example: Fibonacci in Web Worker

### 📁 File Structure

```
index.html
main.js
worker.js
```

### 🧱 worker.js

```js
// Heavy computation logic
onmessage = function (e) {
  const n = e.data;
  function fib(n) {
    return n < 2 ? n : fib(n - 1) + fib(n - 2);
  }
  const result = fib(n);
  postMessage(result);
};
```

### 📜 main.js

```js
const worker = new Worker('worker.js');

worker.postMessage(40); // Large Fibonacci number

worker.onmessage = function (e) {
  console.log('Fibonacci Result:', e.data);
};

worker.onerror = function (e) {
  console.error('Worker Error:', e);
};
```

### 📄 index.html

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Web Worker Demo</title>
  </head>
  <body>
    <script src="main.js"></script>
  </body>
</html>
```

---

## 🧷 Methods & Properties

| Main Thread                | Worker Thread          |
| -------------------------- | ---------------------- |
| `new Worker(url)`          | `onmessage = fn`       |
| `worker.postMessage(data)` | `postMessage(data)`    |
| `worker.terminate()`       |                        |
| `worker.onmessage`         | `onerror`, `onmessage` |

---

## 🚫 Limitations

- ❌ Cannot access DOM
- ❌ Limited access to `window`, `document`, or `alert()`
- ✅ Can use `XMLHttpRequest`, `fetch`, `WebSockets`, and ES6 features

---

## 🔐 Security

Web workers follow the **same-origin policy** and have **sandboxed
environments**, making them safe for parallel operations.

---

## 🧩 Types of Web Workers

| Type                  | Description                                                 |
| --------------------- | ----------------------------------------------------------- |
| **Dedicated Workers** | Tied to a single script context                             |
| **Shared Workers**    | Can be shared across different scripts/pages                |
| **Service Workers**   | Special type for caching and background sync (used in PWAs) |

---

## 🪛 Advanced: Terminating a Worker

```js
worker.terminate(); // Immediately stops the worker
```

---

## 📚 Real Use Cases

- Background sync in PWAs
- Parsing large JSON or CSV files
- Real-time chart updates
- Video/Audio processing

---

## 🔄 Communication Flow Diagram

```bash
Main Thread               Web Worker
    │                         │
    │ --- postMessage() --->  │
    │                         │
    │ <-- onmessage() ------  │
```

---

## 🧼 Cleanup & Best Practices

- Always terminate workers when done (`worker.terminate()`)
- Handle errors with `worker.onerror`
- Use transferable objects (`ArrayBuffer`) for performance when passing large
  data

---

## 🧩 Bonus: Inline Worker (no separate file)

```js
const code = `
  self.onmessage = function(e) {
    self.postMessage(e.data * 2);
  };
`;

const blob = new Blob([code], { type: 'application/javascript' });
const worker = new Worker(URL.createObjectURL(blob));

worker.postMessage(5); // → 10
```
