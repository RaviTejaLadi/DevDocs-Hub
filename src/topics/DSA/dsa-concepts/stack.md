# 📚 Stacks (LIFO) in JavaScript - Complete Guide

## 📖 Definition

A **Stack** is a linear data structure that follows the **LIFO (Last In, First
Out)** principle. Think of it like a stack of plates - you can only add or
remove plates from the top. The last item you put on the stack is the first one
you take off.

## 🔑 Key Characteristics

### ⏱️ Time Complexity

- **Push (Add)**: O(1) - Constant time
- **Pop (Remove)**: O(1) - Constant time
- **Peek/Top (View top)**: O(1) - Constant time
- **Search**: O(n) - Linear time

### 💾 Space Complexity

- **O(n)** - Where n is the number of elements in the stack

### 🎯 Key Properties

- Elements are added and removed from the same end (top)
- No direct access to middle elements
- Perfect for tracking function calls, undo operations, and parsing
- Can be implemented using arrays or linked lists

## 💻 Syntax/Implementation

### Basic Stack Operations:

```javascript
// Using JavaScript Array (built-in stack methods)
let stack = [];

// Push - Add to top
stack.push(element);

// Pop - Remove from top
let topElement = stack.pop();

// Peek - View top element
let top = stack[stack.length - 1];

// Check if empty
let isEmpty = stack.length === 0;
```

## 🎨 Visualization

```bash
Stack Operations Visualization:

Initial: []

push(1):  [1]     ← Top
push(2):  [2, 1]  ← Top
push(3):  [3, 2, 1] ← Top

pop():    [2, 1]  ← Top (removed 3)
pop():    [1]     ← Top (removed 2)
peek():   [1]     ← Top (just viewing, not removing)
```

### 📊 Step-by-Step Breakdown:

1. **Empty Stack**: Start with nothing
2. **Push Operations**: Add elements to the top one by one
3. **Pop Operations**: Remove elements from the top (most recent first)
4. **Peek Operation**: Look at the top element without removing it

## 🌍 Real-World Example

**Browser History** 🌐

- Every time you visit a new page, it gets "pushed" onto your history stack
- When you click the "Back" button, the most recent page gets "popped" off
- You always go back to the last page you visited (LIFO)

```bash
Visit google.com     → [google.com]
Visit youtube.com    → [youtube.com, google.com]
Visit stackoverflow  → [stackoverflow, youtube.com, google.com]
Click Back          → [youtube.com, google.com] (removed stackoverflow)
Click Back          → [google.com] (removed youtube.com)
```

## ⚡ Code Example

```javascript
class Stack {
  constructor() {
    this.items = [];
  }

  // 📥 Add element to top of stack
  push(element) {
    this.items.push(element);
    console.log(`Pushed: ${element}`);
  }

  // 📤 Remove and return top element
  pop() {
    if (this.isEmpty()) {
      console.log('Stack is empty!');
      return null;
    }
    const removed = this.items.pop();
    console.log(`Popped: ${removed}`);
    return removed;
  }

  // 👀 View top element without removing
  peek() {
    if (this.isEmpty()) {
      console.log('Stack is empty!');
      return null;
    }
    return this.items[this.items.length - 1];
  }

  // ❓ Check if stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // 📏 Get stack size
  size() {
    return this.items.length;
  }

  // 🖨️ Display all elements
  display() {
    console.log('Stack:', this.items);
  }
}

// 🚀 Usage Example
const myStack = new Stack();

myStack.push('First'); // Stack: ["First"]
myStack.push('Second'); // Stack: ["First", "Second"]
myStack.push('Third'); // Stack: ["First", "Second", "Third"]

console.log('Top element:', myStack.peek()); // "Third"
myStack.display(); // Stack: ["First", "Second", "Third"]

myStack.pop(); // Removes "Third"
myStack.pop(); // Removes "Second"
myStack.display(); // Stack: ["First"]
```

### 🔥 Practical Use Case - Undo Functionality:

```javascript
class TextEditor {
  constructor() {
    this.content = '';
    this.history = new Stack();
  }

  type(text) {
    // Save current state before making changes
    this.history.push(this.content);
    this.content += text;
    console.log(`Content: "${this.content}"`);
  }

  undo() {
    if (!this.history.isEmpty()) {
      this.content = this.history.pop();
      console.log(`After undo: "${this.content}"`);
    } else {
      console.log('Nothing to undo!');
    }
  }
}

// Usage
const editor = new TextEditor();
editor.type('Hello'); // Content: "Hello"
editor.type(' World'); // Content: "Hello World"
editor.type('!'); // Content: "Hello World!"
editor.undo(); // After undo: "Hello World"
editor.undo(); // After undo: "Hello"
```

## ⚠️ Common Pitfalls

### 1. 🚫 **Stack Overflow**

```javascript
// BAD: Infinite recursion
function badRecursion() {
  return badRecursion(); // Never stops, will crash!
}

// GOOD: Base case included
function goodRecursion(n) {
  if (n <= 0) return; // Base case
  console.log(n);
  goodRecursion(n - 1);
}
```

### 2. 🚫 **Popping from Empty Stack**

```javascript
// BAD: No check for empty stack
let stack = [];
let item = stack.pop(); // Returns undefined, might cause issues

// GOOD: Always check before popping
if (stack.length > 0) {
  let item = stack.pop();
} else {
  console.log('Stack is empty!');
}
```

### 3. 🚫 **Confusing Array Index with Stack Operations**

```javascript
// BAD: Direct array access breaks stack principle
let stack = [1, 2, 3];
let middle = stack[1]; // Accessing middle element directly

// GOOD: Use proper stack operations
let top = stack[stack.length - 1]; // Only access the top
```

### 4. 🚫 **Memory Leaks**

```javascript
// BAD: Not clearing references
class Stack {
  pop() {
    return this.items.pop(); // Old reference might remain
  }
}

// GOOD: Clear references when needed
class Stack {
  clear() {
    this.items = []; // Properly clear the stack
  }
}
```

### 💡 **Pro Tips:**

- Always check if the stack is empty before popping
- Use stacks for problems involving nested structures (parentheses, HTML tags)
- Remember: Stack = LIFO, Queue = FIFO (First In, First Out)
- JavaScript arrays have built-in stack methods (`push()`, `pop()`)
- Consider using stacks for function call tracking, expression evaluation, and
  backtracking algorithms
