# App Router Interview Questions & Answers 🚀

### 1. **What do you create a route at app-based routing in Next.js?** 🛣️

**Answer:**

- Create a directory inside the `app` folder and add a `page.jsx` file.
- Example:
  ```plaintext
  app/page.jsx        →  `/`
  app/blog/page.jsx   →  `/blog`
  ```

---

### 2. **How do you handle CORS in Next.js API routes?** 🔄

**Answer:**

- By setting headers in the API route handlers.
- Example:
  ```javascript
  export default function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json({ message: 'CORS enabled!' });
  }
  ```

---

### 3. **What is the purpose of rewrites in `next.config.js`?** 🔀

**Answer:**

- To map an incoming request path to a different destination path.
- Useful for proxying, masking URLs, or redirecting without changing the browser
  URL.

---

### 4. **How do you manage cookies in Next.js?** 🍪

**Answer:**

- Using libraries like:
  - `cookie` (server-side)
  - `js-cookie` (client-side)
- Example (Server-Side):
  ```javascript
  import { serialize } from 'cookie';
  res.setHeader('Set-Cookie', serialize('token', '123', { path: '/' }));
  ```

---

### 5. **What is `next-pwa` used for?** 📱➡️🔌

**Answer:**

- To configure and enable **Progressive Web App (PWA)** features in Next.js.
- Adds offline support, caching, and installability.

---

### 6. **What is the `next-sitemap` package used for?** 🗺️

**Answer:**

- Generates **sitemaps** for a Next.js application.
- Improves SEO by helping search engines index pages efficiently.

---

Let me know if you'd like any refinements! 🚀
