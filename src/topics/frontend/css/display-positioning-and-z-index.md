## Display, Positioning & z-index

These properties control **how elements take space** and **where they appear**
on the page.

### `display`

- **`block`**
  - New line, full width.
  - Respects width/height/margins.
- **`inline`**
  - Flows with text; width = content.
  - Cannot set width/height reliably.
- **`inline-block`**
  - Flows inline, but can have width/height.
- **`none`**
  - Element is removed from layout (no space).
- **`flex`**, **`inline-flex`**
  - Flexbox container.
- **`grid`**, **`inline-grid`**
  - Grid container.

### Positioning

Defines how an element is **positioned relative to something**.

- **`static`** (default)
  - Normal document flow, `top/right/bottom/left` ignored.
- **`relative`**
  - Stays in normal flow but **offset visually** by `top/right/bottom/left`.
  - Defines a new positioning context for absolutely positioned children.
- **`absolute`**
  - Removed from normal flow.
  - Positioned relative to the **nearest positioned ancestor** (`relative`,
    `absolute`, `fixed`, `sticky`), or `body` if none.
- **`fixed`**
  - Positioned relative to the **viewport**.
  - Stays in place when scrolling.
- **`sticky`**
  - Behaves like `relative` until a scroll threshold, then “sticks” like
    `fixed`.

### z-index & stacking context

- **`z-index`** controls stacking order **within the same stacking context**.
- A new stacking context is created by:
  - Positioned elements (`position` not `static`) with `z-index` set.
  - Some CSS properties like `opacity < 1`, `transform`, `filter`, etc.
- Higher `z-index` appears “on top” **only inside the same context**.

Example:

```css
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
}
```

### Interview quick answers

- **Q: Difference between `relative` and `absolute`?**
  - `relative` stays in flow and offsets from its normal position; `absolute` is
    removed from flow and positioned relative to the nearest positioned
    ancestor.
- **Q: Why is my `z-index` not working?**
  - Often because of a **different stacking context** or the element not being
    positioned (`position: relative/absolute/fixed/sticky`).
