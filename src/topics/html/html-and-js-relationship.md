# HTML And Javascript Relationship

### 1. The DOM Concept (HTML → DOM)

When a browser loads your HTML file, it doesn't just read the text; it converts
it into a living structure called the **DOM (Document Object Model)**.

- **The Transformation:**

1. **HTML (The Blueprint):** Your static text file.
2. **DOM (The Live Object):** A tree-like structure in the browser's memory.

- **The Relationship:** JavaScript does _not_ modify your HTML file. It modifies
  the **DOM**. When JS changes the DOM (e.g., adds a class), the browser
  instantly repaints the screen to match.
- **Nodes:** Every element (`<div>`), attribute (`href`), and piece of text in
  your HTML becomes a "Node" in this tree.

### 2. ID & Class Usage in JS

Just like CSS, JavaScript needs "hooks" to find specific elements to interact
with.

- **`id` (The "Hotline"):**
- **Best for:** Targeting a single, specific element (e.g., The "Submit"
  button).
- **JS Syntax:** `document.getElementById('my-btn')`
- **Performance:** Extremely fast.

- **`class` (The "Broadcast"):**
- **Best for:** Targeting a group of elements (e.g., All "Delete" buttons).
- **JS Syntax:** `document.querySelectorAll('.delete-btn')`
- **Note:** This returns a _NodeList_ (an array-like list), not a single
  element. You usually have to loop through them.

### 3. Data Attributes (`data-*`) for JS

Sometimes you need to store data _on_ an element for JavaScript to use, without
showing it to the user.

- **HTML:** Use the `data-` prefix.

```html
<button id="buy-btn" data-price="49.99" data-product-id="123">Buy Now</button>
```

- **JavaScript:** Access it via the `dataset` property.

```javascript
const btn = document.getElementById('buy-btn');
console.log(btn.dataset.price); // Output: "49.99"
```

- **Why use this?** It keeps your data connected to the UI element without
  "polluting" standard attributes like `class` or `id`.

### 4. Script Loading (`defer`, `async`)

The browser reads HTML from top to bottom. If it hits a `<script>` tag, it
**stops building the DOM**, downloads the script, runs it, and _then_ continues.
This blocks the page from loading visually.

We use attributes to fix this:

| Attribute   | Behavior                                                                          | Use Case                                                                               |
| ----------- | --------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| **`defer`** | Downloads in parallel, but **waits** to run until the HTML is fully parsed.       | **Best Practice.** Use for 99% of your scripts (app logic, UI interactions).           |
| **`async`** | Downloads in parallel and runs **immediately** when ready (pausing HTML parsing). | Use for independent 3rd-party scripts (ads, analytics) that don't care about your DOM. |
| **(None)**  | Blocks everything. Pauses HTML parsing until done.                                | **Avoid.** (Legacy behavior).                                                          |

### 5. Where to Place `<script>`

Where you put the tag depends on the attributes you use.

- **The Modern Standard (`<head>` + `defer`):** Place your script in the
  `<head>` but add the `defer` attribute.

```html
<head>
  <script src="app.js" defer></script>
</head>
```

_Why?_ The script starts downloading early (good for speed), but executes only
when the DOM is ready (safe).

- **The Old School Way (End of `<body>`):** Place the script right before the
  closing `</body>` tag.

```html
  ...
  <script src="app.js"></script>
</body>

```

_Why?_ Before `defer` existed, this was the only way to ensure the HTML elements
existed before JS tried to find them.
