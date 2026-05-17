# 🚀 JavaScript Function Best Practices

## 1. 🏷️ Naming Conventions

- ✅ **Use descriptive names**: Functions should be named based on what they do
- 🐫 **Use camelCase**: Standard JavaScript convention
- 🔤 **Start with verbs**: `getUser()`, `calculateTotal()`, `validateInput()`

```javascript
// ❌ Bad
function x(a, b) {
  return a + b;
}

// ✅ Good
function calculateSum(num1, num2) {
  return num1 + num2;
}
```

---

## 2. 🧱 Single Responsibility Principle

- ⚒️ Each function should do one thing and do it well
- ✂️ If a function does multiple things, consider breaking it up

```javascript
// ❌ Bad
function processUser(user) {
  validateUser(user);
  saveToDatabase(user);
  sendWelcomeEmail(user);
}

// ✅ Good
function processUser(user) {
  validateUser(user);
  persistUser(user);
  notifyUser(user);
}
```

---

## 3. 🎛️ Parameter Handling

- 📉 **Limit parameters**: Ideally 3 or fewer
- 🎯 **Use default parameters** instead of conditionals
- 🧩 **Destructure objects** when appropriate

```javascript
// ❌ Bad
function createUser(name, age, email, isAdmin = false) { ... }

// ✅ Better
function createUser({ name, age, email, isAdmin = false }) { ... }
```

---

## 4. 🔁 Return Values

- 🧍‍♂️ Be consistent with return types
- ⚠️ Avoid returning different types conditionally
- ⏩ Return early when it makes sense

```javascript
// ❌ Bad
function getValue(condition) {
  if (condition) {
    return 'string';
  } else {
    return 42;
  }
}

// ✅ Good
function getValue(condition) {
  if (condition) {
    return 'string';
  }
  return 'default';
}
```

---

## 5. 🛠️ Error Handling

- 🧪 Use `try/catch` for synchronous code that might throw
- 🧾 Return error objects for expected issues
- 📘 Document potential errors in JSDoc

```javascript
function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}
```

---

## 6. 🧼 Pure Functions

- ✔️ Favor **pure functions** (same input → same output, no side effects)
- 🔍 Easier to test, debug, and reason about

```javascript
// ❌ Impure
let total = 0;
function addToTotal(amount) {
  total += amount;
}

// ✅ Pure
function addNumbers(a, b) {
  return a + b;
}
```

---

## 7. 🏹 Arrow Functions

- 💡 Use for anonymous functions and callbacks
- 🔒 Maintains `this` context
- ✂️ More concise syntax

```javascript
// 🧓 Traditional
const numbers = [1, 2, 3].map(function (n) {
  return n * 2;
});

// 🏹 Arrow
const numbers = [1, 2, 3].map((n) => n * 2);
```

---

## 8. 📏 Function Length

- 🎯 Keep functions **short** (ideally under 20 lines)
- ✂️ Break up long functions into smaller ones

---

## 9. 📝 Documentation

- 📚 Use **JSDoc** for complex functions
- 🏷️ Document params, returns, and exceptions

```javascript
/**
 * Calculates the total price including tax
 * @param {number} subtotal - The amount before tax
 * @param {number} taxRate - The tax rate as a decimal (e.g., 0.08 for 8%)
 * @returns {number} The total amount including tax
 */
function calculateTotal(subtotal, taxRate) {
  return subtotal * (1 + taxRate);
}
```

---

## 10. 🕸️ Avoid Callback Hell

- 🔁 Use **promises** or `async/await`
- 🧠 Prefer **named functions** over deeply nested anonymous callbacks

```javascript
// ❌ Callback hell
getUser(userId, function (user) {
  getOrders(user.id, function (orders) {
    processOrders(orders, function (result) {
      // ...
    });
  });
});

// ✅ Better with async/await
async function processUserOrders(userId) {
  const user = await getUser(userId);
  const orders = await getOrders(user.id);
  return await processOrders(orders);
}
```

---

🧠 **Following these best practices will help you write cleaner, more
maintainable, and bug-resistant JavaScript functions.** Happy coding! 💻✨
