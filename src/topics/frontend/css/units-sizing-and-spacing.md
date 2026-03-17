## Units, Sizing & Spacing

Choosing the right **units** is key to building **responsive** and
**accessible** layouts.

### Absolute vs relative units

- **Absolute**
  - `px` – pixels; not truly physical pixels but a CSS pixel.
- **Relative**
  - `em` – relative to the font-size of the element (or its parent for many
    properties).
  - `rem` – relative to the font-size of the root (`html`) element.
  - `%` – relative to parent’s size (varies by property).
  - `vh`, `vw` – viewport height/width (1vh = 1% of viewport height).
  - `vmin`, `vmax` – relative to smaller/larger side of viewport.

### When to use which

- Use **`rem`** for global typography, consistent spacing.
- Use **`em`** when you want scaling relative to the current component.
- Use **`%`** or **viewport units** (`vh`, `vw`) for fluid layouts.

### Sizing properties

- `width`, `height`
- `min-width`, `max-width`
- `min-height`, `max-height`

Common patterns:

```css
.container {
  max-width: 1200px;
  margin: 0 auto;
}
```

### Spacing: margin & padding

- `margin` – space **outside** the border (between elements).
- `padding` – space **inside** the border (between border and content).

Shorthand:

- `margin: 10px;` – all sides.
- `margin: 10px 20px;` – vertical | horizontal.
- `margin: 10px 20px 30px;` – top | horizontal | bottom.
- `margin: 10px 20px 30px 40px;` – top | right | bottom | left.

### Useful modern functions

- `calc()`
  - Example: `width: calc(100% - 2rem);`
- `min()`, `max()`, `clamp()`
  - Example:
  ```css
  :root {
    --font-size-body: clamp(14px, 2vw, 18px);
  }
  ```

### Interview quick answers

- **Q: Difference between `em` and `rem`?**
  - `em` is relative to the element’s (or parent’s) font-size; `rem` is relative
    to the root (`html`) font-size.
- **Q: Why use `min-width`/`max-width` instead of fixed widths?**
  - To allow layouts to be flexible while still preventing them from becoming
    too small or too large.
