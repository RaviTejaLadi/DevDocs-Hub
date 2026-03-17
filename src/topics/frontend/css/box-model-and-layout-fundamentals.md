## Box Model & Layout Fundamentals

Understanding the **CSS box model** is essential for any layout or interview
question.

### The box model

Every element is treated as a **rectangle (box)** made of:

- **Content** – actual text/image/child elements
- **Padding** – space between content and border
- **Border** – line around the padding/content
- **Margin** – space outside the border, separating from neighbors

```css
.box {
  width: 200px;
  padding: 16px;
  border: 2px solid #000;
  margin: 24px;
}
```

### `box-sizing`

- **`content-box` (default)**:
  - `width` = content only.
  - Final rendered width = `width + padding + border`.
- **`border-box`**:
  - `width` includes content + padding + border.
  - Easier for layout; commonly used:

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}
```

### Margin collapsing

- Vertical margins between **block elements** can collapse.
- Example: top margin of one element and bottom margin of another “merge”.
- Collapsing cases:
  - Between parent and first/last child
  - Between consecutive siblings
- Horizontal margins **do not collapse**.

### Block vs inline vs inline-block (layout-wise)

- **Block**
  - Starts on a new line, takes full width.
  - Respects `width`, `height`, `margin`, `padding`.
- **Inline**
  - Flows with text, only as wide as content.
  - `width` and `height` mostly ignored.
- **Inline-block**
  - Flows like inline, but respects `width` and `height`.

### Overflow

- Controls what happens when content is bigger than its box:
  - `visible` (default) – content spills out.
  - `hidden` – overflow is clipped.
  - `scroll` – always show scrollbars.
  - `auto` – show scrollbars only when needed.

### Interview quick answers

- **Q: Explain the CSS box model.**
  - Each element is a box with content, padding, border, and margin. These
    layers determine its total size and spacing.
- **Q: Difference between `content-box` and `border-box`?**
  - In `content-box`, width excludes padding/border; in `border-box`, width
    includes them, making layouts easier to reason about.
