# Top 24 Coding Interview Questions & Answers

## Table of Contents

- [1. Write a simple HTTP server](#1.-write-a-simple-http-server)
- [2. Read a file asynchronously](#2.-read-a-file-asynchronously)
- [3. Create a custom EventEmitter](#3.-create-a-custom-eventemitter)
- [4. Implement a middleware function](#4.-implement-a-middleware-function)
- [6. Implement file upload handling](#6.-implement-file-upload-handling)
- [7. Connect to MongoDB](#7.-connect-to-mongodb)
- [8. Implement JWT authentication](#8.-implement-jwt-authentication)
- [9. Create a rate limiter](#9.-create-a-rate-limiter)
- [10. Implement caching with Redis](#10.-implement-caching-with-redis)
- [11. Create a WebSocket server](#11.-create-a-websocket-server)
- [12. Implement error handling](#12.-implement-error-handling)
- [13. Create a worker thread pool](#13.-create-a-worker-thread-pool)
- [14. Implement file system watcher](#14.-implement-file-system-watcher)
- [15. Create a REST API with CRUD operations](#15.-create-a-rest-api-with-crud-operations)
- [16. Implement request validation](#16.-implement-request-validation)
- [17. Create a task queue with Bull](#17.-create-a-task-queue-with-bull)
- [18. Implement database connection pooling](#18.-implement-database-connection-pooling)
- [19. Create a GraphQL server](#19.-create-a-graphql-server)
- [20. Implement session management](#20.-implement-session-management)
- [21. Create a proxy server](#21.-create-a-proxy-server)
- [22. Implement file compression](#22.-implement-file-compression)
- [23. Create a CLI application](#23.-create-a-cli-application)
- [24. Implement real-time notifications](#24.-implement-real-time-notifications)

## 1. Write a simple HTTP server

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

## 2. Read a file asynchronously

```javascript
const fs = require('fs');

fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log(data);
});

// Using Promises
const fsPromises = require('fs').promises;

async function readFileAsync() {
  try {
    const data = await fsPromises.readFile('file.txt', 'utf8');
    console.log(data);
  } catch (err) {
    console.error('Error:', err);
  }
}
```

## 3. Create a custom EventEmitter

```javascript
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('event', (data) => {
  console.log('Event received:', data);
});

myEmitter.emit('event', 'Hello Events!');

// Custom implementation
class CustomEventEmitter {
  constructor() {
    this.events = {};
  }

  on(event, listener) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(listener);
  }

  emit(event, ...args) {
    if (this.events[event]) {
      this.events[event].forEach((listener) => listener(...args));
    }
  }
}
```

## 4. Implement a middleware function

```javascript
const express = require('express');
const app = express();

// Custom middleware
function logger(req, res, next) {
  console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
  next();
}

function authenticate(req, res, next) {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }
  // Verify token logic here
  next();
}

app.use(logger);
app.use('/protected', authenticate);

app.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});
```

## 5. Create a readable stream

```javascript
const { Readable } = require('stream');

class NumberStream extends Readable {
  constructor(options) {
    super(options);
    this.current = 0;
    this.max = 10;
  }

  _read() {
    if (this.current < this.max) {
      this.push(`Number: ${this.current}\n`);
      this.current++;
    } else {
      this.push(null); // End stream
    }
  }
}

const numberStream = new NumberStream();
numberStream.on('data', (chunk) => console.log(chunk.toString()));
numberStream.on('end', () => console.log('Stream ended'));
```

## 6. Implement file upload handling

```javascript
const express = require('express');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 5 }, // 5MB limit
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif/;
    const extname = allowedTypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    const mimetype = allowedTypes.test(file.mimetype);

    if (mimetype && extname) {
      return cb(null, true);
    }
    cb(new Error('Only image files allowed'));
  },
});

const app = express();

app.post('/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }
  res.json({ filename: req.file.filename });
});
```

## 7. Connect to MongoDB

```javascript
const mongoose = require('mongoose');

// Connection
mongoose.connect('mongodb://localhost:27017/myapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, min: 0 },
});

const User = mongoose.model('User', userSchema);

// CRUD operations
async function createUser(userData) {
  try {
    const user = new User(userData);
    await user.save();
    return user;
  } catch (error) {
    throw error;
  }
}

async function getUsers() {
  return await User.find({});
}

async function updateUser(id, updates) {
  return await User.findByIdAndUpdate(id, updates, { new: true });
}
```

## 8. Implement JWT authentication

```javascript
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const SECRET_KEY = 'your-secret-key';

// Generate JWT
function generateToken(payload) {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });
}

// Verify JWT
function verifyToken(token) {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (error) {
    return null;
  }
}

// Authentication middleware
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.sendStatus(401);
  }

  const decoded = verifyToken(token);
  if (!decoded) {
    return res.sendStatus(403);
  }

  req.user = decoded;
  next();
}

// Password hashing
async function hashPassword(password) {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
}

async function comparePassword(password, hash) {
  return await bcrypt.compare(password, hash);
}
```

## 9. Create a rate limiter

```javascript
const rateLimit = require('express-rate-limit');

// Basic rate limiter
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests, please try again later',
});

// Custom rate limiter implementation
class RateLimiter {
  constructor(maxRequests, windowMs) {
    this.maxRequests = maxRequests;
    this.windowMs = windowMs;
    this.requests = new Map();
  }

  isAllowed(ip) {
    const now = Date.now();
    const userRequests = this.requests.get(ip) || [];

    // Remove old requests outside the window
    const validRequests = userRequests.filter(
      (timestamp) => now - timestamp < this.windowMs
    );

    if (validRequests.length >= this.maxRequests) {
      return false;
    }

    validRequests.push(now);
    this.requests.set(ip, validRequests);
    return true;
  }
}

const rateLimiter = new RateLimiter(10, 60000); // 10 requests per minute

function rateLimitMiddleware(req, res, next) {
  const ip = req.ip;
  if (!rateLimiter.isAllowed(ip)) {
    return res.status(429).json({ error: 'Rate limit exceeded' });
  }
  next();
}
```

## 10. Implement caching with Redis

```javascript
const redis = require('redis');
const client = redis.createClient();

client.on('error', (err) => console.log('Redis Client Error', err));

async function connectRedis() {
  await client.connect();
}

// Cache middleware
function cache(duration = 300) {
  return async (req, res, next) => {
    const key = req.originalUrl;

    try {
      const cachedData = await client.get(key);
      if (cachedData) {
        return res.json(JSON.parse(cachedData));
      }

      // Store original send function
      const originalSend = res.json;
      res.json = function (data) {
        // Cache the response
        client.setEx(key, duration, JSON.stringify(data));
        // Call original send
        originalSend.call(this, data);
      };

      next();
    } catch (error) {
      next();
    }
  };
}

// Usage
app.get('/api/data', cache(300), (req, res) => {
  res.json({ data: 'This will be cached for 5 minutes' });
});
```

## 11. Create a WebSocket server

```javascript
const WebSocket = require('ws');
const http = require('http');

const server = http.createServer();
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws, req) => {
  console.log('New client connected');

  ws.on('message', (message) => {
    console.log('Received:', message.toString());

    // Broadcast to all clients
    wss.clients.forEach((client) => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });

  // Send welcome message
  ws.send(JSON.stringify({ type: 'welcome', message: 'Connected to server' }));
});

server.listen(8080, () => {
  console.log('WebSocket server listening on port 8080');
});
```

## 12. Implement error handling

```javascript
// Global error handler
function errorHandler(err, req, res, next) {
  console.error(err.stack);

  if (err.name === 'ValidationError') {
    return res.status(400).json({
      error: 'Validation Error',
      details: err.message,
    });
  }

  if (err.name === 'CastError') {
    return res.status(400).json({
      error: 'Invalid ID format',
    });
  }

  res.status(500).json({
    error: 'Internal Server Error',
    message:
      process.env.NODE_ENV === 'production'
        ? 'Something went wrong'
        : err.message,
  });
}

// Async error wrapper
function asyncHandler(fn) {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
}

// Custom error class
class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

// Usage
app.get(
  '/users/:id',
  asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) {
      throw new AppError('User not found', 404);
    }
    res.json(user);
  })
);

app.use(errorHandler);
```

## 13. Create a worker thread pool

```javascript
const {
  Worker,
  isMainThread,
  parentPort,
  workerData,
} = require('worker_threads');
const os = require('os');

if (isMainThread) {
  // Main thread
  class WorkerPool {
    constructor(poolSize = os.cpus().length) {
      this.poolSize = poolSize;
      this.workers = [];
      this.queue = [];
    }

    async execute(data) {
      return new Promise((resolve, reject) => {
        const worker = this.getWorker();

        worker.postMessage(data);

        worker.once('message', (result) => {
          if (result.error) {
            reject(new Error(result.error));
          } else {
            resolve(result.data);
          }
          this.releaseWorker(worker);
        });

        worker.once('error', reject);
      });
    }

    getWorker() {
      if (this.workers.length > 0) {
        return this.workers.pop();
      }

      return new Worker(__filename);
    }

    releaseWorker(worker) {
      this.workers.push(worker);
    }
  }

  const pool = new WorkerPool(4);

  // Example usage
  async function processData() {
    try {
      const result = await pool.execute({ numbers: [1, 2, 3, 4, 5] });
      console.log('Result:', result);
    } catch (error) {
      console.error('Error:', error.message);
    }
  }
} else {
  // Worker thread
  parentPort.on('message', (data) => {
    try {
      // Simulate CPU-intensive task
      const sum = data.numbers.reduce((acc, num) => acc + num, 0);
      const result = sum * 2;

      parentPort.postMessage({ data: result });
    } catch (error) {
      parentPort.postMessage({ error: error.message });
    }
  });
}
```

## 14. Implement file system watcher

```javascript
const fs = require('fs');
const path = require('path');
const chokidar = require('chokidar');

// Using built-in fs.watch
function watchDirectory(dirPath) {
  fs.watch(dirPath, { recursive: true }, (eventType, filename) => {
    console.log(`File ${filename} was ${eventType}d`);
  });
}

// Using chokidar for better cross-platform support
function watchWithChokidar(dirPath) {
  const watcher = chokidar.watch(dirPath, {
    ignored: /(^|[\/\\])\../, // ignore dotfiles
    persistent: true,
  });

  watcher
    .on('add', (path) => console.log(`File ${path} has been added`))
    .on('change', (path) => console.log(`File ${path} has been changed`))
    .on('unlink', (path) => console.log(`File ${path} has been removed`))
    .on('addDir', (path) => console.log(`Directory ${path} has been added`))
    .on('unlinkDir', (path) =>
      console.log(`Directory ${path} has been removed`)
    )
    .on('error', (error) => console.log(`Watcher error: ${error}`))
    .on('ready', () => console.log('Initial scan complete. Ready for changes'));
}

// File change debouncer
class FileWatcher {
  constructor(debounceMs = 100) {
    this.debounceMs = debounceMs;
    this.timeouts = new Map();
  }

  watch(filePath, callback) {
    fs.watchFile(filePath, (curr, prev) => {
      const key = filePath;

      if (this.timeouts.has(key)) {
        clearTimeout(this.timeouts.get(key));
      }

      this.timeouts.set(
        key,
        setTimeout(() => {
          callback(curr, prev);
          this.timeouts.delete(key);
        }, this.debounceMs)
      );
    });
  }
}
```

## 15. Create a REST API with CRUD operations

```javascript
const express = require('express');
const app = express();

app.use(express.json());

// In-memory storage (use database in production)
let users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
];
let nextId = 3;

// GET all users
app.get('/api/users', (req, res) => {
  const { page = 1, limit = 10, search } = req.query;
  let filteredUsers = users;

  if (search) {
    filteredUsers = users.filter(
      (user) =>
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase())
    );
  }

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const paginatedUsers = filteredUsers.slice(startIndex, endIndex);

  res.json({
    users: paginatedUsers,
    pagination: {
      currentPage: parseInt(page),
      totalPages: Math.ceil(filteredUsers.length / limit),
      total: filteredUsers.length,
    },
  });
});

// GET user by ID
app.get('/api/users/:id', (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  res.json(user);
});

// CREATE new user
app.post('/api/users', (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  const existingUser = users.find((u) => u.email === email);
  if (existingUser) {
    return res.status(409).json({ error: 'Email already exists' });
  }

  const newUser = { id: nextId++, name, email };
  users.push(newUser);
  res.status(201).json(newUser);
});

// UPDATE user
app.put('/api/users/:id', (req, res) => {
  const userIndex = users.findIndex((u) => u.id === parseInt(req.params.id));
  if (userIndex === -1) {
    return res.status(404).json({ error: 'User not found' });
  }

  const { name, email } = req.body;
  if (name) users[userIndex].name = name;
  if (email) users[userIndex].email = email;

  res.json(users[userIndex]);
});

// DELETE user
app.delete('/api/users/:id', (req, res) => {
  const userIndex = users.findIndex((u) => u.id === parseInt(req.params.id));
  if (userIndex === -1) {
    return res.status(404).json({ error: 'User not found' });
  }

  users.splice(userIndex, 1);
  res.status(204).send();
});
```

## 16. Implement request validation

```javascript
const Joi = require('joi');
const { body, validationResult } = require('express-validator');

// Using Joi
const userSchema = Joi.object({
  name: Joi.string().min(2).max(50).required(),
  email: Joi.string().email().required(),
  age: Joi.number().integer().min(0).max(120),
  password: Joi.string()
    .min(8)
    .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])'))
    .required(),
});

function validateUser(req, res, next) {
  const { error } = userSchema.validate(req.body);
  if (error) {
    return res.status(400).json({
      error: 'Validation failed',
      details: error.details.map((detail) => detail.message),
    });
  }
  next();
}

// Using express-validator
const userValidationRules = () => {
  return [
    body('name')
      .isLength({ min: 2, max: 50 })
      .withMessage('Name must be 2-50 characters'),
    body('email').isEmail().withMessage('Must be a valid email'),
    body('age')
      .optional()
      .isInt({ min: 0, max: 120 })
      .withMessage('Age must be 0-120'),
    body('password')
      .isLength({ min: 8 })
      .withMessage('Password must be at least 8 characters')
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/)
      .withMessage(
        'Password must contain uppercase, lowercase, number and special character'
      ),
  ];
};

function validate(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      error: 'Validation failed',
      details: errors.array(),
    });
  }
  next();
}

// Usage
app.post('/api/users', validateUser, (req, res) => {
  // User data is validated
  res.json({ message: 'User created successfully' });
});

app.post('/api/users-alt', userValidationRules(), validate, (req, res) => {
  res.json({ message: 'User created successfully' });
});
```

## 17. Create a task queue with Bull

```javascript
const Queue = require('bull');
const nodemailer = require('nodemailer');

// Create queues
const emailQueue = new Queue('email processing', 'redis://127.0.0.1:6379');
const imageQueue = new Queue('image processing', 'redis://127.0.0.1:6379');

// Email transporter
const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Process email jobs
emailQueue.process(async (job) => {
  const { to, subject, text } = job.data;

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to,
      subject,
      text,
    });

    console.log(`Email sent to ${to}`);
    return { success: true };
  } catch (error) {
    console.error('Email sending failed:', error);
    throw error;
  }
});

// Process image jobs
imageQueue.process(async (job) => {
  const { imagePath, operations } = job.data;

  // Simulate image processing
  console.log(`Processing image: ${imagePath}`);
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return { processedPath: `processed_${imagePath}` };
});

// Add jobs to queue
async function sendEmail(emailData) {
  const job = await emailQueue.add('send-email', emailData, {
    attempts: 3,
    delay: 2000,
    backoff: {
      type: 'exponential',
      delay: 2000,
    },
  });

  return job.id;
}

async function processImage(imageData) {
  const job = await imageQueue.add('process-image', imageData, {
    priority: 10,
    delay: 1000,
  });

  return job.id;
}

// Queue event listeners
emailQueue.on('completed', (job) => {
  console.log(`Email job ${job.id} completed`);
});

emailQueue.on('failed', (job, err) => {
  console.log(`Email job ${job.id} failed:`, err.message);
});

// Usage in Express route
app.post('/send-email', async (req, res) => {
  try {
    const jobId = await sendEmail(req.body);
    res.json({ message: 'Email queued for processing', jobId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
```

## 18. Implement database connection pooling

```javascript
const mysql = require('mysql2/promise');
const { Pool } = require('pg');

// MySQL connection pool
const mysqlPool = mysql.createPool({
  host: 'localhost',
  user: 'username',
  password: 'password',
  database: 'mydb',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  acquireTimeout: 60000,
  reconnect: true,
});

// PostgreSQL connection pool
const pgPool = new Pool({
  user: 'username',
  host: 'localhost',
  database: 'mydb',
  password: 'password',
  port: 5432,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

// Database wrapper class
class Database {
  constructor(pool, type = 'mysql') {
    this.pool = pool;
    this.type = type;
  }

  async query(sql, params = []) {
    try {
      if (this.type === 'mysql') {
        const [rows] = await this.pool.execute(sql, params);
        return rows;
      } else {
        const result = await this.pool.query(sql, params);
        return result.rows;
      }
    } catch (error) {
      console.error('Database query error:', error);
      throw error;
    }
  }

  async transaction(queries) {
    const connection = await this.pool.getConnection();

    try {
      await connection.beginTransaction();

      const results = [];
      for (const { sql, params } of queries) {
        const result = await connection.execute(sql, params);
        results.push(result);
      }

      await connection.commit();
      return results;
    } catch (error) {
      await connection.rollback();
      throw error;
    } finally {
      connection.release();
    }
  }

  async close() {
    await this.pool.end();
  }
}

const db = new Database(mysqlPool, 'mysql');

// Usage
app.get('/users', async (req, res) => {
  try {
    const users = await db.query('SELECT * FROM users WHERE active = ?', [1]);
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Database error' });
  }
});
```

## 19. Create a GraphQL server

```javascript
const { ApolloServer, gql } = require('apollo-server-express');
const express = require('express');

// Sample data
let users = [
  { id: '1', name: 'John Doe', email: 'john@example.com', posts: ['1', '2'] },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com', posts: ['3'] },
];

let posts = [
  { id: '1', title: 'Hello World', content: 'First post', authorId: '1' },
  { id: '2', title: 'GraphQL', content: 'Learning GraphQL', authorId: '1' },
  { id: '3', title: 'Node.js', content: 'Node.js tips', authorId: '2' },
];

// GraphQL schema
const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    posts: [Post!]!
  }

  type Post {
    id: ID!
    title: String!
    content: String!
    author: User!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User
    posts: [Post!]!
    post(id: ID!): Post
  }

  type Mutation {
    createUser(name: String!, email: String!): User!
    createPost(title: String!, content: String!, authorId: ID!): Post!
    updateUser(id: ID!, name: String, email: String): User
    deleteUser(id: ID!): Boolean!
  }

  type Subscription {
    userAdded: User!
    postAdded: Post!
  }
`;

// Resolvers
const resolvers = {
  Query: {
    users: () => users,
    user: (_, { id }) => users.find((user) => user.id === id),
    posts: () => posts,
    post: (_, { id }) => posts.find((post) => post.id === id),
  },

  Mutation: {
    createUser: (_, { name, email }) => {
      const newUser = {
        id: String(users.length + 1),
        name,
        email,
        posts: [],
      };
      users.push(newUser);
      return newUser;
    },

    createPost: (_, { title, content, authorId }) => {
      const newPost = {
        id: String(posts.length + 1),
        title,
        content,
        authorId,
      };
      posts.push(newPost);

      // Update user's posts
      const user = users.find((u) => u.id === authorId);
      if (user) {
        user.posts.push(newPost.id);
      }

      return newPost;
    },

    updateUser: (_, { id, name, email }) => {
      const user = users.find((u) => u.id === id);
      if (!user) return null;

      if (name) user.name = name;
      if (email) user.email = email;

      return user;
    },

    deleteUser: (_, { id }) => {
      const index = users.findIndex((u) => u.id === id);
      if (index === -1) return false;

      users.splice(index, 1);
      return true;
    },
  },

  User: {
    posts: (user) => posts.filter((post) => user.posts.includes(post.id)),
  },

  Post: {
    author: (post) => users.find((user) => user.id === post.authorId),
  },
};

async function startServer() {
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({
      user: req.user, // Add authentication context
    }),
  });

  await server.start();
  server.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log(`Server ready at http://localhost:4000${server.graphqlPath}`);
  });
}

startServer();
```

## 20. Implement session management

```javascript
const session = require('express-session');
const MongoStore = require('connect-mongo');
const redis = require('redis');
const RedisStore = require('connect-redis')(session);

const app = express();

// Redis session store
const redisClient = redis.createClient({
  host: 'localhost',
  port: 6379,
});

// Session configuration with Redis
app.use(
  session({
    store: new RedisStore({ client: redisClient }),
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false, // Set to true in production with HTTPS
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24, // 24 hours
    },
  })
);

// Session configuration with MongoDB
app.use(
  session({
    store: MongoStore.create({
      mongoUrl: 'mongodb://localhost:27017/sessions',
    }),
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

// Custom session manager
class SessionManager {
  constructor() {
    this.sessions = new Map();
  }

  create(userId, data = {}) {
    const sessionId = this.generateSessionId();
    const session = {
      id: sessionId,
      userId,
      data,
      createdAt: new Date(),
      lastAccessed: new Date(),
    };

    this.sessions.set(sessionId, session);
    return sessionId;
  }

  get(sessionId) {
    const session = this.sessions.get(sessionId);
    if (session) {
      session.lastAccessed = new Date();
      return session;
    }
    return null;
  }

  update(sessionId, data) {
    const session = this.sessions.get(sessionId);
    if (session) {
      session.data = { ...session.data, ...data };
      session.lastAccessed = new Date();
      return session;
    }
    return null;
  }

  destroy(sessionId) {
    return this.sessions.delete(sessionId);
  }

  cleanup(maxAge = 24 * 60 * 60 * 1000) {
    const now = new Date();
    for (const [sessionId, session] of this.sessions) {
      if (now - session.lastAccessed > maxAge) {
        this.sessions.delete(sessionId);
      }
    }
  }

  generateSessionId() {
    return require('crypto').randomBytes(32).toString('hex');
  }
}

const sessionManager = new SessionManager();

// Middleware to check session
function requireAuth(req, res, next) {
  if (!req.session.userId) {
    return res.status(401).json({ error: 'Authentication required' });
  }
  next();
}

// Login route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Verify credentials (implement your logic)
  const user = await authenticateUser(email, password);

  if (user) {
    req.session.userId = user.id;
    req.session.email = user.email;
    res.json({
      message: 'Login successful',
      user: { id: user.id, email: user.email },
    });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

// Logout route
app.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ error: 'Could not log out' });
    }
    res.clearCookie('connect.sid');
    res.json({ message: 'Logout successful' });
  });
});

// Protected route
app.get('/profile', requireAuth, (req, res) => {
  res.json({
    userId: req.session.userId,
    email: req.session.email,
  });
});
```

## 21. Create a proxy server

```javascript
const http = require('http');
const httpProxy = require('http-proxy-middleware');
const express = require('express');

// Simple proxy with http-proxy-middleware
const app = express();

// Proxy configuration
const apiProxy = httpProxy.createProxyMiddleware({
  target: 'http://localhost:3001',
  changeOrigin: true,
  pathRewrite: {
    '^/api': '', // Remove /api prefix
  },
  onProxyReq: (proxyReq, req, res) => {
    console.log(`Proxying ${req.method} ${req.url}`);
  },
  onError: (err, req, res) => {
    console.error('Proxy error:', err);
    res.status(500).json({ error: 'Proxy error' });
  },
});

app.use('/api', apiProxy);

// Load balancer proxy
class LoadBalancer {
  constructor(servers) {
    this.servers = servers;
    this.currentIndex = 0;
  }

  getNextServer() {
    const server = this.servers[this.currentIndex];
    this.currentIndex = (this.currentIndex + 1) % this.servers.length;
    return server;
  }

  createProxy() {
    return (req, res) => {
      const target = this.getNextServer();
      const proxy = httpProxy.createProxyMiddleware({
        target,
        changeOrigin: true,
        onError: (err, req, res) => {
          console.error(`Error proxying to ${target}:`, err);
          // Try next server on error
          const nextTarget = this.getNextServer();
          const retryProxy = httpProxy.createProxyMiddleware({
            target: nextTarget,
            changeOrigin: true,
          });
          retryProxy(req, res);
        },
      });

      proxy(req, res);
    };
  }
}

const loadBalancer = new LoadBalancer([
  'http://localhost:3001',
  'http://localhost:3002',
  'http://localhost:3003',
]);

app.use('/balanced', loadBalancer.createProxy());

// Custom proxy implementation
function createCustomProxy(target) {
  return (req, res) => {
    const url = new URL(target);

    const options = {
      hostname: url.hostname,
      port: url.port,
      path: req.url,
      method: req.method,
      headers: req.headers,
    };

    const proxyReq = http.request(options, (proxyRes) => {
      res.writeHead(proxyRes.statusCode, proxyRes.headers);
      proxyRes.pipe(res);
    });

    proxyReq.on('error', (err) => {
      console.error('Proxy request error:', err);
      res.status(500).json({ error: 'Proxy error' });
    });

    req.pipe(proxyReq);
  };
}

app.use('/custom-proxy', createCustomProxy('http://localhost:3001'));
```

## 22. Implement file compression

```javascript
const zlib = require('zlib');
const fs = require('fs');
const path = require('path');
const { pipeline } = require('stream');

// Compress file using gzip
function compressFile(inputPath, outputPath) {
  return new Promise((resolve, reject) => {
    const gzip = zlib.createGzip();
    const source = fs.createReadStream(inputPath);
    const destination = fs.createWriteStream(outputPath);

    pipeline(source, gzip, destination, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(outputPath);
      }
    });
  });
}

// Decompress file
function decompressFile(inputPath, outputPath) {
  return new Promise((resolve, reject) => {
    const gunzip = zlib.createGunzip();
    const source = fs.createReadStream(inputPath);
    const destination = fs.createWriteStream(outputPath);

    pipeline(source, gunzip, destination, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(outputPath);
      }
    });
  });
}

// Express middleware for response compression
const compression = require('compression');

app.use(
  compression({
    level: 6,
    threshold: 1024,
    filter: (req, res) => {
      if (req.headers['x-no-compression']) {
        return false;
      }
      return compression.filter(req, res);
    },
  })
);

// Custom compression middleware
function customCompressionMiddleware(req, res, next) {
  const acceptEncoding = req.headers['accept-encoding'] || '';

  if (acceptEncoding.includes('gzip')) {
    res.setHeader('Content-Encoding', 'gzip');

    const originalSend = res.send;
    res.send = function (data) {
      if (typeof data === 'string' && data.length > 1024) {
        zlib.gzip(data, (err, compressed) => {
          if (err) {
            return originalSend.call(this, data);
          }
          res.setHeader('Content-Length', compressed.length);
          originalSend.call(this, compressed);
        });
      } else {
        originalSend.call(this, data);
      }
    };
  }

  next();
}

// Archive multiple files
const archiver = require('archiver');

function createZipArchive(files, outputPath) {
  return new Promise((resolve, reject) => {
    const output = fs.createWriteStream(outputPath);
    const archive = archiver('zip', { zlib: { level: 9 } });

    output.on('close', () => {
      resolve(outputPath);
    });

    archive.on('error', (err) => {
      reject(err);
    });

    archive.pipe(output);

    files.forEach((file) => {
      if (fs.statSync(file.path).isDirectory()) {
        archive.directory(file.path, file.name);
      } else {
        archive.file(file.path, { name: file.name });
      }
    });

    archive.finalize();
  });
}

// Usage
app.post('/compress', async (req, res) => {
  try {
    const { inputFile, outputFile } = req.body;
    const compressedFile = await compressFile(inputFile, outputFile);
    res.json({ message: 'File compressed', file: compressedFile });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
```

## 23. Create a CLI application

```javascript
#!/usr/bin/env node

const { Command } = require('commander');
const inquirer = require('inquirer');
const chalk = require('chalk');
const fs = require('fs').promises;
const path = require('path');

const program = new Command();

// CLI configuration
program.name('myapp').description('A sample CLI application').version('1.0.0');

// File operations command
program
  .command('create <type> <name>')
  .description('Create a new file or directory')
  .option('-t, --template <template>', 'Use a template')
  .action(async (type, name, options) => {
    try {
      if (type === 'file') {
        await createFile(name, options.template);
        console.log(chalk.green(`✓ File ${name} created successfully`));
      } else if (type === 'dir') {
        await createDirectory(name);
        console.log(chalk.green(`✓ Directory ${name} created successfully`));
      } else {
        console.log(chalk.red('Invalid type. Use "file" or "dir"'));
      }
    } catch (error) {
      console.log(chalk.red(`Error: ${error.message}`));
    }
  });

// Interactive command
program
  .command('init')
  .description('Initialize a new project')
  .action(async () => {
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'projectName',
        message: 'Project name:',
        validate: (input) => input.length > 0 || 'Project name is required',
      },
      {
        type: 'list',
        name: 'template',
        message: 'Choose a template:',
        choices: ['basic', 'express', 'react', 'vue'],
      },
      {
        type: 'confirm',
        name: 'git',
        message: 'Initialize git repository?',
        default: true,
      },
    ]);

    await initProject(answers);
  });

// Progress bar example
program
  .command('process <files...>')
  .description('Process multiple files')
  .action(async (files) => {
    const ProgressBar = require('progress');
    const bar = new ProgressBar('Processing [:bar] :percent :etas', {
      complete: '=',
      incomplete: ' ',
      width: 40,
      total: files.length,
    });

    for (const file of files) {
      await processFile(file);
      bar.tick();
    }

    console.log(chalk.green('\nAll files processed!'));
  });

// Config command
program
  .command('config')
  .description('Manage configuration')
  .option('--set <key=value>', 'Set configuration value')
  .option('--get <key>', 'Get configuration value')
  .option('--list', 'List all configuration')
  .action(async (options) => {
    const configPath = path.join(require('os').homedir(), '.myapp-config.json');

    if (options.set) {
      const [key, value] = options.set.split('=');
      await setConfig(configPath, key, value);
      console.log(chalk.green(`✓ Set ${key} = ${value}`));
    } else if (options.get) {
      const value = await getConfig(configPath, options.get);
      console.log(value || 'Not found');
    } else if (options.list) {
      const config = await listConfig(configPath);
      console.table(config);
    }
  });

// Helper functions
async function createFile(name, template) {
  let content = '';

  if (template === 'js') {
    content = `// ${name}\nconsole.log('Hello from ${name}');\n`;
  } else if (template === 'json') {
    content = JSON.stringify({ name }, null, 2);
  }

  await fs.writeFile(name, content);
}

async function createDirectory(name) {
  await fs.mkdir(name, { recursive: true });
}

async function initProject(config) {
  const { projectName, template, git } = config;

  console.log(chalk.blue(`Creating project: ${projectName}`));

  await fs.mkdir(projectName, { recursive: true });

  const packageJson = {
    name: projectName,
    version: '1.0.0',
    description: '',
    main: 'index.js',
    scripts: {
      start: 'node index.js',
    },
  };

  await fs.writeFile(
    path.join(projectName, 'package.json'),
    JSON.stringify(packageJson, null, 2)
  );

  if (template === 'express') {
    const expressApp = `const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});`;

    await fs.writeFile(path.join(projectName, 'index.js'), expressApp);
  }

  if (git) {
    const { execSync } = require('child_process');
    execSync('git init', { cwd: projectName });
  }

  console.log(chalk.green(`✓ Project ${projectName} created successfully`));
}

async function processFile(file) {
  // Simulate file processing
  return new Promise((resolve) => setTimeout(resolve, 1000));
}

async function setConfig(configPath, key, value) {
  let config = {};
  try {
    const data = await fs.readFile(configPath, 'utf8');
    config = JSON.parse(data);
  } catch (error) {
    // File doesn't exist or is invalid
  }

  config[key] = value;
  await fs.writeFile(configPath, JSON.stringify(config, null, 2));
}

async function getConfig(configPath, key) {
  try {
    const data = await fs.readFile(configPath, 'utf8');
    const config = JSON.parse(data);
    return config[key];
  } catch (error) {
    return null;
  }
}

async function listConfig(configPath) {
  try {
    const data = await fs.readFile(configPath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return {};
  }
}

// Error handling
program.on('command:*', () => {
  console.log(chalk.red(`Invalid command: ${program.args.join(' ')}`));
  console.log('See --help for a list of available commands.');
  process.exit(1);
});

program.parse();
```

## 24. Implement real-time notifications

```javascript
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const Redis = require('ioredis');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

const redis = new Redis();
const pub = new Redis();
const sub = new Redis();

// Notification types
const NOTIFICATION_TYPES = {
  MESSAGE: 'message',
  ALERT: 'alert',
  UPDATE: 'update',
  SYSTEM: 'system',
};

// Notification manager
class NotificationManager {
  constructor() {
    this.subscribers = new Map();
    this.setupRedisSubscription();
  }

  subscribe(userId, socket) {
    if (!this.subscribers.has(userId)) {
      this.subscribers.set(userId, new Set());
    }
    this.subscribers.get(userId).add(socket);

    socket.on('disconnect', () => {
      this.unsubscribe(userId, socket);
    });
  }

  unsubscribe(userId, socket) {
    if (this.subscribers.has(userId)) {
      this.subscribers.get(userId).delete(socket);
      if (this.subscribers.get(userId).size === 0) {
        this.subscribers.delete(userId);
      }
    }
  }

  async sendNotification(userId, notification) {
    // Store in database/cache
    await this.storeNotification(userId, notification);

    // Send via WebSocket if user is online
    if (this.subscribers.has(userId)) {
      this.subscribers.get(userId).forEach((socket) => {
        socket.emit('notification', notification);
      });
    }

    // Publish to Redis for other server instances
    await pub.publish(
      'notifications',
      JSON.stringify({
        userId,
        notification,
      })
    );

    // Send push notification if user is offline
    if (!this.subscribers.has(userId)) {
      await this.sendPushNotification(userId, notification);
    }
  }

  async sendBroadcast(notification) {
    // Send to all connected users
    io.emit('broadcast', notification);

    // Store as system notification
    await redis.setex(
      `broadcast:${Date.now()}`,
      3600,
      JSON.stringify(notification)
    );
  }

  async getUserNotifications(userId, page = 1, limit = 20) {
    const start = (page - 1) * limit;
    const end = start + limit - 1;

    const notifications = await redis.lrange(
      `notifications:${userId}`,
      start,
      end
    );

    return notifications.map((n) => JSON.parse(n));
  }

  async markAsRead(userId, notificationId) {
    await redis.sadd(`read:${userId}`, notificationId);
  }

  async storeNotification(userId, notification) {
    notification.id = `${Date.now()}_${Math.random()}`;
    notification.timestamp = new Date().toISOString();
    notification.read = false;

    await redis.lpush(`notifications:${userId}`, JSON.stringify(notification));

    // Keep only last 100 notifications
    await redis.ltrim(`notifications:${userId}`, 0, 99);
  }

  setupRedisSubscription() {
    sub.subscribe('notifications');
    sub.on('message', (channel, message) => {
      if (channel === 'notifications') {
        const { userId, notification } = JSON.parse(message);

        if (this.subscribers.has(userId)) {
          this.subscribers.get(userId).forEach((socket) => {
            socket.emit('notification', notification);
          });
        }
      }
    });
  }

  async sendPushNotification(userId, notification) {
    // Implement push notification logic
    // Using services like FCM, APNS, etc.
    console.log(`Sending push notification to ${userId}:`, notification);
  }
}

const notificationManager = new NotificationManager();

// Socket.IO connection handling
io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  socket.on('authenticate', async (data) => {
    const { userId, token } = data;

    // Verify token (implement your auth logic)
    if (await verifyToken(token)) {
      socket.userId = userId;
      notificationManager.subscribe(userId, socket);

      // Send unread notifications
      const notifications = await notificationManager.getUserNotifications(
        userId
      );
      socket.emit('notifications', notifications);
    } else {
      socket.emit('auth_error', { message: 'Invalid token' });
    }
  });

  socket.on('mark_read', async (notificationId) => {
    if (socket.userId) {
      await notificationManager.markAsRead(socket.userId, notificationId);
    }
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

// REST API endpoints
app.use(express.json());

app.post('/api/notifications/send', async (req, res) => {
  try {
    const { userId, type, title, message, data } = req.body;

    const notification = {
      type,
      title,
      message,
      data: data || {},
    };

    await notificationManager.sendNotification(userId, notification);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/notifications/broadcast', async (req, res) => {
  try {
    const { type, title, message } = req.body;

    const notification = {
      type,
      title,
      message,
      timestamp: new Date().toISOString(),
    };

    await notificationManager.sendBroadcast(notification);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/notifications/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const { page = 1, limit = 20 } = req.query;

    const notifications = await notificationManager.getUserNotifications(
      userId,
      parseInt(page),
      parseInt(limit)
    );

    res.json(notifications);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

async function verifyToken(token) {
  // Implement token verification
  return token === 'valid-token';
}
```

**[⬆ Back to Top](#table-of-contents)**
