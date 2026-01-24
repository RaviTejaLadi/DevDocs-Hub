# 📚 Top 35 DSA Interview Questions in JavaScript

## 📋 Table of Contents

1. [Two Sum](#1-two-sum) - Google, Facebook, Amazon
2. [Valid Parentheses](#2-valid-parentheses) - Microsoft, Google, Facebook
3. [Reverse Linked List](#3-reverse-linked-list) - Amazon, Microsoft, Apple
4. [Maximum Subarray](#4-maximum-subarray) - Amazon, Google, Microsoft
5. [Merge Two Sorted Lists](#5-merge-two-sorted-lists) - Facebook, Amazon,
   Google
6. [Binary Search](#6-binary-search) - Google, Microsoft, Amazon
7. [Best Time to Buy and Sell Stock](#7-best-time-to-buy-and-sell-stock) -
   Amazon, Facebook, Google
8. [Valid Anagram](#8-valid-anagram) - Facebook, Amazon, Google
9. [Climbing Stairs](#9-climbing-stairs) - Amazon, Google, Microsoft
10. [Binary Tree Inorder Traversal](#10-binary-tree-inorder-traversal) -
    Microsoft, Amazon, Google
11. [Contains Duplicate](#11-contains-duplicate) - Amazon, Google, Facebook
12. [Product of Array Except Self](#12-product-of-array-except-self) - Facebook,
    Amazon, Google
13. [Maximum Depth of Binary Tree](#13-maximum-depth-of-binary-tree) - Amazon,
    Microsoft, Google
14. [Linked List Cycle](#14-linked-list-cycle) - Amazon, Microsoft, Facebook
15. [3Sum](#15-3sum) - Amazon, Facebook, Google
16. [Search in Rotated Sorted Array](#16-search-in-rotated-sorted-array) -
    Amazon, Microsoft, Google
17. [Longest Substring Without Repeating Characters](#17-longest-substring-without-repeating-characters) -
    Amazon, Facebook, Google
18. [Merge Intervals](#18-merge-intervals) - Facebook, Amazon, Google
19. [Group Anagrams](#19-group-anagrams) - Amazon, Facebook, Google
20. [Valid Palindrome](#20-valid-palindrome) - Facebook, Amazon, Microsoft
21. [Serialize and Deserialize Binary Tree](#21-serialize-and-deserialize-binary-tree) -
    Google, Amazon, Facebook
22. [Kth Largest Element in Array](#22-kth-largest-element-in-array) - Amazon,
    Facebook, Google
23. [Top K Frequent Elements](#23-top-k-frequent-elements) - Amazon, Facebook,
    Google
24. [Course Schedule](#24-course-schedule) - Google, Facebook, Amazon
25. [Word Break](#25-word-break) - Amazon, Facebook, Google
26. [Coin Change](#26-coin-change) - Amazon, Google, Facebook
27. [Longest Common Subsequence](#27-longest-common-subsequence) - Google,
    Amazon, Microsoft
28. [Number of Islands](#28-number-of-islands) - Amazon, Facebook, Google
29. [Design LRU Cache](#29-design-lru-cache) - Amazon, Facebook, Google
30. [Sliding Window Maximum](#30-sliding-window-maximum) - Amazon, Google,
    Facebook
31. [Trapping Rain Water](#31-trapping-rain-water) - Amazon, Google, Facebook
32. [Edit Distance](#32-edit-distance) - Google, Facebook, Amazon
33. [Median of Two Sorted Arrays](#33-median-of-two-sorted-arrays) - Google,
    Amazon, Microsoft
34. [Regular Expression Matching](#34-regular-expression-matching) - Google,
    Facebook, Amazon
35. [Longest Palindromic Substring](#35-longest-palindromic-substring) - Amazon,
    Facebook, Google

---

## 1. Two Sum 🎯

**Company:** Google, Facebook, Amazon  
**Difficulty:** Easy  
**Tags:** Array, Hash Table

### Problem Statement

Given an array of integers `nums` and an integer `target`, return indices of the
two numbers such that they add up to `target`.

### Concept Explanation

Use a hash map to store the complement of each number. For each number, check if
its complement exists in the hash map.

### Solution

```javascript
function twoSum(nums, target) {
  // Create a hash map to store number and its index
  const numMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    // If complement exists in map, return the indices
    if (numMap.has(complement)) {
      return [numMap.get(complement), i];
    }

    // Store current number and its index
    numMap.set(nums[i], i);
  }

  return []; // No solution found
}

// Time Complexity: O(n)
// Space Complexity: O(n)
```

---

## 2. Valid Parentheses 🔗

**Company:** Microsoft, Google, Facebook  
**Difficulty:** Easy  
**Tags:** String, Stack

### Problem Statement

Given a string `s` containing just the characters '(', ')', '{', '}', '[' and
']', determine if the input string is valid.

### Concept Explanation

Use a stack to keep track of opening brackets. When encountering a closing
bracket, check if it matches the most recent opening bracket.

### Solution

```javascript
function isValid(s) {
  const stack = [];
  const mapping = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  for (let char of s) {
    // If it's a closing bracket
    if (char in mapping) {
      // Check if stack is empty or top doesn't match
      if (stack.length === 0 || stack.pop() !== mapping[char]) {
        return false;
      }
    } else {
      // It's an opening bracket, push to stack
      stack.push(char);
    }
  }

  // Valid if stack is empty
  return stack.length === 0;
}

// Time Complexity: O(n)
// Space Complexity: O(n)
```

---

## 3. Reverse Linked List 🔄

**Company:** Amazon, Microsoft, Apple  
**Difficulty:** Easy  
**Tags:** Linked List

### Problem Statement

Given the head of a singly linked list, reverse the list and return the reversed
list.

### Concept Explanation

Use three pointers: prev, current, and next. Reverse the links iteratively.

### Solution

```javascript
function reverseList(head) {
  let prev = null;
  let current = head;

  while (current !== null) {
    // Store next node
    const next = current.next;

    // Reverse the link
    current.next = prev;

    // Move pointers forward
    prev = current;
    current = next;
  }

  return prev; // New head of reversed list
}

// Time Complexity: O(n)
// Space Complexity: O(1)
```

---

## 4. Maximum Subarray 📊

**Company:** Amazon, Google, Microsoft  
**Difficulty:** Easy  
**Tags:** Array, Dynamic Programming

### Problem Statement

Find the contiguous subarray with the largest sum and return its sum.

### Concept Explanation

Use Kadane's algorithm: keep track of maximum sum ending at current position and
overall maximum sum.

### Solution

```javascript
function maxSubArray(nums) {
  let maxSoFar = nums[0];
  let maxEndingHere = nums[0];

  for (let i = 1; i < nums.length; i++) {
    // Either extend existing subarray or start new one
    maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);

    // Update overall maximum
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }

  return maxSoFar;
}

// Time Complexity: O(n)
// Space Complexity: O(1)
```

---

## 5. Merge Two Sorted Lists 🔗

**Company:** Facebook, Amazon, Google  
**Difficulty:** Easy  
**Tags:** Linked List

### Problem Statement

Merge two sorted linked lists and return it as a sorted list.

### Concept Explanation

Use a dummy node to simplify the merging process. Compare nodes from both lists
and attach the smaller one.

### Solution

```javascript
function mergeTwoLists(l1, l2) {
  // Create dummy node to simplify logic
  const dummy = { next: null };
  let current = dummy;

  while (l1 !== null && l2 !== null) {
    if (l1.val <= l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }

  // Attach remaining nodes
  current.next = l1 || l2;

  return dummy.next;
}

// Time Complexity: O(n + m)
// Space Complexity: O(1)
```

---

## 6. Binary Search 🔍

**Company:** Google, Microsoft, Amazon  
**Difficulty:** Easy  
**Tags:** Array, Binary Search

### Problem Statement

Given an array of integers `nums` sorted in ascending order, and an integer
`target`, write a function to search `target` in `nums`.

### Concept Explanation

Use binary search to find the target in O(log n) time by repeatedly dividing the
search space in half.

### Solution

```javascript
function search(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1; // Target not found
}

// Time Complexity: O(log n)
// Space Complexity: O(1)
```

---

## 7. Best Time to Buy and Sell Stock 📈

**Company:** Amazon, Facebook, Google  
**Difficulty:** Easy  
**Tags:** Array, Dynamic Programming

### Problem Statement

Find the maximum profit from buying and selling a stock once.

### Concept Explanation

Track the minimum price seen so far and calculate profit at each day.

### Solution

```javascript
function maxProfit(prices) {
  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    // Update minimum price
    minPrice = Math.min(minPrice, prices[i]);

    // Calculate profit if we sell today
    maxProfit = Math.max(maxProfit, prices[i] - minPrice);
  }

  return maxProfit;
}

// Time Complexity: O(n)
// Space Complexity: O(1)
```

---

## 8. Valid Anagram ✨

**Company:** Facebook, Amazon, Google  
**Difficulty:** Easy  
**Tags:** String, Hash Table

### Problem Statement

Given two strings `s` and `t`, return true if `t` is an anagram of `s`.

### Concept Explanation

Count frequency of each character in both strings and compare.

### Solution

```javascript
function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  const charCount = {};

  // Count characters in first string
  for (let char of s) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Subtract characters from second string
  for (let char of t) {
    if (!charCount[char]) return false;
    charCount[char]--;
  }

  return true;
}

// Time Complexity: O(n)
// Space Complexity: O(n)
```

---

## 9. Climbing Stairs 🪜

**Company:** Amazon, Google, Microsoft  
**Difficulty:** Easy  
**Tags:** Dynamic Programming

### Problem Statement

You're climbing a staircase with `n` steps. Each time you can climb 1 or 2
steps. How many distinct ways can you climb to the top?

### Concept Explanation

This is a Fibonacci sequence problem. Ways to reach step n = ways to reach
(n-1) + ways to reach (n-2).

### Solution

```javascript
function climbStairs(n) {
  if (n <= 2) return n;

  let prev2 = 1; // ways to reach step 1
  let prev1 = 2; // ways to reach step 2

  for (let i = 3; i <= n; i++) {
    const current = prev1 + prev2;
    prev2 = prev1;
    prev1 = current;
  }

  return prev1;
}

// Time Complexity: O(n)
// Space Complexity: O(1)
```

---

## 10. Binary Tree Inorder Traversal 🌳

**Company:** Microsoft, Amazon, Google  
**Difficulty:** Easy  
**Tags:** Tree, Binary Tree

### Problem Statement

Given the root of a binary tree, return the inorder traversal of its nodes'
values.

### Concept Explanation

Inorder traversal visits nodes in: left subtree → root → right subtree order.

### Solution

```javascript
function inorderTraversal(root) {
  const result = [];

  function inorder(node) {
    if (node === null) return;

    inorder(node.left); // Visit left subtree
    result.push(node.val); // Visit root
    inorder(node.right); // Visit right subtree
  }

  inorder(root);
  return result;
}

// Iterative solution
function inorderTraversalIterative(root) {
  const result = [];
  const stack = [];
  let current = root;

  while (current !== null || stack.length > 0) {
    // Go to leftmost node
    while (current !== null) {
      stack.push(current);
      current = current.left;
    }

    // Process current node
    current = stack.pop();
    result.push(current.val);

    // Move to right subtree
    current = current.right;
  }

  return result;
}

// Time Complexity: O(n)
// Space Complexity: O(h) where h is height of tree
```

---

## 11. Contains Duplicate 🔄

**Company:** Amazon, Google, Facebook  
**Difficulty:** Easy  
**Tags:** Array, Hash Table

### Problem Statement

Given an integer array `nums`, return true if any value appears at least twice
in the array.

### Concept Explanation

Use a Set to track seen elements. If an element is already in the set, we found
a duplicate.

### Solution

```javascript
function containsDuplicate(nums) {
  const seen = new Set();

  for (let num of nums) {
    if (seen.has(num)) {
      return true;
    }
    seen.add(num);
  }

  return false;
}

// Time Complexity: O(n)
// Space Complexity: O(n)
```

---

## 12. Product of Array Except Self 🔢

**Company:** Facebook, Amazon, Google  
**Difficulty:** Medium  
**Tags:** Array

### Problem Statement

Given an integer array `nums`, return an array where each element is the product
of all elements except itself.

### Concept Explanation

Calculate left products and right products separately, then combine them.

### Solution

```javascript
function productExceptSelf(nums) {
  const n = nums.length;
  const result = new Array(n);

  // Calculate left products
  result[0] = 1;
  for (let i = 1; i < n; i++) {
    result[i] = result[i - 1] * nums[i - 1];
  }

  // Calculate right products and combine
  let rightProduct = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= rightProduct;
    rightProduct *= nums[i];
  }

  return result;
}

// Time Complexity: O(n)
// Space Complexity: O(1) excluding output array
```

---

## 13. Maximum Depth of Binary Tree 🌲

**Company:** Amazon, Microsoft, Google  
**Difficulty:** Easy  
**Tags:** Tree, Binary Tree

### Problem Statement

Given the root of a binary tree, return its maximum depth.

### Concept Explanation

Use recursion to find the maximum depth of left and right subtrees, then add 1
for current node.

### Solution

```javascript
function maxDepth(root) {
  if (root === null) return 0;

  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);

  return Math.max(leftDepth, rightDepth) + 1;
}

// Iterative solution using BFS
function maxDepthIterative(root) {
  if (root === null) return 0;

  const queue = [root];
  let depth = 0;

  while (queue.length > 0) {
    const levelSize = queue.length;
    depth++;

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  return depth;
}

// Time Complexity: O(n)
// Space Complexity: O(h) where h is height of tree
```

---

## 14. Linked List Cycle 🔄

**Company:** Amazon, Microsoft, Facebook  
**Difficulty:** Easy  
**Tags:** Linked List, Two Pointers

### Problem Statement

Given head of a linked list, determine if the linked list has a cycle.

### Concept Explanation

Use Floyd's Cycle Detection Algorithm (tortoise and hare) with two pointers
moving at different speeds.

### Solution

```javascript
function hasCycle(head) {
  if (head === null || head.next === null) return false;

  let slow = head;
  let fast = head.next;

  while (slow !== fast) {
    if (fast === null || fast.next === null) {
      return false;
    }

    slow = slow.next; // Move one step
    fast = fast.next.next; // Move two steps
  }

  return true;
}

// Time Complexity: O(n)
// Space Complexity: O(1)
```

---

## 15. 3Sum 🎯

**Company:** Amazon, Facebook, Google  
**Difficulty:** Medium  
**Tags:** Array, Two Pointers

### Problem Statement

Given an integer array `nums`, return all unique triplets that sum to zero.

### Concept Explanation

Sort the array, then use two pointers for each element to find triplets.

### Solution

```javascript
function threeSum(nums) {
  const result = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    // Skip duplicates for first element
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);

        // Skip duplicates
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;

        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}

// Time Complexity: O(n²)
// Space Complexity: O(1)
```

---

## 16. Search in Rotated Sorted Array 🔍

**Company:** Amazon, Microsoft, Google  
**Difficulty:** Medium  
**Tags:** Array, Binary Search

### Problem Statement

Search for a target value in a rotated sorted array.

### Concept Explanation

Use modified binary search. One half of the array is always sorted.

### Solution

```javascript
function search(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) return mid;

    // Left half is sorted
    if (nums[left] <= nums[mid]) {
      if (target >= nums[left] && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    // Right half is sorted
    else {
      if (target > nums[mid] && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
}

// Time Complexity: O(log n)
// Space Complexity: O(1)
```

---

## 17. Longest Substring Without Repeating Characters 🔤

**Company:** Amazon, Facebook, Google  
**Difficulty:** Medium  
**Tags:** String, Sliding Window

### Problem Statement

Find the length of the longest substring without repeating characters.

### Concept Explanation

Use sliding window with two pointers and a Set to track characters.

### Solution

```javascript
function lengthOfLongestSubstring(s) {
  const seen = new Set();
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    // Shrink window until no duplicates
    while (seen.has(s[right])) {
      seen.delete(s[left]);
      left++;
    }

    seen.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

// Time Complexity: O(n)
// Space Complexity: O(min(m, n)) where m is charset size
```

---

## 18. Merge Intervals 📊

**Company:** Facebook, Amazon, Google  
**Difficulty:** Medium  
**Tags:** Array, Sorting

### Problem Statement

Given an array of intervals, merge all overlapping intervals.

### Concept Explanation

Sort intervals by start time, then merge overlapping ones.

### Solution

```javascript
function merge(intervals) {
  if (intervals.length <= 1) return intervals;

  // Sort by start time
  intervals.sort((a, b) => a[0] - b[0]);

  const result = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const current = intervals[i];
    const last = result[result.length - 1];

    // If intervals overlap, merge them
    if (current[0] <= last[1]) {
      last[1] = Math.max(last[1], current[1]);
    } else {
      result.push(current);
    }
  }

  return result;
}

// Time Complexity: O(n log n)
// Space Complexity: O(1)
```

---

## 19. Group Anagrams 🔤

**Company:** Amazon, Facebook, Google  
**Difficulty:** Medium  
**Tags:** Array, String, Hash Table

### Problem Statement

Group anagrams together from an array of strings.

### Concept Explanation

Use sorted string as key to group anagrams.

### Solution

```javascript
function groupAnagrams(strs) {
  const groups = new Map();

  for (let str of strs) {
    // Use sorted string as key
    const key = str.split('').sort().join('');

    if (!groups.has(key)) {
      groups.set(key, []);
    }

    groups.get(key).push(str);
  }

  return Array.from(groups.values());
}

// Time Complexity: O(n * m log m) where m is average string length
// Space Complexity: O(n * m)
```

---

## 20. Valid Palindrome 🔄

**Company:** Facebook, Amazon, Microsoft  
**Difficulty:** Easy  
**Tags:** String, Two Pointers

### Problem Statement

Determine if a string is a palindrome, considering only alphanumeric characters
and ignoring cases.

### Concept Explanation

Use two pointers from both ends, comparing characters while skipping
non-alphanumeric ones.

### Solution

```javascript
function isPalindrome(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    // Skip non-alphanumeric characters
    while (left < right && !isAlphanumeric(s[left])) {
      left++;
    }
    while (left < right && !isAlphanumeric(s[right])) {
      right--;
    }

    // Compare characters (case-insensitive)
    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

function isAlphanumeric(char) {
  return /^[a-zA-Z0-9]$/.test(char);
}

// Time Complexity: O(n)
// Space Complexity: O(1)
```

---

## 21. Serialize and Deserialize Binary Tree 🌳

**Company:** Google, Amazon, Facebook  
**Difficulty:** Hard  
**Tags:** Tree, Binary Tree

### Problem Statement

Design algorithms to serialize and deserialize a binary tree.

### Concept Explanation

Use preorder traversal with null markers for serialization.

### Solution

```javascript
function serialize(root) {
  const result = [];

  function preorder(node) {
    if (node === null) {
      result.push('null');
      return;
    }

    result.push(node.val.toString());
    preorder(node.left);
    preorder(node.right);
  }

  preorder(root);
  return result.join(',');
}

function deserialize(data) {
  const values = data.split(',');
  let index = 0;

  function buildTree() {
    if (values[index] === 'null') {
      index++;
      return null;
    }

    const node = { val: parseInt(values[index++]) };
    node.left = buildTree();
    node.right = buildTree();

    return node;
  }

  return buildTree();
}

// Time Complexity: O(n)
// Space Complexity: O(n)
```

---

## 22. Kth Largest Element in Array 🔢

**Company:** Amazon, Facebook, Google  
**Difficulty:** Medium  
**Tags:** Array, Heap, Quick Select

### Problem Statement

Find the kth largest element in an unsorted array.

### Concept Explanation

Use quickselect algorithm or min-heap for efficient solution.

### Solution

```javascript
function findKthLargest(nums, k) {
  // Quick select approach
  function quickSelect(left, right, k) {
    if (left === right) return nums[left];

    const pivotIndex = partition(left, right);

    if (pivotIndex === k) return nums[k];
    else if (pivotIndex < k) return quickSelect(pivotIndex + 1, right, k);
    else return quickSelect(left, pivotIndex - 1, k);
  }

  function partition(left, right) {
    const pivot = nums[right];
    let i = left;

    for (let j = left; j < right; j++) {
      if (nums[j] >= pivot) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
        i++;
      }
    }

    [nums[i], nums[right]] = [nums[right], nums[i]];
    return i;
  }

  return quickSelect(0, nums.length - 1, k - 1);
}

// Time Complexity: O(n) average, O(n²) worst
// Space Complexity: O(1)
```

---

## 23. Top K Frequent Elements 🔢

**Company:** Amazon, Facebook, Google  
**Difficulty:** Medium  
**Tags:** Array, Hash Table, Heap

### Problem Statement

Find the k most frequent elements in an array.

### Concept Explanation

Count frequencies, then use bucket sort or heap to find top k elements.

### Solution

```javascript
function topKFrequent(nums, k) {
  // Count frequencies
  const freqMap = new Map();
  for (let num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  // Bucket sort by frequency
  const buckets = Array(nums.length + 1)
    .fill(null)
    .map(() => []);

  for (let [num, freq] of freqMap) {
    buckets[freq].push(num);
  }

  // Collect top k elements
  const result = [];
  for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
    result.push(...buckets[i]);
  }

  return result.slice(0, k);
}

// Time Complexity: O(n)
// Space Complexity: O(n)
```

---

## 24. Course Schedule 📚

**Company:** Google, Facebook, Amazon  
**Difficulty:** Medium  
**Tags:** Graph, Topological Sort

### Problem Statement

Determine if you can finish all courses given prerequisites.

### Concept Explanation

Model as directed graph and detect cycles using DFS or topological sort.

### Solution

```javascript
function canFinish(numCourses, prerequisites) {
  // Build adjacency list
  const graph = Array(numCourses)
    .fill(null)
    .map(() => []);
  for (let [course, prereq] of prerequisites) {
    graph[prereq].push(course);
  }

  const visited = new Array(numCourses).fill(0); // 0: unvisited, 1: visiting, 2: visited

  function hasCycle(course) {
    if (visited[course] === 1) return true; // Cycle detected
    if (visited[course] === 2) return false; // Already processed

    visited[course] = 1; // Mark as visiting

    for (let nextCourse of graph[course]) {
      if (hasCycle(nextCourse)) return true;
    }

    visited[course] = 2; // Mark as visited
    return false;
  }

  for (let i = 0; i < numCourses; i++) {
    if (hasCycle(i)) return false;
  }

  return true;
}

// Time Complexity: O(V + E)
// Space Complexity: O(V + E)
```

---

## 25. Word Break 🔤

**Company:** Amazon, Facebook, Google  
**Difficulty:** Medium  
**Tags:** Dynamic Programming, String

### Problem Statement

Determine if a string can be segmented into dictionary words.

### Concept Explanation

Use dynamic programming where dp[i] represents if string up to index i can be
segmented.

### Solution

```javascript
function wordBreak(s, wordDict) {
  const wordSet = new Set(wordDict);
  const dp = new Array(s.length + 1).fill(false);
  dp[0] = true; // Empty string can always be segmented

  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      // If substring from 0 to j can be segmented
      // and substring from j to i is in dictionary
      if (dp[j] && wordSet.has(s.substring(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }

  return dp[s.length];
}

// Time Complexity: O(n²)
// Space Complexity: O(n)
```

---

## 26. Coin Change 🪙

**Company:** Amazon, Google, Facebook  
**Difficulty:** Medium  
**Tags:** Dynamic Programming

### Problem Statement

Find the minimum number of coins needed to make up a given amount.

### Concept Explanation

Use dynamic programming where dp[i] represents minimum coins needed for amount
i.

### Solution

```javascript
function coinChange(coins, amount) {
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0; // 0 coins needed for amount 0

  for (let i = 1; i <= amount; i++) {
    for (let coin of coins) {
      if (coin <= i) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
}

// Time Complexity: O(amount * coins.length)
// Space Complexity: O(amount)
```

---

## 27. Longest Common Subsequence 📝

**Company:** Google, Amazon, Microsoft  
**Difficulty:** Medium  
**Tags:** Dynamic Programming, String

### Problem Statement

Find the length of the longest common subsequence between two strings.

### Concept Explanation

Use 2D DP where dp[i][j] represents LCS length for first i characters of text1
and first j characters of text2.

### Solution

```javascript
function longestCommonSubsequence(text1, text2) {
  const m = text1.length;
  const n = text2.length;
  const dp = Array(m + 1)
    .fill(null)
    .map(() => Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[m][n];
}

// Time Complexity: O(m * n)
// Space Complexity: O(m * n)
```

---

## 28. Number of Islands 🏝️

**Company:** Amazon, Facebook, Google  
**Difficulty:** Medium  
**Tags:** Array, DFS, BFS

### Problem Statement

Count the number of islands in a 2D grid where '1' represents land and '0'
represents water.

### Concept Explanation

Use DFS or BFS to explore connected land cells and mark them as visited.

### Solution

```javascript
function numIslands(grid) {
  if (!grid || grid.length === 0) return 0;

  const rows = grid.length;
  const cols = grid[0].length;
  let islands = 0;

  function dfs(row, col) {
    // Check boundaries and if cell is water or visited
    if (
      row < 0 ||
      row >= rows ||
      col < 0 ||
      col >= cols ||
      grid[row][col] === '0'
    ) {
      return;
    }

    // Mark as visited
    grid[row][col] = '0';

    // Explore all 4 directions
    dfs(row + 1, col);
    dfs(row - 1, col);
    dfs(row, col + 1);
    dfs(row, col - 1);
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === '1') {
        islands++;
        dfs(i, j);
      }
    }
  }

  return islands;
}

// Time Complexity: O(m * n)
// Space Complexity: O(m * n) for recursion stack
```

---

## 29. Design LRU Cache 💾

**Company:** Amazon, Facebook, Google  
**Difficulty:** Medium  
**Tags:** Design, Hash Table, Doubly Linked List

### Problem Statement

Design a data structure that follows LRU (Least Recently Used) cache
constraints.

### Concept Explanation

Use HashMap for O(1) access and doubly linked list for O(1) insertion/deletion.

### Solution

```javascript
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();

    // Create dummy head and tail nodes
    this.head = { key: 0, val: 0 };
    this.tail = { key: 0, val: 0 };
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  get(key) {
    if (this.cache.has(key)) {
      const node = this.cache.get(key);
      // Move to head (most recently used)
      this.moveToHead(node);
      return node.val;
    }
    return -1;
  }

  put(key, value) {
    if (this.cache.has(key)) {
      // Update existing node
      const node = this.cache.get(key);
      node.val = value;
      this.moveToHead(node);
    } else {
      // Add new node
      const newNode = { key, val: value };

      if (this.cache.size >= this.capacity) {
        // Remove least recently used
        const tail = this.removeTail();
        this.cache.delete(tail.key);
      }

      this.cache.set(key, newNode);
      this.addToHead(newNode);
    }
  }

  addToHead(node) {
    node.prev = this.head;
    node.next = this.head.next;
    this.head.next.prev = node;
    this.head.next = node;
  }

  removeNode(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  moveToHead(node) {
    this.removeNode(node);
    this.addToHead(node);
  }

  removeTail() {
    const lastNode = this.tail.prev;
    this.removeNode(lastNode);
    return lastNode;
  }
}

// Time Complexity: O(1) for both get and put
// Space Complexity: O(capacity)
```

---

## 30. Sliding Window Maximum 🪟

**Company:** Amazon, Google, Facebook  
**Difficulty:** Hard  
**Tags:** Array, Deque, Sliding Window

### Problem Statement

Find the maximum element in each sliding window of size k.

### Concept Explanation

Use deque to maintain indices of elements in decreasing order of their values.

### Solution

```javascript
function maxSlidingWindow(nums, k) {
  const result = [];
  const deque = []; // Store indices

  for (let i = 0; i < nums.length; i++) {
    // Remove indices outside window
    while (deque.length > 0 && deque[0] < i - k + 1) {
      deque.shift();
    }

    // Remove indices of smaller elements
    while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop();
    }

    deque.push(i);

    // Add maximum to result when window is complete
    if (i >= k - 1) {
      result.push(nums[deque[0]]);
    }
  }

  return result;
}

// Time Complexity: O(n)
// Space Complexity: O(k)
```

---

## 31. Trapping Rain Water 🌧️

**Company:** Amazon, Google, Facebook  
**Difficulty:** Hard  
**Tags:** Array, Two Pointers, Stack

### Problem Statement

Calculate how much water can be trapped after raining given an elevation map.

### Concept Explanation

Use two pointers approach with left and right maximum heights.

### Solution

```javascript
function trap(height) {
  if (height.length === 0) return 0;

  let left = 0;
  let right = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let water = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= leftMax) {
        leftMax = height[left];
      } else {
        water += leftMax - height[left];
      }
      left++;
    } else {
      if (height[right] >= rightMax) {
        rightMax = height[right];
      } else {
        water += rightMax - height[right];
      }
      right--;
    }
  }

  return water;
}

// Time Complexity: O(n)
// Space Complexity: O(1)
```

---

## 32. Edit Distance ✏️

**Company:** Google, Facebook, Amazon  
**Difficulty:** Hard  
**Tags:** Dynamic Programming, String

### Problem Statement

Find the minimum number of operations to convert word1 to word2.

### Concept Explanation

Use 2D DP where dp[i][j] represents minimum operations to convert first i
characters of word1 to first j characters of word2.

### Solution

```javascript
function minDistance(word1, word2) {
  const m = word1.length;
  const n = word2.length;
  const dp = Array(m + 1)
    .fill(null)
    .map(() => Array(n + 1).fill(0));

  // Initialize base cases
  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1]; // No operation needed
      } else {
        dp[i][j] = Math.min(
          dp[i - 1][j] + 1, // Delete
          dp[i][j - 1] + 1, // Insert
          dp[i - 1][j - 1] + 1 // Replace
        );
      }
    }
  }

  return dp[m][n];
}

// Time Complexity: O(m * n)
// Space Complexity: O(m * n)
```

---

## 33. Median of Two Sorted Arrays 🔢

**Company:** Google, Amazon, Microsoft  
**Difficulty:** Hard  
**Tags:** Array, Binary Search

### Problem Statement

Find the median of two sorted arrays.

### Concept Explanation

Use binary search on the smaller array to find the correct partition.

### Solution

```javascript
function findMedianSortedArrays(nums1, nums2) {
  // Ensure nums1 is the smaller array
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }

  const m = nums1.length;
  const n = nums2.length;
  let left = 0;
  let right = m;

  while (left <= right) {
    const partitionX = Math.floor((left + right) / 2);
    const partitionY = Math.floor((m + n + 1) / 2) - partitionX;

    const maxLeftX = partitionX === 0 ? -Infinity : nums1[partitionX - 1];
    const minRightX = partitionX === m ? Infinity : nums1[partitionX];

    const maxLeftY = partitionY === 0 ? -Infinity : nums2[partitionY - 1];
    const minRightY = partitionY === n ? Infinity : nums2[partitionY];

    if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
      // Found correct partition
      if ((m + n) % 2 === 0) {
        return (
          (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2
        );
      } else {
        return Math.max(maxLeftX, maxLeftY);
      }
    } else if (maxLeftX > minRightY) {
      right = partitionX - 1;
    } else {
      left = partitionX + 1;
    }
  }

  throw new Error('Input arrays are not sorted');
}

// Time Complexity: O(log(min(m, n)))
// Space Complexity: O(1)
```

---

## 34. Regular Expression Matching 🔍

**Company:** Google, Facebook, Amazon  
**Difficulty:** Hard  
**Tags:** Dynamic Programming, String

### Problem Statement

Implement regular expression matching with support for '.' and '\*'.

### Concept Explanation

Use 2D DP where dp[i][j] represents if first i characters of string match first
j characters of pattern.

### Solution

```javascript
function isMatch(s, p) {
  const m = s.length;
  const n = p.length;
  const dp = Array(m + 1)
    .fill(null)
    .map(() => Array(n + 1).fill(false));

  // Base case: empty string matches empty pattern
  dp[0][0] = true;

  // Handle patterns like a*, a*b*, a*b*c*
  for (let j = 2; j <= n; j += 2) {
    if (p[j - 1] === '*') {
      dp[0][j] = dp[0][j - 2];
    }
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (p[j - 1] === '*') {
        // Two cases: use * as empty or match one/more characters
        dp[i][j] =
          dp[i][j - 2] ||
          (dp[i - 1][j] && (s[i - 1] === p[j - 2] || p[j - 2] === '.'));
      } else {
        // Regular character or '.' matching
        dp[i][j] =
          dp[i - 1][j - 1] && (s[i - 1] === p[j - 1] || p[j - 1] === '.');
      }
    }
  }

  return dp[m][n];
}

// Time Complexity: O(m * n)
// Space Complexity: O(m * n)
```

---

## 35. Longest Palindromic Substring 🔄

**Company:** Amazon, Facebook, Google  
**Difficulty:** Medium  
**Tags:** String, Dynamic Programming

### Problem Statement

Find the longest palindromic substring in a given string.

### Concept Explanation

Expand around centers approach: for each possible center, expand outward while
characters match.

### Solution

```javascript
function longestPalindrome(s) {
  if (s.length === 0) return '';

  let start = 0;
  let maxLength = 1;

  function expandAroundCenter(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      const currentLength = right - left + 1;
      if (currentLength > maxLength) {
        start = left;
        maxLength = currentLength;
      }
      left--;
      right++;
    }
  }

  for (let i = 0; i < s.length; i++) {
    // Check for odd length palindromes
    expandAroundCenter(i, i);

    // Check for even length palindromes
    expandAroundCenter(i, i + 1);
  }

  return s.substring(start, start + maxLength);
}

// Time Complexity: O(n²)
// Space Complexity: O(1)
```

---

## 🚀 Key Tips for DSA Interviews

### 📝 Problem-Solving Approach

1. **Understand the Problem** - Read carefully and ask clarifying questions
2. **Think Out Loud** - Explain your thought process
3. **Start with Brute Force** - Then optimize
4. **Test with Examples** - Walk through your solution
5. **Handle Edge Cases** - Consider empty inputs, single elements, etc.

### ⚡ Time Complexity Cheat Sheet

- **O(1)** - Hash table operations, array access
- **O(log n)** - Binary search, balanced tree operations
- **O(n)** - Linear search, single array traversal
- **O(n log n)** - Efficient sorting, divide and conquer
- **O(n²)** - Nested loops, some DP problems
- **O(2ⁿ)** - Recursive solutions without memoization

### 🎯 Common Patterns

- **Two Pointers** - Array problems, palindromes
- **Sliding Window** - Subarray/substring problems
- **Fast & Slow Pointers** - Linked list cycles
- **Merge Intervals** - Overlapping intervals
- **Cyclic Sort** - Problems with numbers in range
- **Tree DFS** - Tree traversal, path problems
- **Tree BFS** - Level order traversal
- **Graph DFS/BFS** - Connected components, shortest path
- **Dynamic Programming** - Optimization problems
- **Binary Search** - Search in sorted arrays

### 💡 Interview Success Tips

- Practice coding on a whiteboard or paper
- Focus on clean, readable code
- Explain your approach before coding
- Test your solution with examples
- Discuss trade-offs between solutions
- Be prepared to optimize your initial solution

---

_Good luck with your DSA interviews! Remember, consistent practice and
understanding the underlying concepts are key to success. 🎉_
