# ⌨️ Essential Git Commands

When working with Git daily, you will find yourself using a core group of
commands over and over again. Master these essential commands, and you will
easily handle 90% of your local version control tasks. 🚀

---

## 🛠️ The Essential Cheat Sheet

Here is a quick-reference breakdown of the most common commands you will run
right inside your terminal:

| Command               | What it does                                     | When to use it                                |
| --------------------- | ------------------------------------------------ | --------------------------------------------- |
| `git init`            | Creates a brand new local repository             | When starting a fresh project                 |
| `git status`          | Shows modified, staged, and untracked files      | Run this constantly to see where things stand |
| `git add <file>`      | Moves specific file changes to the staging area  | When prepping your files for a save           |
| `git add .`           | Moves all local changes to the staging area      | When you want to stage everything at once     |
| `git commit -m "..."` | Permanently saves staged changes to history      | When you reach a working milestone            |
| `git log --oneline`   | Displays a compressed, clean timeline of commits | When reviewing recent project history         |

---

## 🏃‍♂️ Running a Complete Local Sequence

Let's see how these commands chain together in a real-world project lifecycle.
Imagine you are starting a new project from scratch:

```bash
// 1. Create and step into a new project folder
mkdir my-cool-app && cd my-cool-app

// 2. Turn the folder into a Git repository
git init

// 3. Create a starter file
echo "hello world" > index.html

// 4. Check that Git sees your new untracked file
git status

// 5. Move the file into your staging area
git add index.html

// 6. Permanently save your snapshot to the history database
git commit -m "initial commit: create index.html"

// 7. Review your clean, one-line commit history
git log --oneline

```

---

> 💡 **Pro Tip:** Make running `git status` your default muscle memory. Running
> it before you add files and right before you commit saves you from
> accidentally committing code or massive node modules you didn't mean to track!

---
