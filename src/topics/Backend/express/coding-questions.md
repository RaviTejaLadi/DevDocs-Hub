# Top 30 Coding Interview Questions and Answers

## Table of Contents

1. [Basic Express Server](#1.-basic-express-server)
2. [Route with URL Parameter](#2.-route-with-url-parameter)
3. [Route with Query Parameter](#3.-route-with-query-parameter)
4. [POST Request Handling](#4.-post-request-handling)
5. [Middleware Function](#5.-middleware-function)
6. [Static Files Serving](#6.-static-files-serving)
7. [404 Error Handling](#7.-404-error-handling)
8. [Error Handling Middleware](#8.-error-handling-middleware)
9. [Route Chaining](#9.-route-chaining)
10. [Router Module (Separate File)](<#10.-router-module-(separate-file)>)
11. [JSON Response](#11.-json-response)
12. [Redirect](#12.-redirect)
13. [Download File](#13.-download-file)
14. [Set Cookies](#14.-set-cookies)
15. [Read Cookies](#15.-read-cookies)
16. [File Upload (Multer)](<#16.-file-upload-(multer)>)
17. [Basic Authentication Middleware](#17.-basic-authentication-middleware)
18. [CORS Handling](#18.-cors-handling)
19. [Rate Limiting](#19.-rate-limiting)
20. [HTTPS Redirect](#20.-https-redirect)
21. [Template Engine (EJS)](<#21.-template-engine-(ejs)>)
22. [Async/Await in Route](#22.-async/await-in-route)
23. [WebSocket (Socket.io)](<#23.-websocket-(socket.io)>)
24. [Environment Variables](#24.-environment-variables)
25. [Request Validation](#25.-request-validation)
26. [JWT Authentication](#26.-jwt-authentication)
27. [Database Query (MongoDB)](<#27.-database-query-(mongodb)>)
28. [Testing with Supertest](#28.-testing-with-supertest)
29. [Graceful Shutdown](#29.-graceful-shutdown)
30. [Cluster Mode (Performance)](<#30.-cluster-mode-(performance)>)

### 1. Basic Express Server

```javascript
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
```

---

### 2. Route with URL Parameter

```javascript
app.get('/user/:id', (req, res) => {
  res.send(`User ID: ${req.params.id}`);
});
```

---

### 3. Route with Query Parameter

```javascript
app.get('/search', (req, res) => {
  res.send(`Query: ${req.query.q}`);
});
```

---

### 4. POST Request Handling

```javascript
app.use(express.json());

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  res.send(`Username: ${username}, Password: ${password}`);
});
```

---

### 5. Middleware Function

```javascript
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

app.use(logger);
```

---

### 6. Static Files Serving

```javascript
app.use(express.static('public'));
```

---

### 7. 404 Error Handling

```javascript
app.use((req, res) => {
  res.status(404).send('404 Not Found');
});
```

---

### 8. Error Handling Middleware

```javascript
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
```

---

### 9. Route Chaining

```javascript
app
  .route('/book')
  .get((req, res) => res.send('Get a book'))
  .post((req, res) => res.send('Add a book'))
  .put((req, res) => res.send('Update the book'));
```

---

### 10. Router Module (Separate File)

```javascript
// routes/users.js
const router = express.Router();
router.get('/', (req, res) => res.send('User list'));
module.exports = router;

// main file
const userRoutes = require('./routes/users');
app.use('/users', userRoutes);
```

---

### 11. JSON Response

```javascript
app.get('/data', (req, res) => {
  res.json({ name: 'John', age: 30 });
});
```

---

### 12. Redirect

```javascript
app.get('/old', (req, res) => {
  res.redirect('/new');
});
```

---

### 13. Download File

```javascript
app.get('/download', (req, res) => {
  res.download('file.pdf');
});
```

---

### 14. Set Cookies

```javascript
app.get('/set-cookie', (req, res) => {
  res.cookie('name', 'value', { maxAge: 900000 });
  res.send('Cookie set');
});
```

---

### 15. Read Cookies

```javascript
const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.get('/get-cookie', (req, res) => {
  res.send(req.cookies.name);
});
```

---

### 16. File Upload (Multer)

```javascript
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('file'), (req, res) => {
  res.send('File uploaded');
});
```

---

### 17. Basic Authentication Middleware

```javascript
const auth = (req, res, next) => {
  if (req.headers.authorization === 'secret') next();
  else res.status(401).send('Unauthorized');
};

app.get('/protected', auth, (req, res) => {
  res.send('Protected content');
});
```

---

### 18. CORS Handling

```javascript
const cors = require('cors');
app.use(cors());
```

---

### 19. Rate Limiting

```javascript
const rateLimit = require('express-rate-limit');
const limiter = rateLimit({ windowMs: 60000, max: 5 });

app.use('/api', limiter);
```

---

### 20. HTTPS Redirect

```javascript
app.use((req, res, next) => {
  if (req.secure) next();
  else res.redirect(`https://${req.headers.host}${req.url}`);
});
```

---

### 21. Template Engine (EJS)

```javascript
app.set('view engine', 'ejs');
app.get('/view', (req, res) => {
  res.render('index', { title: 'Express' });
});
```

---

### 22. Async/Await in Route

```javascript
app.get('/async', async (req, res) => {
  const data = await fetchData(); // Assume fetchData() is async
  res.send(data);
});
```

---

### 23. WebSocket (Socket.io)

```javascript
const http = require('http').createServer(app);
const io = require('socket.io')(http);

io.on('connection', (socket) => {
  socket.emit('message', 'Hello!');
});

http.listen(3000);
```

---

### 24. Environment Variables

```javascript
require('dotenv').config();
app.get('/env', (req, res) => {
  res.send(process.env.API_KEY);
});
```

---

### 25. Request Validation

```javascript
app.post('/validate', (req, res) => {
  if (!req.body.email) return res.status(400).send('Email required');
  res.send('Valid');
});
```

---

### 26. JWT Authentication

```javascript
const jwt = require('jsonwebtoken');
app.post('/login', (req, res) => {
  const token = jwt.sign({ user: 'john' }, 'secret');
  res.json({ token });
});
```

---

### 27. Database Query (MongoDB)

```javascript
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const User = mongoose.model('User', { name: String });

app.get('/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});
```

---

### 28. Testing with Supertest

```javascript
const request = require('supertest');
request(app)
  .get('/')
  .expect(200)
  .end((err, res) => {});
```

---

### 29. Graceful Shutdown

```javascript
const server = app.listen(3000);

process.on('SIGTERM', () => {
  server.close(() => process.exit(0));
});
```

---

### 30. Cluster Mode (Performance)

```javascript
const cluster = require('cluster');
if (cluster.isMaster) {
  cluster.fork();
} else {
  app.listen(3000);
}
```

---

These snippets cover essential Express.js concepts frequently asked in
interviews. Let me know if you'd like explanations for any specific snippet! 🚀

**[⬆ Back to Top](#table-of-contents)**
