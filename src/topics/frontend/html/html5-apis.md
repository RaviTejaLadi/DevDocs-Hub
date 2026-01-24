# HTML5 APIS

_Note: While these are triggered by HTML elements or events, the heavy lifting
is done by JavaScript. At this stage, you just need to know they exist and what
they are used for._

### 1. The Canvas API (`<canvas>`)

The Canvas is an area on your webpage where JavaScript can draw graphics,
animations, or games pixel-by-pixel.

- **The HTML Tag:** `<canvas id="myGame" width="500" height="500"></canvas>`
- **How it works:** Think of the HTML tag as an empty picture frame. By itself,
  it is blank. You use JavaScript to "paint" inside that frame (draw lines,
  circles, images).
- **Key Difference (vs. SVG):**
- **SVG** is vector-based (math-based shapes). Good for logos and icons.
- **Canvas** is raster-based (pixels). Good for high-performance games or
  complex data charts (like stock market graphs).

### 2. Web Storage (Local & Session)

Before HTML5, we only had "Cookies" to save data, which were small and slow.
HTML5 introduced **Web Storage**, which allows you to save data directly in the
user's browser.

- **Local Storage (`localStorage`):**
- **Lifespan:** **Permanent.** The data stays there even if the user closes the
  browser or restarts the computer. It is only gone if the user explicitly
  clears their cache or the code deletes it.
- _Use Case:_ Saving a user's "Dark Mode" preference or a "Guest" shopping cart.

- **Session Storage (`sessionStorage`):**
- **Lifespan:** **Temporary.** The data is deleted the moment the specific
  browser tab is closed.
- _Use Case:_ Storing form data in a multi-step wizard (so data isn't lost if
  they hit refresh), but clearing it once they leave.

- **Security Warning:** Never store sensitive info like passwords or credit card
  numbers here. It is plain text and easy for hackers to access.

### 3. Geolocation API

This API allows a web application to request the user's physical location
(Latitude and Longitude).

- **Privacy First:** This is **not** automatic. The browser will always
  interrupt and show a popup asking: _"This website wants to know your location.
  Allow or Block?"_
- **Accuracy:** It uses GPS (on mobile), Wi-Fi signals, or IP addresses to
  figure out where you are.
- **Use Cases:**
- "Find stores near me."
- Food delivery tracking.
- Tagging a photo with a location.

### 4. Drag and Drop API

HTML5 standardized the ability to grab an item on a page and drop it somewhere
else.

- **The HTML Attribute:** The key to this is the global attribute
  `draggable="true"`.

```html
<div draggable="true">Task Card #1</div>
```

- **How it works:** You define "Drop Zones." When a draggable item is released
  over a drop zone, an event fires, allowing you to reorder a list or upload a
  file.
- **Use Cases:**
- Trello-style Kanban boards (moving tasks from "To Do" to "Done").
- Gmail file attachments (drag file from desktop to browser).

### 5. Web Workers (The "Background Thread")

This is a performance concept. JavaScript is normally **"Single Threaded,"**
meaning it can only do one thing at a time. If it's doing a heavy calculation,
the UI freezes (you can't click buttons).

- **The Solution:** A Web Worker allows you to run a script in the
  **background**, separate from the main page.
- **Analogy:**
- **Main Thread (The Waiter):** Handles the customers (UI), takes orders
  (clicks), and serves food (DOM updates). Must never disappear.
- **Web Worker (The Chef):** Stays in the kitchen. Chops vegetables and cooks
  (heavy calculations).

- **Result:** The user interface remains smooth and clickable even while the
  site is processing massive amounts of data in the background.
