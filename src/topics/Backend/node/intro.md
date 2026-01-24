# Introduction to Node.js 🚀

Node.js is an open-source, cross-platform JavaScript runtime environment that
allows developers to execute JavaScript code outside of a web browser. 🌐

## Table of Contents

- [Key Features of Node.js](#key-features-of-nodejs)
- [Basic Components](#basic-components)
- [Simple Node.js Server Example](#simple-nodejs-server-example)
- [Common Use Cases](#common-use-cases)
- [Getting Started](#getting-started)

## Key Features of Node.js

1. **Asynchronous and Event-Driven** ⚡: Node.js uses non-blocking I/O
   operations, making it lightweight and efficient.
2. **Single-Threaded but Highly Scalable** 🧵: Uses an event loop with a single
   main thread but can handle many concurrent connections.
3. **NPM Ecosystem** 📦: Comes with npm (Node Package Manager), the largest
   ecosystem of open-source libraries.
4. **Fast Execution** 🚄: Built on Chrome's V8 JavaScript engine for high
   performance.

## Basic Components

- **Modules** 📚: Reusable blocks of code (similar to libraries in other
  languages)
- **Events** 🎉: Node.js uses an event-driven architecture
- **Streams** 💧: For handling streaming data
- **File System** 🗂️: Access to the server's file system
- **HTTP** 🌍: Built-in module to create web servers

## Simple Node.js Server Example

```javascript
// Import the HTTP module
const http = require('http');

// Create a server
const server = http.createServer((req, res) => {
  // Set response header
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send response
  res.end('Hello World from Node.js!\n');
});

// Listen on port 3000
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
```

## Common Use Cases

- Building web applications (especially real-time apps) 🌐
- Creating APIs and microservices 🔗
- Developing backend services 🖥️
- Building command-line tools 💡
- Creating desktop applications (with frameworks like Electron) 🖱️

## Getting Started

1. Install Node.js from [nodejs.org](https://nodejs.org/) ⬇️
2. Verify installation with:
   ```bash
   node -v
   npm -v
   ```
3. Create your first .js file and run it with:
   ```bash
   node filename.js
   ```

Node.js has revolutionized backend development by allowing developers to use
JavaScript on both the frontend and backend, enabling full-stack JavaScript
development. 🔄

**[⬆ Back to Top](#table-of-contents)**
