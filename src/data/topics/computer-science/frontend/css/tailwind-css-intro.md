# 🌬️ Tailwind CSS Introduction

**Tailwind CSS** is a utility-first CSS framework that lets you build modern
user interfaces directly in your HTML using small, reusable utility classes.

Instead of writing custom CSS for every component, you compose designs using
predefined classes.

---

# 🎯 Why Tailwind CSS?

Traditional CSS:

```html
<div class="card">Product Card</div>
```

```css
.card {
  padding: 1rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}
```

---

Tailwind CSS:

```html
<div class="p-4 bg-white rounded-xl shadow">Product Card</div>
```

No separate CSS file required.

---

# 🧠 How Tailwind Works

```mermaid
flowchart LR

    Utilities["Utility Classes"]

    Component["Build Component"]

    UI["Final UI"]

    Utilities --> Component --> UI
```

---

# 🚀 Installing Tailwind CSS

## Using Vite (Recommended)

Create a project:

```bash
npm create vite@latest
```

Install Tailwind:

```bash
npm install tailwindcss @tailwindcss/vite
```

---

Configure Vite:

```javascript
// vite.config.js
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [tailwindcss()],
});
```

---

Import Tailwind:

```css
/* src/index.css */
@import 'tailwindcss';
```

---

# 📦 Utility Classes

Tailwind provides small utility classes.

Example:

```html
<div
  class="
    p-4
    bg-blue-500
    text-white
    rounded-lg
  "
>
  Hello Tailwind
</div>
```

---

# Utility Class Breakdown

```mermaid
flowchart TB

    Div["Component"]

    Padding["p-4"]

    Background["bg-blue-500"]

    Text["text-white"]

    Radius["rounded-lg"]

    Div --> Padding
    Div --> Background
    Div --> Text
    Div --> Radius
```

---

# 🎨 Colors

Tailwind ships with a rich color palette.

```html
<div class="bg-blue-500">Blue</div>

<div class="bg-red-500">Red</div>

<div class="bg-green-500">Green</div>
```

---

# Color Scale

```mermaid
flowchart LR

    Light["100"]

    Medium["500"]

    Dark["900"]

    Light --> Medium --> Dark
```

Example:

```html
bg-blue-100 bg-blue-500 bg-blue-900
```

---

# 📏 Spacing

Spacing utilities use a scale.

```html
<div class="p-4">Padding</div>

<div class="m-4">Margin</div>
```

---

## Common Spacing Values

| Class | Value |
| ----- | ----- |
| p-1   | 4px   |
| p-2   | 8px   |
| p-4   | 16px  |
| p-6   | 24px  |
| p-8   | 32px  |

---

# 🔤 Typography

Font size:

```html
<h1 class="text-4xl">Heading</h1>
```

Font weight:

```html
<p class="font-bold">Bold Text</p>
```

Text alignment:

```html
<p class="text-center">Centered Text</p>
```

---

# Typography Structure

```mermaid
flowchart TB

    Typography

    Size["Text Size"]

    Weight["Font Weight"]

    Align["Alignment"]

    Typography --> Size
    Typography --> Weight
    Typography --> Align
```

---

# 📦 Width & Height

```html
<div class="w-full">Full Width</div>

<div class="h-screen">Full Height</div>
```

---

## Common Utilities

```html
w-full w-1/2 w-1/3 h-screen h-full
```

---

# 🎯 Flexbox Utilities

Tailwind makes Flexbox easy.

```html
<div
  class="
    flex
    justify-center
    items-center
  "
>
  Centered Content
</div>
```

---

# Flexbox Structure

```mermaid
flowchart LR

    Flex["flex"]

    Justify["justify-center"]

    Align["items-center"]

    Flex --> Justify
    Flex --> Align
```

---

# ⬛ Grid Utilities

```html
<div
  class="
    grid
    grid-cols-3
    gap-4
  "
>
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
```

---

# Grid Layout

```mermaid
flowchart LR

    A["Col 1"]

    B["Col 2"]

    C["Col 3"]

    A --- B --- C
```

---

# 📱 Responsive Design

Tailwind uses mobile-first breakpoints.

| Prefix | Screen Size |
| ------ | ----------- |
| sm:    | ≥ 640px     |
| md:    | ≥ 768px     |
| lg:    | ≥ 1024px    |
| xl:    | ≥ 1280px    |
| 2xl:   | ≥ 1536px    |

---

## Example

```html
<div
  class="
    w-full
    md:w-1/2
    lg:w-1/3
  "
>
  Card
</div>
```

