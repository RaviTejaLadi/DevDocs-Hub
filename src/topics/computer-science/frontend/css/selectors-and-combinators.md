## Selectors & Combinators

Selectors are **how you target elements** in CSS.  
Interviews love questions about **selector types** and **specificity**.

### Basic selectors

- **Type selector**
  - Targets by tag name: `p`, `div`, `button`.
  - Example: `p { color: blue; }`
- **Class selector**
  - Targets elements with a specific `class`: `.btn-primary`.
  - Example: `.btn-primary { background: #007bff; }`
- **ID selector**
  - Targets the element with a specific `id`: `#header`.
  - Example: `#header { background: black; }`
- **Universal selector**
  - Targets all elements: `* { box-sizing: border-box; }`

### Attribute selectors

- Match elements based on attributes:

```css
input[type='text'] {
  ...;
}
a[target='_blank'] {
  ...;
}
[data-role='dialog'] {
  ...;
}
```

Useful operators:

- `[attr="value"]` – exact match
- `[attr^="val"]` – starts with
- `[attr$="val"]` – ends with
- `[attr*="val"]` – contains

### Pseudo-classes

- Represent **states** of an element:

```css
a:hover {
  text-decoration: underline;
}
input:focus {
  outline: 2px solid blue;
}
button:disabled {
  opacity: 0.5;
}
li:first-child {
  font-weight: bold;
}
li:nth-child(2n) {
  background: #f5f5f5;
}
```

Common pseudo-classes:

- `:hover`, `:focus`, `:active`
- `:visited`, `:checked`, `:disabled`
- `:first-child`, `:last-child`, `:nth-child()`, `:nth-of-type()`

### Pseudo-elements

- Target **parts of an element**:

```css
p::first-line {
  font-weight: bold;
}
p::first-letter {
  font-size: 2rem;
}
.badge::before {
  content: '● ';
  color: red;
}
```

Common pseudo-elements:

- `::before`, `::after`, `::first-line`, `::first-letter`, `::selection`

### Combinators

Combinators describe **relationships between selectors**.

- **Descendant (`space`)**
  - `.card p { ... }`
  - Any `p` inside `.card` (at any depth).
- **Child (`>`)**
  - `.card > p { ... }`
  - Only direct `p` children of `.card`.
- **Adjacent sibling (`+`)**
  - `h2 + p { ... }`
  - The first `p` immediately following an `h2`.
- **General sibling (`~`)**
  - `h2 ~ p { ... }`
  - All `p` siblings after an `h2`.

### Interview quick answers

- **Q: Difference between class and ID selector?**
  - IDs should be unique per page and have higher specificity; classes are
    reusable.
- **Q: When would you use attribute selectors?**
  - When you want to style elements based on attributes like `type`, `data-*`,
    `target`, etc.
- **Q: Difference between `>` and space in selectors?**
  - `>` matches only direct children; space matches any descendants at any
    depth.
