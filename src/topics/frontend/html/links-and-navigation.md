# Links & Navigation

### 1. The Anchor Tag (`<a>`)

The `<a>` tag (short for **Anchor**) creates a hyperlink to other web pages,
files, locations within the same page, email addresses, or any other URL.

- **Syntax:** `<a href="destination">Link Text</a>`
- **The `href` Attribute:** Stands for **Hypertext Reference**. It is mandatory.
  Without `href`, the `<a>` tag is just a placeholder and will not be clickable.
- **Content:** While usually text, an `<a>` tag can wrap other elements, such as
  images or entire `div` blocks, to make them clickable.

### 2. Relative vs. Absolute URLs

Understanding paths is critical for linking to your own files (images,
stylesheets, other pages).

| Type             | Syntax Example                     | Usage                                                                                                     |
| ---------------- | ---------------------------------- | --------------------------------------------------------------------------------------------------------- |
| **Absolute URL** | `https://www.google.com`           | Contains the full internet address (protocol + domain). Used when linking to **external websites**.       |
| **Relative URL** | `/about.html` or `images/logo.png` | Describes the path **relative to the current file**. Used for **internal links** within your own website. |

**Navigating Directories (Relative Paths):**

- `href="page.html"`: Looks for the file in the **same** folder.
- `href="subfolder/page.html"`: Goes **down** into a subfolder.
- `href="../page.html"`: Goes **up** one folder level (parent directory).

### 3. Key Attributes: `target`, `rel`, `download`

These attributes control how the browser handles the link click.

- **`target`:** Specifies where to open the linked document.
- `target="_self"` (Default): Opens in the current tab/window.
- **`target="_blank"`**: Opens the link in a **new tab** or window.

- **`rel` (Relationship):** strictly required for security when using
  `target="_blank"`.
- **The Rule:** If you use `target="_blank"`, you **must** add
  `rel="noopener noreferrer"`.
- _Why?_ Without this, the new page can access your original page's window
  object via JavaScript (a security vulnerability called "Tabnabbing") and
  potentially impact performance.
- _Correct Usage:_
  `<a href="https://site.com" target="_blank" rel="noopener noreferrer">External Site</a>`

- **`download`:** Instructs the browser to download the URL instead of
  navigating to it.
- _Usage:_
  `<a href="/files/report.pdf" download="MyReport.pdf">Download PDF</a>`
- The value (e.g., "MyReport.pdf") suggests the filename for the saved file.

### 4. Internal Page Navigation (Hash Links)

You can link to a specific section _within_ the same page (e.g., "Back to Top"
or a Table of Contents). This requires two steps:

1. **The Target:** Assign a unique `id` to the element you want to jump to.

```html
<h2 id="contact-section">Contact Us</h2>
```

2. **The Link:** Set the `href` to that ID, preceded by a hash symbol (`#`).

```html
<a href="#contact-section">Go to Contact</a>
```

### 5. Email & Phone Links (Special Protocols)

HTML supports special protocols in the `href` attribute to trigger native device
apps.

- **Email (`mailto:`):** Opens the user's default email client (Outlook, Apple
  Mail) with a new draft.
- _Syntax:_ `<a href="mailto:user@example.com">Send Email</a>`
- _Advanced:_ You can pre-fill subject lines:
  `mailto:user@example.com?subject=Support%20Request`.

- **Telephone (`tel:`):** Triggers the dialer on mobile phones or Skype/FaceTime
  on desktops.
- _Syntax:_ `<a href="tel:+15550199">+1 (555) 019-9</a>`
- _Best Practice:_ Always include the country code (e.g., +1) to ensure the link
  works internationally.
