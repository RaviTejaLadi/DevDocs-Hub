## CSS Basics

This section covers the **foundations of CSS** that almost every interview
expects.

### What is CSS?

- CSS = **Cascading Style Sheets**.
- Controls **presentation** (colors, layout, fonts) of HTML documents.
- Separates **structure (HTML)** from **style (CSS)**.

### Ways to include CSS

- **Inline styles**
  - Example: `<p style="color: red;">Hello</p>`
  - Good for quick tests, **bad for maintainability**.
- **Internal stylesheet**
  - `<style>` tag inside `<head>`.
  - Affects only that HTML file.
- **External stylesheet** (recommended)
  - Separate `.css` file linked with
    `<link rel="stylesheet" href="styles.css" />`.
  - Reusable and cacheable, easier to maintain.

### Basic CSS syntax

```css
selector {
  property: value;
}
```

- Example:

```css
p {
  color: #333;
  font-size: 16px;
}
```

### Common basic properties

- **Text & font**
  - `color`, `font-size`, `font-family`, `font-weight`, `line-height`
- **Box & spacing**
  - `margin`, `padding`, `border`, `width`, `height`
- **Background**
  - `background-color`, `background-image`, `background-repeat`

### Inline vs block elements (from a CSS point of view)

- **Block elements**
  - Take full width, start on a new line.
  - Respect `width`, `height`, `margin`, `padding`.
- **Inline elements**
  - Only take as much width as content.
  - Ignore `width`/`height` (mostly), respect horizontal padding/margin.

### Interview quick answers

- **Q: Why external CSS is preferred?**
  - Better separation of concerns, reusability, caching, easier maintenance.
- **Q: What is the purpose of CSS?**
  - To control how HTML content looks and is laid out on different screens.
