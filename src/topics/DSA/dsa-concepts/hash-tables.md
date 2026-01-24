# Hash Tables (Hash Maps) in JavaScript 📚

## Table of Contents 📋

1. [Definition](#definition)
2. [Key Characteristics](#key-characteristics)
3. [Syntax/Implementation](#syntaximplementation)
4. [Visualization](#visualization)
5. [Example](#example)
6. [Code Example](#code-example)
7. [Common Pitfalls](#common-pitfalls)

---

## Definition 🎯

A **Hash Table** (also called Hash Map) is a data structure that stores
key-value pairs and uses a hash function to compute an index where each
key-value pair should be stored. Think of it as a super-fast filing system where
you can instantly find any document by its label, rather than searching through
everything one by one.

In JavaScript, objects (`{}`) and `Map` objects are implementations of hash
tables that allow you to store and retrieve data using keys instead of numeric
indices.

---

## Key Characteristics ⚡

### Time Complexity 🕐

- **Average Case**: O(1) for insertion, deletion, and lookup
- **Worst Case**: O(n) when many collisions occur (rare with good hash
  functions)

### Space Complexity 💾

- **O(n)** where n is the number of key-value pairs stored

### Key Properties 🔑

- **Fast Access**: Direct access to values using keys
- **Dynamic Size**: Can grow and shrink as needed
- **Unique Keys**: Each key can only appear once
- **No Order Guarantee**: Keys are not stored in insertion order (except in
  JavaScript Map)

---

## Syntax/Implementation 💻

### Using JavaScript Objects

```javascript
// Creating a hash table using object literal
const hashTable = {};

// Adding key-value pairs
hashTable['key1'] = 'value1';
hashTable.key2 = 'value2';

// Accessing values
console.log(hashTable['key1']); // "value1"
console.log(hashTable.key2); // "value2"
```

### Using JavaScript Map

```javascript
// Creating a hash table using Map
const hashMap = new Map();

// Adding key-value pairs
hashMap.set('key1', 'value1');
hashMap.set('key2', 'value2');

// Accessing values
console.log(hashMap.get('key1')); // "value1"
console.log(hashMap.get('key2')); // "value2"
```

---

## Visualization 🎨

### How Hash Tables Work:

```bash
Key → Hash Function → Index → Value
```

**Step-by-Step Process:**

1. **Input Key**: "apple" 🍎
2. **Hash Function**: Converts "apple" to number (e.g., 5)
3. **Index**: Stores value at array position 5
4. **Storage**: ["", "", "", "", "", "red fruit", ...]

```bash
Hash Table Structure:
┌─────────────┬─────────────┐
│    Index    │    Value    │
├─────────────┼─────────────┤
│      0      │    empty    │
│      1      │   "banana"  │
│      2      │    empty    │
│      3      │   "orange"  │
│      4      │    empty    │
│      5      │   "apple"   │
└─────────────┴─────────────┘
```

---

## Example 🌟

**Real-World Analogy**: A **Phone Book** 📞

Imagine a phone book where instead of flipping through pages alphabetically, you
have a magic system:

- You say a person's name (key) → "John Smith"
- The magic system instantly calculates which page to turn to (hash function)
- You immediately find their phone number (value) → "555-1234"

This is exactly how hash tables work - instant lookup without searching!

**Practical Use Cases**:

- **User Authentication**: Store username → password pairs
- **Caching**: Store URL → cached response
- **Database Indexing**: Store record ID → record location
- **Configuration Settings**: Store setting name → setting value

---

## Code Example 🚀

### Simple Hash Table Implementation

```javascript
class SimpleHashTable {
  constructor(size = 10) {
    this.size = size;
    this.table = new Array(size);
  }

  // Simple hash function
  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.size;
  }

  // Insert key-value pair
  set(key, value) {
    const index = this.hash(key);
    this.table[index] = [key, value];
  }

  // Get value by key
  get(key) {
    const index = this.hash(key);
    const item = this.table[index];
    return item ? item[1] : undefined;
  }

  // Remove key-value pair
  remove(key) {
    const index = this.hash(key);
    this.table[index] = undefined;
  }
}

// Usage Example
const myHashTable = new SimpleHashTable();

// Adding data 📝
myHashTable.set('name', 'Alice');
myHashTable.set('age', '25');
myHashTable.set('city', 'New York');

// Retrieving data 🔍
console.log(myHashTable.get('name')); // "Alice"
console.log(myHashTable.get('age')); // "25"
console.log(myHashTable.get('city')); // "New York"

// Real-world example: User database
const userDB = new Map();
userDB.set('alice123', {
  name: 'Alice',
  email: 'alice@email.com',
  role: 'admin',
});
userDB.set('bob456', { name: 'Bob', email: 'bob@email.com', role: 'user' });

// Fast user lookup
const user = userDB.get('alice123');
console.log(`Welcome ${user.name}!`); // "Welcome Alice!"
```

---

## Common Pitfalls ⚠️

### 1. **Hash Collisions** 💥

**Problem**: Different keys produce the same hash value

```javascript
// Bad: Simple hash function causing collisions
hash(key) {
    return key.length % this.size; // "cat" and "dog" both hash to 3
}
```

**Solution**: Use better hash functions or handle collisions with chaining

### 2. **Key Type Confusion** 🔄

**Problem**: Using objects as keys in regular JavaScript objects

```javascript
const obj = {};
const key1 = { id: 1 };
const key2 = { id: 1 };

obj[key1] = 'value1';
console.log(obj[key2]); // undefined (different object references)
```

**Solution**: Use `Map` for object keys or convert objects to strings

### 3. **Memory Leaks** 🕳️

**Problem**: Not cleaning up unused keys

```javascript
const cache = new Map();
// Adding many items without cleanup
for (let i = 0; i < 1000000; i++) {
  cache.set(`key${i}`, `value${i}`);
}
// Memory keeps growing!
```

**Solution**: Implement cleanup mechanisms or use `WeakMap` when appropriate

### 4. **Assuming Order** 📋

**Problem**: Expecting keys to maintain insertion order in objects

```javascript
const obj = { 3: 'three', 1: 'one', 2: 'two' };
console.log(Object.keys(obj)); // May not be ["3", "1", "2"]
```

**Solution**: Use `Map` if you need guaranteed insertion order

### 5. **Performance Assumptions** 🐌

**Problem**: Thinking all operations are always O(1)

```javascript
// In worst case (many collisions), this could be O(n)
const value = hashTable.get('key');
```

**Solution**: Use quality hash functions and monitor performance with large
datasets

---

**Pro Tip** 💡: In JavaScript, use `Map` for most hash table needs as it handles
edge cases better than plain objects and maintains insertion order!
