# Revise Stack

**Revise Stack** is a modern, lightning-fast documentation platform that hosts
high-quality learning resources across **computer science, engineering,
sciences, aptitude, and more**. It's a centralized hub for structured revision
notes, interview Q&A, interactive visualizations, coding playgrounds, and
in-depth guides — all in a distraction-free environment.

Built by [Ravi Teja Ladi](https://github.com/RaviTejaLadi). Available at
[revise-stack.vercel.app](https://revise-stack.vercel.app).

---

## Features

- **📚 Multi-Stream Documentation** — 10 academic streams covering Computer
  Science (HTML, CSS, JS, TS, React, Vue, Next.js, Node, Python, Java, DSA,
  System Design, Cloud, DevOps, Git, Databases), Mechanical, Electrical,
  Electronics, Civil, Chemical Engineering, Basic Science, Data Science & AI,
  Cybersecurity, and Aptitude & Placement.
- **🔍 Global Search** — Cmd+K / Ctrl+K fuzzy search across all documentation
  with ranked results, keyword matching, and instant navigation.
- **📖 In-Depth Guides** — Curated MDX guides for JavaScript, React, and
  Architectures with textual, question, and roadmap formats.
- **❓ Interview Q&A** — 19 topic modules (HTML, CSS, JS, TS, React, Next.js,
  Node, Python, Go, SQL, MongoDB, Docker, AWS, Git, Testing, React Native,
  System Design, DSA) with categorized questions and difficulty levels.
- **📊 Interactive Visualizations** — 19 runnable JS concept visualizations
  (event loop, call stack, closures, recursion, data structures, and more).
- **💻 Live Code Editor** — Sandpack-powered in-browser code editor with file
  tabs and live preview.
- **🧪 Playgrounds** — Interactive coding playgrounds (JS Arrays, JS Objects).
- **🔄 Workflow Canvas** — React Flow-based interactive diagrams with preset
  roadmaps.
- **🌗 Dark / Light Mode** — System-preference-aware theme toggle with
  persistent localStorage.
- **📱 Fully Responsive** — Mobile-first with slide-out drawer sidebar and
  collapsible desktop sidebar.
- **⚡ Blazing Fast** — Vite-powered with lazy-loaded routes, code splitting,
  and instant page transitions.
- **🧠 Context-Aware Sidebar** — Auto-adjusts to show only the relevant
  subtopics for the current stream.
- **📋 One-Click Copy** — Every code block has a copy-to-clipboard button.

---

## Tech Stack

| Layer          | Technology                                        |
| -------------- | ------------------------------------------------- |
| **Framework**  | React 19                                          |
| **Language**   | TypeScript 5.9                                    |
| **Build Tool** | Vite 7                                            |
| **Routing**    | React Router DOM v7                               |
| **Styling**    | Tailwind CSS v4, shadcn/ui (New York)             |
| **State**      | Zustand 5                                         |
| **Content**    | MDX, react-markdown, rehype-highlight, remark-gfm |
| **Code**       | Sandpack, CodeMirror                              |
| **Diagrams**   | Mermaid 11, React Flow (xyflow)                   |
| **Icons**      | Lucide React + custom SVG icons                   |
| **SEO**        | react-helmet-async, JSON-LD schema                |
| **Fonts**      | Inter (UI), JetBrains Mono (code)                 |
| **Deployment** | Vercel                                            |

---

## Getting Started

### Prerequisites

- Node.js v18+
- npm or yarn

### Installation

```bash
git clone https://github.com/RaviTejaLadi/revise-stack
cd revise-stack
npm install
npm run dev
```

The dev server starts on `http://localhost:1234`.

### Build for Production

```bash
npm run build
```

This runs TypeScript type-checking, Vite production build, and sitemap
generation.

---

## Project Structure

```
src/
├── app/                  # App shell, routing, providers
├── components/           # Shared UI (layout, markdown, theme, SEO, shadcn)
├── constants/            # Colors, layout constants
├── data/                 # All content
│   ├── topics/           # 10 streams of documentation content
│   ├── guides/           # MDX guide content
│   ├── interviewQuestions/ # Interview Q&A by topic
│   └── workflow-presets/ # Workflow canvas presets
├── features/             # Feature modules (landing, docs, guides, viz, playground, etc.)
├── hooks/                # Shared React hooks
├── lib/                  # Utilities (cn(), SEO config, JSON-LD)
├── stores/               # Zustand stores
├── styles/               # CSS (theme, markdown, animations)
└── types/                # TypeScript type definitions
```

---

## Deployment

The project is pre-configured for Vercel with SPA rewrites (`vercel.json`).

```bash
npm i -g vercel
vercel
vercel --prod
```

Update the `homepage` field in `package.json` after deployment.

---

## Roadmap

- [x] Core platform UI (sidebar, navbar, content viewer)
- [x] Dark / light mode with system preference
- [x] Mobile responsiveness with drawer navigation
- [x] Global fuzzy search across all docs
- [x] MDX guide support
- [x] Interactive visualizations (19 concepts)
- [x] Interview Q&A (19 topics)
- [x] Live code editor (Sandpack)
- [x] Playgrounds
- [x] Workflow canvas (React Flow)
- [x] Multi-stream documentation (10 streams)
- [ ] Progress tracking (bookmark topics as "Completed")
- [ ] User accounts & sync

---

## Contributing

Contributions are welcome.

1. Fork the repo
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## License

Distributed under the MIT License. See `LICENSE` for details.

---

**Revise Stack** — _Code. Learn. Build._
