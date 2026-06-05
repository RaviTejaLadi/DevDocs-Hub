# 🔐 What is Web Storage API?

The **Web Storage API** provides a way for web applications to store data in the
browser **locally**, **persistently**, and **without involving a server**.

It has two main types:

| Type             | Persists after reload?   | Accessible in all tabs? | Size Limit |
| ---------------- | ------------------------ | ----------------------- | ---------- |
| `localStorage`   | ✅ Yes                   | ✅ Yes                  | \~5–10MB   |
| `sessionStorage` | ❌ No (tab/session only) | ❌ No                   | \~5MB      |

---

## 🧰 Why use Web Storage?

- Store small amounts of data (like theme, auth token, user prefs).
- Avoid unnecessary network requests.
- Improve performance for single-page applications (SPAs).

---

## 📦 `localStorage` – Persistent Storage

### ✅ Key Features:

- Data **never expires** unless you remove it.
- Stored data is **shared across tabs and windows** of the same origin.

### 🔧 Usage:

```js
// Store data
localStorage.setItem('username', 'Ravi');

// Retrieve data
const user = localStorage.getItem('username'); // 'Ravi'

// Remove data
localStorage.removeItem('username');

// Clear everything
localStorage.clear();
```

### ✅ Use Cases:

- Remember login (auth token)
- User preferences (dark mode, language)
- Caching API responses (if not sensitive)

---

## 📦 `sessionStorage` – Session-based Storage

### ✅ Key Features:

- Data is cleared **when the tab or window is closed**.
- Not shared across tabs (even of same origin).

### 🔧 Usage:

```js
// Store data
sessionStorage.setItem('tempToken', '123abc');

// Retrieve data
const token = sessionStorage.getItem('tempToken'); // '123abc'

// Remove data
sessionStorage.removeItem('tempToken');

// Clear everything
sessionStorage.clear();
```

### ✅ Use Cases:

- Temporary form state
- OTP or auth token for one-time use
- Tab-specific app state

---

## 🧪 Comparison: `localStorage` vs `sessionStorage`

| Feature            | `localStorage`         | `sessionStorage`        |
| ------------------ | ---------------------- | ----------------------- |
| Persistence        | Until manually cleared | Until tab/window closes |
| Tab sharing        | ✅ Yes                 | ❌ No                   |
| Expiration         | Never                  | On tab close            |
| Use Case           | Auth, preferences      | Temporary form/session  |
| Capacity (approx.) | \~5–10MB               | \~5MB                   |

---

## ⚠️ Limitations of Web Storage

- Not suitable for storing **sensitive data** (not encrypted).
- **Synchronous API** – can block main thread.
- Can't store complex objects directly (you need to stringify).

```js
const user = { name: 'Ravi', age: 25 };
localStorage.setItem('user', JSON.stringify(user));

const retrievedUser = JSON.parse(localStorage.getItem('user'));
console.log(retrievedUser.name); // 'Ravi'
```

---

## 🆚 vs Other Storage Options

| Storage Type     | Persistence  | Capacity | Accessibility            | Use Case                  |
| ---------------- | ------------ | -------- | ------------------------ | ------------------------- |
| `localStorage`   | Persistent   | 5–10MB   | Same-origin tabs/windows | User settings, auth token |
| `sessionStorage` | Session-only | \~5MB    | Single tab only          | Tab-specific data         |
| `Cookies`        | Configurable | \~4KB    | Server & client          | Session ID, CSRF tokens   |
| `IndexedDB`      | Persistent   | GBs      | Asynchronous API         | Large structured data     |

---

## ✅ Best Practices

- Always use `try...catch` when using local/sessionStorage:

```js
try {
  localStorage.setItem('key', 'value');
} catch (error) {
  console.error('Storage failed:', error);
}
```

- Use `JSON.stringify()`/`JSON.parse()` for complex data.

- Don’t use it for:

  - Storing passwords or sensitive info.
  - Large data storage (use IndexedDB instead).

---

## 💡 Real Example

### Theme Toggle (Dark/Light Mode using localStorage)

```js
// Set initial theme
const savedTheme = localStorage.getItem('theme');
document.body.className = savedTheme || 'light';

// Toggle theme
function toggleTheme() {
  const current = document.body.className;
  const newTheme = current === 'light' ? 'dark' : 'light';
  document.body.className = newTheme;
  localStorage.setItem('theme', newTheme);
}
```
