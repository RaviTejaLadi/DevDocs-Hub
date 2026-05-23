# 📂 Submodules

Imagine you are building a fleet of web apps, and they all need to use the exact
same custom UI design system or internal helper library. Copy-pasting that
shared code into five different repositories would create a maintenance
nightmare when making future updates.

**Git Submodules** allow you to embed an entire separate Git repository as a
subdirectory inside your main project repository, while keeping their commit
histories completely independent.

### What is a Git Submodule?

Think of your main repository as a **digital folder**. Embedding a submodule is
like placing a **live shortcut pointer** inside that folder instead of copying
raw files. The main project doesn’t own the embedded code; it just tracks a
specific commit ID of that external repository, knowing exactly which version to
load.

```mermaid
graph TD
    subgraph Main Project Repository
    M1[Source Code]
    M2[Assets]
    S[Submodule Folder Pointer]
    end

    subgraph External Design System Repository
    E1[Buttons.tsx]
    E2[Theme.css]
    end

    S -.->|Points to Commit a1b2c3d| External Design System Repository

```

---

### Core Submodule Workflow

Working with repositories inside other repositories requires a few unique
commands to keep everything in sync.

#### 1. Adding a Submodule

To embed an existing external repository into your project, use the
`submodule add` command followed by the repository URL and your desired folder
path.

```bash
// Embed an external UI library into a local shared folder
git submodule add https://github.com/company/design-system.git src/shared/ui

```

This action downloads the repository and creates a hidden configuration file
named `.gitmodules` at the root of your project to keep track of the link.

#### 2. Cloning a Project with Submodules

If you clone a repository that already contains submodules, Git will leave the
submodule folders completely empty by default. You have to explicitly tell Git
to initialize and download the missing contents.

```bash
// Initialize and download all nested submodules after cloning
git submodule update --init --recursive

```

_Alternatively, you can do this all in one single step when you run your initial
clone:_

```bash
// Clone the main repository and automatically fetch its submodules
git clone --recursive https://github.com/company/main-app.git

```

#### 3. Pulling Updates from a Submodule

If your team updates the external repository, your main project won't
automatically see those updates. You need to pull the changes down inside that
specific directory.

```bash
// Navigate into the submodule directory and fetch the latest main branch
cd src/shared/ui
git pull origin main

```

---

### 💡 Quick Tips for Managing Submodules

- **Always commit the pointer change:** When you update a submodule, Git
  registers a change in the main project stating that the folder is now pointing
  to a newer commit ID. Don't forget to commit and push that pointer change so
  your team gets the updated version!
- **Submodules vs. npm Packages:** If the shared code changes rarely and is
  public, publish it as an npm package instead. If the shared code changes
  frequently alongside your main app and lives in private repositories, Git
  Submodules are a great choice.

---
