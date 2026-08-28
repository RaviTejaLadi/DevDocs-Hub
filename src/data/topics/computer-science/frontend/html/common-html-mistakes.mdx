# Common HTML Mistakes

### 1. Missing `alt` Attributes

This is the #1 accessibility error on the web.

- **The Mistake:** Writing `<img src="logo.png">` without an `alt` attribute.
- **The Consequence:**
- **Blind users:** Their screen reader will likely announce the filename
  ("logo.png"), which is confusing and unprofessional.
- **Broken images:** If the image fails to load, the user sees a broken icon
  with no context.

- **The Fix:** Always include the attribute.
- _Informative:_ `alt="Company Logo"`
- _Decorative:_ `alt=""` (Empty string tells the screen reader to skip it).

### 2. Multiple `<h1>` Tags (Context Matters)

- **The Myth:** "You can strictly only have one H1 per page."
- **The Reality:** While HTML5 technically allows multiple `<h1>` tags (e.g.,
  one per `<article>`), it is **widely considered bad practice** for SEO and
  accessibility.
- **The Mistake:** Using `<h1>` for every big title on the page just to make the
  text large.
- **The Fix:** Use a **single** `<h1>` for the main page title. Use `<h2>` for
  major sections, `<h3>` for subsections, and use CSS to change the font size if
  needed.

### 3. "Divitis" (Using `<div>` for Everything)

- **The Mistake:** Creating a layout that looks like this:

```html
<div class="header">...</div>
<div class="nav">...</div>
<div class="main-content">...</div>
<div class="footer">...</div>
```

- **The Consequence:** This code has no semantic meaning. A machine (search bot
  or screen reader) cannot distinguish the navigation from the footer.
- **The Fix:** Use the correct semantic tags: `<header>`, `<nav>`, `<main>`, and
  `<footer>`. Save `<div>` for grouping elements strictly for styling (like flex
  containers).

### 4. Inline Styles Everywhere

- **The Mistake:** Sprinkling CSS directly into your HTML tags.

```html
<p style="color: red; margin-top: 20px; font-weight: bold;">Error</p>
```

- **The Consequence:**
- **Unmaintainable:** If you want to change the error color to orange, you have
  to find and edit every single `<p>` tag across your entire site.
- **Bloat:** It increases the file size of your HTML page.

- **The Fix:** Use **classes** and an external CSS file.
- _HTML:_ `<p class="error-msg">Error</p>`
- _CSS:_ `.error-msg { color: red; ... }`

### 5. Invalid Nesting

HTML elements have strict rules about what can go inside what.

- **The Mistake:** Crossing tags incorrectly or putting Block elements inside
  Inline elements.
- _Example 1 (Crossed):_ `<b><i>Text</b></i>` (The `<b>` closes before the inner
  `<i>` closes).
- _Example 2 (Illegal Parent):_ `<p><div>Block content</div></p>` (A paragraph
  cannot contain a generic block division).

- **The Fix:** Always close inner tags before outer tags (FILO: First In, Last
  Out) and check if an element is Block or Inline before nesting.

### 6. Ignoring Accessibility (The "Mouse-Only" Trap)

- **The Mistake:** Building interactive elements that only work with a mouse.
- _Example:_ `<div onclick="submit()">Submit</div>`

- **The Consequence:**
- **Keyboard users:** You cannot tab to a `<div>`. A keyboard-only user
  effectively cannot use your submit button.
- **Focus:** It has no visual focus state, so users don't know they are "on" the
  button.

- **The Fix:** Use interactive elements for interactive actions.
- Use `<button>` for actions.
- Use `<a>` for links.
- If you _must_ use a div, you have to manually add `tabindex="0"` and keyboard
  event listeners (Enter/Space), which is extra work.
