# HTML Cheat Sheet

## Table of Contents

- [Basic Structure](#basic-structure)
- [Document Metadata](#document-metadata)
- [Text Content Elements](#text-content-elements)
- [Inline Text Elements](#inline-text-elements)
- [List Elements](#list-elements)
- [Link and Navigation Elements](#link-and-navigation-elements)
- [Image and Media Elements](#image-and-media-elements)
- [Table Elements](#table-elements)
- [Form Elements](#form-elements)
- [Semantic Elements (HTML5)](#semantic-elements-html5)
- [Container Elements](#container-elements)
- [Global Attributes](#global-attributes)
- [ARIA Attributes (Accessibility)](#aria-attributes-accessibility)
- [Input Attributes](#input-attributes)
- [HTML Entities (Special Characters)](#html-entities-special-characters)
- [Best Practices Summary](#best-practices-summary)
- [Comments](#comments)

## Basic Structure

| Element           | Description                 | Example                     |
| ----------------- | --------------------------- | --------------------------- |
| `<!DOCTYPE html>` | Document type declaration   | `<!DOCTYPE html>`           |
| `<html>`          | Root element                | `<html lang="en">`          |
| `<head>`          | Document metadata container | `<head>...</head>`          |
| `<body>`          | Document content container  | `<body>...</body>`          |
| `<title>`         | Document title              | `<title>Page Title</title>` |

## Document Metadata

| Element                     | Description        | Example                                                                  |
| --------------------------- | ------------------ | ------------------------------------------------------------------------ |
| `<meta charset>`            | Character encoding | `<meta charset="UTF-8">`                                                 |
| `<meta name="viewport">`    | Viewport settings  | `<meta name="viewport" content="width=device-width, initial-scale=1.0">` |
| `<meta name="description">` | Page description   | `<meta name="description" content="Page description">`                   |
| `<meta name="keywords">`    | Page keywords      | `<meta name="keywords" content="html, css, js">`                         |
| `<meta name="author">`      | Page author        | `<meta name="author" content="Author Name">`                             |
| `<link rel="stylesheet">`   | External CSS       | `<link rel="stylesheet" href="style.css">`                               |
| `<link rel="icon">`         | Favicon            | `<link rel="icon" href="favicon.ico">`                                   |
| `<script>`                  | JavaScript         | `<script src="script.js"></script>`                                      |
| `<style>`                   | Internal CSS       | `<style>/* CSS here */</style>`                                          |

## Text Content Elements

| Element          | Description                    | Example                               |
| ---------------- | ------------------------------ | ------------------------------------- |
| `<h1>` to `<h6>` | Headings (largest to smallest) | `<h1>Main Title</h1>`                 |
| `<p>`            | Paragraph                      | `<p>This is a paragraph.</p>`         |
| `<br>`           | Line break                     | `Line 1<br>Line 2`                    |
| `<hr>`           | Horizontal rule                | `<hr>`                                |
| `<pre>`          | Preformatted text              | `<pre>Formatted text</pre>`           |
| `<blockquote>`   | Block quotation                | `<blockquote>Quote here</blockquote>` |
| `<address>`      | Contact information            | `<address>123 Main St</address>`      |

## Inline Text Elements

| Element    | Description                | Example                                               |
| ---------- | -------------------------- | ----------------------------------------------------- |
| `<b>`      | Bold text (styling)        | `<b>Bold text</b>`                                    |
| `<strong>` | Important text (semantic)  | `<strong>Important text</strong>`                     |
| `<i>`      | Italic text (styling)      | `<i>Italic text</i>`                                  |
| `<em>`     | Emphasized text (semantic) | `<em>Emphasized text</em>`                            |
| `<u>`      | Underlined text            | `<u>Underlined text</u>`                              |
| `<s>`      | Strikethrough text         | `<s>Crossed out</s>`                                  |
| `<del>`    | Deleted text               | `<del>Deleted text</del>`                             |
| `<ins>`    | Inserted text              | `<ins>Inserted text</ins>`                            |
| `<mark>`   | Highlighted text           | `<mark>Highlighted</mark>`                            |
| `<small>`  | Small text                 | `<small>Fine print</small>`                           |
| `<sub>`    | Subscript                  | `H<sub>2</sub>O`                                      |
| `<sup>`    | Superscript                | `E=mc<sup>2</sup>`                                    |
| `<code>`   | Inline code                | `<code>console.log()</code>`                          |
| `<kbd>`    | Keyboard input             | `Press <kbd>Ctrl+C</kbd>`                             |
| `<samp>`   | Sample output              | `<samp>Error 404</samp>`                              |
| `<var>`    | Variable                   | `<var>x</var> = 5`                                    |
| `<abbr>`   | Abbreviation               | `<abbr title="HyperText Markup Language">HTML</abbr>` |
| `<cite>`   | Citation                   | `<cite>Book Title</cite>`                             |
| `<dfn>`    | Definition                 | `<dfn>HTML</dfn>`                                     |
| `<time>`   | Time/date                  | `<time datetime="2023-12-25">Dec 25, 2023</time>`     |

## List Elements

| Element | Description            | Example                                      |
| ------- | ---------------------- | -------------------------------------------- |
| `<ul>`  | Unordered list         | `<ul><li>Item 1</li><li>Item 2</li></ul>`    |
| `<ol>`  | Ordered list           | `<ol><li>First</li><li>Second</li></ol>`     |
| `<li>`  | List item              | `<li>List item</li>`                         |
| `<dl>`  | Description list       | `<dl><dt>Term</dt><dd>Description</dd></dl>` |
| `<dt>`  | Description term       | `<dt>HTML</dt>`                              |
| `<dd>`  | Description definition | `<dd>Markup language</dd>`                   |

## Link and Navigation Elements

| Element | Attribute         | Description     | Example                                        |
| ------- | ----------------- | --------------- | ---------------------------------------------- |
| `<a>`   | `href`            | Hyperlink       | `<a href="https://example.com">Link</a>`       |
| `<a>`   | `target="_blank"` | Open in new tab | `<a href="url" target="_blank">Link</a>`       |
| `<a>`   | `download`        | Download link   | `<a href="file.pdf" download>Download</a>`     |
| `<a>`   | `mailto:`         | Email link      | `<a href="mailto:email@example.com">Email</a>` |
| `<a>`   | `tel:`            | Phone link      | `<a href="tel:+1234567890">Call</a>`           |
| `<a>`   | `#id`             | Internal link   | `<a href="#section1">Go to Section</a>`        |

## Image and Media Elements

| Element     | Key Attributes    | Description       | Example                                            |
| ----------- | ----------------- | ----------------- | -------------------------------------------------- |
| `<img>`     | `src`, `alt`      | Image             | `<img src="image.jpg" alt="Description">`          |
| `<img>`     | `width`, `height` | Image dimensions  | `<img src="img.jpg" width="300" height="200">`     |
| `<img>`     | `loading="lazy"`  | Lazy loading      | `<img src="img.jpg" loading="lazy">`               |
| `<picture>` |                   | Responsive images | `<picture><source><img></picture>`                 |
| `<audio>`   | `controls`, `src` | Audio player      | `<audio controls><source src="audio.mp3"></audio>` |
| `<video>`   | `controls`, `src` | Video player      | `<video controls><source src="video.mp4"></video>` |
| `<source>`  | `src`, `type`     | Media source      | `<source src="file.mp4" type="video/mp4">`         |
| `<track>`   | `kind`, `src`     | Text track        | `<track kind="subtitles" src="subs.vtt">`          |
| `<iframe>`  | `src`             | Embedded frame    | `<iframe src="https://example.com"></iframe>`      |
| `<embed>`   | `src`, `type`     | Embedded content  | `<embed src="file.pdf" type="application/pdf">`    |
| `<object>`  | `data`, `type`    | Embedded object   | `<object data="file.pdf"></object>`                |

## Table Elements

| Element            | Description           | Example                                   |
| ------------------ | --------------------- | ----------------------------------------- |
| `<table>`          | Table container       | `<table>...</table>`                      |
| `<caption>`        | Table caption         | `<caption>Sales Data</caption>`           |
| `<thead>`          | Table header group    | `<thead><tr><th>Header</th></tr></thead>` |
| `<tbody>`          | Table body group      | `<tbody><tr><td>Data</td></tr></tbody>`   |
| `<tfoot>`          | Table footer group    | `<tfoot><tr><td>Total</td></tr></tfoot>`  |
| `<tr>`             | Table row             | `<tr><td>Cell 1</td><td>Cell 2</td></tr>` |
| `<th>`             | Table header cell     | `<th>Column Header</th>`                  |
| `<td>`             | Table data cell       | `<td>Cell content</td>`                   |
| `<td colspan="2">` | Span multiple columns | `<td colspan="2">Wide cell</td>`          |
| `<td rowspan="2">` | Span multiple rows    | `<td rowspan="2">Tall cell</td>`          |

## Form Elements

| Element      | Type/Attributes    | Description       | Example                                           |
| ------------ | ------------------ | ----------------- | ------------------------------------------------- |
| `<form>`     | `action`, `method` | Form container    | `<form action="/submit" method="post">`           |
| `<input>`    | `type="text"`      | Text input        | `<input type="text" name="username">`             |
| `<input>`    | `type="password"`  | Password input    | `<input type="password" name="pwd">`              |
| `<input>`    | `type="email"`     | Email input       | `<input type="email" name="email">`               |
| `<input>`    | `type="number"`    | Number input      | `<input type="number" min="1" max="10">`          |
| `<input>`    | `type="range"`     | Range slider      | `<input type="range" min="0" max="100">`          |
| `<input>`    | `type="date"`      | Date picker       | `<input type="date" name="birthday">`             |
| `<input>`    | `type="time"`      | Time picker       | `<input type="time" name="appointment">`          |
| `<input>`    | `type="file"`      | File upload       | `<input type="file" accept=".jpg,.png">`          |
| `<input>`    | `type="color"`     | Color picker      | `<input type="color" name="color">`               |
| `<input>`    | `type="checkbox"`  | Checkbox          | `<input type="checkbox" name="agree">`            |
| `<input>`    | `type="radio"`     | Radio button      | `<input type="radio" name="gender" value="male">` |
| `<input>`    | `type="hidden"`    | Hidden field      | `<input type="hidden" name="token" value="abc">`  |
| `<input>`    | `type="submit"`    | Submit button     | `<input type="submit" value="Submit">`            |
| `<input>`    | `type="reset"`     | Reset button      | `<input type="reset" value="Reset">`              |
| `<textarea>` | `rows`, `cols`     | Multi-line text   | `<textarea rows="4" cols="50"></textarea>`        |
| `<select>`   |                    | Dropdown list     | `<select><option>Option 1</option></select>`      |
| `<option>`   | `value`            | Select option     | `<option value="us">United States</option>`       |
| `<optgroup>` | `label`            | Option group      | `<optgroup label="Group">`                        |
| `<datalist>` |                    | Input suggestions | `<datalist id="browsers">`                        |
| `<button>`   | `type`             | Button            | `<button type="submit">Submit</button>`           |
| `<label>`    | `for`              | Input label       | `<label for="username">Username:</label>`         |
| `<fieldset>` |                    | Form group        | `<fieldset><legend>Personal Info</legend>`        |
| `<legend>`   |                    | Fieldset caption  | `<legend>Contact Details</legend>`                |

## Semantic Elements (HTML5)

| Element        | Description            | Usage                                                      |
| -------------- | ---------------------- | ---------------------------------------------------------- |
| `<header>`     | Page/section header    | `<header><h1>Site Title</h1></header>`                     |
| `<nav>`        | Navigation links       | `<nav><ul><li><a href="/">Home</a></li></ul></nav>`        |
| `<main>`       | Main content           | `<main><article>...</article></main>`                      |
| `<article>`    | Independent content    | `<article><h2>Blog Post</h2><p>...</p></article>`          |
| `<section>`    | Thematic content group | `<section><h2>About Us</h2><p>...</p></section>`           |
| `<aside>`      | Sidebar content        | `<aside><h3>Related Links</h3></aside>`                    |
| `<footer>`     | Page/section footer    | `<footer><p>&copy; 2023 Company</p></footer>`              |
| `<figure>`     | Figure with caption    | `<figure><img><figcaption>Caption</figcaption></figure>`   |
| `<figcaption>` | Figure caption         | `<figcaption>Image description</figcaption>`               |
| `<details>`    | Collapsible content    | `<details><summary>Click</summary><p>Hidden</p></details>` |
| `<summary>`    | Details summary        | `<summary>Show more details</summary>`                     |
| `<dialog>`     | Dialog box             | `<dialog><p>Dialog content</p></dialog>`                   |
| `<progress>`   | Progress indicator     | `<progress value="70" max="100">70%</progress>`            |
| `<meter>`      | Scalar measurement     | `<meter value="0.7">70%</meter>`                           |

## Container Elements

| Element  | Description              | Usage                                           |
| -------- | ------------------------ | ----------------------------------------------- |
| `<div>`  | Generic block container  | `<div class="container">Block content</div>`    |
| `<span>` | Generic inline container | `<span class="highlight">Inline content</span>` |

## Global Attributes

| Attribute         | Description       | Example                          |
| ----------------- | ----------------- | -------------------------------- |
| `id`              | Unique identifier | `<div id="unique-element">`      |
| `class`           | CSS class names   | `<div class="btn primary">`      |
| `style`           | Inline CSS styles | `<div style="color: red;">`      |
| `title`           | Tooltip text      | `<div title="More information">` |
| `lang`            | Language code     | `<div lang="en">`                |
| `dir`             | Text direction    | `<div dir="rtl">`                |
| `hidden`          | Hide element      | `<div hidden>`                   |
| `contenteditable` | Editable content  | `<div contenteditable="true">`   |
| `draggable`       | Draggable element | `<div draggable="true">`         |
| `tabindex`        | Tab order         | `<div tabindex="0">`             |
| `data-*`          | Custom data       | `<div data-id="123">`            |

## ARIA Attributes (Accessibility)

| Attribute          | Description              | Example                                 |
| ------------------ | ------------------------ | --------------------------------------- |
| `aria-label`       | Accessible name          | `<button aria-label="Close">×</button>` |
| `aria-labelledby`  | Label reference          | `<input aria-labelledby="label-id">`    |
| `aria-describedby` | Description reference    | `<input aria-describedby="help-text">`  |
| `aria-hidden`      | Hide from screen readers | `<div aria-hidden="true">`              |
| `aria-expanded`    | Expansion state          | `<button aria-expanded="false">`        |
| `aria-controls`    | Controls reference       | `<button aria-controls="menu">`         |
| `role`             | Element role             | `<div role="button">`                   |

## Input Attributes

| Attribute      | Description         | Example                                        |
| -------------- | ------------------- | ---------------------------------------------- |
| `required`     | Required field      | `<input type="text" required>`                 |
| `placeholder`  | Placeholder text    | `<input type="text" placeholder="Enter name">` |
| `readonly`     | Read-only field     | `<input type="text" readonly>`                 |
| `disabled`     | Disabled field      | `<input type="text" disabled>`                 |
| `autofocus`    | Auto-focus on load  | `<input type="text" autofocus>`                |
| `autocomplete` | Auto-completion     | `<input type="email" autocomplete="email">`    |
| `pattern`      | Validation pattern  | `<input type="text" pattern="[0-9]{3}">`       |
| `min`/`max`    | Number/date limits  | `<input type="number" min="1" max="100">`      |
| `step`         | Number increment    | `<input type="number" step="0.1">`             |
| `maxlength`    | Character limit     | `<input type="text" maxlength="50">`           |
| `multiple`     | Multiple selections | `<input type="file" multiple>`                 |
| `accept`       | File type filter    | `<input type="file" accept="image/*">`         |

## HTML Entities (Special Characters)

| Entity     | Character | Description          |
| ---------- | --------- | -------------------- |
| `&lt;`     | <         | Less than            |
| `&gt;`     | >         | Greater than         |
| `&amp;`    | &         | Ampersand            |
| `&quot;`   | "         | Quotation mark       |
| `&apos;`   | '         | Apostrophe           |
| `&nbsp;`   |           | Non-breaking space   |
| `&copy;`   | ©         | Copyright            |
| `&reg;`    | ®         | Registered trademark |
| `&trade;`  | ™         | Trademark            |
| `&hearts;` | ♥         | Heart suit           |
| `&spades;` | ♠         | Spade suit           |
| `&clubs;`  | ♣         | Club suit            |
| `&diams;`  | ♦         | Diamond suit         |
| `&larr;`   | ←         | Left arrow           |
| `&uarr;`   | ↑         | Up arrow             |
| `&rarr;`   | →         | Right arrow          |
| `&darr;`   | ↓         | Down arrow           |

## Best Practices Summary

| Category          | Practice                 | Example/Description                                        |
| ----------------- | ------------------------ | ---------------------------------------------------------- |
| **Structure**     | Use semantic HTML        | Use `<header>`, `<nav>`, `<main>`, `<article>`, `<footer>` |
| **SEO**           | Proper heading hierarchy | h1 → h2 → h3 (don't skip levels)                           |
| **SEO**           | Alt text for images      | `<img src="photo.jpg" alt="Descriptive text">`             |
| **SEO**           | Meta descriptions        | `<meta name="description" content="Page summary">`         |
| **Accessibility** | Label form inputs        | `<label for="email">Email:</label><input id="email">`      |
| **Accessibility** | Keyboard navigation      | Use `tabindex`, ensure focus indicators                    |
| **Performance**   | Optimize images          | Use appropriate formats, compress files                    |
| **Performance**   | Lazy loading             | `<img loading="lazy">` for below-fold images               |
| **Mobile**        | Responsive viewport      | `<meta name="viewport" content="width=device-width">`      |
| **Security**      | Validate inputs          | Use `required`, `pattern`, server-side validation          |
| **Code Quality**  | Valid HTML               | Use HTML validator, proper nesting                         |
| **Code Quality**  | Meaningful names         | Use descriptive class and ID names                         |

## Comments

| Type               | Syntax             | Example                                            |
| ------------------ | ------------------ | -------------------------------------------------- |
| HTML Comment       | `<!-- comment -->` | `<!-- This is a comment -->`                       |
| Multi-line Comment | `<!-- comment -->` | `<!-- This comment<br>spans multiple<br>lines -->` |

**[⬆ Back to Top](#table-of-contents)**
