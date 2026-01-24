# 🛠️ JavaScript Error Handling

---

## 📌 1. What is Error Handling?

**Definition:** Error handling in JavaScript is a **mechanism** to gracefully
handle runtime errors (e.g., undefined variables, network issues) **without
crashing** the program.

> It helps in maintaining the **flow of code** even when something goes wrong.

---

## 📚 2. Common Error Types

| Error Type       | Description                                 |
| ---------------- | ------------------------------------------- |
| `SyntaxError`    | Invalid code syntax                         |
| `ReferenceError` | Accessing an undefined variable             |
| `TypeError`      | Using incorrect data types                  |
| `RangeError`     | A number "out of range"                     |
| `EvalError`      | Problems with `eval()` usage                |
| `URIError`       | Malformed URI functions (`decodeURI`, etc.) |

---

## 🔧 3. Basic Syntax: `try...catch`

```js
try {
  // Code that might throw an error
} catch (error) {
  // Code to handle the error
}
```

---

## 🔁 4. Full Syntax: `try...catch...finally`

```js
try {
  // Code that might throw an error
} catch (error) {
  // Handle error
} finally {
  // Code that runs regardless of error
}
```

### 📊 ASCII Flow Diagram

```bash
             +-------------+
             | try block   |
             +------+------+
                    |
             +------v------+
             | Error Thrown?|
             +------+------+
          Yes |             | No
             v              v
        +----+-----+    +---+----+
        | catch{}  |    | Done   |
        +----+-----+    +---+----+
             |
             v
         +---+---+
         |finally|
         +---+---+
             |
             v
         +---+---+
         | Done  |
         +-------+
```

---

## ✅ 5. Example – Basic Try Catch

```js
try {
  const result = 10 / 0;
  console.log('Result:', result);
} catch (error) {
  console.log('An error occurred:', error.message);
}
```

📝 **Output**:

```
Result: Infinity
```

Try again with a real error:

```js
try {
  const data = undefinedVariable; // ReferenceError
} catch (error) {
  console.log('Caught:', error.message);
}
```

📝 **Output**:

```
Caught: undefinedVariable is not defined
```

---

## 🧱 6. `finally` Block Example

```js
try {
  console.log('Trying...');
  throw new Error('Something broke!');
} catch (error) {
  console.log('Caught:', error.message);
} finally {
  console.log('Cleanup done!');
}
```

📝 **Output**:

```
Trying...
Caught: Something broke!
Cleanup done!
```

---

## 🎯 7. Throwing Custom Errors

```js
function validateAge(age) {
  if (age < 18) {
    throw new Error('Age must be 18 or above');
  }
  return true;
}

try {
  validateAge(16);
} catch (err) {
  console.log('Validation Error:', err.message);
}
```

---

## ⚙️ 8. Error Object Properties

| Property  | Description                       |
| --------- | --------------------------------- |
| `name`    | Error type (e.g., ReferenceError) |
| `message` | Error message                     |
| `stack`   | Stack trace at error location     |

```js
try {
  throw new TypeError('Wrong type!');
} catch (err) {
  console.log(err.name); // TypeError
  console.log(err.message); // Wrong type!
  console.log(err.stack); // Call stack trace
}
```

---

## 🧪 9. Creating Custom Error Types

```js
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
  }
}

try {
  throw new ValidationError('Invalid email format');
} catch (err) {
  console.log(err.name); // ValidationError
  console.log(err.message); // Invalid email format
}
```

---

## 🧠 10. Best Practices

✅ Always handle errors where they might occur ✅ Avoid silent failures
(`catch {}` with empty body) ✅ Log meaningful error messages ✅ Use custom
error types when needed ✅ Don’t catch errors you can’t handle ✅ Use `finally`
for resource cleanup

---

## 🧩 Bonus: Async Error Handling (with Promises)

```js
async function fetchData() {
  try {
    const res = await fetch('https://invalid-url.com');
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error('Fetch Error:', error.message);
  }
}
```

---

## 📎 Summary

| Concept       | Use Case                        |
| ------------- | ------------------------------- |
| `try...catch` | Handle code that might fail     |
| `finally`     | Cleanup (runs always)           |
| `throw`       | Manually trigger an error       |
| `Error`       | Base object for all error types |
