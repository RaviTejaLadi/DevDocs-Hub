# Data Structures & Algorithms - JavaScript Cheat sheet

## Table of Contents

1. [Time & Space Complexity](#time-and-space-complexity)
2. [Array Operations](#array-operations)
3. [String Operations](#string-operations)
4. [Array Methods for Algorithms](#array-methods-for-algorithms)
5. [Stack Implementation](#stack-implementation)
6. [Queue Implementation](#queue-implementation)
7. [Linked List Implementation](#linked-list-implementation)
8. [Binary Tree Implementation](#binary-tree-implementation)
9. [Hash Table (Map) Operations](#hash-table-map-operations)
10. [Set Operations](#set-operations)
11. [Sorting Algorithms](#sorting-algorithms)
12. [Searching Algorithms](#searching-algorithms)
13. [Graph Representation](#graph-representation)
14. [Graph Traversal](#graph-traversal)
15. [Dynamic Programming Patterns](#dynamic-programming-patterns)
16. [Common Algorithm Patterns](#common-algorithm-patterns)
17. [Binary Search Variations](#binary-search-variations)
18. [Bit Manipulation](#bit-manipulation)
19. [Heap Operations](#heap-operations)

## Time and Space Complexity

| Notation   | Name         | Description                        | Example                     |
| ---------- | ------------ | ---------------------------------- | --------------------------- |
| O(1)       | Constant     | Same time regardless of input size | Array access by index       |
| O(log n)   | Logarithmic  | Time increases logarithmically     | Binary search               |
| O(n)       | Linear       | Time increases linearly            | Single loop                 |
| O(n log n) | Linearithmic | Efficient sorting algorithms       | Merge sort, Quick sort      |
| O(n²)      | Quadratic    | Nested loops                       | Bubble sort, Selection sort |
| O(2ⁿ)      | Exponential  | Doubles with each addition         | Recursive Fibonacci         |
| O(n!)      | Factorial    | Extremely slow growth              | Permutations                |

## Array Operations

| Operation         | Method      | Time | Space | Example               |
| ----------------- | ----------- | ---- | ----- | --------------------- |
| Access            | `arr[i]`    | O(1) | O(1)  | `arr[0]`              |
| Search            | `indexOf()` | O(n) | O(1)  | `arr.indexOf(5)`      |
| Insert at end     | `push()`    | O(1) | O(1)  | `arr.push(5)`         |
| Insert at start   | `unshift()` | O(n) | O(1)  | `arr.unshift(5)`      |
| Insert at index   | `splice()`  | O(n) | O(1)  | `arr.splice(2, 0, 5)` |
| Delete from end   | `pop()`     | O(1) | O(1)  | `arr.pop()`           |
| Delete from start | `shift()`   | O(n) | O(1)  | `arr.shift()`         |
| Delete at index   | `splice()`  | O(n) | O(1)  | `arr.splice(2, 1)`    |

## String Operations

| Operation     | Method            | Time | Space | Example                 |
| ------------- | ----------------- | ---- | ----- | ----------------------- |
| Access        | `str[i]`          | O(1) | O(1)  | `str[0]`                |
| Length        | `length`          | O(1) | O(1)  | `str.length`            |
| Concatenation | `+` or `concat()` | O(n) | O(n)  | `str1 + str2`           |
| Substring     | `slice()`         | O(n) | O(n)  | `str.slice(0, 3)`       |
| Search        | `indexOf()`       | O(n) | O(1)  | `str.indexOf('a')`      |
| Replace       | `replace()`       | O(n) | O(n)  | `str.replace('a', 'b')` |
| Split         | `split()`         | O(n) | O(n)  | `str.split(',')`        |

## Array Methods for Algorithms

| Method      | Purpose                | Time       | Example                              |
| ----------- | ---------------------- | ---------- | ------------------------------------ |
| `map()`     | Transform elements     | O(n)       | `arr.map(x => x * 2)`                |
| `filter()`  | Filter elements        | O(n)       | `arr.filter(x => x > 5)`             |
| `reduce()`  | Reduce to single value | O(n)       | `arr.reduce((sum, x) => sum + x, 0)` |
| `forEach()` | Iterate elements       | O(n)       | `arr.forEach(x => console.log(x))`   |
| `find()`    | Find first match       | O(n)       | `arr.find(x => x > 5)`               |
| `some()`    | Check if any match     | O(n)       | `arr.some(x => x > 5)`               |
| `every()`   | Check if all match     | O(n)       | `arr.every(x => x > 0)`              |
| `sort()`    | Sort array             | O(n log n) | `arr.sort((a, b) => a - b)`          |

## Stack Implementation

| Operation | Method         | Time | Space | Code                      |
| --------- | -------------- | ---- | ----- | ------------------------- |
| Push      | `push()`       | O(1) | O(1)  | `stack.push(item)`        |
| Pop       | `pop()`        | O(1) | O(1)  | `stack.pop()`             |
| Peek/Top  | `[length-1]`   | O(1) | O(1)  | `stack[stack.length - 1]` |
| Is Empty  | `length === 0` | O(1) | O(1)  | `stack.length === 0`      |
| Size      | `length`       | O(1) | O(1)  | `stack.length`            |

```javascript
class Stack {
  constructor() {
    this.items = [];
  }
  push(item) {
    this.items.push(item);
  }
  pop() {
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
}
```

## Queue Implementation

| Operation | Method         | Time | Space | Code                 |
| --------- | -------------- | ---- | ----- | -------------------- |
| Enqueue   | `push()`       | O(1) | O(1)  | `queue.push(item)`   |
| Dequeue   | `shift()`      | O(n) | O(1)  | `queue.shift()`      |
| Front     | `[0]`          | O(1) | O(1)  | `queue[0]`           |
| Is Empty  | `length === 0` | O(1) | O(1)  | `queue.length === 0` |
| Size      | `length`       | O(1) | O(1)  | `queue.length`       |

```javascript
class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(item) {
    this.items.push(item);
  }
  dequeue() {
    return this.items.shift();
  }
  front() {
    return this.items[0];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
}
```

## Linked List Implementation

| Operation      | Time | Space | Description      |
| -------------- | ---- | ----- | ---------------- |
| Insert at head | O(1) | O(1)  | Add to beginning |
| Insert at tail | O(n) | O(1)  | Add to end       |
| Delete         | O(n) | O(1)  | Remove node      |
| Search         | O(n) | O(1)  | Find node        |
| Access         | O(n) | O(1)  | Get by index     |

```javascript
class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  prepend(val) {
    this.head = new ListNode(val, this.head);
  }

  append(val) {
    if (!this.head) {
      this.head = new ListNode(val);
      return;
    }
    let curr = this.head;
    while (curr.next) curr = curr.next;
    curr.next = new ListNode(val);
  }
}
```

## Binary Tree Implementation

| Operation | Time            | Space | Description     |
| --------- | --------------- | ----- | --------------- |
| Search    | O(log n) - O(n) | O(1)  | Find node       |
| Insert    | O(log n) - O(n) | O(1)  | Add node        |
| Delete    | O(log n) - O(n) | O(1)  | Remove node     |
| Traversal | O(n)            | O(h)  | Visit all nodes |

```javascript
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(val) {
    this.root = this.insertNode(this.root, val);
  }

  insertNode(node, val) {
    if (!node) return new TreeNode(val);
    if (val < node.val) node.left = this.insertNode(node.left, val);
    else node.right = this.insertNode(node.right, val);
    return node;
  }
}
```

## Hash Table (Map) Operations

| Operation | Method     | Time | Space | Example                    |
| --------- | ---------- | ---- | ----- | -------------------------- |
| Insert    | `set()`    | O(1) | O(1)  | `map.set('key', 'value')`  |
| Get       | `get()`    | O(1) | O(1)  | `map.get('key')`           |
| Delete    | `delete()` | O(1) | O(1)  | `map.delete('key')`        |
| Has       | `has()`    | O(1) | O(1)  | `map.has('key')`           |
| Size      | `size`     | O(1) | O(1)  | `map.size`                 |
| Keys      | `keys()`   | O(n) | O(n)  | `Array.from(map.keys())`   |
| Values    | `values()` | O(n) | O(n)  | `Array.from(map.values())` |

## Set Operations

| Operation    | Method                                  | Time   | Space  | Example             |
| ------------ | --------------------------------------- | ------ | ------ | ------------------- |
| Add          | `add()`                                 | O(1)   | O(1)   | `set.add(value)`    |
| Delete       | `delete()`                              | O(1)   | O(1)   | `set.delete(value)` |
| Has          | `has()`                                 | O(1)   | O(1)   | `set.has(value)`    |
| Size         | `size`                                  | O(1)   | O(1)   | `set.size`          |
| Clear        | `clear()`                               | O(1)   | O(1)   | `set.clear()`       |
| Union        | `new Set([...a, ...b])`                 | O(n+m) | O(n+m) | Combine sets        |
| Intersection | `new Set([...a].filter(x => b.has(x)))` | O(n)   | O(n)   | Common elements     |

## Sorting Algorithms

| Algorithm      | Best       | Average    | Worst      | Space    | Stable | Code                                                                                              |
| -------------- | ---------- | ---------- | ---------- | -------- | ------ | ------------------------------------------------------------------------------------------------- |
| Bubble Sort    | O(n)       | O(n²)      | O(n²)      | O(1)     | Yes    | `for(i=0;i<n;i++) for(j=0;j<n-i-1;j++) if(arr[j]>arr[j+1]) swap`                                  |
| Selection Sort | O(n²)      | O(n²)      | O(n²)      | O(1)     | No     | `for(i=0;i<n;i++) {min=i; for(j=i+1;j<n;j++) if(arr[j]<arr[min]) min=j; swap}`                    |
| Insertion Sort | O(n)       | O(n²)      | O(n²)      | O(1)     | Yes    | `for(i=1;i<n;i++) {key=arr[i]; j=i-1; while(j>=0 && arr[j]>key) arr[j+1]=arr[j--]; arr[j+1]=key}` |
| Merge Sort     | O(n log n) | O(n log n) | O(n log n) | O(n)     | Yes    | Divide and conquer                                                                                |
| Quick Sort     | O(n log n) | O(n log n) | O(n²)      | O(log n) | No     | Partition around pivot                                                                            |
| Heap Sort      | O(n log n) | O(n log n) | O(n log n) | O(1)     | No     | Build heap, extract max                                                                           |

## Searching Algorithms

| Algorithm            | Time         | Space | Prerequisites         | Implementation                                                                                                                                 |
| -------------------- | ------------ | ----- | --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Linear Search        | O(n)         | O(1)  | None                  | `for(let i=0; i<arr.length; i++) if(arr[i]===target) return i`                                                                                 |
| Binary Search        | O(log n)     | O(1)  | Sorted array          | `while(left<=right) {mid=Math.floor((left+right)/2); if(arr[mid]===target) return mid; else if(arr[mid]<target) left=mid+1; else right=mid-1}` |
| Jump Search          | O(√n)        | O(1)  | Sorted array          | Jump by √n steps, then linear                                                                                                                  |
| Interpolation Search | O(log log n) | O(1)  | Uniformly distributed | Estimate position based on value                                                                                                               |

## Graph Representation

| Type             | Space  | Add Vertex | Add Edge | Remove Vertex | Remove Edge | Check Edge |
| ---------------- | ------ | ---------- | -------- | ------------- | ----------- | ---------- |
| Adjacency Matrix | O(V²)  | O(V²)      | O(1)     | O(V²)         | O(1)        | O(1)       |
| Adjacency List   | O(V+E) | O(1)       | O(1)     | O(V+E)        | O(E)        | O(E)       |

```javascript
// Adjacency List
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
}
```

## Graph Traversal

| Algorithm       | Time   | Space | Use Case                       | Implementation                                                                                                                                                       |
| --------------- | ------ | ----- | ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DFS (Recursive) | O(V+E) | O(V)  | Path finding, topological sort | `function dfs(vertex) { visited[vertex] = true; for(neighbor of adj[vertex]) if(!visited[neighbor]) dfs(neighbor); }`                                                |
| DFS (Iterative) | O(V+E) | O(V)  | Same as recursive              | Use stack instead of recursion                                                                                                                                       |
| BFS             | O(V+E) | O(V)  | Shortest path, level order     | Use queue: `while(queue.length) { vertex = queue.shift(); for(neighbor of adj[vertex]) if(!visited[neighbor]) { visited[neighbor] = true; queue.push(neighbor); } }` |

## Dynamic Programming Patterns

| Pattern  | Description                    | Example                     | Template                                                 |
| -------- | ------------------------------ | --------------------------- | -------------------------------------------------------- |
| 1D DP    | Linear progression             | Fibonacci, House Robber     | `dp[i] = f(dp[i-1], dp[i-2], ...)`                       |
| 2D DP    | Grid/matrix problems           | Unique Paths, Edit Distance | `dp[i][j] = f(dp[i-1][j], dp[i][j-1], ...)`              |
| Knapsack | Choose items optimally         | 0/1 Knapsack                | `dp[i][w] = max(dp[i-1][w], dp[i-1][w-weight] + value)`  |
| LIS      | Longest Increasing Subsequence | Stock prices                | `dp[i] = max(dp[j] + 1) for j < i where arr[j] < arr[i]` |

## Common Algorithm Patterns

| Pattern              | Description                  | Example                 | Template                                     |
| -------------------- | ---------------------------- | ----------------------- | -------------------------------------------- |
| Two Pointers         | Use two pointers to traverse | Two Sum, Palindrome     | `left = 0, right = n-1; while(left < right)` |
| Sliding Window       | Fixed/variable window        | Max subarray, substring | `expand window, shrink when invalid`         |
| Fast & Slow Pointers | Detect cycles                | Linked list cycle       | `slow = slow.next, fast = fast.next.next`    |
| Divide & Conquer     | Break into subproblems       | Merge sort, Quick sort  | `solve(left), solve(right), combine`         |
| Backtracking         | Try all possibilities        | N-Queens, Sudoku        | `choose, explore, unchoose`                  |
| Greedy               | Make locally optimal choice  | Activity selection      | `sort, pick best at each step`               |

## Binary Search Variations

| Type        | Use Case         | Template                                                                                                                                          |
| ----------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| Exact Match | Find target      | `while(left <= right) { mid = (left+right)/2; if(arr[mid] === target) return mid; else if(arr[mid] < target) left = mid+1; else right = mid-1; }` |
| Lower Bound | First occurrence | `while(left < right) { mid = (left+right)/2; if(arr[mid] < target) left = mid+1; else right = mid; }`                                             |
| Upper Bound | Last occurrence  | `while(left < right) { mid = (left+right+1)/2; if(arr[mid] <= target) left = mid; else right = mid-1; }`                                          |

## Bit Manipulation

| Operation   | Symbol | Example       | Description    |
| ----------- | ------ | ------------- | -------------- |
| AND         | `&`    | `5 & 3 = 1`   | Both bits 1    |
| OR          | `\|`   | `5 \| 3 = 7`  | Either bit 1   |
| XOR         | `^`    | `5 ^ 3 = 6`   | Different bits |
| NOT         | `~`    | `~5 = -6`     | Flip all bits  |
| Left Shift  | `<<`   | `5 << 1 = 10` | Multiply by 2  |
| Right Shift | `>>`   | `5 >> 1 = 2`  | Divide by 2    |

## Common Bit Tricks

| Operation           | Code                                  | Description               |
| ------------------- | ------------------------------------- | ------------------------- |
| Check if power of 2 | `(n & (n-1)) === 0`                   | Only one bit set          |
| Get nth bit         | `(n >> i) & 1`                        | Extract bit at position i |
| Set nth bit         | `n \| (1 << i)`                       | Set bit at position i     |
| Clear nth bit       | `n & ~(1 << i)`                       | Clear bit at position i   |
| Toggle nth bit      | `n ^ (1 << i)`                        | Flip bit at position i    |
| Count set bits      | `n.toString(2).split('1').length - 1` | Count 1s                  |

## Heap Operations

| Operation       | Time     | Description       | Implementation                 |
| --------------- | -------- | ----------------- | ------------------------------ |
| Insert          | O(log n) | Add element       | Push to end, bubble up         |
| Extract Min/Max | O(log n) | Remove root       | Replace with last, bubble down |
| Peek            | O(1)     | View min/max      | Return first element           |
| Build Heap      | O(n)     | Create from array | Heapify from bottom up         |

```javascript
class MinHeap {
  constructor() {
    this.heap = [];
  }

  parent(i) {
    return Math.floor((i - 1) / 2);
  }
  leftChild(i) {
    return 2 * i + 1;
  }
  rightChild(i) {
    return 2 * i + 2;
  }

  insert(val) {
    this.heap.push(val);
    this.bubbleUp(this.heap.length - 1);
  }

  bubbleUp(i) {
    while (i > 0 && this.heap[this.parent(i)] > this.heap[i]) {
      [this.heap[i], this.heap[this.parent(i)]] = [
        this.heap[this.parent(i)],
        this.heap[i],
      ];
      i = this.parent(i);
    }
  }
}
```

**[⬆ Back to Top](#table-of-contents)**
