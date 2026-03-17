# 🏗️ Complete Guide to Heaps (Min-Heap & Max-Heap) in JavaScript

## 📖 Definition

A **Heap** is a special tree-based data structure that satisfies the heap
property. Think of it as a binary tree where elements are arranged in a specific
order:

- **Min-Heap**: The parent node is always smaller than its children (smallest
  element at the root)
- **Max-Heap**: The parent node is always larger than its children (largest
  element at the root)

Heaps are commonly implemented using arrays, making them memory-efficient and
easy to work with.

---

## 🔑 Key Characteristics

### ⏱️ Time Complexity

| Operation | Time Complexity |
| --------- | --------------- |
| Insert    | O(log n)        |
| Extract   | O(log n)        |
| Peek      | O(1)            |
| Build     | O(n)            |

### 💾 Space Complexity

- **Space**: O(n) - where n is the number of elements

### 🎯 Key Properties

- **Complete Binary Tree**: All levels are filled except possibly the last level
- **Heap Property**: Parent-child relationship maintained throughout
- **Array Representation**: Can be efficiently stored in an array
- **No guaranteed order**: Between siblings (only parent-child matters)

---

## 💻 Syntax/Implementation

### Basic Heap Structure

```javascript
class MinHeap {
  constructor() {
    this.heap = [];
  }

  // Get parent index
  parent(index) {
    return Math.floor((index - 1) / 2);
  }

  // Get left child index
  leftChild(index) {
    return 2 * index + 1;
  }

  // Get right child index
  rightChild(index) {
    return 2 * index + 2;
  }
}
```

---

## 👁️ Visualization

### Array to Tree Representation

```bash
Array: [3, 5, 8, 9, 6, 12, 15]
Index:  0  1  2  3  4   5   6

Tree Structure (Min-Heap):
        3 (index 0)
       / \
      5   8 (index 1,2)
     / \ / \
    9  6 12 15 (index 3,4,5,6)
```

### Index Relationships

- **Parent of index i**: `(i-1)/2`
- **Left child of index i**: `2*i + 1`
- **Right child of index i**: `2*i + 2`

### Step-by-Step Insert Process

1. Add element to end of array
2. Compare with parent
3. Swap if heap property violated
4. Repeat until heap property satisfied

---

## 🌍 Example (Real-world Analogy)

### 🏥 Hospital Emergency Room (Min-Heap)

Imagine an emergency room where patients are prioritized by severity (1 = most
critical):

```bash
Priority Queue: [1, 3, 2, 7, 4, 8, 5]

        1 (Critical)
       / \
      3   2 (High)
     / \ / \
    7  4 8  5 (Medium/Low)
```

- **Most critical patient (1)** is always at the top
- **Less critical patients** are below their more critical parents
- When the critical patient is treated, the next most critical automatically
  moves up

---

## ⚡ Code Example

### Complete MinHeap Implementation

```javascript
class MinHeap {
  constructor() {
    this.heap = [];
  }

  // 👀 Peek at minimum element
  peek() {
    return this.heap.length === 0 ? null : this.heap[0];
  }

  // ➕ Insert new element
  insert(value) {
    this.heap.push(value);
    this.heapifyUp(this.heap.length - 1);
  }

  // ➖ Remove and return minimum element
  extractMin() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop(); // Move last element to root
    this.heapifyDown(0);
    return min;
  }

  // ⬆️ Bubble up (maintain heap property upward)
  heapifyUp(index) {
    if (index === 0) return;

    const parentIndex = Math.floor((index - 1) / 2);
    if (this.heap[parentIndex] > this.heap[index]) {
      [this.heap[parentIndex], this.heap[index]] = [
        this.heap[index],
        this.heap[parentIndex],
      ];
      this.heapifyUp(parentIndex);
    }
  }

  // ⬇️ Bubble down (maintain heap property downward)
  heapifyDown(index) {
    const leftChild = 2 * index + 1;
    const rightChild = 2 * index + 2;
    let smallest = index;

    if (
      leftChild < this.heap.length &&
      this.heap[leftChild] < this.heap[smallest]
    ) {
      smallest = leftChild;
    }

    if (
      rightChild < this.heap.length &&
      this.heap[rightChild] < this.heap[smallest]
    ) {
      smallest = rightChild;
    }

    if (smallest !== index) {
      [this.heap[index], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[index],
      ];
      this.heapifyDown(smallest);
    }
  }

  // 📏 Get heap size
  size() {
    return this.heap.length;
  }

  // 🔍 Display heap as array
  display() {
    console.log(this.heap);
  }
}

// 🧪 Usage Example
const minHeap = new MinHeap();

// Insert elements
[10, 4, 15, 1, 8, 3].forEach((num) => minHeap.insert(num));

console.log('Heap:', minHeap.display()); // [1, 4, 3, 10, 8, 15]
console.log('Min:', minHeap.peek()); // 1
console.log('Extract:', minHeap.extractMin()); // 1
console.log('New Min:', minHeap.peek()); // 3
```

