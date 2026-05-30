# 🔧 Git Workflow

Git is the most widely used version control system. It helps developers track changes, collaborate with teams, and safely manage code history.

## 🚀 Why Use Git?

Git helps you:

- Track code changes
- Collaborate with teams
- Restore previous versions
- Manage releases
- Work on features independently

Think of Git as a time machine for your code.

---

## 📦 Initialize a Repository

Create a new Git repository:

git init

Check repository status:

git status

---

## 📂 Git File Lifecycle

Working Directory
↓
Staging Area
↓
Repository

Commands:

git add
git commit

---

## ➕ Add Files

Add a single file:

git add app.js

Add all files:

git add .

Check staged files:

git status

---

## 💾 Create a Commit

Commit staged changes:

git commit -m "Add user authentication"

Commit message tips:

✅ Good

git commit -m "Fix login validation bug"

❌ Bad

git commit -m "Changes"

---

## 📜 View Commit History

Show history:

git log

Compact format:

git log --oneline

Example:

a12b3cd Fix login bug
f45g6hi Add dashboard page

---

## 🌍 Connect Remote Repository

Add remote:

git remote add origin https://github.com/user/project.git

Verify remote:

git remote -v

---

## ⬆️ Push Changes

Push first time:

git push -u origin main

Later:

git push

---

## ⬇️ Pull Changes

Download latest updates:

git pull

Fetch without merging:

git fetch

---

## 🌿 Branches

View branches:

git branch

Create branch:

git branch feature/auth

Switch branch:

git checkout feature/auth

Modern approach:

git switch feature/auth

---

## 🌱 Create and Switch Branch

git switch -c feature/auth

Equivalent to:

git branch feature/auth
git switch feature/auth

---

## 🔀 Merge Branches

Switch to main:

git switch main

Merge feature:

git merge feature/auth

---

## 🐛 Resolve Merge Conflicts

Example conflict:

<<<<<<< HEAD
const theme = "dark";
=======
const theme = "light";
>>>>>>> feature-branch

Choose desired code:

const theme = "dark";

Then:

git add .
git commit

---

## 🔄 Rebase

Apply commits on top of another branch:

git rebase main

Benefits:

- Cleaner history
- Fewer merge commits

Use carefully on shared branches.

---

## 🗑️ Delete Branch

Delete merged branch:

git branch -d feature/auth

Force delete:

git branch -D feature/auth

---

## ⏪ Undo Changes

Discard unstaged changes:

git restore file.js

Restore all:

git restore .

---

## ↩️ Unstage Files

Remove from staging:

git restore --staged file.js

---

## 🔙 Undo Last Commit

Keep changes:

git reset --soft HEAD~1

Remove changes:

git reset --hard HEAD~1

Use hard reset carefully.

---

## 🔖 Git Tags

Create tag:

git tag v1.0.0

List tags:

git tag

Push tag:

git push origin v1.0.0

Useful for releases.

---

## 📝 Git Ignore

Create:

.gitignore

Example:

node_modules
.env
dist
build
coverage

Prevents unnecessary files from being tracked.

---

## 🔍 Useful Inspection Commands

View differences:

git diff

View staged differences:

git diff --staged

See contributors:

git shortlog

Show specific commit:

git show commit_hash

---

## ⚛️ React Project Workflow

Typical workflow:

1. Pull latest code
2. Create feature branch
3. Build feature
4. Commit changes
5. Push branch
6. Create pull request
7. Code review
8. Merge to main

---

## 🚀 Recommended Branch Naming

Feature:

feature/user-profile

Bug Fix:

fix/login-error

Refactor:

refactor/auth-service

Documentation:

docs/api-guide

---

## 🔥 Conventional Commits

Feature:

feat: add dark mode

Bug Fix:

fix: resolve login issue

Refactor:

refactor: simplify auth logic

Documentation:

docs: update setup instructions

Benefits:

- Better changelogs
- Easier release automation

---

## 👥 Pull Request Checklist

Before creating PR:

- Code builds successfully
- Tests pass
- No console logs
- No unused imports
- Documentation updated
- Branch rebased with main

---

## 🧹 Cleanup Commands

Remove remote tracking branches:

git fetch --prune

View merged branches:

git branch --merged

Delete merged branches:

git branch -d branch-name

---

## 🚨 Common Mistakes

### Committed to Wrong Branch

Move commit:

git cherry-pick commit_hash

### Accidentally Added Sensitive Data

Remove quickly and rotate credentials.

### Force Push Problems

Avoid:

git push --force

Prefer:

git push --force-with-lease

Safer for teams.

---

## ⭐ Best Practices

- Commit small changes frequently
- Write meaningful commit messages
- Use feature branches
- Pull before pushing
- Review code before merging
- Protect main branch
- Use pull requests
- Keep history clean

A good Git workflow reduces bugs, improves collaboration, and makes project history easier to understand.