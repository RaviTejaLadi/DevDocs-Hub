# Top 50 Most asked Interview Questions and Answers

### **Part 1: The Absolute Basics**

**1. What does `<!DOCTYPE html>` do?** `Google` `Microsoft`

- **Answer:** It is an instruction to the browser to inform it about the version
  of HTML used in the document. `<!DOCTYPE html>` triggers **Standard Mode**,
  ensuring the browser renders content according to modern HTML5 specifications.
  Without it, browsers may switch to **Quirks Mode** to emulate older browser
  behaviors, leading to layout issues.

**2. Explain the difference between `display: none` and `visibility: hidden`.**
`Amazon` `Adobe`

- **Answer:** `display: none` removes the element from the document flow
  entirely (it takes up no space). `visibility: hidden` hides the element
  visually, but it still occupies the same space in the layout.

**3. What are "Void Elements" in HTML?** `Infosys` `TCS`

- **Answer:** Elements that cannot have any child nodes (content) and do not
  require a closing tag. Examples include `<img>`, `<br>`, `<hr>`, `<input>`,
  and `<meta>`.

**4. What is the difference between Block and Inline elements?** `Wipro`
`Startups`

- **Answer:**
- **Block:** Starts on a new line and takes up the full width available (e.g.,
  `<div>`, `<p>`, `<h1>`).
- **Inline:** Does not start on a new line and only takes as much width as
  necessary (e.g., `<span>`, `<a>`, `<img>`).

**5. What are HTML5 semantic tags? Name three.** `Meta` `Airbnb`

- **Answer:** Tags that clearly describe their meaning to both the browser and
  the developer. Examples: `<header>`, `<footer>`, `<article>`, `<section>`,
  `<nav>`.

**6. Why is it generally bad to use inline styles?** `Accenture`

- **Answer:** They make code hard to maintain (you must edit every element
  individually), they have extremely high specificity (hard to override), and
  they increase the file size of the HTML.

**7. What is the `alt` attribute used for?** `Apple` `Netflix`

- **Answer:** It provides alternative text for screen readers (accessibility)
  and is displayed if the image fails to load. It is also crucial for SEO.

**8. How do you serve a page in multiple languages?** `Booking.com`

- **Answer:** Use the `lang` attribute in the `<html>` tag (e.g.,
  `<html lang="en">` or `<html lang="fr">`).

**9. What is the difference between `<span>` and `<div>`?** `IBM`

- **Answer:** `<div>` is a block-level element used for grouping larger sections
  of layout. `<span>` is an inline element used for grouping or styling small
  chunks of text or icons.

**10. What is a "favicon"?** `General`

- **Answer:** The small icon displayed in the browser tab next to the page
  title. It is linked via `<link rel="icon" href="...">`.

---

### **Part 2: Semantics & Structure**

**11. When would you use `<section>` vs `<article>`?** `Uber` `Twitter/X`

- **Answer:** Use `<article>` for independent, self-contained content that makes
  sense on its own (e.g., a blog post, a news card). Use `<section>` for a
  thematic grouping of content, usually with a heading (e.g., "Contact Us" or
  "About" section).

**12. Can you have multiple `<h1>` tags on a single page?** `Google`

- **Answer:** Technically yes (HTML5 allows it), but best practice for SEO and
  accessibility is to have **one** unique `<h1>` per page that describes the
  main topic.

**13. What is the `<time>` tag?** `New York Times` `Media Companies`

- **Answer:** It represents a specific period in time. It allows you to provide
  a machine-readable format for dates (e.g.,
  `<time datetime="2023-10-01">Oct 1</time>`), helping search engines and
  calendars.

**14. What is the difference between `<b>` and `<strong>`?** `Microsoft`

- **Answer:** `<b>` is purely visual (bold). `<strong>` is semantic; it
  indicates that the text has strong importance, which screen readers will
  emphasize verbally.

**15. What is the difference between `<i>` and `<em>`?** `Microsoft`

- **Answer:** Similar to above. `<i>` is visual (italic). `<em>` is semantic
  (emphasis), changing the stress of the spoken word.

