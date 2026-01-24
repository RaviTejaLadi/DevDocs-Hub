# Top 30 theory interview questions 🚀

## Table of Contents

1. [What is Node.js?](#1.-what-is-node.js?)
2. [How does Node.js work?](#2.-how-does-node.js-work?)
3. [What is the Event Loop in Node.js?](#3.-what-is-the-event-loop-in-node.js?)
4. [What is libuv?](#4.-what-is-libuv?)
5. [Explain Non-Blocking I/O in Node.js.](#5.-explain-non-blocking-i/o-in-node.js.)
6. [What is the difference between `setImmediate()` and `setTimeout()`?](<#6.-what-is-the-difference-between-setimmediate()-and-settimeout()?>)
7. [What is the purpose of `process.nextTick()`?](<#7.-what-is-the-purpose-of-process.nexttick()?>)
8. [What are Streams in Node.js?](#8.-what-are-streams-in-node.js?)
9. [How does Node.js handle child threads?](#9.-how-does-nodejs-handle-child-threads?)
10. [What is the Global Object in Node.js?](#10.-what-is-the-global-object-in-node.js?)
11. [Explain the `require()` function.](<#11.-explain-the-require()-function.>)
12. [What is `module.exports`?](#12.-what-is-module.exports?)
13. [What is the difference between `exports` and `module.exports`?](#13.-what-is-the-difference-between-exports-and-module.exports?)
14. [What is the purpose of the `Buffer` class?](#14.-what-is-the-purpose-of-the-buffer-class?)
15. [What is clustering in Node.js?](#15.-what-is-clustering-in-node.js?)
16. [How does Node.js handle errors?](#16.-how-does-node.js-handle-errors?)
17. [What is the purpose of middleware in Express.js?](#17.-what-is-the-purpose-of-middleware-in-express.js?)
18. [What is REPL in Node.js?](#18.-what-is-repl-in-node.js?)
19. [What is the `package.json` file?](#19.-what-is-the-package.json-file?)
20. [Explain Event Emitters in Node.js.](#20.-explain-event-emitters-in-node.js?)
21. [What is the purpose of `NODE_ENV`?](#21.-what-is-the-purpose-of-node_env?)
22. [How does Node.js support ES6 modules?](#22.-how-does-node.js-support-es6-modules?)
23. [What is the difference between `require()` and ES6 `import`?](<#23.-what-is-the-difference-between-require()-and-es6-import?>)
24. [What is the purpose of the `fs` module?](#24.-what-is-the-purpose-of-the-fs-module?)
25. [What is the `util` module used for?](#25.-what-is-the-util-module-used-for?)
26. [What is the `path` module?](#26.-what-is-the-path-module?)
27. [How does Node.js handle memory leaks?](#27.-how-does-node.js-handle-memory-leaks?)
28. [What is the purpose of the `os` module?](#28.-what-is-the-purpose-of-the-os-module?)
29. [What is the difference between `process.exit()` and `process.kill()`?](<#29.-what-is-the-difference-between-process.exit()-and-process.kill()?>)
30. [What are some key features of Node.js?](#30.-what-are-some-key-features-of-node.js?)

### 1. What is Node.js?

**Answer:** Node.js is an open-source, cross-platform JavaScript runtime
environment built on Chrome’s V8 engine. It allows developers to run JavaScript
on the server, enabling non-blocking, event-driven architecture for building
scalable network applications.

---

### 2. How does Node.js work?

**Answer:** Node.js operates on a single-threaded event loop using non-blocking
I/O calls, allowing it to handle thousands of concurrent connections
efficiently. It delegates I/O operations to the system kernel (via libuv) and
continues executing other tasks while waiting for responses.

---

### 3. What is the Event Loop in Node.js?

**Answer:** The event loop is a mechanism that allows Node.js to perform
non-blocking I/O operations by offloading tasks to the system kernel when
possible. It consists of multiple phases (timers, I/O callbacks, idle/prepare,
poll, check, close callbacks) that execute callbacks asynchronously.

---

### 4. What is libuv?

**Answer:** **libuv** is a multi-platform C library that provides Node.js with
support for asynchronous I/O operations (file system, networking, concurrency).
It implements the event loop and thread pooling for handling tasks like file
I/O.

---

### 5. Explain Non-Blocking I/O in Node.js.

**Answer:** Non-blocking I/O means that Node.js doesn’t wait for operations like
reading files or network requests to complete. Instead, it continues executing
other tasks and uses callbacks or promises to handle results when they’re ready.

---

### 6. What is the difference between `setImmediate()` and `setTimeout()`?

**Answer:**

- `setImmediate()` schedules a callback to execute in the **check phase** of the
  event loop.
- `setTimeout()` schedules a callback to run after a **minimum delay** (in the
  **timers phase**).  
  In the main module, their execution order may vary, but in I/O cycles,
  `setImmediate()` always runs before `setTimeout()`.

---

### 7. What is the purpose of `process.nextTick()`?

**Answer:** `process.nextTick()` queues a callback to execute **immediately
after the current operation** completes, before the event loop continues. It has
higher priority than `setImmediate()` or `setTimeout()`.

---

### 8. What are Streams in Node.js?

**Answer:** Streams are objects that allow reading/writing data sequentially in
chunks (without loading entire files into memory). Types include:

- **Readable** (e.g., `fs.createReadStream`)
- **Writable** (e.g., `fs.createWriteStream`)
- **Duplex** (both read/write, like TCP sockets)
- **Transform** (modify data, e.g., `zlib.createGzip`).

---

### 9. How does Node.js handle child threads?

**Answer:** Node.js is single-threaded but can spawn child processes using:

- **`child_process`** module (`fork()`, `exec()`, `spawn()`).
- **Worker Threads** (for CPU-heavy tasks, using `worker_threads` module).

---

### 10. What is the Global Object in Node.js?

**Answer:** The global object (`global`) provides variables/functions available
everywhere in Node.js, such as:

- `process`, `__dirname`, `__filename`, `setTimeout`, `console`, `module`,
  `require`.

---

### 11. Explain the `require()` function.

**Answer:** `require()` is used to import modules in Node.js. It:

1. Resolves the file path.
2. Loads the module (if cached, returns cached version).
3. Wraps the module in a function.
4. Executes the module code.
5. Returns `module.exports`.

---

### 12. What is `module.exports`?

**Answer:** `module.exports` is an object that defines what a module exports
when required. It can be reassigned to export functions, objects, or
primitives.  
Example:

```javascript
module.exports = { key: 'value' };
```

---

### 13. What is the difference between `exports` and `module.exports`?

**Answer:**

- `exports` is a reference to `module.exports` by default.
- Reassigning `exports` breaks the reference (use `module.exports` instead).  
  Example:

```javascript
exports = {}; // Won’t work
module.exports = {}; // Correct
```

---

### 14. What is the purpose of the `Buffer` class?

**Answer:** The `Buffer` class handles binary data (e.g., reading files or
network packets) in Node.js. It represents fixed-size raw memory allocations
outside the V8 heap.

---

### 15. What is clustering in Node.js?

**Answer:** Clustering allows Node.js to create multiple worker processes (using
the `cluster` module) to leverage multi-core CPUs. Each process runs on a
separate core, sharing the same server port.

---

### 16. How does Node.js handle errors?

**Answer:** Node.js uses:

- **Try-catch** (for synchronous code).
- **Error-first callbacks** (e.g., `fs.readFile(err, data)`).
- **Promises/catch** (for async/await).
- **Event emitters** (for streams).
- **`process.on('uncaughtException')`** (global error handling).

---

### 17. What is the purpose of middleware in Express.js?

**Answer:** Middleware are functions that execute during the request-response
cycle in Express.js. They can:

- Modify request/response objects.
- End the cycle (`res.send()`).
- Call the next middleware (`next()`).

---

### 18. What is REPL in Node.js?

**Answer:** REPL (Read-Eval-Print Loop) is an interactive Node.js shell for
testing JavaScript code snippets. Start it by running `node` in the terminal.

---

### 19. What is the `package.json` file?

**Answer:** `package.json` is a manifest file for Node.js projects, containing:

- Metadata (name, version).
- Dependencies (`dependencies`, `devDependencies`).
- Scripts (`scripts`).
- Configuration (engines, license).

---

### 20. Explain Event Emitters in Node.js.

**Answer:** Event emitters (`events` module) allow objects to emit and listen
for events. Example:

```javascript
const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}
const emitter = new MyEmitter();
emitter.on('event', () => console.log('Event fired!'));
emitter.emit('event');
```

---

### 21. What is the purpose of `NODE_ENV`?

**Answer:** `NODE_ENV` is an environment variable to set the application mode
(e.g., `development`, `production`). It’s used to enable optimizations (like
caching) in production.

---

### 22. How does Node.js support ES6 modules?

**Answer:** Node.js supports ES6 modules by:

- Using `.mjs` extension.
- Adding `"type": "module"` in `package.json`.
- Using dynamic imports (`import()`).

---

### 23. What is the difference between `require()` and ES6 `import`?

**Answer:**  
| `require()` (CommonJS) | ES6 `import` |  
|------------------------|--------------|  
| Synchronous loading | Asynchronous loading |  
| Dynamic (runtime) | Static (compile-time) |  
| `module.exports` | `export`/`export default` |

---

### 24. What is the purpose of the `fs` module?

**Answer:** The `fs` module provides file system operations (read/write files)
in Node.js, both synchronously (`fs.readFileSync`) and asynchronously
(`fs.readFile`).

---

### 25. What is the `util` module used for?

**Answer:** The `util` module provides utility functions like:

- `util.promisify()` (converts callbacks to promises).
- `util.inspect()` (debugging objects).
- `util.inherits()` (prototypal inheritance).

---

### 26. What is the `path` module?

**Answer:** The `path` module handles file/directory paths, providing methods
like:

- `path.join()` (concatenates paths).
- `path.resolve()` (resolves absolute paths).
- `path.basename()` (gets filename from path).

---

### 27. How does Node.js handle memory leaks?

**Answer:** Detect memory leaks using:

- `process.memoryUsage()`.
- Tools like **Chrome DevTools** or **heapdump**.
- Avoid global variables, clear intervals, close event listeners.

---

### 28. What is the purpose of the `os` module?

**Answer:** The `os` module provides OS-related utilities like:

- `os.cpus()` (CPU info).
- `os.freemem()` (free memory).
- `os.hostname()` (system hostname).

---

### 29. What is the difference between `process.exit()` and `process.kill()`?

**Answer:**

- `process.exit()` terminates the Node.js process with an exit code.
- `process.kill()` sends a signal to a process (e.g., `SIGTERM`).

---

### 30. What are some key features of Node.js?

**Answer:**

- **Non-blocking I/O** (event-driven).
- **Single-threaded** (with worker threads for CPU tasks).
- **NPM ecosystem** (largest package registry).
- **Fast execution** (V8 engine).
- **Scalable** (clustering, microservices support).

---

### **Bonus:** 🎁

- **What is the purpose of `async/await`?**  
  **Answer:** `async/await` simplifies asynchronous code by making it appear
  synchronous. `async` functions return promises, and `await` pauses execution
  until a promise resolves.

---

These questions cover fundamental and advanced Node.js concepts. Prepare
explanations with examples to demonstrate your understanding. Good luck with
your interview! 🚀

**[⬆ Back to Top](#table-of-contents)**