---

# Responsive Flow

```mermaid
flowchart LR

    Mobile["Mobile"]

    Tablet["Tablet"]

    Desktop["Desktop"]

    Mobile --> Tablet --> Desktop
```

---

# 🌙 Dark Mode

Enable dark mode easily.

```html
<div
  class="
    bg-white
    dark:bg-gray-900
    text-black
    dark:text-white
  "
>
  Content
</div>
```

---

# Dark Mode Structure

```mermaid
flowchart LR

    Theme["Theme"]

    Light["Light"]

    Dark["Dark"]

    Theme --> Light
    Theme --> Dark
```

---

# ✨ Hover Effects

```html
<button
  class="
    bg-blue-500
    hover:bg-blue-700
    text-white
    px-4
    py-2
  "
>
  Click Me
</button>
```

---

# State Variants

```mermaid
flowchart TB

    Button

    Hover["hover:"]

    Focus["focus:"]

    Active["active:"]

    Disabled["disabled:"]

    Button --> Hover
    Button --> Focus
    Button --> Active
    Button --> Disabled
```

---

# 🎨 Building a Card Component

```html
<div
  class="
    max-w-sm
    rounded-xl
    shadow-lg
    p-6
    bg-white
  "
>
  <h2 class="text-xl font-bold">Product</h2>

  <p class="text-gray-600">Product description.</p>

  <button
    class="
      mt-4
      bg-blue-500
      text-white
      px-4
      py-2
      rounded
    "
  >
    Buy Now
  </button>
</div>
```

---

# Component Composition

```mermaid
flowchart TB

    Card

    Header

    Description

    Button

    Card --> Header
    Card --> Description
    Card --> Button
```

---

# 🎯 Customizing Tailwind

Tailwind can be extended.

```css
@theme {
  --color-brand: #2563eb;
}
```

Usage:

```html
<div class="bg-brand">Brand Color</div>
```

---

# 🔥 Common Utility Categories

| Category   | Examples        |
| ---------- | --------------- |
| Layout     | flex, grid      |
| Spacing    | p-4, m-4        |
| Colors     | bg-blue-500     |
| Typography | text-xl         |
| Borders    | border, rounded |
| Effects    | shadow-lg       |
| Transforms | scale-110       |
| Animation  | animate-spin    |

---

# 🎯 Common Tailwind Animations

Spinner:

```html
<div class="animate-spin">🔄</div>
```

Pulse:

```html
<div class="animate-pulse">Loading...</div>
```

Bounce:

```html
<div class="animate-bounce">⬇️</div>
```

---

# Animation Flow

```mermaid
flowchart LR

    Spin["animate-spin"]

    Pulse["animate-pulse"]

    Bounce["animate-bounce"]
```

---

# ⚡ Advantages of Tailwind

```mermaid
flowchart TB

    Tailwind

    Fast["Fast Development"]

    Reusable["Reusable"]

    Responsive["Responsive"]

    Consistent["Consistent Design"]

    Tailwind --> Fast
    Tailwind --> Reusable
    Tailwind --> Responsive
    Tailwind --> Consistent
```

Benefits:

✅ Rapid development

✅ Consistent design system

✅ Responsive by default

✅ No naming conflicts

✅ Smaller CSS bundles

---

# ⚠️ Common Mistakes

### Huge Class Lists

❌

```html
<div
  class="p-4 m-4 bg-blue-500 text-white rounded shadow border flex items-center justify-between"
></div>
```

Extract reusable components when needed.

---

### Ignoring Components

Don't put every utility directly into pages.

Create reusable UI components.

---

### Using Tailwind for Everything

Sometimes plain CSS is simpler.

Use the right tool for the job.

---

# 🧠 Quick Cheat Sheet

```html
flex grid p-4 m-4 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-700
md:w-1/2 dark:bg-gray-900 animate-spin
```

---

# ✅ Best Practices

- Use utility classes consistently.
- Create reusable components.
- Follow mobile-first design.
- Use responsive prefixes (`md:`, `lg:`).
- Use dark mode utilities.
- Avoid excessively long class lists.
- Combine Tailwind with component-based frameworks like React.

---

# 🚀 Key Takeaways

- Tailwind CSS is a utility-first CSS framework.
- It enables rapid UI development without writing much custom CSS.
- Responsive design, dark mode, and animations are built-in.
- Utility classes can be combined to build complex components.
- Tailwind works exceptionally well with React, Next.js, Vue, and modern
  frontend frameworks.
