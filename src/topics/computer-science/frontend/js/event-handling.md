# Event Handling 🎯

## Definitions 📚

### **Event Listener**

A function that waits for a specific event to occur on an HTML element and
executes code when that event happens.

### **Event Bubbling**

It is a mechanism by which an event triggered on an element propagates up the
document object model (Dom) hierarchy

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      div {
        border: 1px solid #ccc;
        padding: 15px;
      }
    </style>
  </head>

  <body>
    <!-- event bubbling -->
    <div id="grandParent">
      grandParent
      <div id="parent">
        parent
        <div id="child">child</div>
      </div>
    </div>

    <script>
      // by default it is false means bubbling
      // if we pass true then it is capturing

      // with the help of e.stopPropagation() we can stop propagation

      document.querySelector('#grandParent').addEventListener('click', (e) => {
        e.stopPropagation();

        console.log('grand Parent');
      });
      document.querySelector('#parent').addEventListener('click', (e) => {
        e.stopPropagation();
        console.log('Parent');
      });
      document.querySelector('#child').addEventListener('click', (e) => {
        e.stopPropagation();
        console.log('child');
      });
    </script>
  </body>
</html>
```

### **Event Capturing**

The opposite of bubbling - events start at the document root and propagate
downward to the target element before bubbling back up.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      div {
        border: 1px solid #ccc;
        padding: 15px;
      }
    </style>
  </head>

  <body>
    <!-- event bubbling -->
    <div id="grandParent">
      grandParent
      <div id="parent">
        parent
        <div id="child">child</div>
      </div>
    </div>

    <script>
      // by default it is false means bubbling
      // if we pass true then it is capturing

      // with the help of e.stopPropagation() we can stop propagation

      document.querySelector('#grandParent').addEventListener(
        'click',
        (e) => {
          e.stopPropagation();

          console.log('grand Parent');
        },
        true
      );
      document.querySelector('#parent').addEventListener(
        'click',
        (e) => {
          e.stopPropagation();
          console.log('Parent');
        },
        true
      );
      document.querySelector('#child').addEventListener(
        'click',
        (e) => {
          e.stopPropagation();
          console.log('child');
        },
        true
      );
    </script>
  </body>
</html>
```

### **Event Delegation**

A technique where you attach a single event listener to a parent element to
handle events for multiple child elements, taking advantage of event bubbling.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>

  <body>
    <ul id="event-delegation">
      <li>item 1</li>
      <li>item 2</li>
      <li>item 3</li>
    </ul>
    <script>
      const list = document.getElementById('event-delegation');

      list.addEventListener('click', (e) => {
        if ((e.target.tagName = 'li')) {
          console.log(e.target.textContent);
        }
      });
    </script>
  </body>
</html>
```

---

# Detailed Explanations with Visuals 🎨

## What are Event Listeners? 👂

Think of event listeners like **security guards** at different doors of a
building. Each guard (listener) watches for specific things to happen (events)
and then takes action.

```jsx
🏢 Building (Web Page)
├── 🚪 Door 1 (Button) → 👮 Guard: "Watch for clicks!"
├── 🚪 Door 2 (Input) → 👮 Guard: "Watch for typing!"
└── 🚪 Door 3 (Form) → 👮 Guard: "Watch for submissions!"
```

**Basic Syntax:**

```javascript
element.addEventListener('event', function)
```

**Example:**

```javascript
button.addEventListener('click', function () {
  alert('Button was clicked!');
});
```

---

## Event Bubbling vs Capturing 🫧

Imagine a **pond with ripples** - when you throw a stone, ripples spread
outward. That's how events travel through HTML elements!

### The HTML Structure (Like Nested Boxes 📦)

```jsx
🏠 Document
 └── 📦 Grandparent (div)
      └── 📦 Parent (div)
           └── 📦 Child (button)
```

### Event Bubbling (Default) - Bottom to Top ⬆️

Like **bubbles rising in water** - starts from the target and goes UP to
parents.

```jsx
Click on button! 👆

📦 Child (button)     ← 1️⃣ Event starts here
 ↑
📦 Parent (div)       ← 2️⃣ Then bubbles up
 ↑
📦 Grandparent (div)  ← 3️⃣ Finally reaches here
 ↑
🏠 Document           ← 4️⃣ Ends at document
```

### Event Capturing - Top to Bottom ⬇️

Like **rain falling down** - starts from document and goes DOWN to target.

```jsx
Click on button! 👆

🏠 Document           ← 1️⃣ Event starts here
 ↓
📦 Grandparent (div)  ← 2️⃣ Captures down
 ↓
📦 Parent (div)       ← 3️⃣ Continues down
 ↓
📦 Child (button)     ← 4️⃣ Finally reaches target
```

**Code Example:**

```javascript
// Bubbling (default)
element.addEventListener('click', handler);

// Capturing (set third parameter to true)
element.addEventListener('click', handler, true);
```

---

## Event Delegation 🎪

Think of event delegation like having **one smart manager** instead of hiring
individual workers for each task.

### Without Delegation (Inefficient) ❌

```jsx
🎪 Circus Tent
├── 🎭 Performer 1 → 👨‍💼 Individual Manager
├── 🎭 Performer 2 → 👨‍💼 Individual Manager
├── 🎭 Performer 3 → 👨‍💼 Individual Manager
└── 🎭 Performer 4 → 👨‍💼 Individual Manager
```

### With Delegation (Efficient) ✅

```jsx
🎪 Circus Tent → 👨‍💼 ONE Smart Manager
├── 🎭 Performer 1
├── 🎭 Performer 2
├── 🎭 Performer 3
└── 🎭 Performer 4
```

**How it works:**

1. Attach **one listener** to a parent element
2. When child elements trigger events, they **bubble up** to parent
3. Parent checks **which child** triggered the event
4. Parent handles the event accordingly

**Example:**

```html
<ul id="todo-list">
  <li>Task 1 <button class="delete">❌</button></li>
  <li>Task 2 <button class="delete">❌</button></li>
  <li>Task 3 <button class="delete">❌</button></li>
</ul>
```

```javascript
// Instead of adding listener to each button:
document.getElementById('todo-list').addEventListener('click', function (e) {
  if (e.target.classList.contains('delete')) {
    // Delete the task
    e.target.parentElement.remove();
  }
});
```

---

## Memory Tricks 🧠

### **Event Bubbling**:

> "**B**ubbles go **B**ottom-to-top" (B for Bubbling & Bottom)

### **Event Capturing**:

> "**C**apture from **C**eiling down" (C for Capturing & Ceiling)

### **Event Delegation**:

> "**D**ad **D**elegates tasks to kids" (D for Delegation & Dad)

---

## Visual Summary 🎨

```jsx
EVENT FLOW DIAGRAM:

🌍 Document (Capturing Phase)
 ↓ ↑
📦 Grandparent (Capturing Phase)
 ↓ ↑
📦 Parent (Capturing Phase)
 ↓ ↑
🎯 TARGET (Event occurs here)
 ↑ ↓
📦 Parent (Bubbling Phase)
 ↑ ↓
📦 Grandparent (Bubbling Phase)
 ↑ ↓
🌍 Document (Bubbling Phase)

Legend:
↓ = Capturing (going down)
↑ = Bubbling (going up)
🎯 = Where event actually happened
```

This way, you can remember: **Capture Down, Bubble Up!** 🎈⬆️
