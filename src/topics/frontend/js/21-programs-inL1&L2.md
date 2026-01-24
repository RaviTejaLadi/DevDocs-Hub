# Most frequently asked 21 programs in L1 & L2 javascript interviews

### **1. Program to find longest word in a given sentence**

```js
function findLongestWord(sentence) {
  const words = sentence.split(' ');
  let longest = '';

  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }

  return longest;
}

// Example:
console.log(findLongestWord('I am a frontend developer')); // developer
```

---

### **2. How to check whether a string is palindrome or not**

```js
function isPalindrome(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return str === reversed;
}

// Example:
console.log(isPalindrome('madam')); // true
console.log(isPalindrome('hello')); // false
```

---

### **3. Program to remove duplicates from an array**

```js
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

// Example:
console.log(removeDuplicates([1, 2, 2, 3, 4, 4])); // [1,2,3,4]
```

---

### **4. Program to find Reverse of a string without using built-in method**

```js
function reverseString(str) {
  let reversed = '';
  for (let char of str) {
    reversed = char + reversed;
  }
  return reversed;
}

// Example:
console.log(reverseString('hello')); // "olleh"
```

---

### **5. Find the max count of consecutive 1’s in an array**

```js
function maxConsecutiveOnes(arr) {
  let max = 0,
    count = 0;
  for (let num of arr) {
    if (num === 1) {
      count++;
      max = Math.max(max, count);
    } else {
      count = 0;
    }
  }
  return max;
}

// Example:
console.log(maxConsecutiveOnes([1, 1, 0, 1, 1, 1])); // 3
```

---

### **6. Find the factorial of a given number**

```js
function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Example:
console.log(factorial(5)); // 120
```

---

### **7. Merge two sorted arrays and return sorted merged array**

```js
function mergeSortedArrays(arr1, arr2) {
  return [...arr1, ...arr2].sort((a, b) => a - b);
}

// Example:
console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30])); // [0,3,4,4,6,30,31]
```

---

### **8. Check if each value in arr1 has squared match in arr2**

```js
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  let map1 = {},
    map2 = {};

  for (let val of arr1) map1[val] = (map1[val] || 0) + 1;
  for (let val of arr2) map2[val] = (map2[val] || 0) + 1;

  for (let key in map1) {
    if (!map2[key * key] || map2[key * key] !== map1[key]) {
      return false;
    }
  }

  return true;
}

// Example:
console.log(same([1, 2, 3], [1, 4, 9])); // true
console.log(same([1, 2, 3], [1, 9])); // false
```

---

### **9. Check if one string can be formed by rearranging the other**

```js
function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const count = {};

  for (let char of str1) {
    count[char] = (count[char] || 0) + 1;
  }

  for (let char of str2) {
    if (!count[char]) return false;
    count[char]--;
  }

  return true;
}

// Example:
console.log(isAnagram('listen', 'silent')); // true
```

---

### **10. Get unique objects based on name property**

```js
function getUniqueObjects(arr) {
  const seen = new Set();
  return arr.filter((item) => {
    if (seen.has(item.name)) return false;
    seen.add(item.name);
    return true;
  });
}

// Example:
const input = [
  { name: 'sai' },
  { name: 'Nang' },
  { name: 'sai' },
  { name: 'Nang' },
  { name: '111111' },
];

console.log(getUniqueObjects(input));
// Output: [{name: "sai"}, {name: "Nang"}, {name: "111111"}]
```

---

Would you like me to continue with **11 to 21**?

Great! Let's continue with simple and clean solutions for questions **11 to
21**:

---

### **11. Find the maximum number in an array**

```js
function findMax(arr) {
  let max = arr[0];
  for (let num of arr) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}

// Example:
console.log(findMax([2, 5, 8, 1, 10])); // 10
```

---

### **12. Get only even numbers from an array**

```js
function getEvenNumbers(arr) {
  return arr.filter((num) => num % 2 === 0);
}

// Example:
console.log(getEvenNumbers([1, 2, 3, 4, 5, 6])); // [2, 4, 6]
```

---

### **13. Check if a number is prime**

```js
function isPrime(num) {
  if (num < 2) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
}

// Example:
console.log(isPrime(7)); // true
console.log(isPrime(10)); // false
```

---

### **14. Find the largest number in a nested array**

```js
function findLargestInNestedArray(arr) {
  let flat = arr.flat(Infinity);
  let max = flat[0];
  for (let num of flat) {
    if (num > max) max = num;
  }
  return max;
}

// Example:
console.log(
  findLargestInNestedArray([
    [3, 4, 58],
    [709, 8, 9, [10, 11]],
    [111, 2],
  ])
); // 709
```

---

### **15. Return Fibonacci sequence up to n terms**

```js
function fibonacci(n) {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  return fib.slice(0, n);
}

// Example:
console.log(fibonacci(7)); // [0, 1, 1, 2, 3, 5, 8]
```

---

### **16. Count occurrences of each character in a string**

```js
function countCharacters(str) {
  const count = {};
  for (let char of str) {
    count[char] = (count[char] || 0) + 1;
  }
  return count;
}

// Example:
console.log(countCharacters('hello'));
// { h: 1, e: 1, l: 2, o: 1 }
```

---

### **17. Sort an array in ascending order**

```js
function sortAscending(arr) {
  return arr.sort((a, b) => a - b);
}

// Example:
console.log(sortAscending([5, 2, 9, 1])); // [1, 2, 5, 9]
```

---

### **18. Sort an array in descending order**

```js
function sortDescending(arr) {
  return arr.sort((a, b) => b - a);
}

// Example:
console.log(sortDescending([5, 2, 9, 1])); // [9, 5, 2, 1]
```

---

### **19. Reverse order of words in a sentence (no reverse method)**

```js
function reverseWords(sentence) {
  const words = sentence.split(' ');
  let reversed = [];

  for (let i = words.length - 1; i >= 0; i--) {
    reversed.push(words[i]);
  }

  return reversed.join(' ');
}

// Example:
console.log(reverseWords('I am a developer')); // "developer a am I"
```

---

### **20. Flatten a nested array**

```js
function flattenArray(arr) {
  const result = [];

  function flatten(inner) {
    for (let item of inner) {
      if (Array.isArray(item)) {
        flatten(item);
      } else {
        result.push(item);
      }
    }
  }

  flatten(arr);
  return result;
}

// Example:
console.log(flattenArray([1, [2, [3, 4]], 5])); // [1, 2, 3, 4, 5]
```

---

### **21. Convert string path and value to nested object**

```js
function stringToObject(path, value) {
  const keys = path.split('.');
  const result = {};
  let current = result;

  for (let i = 0; i < keys.length - 1; i++) {
    current[keys[i]] = {};
    current = current[keys[i]];
  }

  current[keys[keys.length - 1]] = value;
  return result;
}

// Example:
console.log(stringToObject('a.b.c', 'someValue'));
// { a: { b: { c: "someValue" } } }
```
