# 📦 JavaScript Fetch API Guide

## 📖 1. Definition

The **Fetch API** provides a modern interface for making HTTP requests in the
browser. It replaces the older `XMLHttpRequest` and returns a `Promise`, making
it easy to work with asynchronous code.

> It is used to **fetch resources (like JSON, HTML, or text)** from a server.

---

## 🧩 2. Syntax

```javascript
fetch(url, options)
  .then((response) => {
    // handle response
  })
  .catch((error) => {
    // handle error
  });
```

### 🔸 Parameters:

| Parameter | Type     | Description                                   |
| --------- | -------- | --------------------------------------------- |
| `url`     | `string` | The URL to which the request is sent          |
| `options` | `object` | (Optional) An object containing custom config |

---

## ⚙️ 3. Basic Usage

### ✅ GET Request (Default)

```javascript
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error('Error:', error));
```

---

## 🧾 4. Common Options

```javascript
{
  method: 'GET', // or 'POST', 'PUT', 'DELETE'
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer token'
  },
  body: JSON.stringify(data) // Only for POST, PUT, PATCH
}
```

---

## 📨 5. POST Request Example

```javascript
const newPost = {
  title: 'New Article',
  body: 'This is the content.',
  userId: 1,
};

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(newPost),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error('Error:', error));
```

---

## 🧪 6. Handling Non-OK Responses

Fetch **does not reject** the promise on HTTP errors (like 404/500).

```javascript
fetch('https://jsonplaceholder.typicode.com/posts/invalid')
  .then((response) => {
    if (!response.ok) {
      throw new Error('HTTP status ' + response.status);
    }
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.error('Fetch failed:', error));
```

---

## 🔄 7. Async/Await Version

```javascript
async function fetchData() {
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/posts/1'
    );
    if (!response.ok) throw new Error('Failed to fetch');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchData();
```

---

## 🧠 8. Advanced Example: PUT Request

```javascript
const updatedData = {
  id: 1,
  title: 'Updated Title',
  body: 'Updated body',
  userId: 1,
};

fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(updatedData),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error('Error:', error));
```

---

## 🧱 9. Use Cases

- Fetch data from APIs
- Send form data to server
- Update/delete resources
- Load JSON/config files dynamically
- Communicate with RESTful services

---

## 🧯 10. Error Handling Patterns

- **Network error** → `.catch()`
- **HTTP error** → Check `response.ok`
- **Parsing error** → Try/catch when calling `.json()`

---

## 🔁 11. Fetch vs Axios

| Feature            | Fetch  | Axios                    |
| ------------------ | ------ | ------------------------ |
| Native             | ✅ Yes | ❌ No (external library) |
| Response auto JSON | ❌ No  | ✅ Yes                   |
| Interceptors       | ❌ No  | ✅ Yes                   |
| Progress events    | ❌ No  | ✅ Yes                   |

---

## 📌 12. Summary

- `fetch()` is a modern way to make HTTP requests.
- It returns a **Promise**, making it ideal for **async/await**.
- Always check `response.ok` before consuming the body.
- Use `JSON.stringify()` and `Content-Type` headers when sending data.
