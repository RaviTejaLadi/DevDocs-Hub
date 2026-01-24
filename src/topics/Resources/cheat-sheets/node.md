# Node.js Cheat sheet

## Table of Contents

- [Core Modules](#core-modules)
- [File System Operations](#file-system-operations)
- [HTTP Methods](#http-methods)
- [NPM Commands](#npm-commands)
- [Process & Environment](#process--environment)
- [Error Handling](#error-handling)
- [Common Patterns](#common-patterns)
- [Buffer Operations](#buffer-operations)
- [Stream Types](#stream-types)
- [Event Emitter](#event-emitter)
- [URL Parsing](#url-parsing)
- [Common Status Codes](#common-status-codes)

## Core Modules

| Module          | Description                 | Common Methods/Properties                                     |
| --------------- | --------------------------- | ------------------------------------------------------------- |
| `fs`            | File System                 | `readFile()`, `writeFile()`, `readdir()`, `stat()`, `mkdir()` |
| `path`          | Path utilities              | `join()`, `resolve()`, `dirname()`, `basename()`, `extname()` |
| `http`          | HTTP server/client          | `createServer()`, `request()`, `get()`                        |
| `https`         | HTTPS server/client         | `createServer()`, `request()`, `get()`                        |
| `url`           | URL utilities               | `parse()`, `format()`, `resolve()`                            |
| `querystring`   | Query string utilities      | `parse()`, `stringify()`                                      |
| `crypto`        | Cryptographic functionality | `createHash()`, `randomBytes()`, `createCipher()`             |
| `os`            | Operating system utilities  | `platform()`, `arch()`, `cpus()`, `totalmem()`                |
| `events`        | Event emitter               | `EventEmitter`, `on()`, `emit()`, `once()`                    |
| `stream`        | Stream functionality        | `Readable`, `Writable`, `Transform`, `pipe()`                 |
| `util`          | Utilities                   | `promisify()`, `inspect()`, `format()`                        |
| `child_process` | Child processes             | `spawn()`, `exec()`, `fork()`                                 |
| `cluster`       | Cluster of Node processes   | `fork()`, `isMaster`, `isWorker`                              |
| `buffer`        | Binary data handling        | `Buffer.from()`, `Buffer.alloc()`, `toString()`               |

## File System Operations

| Operation         | Sync                  | Async             | Promise                    |
| ----------------- | --------------------- | ----------------- | -------------------------- |
| Read file         | `fs.readFileSync()`   | `fs.readFile()`   | `fs.promises.readFile()`   |
| Write file        | `fs.writeFileSync()`  | `fs.writeFile()`  | `fs.promises.writeFile()`  |
| Append file       | `fs.appendFileSync()` | `fs.appendFile()` | `fs.promises.appendFile()` |
| Delete file       | `fs.unlinkSync()`     | `fs.unlink()`     | `fs.promises.unlink()`     |
| Read directory    | `fs.readdirSync()`    | `fs.readdir()`    | `fs.promises.readdir()`    |
| Create directory  | `fs.mkdirSync()`      | `fs.mkdir()`      | `fs.promises.mkdir()`      |
| Remove directory  | `fs.rmdirSync()`      | `fs.rmdir()`      | `fs.promises.rmdir()`      |
| Check file exists | `fs.existsSync()`     | `fs.access()`     | `fs.promises.access()`     |
| Get file stats    | `fs.statSync()`       | `fs.stat()`       | `fs.promises.stat()`       |

## HTTP Methods

| Method    | Description            | Example Usage                       |
| --------- | ---------------------- | ----------------------------------- |
| `GET`     | Retrieve data          | `app.get('/users', handler)`        |
| `POST`    | Create new resource    | `app.post('/users', handler)`       |
| `PUT`     | Update entire resource | `app.put('/users/:id', handler)`    |
| `PATCH`   | Partial update         | `app.patch('/users/:id', handler)`  |
| `DELETE`  | Remove resource        | `app.delete('/users/:id', handler)` |
| `HEAD`    | Get headers only       | `app.head('/users', handler)`       |
| `OPTIONS` | Get allowed methods    | `app.options('/users', handler)`    |

## NPM Commands

| Command                            | Description                      |
| ---------------------------------- | -------------------------------- |
| `npm init`                         | Initialize package.json          |
| `npm init -y`                      | Initialize with defaults         |
| `npm install <package>`            | Install package locally          |
| `npm install -g <package>`         | Install package globally         |
| `npm install --save-dev <package>` | Install as dev dependency        |
| `npm uninstall <package>`          | Remove package                   |
| `npm update`                       | Update all packages              |
| `npm list`                         | List installed packages          |
| `npm run <script>`                 | Run npm script                   |
| `npm start`                        | Run start script                 |
| `npm test`                         | Run test script                  |
| `npm publish`                      | Publish package                  |
| `npm version <type>`               | Bump version (patch/minor/major) |

## Process & Environment

| Property/Method      | Description                        |
| -------------------- | ---------------------------------- |
| `process.argv`       | Command line arguments             |
| `process.env`        | Environment variables              |
| `process.cwd()`      | Current working directory          |
| `process.exit()`     | Exit process                       |
| `process.pid`        | Process ID                         |
| `process.platform`   | Operating system platform          |
| `process.version`    | Node.js version                    |
| `process.nextTick()` | Execute callback on next iteration |
| `__dirname`          | Directory of current module        |
| `__filename`         | Filename of current module         |

## Error Handling

| Pattern             | Description                 | Example                                     |
| ------------------- | --------------------------- | ------------------------------------------- |
| Try-Catch           | Synchronous error handling  | `try { code } catch(err) { handle }`        |
| Callback Error      | First parameter is error    | `callback(err, data)`                       |
| Promise Catch       | Promise error handling      | `promise.catch(err => handle)`              |
| Async/Await         | Modern async error handling | `try { await fn() } catch(err) {}`          |
| Event Error         | Error events                | `emitter.on('error', handler)`              |
| Uncaught Exception  | Global error handler        | `process.on('uncaughtException', handler)`  |
| Unhandled Rejection | Promise rejection handler   | `process.on('unhandledRejection', handler)` |

## Common Patterns

| Pattern         | Code Example                                    |
| --------------- | ----------------------------------------------- |
| Require module  | `const fs = require('fs')`                      |
| Export function | `module.exports = function() {}`                |
| Export object   | `module.exports = { key: value }`               |
| ES6 import      | `import fs from 'fs'`                           |
| ES6 export      | `export default function() {}`                  |
| Callback        | `function(err, data) { if(err) throw err; }`    |
| Promise         | `new Promise((resolve, reject) => {})`          |
| Async/Await     | `async function() { const data = await fn(); }` |
| Event listener  | `emitter.on('event', handler)`                  |
| Create server   | `http.createServer((req, res) => {})`           |

## Buffer Operations

| Method                     | Description               |
| -------------------------- | ------------------------- |
| `Buffer.alloc(size)`       | Create buffer with size   |
| `Buffer.from(string)`      | Create buffer from string |
| `Buffer.from(array)`       | Create buffer from array  |
| `buffer.toString()`        | Convert to string         |
| `buffer.length`            | Get buffer length         |
| `buffer.write(string)`     | Write string to buffer    |
| `buffer.slice(start, end)` | Extract portion of buffer |
| `Buffer.concat(list)`      | Concatenate buffers       |

## Stream Types

| Type        | Description                      | Methods                            |
| ----------- | -------------------------------- | ---------------------------------- |
| `Readable`  | Read data from source            | `read()`, `pipe()`, `on('data')`   |
| `Writable`  | Write data to destination        | `write()`, `end()`, `on('finish')` |
| `Duplex`    | Both readable and writable       | Combines both interfaces           |
| `Transform` | Modify data as it passes through | `_transform()`, `_flush()`         |

## Event Emitter

| Method                            | Description              |
| --------------------------------- | ------------------------ |
| `on(event, listener)`             | Add listener             |
| `once(event, listener)`           | Add one-time listener    |
| `emit(event, ...args)`            | Emit event               |
| `removeListener(event, listener)` | Remove specific listener |
| `removeAllListeners(event)`       | Remove all listeners     |
| `listenerCount(event)`            | Count listeners          |
| `setMaxListeners(n)`              | Set max listeners        |

## URL Parsing

| Component  | Description         | Example             |
| ---------- | ------------------- | ------------------- |
| `protocol` | URL protocol        | `https:`            |
| `hostname` | Server hostname     | `example.com`       |
| `port`     | Port number         | `3000`              |
| `pathname` | URL path            | `/users/123`        |
| `search`   | Query string        | `?name=john&age=30` |
| `hash`     | Fragment identifier | `#section1`         |

## Common Status Codes

| Code | Status                | Description             |
| ---- | --------------------- | ----------------------- |
| 200  | OK                    | Success                 |
| 201  | Created               | Resource created        |
| 400  | Bad Request           | Invalid request         |
| 401  | Unauthorized          | Authentication required |
| 403  | Forbidden             | Access denied           |
| 404  | Not Found             | Resource not found      |
| 500  | Internal Server Error | Server error            |
| 502  | Bad Gateway           | Invalid response        |
| 503  | Service Unavailable   | Server unavailable      |

**[⬆ Back to Top](#table-of-contents)**
