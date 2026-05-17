## Colors, Typography & Backgrounds

These properties define the **visual identity** of your UI.

### Colors

- Common color formats:
  - Hex: `#ff0000`, `#f00`
  - RGB: `rgb(255, 0, 0)`
  - RGBA: `rgba(255, 0, 0, 0.5)`
  - HSL: `hsl(0, 100%, 50%)`
  - HSLA: `hsla(0, 100%, 50%, 0.5)`

Useful properties:

- `color` – text color.
- `background-color` – background color.

### Typography

Key properties:

- `font-family`
  - Font stack example:
  ```css
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  }
  ```
- `font-size`
  - `px`, `em`, `rem`, etc.
- `font-weight`
  - `normal`, `bold`, or numeric `100–900`.
- `line-height`
  - Controls line spacing, improves readability.
- `text-align`
  - `left`, `right`, `center`, `justify`.
- `text-transform`
  - `uppercase`, `lowercase`, `capitalize`.
- `text-decoration`
  - `underline`, `line-through`, `none`.

### Backgrounds

Common properties:

- `background-color`
- `background-image`
  - Example: `background-image: url('image.png');`
- `background-repeat`
  - `repeat`, `no-repeat`, `repeat-x`, `repeat-y`.
- `background-position`
  - `center`, `top left`, `50% 50%`, etc.
- `background-size`
  - `cover` – cover entire container, may crop.
  - `contain` – fit entire image, may leave empty space.

Shorthand example:

```css
.hero {
  background: url('hero.jpg') center / cover no-repeat fixed;
}
```

### Interview quick answers

- **Q: Why use a font stack instead of a single font?**
  - For graceful fallbacks when a font is not available.
- **Q: Difference between `background-size: cover` and `contain`?**
  - `cover` fills the container and may crop; `contain` fits the whole image but
    may leave empty areas.
