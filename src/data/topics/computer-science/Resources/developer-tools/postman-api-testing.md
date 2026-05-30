# 📮 Postman & API Testing

Postman is a popular API development and testing tool. It helps developers send
requests, inspect responses, automate testing, and collaborate on APIs.

## 🚀 What is Postman?

Postman allows you to:

- Test REST APIs
- Send HTTP requests
- Inspect responses
- Manage environments
- Automate API testing
- Generate API documentation

Think of Postman as a browser for APIs.

---

## 🌐 HTTP Methods

### GET

Retrieve data.

Example:

GET /api/users

### POST

Create new data.

Example:

POST /api/users

### PUT

Update existing data.

Example:

PUT /api/users/1

### PATCH

Partially update data.

Example:

PATCH /api/users/1

### DELETE

Remove data.

Example:

DELETE /api/users/1

---

## 📤 Sending a GET Request

Example:

GET https://jsonplaceholder.typicode.com/users

Steps:

1. Select GET
2. Enter URL
3. Click Send
4. View response

Response:

[ { "id": 1, "name": "Leanne Graham" } ]

---

## 📥 Sending a POST Request

Example:

POST https://jsonplaceholder.typicode.com/posts

### Headers

Content-Type: application/json

### Body

{ "title": "Hello", "body": "Testing API", "userId": 1 }

---

## 📦 Request Components

### URL

Endpoint location.

https://api.example.com/users

### Headers

Metadata about request.

Authorization: Bearer token

Content-Type: application/json

### Query Parameters

Example:

/users?page=1&limit=10

### Request Body

Used in:

- POST
- PUT
- PATCH

---

## 🔑 Authentication Types

### Bearer Token

Authorization:

Bearer your_token_here

### Basic Auth

Uses:

- Username
- Password

### API Key

Example:

x-api-key: abc123

---

## 🌍 Environment Variables

Create reusable values.

Example:

baseUrl = https://api.example.com

Request:

{{baseUrl}}/users

Benefits:

- Switch between dev and production
- Avoid hardcoded URLs

---

## 📂 Collections

Collections help organize requests.

Example:

User API ├── GET Users ├── GET User ├── POST User ├── PUT User └── DELETE User

Benefits:

- Better organization
- Easy sharing
- Automated execution

---

## 🧪 Writing Tests

Open Tests tab.

Example:

pm.test("Status code is 200", () => { pm.response.to.have.status(200); });

---

## ✅ Validate Response Data

Example:

pm.test("Response contains users", () => { const data = pm.response.json();
pm.expect(data.length).to.be.above(0); });

---

## 🔍 Validate Response Time

Example:

pm.test("Response time under 500ms", () => {
pm.expect(pm.response.responseTime).to.be.below(500); });

---

## 🛠️ Pre-request Scripts

Run code before request.

Example:

pm.environment.set( "timestamp", Date.now() );

Useful for:

- Dynamic values
- Authentication
- Token generation

---

## 🔄 Collection Runner

Execute multiple requests automatically.

Uses:

- Regression testing
- API validation
- Automated workflows

Steps:

1. Open Collection Runner
2. Select collection
3. Run all requests

---

## 📄 Import API Collections

Supported formats:

- Postman Collection
- OpenAPI
- Swagger
- Curl commands

Example:

curl -X GET https://api.example.com/users

Paste into Postman to generate request.

---

## 🐛 API Debugging Checklist

### Request Side

Check:

- URL
- Method
- Headers
- Body
- Authentication

### Response Side

Check:

- Status code
- Response body
- Error messages
- Response time

---

## 🚨 Common Status Codes

| Code | Meaning               |
| ---- | --------------------- |
| 200  | Success               |
| 201  | Created               |
| 204  | No Content            |
| 400  | Bad Request           |
| 401  | Unauthorized          |
| 403  | Forbidden             |
| 404  | Not Found             |
| 409  | Conflict              |
| 422  | Validation Error      |
| 500  | Internal Server Error |

---

## ⚛️ Testing a React App Backend

Typical flow:

1. Frontend calls API
2. Open Postman
3. Test endpoint independently
4. Verify response
5. Debug frontend integration

This helps determine whether the issue is in:

- Frontend
- Backend
- Network

---

## 🔥 Useful Features

### Generate Code Snippets

Convert request into:

- JavaScript Fetch
- Axios
- Node.js
- Python
- PHP
- cURL

### Save Examples

Store successful responses for documentation.

### Mock Servers

Simulate APIs before backend development.

---

## ⭐ Best Practices

- Use environments for URLs and tokens
- Group APIs into collections
- Write automated tests
- Validate status codes
- Test error scenarios
- Keep authentication secure
- Document APIs clearly
- Use Collection Runner regularly

Postman is an essential tool for frontend and backend developers because it
makes API development faster, easier, and more reliable.
