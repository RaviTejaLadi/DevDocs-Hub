# HTML And CSS Relationship

### 1. Linking Methods: Inline vs. Internal vs. External

There are three ways to apply CSS to HTML, but only one is the professional
standard.

#### A. Inline Styles (The "Emergency" Fix)

CSS is written directly inside the HTML element using the `style` attribute.

- **Syntax:** `<h1 style="color: blue; font-size: 24px;">Title</h1>`
- **Pros:** Overrides almost everything else; useful for quick testing.
- **Cons:** **Terrible for maintenance.** You have to edit every single element
  individually. It creates "spaghetti code."

#### B. Internal CSS (The "Single Page" Fix)

CSS is written inside a `<style>` block within the `<head>` of the HTML
document.

- **Syntax:**

```html
<head>
  <style>
    h1 {
      color: blue;
    }
  </style>
</head>
```

- **Pros:** Keeps styles with the content in a single file.
- **Cons:** Styles cannot be shared across multiple pages (e.g., your "About"
  page can't use the styles from your "Home" page).

#### C. External CSS (The Professional Standard)

CSS is written in a separate `.css` file (e.g., `styles.css`) and linked to the
HTML.

- **Syntax:**

```html
<head>
  <link rel="stylesheet" href="styles.css" />
</head>
```

- **Pros:** You can style an entire 100-page website by editing just **one** CSS
  file. The browser caches the file, making the site faster.

### 2. How Classes & IDs Connect to CSS

HTML provides the "hooks" (attributes) that CSS uses to target elements.

- **The Class Hook (`.`):**
- **HTML:** `<button class="btn-primary">Click</button>`
- **CSS:** `.btn-primary { background-color: blue; }`
- _Concept:_ Classes are versatile. You can reuse `.btn-primary` on buttons,
  links, or inputs anywhere on the site.

- **The ID Hook (`#`):**
- **HTML:** `<div id="main-header">...</div>`
- **CSS:** `#main-header { height: 60px; }`
- _Concept:_ IDs are singular. Because an ID must be unique on the page, the CSS
  target is very specific.

### 3. The "Cascade" (HTML Perspective)

"Cascading Style Sheets" means that styles fall down from top to bottom, and
conflicts are resolved based on a hierarchy.

- **Inheritance:**
- If you set a style on a parent HTML element (like `<body>`), the children
  usually inherit it.
- _Example:_ Setting `font-family: Arial` on the `<body>` makes all paragraphs,
  headings, and lists use Arial, unless you specifically tell them otherwise.

- **Specificity (The "Who Wins" Game):**
- If you have conflicting instructions, the "more specific" selector wins.
- **Inline Style** (`style="..."`) beats **ID** (`#id`).
- **ID** (`#id`) beats **Class** (`.class`).
- **Class** (`.class`) beats **Tag** (`div`).

**Visualizing Specificity:** Think of it as a score:

- `div { color: red; }` (Score: 1)
- `.my-text { color: green; }` (Score: 10) -> **Winner** (Text will be Green)
- `#unique-text { color: blue; }` (Score: 100) -> **Winner** (Text will be Blue)
