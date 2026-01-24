# 🚀 Top 20 JavaScript Objects DSA Interview Questions

## 📋 Table of Contents

### 🟢 Easy Questions (1-10)

1. [Two Sum using Objects](#1-two-sum-using-objects) - _Google, Amazon_
2. [Valid Anagram using Object](#2-valid-anagram-using-object) - _Facebook,
   Microsoft_
3. [First Unique Character](#3-first-unique-character) - _Amazon, Apple_
4. [Object Deep Clone](#4-object-deep-clone) - _Netflix, Uber_
5. [Merge Two Objects](#5-merge-two-objects) - _Airbnb, Spotify_
6. [Count Character Frequency](#6-count-character-frequency) - _Google,
   LinkedIn_
7. [Group Anagrams using Objects](#7-group-anagrams-using-objects) - _Amazon,
   Facebook_
8. [Object Key-Value Swap](#8-object-key-value-swap) - _Microsoft, Adobe_
9. [Find Missing Number using Object](#9-find-missing-number-using-object) -
   _Apple, Tesla_
10. [Object Property Sum](#10-object-property-sum) - _Salesforce, Twitter_

### 🟡 Medium Questions (11-20)

11. [LRU Cache Implementation](#11-lru-cache-implementation) - _Google,
    Facebook_
12. [Design HashMap](#12-design-hashmap) - _Amazon, Microsoft_
13. [Word Pattern Matching](#13-word-pattern-matching) - _LinkedIn, Uber_
14. [Top K Frequent Elements](#14-top-k-frequent-elements) - _Facebook, Netflix_
15. [Design Twitter Feed](#15-design-twitter-feed) - _Twitter, Meta_
16. [Serialize/Deserialize Object](#16-serializedeserialize-object) - _Google,
    Amazon_
17. [Object Path Sum](#17-object-path-sum) - _Airbnb, Stripe_
18. [Flatten Nested Object](#18-flatten-nested-object) - _Microsoft, Adobe_
19. [Object Diff Algorithm](#19-object-diff-algorithm) - _GitHub, Atlassian_
20. [Design Phone Directory](#20-design-phone-directory) - _Apple, Snapchat_

---

## 🟢 Easy Questions

### 1. Two Sum using Objects 📊

**Company:** Google, Amazon

**Problem Statement:** Given an array of integers and a target sum, return
indices of two numbers that add up to the target using an object for O(1)
lookup.

**Concept Explanation:** Use an object as a hash map to store previously seen
numbers and their indices. For each number, check if its complement (target -
current) exists in the object.

**Solution:**

```javascript
function twoSum(nums, target) {
  // Object to store number -> index mapping
  const numMap = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    // Check if complement exists in our object
    if (numMap.hasOwnProperty(complement)) {
      return [numMap[complement], i];
    }

    // Store current number and its index
    numMap[nums[i]] = i;
  }

  return []; // No solution found
}

// Example usage
console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
```

**Time Complexity:** O(n) | **Space Complexity:** O(n)

---

### 2. Valid Anagram using Object 🔤

**Company:** Facebook, Microsoft

**Problem Statement:** Check if two strings are anagrams by counting character
frequencies using objects.

**Concept Explanation:** Count frequency of each character in both strings using
objects. Two strings are anagrams if they have identical character frequency
maps.

**Solution:**

```javascript
function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  // Object to count character frequencies
  const charCount = {};

  // Count characters in first string
  for (let char of s) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Subtract character counts from second string
  for (let char of t) {
    if (!charCount[char]) return false;
    charCount[char]--;
  }

  // Check if all counts are zero
  return Object.values(charCount).every((count) => count === 0);
}

// Example usage
console.log(isAnagram('listen', 'silent')); // true
```

**Time Complexity:** O(n) | **Space Complexity:** O(1) - limited to 26
characters

---

### 3. First Unique Character 🎯

**Company:** Amazon, Apple

**Problem Statement:** Find the first non-repeating character in a string using
an object to track frequencies.

**Concept Explanation:** Use an object to count character frequencies, then
iterate through the string again to find the first character with frequency 1.

**Solution:**

```javascript
function firstUniqChar(s) {
  // Object to store character frequencies
  const charFreq = {};

  // Count frequency of each character
  for (let char of s) {
    charFreq[char] = (charFreq[char] || 0) + 1;
  }

  // Find first character with frequency 1
  for (let i = 0; i < s.length; i++) {
    if (charFreq[s[i]] === 1) {
      return i;
    }
  }

  return -1; // No unique character found
}

// Example usage
console.log(firstUniqChar('leetcode')); // 0 (character 'l')
```

**Time Complexity:** O(n) | **Space Complexity:** O(1) - limited character set

---

### 4. Object Deep Clone 🔄

**Company:** Netflix, Uber

**Problem Statement:** Create a deep clone of an object that handles nested
objects, arrays, and primitive values.

**Concept Explanation:** Recursively traverse the object structure, creating new
objects and arrays while preserving the original structure and values.

**Solution:**

```javascript
function deepClone(obj) {
  // Handle primitive types and null
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  // Handle Date objects
  if (obj instanceof Date) {
    return new Date(obj.getTime());
  }

  // Handle Arrays
  if (Array.isArray(obj)) {
    return obj.map((item) => deepClone(item));
  }

  // Handle Objects
  const clonedObj = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clonedObj[key] = deepClone(obj[key]);
    }
  }

  return clonedObj;
}

// Example usage
const original = {
  name: 'John',
  age: 30,
  address: { city: 'NYC', zip: 10001 },
  hobbies: ['reading', 'coding'],
};

const cloned = deepClone(original);
console.log(cloned); // Complete deep copy
```

**Time Complexity:** O(n) where n is total number of properties | **Space
Complexity:** O(n)

---

### 5. Merge Two Objects 🤝

**Company:** Airbnb, Spotify

**Problem Statement:** Merge two objects deeply, where properties in the second
object override those in the first.

**Concept Explanation:** Recursively merge objects by iterating through
properties and handling nested objects separately from primitive values.

**Solution:**

```javascript
function mergeObjects(obj1, obj2) {
  // Create a new object to avoid mutating originals
  const result = { ...obj1 };

  for (let key in obj2) {
    if (obj2.hasOwnProperty(key)) {
      // If both values are objects, merge recursively
      if (isObject(result[key]) && isObject(obj2[key])) {
        result[key] = mergeObjects(result[key], obj2[key]);
      } else {
        // Override with obj2's value
        result[key] = obj2[key];
      }
    }
  }

  return result;
}

// Helper function to check if value is an object
function isObject(item) {
  return item && typeof item === 'object' && !Array.isArray(item);
}

// Example usage
const obj1 = { a: 1, b: { x: 10, y: 20 } };
const obj2 = { b: { y: 30, z: 40 }, c: 3 };
console.log(mergeObjects(obj1, obj2));
// { a: 1, b: { x: 10, y: 30, z: 40 }, c: 3 }
```

**Time Complexity:** O(n) | **Space Complexity:** O(n)

---

### 6. Count Character Frequency 📊

**Company:** Google, LinkedIn

**Problem Statement:** Count the frequency of each character in a string and
return an object with character-frequency pairs.

**Concept Explanation:** Iterate through the string and use an object to
maintain a running count of each character's frequency.

**Solution:**

```javascript
function countCharFrequency(str) {
  // Object to store character frequencies
  const frequency = {};

  // Iterate through each character
  for (let char of str.toLowerCase()) {
    // Skip spaces if needed
    if (char !== ' ') {
      frequency[char] = (frequency[char] || 0) + 1;
    }
  }

  return frequency;
}

// Alternative implementation with reduce
function countCharFrequencyReduce(str) {
  return str
    .toLowerCase()
    .split('')
    .filter((char) => char !== ' ')
    .reduce((freq, char) => {
      freq[char] = (freq[char] || 0) + 1;
      return freq;
    }, {});
}

// Example usage
console.log(countCharFrequency('Hello World'));
// { h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 }
```

**Time Complexity:** O(n) | **Space Complexity:** O(k) where k is unique
characters

---

### 7. Group Anagrams using Objects 📝

**Company:** Amazon, Facebook

**Problem Statement:** Group strings that are anagrams of each other using an
object to categorize them.

**Concept Explanation:** Sort characters in each string to create a key. Strings
with the same sorted key are anagrams and belong to the same group.

**Solution:**

```javascript
function groupAnagrams(strs) {
  // Object to group anagrams by their sorted key
  const anagramGroups = {};

  for (let str of strs) {
    // Create key by sorting characters
    const sortedKey = str.split('').sort().join('');

    // Group strings with same key
    if (!anagramGroups[sortedKey]) {
      anagramGroups[sortedKey] = [];
    }
    anagramGroups[sortedKey].push(str);
  }

  // Return all groups as array
  return Object.values(anagramGroups);
}

// Example usage
const words = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
console.log(groupAnagrams(words));
// [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]
```

**Time Complexity:** O(n \* m log m) where n is array length, m is average
string length | **Space Complexity:** O(n)

---

### 8. Object Key-Value Swap 🔄

**Company:** Microsoft, Adobe

**Problem Statement:** Swap keys and values in an object, ensuring all values
are strings or numbers.

**Concept Explanation:** Iterate through object entries and create a new object
where original values become keys and original keys become values.

**Solution:**

```javascript
function swapKeyValue(obj) {
  const swapped = {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];

      // Ensure value can be a valid key (string or number)
      if (typeof value === 'string' || typeof value === 'number') {
        swapped[value] = key;
      }
    }
  }

  return swapped;
}

// Alternative using Object.entries
function swapKeyValueEntries(obj) {
  return Object.entries(obj)
    .filter(
      ([key, value]) => typeof value === 'string' || typeof value === 'number'
    )
    .reduce((swapped, [key, value]) => {
      swapped[value] = key;
      return swapped;
    }, {});
}

// Example usage
const original = { a: 1, b: 2, c: 'hello', d: true };
console.log(swapKeyValue(original));
// { 1: 'a', 2: 'b', hello: 'c' } (d excluded as boolean)
```

**Time Complexity:** O(n) | **Space Complexity:** O(n)

---

### 9. Find Missing Number using Object 🔍

**Company:** Apple, Tesla

**Problem Statement:** Find the missing number in an array of consecutive
integers using an object for O(1) lookup.

**Concept Explanation:** Store all present numbers in an object, then iterate
through the expected range to find which number is missing.

**Solution:**

```javascript
function findMissingNumber(nums, n) {
  // Object to store present numbers
  const present = {};

  // Mark all present numbers
  for (let num of nums) {
    present[num] = true;
  }

  // Find missing number in range [0, n]
  for (let i = 0; i <= n; i++) {
    if (!present[i]) {
      return i;
    }
  }

  return -1; // No missing number
}

// Mathematical approach (more efficient)
function findMissingNumberMath(nums, n) {
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = nums.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
}

// Example usage
console.log(findMissingNumber([0, 1, 3, 4, 5], 5)); // 2
```

**Time Complexity:** O(n) | **Space Complexity:** O(n) for object approach, O(1)
for math approach

---

### 10. Object Property Sum 🧮

**Company:** Salesforce, Twitter

**Problem Statement:** Calculate the sum of all numeric properties in an object,
including nested objects.

**Concept Explanation:** Recursively traverse the object structure, identifying
numeric values and adding them to a running total.

**Solution:**

```javascript
function objectPropertySum(obj) {
  let sum = 0;

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];

      if (typeof value === 'number') {
        // Add numeric values
        sum += value;
      } else if (typeof value === 'object' && value !== null) {
        // Recursively sum nested objects
        sum += objectPropertySum(value);
      }
    }
  }

  return sum;
}

// Alternative using Object.values recursively
function objectPropertySumValues(obj) {
  return Object.values(obj).reduce((sum, value) => {
    if (typeof value === 'number') {
      return sum + value;
    } else if (typeof value === 'object' && value !== null) {
      return sum + objectPropertySumValues(value);
    }
    return sum;
  }, 0);
}

// Example usage
const data = {
  a: 10,
  b: 'hello',
  c: {
    d: 20,
    e: {
      f: 5,
    },
  },
  g: [1, 2, 3], // Arrays are objects too
};

console.log(objectPropertySum(data)); // 41 (10 + 20 + 5 + 1 + 2 + 3)
```

**Time Complexity:** O(n) where n is total properties | **Space Complexity:**
O(d) where d is nesting depth

---

## 🟡 Medium Questions

### 11. LRU Cache Implementation 💾

**Company:** Google, Facebook

**Problem Statement:** Implement a Least Recently Used (LRU) cache with get and
put operations, both in O(1) time complexity.

**Concept Explanation:** Combine a doubly-linked list (for O(1)
insertion/deletion) with an object/Map (for O(1) key lookup). The list maintains
order of usage.

**Solution:**

```javascript
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map(); // For O(1) key lookup

    // Dummy head and tail nodes for easier manipulation
    this.head = { key: 0, val: 0, prev: null, next: null };
    this.tail = { key: 0, val: 0, prev: null, next: null };
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  get(key) {
    if (this.cache.has(key)) {
      const node = this.cache.get(key);
      // Move to front (most recently used)
      this.moveToHead(node);
      return node.val;
    }
    return -1;
  }

  put(key, value) {
    if (this.cache.has(key)) {
      // Update existing key
      const node = this.cache.get(key);
      node.val = value;
      this.moveToHead(node);
    } else {
      // Add new key
      const newNode = { key, val: value, prev: null, next: null };

      if (this.cache.size >= this.capacity) {
        // Remove least recently used (tail)
        const tail = this.removeTail();
        this.cache.delete(tail.key);
      }

      this.addToHead(newNode);
      this.cache.set(key, newNode);
    }
  }

  // Helper methods for doubly-linked list operations
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

// Example usage
const lru = new LRUCache(2);
lru.put(1, 1);
lru.put(2, 2);
console.log(lru.get(1)); // 1
lru.put(3, 3); // Evicts key 2
console.log(lru.get(2)); // -1 (not found)
```

**Time Complexity:** O(1) for both get and put | **Space Complexity:**
O(capacity)

---

### 12. Design HashMap 🗺️

**Company:** Amazon, Microsoft

**Problem Statement:** Design a HashMap with basic operations (put, get, remove)
without using built-in hash table libraries.

**Concept Explanation:** Use an array of buckets where each bucket is a list of
key-value pairs. Handle collisions using chaining. Implement a simple hash
function.

**Solution:**

```javascript
class MyHashMap {
  constructor() {
    this.size = 1000; // Initial bucket size
    this.buckets = new Array(this.size);

    // Initialize each bucket as empty array
    for (let i = 0; i < this.size; i++) {
      this.buckets[i] = [];
    }
  }

  // Simple hash function
  hash(key) {
    return key % this.size;
  }

  put(key, value) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    // Check if key already exists
    for (let pair of bucket) {
      if (pair.key === key) {
        pair.value = value; // Update existing
        return;
      }
    }

    // Add new key-value pair
    bucket.push({ key, value });
  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    // Search for key in bucket
    for (let pair of bucket) {
      if (pair.key === key) {
        return pair.value;
      }
    }

    return -1; // Key not found
  }

  remove(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    // Find and remove key-value pair
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i].key === key) {
        bucket.splice(i, 1);
        return;
      }
    }
  }

  // Optional: Display all key-value pairs
  display() {
    const result = {};
    for (let bucket of this.buckets) {
      for (let pair of bucket) {
        result[pair.key] = pair.value;
      }
    }
    return result;
  }
}

// Example usage
const map = new MyHashMap();
map.put(1, 1);
map.put(2, 2);
console.log(map.get(1)); // 1
console.log(map.get(3)); // -1
map.put(2, 1); // Update key 2
console.log(map.get(2)); // 1
map.remove(2);
console.log(map.get(2)); // -1
```

**Time Complexity:** O(1) average, O(n) worst case | **Space Complexity:** O(n)

---

### 13. Word Pattern Matching 🎨

**Company:** LinkedIn, Uber

**Problem Statement:** Check if a string follows a pattern where each character
in the pattern maps to exactly one word.

**Concept Explanation:** Use two objects: one to map pattern characters to
words, another to ensure each word maps to only one character (bijection).

**Solution:**

```javascript
function wordPattern(pattern, s) {
  const words = s.split(' ');

  // Pattern and words must have same length
  if (pattern.length !== words.length) {
    return false;
  }

  // Two-way mapping to ensure bijection
  const charToWord = {};
  const wordToChar = {};

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    const word = words[i];

    // Check char -> word mapping
    if (charToWord[char]) {
      if (charToWord[char] !== word) {
        return false;
      }
    } else {
      charToWord[char] = word;
    }

    // Check word -> char mapping (bijection)
    if (wordToChar[word]) {
      if (wordToChar[word] !== char) {
        return false;
      }
    } else {
      wordToChar[word] = char;
    }
  }

  return true;
}

// Alternative implementation using Map
function wordPatternMap(pattern, s) {
  const words = s.split(' ');
  if (pattern.length !== words.length) return false;

  const map1 = new Map();
  const map2 = new Map();

  for (let i = 0; i < pattern.length; i++) {
    const c = pattern[i];
    const w = words[i];

    if (!map1.has(c)) map1.set(c, w);
    if (!map2.has(w)) map2.set(w, c);

    if (map1.get(c) !== w || map2.get(w) !== c) {
      return false;
    }
  }

  return true;
}

// Example usage
console.log(wordPattern('abba', 'dog cat cat dog')); // true
console.log(wordPattern('abba', 'dog cat cat fish')); // false
console.log(wordPattern('aaaa', 'dog cat cat dog')); // false
```

**Time Complexity:** O(n) where n is pattern length | **Space Complexity:** O(m)
where m is unique characters/words

---

### 14. Top K Frequent Elements 📊

**Company:** Facebook, Netflix

**Problem Statement:** Find the k most frequent elements in an array using
objects for frequency counting.

**Concept Explanation:** Use an object to count frequencies, then sort by
frequency or use bucket sort for better performance.

**Solution:**

```javascript
function topKFrequent(nums, k) {
  // Step 1: Count frequencies using object
  const freqMap = {};
  for (let num of nums) {
    freqMap[num] = (freqMap[num] || 0) + 1;
  }

  // Step 2: Convert to array and sort by frequency
  const freqArray = Object.entries(freqMap);
  freqArray.sort((a, b) => b[1] - a[1]);

  // Step 3: Return top k elements
  return freqArray.slice(0, k).map(([num, freq]) => parseInt(num));
}

// Bucket sort approach (O(n) time complexity)
function topKFrequentBucket(nums, k) {
  // Count frequencies
  const freqMap = {};
  for (let num of nums) {
    freqMap[num] = (freqMap[num] || 0) + 1;
  }

  // Create buckets for each possible frequency
  const buckets = new Array(nums.length + 1);
  for (let i = 0; i < buckets.length; i++) {
    buckets[i] = [];
  }

  // Place numbers in buckets based on frequency
  for (let [num, freq] of Object.entries(freqMap)) {
    buckets[freq].push(parseInt(num));
  }

  // Collect results from highest frequency buckets
  const result = [];
  for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
    result.push(...buckets[i]);
  }

  return result.slice(0, k);
}

// Example usage
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)); // [1, 2]
console.log(topKFrequent([1], 1)); // [1]
```

**Time Complexity:** O(n log n) for sort approach, O(n) for bucket sort |
**Space Complexity:** O(n)

---

### 15. Design Twitter Feed 🐦

**Company:** Twitter, Meta

**Problem Statement:** Design a simplified Twitter with user
following/unfollowing and retrieving recent tweets from followed users.

**Concept Explanation:** Use objects to store user relationships and tweets.
Maintain a timeline by merging recent tweets from followed users.

**Solution:**

```javascript
class Twitter {
  constructor() {
    this.tweets = {}; // userId -> array of {tweetId, timestamp}
    this.following = {}; // userId -> Set of followed userIds
    this.timestamp = 0;
  }

  postTweet(userId, tweetId) {
    // Initialize user's tweets if first time
    if (!this.tweets[userId]) {
      this.tweets[userId] = [];
    }

    // Add tweet with timestamp
    this.tweets[userId].push({
      tweetId: tweetId,
      timestamp: this.timestamp++,
    });
  }

  getNewsFeed(userId) {
    // Get all relevant tweets (user's own + followed users')
    const relevantTweets = [];

    // Add user's own tweets
    if (this.tweets[userId]) {
      relevantTweets.push(...this.tweets[userId]);
    }

    // Add followed users' tweets
    if (this.following[userId]) {
      for (let followeeId of this.following[userId]) {
        if (this.tweets[followeeId]) {
          relevantTweets.push(...this.tweets[followeeId]);
        }
      }
    }

    // Sort by timestamp (most recent first) and take top 10
    relevantTweets.sort((a, b) => b.timestamp - a.timestamp);
    return relevantTweets.slice(0, 10).map((tweet) => tweet.tweetId);
  }

  follow(followerId, followeeId) {
    if (followerId === followeeId) return; // Can't follow yourself

    if (!this.following[followerId]) {
      this.following[followerId] = new Set();
    }
    this.following[followerId].add(followeeId);
  }

  unfollow(followerId, followeeId) {
    if (this.following[followerId]) {
      this.following[followerId].delete(followeeId);
    }
  }
}

// Example usage
const twitter = new Twitter();
twitter.postTweet(1, 5);
console.log(twitter.getNewsFeed(1)); // [5]
twitter.follow(1, 2);
twitter.postTweet(2, 6);
console.log(twitter.getNewsFeed(1)); // [6, 5]
twitter.unfollow(1, 2);
console.log(twitter.getNewsFeed(1)); // [5]
```

**Time Complexity:** O(n log n) for getNewsFeed, O(1) for other operations |
**Space Complexity:** O(n)

---

### 16. Serialize/Deserialize Object 📦

**Company:** Google, Amazon

**Problem Statement:** Serialize an object to a string and deserialize it back,
handling circular references and complex data types.

**Concept Explanation:** Convert object to JSON-like string representation while
tracking visited objects to handle circular references. Reconstruct object from
string representation.

**Solution:**

```javascript
class ObjectSerializer {
  serialize(obj) {
    const visited = new WeakMap();
    const refs = new Map();
    let refId = 0;

    const serializeHelper = (obj) => {
      // Handle primitives and null
      if (obj === null || typeof obj !== 'object') {
        return { type: 'primitive', value: obj };
      }

      // Handle circular references
      if (visited.has(obj)) {
        const id = visited.get(obj);
        return { type: 'reference', refId: id };
      }

      // Mark as visited
      const currentId = refId++;
      visited.set(obj, currentId);

      // Handle arrays
      if (Array.isArray(obj)) {
        const serialized = {
          type: 'array',
          refId: currentId,
          value: obj.map((item) => serializeHelper(item)),
        };
        refs.set(currentId, serialized);
        return serialized;
      }

      // Handle Date objects
      if (obj instanceof Date) {
        const serialized = {
          type: 'date',
          refId: currentId,
          value: obj.getTime(),
        };
        refs.set(currentId, serialized);
        return serialized;
      }

      // Handle regular objects
      const serialized = {
        type: 'object',
        refId: currentId,
        value: {},
      };

      refs.set(currentId, serialized);

      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          serialized.value[key] = serializeHelper(obj[key]);
        }
      }

      return serialized;
    };

    const result = serializeHelper(obj);
    return JSON.stringify({ root: result, refs: Array.from(refs.entries()) });
  }

  deserialize(str) {
    const { root, refs } = JSON.parse(str);
    const refMap = new Map(refs);
    const objects = new Map();

    const deserializeHelper = (node) => {
      if (node.type === 'primitive') {
        return node.value;
      }

      if (node.type === 'reference') {
        return objects.get(node.refId);
      }

      if (objects.has(node.refId)) {
        return objects.get(node.refId);
      }

      let obj;

      if (node.type === 'array') {
        obj = [];
        objects.set(node.refId, obj);
        obj.push(...node.value.map((item) => deserializeHelper(item)));
      } else if (node.type === 'date') {
        obj = new Date(node.value);
        objects.set(node.refId, obj);
      } else if (node.type === 'object') {
        obj = {};
        objects.set(node.refId, obj);
        for (let key in node.value) {
          obj[key] = deserializeHelper(node.value[key]);
        }
      }

      return obj;
    };

    return deserializeHelper(root);
  }
}

// Example usage
const serializer = new ObjectSerializer();

// Test with circular reference
const obj = { name: 'John', age: 30 };
obj.self = obj; // Circular reference

const serialized = serializer.serialize(obj);
const deserialized = serializer.deserialize(serialized);
console.log(deserialized.name); // "John"
console.log(deserialized.self === deserialized); // true
```

**Time Complexity:** O(n) where n is total properties | **Space Complexity:**
O(n)

---

### 17. Object Path Sum 🎯

**Company:** Airbnb, Stripe

**Problem Statement:** Given an object and a target sum, find all paths from
root to leaf where the sum of numeric values equals the target.

**Concept Explanation:** Recursively traverse the object tree, keeping track of
the current path and sum. When reaching a leaf (primitive value), check if the
sum matches the target.

**Solution:**

```javascript
function findPathsWithSum(obj, targetSum) {
  const result = [];

  function dfs(current, currentSum, path) {
    // If current value is a number, add it to sum
    if (typeof current === 'number') {
      currentSum += current;
    }

    // If it's a primitive value (leaf node), check sum
    if (typeof current !== 'object' || current === null) {
      if (currentSum === targetSum) {
        result.push([...path]);
      }
      return;
    }

    // If it's an object, recurse through properties
    for (let key in current) {
      if (current.hasOwnProperty(key)) {
        path.push(key);
        dfs(current[key], currentSum, path);
        path.pop(); // Backtrack
      }
    }
  }

  dfs(obj, 0, []);
  return result;
}

// Alternative: Find paths with sum including intermediate nodes
function findAllPathsWithSum(obj, targetSum) {
  const result = [];

  function dfs(current, currentSum, path, pathValues) {
    let newSum = currentSum;
    let newPathValues = [...pathValues];

    // Add current value if it's a number
    if (typeof current === 'number') {
      newSum += current;
      newPathValues.push(current);
    }

    // Check if current sum equals target
    if (newSum === targetSum && newPathValues.length > 0) {
      result.push({
        path: [...path],
        values: [...newPathValues],
        sum: newSum,
      });
    }

    // If current is an object, continue traversal
    if (typeof current === 'object' && current !== null) {
      for (let key in current) {
        if (current.hasOwnProperty(key)) {
          path.push(key);
          dfs(current[key], newSum, path, newPathValues);
          path.pop();
        }
      }
    }
  }

  dfs(obj, 0, [], []);
  return result;
}

// Example usage
const data = {
  a: 5,
  b: {
    c: 3,
    d: {
      e: 2,
      f: 'hello',
    },
  },
  g: 8,
};

console.log(findPathsWithSum(data, 8)); // Paths that sum to 8
console.log(findAllPathsWithSum(data, 10)); // All paths with sum 10
```

**Time Complexity:** O(n) where n is total nodes | **Space Complexity:** O(d)
where d is maximum depth

---

### 18. Flatten Nested Object 🏗️

**Company:** Microsoft, Adobe

**Problem Statement:** Flatten a deeply nested object into a single level object
with dot-notation keys.

**Concept Explanation:** Recursively traverse the object structure, building
keys by concatenating parent keys with current keys using dot notation.

**Solution:**

```javascript
function flattenObject(obj, prefix = '', result = {}) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      const newKey = prefix ? `${prefix}.${key}` : key;
      const value = obj[key];

      // If value is an object and not null, recurse
      if (
        typeof value === 'object' &&
        value !== null &&
        !Array.isArray(value) &&
        !(value instanceof Date)
      ) {
        flattenObject(value, newKey, result);
      } else {
        // Store primitive values, arrays, dates, etc.
        result[newKey] = value;
      }
    }
  }

  return result;
}

// Alternative implementation with array handling
function flattenObjectWithArrays(obj, prefix = '') {
  const result = {};

  Object.keys(obj).forEach((key) => {
    const newKey = prefix ? `${prefix}.${key}` : key;
    const value = obj[key];

    if (Array.isArray(value)) {
      // Handle arrays by indexing
      value.forEach((item, index) => {
        const arrayKey = `${newKey}[${index}]`;
        if (typeof item === 'object' && item !== null) {
          Object.assign(result, flattenObjectWithArrays(item, arrayKey));
        } else {
          result[arrayKey] = item;
        }
      });
    } else if (
      typeof value === 'object' &&
      value !== null &&
      !(value instanceof Date)
    ) {
      // Recursively flatten nested objects
      Object.assign(result, flattenObjectWithArrays(value, newKey));
    } else {
      // Store primitive values
      result[newKey] = value;
    }
  });

  return result;
}

// Reverse operation: unflatten
function unflattenObject(flatObj) {
  const result = {};

  for (let key in flatObj) {
    const keys = key.split('.');
    let current = result;

    // Navigate/create nested structure
    for (let i = 0; i < keys.length - 1; i++) {
      if (!(keys[i] in current)) {
        current[keys[i]] = {};
      }
      current = current[keys[i]];
    }

    // Set the final value
    current[keys[keys.length - 1]] = flatObj[key];
  }

  return result;
}

// Example usage
const nested = {
  user: {
    profile: {
      name: 'John',
      age: 30,
      address: {
        city: 'NYC',
        zip: 10001,
      },
    },
    preferences: {
      theme: 'dark',
      notifications: true,
    },
  },
  data: [1, 2, { nested: 'value' }],
};

const flattened = flattenObject(nested);
console.log(flattened);
// {
//   "user.profile.name": "John",
//   "user.profile.age": 30,
//   "user.profile.address.city": "NYC",
//   "user.profile.address.zip": 10001,
//   "user.preferences.theme": "dark",
//   "user.preferences.notifications": true,
//   "data": [1, 2, { nested: "value" }]
// }

const unflattened = unflattenObject(flattened);
console.log(unflattened); // Reconstructed original structure
```

**Time Complexity:** O(n) where n is total properties | **Space Complexity:**
O(n)

---

### 19. Object Diff Algorithm 🔍

**Company:** GitHub, Atlassian

**Problem Statement:** Compare two objects and return the differences, showing
added, removed, and modified properties.

**Concept Explanation:** Recursively compare objects property by property,
tracking changes at each level. Handle different types of changes (additions,
deletions, modifications).

**Solution:**

```javascript
function objectDiff(obj1, obj2) {
  const diff = {
    added: {},
    removed: {},
    modified: {},
    unchanged: {},
  };

  // Helper function to get all unique keys from both objects
  function getAllKeys(o1, o2) {
    const keys = new Set();
    Object.keys(o1).forEach((key) => keys.add(key));
    Object.keys(o2).forEach((key) => keys.add(key));
    return Array.from(keys);
  }

  // Helper function to check if two values are deeply equal
  function deepEqual(val1, val2) {
    if (val1 === val2) return true;

    if (val1 === null || val2 === null) return false;
    if (typeof val1 !== typeof val2) return false;

    if (typeof val1 === 'object') {
      if (Array.isArray(val1) !== Array.isArray(val2)) return false;

      const keys1 = Object.keys(val1);
      const keys2 = Object.keys(val2);

      if (keys1.length !== keys2.length) return false;

      return keys1.every(
        (key) => keys2.includes(key) && deepEqual(val1[key], val2[key])
      );
    }

    return false;
  }

  // Main comparison logic
  function compareObjects(o1, o2, path = '') {
    const keys = getAllKeys(o1, o2);

    keys.forEach((key) => {
      const currentPath = path ? `${path}.${key}` : key;
      const val1 = o1[key];
      const val2 = o2[key];

      if (!(key in o1)) {
        // Key added in o2
        setNestedProperty(diff.added, currentPath, val2);
      } else if (!(key in o2)) {
        // Key removed from o1
        setNestedProperty(diff.removed, currentPath, val1);
      } else if (deepEqual(val1, val2)) {
        // Values are equal
        setNestedProperty(diff.unchanged, currentPath, val1);
      } else if (
        typeof val1 === 'object' &&
        val1 !== null &&
        typeof val2 === 'object' &&
        val2 !== null &&
        !Array.isArray(val1) &&
        !Array.isArray(val2)
      ) {
        // Both are objects, recurse
        compareObjects(val1, val2, currentPath);
      } else {
        // Values are different
        setNestedProperty(diff.modified, currentPath, {
          from: val1,
          to: val2,
        });
      }
    });
  }

  // Helper to set nested properties in result object
  function setNestedProperty(obj, path, value) {
    const keys = path.split('.');
    let current = obj;

    for (let i = 0; i < keys.length - 1; i++) {
      if (!(keys[i] in current)) {
        current[keys[i]] = {};
      }
      current = current[keys[i]];
    }

    current[keys[keys.length - 1]] = value;
  }

  compareObjects(obj1, obj2);
  return diff;
}

// Simpler version that returns flat diff
function simpleObjectDiff(obj1, obj2) {
  const changes = [];

  function compare(o1, o2, path = '') {
    const allKeys = new Set([...Object.keys(o1), ...Object.keys(o2)]);

    for (let key of allKeys) {
      const currentPath = path ? `${path}.${key}` : key;
      const val1 = o1[key];
      const val2 = o2[key];

      if (!(key in o1)) {
        changes.push({ type: 'added', path: currentPath, value: val2 });
      } else if (!(key in o2)) {
        changes.push({ type: 'removed', path: currentPath, value: val1 });
      } else if (val1 !== val2) {
        if (
          typeof val1 === 'object' &&
          typeof val2 === 'object' &&
          val1 !== null &&
          val2 !== null
        ) {
          compare(val1, val2, currentPath);
        } else {
          changes.push({
            type: 'modified',
            path: currentPath,
            from: val1,
            to: val2,
          });
        }
      }
    }
  }

  compare(obj1, obj2);
  return changes;
}

// Example usage
const obj1 = {
  name: 'John',
  age: 30,
  address: {
    city: 'NYC',
    zip: 10001,
  },
  hobbies: ['reading'],
};

const obj2 = {
  name: 'John',
  age: 31, // Modified
  address: {
    city: 'LA', // Modified
    zip: 10001,
    country: 'USA', // Added
  },
  // hobbies removed
  job: 'Engineer', // Added
};

console.log(objectDiff(obj1, obj2));
console.log(simpleObjectDiff(obj1, obj2));
```

**Time Complexity:** O(n) where n is total properties in both objects | **Space
Complexity:** O(n)

---

### 20. Design Phone Directory 📱

**Company:** Apple, Snapchat

**Problem Statement:** Design a phone directory that supports adding contacts,
searching by name/number, and retrieving contacts by various criteria.

**Concept Explanation:** Use multiple objects for different types of lookups (by
name, by number, by prefix). Implement efficient search and retrieval
operations.

**Solution:**

```javascript
class PhoneDirectory {
  constructor() {
    // Main storage: contactId -> contact object
    this.contacts = {};

    // Index by name (lowercase for case-insensitive search)
    this.nameIndex = {};

    // Index by phone number
    this.phoneIndex = {};

    // Index by name prefix for autocomplete
    this.prefixIndex = {};

    // Auto-incrementing contact ID
    this.nextId = 1;
  }

  addContact(name, phoneNumber, email = '') {
    const contactId = this.nextId++;
    const contact = {
      id: contactId,
      name: name.trim(),
      phoneNumber: phoneNumber.replace(/\D/g, ''), // Remove non-digits
      email: email.trim(),
      createdAt: new Date(),
    };

    // Store in main contacts
    this.contacts[contactId] = contact;

    // Index by name (case-insensitive)
    const lowerName = name.toLowerCase().trim();
    if (!this.nameIndex[lowerName]) {
      this.nameIndex[lowerName] = [];
    }
    this.nameIndex[lowerName].push(contactId);

    // Index by phone number
    this.phoneIndex[contact.phoneNumber] = contactId;

    // Index by name prefixes for autocomplete
    this.addToPrefixIndex(lowerName, contactId);

    return contactId;
  }

  addToPrefixIndex(name, contactId) {
    // Add all prefixes of the name
    for (let i = 1; i <= name.length; i++) {
      const prefix = name.substring(0, i);
      if (!this.prefixIndex[prefix]) {
        this.prefixIndex[prefix] = new Set();
      }
      this.prefixIndex[prefix].add(contactId);
    }
  }

  searchByName(name) {
    const lowerName = name.toLowerCase().trim();
    const contactIds = this.nameIndex[lowerName] || [];
    return contactIds.map((id) => this.contacts[id]);
  }

  searchByPhone(phoneNumber) {
    const cleanPhone = phoneNumber.replace(/\D/g, '');
    const contactId = this.phoneIndex[cleanPhone];
    return contactId ? this.contacts[contactId] : null;
  }

  searchByPrefix(prefix) {
    const lowerPrefix = prefix.toLowerCase().trim();
    const contactIds = this.prefixIndex[lowerPrefix];

    if (!contactIds) return [];

    return Array.from(contactIds)
      .map((id) => this.contacts[id])
      .sort((a, b) => a.name.localeCompare(b.name));
  }

  removeContact(contactId) {
    const contact = this.contacts[contactId];
    if (!contact) return false;

    // Remove from main storage
    delete this.contacts[contactId];

    // Remove from name index
    const lowerName = contact.name.toLowerCase();
    if (this.nameIndex[lowerName]) {
      const index = this.nameIndex[lowerName].indexOf(contactId);
      if (index > -1) {
        this.nameIndex[lowerName].splice(index, 1);
        if (this.nameIndex[lowerName].length === 0) {
          delete this.nameIndex[lowerName];
        }
      }
    }

    // Remove from phone index
    delete this.phoneIndex[contact.phoneNumber];

    // Remove from prefix index
    this.removeFromPrefixIndex(lowerName, contactId);

    return true;
  }

  removeFromPrefixIndex(name, contactId) {
    for (let i = 1; i <= name.length; i++) {
      const prefix = name.substring(0, i);
      if (this.prefixIndex[prefix]) {
        this.prefixIndex[prefix].delete(contactId);
        if (this.prefixIndex[prefix].size === 0) {
          delete this.prefixIndex[prefix];
        }
      }
    }
  }

  updateContact(contactId, updates) {
    const contact = this.contacts[contactId];
    if (!contact) return false;

    // Store old values for index updates
    const oldName = contact.name.toLowerCase();
    const oldPhone = contact.phoneNumber;

    // Update contact
    if (updates.name) {
      contact.name = updates.name.trim();
    }
    if (updates.phoneNumber) {
      contact.phoneNumber = updates.phoneNumber.replace(/\D/g, '');
    }
    if (updates.email !== undefined) {
      contact.email = updates.email.trim();
    }

    // Update indexes if name or phone changed
    if (updates.name) {
      // Remove old name indexes
      this.removeFromNameIndex(oldName, contactId);
      this.removeFromPrefixIndex(oldName, contactId);

      // Add new name indexes
      const newLowerName = contact.name.toLowerCase();
      if (!this.nameIndex[newLowerName]) {
        this.nameIndex[newLowerName] = [];
      }
      this.nameIndex[newLowerName].push(contactId);
      this.addToPrefixIndex(newLowerName, contactId);
    }

    if (updates.phoneNumber) {
      // Update phone index
      delete this.phoneIndex[oldPhone];
      this.phoneIndex[contact.phoneNumber] = contactId;
    }

    return true;
  }

  removeFromNameIndex(name, contactId) {
    if (this.nameIndex[name]) {
      const index = this.nameIndex[name].indexOf(contactId);
      if (index > -1) {
        this.nameIndex[name].splice(index, 1);
        if (this.nameIndex[name].length === 0) {
          delete this.nameIndex[name];
        }
      }
    }
  }

  getAllContacts() {
    return Object.values(this.contacts).sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }

  getContactCount() {
    return Object.keys(this.contacts).length;
  }

  // Fuzzy search - finds contacts with names containing the search term
  fuzzySearch(term) {
    const lowerTerm = term.toLowerCase().trim();
    const results = [];

    for (let contact of Object.values(this.contacts)) {
      if (contact.name.toLowerCase().includes(lowerTerm)) {
        results.push(contact);
      }
    }

    return results.sort((a, b) => a.name.localeCompare(b.name));
  }
}

// Example usage
const directory = new PhoneDirectory();

// Add contacts
directory.addContact('John Doe', '123-456-7890', 'john@email.com');
directory.addContact('Jane Smith', '098-765-4321', 'jane@email.com');
directory.addContact('John Wilson', '555-123-4567', 'johnw@email.com');

// Search operations
console.log(directory.searchByName('John Doe'));
console.log(directory.searchByPhone('1234567890'));
console.log(directory.searchByPrefix('jo')); // Autocomplete
console.log(directory.fuzzySearch('john')); // Fuzzy search

// Update and remove
directory.updateContact(1, { name: 'John Smith' });
directory.removeContact(2);

console.log(`Total contacts: ${directory.getContactCount()}`);
```

**Time Complexity:**

- Add: O(n) where n is name length (for prefix indexing)
- Search by name/phone: O(1) average
- Search by prefix: O(k) where k is number of matches
- Remove/Update: O(n) for name length

**Space Complexity:** O(n \* m) where n is number of contacts, m is average name
length

---

## 🎯 Summary

This comprehensive guide covers the **top 20 JavaScript Objects DSA interview
questions** that are frequently asked at major tech companies. Each problem
includes:

- **📋 Problem Statement** with company context
- **💡 Concept Explanation** for understanding
- **💻 Complete Solution** with detailed comments
- **⏱️ Time & Space Complexity** analysis

### Key Takeaways:

1. **Objects as Hash Maps** 🗺️ - Most efficient for O(1) lookups
2. **Frequency Counting** 📊 - Common pattern using objects
3. **Two-way Mapping** 🔄 - For bijection problems
4. **Nested Object Traversal** 🌳 - Recursive approaches
5. **Index Optimization** ⚡ - Multiple indexes for different search criteria

### Practice Tips:

- Start with **Easy problems** to build confidence
- Focus on **time complexity optimization** using objects
- Practice **edge case handling** (null, undefined, circular references)
- Master **recursive patterns** for nested structures
- Understand **space-time tradeoffs** in different approaches

**Good luck with your interviews! 🚀**
