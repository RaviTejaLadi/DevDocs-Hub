# Accessibility

**The Golden Rule:** Accessibility is not a "nice-to-have" add-on; it is a core
requirement. In many countries, it is a legal obligation. If your HTML is
semantically correct, you are already 80% of the way there.

### 1. Alt Text Rules (`alt`)

Screen readers (software used by blind people) cannot "see" images; they read
the `alt` attribute aloud.

- **The Decorative Rule:** If an image is purely for decoration (like a
  background shape or a stock photo of people smiling that adds no information),
  use an **empty string**: `alt=""`. This tells the screen reader to completely
  ignore the image.
- **The Functional Rule:** If an image is a button or link (like a magnifying
  glass icon), the `alt` text should describe the **action**, not the picture.
- _Bad:_ `alt="Magnifying glass"`
- _Good:_ `alt="Search"`

- **The Informative Rule:** If the image contains information (like a chart),
  describe the insight, not the visual.
- _Bad:_ `alt="Chart of sales"`
- _Good:_ `alt="Bar chart showing Q4 sales increased by 20%."`

### 2. Labels for Inputs

A blind user tabbing through a form cannot see the text "Email:" next to an
input box. The code must explicitly link them.

- **The Explicit Link (Best Practice):** Use the `for` attribute on the label
  and the `id` on the input.

```html
<label for="email-field">Email Address</label>
<input type="email" id="email-field" />
```

- **The Implicit Wrap:** You can wrap the input inside the label.

```html
<label>
  Email Address
  <input type="email" />
</label>
```

- **Why it matters:** When a screen reader focuses on the input, it reads the
  label text. Without this connection, it simply says "Edit text," leaving the
  user guessing what to type.

### 3. ARIA Basics (Accessible Rich Internet Applications)

ARIA attributes bridge the gap when standard HTML isn't enough.

**The First Rule of ARIA:** Don't use ARIA if a native HTML element serves the
purpose. (e.g., Use `<button>`, not `<div role="button">`).

- **`aria-label`:** used to provide a label for an element that has no visible
  text on the screen.
- _Scenario:_ A "Close" button that is just an "X" icon.
- _Usage:_ `<button aria-label="Close Menu">X</button>`

- **`aria-hidden="true"`:** Hides an element from screen readers but keeps it
  visible.
- _Scenario:_ An icon next to text where the text already explains the action.
  You don't want the screen reader to say "Download icon, Download."
- _Usage:_ `<i class="icon-download" aria-hidden="true"></i> Download`

- **`aria-expanded`:** Used for accordions or dropdowns to tell the user if the
  section is currently open (`true`) or closed (`false`).

### 4. Keyboard Navigation

Many users (motor impaired, power users) navigate websites using only the
keyboard, primarily the `Tab` key.

- **Focus Indicators:** **Never** remove the default outline in CSS
  (`outline: none`) unless you replace it with your own custom style. Users need
  to see which element is currently selected.
- **Logical Order:** The focus order follows the DOM order (the order elements
  appear in the code). If you use CSS `flex-direction: row-reverse` or
  `position: absolute` to move things around visually, you might break the
  logical tab order.
- **Skip Links:** A hidden link at the very top of the page that says "Skip to
  Content." It allows keyboard users to bypass the navigation menu and jump
  straight to the `<main>` content.

### 5. Semantic Tags & Screen Readers

Screen readers use semantic tags to generate a "Rotor" or map of the page,
allowing users to fly through content.

- **Headings (`h1`–`h6`):** Users often jump from heading to heading to skim
  content.
- _Mistake:_ Using `<b>` or styled `<div>` for headings. The screen reader won't
  recognize these as navigation points.

- **Landmarks:** Users can jump straight to `<nav>`, `<main>`, or `<footer>`.
- **Buttons vs. Links:**
- **Links (`<a>`):** Use when the action takes the user to a **new URL** or
  page.
- **Buttons (`<button>`):** Use when the action performs a **function** on the
  current page (submit form, open modal, toggle menu).
- _Why?_ Screen readers announce them differently ("Link: Home" vs. "Button:
  Submit"), setting different expectations for the user.
