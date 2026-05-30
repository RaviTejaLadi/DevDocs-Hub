# 🖼️ HTML Iframes & Embeds

HTML **iframes** and **embeds** allow you to display content from another source
inside your web page. They are commonly used for videos, maps, documents, social
media posts, and external websites.

Think of an iframe as a **window inside a webpage**. Instead of opening another
site in a new tab, the content appears directly within your page.

---

# 📌 What is an Iframe?

The `<iframe>` (Inline Frame) element embeds another HTML document within the
current webpage.

## Basic Syntax

```html
<!-- Basic iframe -->
<iframe src="https://example.com"></iframe>
```

### Example

```html
<!-- Embed a webpage -->
<iframe src="https://example.com" width="600" height="400"> </iframe>
```

This creates a frame that displays the specified webpage.

---

# 🏗️ Iframe Structure

```html
<!-- Common iframe attributes -->
<iframe
  src="https://example.com"
  width="800"
  height="500"
  title="Example Website"
>
</iframe>
```

### Attributes

| Attribute         | Description               |
| ----------------- | ------------------------- |
| `src`             | URL of the page to embed  |
| `width`           | Width of the iframe       |
| `height`          | Height of the iframe      |
| `title`           | Accessibility description |
| `loading`         | Controls lazy loading     |
| `allowfullscreen` | Allows fullscreen mode    |

---

# 🎥 Embedding a YouTube Video

One of the most common iframe use cases is embedding videos.

```html
<!-- Embed a YouTube video -->
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/VIDEO_ID"
  title="YouTube Video"
  allowfullscreen
>
</iframe>
```

Replace `VIDEO_ID` with the actual YouTube video ID.

---

# 🗺️ Embedding Google Maps

Google Maps provides iframe embed code for locations.

```html
<!-- Embed Google Maps -->
<iframe
  src="https://www.google.com/maps/embed?... "
  width="600"
  height="450"
  style="border:0;"
  loading="lazy"
>
</iframe>
```

This allows users to view maps without leaving your website.

---

# 📄 Embedding PDF Files

PDF documents can be displayed directly using an iframe.

```html
<!-- Display a PDF file -->
<iframe src="files/document.pdf" width="100%" height="600"> </iframe>
```

### Project Structure

```text
project/
│
├── index.html
└── files/
    └── document.pdf
```

---

# 🖥️ Loading Local HTML Pages

You can embed another page from your own website.

```html
<!-- Embed local page -->
<iframe src="about.html" width="600" height="400"> </iframe>
```

### Folder Structure

```text
project/
│
├── index.html
└── about.html
```

---

# ⚡ Responsive Iframes

Fixed widths may not work well on mobile devices.

### Responsive Example

```html
<!-- Responsive iframe -->
<div class="iframe-container">
  <iframe src="https://example.com" title="Example Website"> </iframe>
</div>
```

```css
/* Responsive iframe styling */
.iframe-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
}

.iframe-container iframe {
  position: absolute;
  width: 100%;
  height: 100%;
  border: none;
}
```

The iframe automatically adjusts to different screen sizes.

---

# 🔒 Security Considerations

Embedding external content can introduce security risks.

### Using `sandbox`

```html
<!-- Restrict iframe permissions -->
<iframe src="https://example.com" sandbox> </iframe>
```

The `sandbox` attribute limits what the embedded page can do.

---

### Allow Specific Permissions

```html
<!-- Allow scripts and forms -->
<iframe src="https://example.com" sandbox="allow-scripts allow-forms"> </iframe>
```

---

# 🚀 Lazy Loading Iframes

Large iframes can slow page loading.

Use lazy loading to load content only when needed.

```html
<!-- Lazy loaded iframe -->
<iframe src="https://example.com" loading="lazy"> </iframe>
```

Benefits:

- Faster page load
- Reduced bandwidth usage
- Better user experience

---

# 📦 The `<embed>` Element

The `<embed>` element is another way to include external resources.

## Basic Syntax

```html
<!-- Basic embed -->
<embed src="file.pdf" width="600" height="400" />
```

---

## Embedding a PDF

```html
<!-- PDF using embed -->
<embed src="document.pdf" type="application/pdf" width="100%" height="600" />
```

---

## Embedding Audio

```html
<!-- Audio file -->
<embed src="music.mp3" width="300" height="50" />
```

---

# 📊 Iframe vs Embed

| Feature             | iframe | embed       |
| ------------------- | ------ | ----------- |
| Embeds webpages     | ✅ Yes | ❌ No       |
| Embeds PDFs         | ✅ Yes | ✅ Yes      |
| Supports HTML pages | ✅ Yes | ❌ No       |
| Interactive content | ✅ Yes | Limited     |
| Most commonly used  | ✅ Yes | Less common |

---

# 🎯 Common Use Cases

### Iframe

- 🎥 YouTube videos
- 🗺️ Google Maps
- 📄 External webpages
- 📊 Dashboards
- 📝 Forms

### Embed

- 📄 PDFs
- 🎵 Audio files
- 📁 Media content

---

# ⚠️ Common Mistakes

## Missing Title Attribute

❌ Wrong

```html
<iframe src="https://example.com"></iframe>
```

✅ Correct

```html
<iframe src="https://example.com" title="Example Website"> </iframe>
```

The `title` improves accessibility.

---

## Fixed Width on Mobile

❌ Wrong

```html
<iframe width="1200" height="600"> </iframe>
```

✅ Better

```html
<iframe width="100%" height="600"> </iframe>
```

---

## Embedding Restricted Websites

❌ Not all websites allow embedding.

```html
<iframe src="https://some-website.com"></iframe>
```

Many websites block iframes using security headers such as:

```text
X-Frame-Options
Content-Security-Policy
```

In such cases, the content will not load.

---

# 🎯 Best Practices

✅ Always add a `title` attribute

✅ Use `loading="lazy"` for performance

✅ Make iframes responsive

✅ Use `sandbox` when embedding untrusted content

✅ Prefer iframe over embed for webpages

✅ Only embed content from trusted sources

---

# 🚀 Quick Summary

```text
Iframe
   ↓
Embeds Web Pages

Examples:
• YouTube Videos
• Google Maps
• Forms
• Dashboards
```

```text
Embed
   ↓
Embeds Files

Examples:
• PDFs
• Audio Files
• Media Content
```

💡 **Tip:** Use **`<iframe>`** when embedding websites, videos, maps, or
interactive content. Use **`<embed>`** mainly for displaying files such as PDFs
and media resources. In modern web development, `<iframe>` is the preferred and
most widely used solution.
