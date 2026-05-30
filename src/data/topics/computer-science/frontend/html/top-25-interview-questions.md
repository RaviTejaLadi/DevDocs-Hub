# 🚀 Top 25 HTML Interview Questions and Answers

These are some of the most frequently asked HTML interview questions for freshers and experienced frontend developers.

---

## 1. What is HTML?

**Answer:**

HTML (HyperText Markup Language) is the standard markup language used to create and structure web pages.

Example:

```html
<h1>Hello World</h1>
<p>Welcome to HTML</p>
```

---

## 2. What is the difference between HTML and HTML5?

**Answer:**

| HTML                       | HTML5                          |
| -------------------------- | ------------------------------ |
| Older version              | Latest version                 |
| Limited multimedia support | Native audio and video support |
| No semantic tags           | Semantic tags available        |
| No Canvas API              | Canvas and SVG support         |

HTML5 introduced tags like:

```html
<header>
<nav>
<main>
<footer>
```

---

## 3. What are semantic HTML elements?

**Answer:**

Semantic elements clearly describe their meaning to browsers and developers.

Examples:

```html
<header>
<nav>
<article>
<section>
<footer>
```

Benefits:

* Better SEO
* Improved accessibility
* Cleaner code

---

## 4. What is the purpose of `<!DOCTYPE html>`?

**Answer:**

It tells the browser that the document uses HTML5.

```html
<!DOCTYPE html>
```

Without it, browsers may render pages in quirks mode.

---

## 5. What is the difference between `<div>` and `<span>`?

**Answer:**

| `<div>`              | `<span>`               |
| -------------------- | ---------------------- |
| Block-level element  | Inline element         |
| Starts on a new line | Stays in the same line |
| Used for layout      | Used for styling text  |

Example:

```html
<div>Block Element</div>
<span>Inline Element</span>
```

---

## 6. What are HTML attributes?

**Answer:**

Attributes provide additional information about elements.

Example:

```html
<a href="https://example.com">Visit</a>
```

Here, `href` is an attribute.

---

## 7. What is the difference between `id` and `class`?

**Answer:**

| id                | class             |
| ----------------- | ----------------- |
| Unique            | Reusable          |
| One element       | Multiple elements |
| Accessed with `#` | Accessed with `.` |

Example:

```html
<div id="header"></div>

<div class="card"></div>
<div class="card"></div>
```

---

## 8. What are void elements in HTML?

**Answer:**

Void elements do not have closing tags.

Examples:

```html
<br>
<hr>
<img>
<input>
<meta>
<link>
```

---

## 9. What is the difference between block-level and inline elements?

**Answer:**

### Block Elements

```html
<div>
<p>
<h1>
<section>
```

Take full width and start on a new line.

### Inline Elements

```html
<span>
<a>
<strong>
```

Only take required width.

---

## 10. What are HTML forms?

**Answer:**

Forms collect user input.

Example:

```html
<form>
    <input type="text">
    <button>Submit</button>
</form>
```

---

## 11. What is the difference between GET and POST?

**Answer:**

| GET                    | POST                       |
| ---------------------- | -------------------------- |
| Sends data in URL      | Sends data in request body |
| Less secure            | More secure                |
| Used for fetching data | Used for submitting data   |

Example:

```html
<form method="GET">
```

```html
<form method="POST">
```

---

## 12. What are HTML5 semantic tags?

**Answer:**

Common semantic tags:

```html
<header>
<nav>
<main>
<section>
<article>
<aside>
<footer>
```

They improve readability and SEO.

---

## 13. What is the purpose of the `alt` attribute?

**Answer:**

Provides alternative text for images.

```html
<img src="logo.png" alt="Company Logo">
```

Benefits:

* Accessibility
* SEO
* Displays if image fails to load

---

## 14. What is the difference between `<strong>` and `<b>`?

**Answer:**

```html
<strong>Important</strong>
<b>Bold Text</b>
```

