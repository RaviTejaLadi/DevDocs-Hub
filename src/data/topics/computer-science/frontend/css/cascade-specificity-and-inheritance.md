# 🌊 Cascade, Specificity & Inheritance

CSS is called **Cascading Style Sheets** because multiple styles can apply to the same element. The browser uses a set of rules called the **cascade** to decide which style wins.

Understanding **Cascade**, **Specificity**, and **Inheritance** helps you avoid styling conflicts and write maintainable CSS.

---

# 🌊 What is the Cascade?

The cascade determines which CSS rule is applied when multiple rules target the same element.

The browser considers:

1. Importance (`!important`)
2. Specificity
3. Source order

```html
<p class="text">Hello World</p>
```

```css
p {
  color: blue;
}

.text {
  color: red;
}
```

Result:

```text
Red
```

The class selector has higher specificity than the element selector.

---

# 🎯 CSS Specificity

Specificity is a scoring system used to determine which CSS rule wins.

| Selector Type                  | Score |
| ------------------------------ | ----- |
| Inline Styles                  | 1000  |
| ID Selector                    | 100   |
| Class, Attribute, Pseudo-class | 10    |
| Element, Pseudo-element        | 1     |

---

## Example 1

```css
p {
  color: blue;
}

.text {
  color: red;
}
```

```html
<p class="text">Hello</p>
```

Result:

```text
Red
```

Score:

```text
p      = 1
.text  = 10
```

---

## Example 2

```css
#title {
  color: green;
}

.text {
  color: red;
}
```

```html
<h1 id="title" class="text">Heading</h1>
```

Result:

```text
Green
```

Score:

```text
#title = 100
.text  = 10
```

---

## Example 3

```css
.card .title {
  color: blue;
}

#hero .title {
  color: red;
}
```

```html
<div id="hero" class="card">
  <h2 class="title">Welcome</h2>
</div>
```

Result:

```text
Red
```

Because:

```text
.card .title = 20
#hero .title = 110
```

---

# ⚠️ Using !important

`!important` overrides normal specificity rules.

```css
p {
  color: blue !important;
}

.text {
  color: red;
}
```

Result:

```text
Blue
```

Avoid excessive use of `!important`.

❌ Hard to maintain

❌ Creates debugging issues

✅ Use only when absolutely necessary

---

# 📚 Source Order

If specificity is equal, the last rule wins.

```css
.text {
  color: blue;
}

.text {
  color: red;
}
```

Result:

```text
Red
```

The second rule appears later.

---

# 🧬 CSS Inheritance

Some CSS properties automatically pass from parent to child elements.

Example:

```html
<div class="container">
  <p>Hello World</p>
</div>
```

```css
.container {
  color: blue;
}
```

Result:

```text
Hello World → Blue
```

The paragraph inherits the color.

---

## Common Inherited Properties

✅ color

✅ font-family

✅ font-size

✅ line-height

✅ text-align

✅ visibility

---

## Common Non-Inherited Properties

❌ margin

❌ padding

❌ border

❌ width

❌ height

❌ background

---

# Using inherit

You can force inheritance.

```css
button {
  color: inherit;
}
```

The button uses its parent's text color.

---

# Using initial

Resets a property to the browser default.

```css
color: initial;
```

---

# Using unset

Behaves like:

* inherit (for inherited properties)
* initial (for non-inherited properties)

```css
color: unset;
```

---

# 🎯 Real-World Example

```html
<div class="card">
  <h2 class="title">Product</h2>
</div>
```

```css
.card {
  color: #333;
}

.title {
  color: inherit;
}
```

The heading automatically follows the card's text color.

This makes themes easier to manage.

---

# 🧠 Quick Specificity Cheat Sheet

```text
Inline Style      = 1000
ID Selector       = 100
Class Selector    = 10
Element Selector  = 1
```

Examples:

```text
#header             = 100
.menu .item         = 20
div p               = 2
#header .menu p     = 111
```

---

# ✅ Best Practices

* Prefer classes over IDs.
* Avoid deep nested selectors.
* Avoid excessive `!important`.
* Keep specificity low.
* Use inheritance when possible.
* Follow a consistent CSS architecture.

---

# 🚀 Key Takeaways

* The cascade decides which style wins.
* Specificity determines selector priority.
* Source order matters when specificity is equal.
* Inheritance allows child elements to receive certain styles automatically.
* Lower specificity leads to more maintainable CSS.
