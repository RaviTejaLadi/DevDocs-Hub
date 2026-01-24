# Express.js Cheat sheet

## Table of Contents

1. [Basic Setup](#basic-setup)
2. [HTTP Methods](#http-methods)
3. [Route Parameters](#route-parameters)
4. [Request Object Properties](#request-object-properties)
5. [Response Object Methods](#response-object-methods)
6. [Middleware](#middleware)
7. [Built-in Middleware](#built-in-middleware)
8. [Popular Third-party Middleware](#popular-third-party-middleware)
9. [Router](#router)
10. [Error Handling](#error-handling)
11. [Template Engines](#template-engines)
12. [Application Settings](#application-settings)
13. [Common Settings](#common-settings)
14. [Route Handlers](#route-handlers)
15. [Path Patterns](#path-patterns)
16. [Validation & Sanitization](#validation--sanitization)
17. [Security Best Practices](#security-best-practices)
18. [Environment Configuration](#environment-configuration)
19. [Testing](#testing)
20. [Common Response Patterns](#common-response-patterns)
21. [Debugging](#debugging)

## Basic Setup

| Task            | Code                                                    |
| --------------- | ------------------------------------------------------- |
| Install Express | `npm install express`                                   |
| Import Express  | `const express = require('express')`                    |
| Create app      | `const app = express()`                                 |
| Start server    | `app.listen(port, callback)`                            |
| Basic server    | `app.listen(3000, () => console.log('Server running'))` |

## HTTP Methods

| Method | Syntax                      | Description                |
| ------ | --------------------------- | -------------------------- |
| GET    | `app.get(path, handler)`    | Retrieve data              |
| POST   | `app.post(path, handler)`   | Create new resource        |
| PUT    | `app.put(path, handler)`    | Update entire resource     |
| PATCH  | `app.patch(path, handler)`  | Partial update             |
| DELETE | `app.delete(path, handler)` | Delete resource            |
| ALL    | `app.all(path, handler)`    | Handle all HTTP methods    |
| USE    | `app.use(path, handler)`    | Middleware for all methods |

## Route Parameters

| Type            | Syntax             | Example                    | Access                                      |
| --------------- | ------------------ | -------------------------- | ------------------------------------------- |
| Route param     | `/:param`          | `/users/:id`               | `req.params.id`                             |
| Query param     | `?key=value`       | `/users?age=25`            | `req.query.age`                             |
| Multiple params | `/:param1/:param2` | `/users/:id/posts/:postId` | `req.params.id`, `req.params.postId`        |
| Optional param  | `/:param?`         | `/users/:id?`              | `req.params.id` (undefined if not provided) |
| Wildcard        | `*`                | `/files/*`                 | Matches any path                            |

## Request Object Properties

| Property       | Description                          | Example                       |
| -------------- | ------------------------------------ | ----------------------------- |
| `req.params`   | Route parameters                     | `req.params.id`               |
| `req.query`    | Query string parameters              | `req.query.name`              |
| `req.body`     | Request body (requires middleware)   | `req.body.email`              |
| `req.headers`  | Request headers                      | `req.headers['content-type']` |
| `req.method`   | HTTP method                          | `req.method`                  |
| `req.url`      | Request URL                          | `req.url`                     |
| `req.path`     | Request path                         | `req.path`                    |
| `req.protocol` | Protocol (http/https)                | `req.protocol`                |
| `req.secure`   | HTTPS boolean                        | `req.secure`                  |
| `req.ip`       | Client IP address                    | `req.ip`                      |
| `req.cookies`  | Cookies (requires middleware)        | `req.cookies.sessionId`       |
| `req.files`    | Uploaded files (requires middleware) | `req.files.upload`            |

## Response Object Methods

| Method              | Description        | Example                                           |
| ------------------- | ------------------ | ------------------------------------------------- |
| `res.send()`        | Send response      | `res.send('Hello World')`                         |
| `res.json()`        | Send JSON response | `res.json({name: 'John'})`                        |
| `res.status()`      | Set status code    | `res.status(404).send('Not Found')`               |
| `res.redirect()`    | Redirect request   | `res.redirect('/login')`                          |
| `res.render()`      | Render template    | `res.render('index', {title: 'Home'})`            |
| `res.cookie()`      | Set cookie         | `res.cookie('name', 'value')`                     |
| `res.clearCookie()` | Clear cookie       | `res.clearCookie('name')`                         |
| `res.download()`    | Download file      | `res.download('/path/to/file.pdf')`               |
| `res.sendFile()`    | Send file          | `res.sendFile(path.join(__dirname, 'file.html'))` |
| `res.end()`         | End response       | `res.end()`                                       |
| `res.set()`         | Set header         | `res.set('Content-Type', 'text/html')`            |

## Middleware

| Type              | Description                 | Example                                |
| ----------------- | --------------------------- | -------------------------------------- |
| Application-level | Executes for all routes     | `app.use(middleware)`                  |
| Router-level      | Executes for router         | `router.use(middleware)`               |
| Error-handling    | Handles errors              | `app.use((err, req, res, next) => {})` |
| Built-in          | Express built-in middleware | `app.use(express.json())`              |
| Third-party       | External middleware         | `app.use(cors())`                      |

## Built-in Middleware

| Middleware             | Description              | Usage                                           |
| ---------------------- | ------------------------ | ----------------------------------------------- |
| `express.json()`       | Parse JSON bodies        | `app.use(express.json())`                       |
| `express.urlencoded()` | Parse URL-encoded bodies | `app.use(express.urlencoded({extended: true}))` |
| `express.static()`     | Serve static files       | `app.use(express.static('public'))`             |
| `express.text()`       | Parse text bodies        | `app.use(express.text())`                       |
| `express.raw()`        | Parse raw bodies         | `app.use(express.raw())`                        |

## Popular Third-party Middleware

| Middleware           | Purpose                       | Installation                     | Usage                              |
| -------------------- | ----------------------------- | -------------------------------- | ---------------------------------- |
| `cors`               | Cross-Origin Resource Sharing | `npm install cors`               | `app.use(cors())`                  |
| `morgan`             | HTTP request logger           | `npm install morgan`             | `app.use(morgan('combined'))`      |
| `helmet`             | Security headers              | `npm install helmet`             | `app.use(helmet())`                |
| `compression`        | Gzip compression              | `npm install compression`        | `app.use(compression())`           |
| `cookie-parser`      | Parse cookies                 | `npm install cookie-parser`      | `app.use(cookieParser())`          |
| `express-session`    | Session management            | `npm install express-session`    | `app.use(session(options))`        |
| `multer`             | File uploads                  | `npm install multer`             | `app.use(multer().single('file'))` |
| `express-rate-limit` | Rate limiting                 | `npm install express-rate-limit` | `app.use(rateLimit(options))`      |

## Router

| Operation         | Syntax                            | Description           |
| ----------------- | --------------------------------- | --------------------- |
| Create router     | `const router = express.Router()` | Create new router     |
| Use router        | `app.use('/api', router)`         | Mount router          |
| Router GET        | `router.get('/users', handler)`   | GET route on router   |
| Router POST       | `router.post('/users', handler)`  | POST route on router  |
| Router middleware | `router.use(middleware)`          | Middleware for router |
| Router params     | `router.param('id', handler)`     | Parameter middleware  |

## Error Handling

| Pattern          | Description            | Example                                                                            |
| ---------------- | ---------------------- | ---------------------------------------------------------------------------------- |
| Basic error      | Catch errors in routes | `if (error) return res.status(500).send('Error')`                                  |
| Error middleware | Global error handler   | `app.use((err, req, res, next) => {})`                                             |
| Async errors     | Handle async errors    | `app.get('/', async (req, res, next) => { try { ... } catch(err) { next(err) } })` |
| 404 handler      | Handle not found       | `app.use((req, res) => res.status(404).send('Not Found'))`                         |
| Custom error     | Throw custom error     | `const err = new Error('Custom error'); err.status = 400; throw err;`              |

## Template Engines

| Engine     | Installation                     | Setup                                | Usage                          |
| ---------- | -------------------------------- | ------------------------------------ | ------------------------------ |
| EJS        | `npm install ejs`                | `app.set('view engine', 'ejs')`      | `res.render('template', data)` |
| Pug        | `npm install pug`                | `app.set('view engine', 'pug')`      | `res.render('template', data)` |
| Handlebars | `npm install express-handlebars` | `app.engine('handlebars', exphbs())` | `res.render('template', data)` |

## Application Settings

| Setting          | Description             | Example                        |
| ---------------- | ----------------------- | ------------------------------ |
| `app.set()`      | Set application setting | `app.set('port', 3000)`        |
| `app.get()`      | Get application setting | `app.get('port')`              |
| `app.enable()`   | Enable setting          | `app.enable('trust proxy')`    |
| `app.disable()`  | Disable setting         | `app.disable('x-powered-by')`  |
| `app.enabled()`  | Check if enabled        | `app.enabled('trust proxy')`   |
| `app.disabled()` | Check if disabled       | `app.disabled('x-powered-by')` |

## Common Settings

| Setting        | Description         | Example                           |
| -------------- | ------------------- | --------------------------------- | --- | ------ |
| `port`         | Server port         | `app.set('port', process.env.PORT |     | 3000)` |
| `env`          | Environment         | `app.set('env', 'production')`    |
| `trust proxy`  | Trust proxy headers | `app.set('trust proxy', 1)`       |
| `view engine`  | Template engine     | `app.set('view engine', 'ejs')`   |
| `views`        | Views directory     | `app.set('views', './views')`     |
| `x-powered-by` | X-Powered-By header | `app.disable('x-powered-by')`     |

## Route Handlers

| Pattern           | Description           | Example                                                                            |
| ----------------- | --------------------- | ---------------------------------------------------------------------------------- |
| Single handler    | One function          | `app.get('/', handler)`                                                            |
| Multiple handlers | Array of functions    | `app.get('/', [auth, handler])`                                                    |
| Middleware chain  | Using next()          | `app.get('/', middleware, handler)`                                                |
| Conditional       | Conditional execution | `app.get('/', (req, res, next) => { if (condition) next(); else res.send('No') })` |

## Path Patterns

| Pattern               | Description    | Example    | Matches                    |
| --------------------- | -------------- | ---------- | -------------------------- |
| String                | Exact match    | `/users`   | `/users`                   |
| String with wildcards | Wildcard match | `/files/*` | `/files/doc.pdf`           |
| String patterns       | Pattern match  | `/ab*cd`   | `/abcd`, `/abxcd`          |
| Regular expressions   | Regex match    | `/.*fly$/` | `/butterfly`, `/dragonfly` |

## Validation & Sanitization

| Library           | Installation                    | Usage                                                             |
| ----------------- | ------------------------------- | ----------------------------------------------------------------- |
| express-validator | `npm install express-validator` | `const { body, validationResult } = require('express-validator')` |
| Joi               | `npm install joi`               | `const Joi = require('joi')`                                      |
| Yup               | `npm install yup`               | `const yup = require('yup')`                                      |

## Security Best Practices

| Practice                 | Implementation                   |
| ------------------------ | -------------------------------- |
| Use HTTPS                | Configure SSL/TLS certificates   |
| Helmet middleware        | `app.use(helmet())`              |
| Rate limiting            | `app.use(rateLimit(options))`    |
| Input validation         | Use express-validator or similar |
| CORS configuration       | `app.use(cors(options))`         |
| Environment variables    | Use `.env` files with dotenv     |
| Session security         | Secure session configuration     |
| SQL injection prevention | Use parameterized queries        |

## Environment Configuration

| Variable     | Description             | Example                           |
| ------------ | ----------------------- | --------------------------------- |
| `NODE_ENV`   | Environment type        | `production`, `development`       |
| `PORT`       | Server port             | `3000`                            |
| `DB_URL`     | Database URL            | `mongodb://localhost:27017/myapp` |
| `SECRET_KEY` | Secret for sessions/JWT | `your-secret-key`                 |

## Testing

| Tool      | Installation                       | Usage             |
| --------- | ---------------------------------- | ----------------- |
| Supertest | `npm install --save-dev supertest` | HTTP assertions   |
| Jest      | `npm install --save-dev jest`      | Test framework    |
| Mocha     | `npm install --save-dev mocha`     | Test framework    |
| Chai      | `npm install --save-dev chai`      | Assertion library |

## Common Response Patterns

| Pattern           | Code Example                                                        |
| ----------------- | ------------------------------------------------------------------- |
| Success with data | `res.status(200).json({ success: true, data: result })`             |
| Created resource  | `res.status(201).json({ success: true, data: newResource })`        |
| Bad request       | `res.status(400).json({ success: false, message: 'Bad request' })`  |
| Unauthorized      | `res.status(401).json({ success: false, message: 'Unauthorized' })` |
| Not found         | `res.status(404).json({ success: false, message: 'Not found' })`    |
| Server error      | `res.status(500).json({ success: false, message: 'Server error' })` |

## Debugging

| Tool            | Usage                              |
| --------------- | ---------------------------------- |
| Debug module    | `DEBUG=express:* node app.js`      |
| Morgan logging  | `app.use(morgan('combined'))`      |
| Console logging | `console.log(req.method, req.url)` |
| Error logging   | `console.error(err.stack)`         |

**[⬆ Back to Top](#table-of-contents)**
