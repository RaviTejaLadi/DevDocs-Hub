# Top 30 Theory Interview Questions and Answers

## Table of Contents

- [Core Concepts](#core-concepts)
- [Routing](#routing)
- [Middleware](#middleware)
- [Advanced Concepts](#advanced-concepts)
- [Performance and Security](#performance-and-security)
- [Deployment and Configuration](#deployment-and-configuration)
- [Best Practices](#best-practices)

## Core Concepts

1. **What is Express.js?**

   - Answer: Express.js is a minimal and flexible Node.js web application
     framework that provides a robust set of features for building web and
     mobile applications. It simplifies the server creation process with tools
     to handle routes, middleware, and HTTP requests/responses.

2. **What are the key features of Express.js?**

   - Answer: Key features include:
     - Middleware support
     - Routing
     - Template engines integration
     - Error handling
     - Simplified HTTP utility methods
     - Easy integration with databases

3. **How does Express.js differ from Node.js HTTP module?**

   - Answer: While Node.js HTTP module provides low-level server creation,
     Express.js builds on top of it with higher-level abstractions like routing,
     middleware, and other utilities that make web development faster and
     easier.

4. **What is middleware in Express.js?**

   - Answer: Middleware are functions that have access to the request object
     (req), response object (res), and the next middleware function in the
     application's request-response cycle. They can execute code, modify req/res
     objects, end the cycle, or call the next middleware.

5. **Explain the package.json file in an Express application**
   - Answer: package.json is a manifest file that contains metadata about the
     project including dependencies, scripts, version, and other configurations.
     It's essential for managing npm packages and project configuration.

## Routing

6. **What is routing in Express.js?**

   - Answer: Routing refers to how an application's endpoints (URIs) respond to
     client requests. It involves defining application endpoints and how they
     respond to HTTP methods (GET, POST, etc.).

7. **How do you handle GET and POST requests in Express?**

   - Answer:

     ```javascript
     // GET request
     app.get('/route', (req, res) => {
       res.send('GET request received');
     });

     // POST request
     app.post('/route', (req, res) => {
       res.send('POST request received');
     });
     ```

8. **What is route parameters in Express?**

   - Answer: Route parameters are named URL segments used to capture values at
     specific positions in the URL. They're defined by prefixing a colon to the
     parameter name in the route path (e.g., `/users/:userId`).

9. **How do you handle query parameters in Express?**

   - Answer: Query parameters are accessed via the `req.query` object:
     ```javascript
     app.get('/search', (req, res) => {
       const query = req.query.q;
       res.send(`Searching for: ${query}`);
     });
     ```

10. **What is the difference between app.get() and app.use()?**
    - Answer: `app.get()` handles only GET requests for a specific route, while
      `app.use()` is for binding middleware to all HTTP methods (GET, POST,
      etc.) and can be used for a path or all routes.

## Middleware

11. **How do you create a custom middleware in Express?**

    - Answer:

      ```javascript
      const myMiddleware = (req, res, next) => {
        console.log('Middleware executed');
        next(); // Pass control to the next middleware
      };

      app.use(myMiddleware);
      ```

12. **What is the order of middleware execution in Express?**

    - Answer: Middleware executes in the order they are defined using
      `app.use()` or in the route handler. The first middleware that matches the
      request path will execute first, followed by the next, unless a response
      is sent or the cycle is terminated.

13. **What is the purpose of the next() function in middleware?**

    - Answer: The `next()` function passes control to the next middleware
      function in the stack. If not called, the request will hang, and no
      subsequent middleware or route handler will execute.

14. **How do you handle errors in middleware?**

    - Answer: Error-handling middleware takes four arguments (err, req, res,
      next):
      ```javascript
      app.use((err, req, res, next) => {
        console.error(err.stack);
        res.status(500).send('Something broke!');
      });
      ```

15. **What are some commonly used third-party middleware in Express?**
    - Answer: Popular ones include:
      - body-parser (for parsing request bodies)
      - cookie-parser (for parsing cookies)
      - morgan (for logging)
      - helmet (for security headers)
      - cors (for Cross-Origin Resource Sharing)

## Advanced Concepts

16. **What is the Express Router?**

    - Answer: The Express Router is a mini Express application that provides
      route modularization. It allows you to break your application into
      smaller, maintainable pieces:
      ```javascript
      const router = express.Router();
      router.get('/', (req, res) => {...});
      app.use('/route', router);
      ```

17. **How do you serve static files in Express?**

    - Answer: Use the built-in `express.static` middleware:
      ```javascript
      app.use(express.static('public'));
      ```

18. **What is template engine integration in Express?**

    - Answer: Express can integrate with template engines like EJS, Pug,
      Handlebars to render dynamic HTML. You set it up with:
      ```javascript
      app.set('view engine', 'ejs');
      ```

19. **How do you handle file uploads in Express?**

    - Answer: Using middleware like multer:

      ```javascript
      const multer = require('multer');
      const upload = multer({ dest: 'uploads/' });

      app.post('/upload', upload.single('file'), (req, res) => {...});
      ```

20. **What is the purpose of app.locals and res.locals?**
    - Answer: `app.locals` are application-level variables available to all
      templates, while `res.locals` are response-level variables available only
      to that request's templates.

## Performance and Security

21. **How can you improve Express application performance?**

    - Answer: Techniques include:
      - Using gzip compression
      - Implementing caching
      - Optimizing database queries
      - Using cluster mode for multi-core CPUs
      - Minimizing synchronous operations

22. **What security best practices should you follow with Express?**

    - Answer:
      - Use helmet.js for security headers
      - Validate and sanitize user input
      - Implement rate limiting
      - Use HTTPS
      - Keep dependencies updated
      - Implement proper session management

23. **How does Express handle CORS?**

    - Answer: CORS (Cross-Origin Resource Sharing) can be handled using the cors
      middleware:
      ```javascript
      const cors = require('cors');
      app.use(cors()); // Enable all CORS requests
      ```

24. **What is CSRF protection and how to implement it in Express?**
    - Answer: CSRF (Cross-Site Request Forgery) protection prevents unauthorized
      commands from being executed. Implement using csurf middleware (though
      deprecated, alternatives like csrf-csrf exist):
      ```javascript
      const csrf = require('csurf');
      const csrfProtection = csrf({ cookie: true });
      app.use(csrfProtection);
      ```

## Deployment and Configuration

25. **How do you configure environment variables in Express?**

    - Answer: Use the dotenv package:
      ```javascript
      require('dotenv').config();
      const port = process.env.PORT || 3000;
      ```

26. **What is the difference between app.listen() and server.listen()?**

    - Answer: `app.listen()` is a convenience method that creates an HTTP server
      internally, while `server.listen()` is used when you need to create the
      HTTP server explicitly (e.g., for HTTPS or WebSockets).

27. **How do you handle multiple environments (dev, prod, test) in Express?**
    - Answer: Use environment variables and configuration files:
      ```javascript
      const env = process.env.NODE_ENV || 'development';
      const config = require('./config')[env];
      ```

## Best Practices

28. **What is the recommended project structure for an Express application?**

    - Answer: A typical structure includes:
      ```
      /config - configuration files
      /controllers - route handlers
      /models - data models
      /routes - route definitions
      /middleware - custom middleware
      /public - static files
      /views - templates
      app.js - main application file
      ```

29. **How do you implement logging in Express?**

    - Answer: Use middleware like morgan:
      ```javascript
      const morgan = require('morgan');
      app.use(morgan('combined')); // 'dev', 'common', etc.
      ```

30. **What are some common performance bottlenecks in Express apps?**
    - Answer:
      - Synchronous code blocking the event loop
      - Unoptimized database queries
      - Memory leaks
      - Improper use of middleware
      - Lack of caching
      - Not using gzip compression

These questions cover fundamental to advanced Express.js concepts that are
commonly asked in interviews. Understanding these will give you a solid
foundation for Express.js development roles.

**[⬆ Back to Top](#table-of-contents)**
