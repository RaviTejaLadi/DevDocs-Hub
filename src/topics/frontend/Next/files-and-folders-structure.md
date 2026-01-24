# 📁 Next JS Project – Default Files and Folders structure

# Next.js Default Folder Structure

```bash
my-nextjs-app/
├── 📁 .next/                    # Build output directory (auto-generated)
├── 📁 .git/                     # Git repository files
├── 📁 node_modules/             # Dependencies (auto-generated)
├── 📁 public/                   # Static assets served from root
│   ├── 🖼️ favicon.ico
│   ├── 🖼️ next.svg
│   └── 🖼️ vercel.svg
├── 📁 src/                      # Source code directory (optional)
│   └── 📁 app/                  # App Router directory (Next.js 13+)
│       ├── 📄 globals.css       # Global stylesheets
│       ├── 📄 layout.tsx        # Root layout component
│       ├── 📄 loading.tsx       # Loading UI component
│       ├── 📄 not-found.tsx     # 404 page component
│       ├── 📄 error.tsx         # Error boundary component
│       └── 📄 page.tsx          # Home page component
├── 📄 .eslintrc.json           # ESLint configuration
├── 📄 .gitignore               # Git ignore rules
├── 📄 next.config.js           # Next.js configuration
├── 📄 package.json             # Project dependencies & scripts
├── 📄 package-lock.json        # Dependency lock file
├── 📄 README.md                # Project documentation
├── 📄 tailwind.config.ts       # Tailwind CSS configuration
└── 📄 tsconfig.json            # TypeScript configuration
```

## 🏗️ Key Directories Explained

### 📁 `app/` Directory (App Router)

The heart of your Next.js 13+ application using the new App Router:

```bash
app/
├── 📄 layout.tsx        # 🏠 Root layout wrapping all pages
├── 📄 page.tsx          # 🏡 Homepage (/) route
├── 📄 loading.tsx       # ⏳ Loading UI for async components
├── 📄 error.tsx         # ❌ Error boundary for error handling
├── 📄 not-found.tsx     # 🔍 Custom 404 page
├── 📄 globals.css       # 🎨 Global styles
│
├── 📁 about/            # 📋 /about route
│   └── 📄 page.tsx
│
├── 📁 blog/             # 📝 /blog route
│   ├── 📄 page.tsx      # Blog listing page
│   └── 📁 [slug]/       # Dynamic route for blog posts
│       └── 📄 page.tsx  # Individual blog post
│
└── 📁 api/              # 🔗 API routes
    └── 📁 hello/
        └── 📄 route.ts  # API endpoint at /api/hello
```

### 📁 `public/` Directory

Static assets served directly from the root URL:

```bash
public/
├── 🖼️ favicon.ico       # Browser tab icon
├── 🖼️ logo.png          # Your app logo
├── 📁 images/           # Image assets
│   ├── 🖼️ hero.jpg
│   └── 🖼️ avatar.png
└── 📁 icons/            # Icon files
    ├── 🖼️ apple-touch-icon.png
    └── 🖼️ android-chrome-192x192.png
```

## 🎯 Special Files & Their Purposes

| File            | Purpose                         | Icon |
| --------------- | ------------------------------- | ---- |
| `layout.tsx`    | Shared UI that wraps pages      | 🏠   |
| `page.tsx`      | Unique UI for a route           | 📄   |
| `loading.tsx`   | Loading UI for async operations | ⏳   |
| `error.tsx`     | Error UI boundary               | ❌   |
| `not-found.tsx` | 404 error page                  | 🔍   |
| `route.ts`      | API endpoint handler            | 🔗   |
| `middleware.ts` | Request/response middleware     | ⚙️   |

## 🛠️ Configuration Files

```bash
Root Level Configs:
├── 📄 next.config.js     # ⚙️ Next.js configuration
├── 📄 package.json       # 📦 Dependencies & scripts
├── 📄 tsconfig.json      # 📘 TypeScript settings
├── 📄 tailwind.config.ts # 🎨 Tailwind CSS config
├── 📄 .eslintrc.json     # ✅ Code linting rules
└── 📄 .env.local         # 🔐 Environment variables
```

## 🚀 Routing Examples

### File-based Routing Structure:

```bash
app/
├── 📄 page.tsx                    # → /
├── 📁 about/
│   └── 📄 page.tsx               # → /about
├── 📁 products/
│   ├── 📄 page.tsx               # → /products
│   └── 📁 [id]/
│       └── 📄 page.tsx           # → /products/[id]
└── 📁 dashboard/
    ├── 📄 layout.tsx             # Shared layout for dashboard
    ├── 📄 page.tsx               # → /dashboard
    ├── 📁 settings/
    │   └── 📄 page.tsx           # → /dashboard/settings
    └── 📁 analytics/
        └── 📄 page.tsx           # → /dashboard/analytics
```

## 📝 Notes

- **🆕 App Router**: Next.js 13+ uses the `app/` directory for routing
- **🔄 Pages Router**: Legacy Next.js uses `pages/` directory (still supported)
- **📂 `src/` Directory**: Optional wrapper for organizing source code
- **🏗️ `.next/`**: Auto-generated build files (never edit manually)
- **📦 `node_modules/`**: Installed dependencies (managed by npm/yarn)
- **🌐 `public/`**: Static files accessible via root URL (e.g., `/favicon.ico`)
