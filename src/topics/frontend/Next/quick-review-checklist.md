# Next.js Developer Quick Review Checklist 🚀

Use this checklist to ensure code quality, performance, and best practices in
your Next.js projects.

---

### **1. Core Concepts** 🧠

- **What is Next.js?**
  - React framework for production with SSR, SSG, ISR, and API routes.
- **Key Features**
  - ⚡ SSR, SSG, ISR, Image Optimization, API Routes, Routing, Middleware.
- **Difference between Next.js & React**
  - Next.js provides SSR/SSG out of the box, file-based routing, API routes, and
    optimizations.

### **2. Rendering Strategies** 🖼️

- **Static Site Generation (SSG)**
  - 🏗️ Pages are pre-rendered at build time (`getStaticProps`).
- **Server-Side Rendering (SSR)**
  - 🌐 Pages are rendered on each request (`getServerSideProps`).
- **Incremental Static Regeneration (ISR)**
  - 🔄 Update static content after build (`revalidate` in `getStaticProps`).
- **Client-Side Rendering (CSR)**
  - 👩‍💻 Using `useEffect` + `useState` or SWR for data fetching.

### **3. Data Fetching Methods** 🔎

- `getStaticProps` (SSG)
- `getServerSideProps` (SSR)
- `getStaticPaths` (Dynamic SSG routes)
- `useSWR` (Client-side data fetching)

### **4. Routing** 🗺️

- **File-based Routing**
  - 📁 `pages/` directory structure defines routes.
- **Dynamic Routes**
  - 🔢 `pages/blog/[slug].js` → `getStaticPaths` + `getStaticProps`.
- **API Routes**
  - 🛠️ `pages/api/` for backend endpoints.
- **Middleware (Next.js 12+)**
  - 🚦 Intercept requests (`next.config.js` or `middleware.js`).

### **5. Performance Optimization** ⚡

- **Image Optimization (`next/image`)**
  - 🖼️ Automatic lazy loading, resizing, and modern formats.
- **Code Splitting & Lazy Loading**
  - 📦 Dynamic imports (`next/dynamic`).
- **Prefetching**
  - 🚀 Next.js automatically prefetches linked pages.
- **Static Assets & CDN**
  - 🌍 Serving optimized static files.

### **6. Styling in Next.js** 🎨

- **CSS Modules**
  - 🧩 Locally scoped styles.
- **Styled JSX**
  - 🎯 Built-in CSS-in-JS.
- **Tailwind CSS Integration**
  - 🐦 Popular utility-first CSS framework.
- **SASS/SCSS Support**
  - 💅 Built-in support for preprocessing.

### **7. Authentication** 🔐

- **NextAuth.js**
  - 🛡️ Popular auth library for Next.js.
- **JWT & Session Management**
  - 🔑 Secure authentication strategies.
- **OAuth Providers (Google, GitHub, etc.)**
  - 🌐 Social login integrations.

### **8. Deployment & CI/CD** 🚢

- **Vercel (Preferred Platform)**
  - ☁️ Optimized for Next.js.
- **Static Export (`next export`)**
  - 📦 Fully static sites.
- **Docker & Node.js Hosting**
  - 🐳 Deploying on AWS, Netlify, etc.

### **9. Advanced Concepts** 🧩

- **Middleware (Edge Functions)**
  - 🛣️ Run logic before a request completes.
- **Next.js Config (`next.config.js`)**
  - ⚙️ Custom webpack, redirects, rewrites.
- **Internationalization (i18n)**
  - 🌏 Built-in multi-language support.
- **Error Handling (404, 500 pages)**
  - 🚫 Custom error pages.

### **10. Differences Between Next.js 12, 13, and 14** 🆚

- **App Router vs Pages Router**
  - 🗂️ New `app/` directory (React Server Components, Streaming, Layouts).
- **Server Components & Client Components**
  - 🧮 Optimized component rendering.
- **Turbopack (Next.js 13+)**
  - ⚡ Faster dev server (alternative to Webpack).
