# 📝 VS Code Tips

VS Code is one of the most popular code editors because of its speed, extensions, and developer-friendly features.

## 🚀 Essential Keyboard Shortcuts

### General

| Action | Windows/Linux | Mac |
|----------|----------|----------|
| Command Palette | Ctrl + Shift + P | Cmd + Shift + P |
| Quick Open File | Ctrl + P | Cmd + P |
| Settings | Ctrl + , | Cmd + , |
| Toggle Terminal | Ctrl + \` | Cmd + \` |

### Editing

| Action | Windows/Linux | Mac |
|----------|----------|----------|
| Duplicate Line | Shift + Alt + Down | Shift + Option + Down |
| Move Line Up/Down | Alt + Up/Down | Option + Up/Down |
| Delete Line | Ctrl + Shift + K | Cmd + Shift + K |
| Multi Cursor | Alt + Click | Option + Click |

---

## 🔍 Fast Navigation

### Go To File

Press:

Ctrl + P

Then type:

- File name
- Component name
- Folder name

Example:

App.tsx

### Go To Symbol

Press:

Ctrl + Shift + O

Useful for jumping to:

- Functions
- Variables
- Classes
- Interfaces

---

## ⚡ Multi Cursor Editing

Select multiple occurrences:

Ctrl + D

Example:

Before:

const userName = "";
console.log(userName);

Select all userName instances and edit together.

---

## 🎨 Useful Built-in Features

### Rename Symbol

Press:

F2

Updates references across project.

### Peek Definition

Press:

Alt + F12

View function implementation without leaving file.

### Go To Definition

Press:

F12

Jump directly to source.

---

## 🧩 Recommended Extensions

### Frontend

- ESLint
- Prettier
- Error Lens
- Tailwind CSS IntelliSense
- Auto Rename Tag
- Path Intellisense

### React

- ES7+ React Snippets
- React Developer Tools

### Git

- GitLens

### API Development

- Thunder Client
- REST Client

---

## 🔥 Command Palette

Press:

Ctrl + Shift + P

You can:

- Format Document
- Create Snippets
- Open Settings JSON
- Restart TypeScript Server
- Change Theme

Think of it as VS Code's search engine.

---

## 📂 Useful Explorer Tricks

### Collapse All Folders

Use explorer menu:

Collapse Folders

### Reveal Current File

Press:

Alt + Shift + R

Helps locate current file in project tree.

---

## 💻 Terminal Tips

### Open Terminal

Ctrl + \`

### Split Terminal

Click split icon or:

Ctrl + Shift + 5

Useful for:

- Running frontend
- Running backend
- Git commands

simultaneously.

---

## ⚙️ Useful Settings

### Format On Save

settings.json

{
  "editor.formatOnSave": true
}

### Auto Save

{
  "files.autoSave": "afterDelay"
}

### Word Wrap

{
  "editor.wordWrap": "on"
}

---

## 🧹 Keep Code Clean

Use:

- ESLint for linting
- Prettier for formatting
- TypeScript strict mode
- Organize Imports

Shortcut:

Shift + Alt + O

---

## 📌 Productivity Tips

### Zen Mode

Toggle:

Ctrl + K Z

Removes distractions.

### Split Editor

Ctrl + \\

Compare files side-by-side.

### Sticky Scroll

Shows current function while scrolling.

Enable:

Settings → Sticky Scroll

---

## 🚀 React Developer Tips

### Restart TypeScript Server

Command Palette:

TypeScript: Restart TS Server

Fixes many IntelliSense issues.

### Auto Import Components

Just type component name:

Button

VS Code automatically suggests import.

### Create React Component Quickly

Use snippets:

rafce

Creates:

const Component = () => {
  return <div>Component</div>;
};

export default Component;

---

## ⭐ Pro Workflow

1. Open project
2. Run terminal
3. Use GitLens for history
4. Enable format on save
5. Use Ctrl + P for navigation
6. Use F2 for refactoring
7. Use multi-cursor editing
8. Commit changes frequently

Following these habits can save hours every week.