* `<strong>` adds semantic importance.
* `<b>` only makes text bold.

---

## 15. What is the difference between `<em>` and `<i>`?

**Answer:**

```html
<em>Important</em>
<i>Italic Text</i>
```

* `<em>` adds emphasis.
* `<i>` only changes appearance.

---

## 16. What is an iframe?

**Answer:**

An iframe embeds another webpage inside the current page.

```html
<iframe
    src="https://example.com">
</iframe>
```

Common uses:

* YouTube videos
* Maps
* External applications

---

## 17. What are data attributes?

**Answer:**

Custom attributes that store extra data.

```html
<button data-id="101">
    Buy Now
</button>
```

JavaScript access:

```javascript
const btn = document.querySelector("button");

console.log(btn.dataset.id);
```

---

## 18. What is the difference between Canvas and SVG?

**Answer:**

| Canvas                  | SVG               |
| ----------------------- | ----------------- |
| Pixel-based             | Vector-based      |
| Better for games        | Better for icons  |
| Rendered via JavaScript | Uses XML elements |
| Not scalable            | Scalable          |

---

## 19. What is the purpose of the `<meta>` tag?

**Answer:**

Provides metadata about the webpage.

Example:

```html
<meta charset="UTF-8">
<meta
  name="viewport"
  content="width=device-width, initial-scale=1.0">
```

Used for:

* Character encoding
* SEO
* Responsive design

---

## 20. What are HTML entities?

**Answer:**

Used to display reserved characters.

Examples:

```html
&lt;
&gt;
&amp;
&nbsp;
```

Output:

```text
<
>
&
(space)
```

---

## 21. What is local storage in HTML5?

**Answer:**

Stores data in the browser permanently until removed.

```javascript
localStorage.setItem(
  "theme",
  "dark"
);
```

Retrieve:

```javascript
localStorage.getItem("theme");
```

---

## 22. What is session storage?

**Answer:**

Stores data only for the current browser session.

```javascript
sessionStorage.setItem(
  "user",
  "Ravi"
);
```

Data is cleared when the tab closes.

---

## 23. What is the purpose of the viewport meta tag?

**Answer:**

Makes websites responsive.

```html
<meta
  name="viewport"
  content="width=device-width, initial-scale=1.0">
```

Without it, mobile pages may appear zoomed out.

---

## 24. What are the new multimedia elements in HTML5?

**Answer:**

### Audio

```html
<audio controls>
    <source src="song.mp3">
</audio>
```

### Video

```html
<video controls width="400">
    <source src="movie.mp4">
</video>
```

No plugins are required.

---

## 25. What is the difference between cookies, localStorage, and sessionStorage?

**Answer:**

| Feature        | Cookies      | localStorage | sessionStorage |
| -------------- | ------------ | ------------ | -------------- |
| Storage Limit  | ~4KB         | ~5-10MB      | ~5-10MB        |
| Sent to Server | Yes          | No           | No             |
| Expiration     | Configurable | Persistent   | Session Only   |
| Browser Close  | May persist  | Persists     | Cleared        |

### Example

```javascript
// Local Storage
localStorage.setItem("theme", "dark");

// Session Storage
sessionStorage.setItem("user", "Ravi");

// Cookie
document.cookie = "theme=dark";
```

---

# 🎯 Bonus Questions Often Asked

### What is SEO-friendly HTML?

Using semantic tags, proper headings, alt attributes, and structured content to help search engines understand pages.

### Why is accessibility important?

Accessibility ensures websites can be used by everyone, including users with disabilities.

### What is the difference between HTML, CSS, and JavaScript?

| Technology | Purpose       |
| ---------- | ------------- |
| HTML       | Structure     |
| CSS        | Styling       |
| JavaScript | Functionality |

Think of a website as a house 🏠:

* **HTML** → Structure (walls, doors, rooms)
* **CSS** → Design (paint, furniture, decoration)
* **JavaScript** → Behavior (lights, switches, automation)

