# 📘 Revise Stack

**Revise Stack** is a modern, fast, and responsive documentation platform
designed to host high-quality learning resources for web technologies. From the
fundamentals of **HTML & CSS** to advanced **React** patterns and so on...,
Revise Stack provides a clean, distraction-free environment for developers to
master their craft.

## 🚀 About The Project

Revise Stack was built to solve the problem of scattered coding tutorials. It
acts as a centralized repository where developers can find structured,
easy-to-read documentation.

**Key Goals:**

- **Centralization:** One place for HTML, CSS, React, and other tech stack
  guides.
- **Readability:** A UI focused purely on content consumption with excellent
  typography and syntax highlighting.
- **Speed:** Instant navigation between topics without page reloads.

## ✨ Key Features

- **📚 Multi-Technology Support:** Organized sections for HTML, CSS, JavaScript,
  React, and more.
- **🎨 Dark Mode Native:** Built-in dark mode toggle for late-night coding
  sessions.
- **📱 Fully Responsive:** Mobile-first architecture featuring a smooth
  slide-out drawer menu for learning on the go.
- **⚡ Blazing Fast:** Powered by Vite and React Router for immediate page
  transitions.
- **🌈 Syntax Highlighting:** Beautiful code blocks (VS Code Dark Plus theme)
  for better code readability.
- **📋 One-Click Copy:** Easily copy code snippets to your clipboard.
- **🧠 Context-Aware Navigation:** Sidebar automatically adjusts to show only
  the subtopics relevant to the technology you are currently studying.

## 🛠️ Tech Stack

- **Frontend Framework:** React 18
- **Language:** TypeScript
- **Styling:** Tailwind CSS (with `clsx` & `tailwind-merge`)
- **Routing:** React Router DOM v6
- **Content Rendering:** React Markdown & Syntax Highlighter
- **Icons:** Lucide React

## 🏁 Getting Started

Follow these steps to set up Revise Stack locally on your machine.

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/RaviTejaLadi/DevDocs-Hub
cd DevDocs-Hub

```

2. **Install dependencies**

```bash
npm install

```

3. **Start the development server**

```bash
npm run dev

```

4. Open your browser and navigate to `http://localhost:1234`.

## 📝 How to Add Content

Revise Stack is designed to be easily extensible. All content is managed in the
`TOPICS` data structure (located in `Platform.tsx` or separated into
`src/data/content.ts`).

To add a new technology (e.g., TypeScript):

1. Open the data file.
2. Add a new entry to the `TOPICS` array:

```javascript
{
  id: "typescript",
  title: "TypeScript",
  description: "JavaScript with syntax for types.",
  icon: <FileCode />,
  color: "text-blue-600",
  items: [
    {
      id: "basics",
      title: "The Basics",
      content: "# TypeScript Basics\n\nTypeScript is a strongly typed superset of JavaScript..."
    }
  ]
}

```

## 🗺️ Roadmap

- [x] Core Platform UI (Sidebar, Navbar, Content Viewer)
- [x] Dark/Light Mode
- [x] Mobile Responsiveness
- [ ] **Search Functionality:** Enhanced full-text search across all docs.
- [ ] **MDX Support:** Allow interactive React components inside documentation.
- [ ] **Progress Tracking:** Allow users to mark topics as "Completed".

## 🤝 Contributing

Contributions make the open-source community an amazing place to learn, inspire,
and create. Any contributions you make to **Revise Stack** are **greatly
appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

**Revise Stack** — _Code. Learn. Build._
