# 🔗 Complete Guide to Linked Lists in JavaScript

## 📚 Table of Contents

1. [🎯 What are Linked Lists?](#what-are-linked-lists)
2. [📝 Singly Linked Lists](#singly-linked-lists)
   - [Definition](#definition)
   - [Key Characteristics](#key-characteristics)
   - [Syntax/Implementation](#syntaximplementation)
   - [Visualization](#visualization)
   - [Real-World Example](#real-world-example)
   - [Code Example](#code-example)
   - [Common Pitfalls](#common-pitfalls)
3. [🔄 Doubly Linked Lists](#doubly-linked-lists)
   - [Definition](#definition)
   - [Key Characteristics](#key-characteristics)
   - [Syntax/Implementation](#syntaximplementation)
   - [Visualization](#visualization)
   - [Real-World Example](#real-world-example)
   - [Code Example](#code-example)
   - [Common Pitfalls](#common-pitfalls)
4. [🔄 Circular Linked Lists](#circular-linked-lists)
   - [Definition](#definition)
   - [Key Characteristics](#key-characteristics)
   - [Syntax/Implementation](#syntaximplementation)
   - [Visualization](#visualization)
   - [Real-World Example](#real-world-example)
   - [Code Example](#code-example)
   - [Common Pitfalls](#common-pitfalls)
5. [📊 Comparison Summary](#comparison-summary)

---

## 🎯 What are Linked Lists?

Linked Lists are data structures where elements (called nodes) are stored in a
sequence, but unlike arrays, they don't need to be stored in consecutive memory
locations. Each node contains data and a reference (or "link") to the next node
in the sequence.

Think of it like a treasure hunt where each clue tells you where to find the
next clue! 🗺️

---

## 📝 Singly Linked Lists

### Definition

A Singly Linked List is a linear data structure where each node contains data
and a pointer to the next node. The last node points to `null`, indicating the
end of the list.

### Key Characteristics

- **Time Complexity:**
  - Access/Search: O(n) ⏰
  - Insertion at beginning: O(1) ⚡
  - Insertion at end: O(n) 🐌
  - Deletion: O(n) for search + O(1) for removal
- **Space Complexity:** O(n) 💾
- **Key Properties:**
  - Dynamic size (grows/shrinks at runtime)
  - No random access (must traverse from head)
  - Memory efficient (no wasted space like arrays)

### Syntax/Implementation

```javascript
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
}
```

### Visualization

```bash
Head → [Data|Next] → [Data|Next] → [Data|null]
       Node 1        Node 2        Node 3
```

### Real-World Example

Think of a **train** 🚂 - each car (node) is connected to the next car, and you
can only move forward from one car to another. The engine is the "head" and the
caboose has no car after it (null).

### Code Example

```javascript
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Add element to the beginning
  prepend(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  // Add element to the end
  append(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  // Display the list
  display() {
    if (!this.head) return 'List is empty';

    let result = [];
    let current = this.head;
    while (current) {
      result.push(current.data);
      current = current.next;
    }
    return result.join(' → ');
  }
}

// Usage Example
const list = new SinglyLinkedList();
list.append('Apple');
list.append('Banana');
list.prepend('Orange');
console.log(list.display()); // Orange → Apple → Banana
```

### Common Pitfalls

- ❌ **Forgetting to update pointers:** Always update `next` references properly
- ❌ **Not checking for empty list:** Always check if `head` is null
- ❌ **Memory leaks:** In languages with manual memory management (not
  JavaScript)
- ❌ **Losing reference to head:** Keep track of the head node

---

## 🔄 Doubly Linked Lists

### Definition

A Doubly Linked List is similar to a singly linked list, but each node has two
pointers: one pointing to the next node and another pointing to the previous
node.

### Key Characteristics

- **Time Complexity:**
  - Access/Search: O(n) ⏰
  - Insertion: O(1) if position is known ⚡
  - Deletion: O(1) if node reference is known ⚡
- **Space Complexity:** O(n) but uses more memory than singly linked lists 💾
- **Key Properties:**
  - Bidirectional traversal (forward and backward)
  - Easier deletion (no need to find previous node)
  - More memory overhead (extra pointer per node)

### Syntax/Implementation

```javascript
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
}
```

### Visualization

```bash
      ↔     ↔     ↔
null←[Prev|Data|Next]↔[Prev|Data|Next]↔[Prev|Data|Next]→null
     Node 1           Node 2           Node 3
     (Head)                            (Tail)
```

### Real-World Example

Think of a **subway line** 🚇 where trains can go in both directions. You can
travel from Station A to Station B, and also from Station B back to Station A.
Each station knows about both its neighbors!

### Code Example

```javascript
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // Add to the beginning
  prepend(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.size++;
  }

  // Add to the end
  append(data) {
    const newNode = new Node(data);

    if (!this.tail) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.size++;
  }

  // Display forward
  displayForward() {
    if (!this.head) return 'List is empty';

    let result = [];
    let current = this.head;
    while (current) {
      result.push(current.data);
      current = current.next;
    }
    return result.join(' ↔ ');
  }

  // Display backward
  displayBackward() {
    if (!this.tail) return 'List is empty';

    let result = [];
    let current = this.tail;
    while (current) {
      result.push(current.data);
      current = current.prev;
    }
    return result.join(' ↔ ');
  }
}

// Usage Example
const list = new DoublyLinkedList();
list.append('Red');
list.append('Green');
list.append('Blue');
console.log(list.displayForward()); // Red ↔ Green ↔ Blue
console.log(list.displayBackward()); // Blue ↔ Green ↔ Red
```

### Common Pitfalls

- ❌ **Forgetting to update both pointers:** Always update both `next` and
  `prev`
- ❌ **Not updating tail pointer:** Keep track of both head and tail
- ❌ **Broken links during deletion:** Ensure proper reconnection of nodes
- ❌ **Memory overhead:** Remember it uses more memory than singly linked lists

---

## 🔄 Circular Linked Lists

### Definition

A Circular Linked List is a variation where the last node points back to the
first node instead of pointing to null, creating a circle.

### Key Characteristics

- **Time Complexity:**
  - Access/Search: O(n) ⏰
  - Insertion: O(1) if position is known ⚡
  - Deletion: O(n) for search 🐌
- **Space Complexity:** O(n) 💾
- **Key Properties:**
  - No null pointers (except when empty)
  - Can traverse indefinitely
  - Useful for round-robin scheduling
  - Can be singly or doubly circular

### Syntax/Implementation

```javascript
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
}
```

### Visualization

```bash
     ┌─────────────────────────────────┐
     ↓                                 │
[Data|Next] → [Data|Next] → [Data|Next]┘
Node 1        Node 2        Node 3
(Head)
```

### Real-World Example

Think of **musical chairs** 🪑 or a **carousel** 🎠 - players/horses move in a
circle, and after the last position, you're back to the first one!

### Code Example

```javascript
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Add element to the list
  append(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      newNode.next = this.head; // Points to itself
    } else {
      let current = this.head;
      // Find the last node (the one pointing to head)
      while (current.next !== this.head) {
        current = current.next;
      }
      current.next = newNode;
      newNode.next = this.head; // New node points to head
    }
    this.size++;
  }

  // Display the list (with limit to avoid infinite loop)
  display(limit = this.size) {
    if (!this.head) return 'List is empty';

    let result = [];
    let current = this.head;
    let count = 0;

    do {
      result.push(current.data);
      current = current.next;
      count++;
    } while (current !== this.head && count < limit);

    return result.join(' → ') + ' → (back to start)';
  }

  // Useful for round-robin: get next element repeatedly
  getNext(currentNode) {
    return currentNode ? currentNode.next : this.head;
  }
}

// Usage Example - Round Robin Scheduler
const scheduler = new CircularLinkedList();
scheduler.append('Process A');
scheduler.append('Process B');
scheduler.append('Process C');

console.log(scheduler.display()); // Process A → Process B → Process C → (back to start)

// Simulate round-robin scheduling
let current = scheduler.head;
for (let i = 0; i < 7; i++) {
  console.log(`Executing: ${current.data}`);
  current = current.next; // Will cycle through A, B, C, A, B, C, A
}
```

### Common Pitfalls

- ❌ **Infinite loops:** Be careful when traversing - always have a stopping
  condition
- ❌ **Forgetting to connect last to first:** The "circular" part is crucial
- ❌ **Empty list handling:** Check if head exists before operations
- ❌ **Breaking the circle:** When deleting nodes, maintain the circular
  structure

---

## 📊 Comparison Summary

| Feature                         | Singly Linked | Doubly Linked        | Circular Linked                |
| ------------------------------- | ------------- | -------------------- | ------------------------------ |
| **Memory Usage**                | Lowest 💚     | Highest 🔴           | Low 💛                         |
| **Traversal**                   | Forward only  | Both directions      | Circular                       |
| **Insertion at known position** | O(1)          | O(1)                 | O(1)                           |
| **Deletion complexity**         | O(n)          | O(1) if node known   | O(n)                           |
| **Best for**                    | Simple lists  | Undo/Redo operations | Round-robin, cyclic operations |
| **Space per node**              | 1 pointer     | 2 pointers           | 1 pointer                      |

### 🎯 When to Use What?

- **Singly Linked List:** When you need simple forward traversal and memory is a
  concern
- **Doubly Linked List:** When you need to traverse in both directions or
  frequently delete nodes
- **Circular Linked List:** When you need to cycle through elements repeatedly
  (games, scheduling)

Remember: Choose the right tool for the job! Each type has its sweet spot. 🎯✨
