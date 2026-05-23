# ♻️ Rebasing

**Rebasing** is an alternative way to integrate changes from one branch into
another. While merging ties two distinct timelines together with a new merge
commit, rebasing rewrites history by moving your entire feature branch so it
sits right on top of the latest commit on `main`. ⏳

---

## 🗺️ How Rebasing Works

Imagine you branch off `main` to build a feature. While you are working, a
teammate adds two new commits to `main`. Your branch is now out of date.

Instead of merging `main` into your feature branch (which creates an extra,
messy merge commit), you can **rebase**. Git will temporarily lift your feature
commits, slide the updated `main` branch under them, and then reapply your
feature commits one by one on top.

```mermaid
graph TD
    subgraph Before Rebase
    A[Base Commit] --> B[Commit on main]
    A --> C[Feature Commit]
    end

    subgraph After Rebase
    A2[Base Commit] --> B2[Commit on main] --> C2[Feature Commit rewritten]
    end

```

### The Big Benefit:

Your project history looks like a **perfectly straight line**, as if you built
your feature on top of the latest version of the project from the very start. 📏

---

## 🛠️ Rebasing in Action

To update your feature branch with the latest changes from `main` using rebase,
follow these commands:

```bash
// 1. Make sure you are standing on your feature branch
git checkout feat-auth

// 2. Rebase your current branch onto main
git rebase main

```

---

## ⚠️ The Golden Rule of Rebasing

Because rebasing rewrites the project's commit history (it generates brand-new
SHA-1 hashes for your moved commits), you must follow one strict safety rule:

> **Never rebase commits that you have already pushed to a public repository or
> shared with other developers.**

If you rewrite history that others are already using as a baseline, you will
break their local workspaces and cause massive synchronization head-scratching
for your team. Keep rebasing strictly for your **local cleanup** before you
share your work! 🛑

---
