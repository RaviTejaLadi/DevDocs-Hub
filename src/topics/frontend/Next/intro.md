# 🚀 Introduction to Next.js

Next.js is a popular **React** framework that enables developers to build
**server-side rendered (SSR)**, **statically generated (SSG)**, and **hybrid**
web applications with ease. Created by **Vercel**, Next.js provides an
opinionated structure and powerful features out of the box.

---

## 🔑 **Key Features of Next.js**

1. **⚡ Server-Side Rendering (SSR)** – Render pages on the server for better
   **SEO** and **performance**.
2. **📦 Static Site Generation (SSG)** – Pre-render pages at build time for
   **blazing-fast** loading.
3. **🔄 Hybrid Rendering** – Mix **SSR, SSG, and client-side rendering** in one
   app.
4. **🗺️ File-Based Routing** – Automatic routes based on the `pages/` or `app/`
   directory.
5. **🌐 API Routes** – Build backend APIs **inside** your Next.js app.
6. **🖼️ Image Optimization** – Automatic optimization with `next/image`.
7. **🎨 CSS & Sass Support** – Built-in **CSS Modules** and **Sass** support.
8. **⌨ TypeScript Support** – Works seamlessly with **zero config**.

---

## 🛠 **Getting Started**

Create a new Next.js app with:

```bash
npx create-next-app@latest my-next-app
# or
yarn create next-app my-next-app
```

---

## 📖 **Basic Concepts**

### 📄 **Pages**

A page is a **React component** in the `pages/` directory. The filename
determines the route.

```jsx
// pages/about.js
export default function About() {
  return <div>About Us ✨</div>;
}
```

### 🔗 **Dynamic Routes**

Use `[square brackets]` for dynamic paths:

```jsx
// pages/posts/[id].js
export default function Post({ post }) {
  return <div>📄 {post.title}</div>;
}

export async function getServerSideProps(context) {
  const { id } = context.params;
  // Fetch post data
  return { props: { post } };
}
```

### 📡 **Data Fetching**

Next.js offers multiple ways to fetch data:

1. **`getStaticProps`** – Fetch at **build time** (SSG)
2. **`getServerSideProps`** – Fetch on **each request** (SSR)
3. **`getStaticPaths`** – Define dynamic routes for SSG

---

## ⚡ **Next.js 13+ & the App Router**

The latest versions introduce the **App Router** (`app/` directory) with:

- **📐 Layouts** – Persistent UI across routes
- **🔗 Nested Routing** – Better organization
- **⚡ React Server Components** – Faster data fetching
- **🌊 Streaming** – Progressive loading

```jsx
// app/page.js
export default function Home() {
  return <h1>🏠 Home Page</h1>;
}
```

---

## 🎯 **Why Next.js?**

✔ **Better SEO** (SSR/SSG)  
✔ **Faster Performance** (Automatic optimizations)  
✔ **Simpler Routing** (File-based)  
✔ **Full-Stack Capabilities** (API routes)  
✔ **Great Developer Experience (DX)**

Next.js keeps evolving, making it the **best choice** for modern web apps! 🚀🔥
