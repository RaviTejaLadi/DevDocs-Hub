# 🐙 GitHub Workflow

The **GitHub Workflow** (often called the GitHub Flow) is a lightweight,
branch-based workflow used by development teams worldwide. It provides a
structured, safe blueprint for deploying features and fixes to production
without disrupting the main codebase. 🗺️

---

## 🔁 The 6-Step Workflow Cycle

Whether you are working at a massive tech company or contributing to an
open-source project, you will follow this exact lifecycle sequence for almost
every single feature you build.

```mermaid
graph LR
    A[1. Create Branch] --> B[2. Add Commits]
    B --> C[3. Open Pull Request]
    C --> D[4. Discuss & Review]
    D --> E[5. Merge to Main]
    E --> F[6. Delete Branch]

```

---

## 🛠️ Walking Through the Workflow in Production

Let's break down exactly how this look in action inside your terminal and on the
GitHub dashboard:

### 1. Create a Feature Branch 🌿

Always keep your `main` branch clean and deployable. Before writing any code,
create a dedicated branch with a descriptive name.

```bash
// Switch to main and pull latest changes first
git checkout main
git pull origin main

// Create and switch to your feature branch
git checkout -b feat-user-profile

```

### 2. Make Changes and Commit Locally 💾

Write your code, style your components, and save your progress using small,
focused commits.

```bash
// Stage and save your progress locally
git add components/Profile.jsx
git commit -m "feat: add user profile avatar component"

```

### 3. Push and Open a Pull Request (PR) 🔃

Push your branch up to GitHub to share it with your team. Once uploaded,
navigate to the GitHub dashboard interface to open a **Pull Request**—a formal
request to merge your branch into `main`.

```bash
// Push your branch and link it upstream to GitHub
git push -u origin feat-user-profile

```

### 4. Code Review and Discussion 👀

Your team reviews your code line-by-line, runs automated tests, and leaves
feedback or suggestions directly on your PR. If they request changes, you simply
make the edits on your computer and push new commits to the same branch—the PR
updates automatically!

### 5. Merge to Main 🤝

Once your code is approved by a peer and passes all automated status checks,
click the green "Merge pull request" button on GitHub. Your feature branch
commits are seamlessly integrated into the production timeline.

### 6. Clean Up and Delete 🧹

To prevent your repository from turning into a graveyard of dead feature
branches, delete the remote branch directly on GitHub, then clean up your local
machine:

```bash
// Jump back to main, pull the merge, and delete your local branch
git checkout main
git pull origin main
git branch -d feat-user-profile

```

---
