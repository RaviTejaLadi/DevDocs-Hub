import type { InterviewQA } from '..';

export const gitQuestions: InterviewQA[] = [
  {
    id: 'git-01',
    question: 'What is Git?',
    answer:
      'Git is a distributed version control system (DVCS) used for tracking changes in source code during software development. It is designed for speed, data integrity, and support for distributed, non-linear workflows.',
    topicId: 'git',
    level: 'entry',
    questionType: 'theory',
  },
  {
    id: 'git-02',
    question: 'What is the difference between Git and SVN?',
    answer:
      '- **Git is distributed:** Every developer has a full copy of the repository history. You can commit, branch, and merge locally without a network connection.\n- **SVN is centralized:** The history is stored on a single central server. Most operations require a connection to the server.\n- **Storage:** Git stores data as snapshots of a miniature filesystem; SVN stores data as differences (deltas) between files.',
    topicId: 'git',
    level: 'entry',
    questionType: 'theory',
  },
  {
    id: 'git-03',
    question: 'What is a Repository in Git?',
    answer:
      'A repository (or "repo") is a directory that contains all the project files and the entire revision history of those files. It is stored in a hidden `.git` folder.',
    topicId: 'git',
    level: 'entry',
    questionType: 'theory',
  },
  {
    id: 'git-04',
    question: 'What is a "Commit" in Git?',
    answer:
      'A commit is a snapshot of your repository at a specific point in time. It records changes made to the files and includes metadata like the author, date, and a commit message. Each commit is identified by a unique SHA-1 hash.',
    topicId: 'git',
    level: 'entry',
    questionType: 'theory',
  },
  {
    id: 'git-05',
    question: 'What is the "Staging Area" (or Index) in Git?',
    answer:
      'The staging area is an intermediate area where you prepare changes before committing them. It allows you to select specific changes to be included in the next commit, rather than committing everything in your working directory.',
    topicId: 'git',
    level: 'entry',
    questionType: 'theory',
  },
  {
    id: 'git-06',
    question: 'How do you initialize a new Git repository?',
    answer: '`git init` creates a new `.git` subdirectory in your current directory.',
    topicId: 'git',
    level: 'entry',
    questionType: 'theory',
  },
  {
    id: 'git-07',
    question: 'How do you check the status of your working directory and staging area?',
    answer:
      '`git status` shows which files have been modified, which are staged for the next commit, and which are untracked.',
    topicId: 'git',
    level: 'entry',
    questionType: 'theory',
  },
  {
    id: 'git-08',
    question: 'What is the difference between `git add .` and `git add -u`?',
    answer:
      '- `git add .`: Stages all changes in the current directory, including new (untracked) files and modified files.\n- `git add -u`: Stages only modifications and deletions to already tracked files. It does not add new files.',
    topicId: 'git',
    level: 'junior',
    questionType: 'theory',
  },
  {
    id: 'git-09',
    question: 'How do you commit changes with a message?',
    answer: '`git commit -m "Your commit message"`',
    topicId: 'git',
    level: 'entry',
    questionType: 'theory',
  },
  {
    id: 'git-10',
    question: 'How do you view the commit history?',
    answer: '`git log` displays the list of commits in reverse chronological order.',
    topicId: 'git',
    level: 'entry',
    questionType: 'theory',
  },
  {
    id: 'git-11',
    question: 'What is a "Branch" in Git?',
    answer:
      'A branch is essentially a lightweight, movable pointer to one of the commits. The default branch name in Git is usually `master` or `main`. Branching allows you to work on different features or fixes in isolation.',
    topicId: 'git',
    level: 'entry',
    questionType: 'theory',
  },
  {
    id: 'git-12',
    question: 'How do you create and switch to a new branch?',
    answer:
      'Create: `git branch <branch_name>`\nSwitch: `git checkout <branch_name>`\nCreate and Switch in one command: `git checkout -b <branch_name>` (or `git switch -c <branch_name>` in newer versions).',
    topicId: 'git',
    level: 'entry',
    questionType: 'theory',
  },
  {
    id: 'git-13',
    question: 'What is `git merge`?',
    answer:
      '`git merge` combines the changes from one branch into another. For example, merging a feature branch into the `main` branch.',
    topicId: 'git',
    level: 'entry',
    questionType: 'theory',
  },
  {
    id: 'git-14',
    question: 'Explain the difference between a "Fast-forward" merge and a "Three-way" merge.',
    answer:
      '- **Fast-forward:** Occurs when the target branch hasn\'t diverged from the source branch. Git simply moves the pointer forward to the latest commit of the source branch.\n- **Three-way merge:** Occurs when the branches have diverged. Git creates a new "merge commit" that has two parents, representing the combination of both histories.',
    topicId: 'git',
    level: 'junior',
    questionType: 'theory',
  },
  {
    id: 'git-15',
    question: 'What is a Merge Conflict and how do you resolve it?',
    answer:
      'A merge conflict occurs when Git cannot automatically reconcile differences in code between two branches (e.g., the same line was modified in both). \n\n**Resolution:**\n1.  Identify the conflicted files using `git status`.\n2.  Open the files and manually choose which changes to keep (look for `<<<<<<<`, `=======`, `>>>>>>>` markers).\n3.  Stage the resolved files with `git add`.\n4.  Complete the merge with `git commit`.',
    topicId: 'git',
    level: 'junior',
    questionType: 'theory',
  },
  {
    id: 'git-16',
    question: 'What is `git clone`?',
    answer:
      '`git clone <url>` creates a local copy of a remote repository. It downloads all the files, branches, and history.',
    topicId: 'git',
    level: 'entry',
    questionType: 'theory',
  },
  {
    id: 'git-17',
    question: 'What is a "Remote" in Git?',
    answer:
      'A remote is a version of your project that is hosted on the internet or another network. `origin` is the default name Git gives to the server you cloned from.',
    topicId: 'git',
    level: 'entry',
    questionType: 'theory',
  },
  {
    id: 'git-18',
    question: 'How do you push changes to a remote repository?',
    answer: '`git push <remote_name> <branch_name>` (e.g., `git push origin main`)',
    topicId: 'git',
    level: 'entry',
    questionType: 'theory',
  },
  {
    id: 'git-19',
    question: 'What is the difference between `git fetch` and `git pull`?',
    answer:
      '- **`git fetch`:** Downloads the latest changes from the remote repository but does not merge them into your local branches. It only updates your remote-tracking branches (e.g., `origin/main`).\n- **`git pull`:** A combination of `git fetch` followed by `git merge`. It downloads the changes and immediately tries to merge them into your current local branch.',
    topicId: 'git',
    level: 'junior',
    questionType: 'theory',
  },
  {
    id: 'git-20',
    question: 'What is `git stash` and when would you use it?',
    answer:
      "`git stash` temporarily shelves (or stashes) changes you've made to your working copy so you can work on something else, and then come back and re-apply them later. Useful when you need to switch branches but aren't ready to commit your current work.",
    topicId: 'git',
    level: 'junior',
    questionType: 'theory',
  },
  {
    id: 'git-21',
    question: 'How do you apply stashed changes?',
    answer:
      '- `git stash apply`: Applies the changes but keeps them in the stash.\n- `git stash pop`: Applies the changes and removes them from the stash.',
    topicId: 'git',
    level: 'junior',
    questionType: 'theory',
  },
  {
    id: 'git-22',
    question: 'What is `git rebase`?',
    answer:
      'Rebasing is the process of moving or combining a sequence of commits to a new base commit. It effectively "rewrites" history by applying your changes on top of another branch\'s latest commits. It results in a cleaner, linear project history.',
    topicId: 'git',
    level: 'mid',
    questionType: 'theory',
  },
  {
    id: 'git-23',
    question: 'Explain the difference between `git merge` and `git rebase`.',
    answer:
      '- **Merge:** Preserves the actual history of how and when things happened. Creates a merge commit. Non-destructive.\n- **Rebase:** Rewrites the project history by creating brand new commits for each commit in the original branch. Result is a linear history. Should be used with caution on public branches.',
    topicId: 'git',
    level: 'mid',
    questionType: 'theory',
  },
  {
    id: 'git-24',
    question: 'What is "Cherry-picking" in Git?',
    answer:
      '`git cherry-pick <commit_hash>` allows you to apply the changes from a specific commit from one branch onto your current branch. Useful for bringing in a specific fix or feature without merging the entire branch.',
    topicId: 'git',
    level: 'mid',
    questionType: 'theory',
  },
  {
    id: 'git-25',
    question: 'What is the purpose of `.gitignore`?',
    answer:
      'It is a text file that tells Git which files or directories to ignore and not track (e.g., `node_modules`, build artifacts, log files, or sensitive `.env` files).',
    topicId: 'git',
    level: 'entry',
    questionType: 'theory',
  },
  {
    id: 'git-26',
    question: 'How do you undo the last commit? (Keeping your changes)',
    answer: '`git reset --soft HEAD~1` \nThis removes the last commit but keeps the changes in your staging area.',
    topicId: 'git',
    level: 'mid',
    questionType: 'theory',
  },
  {
    id: 'git-27',
    question: 'How do you undo the last commit and discard all changes?',
    answer: '`git reset --hard HEAD~1` \n**Warning:** This permanently deletes your changes.',
    topicId: 'git',
    level: 'mid',
    questionType: 'theory',
  },
  {
    id: 'git-28',
    question: 'What is `git revert` and how is it different from `git reset`?',
    answer:
      '- **`git revert <commit_hash>`:** Creates a **new** commit that does the exact opposite of the specified commit. It is safe for public history as it doesn\'t rewrite it.\n- **`git reset`:** Moves the branch pointer to a previous commit, effectively "removing" commits from the history. It rewrites history.',
    topicId: 'git',
    level: 'mid',
    questionType: 'theory',
  },
  {
    id: 'git-29',
    question: 'What is `HEAD` in Git?',
    answer:
      '`HEAD` is a symbolic reference to the currently checked-out commit. Usually, it points to the tip of the current branch.',
    topicId: 'git',
    level: 'junior',
    questionType: 'theory',
  },
  {
    id: 'git-30',
    question: 'What is a "Detached HEAD"?',
    answer:
      'A detached HEAD state occurs when you check out a specific commit, tag, or remote branch instead of a local branch. You are no longer on a branch. Any commits you make in this state will be orphaned unless you create a new branch from them.',
    topicId: 'git',
    level: 'mid',
    questionType: 'theory',
  },
  {
    id: 'git-31',
    question: 'What is `git diff`?',
    answer:
      '`git diff` shows the differences between your working directory and the staging area (or between commits).',
    topicId: 'git',
    level: 'entry',
    questionType: 'theory',
  },
  {
    id: 'git-32',
    question: 'What is the purpose of `git rm`?',
    answer:
      '`git rm` removes files from the working directory and the index (staging area). To remove a file only from Git but keep it on your disk, use `git rm --cached <file>`.',
    topicId: 'git',
    level: 'junior',
    questionType: 'theory',
  },
  {
    id: 'git-33',
    question: 'What is a "Tag" in Git?',
    answer:
      'A tag is a permanent marker for a specific commit in history. It is often used to mark release points (e.g., `v1.0.0`). Unlike branches, tags do not move.',
    topicId: 'git',
    level: 'junior',
    questionType: 'theory',
  },
  {
    id: 'git-34',
    question: 'Explain the difference between Lightweight and Annotated tags.',
    answer:
      "- **Lightweight Tag:** Just a pointer to a commit (like a branch that doesn't move).\n- **Annotated Tag:** Stored as full objects in the Git database. They contain the tagger name, email, date, and a tagging message. Recommended for releases.",
    topicId: 'git',
    level: 'mid',
    questionType: 'theory',
  },
  {
    id: 'git-35',
    question: 'What is `git checkout` used for?',
    answer:
      '- Switching branches.\n- Restoring files from a specific commit or the staging area.\n- Creating new branches (with `-b`).',
    topicId: 'git',
    level: 'junior',
    questionType: 'theory',
  },
  {
    id: 'git-36',
    question: 'What is the purpose of `git config`?',
    answer:
      'It is used to set configuration options for your Git installation (e.g., username, email, editor, aliases). \n- `--global`: System-wide for the user.\n- `--local`: Specifically for the current repository.',
    topicId: 'git',
    level: 'entry',
    questionType: 'theory',
  },
  {
    id: 'git-37',
    question: 'What is a "Reflog" (`git reflog`) and why is it useful?',
    answer:
      'The reflog records every time the `HEAD` of a branch is updated in your local repository. It allows you to find commits that are no longer reachable by any branch or tag, making it a lifesaver for recovering "lost" work after a bad rebase or reset.',
    topicId: 'git',
    level: 'mid',
    questionType: 'theory',
  },
  {
    id: 'git-38',
    question: 'How do you rename a branch?',
    answer: '- Current branch: `git branch -m <new_name>`\n- Other branch: `git branch -m <old_name> <new_name>`',
    topicId: 'git',
    level: 'junior',
    questionType: 'theory',
  },
  {
    id: 'git-39',
    question: 'What is a "Fork" and how is it different from a "Clone"?',
    answer:
      '- **Clone:** Creates a local copy of a repository. You usually have write access to the original remote.\n- **Fork:** Creates a copy of a repository on the **server** (e.g., on GitHub). You own the fork but not the original project. You usually contribute back via Pull Requests.',
    topicId: 'git',
    level: 'junior',
    questionType: 'theory',
  },
  {
    id: 'git-40',
    question: 'What is a "Pull Request" (PR) or "Merge Request" (MR)?',
    answer:
      "A PR/MR is a way to propose changes you've made in a fork or branch to the original repository. It allows for code review and discussion before the code is merged.",
    topicId: 'git',
    level: 'junior',
    questionType: 'theory',
  },
  {
    id: 'git-41',
    question: 'What are "Git Hooks"?',
    answer:
      'Git hooks are scripts that Git executes before or after events such as `commit`, `push`, and `receive`. They are stored in the `.git/hooks` directory. Common uses include running linters or tests before a commit.',
    topicId: 'git',
    level: 'mid',
    questionType: 'theory',
  },
  {
    id: 'git-42',
    question: 'How do you see what is in a specific commit?',
    answer: '`git show <commit_hash>`',
    topicId: 'git',
    level: 'entry',
    questionType: 'theory',
  },
  {
    id: 'git-43',
    question: 'What is `git bisect`?',
    answer:
      '`git bisect` is a binary search tool used to find which commit introduced a bug. You mark a "bad" commit and a "good" commit, and Git checks out commits in between for you to test.',
    topicId: 'git',
    level: 'senior',
    questionType: 'theory',
  },
  {
    id: 'git-44',
    question: 'What is a "Submodule" in Git?',
    answer:
      'A submodule allows you to keep a Git repository as a subdirectory of another Git repository. This lets you clone another repo into your project and keep your commits separate.',
    topicId: 'git',
    level: 'senior',
    questionType: 'theory',
  },
  {
    id: 'git-45',
    question: 'How do you fix a mistake in your last commit message?',
    answer: '`git commit --amend -m "New message"`',
    topicId: 'git',
    level: 'junior',
    questionType: 'theory',
  },
  {
    id: 'git-46',
    question: 'What is "Squashing" commits?',
    answer:
      'Squashing is the process of combining multiple commits into a single commit. This is often done during an interactive rebase (`git rebase -i`) to clean up a feature branch before merging it.',
    topicId: 'git',
    level: 'mid',
    questionType: 'theory',
  },
  {
    id: 'git-47',
    question: 'What is `git remote prune origin`?',
    answer: 'It removes local references to branches that have been deleted on the remote repository (`origin`).',
    topicId: 'git',
    level: 'mid',
    questionType: 'theory',
  },
  {
    id: 'git-48',
    question: 'Explain the "Gitflow" workflow.',
    answer:
      'Gitflow is a popular branching model that uses specific branches for different purposes: `main` (production), `develop` (integration), `feature/*`, `release/*`, and `hotfix/*`. It provides a structured process for managing releases.',
    topicId: 'git',
    level: 'mid',
    questionType: 'theory',
  },
  {
    id: 'git-49',
    question: 'What is "Trunk-Based Development"?',
    answer:
      'A workflow where developers make small, frequent updates to a single branch (the "trunk", usually `main`). It avoids long-lived feature branches and emphasizes continuous integration.',
    topicId: 'git',
    level: 'mid',
    questionType: 'theory',
  },
  {
    id: 'git-50',
    question: 'How does Git store objects? Mention the types.',
    answer:
      'Git stores all content in its object database. The four types are:\n1.  **Blob:** Stores file content.\n2.  **Tree:** Stores directory structures and filenames, pointing to blobs or other trees.\n3.  **Commit:** Points to a tree and contains metadata (author, parents).\n4.  **Tag:** An object pointing to a commit, with its own metadata.',
    topicId: 'git',
    level: 'senior',
    questionType: 'theory',
  },
  {
    id: 'git-51',
    question: 'What is a "Dangling Commit"?',
    answer:
      "A dangling commit is a commit that is not reachable by any branch or tag. They usually result from rebasing or amending. Git's garbage collector (`git gc`) eventually removes them.",
    topicId: 'git',
    level: 'senior',
    questionType: 'theory',
  },
  {
    id: 'git-52',
    question: 'What is `git gc`?',
    answer:
      '`git gc` (garbage collector) cleans up unnecessary files and optimizes the local repository by compressing objects.',
    topicId: 'git',
    level: 'senior',
    questionType: 'theory',
  },
  {
    id: 'git-53',
    question: 'How do you see which branches contain a specific commit?',
    answer: '`git branch --contains <commit_hash>`',
    topicId: 'git',
    level: 'mid',
    questionType: 'theory',
  },
  {
    id: 'git-54',
    question: 'What is "Upstream" in Git?',
    answer:
      'The "upstream" branch is the remote branch that your local branch is tracking. For example, your local `main` usually tracks `origin/main`. You set it using `git branch --set-upstream-to=origin/main`.',
    topicId: 'git',
    level: 'junior',
    questionType: 'theory',
  },
  {
    id: 'git-55',
    question: 'How do you recover a file that was deleted and the deletion was committed?',
    answer: '`git checkout <commit_before_deletion> -- <file_path>`',
    topicId: 'git',
    level: 'junior',
    questionType: 'theory',
  },
  {
    id: 'git-56',
    question: 'What is the purpose of `git blame`?',
    answer: '`git blame <file>` shows who last modified each line of a file and in which commit.',
    topicId: 'git',
    level: 'junior',
    questionType: 'theory',
  },
  {
    id: 'git-57',
    question: 'What is a "Fast-Forward Only" merge policy?',
    answer:
      'A policy (often enforced on `main` branches) where merges are only allowed if they can be fast-forwarded. This forces developers to rebase their feature branches before merging, ensuring a linear history.',
    topicId: 'git',
    level: 'mid',
    questionType: 'theory',
  },
  {
    id: 'git-58',
    question: 'What is the "Three-way merge" algorithm actually doing?',
    answer:
      'It looks at three snapshots: the two branch tips and their "Common Ancestor" (the merge base). It applies the changes from both tips relative to the common ancestor.',
    topicId: 'git',
    level: 'expert',
    questionType: 'theory',
  },
  {
    id: 'git-59',
    question: 'How do you change the author of a specific commit in history?',
    answer:
      'You must use an interactive rebase (`git rebase -i`), mark the commit as `edit`, and then use `git commit --amend --author="Name <email>"`. **Warning:** This rewrites history.',
    topicId: 'git',
    level: 'expert',
    questionType: 'theory',
  },
  {
    id: 'git-60',
    question: 'What is `git bundle`?',
    answer:
      '`git bundle` packages a repository (or a subset of it) into a single file. This file can be moved and "cloned" from, similar to a remote, allowing for version control transfer over physical media or email without a network server.',
    topicId: 'git',
    level: 'expert',
    questionType: 'theory',
  },
];