### MaxHeap (Quick Implementation)

```javascript
class MaxHeap extends MinHeap {
  heapifyUp(index) {
    if (index === 0) return;

    const parentIndex = Math.floor((index - 1) / 2);
    if (this.heap[parentIndex] < this.heap[index]) {
      // Only change: < instead of >
      [this.heap[parentIndex], this.heap[index]] = [
        this.heap[index],
        this.heap[parentIndex],
      ];
      this.heapifyUp(parentIndex);
    }
  }

  heapifyDown(index) {
    const leftChild = 2 * index + 1;
    const rightChild = 2 * index + 2;
    let largest = index; // Change: largest instead of smallest

    if (
      leftChild < this.heap.length &&
      this.heap[leftChild] > this.heap[largest]
    ) {
      // Change: > instead of <
      largest = leftChild;
    }

    if (
      rightChild < this.heap.length &&
      this.heap[rightChild] > this.heap[largest]
    ) {
      // Change: > instead of <
      largest = rightChild;
    }

    if (largest !== index) {
      [this.heap[index], this.heap[largest]] = [
        this.heap[largest],
        this.heap[index],
      ];
      this.heapifyDown(largest);
    }
  }
}
```

---

## ⚠️ Common Pitfalls

### 1. 🔢 **Index Calculation Errors**

```javascript
// ❌ Wrong
parent = (index - 1) % 2; // Incorrect formula

// ✅ Correct
parent = Math.floor((index - 1) / 2);
```

### 2. 🔄 **Forgetting to Heapify**

```javascript
// ❌ Wrong - Just adding without maintaining heap property
this.heap.push(value); // Missing heapifyUp!

// ✅ Correct
this.heap.push(value);
this.heapifyUp(this.heap.length - 1);
```

### 3. 🎯 **Confusing Min-Heap vs Max-Heap Logic**

```javascript
// ❌ Wrong - Using > in Min-Heap comparison
if (this.heap[parentIndex] > this.heap[index]) // This is for Min-Heap
if (this.heap[parentIndex] < this.heap[index]) // This is for Max-Heap
```

### 4. 🚫 **Empty Heap Handling**

```javascript
// ❌ Wrong - Not checking for empty heap
extractMin() {
    const min = this.heap[0]; // Could be undefined!
    // ... rest of code
}

// ✅ Correct
extractMin() {
    if (this.heap.length === 0) return null;
    // ... rest of code
}
```

### 5. 🔀 **Incorrect Swapping**

```javascript
// ❌ Wrong - Manual swapping (error-prone)
const temp = this.heap[i];
this.heap[i] = this.heap[j];
this.heap[j] = temp;

// ✅ Correct - Destructuring swap
[this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
```

### 6. 📊 **Not Understanding Array Representation**

Remember: Heaps stored in arrays are **NOT sorted arrays**. They only maintain
the heap property (parent-child relationship), not complete ordering.

---

🎉 **Congratulations!** You now understand heaps and can implement them
efficiently in JavaScript. Practice with different scenarios to master this
powerful data structure!
