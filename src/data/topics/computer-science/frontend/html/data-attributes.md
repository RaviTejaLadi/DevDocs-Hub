# 🏷️ HTML Data Attributes

HTML **Data Attributes** allow you to store custom data directly inside HTML
elements. They are useful when you need to attach extra information to elements
without affecting their appearance or behavior.

Think of data attributes as **hidden labels** attached to HTML elements. Users
don't see them, but JavaScript can easily read and use them.

---

# 📌 What Are Data Attributes?

Data attributes are custom attributes that start with `data-`.

### Syntax

```html
data-name="value"
```

### Example

```html
<!-- Store custom data -->
<button data-id="101">View Product</button>
```

In this example:

- `data-id` is a custom data attribute.
- `101` is the stored value.

---

# 🏗️ Basic Example

```html
<!-- Product card with custom data -->
<div data-product-id="101" data-category="electronics">Smartphone</div>
```

The browser ignores these attributes visually, but JavaScript can access them.

---

# 🎯 Why Use Data Attributes?

Data attributes are commonly used to:

- Store IDs
- Store categories
- Store configuration values
- Pass information to JavaScript
- Build interactive UI components

Example:

```html
<button data-theme="dark">Change Theme</button>
```

JavaScript can read the theme value and update the page accordingly.

---

# 📖 Reading Data Attributes with JavaScript

## Using `dataset`

```html
<!-- Element with data attribute -->
<button id="btn" data-user="John">Show User</button>
```

```javascript
// Read data attribute
const button = document.getElementById('btn');

console.log(button.dataset.user);
```

### Output

```text
John
```

---

# 🔍 Multiple Data Attributes

```html
<!-- Multiple custom attributes -->
<div id="product" data-id="101" data-name="Laptop" data-price="50000"></div>
```

```javascript
// Access all values
const product = document.getElementById('product');

console.log(product.dataset.id);
console.log(product.dataset.name);
console.log(product.dataset.price);
```

### Output

```text
101
Laptop
50000
```

---

# ✏️ Updating Data Attributes

JavaScript can modify data attributes dynamically.

```html
<!-- Update data value -->
<button id="btn" data-status="inactive">Activate</button>
```

```javascript
// Change attribute value
const button = document.getElementById('btn');

button.dataset.status = 'active';

console.log(button.dataset.status);
```

### Output

```text
active
```

---

# 🗑️ Removing Data Attributes

```javascript
// Remove data attribute
button.removeAttribute('data-status');
```

After removal:

```html
<button id="btn">Activate</button>
```

---

# 📋 Accessing with `getAttribute()`

Another way to read data attributes:

```html
<div id="box" data-color="blue"></div>
```

```javascript
// Read attribute
const box = document.getElementById('box');

console.log(box.getAttribute('data-color'));
```

### Output

```text
blue
```

---

# 🔄 Hyphen Naming Rules

Data attributes often use hyphens.

```html
<div data-user-name="John Doe"></div>
```

JavaScript converts hyphens to camelCase.

```javascript
const element = document.querySelector('div');

console.log(element.dataset.userName);
```

### Output

```text
John Doe
```

---

# 🎨 Using Data Attributes with CSS

Data attributes can also be used in CSS selectors.

```html
<!-- Theme button -->
<button data-theme="dark">Dark Theme</button>
```

```css
/* Style based on data attribute */
button[data-theme='dark'] {
  background: black;
  color: white;
}
```

---

# 🚀 Practical Example: Product Cards

```html
<!-- Product cards -->
<div class="product" data-price="50000">Laptop</div>

<div class="product" data-price="30000">Tablet</div>
```

```javascript
// Display product prices
const products = document.querySelectorAll('.product');

products.forEach((product) => {
  console.log(product.dataset.price);
});
```

### Output

```text
50000
30000
```

---

# 🚀 Practical Example: Toggle Theme

```html
<!-- Theme switcher -->
<button id="themeBtn" data-theme="light">Toggle Theme</button>
```

```javascript
// Toggle theme value
const btn = document.getElementById('themeBtn');

btn.addEventListener('click', () => {
  if (btn.dataset.theme === 'light') {
    btn.dataset.theme = 'dark';
  } else {
    btn.dataset.theme = 'light';
  }

  console.log(btn.dataset.theme);
});
```

---

# 📊 Data Attributes vs Regular Attributes

| Feature           | Data Attribute | Standard Attribute  |
| ----------------- | -------------- | ------------------- |
| Custom values     | ✅ Yes         | ❌ No               |
| HTML valid        | ✅ Yes         | ✅ Yes              |
| JavaScript access | ✅ Easy        | ✅ Easy             |
| Stores app data   | ✅ Yes         | ❌ Not intended     |
| Browser behavior  | No effect      | May affect behavior |

---

# ⚠️ Common Mistakes

## Missing `data-` Prefix

❌ Wrong

```html
<div userid="101"></div>
```

✅ Correct

```html
<div data-userid="101"></div>
```

---

## Using Spaces in Attribute Names

❌ Wrong

```html
<div data user id="101"></div>
```

✅ Correct

```html
<div data-user-id="101"></div>
```

---

## Storing Large Data

❌ Not Recommended

```html
<div data-description="Very large text..."></div>
```

Large datasets should be stored in JavaScript, APIs, or databases instead.

---

# 🎯 Best Practices

✅ Use meaningful names

```html
data-product-id data-user-role data-theme
```

✅ Use `dataset` for JavaScript access

✅ Keep values small and simple

✅ Use kebab-case naming

```html
data-user-name data-order-id
```

✅ Store UI-related data only

---

# 🌟 Real-World Use Cases

### E-commerce

```html
<button data-product-id="501">Add to Cart</button>
```

### User Roles

```html
<div data-role="admin"></div>
```

### Theme Switching

```html
<body data-theme="dark"></body>
```

### Filtering Products

```html
<div data-category="electronics"></div>
```

---

# 🚀 Quick Summary

```text
Data Attributes
       ↓
Store Custom Information
       ↓
HTML Element
       ↓
JavaScript Reads Data
```

### Syntax

```html
data-name="value"
```

### JavaScript Access

```javascript
element.dataset.name;
```

### Example

```html
<button data-id="101">Buy Now</button>
```

```javascript
console.log(button.dataset.id);
```

**Output:**

```text
101
```

💡 **Tip:** Data attributes are a clean and standards-compliant way to store
custom information in HTML. They are heavily used in modern web applications for
UI interactions, filtering, dynamic content, and communication between HTML and
JavaScript.
