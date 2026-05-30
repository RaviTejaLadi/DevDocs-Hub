# ✨ Pseudo-classes & Pseudo-elements

Pseudo-classes and pseudo-elements let you style elements based on their
**state**, **position**, or **specific parts** without adding extra HTML.

Think of them as special selectors that make your CSS smarter and cleaner.

---

# 🎯 What are Pseudo-classes?

A pseudo-class targets an element in a particular state.

Syntax:

```css
selector:pseudo-class {
  property: value;
}
```

Example:

```css
button:hover {
  background-color: blue;
}
```

When the user hovers over the button, the background changes.

---

# Common Pseudo-classes

## 🖱️ :hover

Applies styles when the mouse is over an element.

```css
a:hover {
  color: red;
}
```

```html
<a href="#">Hover Me</a>
```

---

## 👆 :active

Applies while an element is being clicked.

```css
button:active {
  transform: scale(0.95);
}
```

---

## ⌨️ :focus

Applies when an input receives focus.

```css
input:focus {
  border-color: blue;
  outline: none;
}
```

```html
<input type="text" placeholder="Enter Name" />
```

---

## ✅ :checked

Targets checked checkboxes and radio buttons.

```css
input:checked {
  accent-color: green;
}
```

```html
<input type="checkbox" checked />
```

---

## 🚫 :disabled

Targets disabled form controls.

```css
button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
```

---

## 🎯 :first-child

Selects the first child element.

```css
li:first-child {
  font-weight: bold;
}
```

```html
<ul>
  <li>First</li>
  <li>Second</li>
</ul>
```

---

## 🎯 :last-child

Selects the last child element.

```css
li:last-child {
  color: red;
}
```

---

## 🎯 :nth-child()

Selects elements based on position.

```css
li:nth-child(2) {
  color: blue;
}
```

Even rows:

```css
tr:nth-child(even) {
  background: #f5f5f5;
}
```

Odd rows:

```css
tr:nth-child(odd) {
  background: #eee;
}
```

---

## 🎯 :not()

Selects everything except matching elements.

```css
p:not(.highlight) {
  color: gray;
}
```

---

# 🧩 What are Pseudo-elements?

Pseudo-elements style a specific part of an element.

Syntax:

```css
selector::pseudo-element {
  property: value;
}
```

Notice the double colon `::`.

---

# Common Pseudo-elements

## 📝 ::before

Adds content before an element.

```css
.title::before {
  content: '🔥 ';
}
```

```html
<h2 class="title">Trending</h2>
```

Output:

```text
🔥 Trending
```

---

## 📝 ::after

Adds content after an element.

```css
.title::after {
  content: ' 🚀';
}
```

Output:

```text
Trending 🚀
```

---

## ✨ ::first-letter

Styles the first letter.

```css
p::first-letter {
  font-size: 2rem;
  font-weight: bold;
}
```

---

## 📖 ::first-line

Styles only the first line.

```css
p::first-line {
  color: blue;
}
```

---

## 🎨 ::selection

Styles highlighted text.

```css
::selection {
  background: yellow;
  color: black;
}
```

---

## 📌 ::placeholder

Styles placeholder text.

```css
input::placeholder {
  color: gray;
}
```

---

# Real-World Card Example

```html
<div class="card">New Product</div>
```

```css
.card::before {
  content: '🆕 ';
}

.card:hover {
  transform: translateY(-5px);
}
```

Result:

- Shows a "New" badge
- Lifts the card on hover

No extra HTML required.

---

# Combining Pseudo-classes and Pseudo-elements

```css
button:hover::after {
  content: ' 🚀';
}
```

When hovering:

```text
Submit 🚀
```

---

# Useful Form Example

```html
<input type="email" required />
```

```css
input:focus {
  border-color: blue;
}

input:invalid {
  border-color: red;
}

input:valid {
  border-color: green;
}
```

This provides instant validation feedback.

---

# Modern CSS Selectors Worth Knowing

## :is()

Reduces repetition.

```css
:is(h1, h2, h3) {
  color: navy;
}
```

Instead of:

```css
h1,
h2,
h3 {
  color: navy;
}
```

---

## :where()

Like `:is()` but adds zero specificity.

```css
:where(.card .title) {
  margin: 0;
}
```

Useful in large projects.

---

## :has() ⭐

Parent selector.

```css
.card:has(img) {
  padding: 20px;
}
```

Selects cards containing images.

Modern browsers now support it.

---

# 🧠 Quick Cheat Sheet

| Pseudo-class | Purpose                   |
| ------------ | ------------------------- |
| :hover       | Mouse hover               |
| :active      | Click state               |
| :focus       | Input focus               |
| :checked     | Checked inputs            |
| :disabled    | Disabled controls         |
| :first-child | First child               |
| :last-child  | Last child                |
| :nth-child() | Specific position         |
| :not()       | Exclude elements          |
| :is()        | Group selectors           |
| :where()     | Zero specificity grouping |
| :has()       | Parent selector           |

---

| Pseudo-element | Purpose          |
| -------------- | ---------------- |
| ::before       | Content before   |
| ::after        | Content after    |
| ::first-letter | First letter     |
| ::first-line   | First line       |
| ::selection    | Selected text    |
| ::placeholder  | Placeholder text |

---

# ✅ Best Practices

- Use pseudo-elements to avoid unnecessary HTML.
- Use `:focus` for accessibility.
- Prefer `:is()` and `:where()` for cleaner selectors.
- Use `:has()` carefully on large DOM trees.
- Keep hover effects subtle and performant.

---

# 🚀 Key Takeaways

- Pseudo-classes target element states and positions.
- Pseudo-elements target specific parts of elements.
- They reduce extra markup and improve maintainability.
- Modern selectors like `:is()`, `:where()`, and `:has()` make CSS more powerful
  than ever.
