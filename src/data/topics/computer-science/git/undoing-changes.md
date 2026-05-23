# ↩️ Undoing Changes

No matter how experienced you are, you will eventually make a mistake. Git
provides a safety net with multiple commands to undo your changes, depending on
exactly how far down the rabbit hole you have gone. 🎛️

---

## 🛑 Scenario 1: Discarding Local Uncommitted Changes

You have been hacking away at a file, completely broken it, and want to throw
away your recent modifications to start fresh from your last saved milestone.

```bash
// Discard all uncommitted modifications in a specific file
git checkout -- app.js

```

> 💡 **Modern Alternative:** In newer versions of Git, you can also use
> `git restore app.js` to accomplish the exact same thing. Be careful! Discarded
> local changes are permanently erased from your hard drive.

---

## 📥 Scenario 2: Unstaging a File

You ran `git add .`, but realized you accidentally staged a configuration file
or a massive asset that you are not ready to commit yet. You want to pull it out
of the staging box but keep your local modifications intact.

```bash
// Remove a file from the staging area while keeping your code edits
git reset HEAD secret.config

```

---

## 🕒 Scenario 3: Modifying Your Last Commit

You just committed your code, but instantly realized you made a glaring typo in
your commit message, or forgot to stage a tiny styling fix that belonged in that
exact save snapshot.

```bash
// Add a forgotten file to the staging area first
git add forgotten-file.css

// Merge the staged change directly into your last commit and rewrite the message
git commit --amend -m "feat: complete login layout and styles"

```

---

## ⏪ Scenario 4: Reverting an Old Commit Safely

You pushed a feature three days ago, and your team just discovered it breaks
production. You cannot wipe out the project history because other developers
have built on top of it. You need to cleanly roll back that specific past
milestone.

The `git revert` command creates a brand-new commit that does the **exact
opposite** of the target commit, neatly neutralizing the old bug without
altering history. 🛡️

```bash
// Create a new commit that reverses the changes of a past commit
git revert 7a12d90

```

```mermaid
graph LR
    A[Commit 1] --> B[Commit 2: Added Buggy Feature]
    B --> C[Commit 3: Normal Work]
    C --> D[Commit 4: Revert Commit 2]
    style D fill:#f44336,stroke:#333,stroke-width:2px

```

---
