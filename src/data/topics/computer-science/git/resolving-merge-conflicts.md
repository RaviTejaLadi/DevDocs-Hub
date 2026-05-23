# ⚔️ Resolving Merge Conflicts

A **merge conflict** happens when Git gets confused and doesn't know how to
automatically combine code. This usually occurs when two people modify the exact
same line of the same file on different branches, or when one person deletes a
file that another person is editing. 💥

Don't panic! Merge conflicts are completely normal and part of every developer's
daily routine. Git doesn't guess what code is correct—it pauses the merge and
asks you to make the final decision.

---

## 🔍 What a Conflict Looks Like

When a conflict happens during a merge or rebase, Git prints a warning in your
terminal and injects specific **conflict markers** directly into the problematic
files.

Here is exactly how a conflicted file looks inside your text editor:

```text
<<<<<<< HEAD
<h1>Welcome to our Premium Store</h1>
=======
<h1>Welcome to our Super Shop</h1>
>>>>>>> feat-branding

```

Let's break down exactly what Git is showing you here:

- `<<<<<<< HEAD`: Marks the start of the conflicting changes on your **current
  branch** (where you are standing right now).
- `=======`: The dividing line. Everything above it is your code; everything
  below it is the incoming code.
- `>>>>>>> feat-branding`: Marks the end of the conflicting changes on the
  **incoming branch** you are trying to pull in.

---

## 🛠️ Step-by-Step Resolution Workflow

Resolving a conflict is simply a matter of editing the file to look exactly how
you want it, removing Git's tracking markers, and saving the result. 🧼

1. **Locate the conflicted files:** Run git status. Run `git status` in your
   terminal. Git will list all unmerged paths under a clear "Both Modified"
   heading.

2. **Open the file and make a choice:** Edit the code. Open the conflicted file
   in your text editor (like VS Code). Delete the conflict markers (`<<<<<<<`,
   `=======`, `>>>>>>>`) and keep the version of the code that belongs in the
   project. You can keep your changes, keep their changes, or write a custom
   combination of both.

3. **Stage your manual resolution:** Run git add. Save the file. Run
   `git add <filename>` to tell Git that you have successfully fixed the
   conflict in that file.

4. **Finalize the merge process:** Run git commit. Once all conflicts are
   staged, run a simple `git commit` without any flags. Git will automatically
   open a text editor with a default pre-written merge commit message. Save and
   close that file to cross the finish line!

---

## 🛑 How to Abort a Bad Merge

If you get deep into a multi-file conflict resolution, realize things are
getting completely tangled up, and want to hit the big panic button, you can
safely reset everything back to how it was before you typed `git merge`.

```bash
// Completely cancel the merge and restore your branch to its clean pre-merge state
git merge --abort

```

---
