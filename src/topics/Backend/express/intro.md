# Introduction to Express.js

Express.js is a fast, unopinionated, and minimalist web framework for Node.js.
It's one of the most popular frameworks for building web applications and APIs
in the Node.js ecosystem.

## Table of Contents

- [Key Features](#key-features)
- [Basic Setup](#basic-setup)
- [Core Concepts](#core-concepts)
- [Common Use Cases](#common-use-cases)
- [Advantages](#advantages)

## Key Features

1. **Minimalist**: Express provides a thin layer of fundamental web application
   features without obscuring Node.js features.
2. **Middleware**: Uses a middleware approach to handle requests and responses.
3. **Routing**: Offers a robust routing system to handle different HTTP
   requests.
4. **Fast**: Lightweight and performs well for web applications.
5. **Flexible**: Can be used for full web applications (server-side rendered) or
   just as an API backend.

## Basic Setup

Here's how to set up a basic Express server:

```javascript
// 1. Import Express
const express = require('express');

// 2. Create an Express application
const app = express();

// 3. Define a route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// 4. Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
```

## Core Concepts

### Middleware

Middleware functions have access to the request object (`req`), the response
object (`res`), and the next middleware function in the cycle.

```javascript
app.use((req, res, next) => {
  console.log('Time:', Date.now());
  next(); // Pass control to the next middleware
});
```

### Routing

Express provides methods that correspond to HTTP methods (`get`, `post`, `put`,
`delete`, etc.)

```javascript
app.get('/about', (req, res) => {
  res.send('About Page');
});

app.post('/users', (req, res) => {
  // Handle user creation
});
```

### Request and Response Objects

- `req`: Contains information about the HTTP request (parameters, query strings,
  headers, etc.)
- `res`: Used to send the HTTP response

```javascript
app.get('/users/:userId', (req, res) => {
  res.send(`User ID: ${req.params.userId}`);
});
```

## Common Use Cases

1. Building RESTful APIs
2. Creating server-rendered web applications
3. Handling form submissions
4. Serving static files
5. Implementing authentication

## Advantages

- Simple and easy to learn
- Large ecosystem of middleware packages
- Excellent performance
- Great for both small and large applications
- Active community support

Express provides just the core features you need while allowing you to add other
libraries as needed (for databases, authentication, etc.), making it extremely
flexible for various use cases.

**[⬆ Back to Top](#table-of-contents)**
