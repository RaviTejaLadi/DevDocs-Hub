# HTML Basics

### 1. What HTML Is & How Browsers Parse It

**HTML (HyperText Markup Language)** is the standard markup language for
creating web pages. It is not a programming language; it is a declarative
language used to structure content.

- **Role:** HTML tells the browser _what_ the content is (e.g., "This is a
  heading," "This is a paragraph," "This is an image").
- **Parsing Process:**

1. **Request:** The browser requests a page (e.g., `index.html`) from a server.
2. **Tokenization:** The browser receives raw bytes and converts them into
   characters, then into tokens (start tags, end tags, text nodes).
3. **DOM Construction:** The browser builds the **DOM (Document Object Model)**,
   a tree-like structure representing the page in memory.
4. **Rendering:** The browser paints the pixels on the screen based on the DOM
   and any associated CSS.

### 2. HTML Document Structure

Every valid HTML document requires a specific boilerplate structure to ensure
browsers render it correctly.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Page Title</title>
  </head>
  <body></body>
</html>
```

- **`<!DOCTYPE html>`:** This is not an HTML tag; it is an instruction to the
  web browser about what version of HTML the page is written in.
  `<!DOCTYPE html>` tells the browser to use **HTML5** standards. Without this,
  browsers may enter "Quirks Mode" and render pages unpredictably to mimic old
  browsers.
- **`<html>`:** The root element that wraps all content on the entire page. It
  usually includes the `lang` attribute (e.g., `lang="en"`) to assist screen
  readers and search engines.
- **`<head>`:** Contains metadata that is **not visible** to the site visitor.
  This includes character sets (`UTF-8`), the page title (seen in browser tabs),
  links to CSS stylesheets, and scripts.
- **`<body>`:** Contains all the **visible** content of the webpage, such as
  text, images, videos, and links.

### 3. Elements vs. Attributes

HTML consists of elements, which can be modified by attributes.

- **Elements:** An element usually consists of a **start tag**, **content**, and
  an **end tag**.
- _Example:_ `<h1>Hello World</h1>`
- The entire package (tags + content) is the **Element**.
- `<h1>` is the **Tag**.

- **Attributes:** Provide additional information about an element. They are
  always specified in the **start tag** and usually come in name/value pairs
  like `name="value"`.
- _Example:_ `<a href="https://google.com" target="_blank">Link</a>`
- `href` (Hypertext Reference) is the attribute name; `"https://google.com"` is
  the value.
- `target` is another attribute controlling where the link opens.

### 4. Block vs. Inline Elements

Elements generally display in one of two ways by default:

| Feature           | Block-level Elements                                                | Inline Elements                                    |
| ----------------- | ------------------------------------------------------------------- | -------------------------------------------------- |
| **Line Behavior** | Always start on a new line.                                         | Do not start on a new line; they flow within text. |
| **Width**         | Take up the full width available (stretches to the left and right). | Take up only as much width as necessary.           |
| **Examples**      | `<div>`, `<p>`, `<h1>`-`<h6>`, `<ul>`, `<li>`, `<section>`          | `<span>`, `<a>`, `<img>`, `<strong>`, `<em>`       |

- **Modern Note:** While these are the defaults, CSS (specifically the `display`
  property) can change how any element behaves.

### 5. Void (Self-Closing) Elements

Most HTML elements require opening and closing tags to wrap content (e.g.,
`<p>text</p>`). However, some elements are "empty" or "void"—they cannot hold
content or child elements.

- **Syntax:** They consist of only a single tag.
- **Common Examples:**
- `<img>`: Embeds an image.
- `<br>`: Inserts a line break.
- `<hr>`: Inserts a thematic break (horizontal rule).
- `<input>`: Creates an input field.

- **Slash Rule:** In HTML5, the trailing slash is optional (`<br>` vs `<br />`).
  Both are valid, but `<br />` is a remnant of XHTML strictness.

### 6. Comments

Comments are lines of code that are ignored by the browser. They are used to
leave notes for developers or to temporarily disable code.

- **Syntax:** ``
- **Usage:**
- _Good:_ `` (Explains structure)
- _Bad:_ `` (Don't leave large blocks of commented-out code in production; use
  version control like Git for history).

### 7. Case Sensitivity Rules

- **Tags:** HTML is **not case sensitive**. `<P>`, `<p>`, and `<P>` mean the
  same thing.
- _Best Practice:_ **Always use lowercase** (e.g., `<div>`, not `<DIV>`). It is
  the industry standard, cleaner to read, and consistent with XHTML/XML syntax.

- **Attributes:** Attribute names are case-insensitive (`HREF` vs `href`), but
  attribute **values** can be case-sensitive depending on what they are.
- _Example:_ `id="MySection"` is not the same as `id="mysection"` in CSS or
  JavaScript.

- **Doctypes:** `<!DOCTYPE html>` is case-insensitive, but conventionally
  written in uppercase `!DOCTYPE` to distinguish it from tags.
