# HTML Best Practices

### 1. Proper Nesting

HTML tags are like boxes. You must close the inner box before you close the
outer box.

- **The Rule:** First In, Last Out (FILO).
- **The Error:** "Intertwined" tags confuse the browser and break styling.
- _Bad:_ `<b><i>Bold and Italic</b></i>`
- _Good:_ `<b><i>Bold and Italic</i></b>`

- **Block vs. Inline:** You generally cannot put a **Block** element inside an
  **Inline** element (with the exception of `<a>` which can wrap blocks in
  HTML5).
- _Illegal:_ `<p>Here is a list: <ul><li>Item</li></ul></p>` (A paragraph cannot
  contain a list).
- _Correction:_ Close the paragraph, start the list, then start a new paragraph.

### 2. Clean, Readable Markup

You write code for machines to execute, but for **humans to read**.

- **Indentation:** consistently indent child elements (usually 2 or 4 spaces).
  This visualizes the parent-child relationship.

```html
<header>
  <nav>
    <ul>
      <li>Link</li>
    </ul>
  </nav>
</header>

<header>
  <nav>
    <ul>
      <li>Link</li>
    </ul>
  </nav>
</header>
```

- **Lowercase:** Always write tags and attributes in lowercase. It’s cleaner and
  standard.
- **Quotes:** Always quote your attribute values (`class="box"`), even if the
  browser technically allows you to skip them.

### 3. Avoid "Div-Spam" (Divitis)

"Divitis" is a disease where a developer wraps _everything_ in a `<div>`.

- **The Problem:** deeply nested structures (e.g.,
  `<div><div><div><div>Content</div></div></div></div>`) bloat the DOM,
  confusing screen readers, and making CSS harder to write.
- **The Interview Test:** If a recruiter opens your code and sees a "sea of
  divs" with no semantic tags, it is often an immediate rejection.
- **The Fix:** Ask yourself, "Do I need this wrapper for styling?" If not,
  delete it. If yes, can I use a semantic tag instead?

### 4. When to Use Semantic vs. Div

This is a common interview question: _"When should you use a `<div>`?"_

**The Decision Matrix:**

1. **Is it a button?** Use `<button>`.
2. **Is it a link?** Use `<a>`.
3. **Does it have a specific meaning?** (Header, nav, article, list, image). Use
   that tag.
4. **Is it just a container for layout/styling?** (e.g., A wrapper to center
   content, a flexbox container, a decorative background). **Use a `<div>`.**

- **Summary:** `<div>` and `<span>` are strictly for **styling** purposes. They
  have no meaning.

### 5. Performance Basics (HTML Side)

Performance is mostly about image sizes and JavaScript, but HTML plays a role.

- **DOM Size:** Keep your HTML tree shallow. A page with 5,000 DOM nodes will
  render slower and lag when scrolling compared to a page with 500 nodes.
- **Script placement:** As learned earlier, always use `defer` on scripts in the
  head to prevent blocking the initial paint.
- **Preloading:** You can tell the browser to prioritize certain assets.
  `<link rel="preload" href="hero-image.jpg" as="image">`

### 6. Cross-Browser Considerations

Not all browsers are Chrome. You must ensure your site works on Safari (iPhone),
Firefox, and Edge.

- **Validation:** Use the **W3C Validator**. It finds syntax errors (unclosed
  tags, duplicate IDs) that might cause one browser to crash while another
  ignores it.
- **Feature Detection:** Don't assume a user has the latest features.
- _HTML5 Inputs:_ If a browser doesn't support `<input type="date">`, it falls
  back to `<input type="text">`. This is a "graceful degradation."

- **Reset CSS:** Browsers have different default styles (e.g., Safari's margins
  vs. Chrome's margins). Most developers use a "CSS Reset" or "Normalize.css" to
  make all browsers start from a blank slate.
