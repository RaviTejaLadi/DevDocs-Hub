# DevDocs-Hub Project Standards

## 🏗️ Architecture

- **Framework:** React 19 + Vite + TypeScript.
- **Routing:** React Router v7 (SPA with client-side routing). Routes are
  defined in `src/app/routes`.
- **State Management:** Zustand is used for global application layout and UI
  state (`src/stores`).
- **Styling:** Tailwind CSS 4 with `clsx` and `tailwind-merge` for utility-first
  styling and dynamic class composition.
- **UI Components:** Built on Radix UI primitives, following the shadcn/ui
  pattern. Located in `src/components/ui`.
- **Features:** Business logic and feature-specific components are organized
  under `src/features/`.
- **Data Layer:** Documentation content is managed in `src/data/topics`. Each
  "Stream" (e.g., Computer Science) has its own subdirectory.

## 📝 Content Management

- **Format:** Content is written in MDX (`.mdx`).
- **Loading:** Currently, content is imported as raw strings (`?raw`).
- **Registry:** Topics are registered in `src/data/topics/index.tsx` and
  exported via the `TOPICS` array.
- **Conventions:**
  - Use kebab-case for content filenames and directories.
  - Each topic must have a globally unique `id`.

## 🛠️ Development Workflow

- **Linting:** ESLint with TypeScript and React Hooks support.
- **Formatting:** Prettier for consistent code style.
- **Icons:** Use `lucide-react` for general icons.

## 🔍 Search Implementation

- **Mechanism:** Client-side search that iterates through the `TOPICS` data
  structure.
- **Ranking:** Custom scoring algorithm in `NavBar.tsx` based on title,
  category, and content matches.

## 📱 Responsiveness

- Mobile-first approach.
- Sidebar uses `Sheet` (Radix UI) for mobile navigation.
- Desktop sidebar is collapsible and integrated with the main layout.
