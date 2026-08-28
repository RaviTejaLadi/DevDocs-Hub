# 🍒 Cherry Pick

Imagine your coworker builds an amazing utility function on their experimental
feature branch. You desperately need that exact feature in your own branch right
now. However, their branch also contains dozens of other unfinished changes that
would break your code if you merged the whole thing.

Instead of merging their entire branch, you can use **Git Cherry Pick** to grab
that single, specific commit and bring it over to your workspace.

### What is Git Cherry Pick?

Think of a Git repository as a **bunch of grapes**. Merging a branch means
taking the entire cluster, stems and all. **Cherry-picking** means reaching in,
plucking one perfect, ripe grape off the stem, and popping it into your own bowl
while leaving the rest of the cluster untouched.

```mermaid
graph TD
    subgraph Feature Branch
    F1[Commit: Add UI Button] --> F2[Commit: Fix Auth Helper] --> F3[Commit: Broken Experiment]
    end
    subgraph Your Main Branch
    M1[Commit: Init] --> M2[Commit: Setup Routing]
    end
    F2 -.->|git cherry-pick| M3[Commit: Fix Auth Helper]
    M2 --> M3

```

---

### How to Cherry-Pick a Commit

To steal a commit cleanly, you only need to complete three simple steps.

#### 1. Find the Commit ID

First, switch over to the branch that has the changes you want and view the
commit history to copy the unique SHA-1 commit hash.

```bash
// View a clean, one-line list of recent commits to find the hash
git log --oneline

```

_Output looks like this:_

> `a1b2c3d Fix bug in auth helper` > `e5f6g7h Messy experimental UI adjustments`

#### 2. Apply the Commit

Switch back to your destination branch and tell Git to pluck that specific
commit hash.

```bash
// Switch to your branch and apply the specific commit changes
git checkout main
git cherry-pick a1b2c3d

```

#### 3. Handle Conflicts (If They Happen)

If the code around that specific commit looks different in your branch, Git
might get confused and throw a conflict. Don't panic! Open your code editor, fix
the conflicting lines, and tell Git to keep moving forward.

```bash
// After fixing conflicts in your editor, save and resume the process
git add .
git cherry-pick --continue

```

If everything goes completely sideways and you want to pretend it never
happened, you can safely back out:

```bash
// Abort the cherry-pick and return your branch to exactly how it was
git cherry-pick --abort

```

---

### 💡 When to Avoid Cherry-Picking

While cherry-picking feels like a superpower, use it sparingly. It creates a
brand-new duplicate commit ID on your branch. If you cherry-pick too many
commits back and forth instead of doing proper branch merges, your Git history
can become confusing, messy, and difficult for teams to track.

---
