# Git Cheat Sheet

| **Category**        | **Command**                              | **Description**                                              |
| ------------------- | ---------------------------------------- | ------------------------------------------------------------ |
| **Setup**           | `git config --global user.name "Name"`   | Set your username globally.                                  |
|                     | `git config --global user.email "email"` | Set your email globally.                                     |
|                     | `git init`                               | Initialize a new Git repository.                             |
|                     | `git clone <repo-url>`                   | Clone a remote repository.                                   |
| **Status**          | `git status`                             | Show the working tree status.                                |
|                     | `git log`                                | Show commit logs.                                            |
|                     | `git log --oneline --graph`              | Compact commit history with branch graph.                    |
| **Branches**        | `git branch`                             | List all local branches.                                     |
|                     | `git branch <branch-name>`               | Create a new branch.                                         |
|                     | `git checkout <branch-name>`             | Switch to a branch.                                          |
|                     | `git checkout -b <branch-name>`          | Create and switch to a new branch.                           |
|                     | `git merge <branch-name>`                | Merge a branch into the current branch.                      |
|                     | `git branch -d <branch-name>`            | Delete a local branch.                                       |
| **Staging**         | `git add <file>`                         | Stage a specific file.                                       |
|                     | `git add .`                              | Stage all changes (new, modified, deleted).                  |
|                     | `git reset <file>`                       | Unstage a file.                                              |
| **Commits**         | `git commit -m "message"`                | Commit staged changes with a message.                        |
|                     | `git commit --amend`                     | Amend the last commit (modify message or files).             |
| **Remote**          | `git remote -v`                          | List remote repositories.                                    |
|                     | `git remote add <name> <url>`            | Add a new remote repository.                                 |
|                     | `git push <remote> <branch>`             | Push changes to a remote branch.                             |
|                     | `git pull <remote> <branch>`             | Fetch and merge changes from a remote branch.                |
|                     | `git fetch <remote>`                     | Fetch changes from remote (without merging).                 |
| **Undoing Changes** | `git restore <file>`                     | Discard unstaged changes in a file.                          |
|                     | `git reset --hard HEAD`                  | Discard all uncommitted changes (careful!).                  |
|                     | `git revert <commit-hash>`               | Revert a specific commit by creating a new commit.           |
| **Stashing**        | `git stash`                              | Temporarily stash changes.                                   |
|                     | `git stash pop`                          | Reapply stashed changes and remove from stash.               |
|                     | `git stash list`                         | List all stashed changes.                                    |
| **Tags**            | `git tag <tag-name>`                     | Create a lightweight tag.                                    |
|                     | `git tag -a <tag-name> -m "message"`     | Create an annotated tag.                                     |
|                     | `git push --tags`                        | Push all tags to remote.                                     |
| **Advanced**        | `git rebase <branch>`                    | Reapply commits on top of another branch (rewrites history). |
|                     | `git cherry-pick <commit-hash>`          | Apply a specific commit to the current branch.               |
|                     | `git diff`                               | Show unstaged changes.                                       |
|                     | `git diff --staged`                      | Show staged changes.                                         |
|                     | `git reflog`                             | Show a log of all Git actions (helps recover lost commits).  |

---

### **Common Workflow Examples**

1. **Create & Commit Changes**

   ```bash
   git add .
   git commit -m "Add new feature"
   git push origin main
   ```

2. **Undo Last Commit**

   ```bash
   git reset --soft HEAD~1  # Keeps changes staged
   git reset --hard HEAD~1  # Discards changes permanently
   ```

3. **Sync with Remote**

   ```bash
   git fetch origin
   git merge origin/main
   ```

4. **Fix a Mistake in Last Commit**
   ```bash
   git add .
   git commit --amend -m "New commit message"
   git push --force origin main  # Use with caution!
   ```

---

This cheat sheet covers most daily Git operations. Let me know if you'd like any
additions! 🚀
