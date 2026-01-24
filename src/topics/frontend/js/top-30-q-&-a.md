# Top 30 JavaScript DSA Coding Questions

### **1. Reverse a String**

```js
function reverseString(str) {
  return str.split('').reverse().join('');
}
```

---

### **2. Check for Palindrome**

```js
function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}
```

---

### **3. FizzBuzz**

```js
for (let i = 1; i <= 100; i++) {
  let out = '';
  if (i % 3 === 0) out += 'Fizz';
  if (i % 5 === 0) out += 'Buzz';
  console.log(out || i);
}
```

---

### **4. Factorial (Recursive)**

```js
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
```

---

### **5. Fibonacci (Memoized)**

```js
const fib = (n, memo = {}) => {
  if (n <= 1) return n;
  if (memo[n]) return memo[n];
  return (memo[n] = fib(n - 1, memo) + fib(n - 2, memo));
};
```

---

### **6. Find Max in Array**

```js
function findMax(arr) {
  return Math.max(...arr);
}
```

---

### **7. Remove Duplicates from Array**

```js
function removeDuplicates(arr) {
  return [...new Set(arr)];
}
```

---

### **8. Find Missing Number in 1 to N**

```js
function findMissing(arr, n) {
  const total = (n * (n + 1)) / 2;
  return total - arr.reduce((a, b) => a + b, 0);
}
```

---

### **9. Anagram Check**

```js
function isAnagram(a, b) {
  return a.split('').sort().join('') === b.split('').sort().join('');
}
```

---

### **10. Count Character Frequency**

```js
function charCount(str) {
  return [...str].reduce((acc, c) => {
    acc[c] = (acc[c] || 0) + 1;
    return acc;
  }, {});
}
```

---

### **11. First Non-Repeating Character**

```js
function firstUniqueChar(str) {
  const map = {};
  for (let char of str) map[char] = (map[char] || 0) + 1;
  return [...str].find((c) => map[c] === 1) || null;
}
```

---

### **12. Merge Two Sorted Arrays**

```js
function mergeSorted(arr1, arr2) {
  let i = 0,
    j = 0,
    result = [];
  while (i < arr1.length && j < arr2.length) {
    result.push(arr1[i] < arr2[j] ? arr1[i++] : arr2[j++]);
  }
  return result.concat(arr1.slice(i), arr2.slice(j));
}
```

---

### **13. Binary Search**

```js
function binarySearch(arr, target) {
  let left = 0,
    right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    arr[mid] < target ? (left = mid + 1) : (right = mid - 1);
  }
  return -1;
}
```

---

### **14. Two Sum**

```js
function twoSum(nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[target - nums[i]] !== undefined) return [map[target - nums[i]], i];
    map[nums[i]] = i;
  }
}
```

---

### **15. Move Zeroes to End**

```js
function moveZeroes(arr) {
  let idx = 0;
  for (let i = 0; i < arr.length; i++)
    if (arr[i] !== 0) [arr[i], arr[idx++]] = [arr[idx], arr[i]];
  return arr;
}
```

---

### **16. Valid Parentheses**

```js
function isValid(s) {
  const stack = [],
    map = { '(': ')', '{': '}', '[': ']' };
  for (let c of s) {
    if (map[c]) stack.push(map[c]);
    else if (stack.pop() !== c) return false;
  }
  return !stack.length;
}
```

---

### **17. Flatten Nested Array**

```js
function flatten(arr) {
  return arr.flat(Infinity); // or use recursion
}
```

---

### **18. Deep Clone Object**

```js
function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj)); // not for functions/symbols
}
```

---

### **19. Implement a Queue**

```js
class Queue {
  constructor() {
    this.q = [];
  }
  enqueue(val) {
    this.q.push(val);
  }
  dequeue() {
    return this.q.shift();
  }
  peek() {
    return this.q[0];
  }
}
```

---

### **20. Implement a Stack**

```js
class Stack {
  constructor() {
    this.s = [];
  }
  push(val) {
    this.s.push(val);
  }
  pop() {
    return this.s.pop();
  }
  peek() {
    return this.s[this.s.length - 1];
  }
}
```

---

### **21. Rotate Array**

```js
function rotate(arr, k) {
  k %= arr.length;
  return [...arr.slice(-k), ...arr.slice(0, -k)];
}
```

---

### **22. Find Intersection of Two Arrays**

```js
function intersection(a, b) {
  return [...new Set(a)].filter((x) => new Set(b).has(x));
}
```

---

### **23. Longest Word in Sentence**

```js
function longestWord(str) {
  return str.split(' ').reduce((a, b) => (a.length > b.length ? a : b));
}
```

---

### **24. Count Vowels**

```js
function countVowels(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}
```

---

### **25. Remove Duplicates from Sorted Array (In-place)**

```js
function removeDuplicates(nums) {
  let i = 0;
  for (let j = 1; j < nums.length; j++)
    if (nums[i] !== nums[j]) nums[++i] = nums[j];
  return i + 1;
}
```

---

### **26. Subset Sum Exists**

```js
function hasSubsetSum(nums, target) {
  const dp = new Set([0]);
  for (let num of nums) {
    for (let t of [...dp]) dp.add(t + num);
  }
  return dp.has(target);
}
```

---

### **27. Check if Array is Sorted**

```js
function isSorted(arr) {
  return arr.every((v, i, a) => i === 0 || a[i - 1] <= v);
}
```

---

### **28. Convert Roman to Integer**

```js
function romanToInt(s) {
  const map = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let total = 0;
  for (let i = 0; i < s.length; i++) {
    const curr = map[s[i]],
      next = map[s[i + 1]];
    total += curr < next ? -curr : curr;
  }
  return total;
}
```

---

### **29. Find GCD**

```js
function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}
```

---

### **30. LRU Cache (Basic Implementation)**

```js
class LRU {
  constructor(capacity) {
    this.map = new Map();
    this.capacity = capacity;
  }
  get(key) {
    if (!this.map.has(key)) return -1;
    const val = this.map.get(key);
    this.map.delete(key);
    this.map.set(key, val);
    return val;
  }
  put(key, val) {
    if (this.map.has(key)) this.map.delete(key);
    else if (this.map.size === this.capacity)
      this.map.delete(this.map.keys().next().value);
    this.map.set(key, val);
  }
}
```