**16. What is the purpose of the `<main>` tag?** `Oracle`

- **Answer:** It specifies the dominant content of the `<body>`. There should be
  only one visible `<main>` element per page. It helps screen readers skip
  navigation and go straight to the content.

**17. How do you create a definition list?** `Academic/Gov`

- **Answer:** Using `<dl>` (Definition List), `<dt>` (Definition Term), and
  `<dd>` (Definition Description).

**18. What is the `<figure>` and `<figcaption>` element?** `Pinterest`

- **Answer:** `<figure>` wraps media (like images or charts) and `<figcaption>`
  provides a caption for that specific media, semantically linking the two.

**19. What is the difference between `<link>` and `<a>`?** `Cisco`

- **Answer:** `<a>` is an anchor used to create hyperlinks for users to click.
  `<link>` is used in the `<head>` to link external resources like CSS or
  favicons.

**20. Explain the hierarchy of headings.** `SEO Agencies`

- **Answer:** `<h1>` is the most important, descending to `<h6>`. Headings
  should not be skipped (e.g., don't jump from H1 to H3) as this breaks the
  accessibility tree.

---

### **Part 3: Forms & User Interaction**

**21. What is the difference between `GET` and `POST` methods in forms?**
`PayPal` `Stripe`

- **Answer:** `GET` appends form data to the URL (visible, limited length, used
  for search). `POST` sends data in the HTTP request body (invisible in URL,
  secure, no size limit, used for sensitive data).

**22. What does the `label` tag do, and how do you connect it?** `Salesforce`

- **Answer:** It provides a caption for an item. You connect it by setting the
  `for` attribute on the label to match the `id` of the input
  (`<label for="email">` -> `<input id="email">`).

**23. What are `data-` attributes?** `Atlassian` `Shopify`

- **Answer:** They allow you to store custom data private to the page or
  application (e.g., `data-user-id="123"`). You can access them in JavaScript
  via `element.dataset`.

**24. What is the difference between `input` and `textarea`?** `Basic`

- **Answer:** `<input>` is for single-line text (and has no closing tag).
  `<textarea>` is for multi-line text (and requires a closing tag).

**25. What is the purpose of the `placeholder` attribute?** `UI/UX Roles`

- **Answer:** It specifies a short hint that describes the expected value of an
  input field. It disappears when the user types.

**26. How do you group related options in a drop-down list?** `Enterprise Corps`

- **Answer:** Use the `<optgroup>` tag inside a `<select>` element.

**27. What is the `fieldset` tag?** `Gov/Banking`

- **Answer:** It is used to group related elements in a form. It is often used
  with `<legend>` to provide a caption for the group.

**28. What are the new form input types in HTML5?** `Samsung`

- **Answer:** `email`, `url`, `number`, `range`, `date`, `time`, `color`,
  `search`, `tel`.

**29. How do you disable an input field?** `Basic`

- **Answer:** Add the boolean attribute `disabled` to the tag.

**30. What is `autocomplete`?** `E-commerce`

- **Answer:** An attribute that helps the browser predict the value. Example:
  `autocomplete="email"` or `autocomplete="new-password"`.

---

### **Part 4: Performance & Rendering**

**31. What is the difference between `<script>`, `<script async>`, and
`<script defer>`?** `Netflix` `Meta` `Crucial`

- **Answer:**
- `<script>`: Blocks HTML parsing while downloading and executing.
- `<script async>`: Downloads in parallel but executes immediately when ready
  (pausing HTML parsing).
- `<script defer>`: Downloads in parallel but waits to execute until the HTML
  parsing is complete. (Best for performance).

**32. What is "lazy loading" for images?** `Instagram` `Pinterest`

- **Answer:** Deferring the loading of images that are off-screen until the user
  scrolls near them. In HTML5, this is done natively with
  `<img loading="lazy">`.

**33. What are `srcset` and `sizes`?** `Apple` `Media`

- **Answer:** Attributes used for responsive images. They allow the browser to
  choose the most appropriate image size to download based on the device's
  screen width and pixel density.

**34. What is the "Critical Rendering Path"?** `Google`

- **Answer:** The sequence of steps the browser takes to convert HTML, CSS, and
  JS into pixels on the screen. (DOM -> CSSOM -> Render Tree -> Layout ->
  Paint).

**35. What is the `<template>` tag?** `Framework Developers`

- **Answer:** A mechanism for holding client-side content that is not to be
  rendered when a page is loaded but may be instantiated subsequently during
  runtime using JavaScript.

**36. Why put CSS in `<head>` and JS at the end of `<body>` (traditionally)?**
`Yahoo`

- **Answer:** CSS is render-blocking, so we want it early to prevent a "Flash of
  Unstyled Content" (FOUC). JS is parser-blocking, so we traditionally put it at
  the end to allow the visual DOM to load first.

**37. What is `preload` vs `prefetch`?** `Amazon`

- **Answer:** `preload` tells the browser to download a resource _immediately_
  because it's needed for the current page. `prefetch` tells the browser to
  download a resource _in the background_ because it might be needed for the
  _next_ page.

**38. What is the Shadow DOM?** `Google` `Web Component Roles`

- **Answer:** A browser technology that allows you to attach a hidden, separate
  DOM tree to an element. It provides encapsulation for styles and scripts (used
  heavily in Web Components).

**39. What is the purpose of the `viewport` meta tag?** `Mobile Dev`

- **Answer:** It controls the layout on mobile browsers. Without
  `<meta name="viewport" content="width=device-width, initial-scale=1">`, mobile
  phones will render the site like a desktop and zoom out.

**40. What is a Web Worker?** `Advanced`

- **Answer:** A JavaScript script that runs in the background, independently of
  other scripts, without affecting the performance of the page (UI thread).

---

### **Part 5: Accessibility & SEO**

**41. What are ARIA roles?** `Microsoft` `Gov`

- **Answer:** Accessible Rich Internet Applications attributes. They provide
  semantic meaning to elements that lack it natively (e.g.,
  `<div role="button">`).

**42. Why is `title` attribute not a good replacement for `alt`?**
`A11y Specialists`

- **Answer:** `title` usually only shows on mouse hover (inaccessible to mobile
  and keyboard users), whereas `alt` is read by screen readers.

**43. How do you support keyboard navigation?** `Meta`

- **Answer:** Ensure all interactive elements are focusable (using `tabindex` if
  necessary, though native elements are better), have visible focus states, and
  follow a logical tab order.

**44. What is the difference between `canvas` and `svg`?** `Adobe` `Data Viz`

- **Answer:** `SVG` is vector-based (XML), scalable, and part of the DOM (good
  for logos/charts). `Canvas` is raster-based (pixels) and drawn via JS (good
  for games/high particle counts).

**45. How does HTML affect SEO?** `Marketing Tech`

- **Answer:** Proper use of headings (`h1`-`h6`), semantic tags (`article`,
  `nav`), `title` tags, `meta` descriptions, and `alt` text helps search engines
  understand and rank content.

**46. What is Open Graph protocol?** `Facebook/Meta`

- **Answer:** Meta tags (like `og:title`, `og:image`) that control how URLs look
  when shared on social media.

**47. What is `tabindex`?** `Slack`

- **Answer:** An attribute that controls whether an element is focusable and in
  what order. `0` inserts into natural order, `-1` makes it focusable via script
  but not tab, `1+` forces priority (avoid using positive values).

**48. What is the `download` attribute?** `File Sharing Apps`

- **Answer:** When used on an `<a>` tag, it instructs the browser to download
  the URL rather than navigating to it.

**49. What is semantic HTML?** `Every Company`

- **Answer:** Using HTML markup to reinforce the semantics, or meaning, of the
  information rather than defining its presentation.

**50. What does `contenteditable` do?** `Notion` `Trello`

- **Answer:** An attribute that, when set to `true`, makes the element and its
  children editable by the user (like a rich text editor).
