# **🚀 Top 20 DSA String Interview Questions in JavaScript**

## 📋 Table of Contents

1. [🔄 Reverse a String](#1-reverse-a-string) - _Google, Amazon, Microsoft_
2. [🔍 Check if String is Palindrome](#2-check-if-string-is-palindrome) -
   _Facebook, Apple, Netflix_
3. [📊 First Non-Repeating Character](#3-first-non-repeating-character) -
   _Amazon, Google, Uber_
4. [🎯 Valid Anagram](#4-valid-anagram) - _Facebook, Microsoft, Adobe_
5. [🔤 Longest Substring Without Repeating Characters](#5-longest-substring-without-repeating-characters) -
   _Amazon, Google, Facebook_
6. [🔗 Group Anagrams](#6-group-anagrams) - _Google, Amazon, Microsoft_
7. [✅ Valid Parentheses](#7-valid-parentheses) - _Google, Facebook, Amazon_
8. [🔍 String to Integer (atoi)](#8-string-to-integer-atoi) - _Google,
   Microsoft, Amazon_
9. [🎨 Longest Palindromic Substring](#9-longest-palindromic-substring) -
   _Amazon, Microsoft, Google_
10. [🔤 Implement strStr()](#10-implement-strstr) - _Facebook, Google,
    Microsoft_
11. [📝 Count and Say](#11-count-and-say) - _Facebook, Google, Amazon_
12. [🔄 Reverse Words in a String](#12-reverse-words-in-a-string) - _Microsoft,
    Amazon, Google_
13. [📊 Character Frequency](#13-character-frequency) - _Amazon, Google,
    Facebook_
14. [🎯 Longest Common Prefix](#14-longest-common-prefix) - _Google, Amazon,
    Microsoft_
15. [🔍 Valid Palindrome II](#15-valid-palindrome-ii) - _Facebook, Amazon,
    Google_
16. [🎨 Minimum Window Substring](#16-minimum-window-substring) - _Google,
    Facebook, Amazon_
17. [🔤 Letter Combinations of Phone Number](#17-letter-combinations-of-phone-number) -
    _Amazon, Google, Microsoft_
18. [📝 Decode String](#18-decode-string) - _Google, Amazon, Facebook_
19. [🔄 Rotate String](#19-rotate-string) - _Amazon, Google, Microsoft_
20. [🎯 Isomorphic Strings](#20-isomorphic-strings) - _Google, Facebook, Amazon_

---

## 1. 🔄 Reverse a String

**Companies:** Google, Amazon, Microsoft

### Problem Statement

Write a function that reverses a string. The input string is given as an array
of characters.

### Concept Explanation

String reversal is a fundamental operation that can be achieved using
two-pointer technique or built-in methods. The two-pointer approach swaps
characters from both ends moving towards the center.

### Solution

```javascript
// Method 1: Two Pointer Approach (In-place)
function reverseString(s) {
  let left = 0;
  let right = s.length - 1;

  // Swap characters from both ends moving towards center
  while (left < right) {
    // Swap characters at left and right positions
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }

  return s;
}

// Method 2: Using Built-in Methods
function reverseStringBuiltIn(s) {
  return s.reverse();
}

// Method 3: Using String Methods (if input is string)
function reverseStringStr(str) {
  return str.split('').reverse().join('');
}

// Example usage
console.log(reverseString(['h', 'e', 'l', 'l', 'o'])); // ['o','l','l','e','h']
```

**Time Complexity:** O(n) | **Space Complexity:** O(1)

---

## 2. 🔍 Check if String is Palindrome

**Companies:** Facebook, Apple, Netflix

### Problem Statement

Given a string, determine if it is a palindrome, considering only alphanumeric
characters and ignoring cases.

### Concept Explanation

A palindrome reads the same forward and backward. We use two pointers from both
ends, comparing characters while skipping non-alphanumeric ones.

### Solution

```javascript
function isPalindrome(s) {
  // Convert to lowercase and remove non-alphanumeric characters
  const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '');

  let left = 0;
  let right = cleaned.length - 1;

  // Compare characters from both ends
  while (left < right) {
    if (cleaned[left] !== cleaned[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

// Optimized version without extra space
function isPalindromeOptimized(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    // Skip non-alphanumeric characters from left
    while (left < right && !isAlphanumeric(s[left])) {
      left++;
    }

    // Skip non-alphanumeric characters from right
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

// Helper function to check if character is alphanumeric
function isAlphanumeric(char) {
  return /^[a-zA-Z0-9]$/.test(char);
}

// Example usage
console.log(isPalindrome('A man, a plan, a canal: Panama')); // true
```

**Time Complexity:** O(n) | **Space Complexity:** O(1)

---

## 3. 📊 First Non-Repeating Character

**Companies:** Amazon, Google, Uber

### Problem Statement

Given a string, find the first non-repeating character in it and return its
index. If it doesn't exist, return -1.

### Concept Explanation

We use a hash map to count character frequencies, then iterate through the
string to find the first character with frequency 1.

### Solution

```javascript
function firstUniqChar(s) {
  // Create frequency map
  const freqMap = new Map();

  // Count frequency of each character
  for (let char of s) {
    freqMap.set(char, (freqMap.get(char) || 0) + 1);
  }

  // Find first character with frequency 1
  for (let i = 0; i < s.length; i++) {
    if (freqMap.get(s[i]) === 1) {
      return i;
    }
  }

  return -1; // No unique character found
}

// Alternative using object
function firstUniqCharObj(s) {
  const freq = {};

  // Count frequencies
  for (let char of s) {
    freq[char] = (freq[char] || 0) + 1;
  }

  // Find first unique character
  for (let i = 0; i < s.length; i++) {
    if (freq[s[i]] === 1) {
      return i;
    }
  }

  return -1;
}

// Example usage
console.log(firstUniqChar('leetcode')); // 0 (l is first unique)
console.log(firstUniqChar('loveleetcode')); // 2 (v is first unique)
```

**Time Complexity:** O(n) | **Space Complexity:** O(1) - at most 26 characters

---

## 4. 🎯 Valid Anagram

**Companies:** Facebook, Microsoft, Adobe

### Problem Statement

Given two strings s and t, return true if t is an anagram of s, and false
otherwise.

### Concept Explanation

Two strings are anagrams if they contain the same characters with the same
frequency. We can solve this using sorting or character counting.

### Solution

```javascript
// Method 1: Using Sorting
function isAnagram(s, t) {
  // Different lengths can't be anagrams
  if (s.length !== t.length) {
    return false;
  }

  // Sort both strings and compare
  const sortedS = s.split('').sort().join('');
  const sortedT = t.split('').sort().join('');

  return sortedS === sortedT;
}

// Method 2: Using Character Count (More Efficient)
function isAnagramCount(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const charCount = {};

  // Count characters in first string
  for (let char of s) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Decrement count for characters in second string
  for (let char of t) {
    if (!charCount[char]) {
      return false; // Character not found or count becomes negative
    }
    charCount[char]--;
  }

  return true;
}

// Method 3: Using Map
function isAnagramMap(s, t) {
  if (s.length !== t.length) return false;

  const map = new Map();

  // Count characters in s
  for (let char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  // Check characters in t
  for (let char of t) {
    if (!map.has(char) || map.get(char) === 0) {
      return false;
    }
    map.set(char, map.get(char) - 1);
  }

  return true;
}

// Example usage
console.log(isAnagram('anagram', 'nagaram')); // true
console.log(isAnagram('rat', 'car')); // false
```

**Time Complexity:** O(n log n) for sorting, O(n) for counting | **Space
Complexity:** O(1)

---

## 5. 🔤 Longest Substring Without Repeating Characters

**Companies:** Amazon, Google, Facebook

### Problem Statement

Given a string s, find the length of the longest substring without repeating
characters.

### Concept Explanation

We use the sliding window technique with a hash set to track characters in the
current window. When we encounter a duplicate, we shrink the window from the
left.

### Solution

```javascript
function lengthOfLongestSubstring(s) {
  const seen = new Set();
  let maxLength = 0;
  let left = 0;

  // Expand window with right pointer
  for (let right = 0; right < s.length; right++) {
    // Shrink window until no duplicate
    while (seen.has(s[right])) {
      seen.delete(s[left]);
      left++;
    }

    // Add current character to window
    seen.add(s[right]);

    // Update maximum length
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

// Alternative using Map to store indices
function lengthOfLongestSubstringMap(s) {
  const charIndexMap = new Map();
  let maxLength = 0;
  let start = 0;

  for (let end = 0; end < s.length; end++) {
    const char = s[end];

    // If character is repeated and is in current window
    if (charIndexMap.has(char) && charIndexMap.get(char) >= start) {
      start = charIndexMap.get(char) + 1;
    }

    // Update character's last seen index
    charIndexMap.set(char, end);

    // Update maximum length
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}

// Example usage
console.log(lengthOfLongestSubstring('abcabcbb')); // 3 ("abc")
console.log(lengthOfLongestSubstring('pwwkew')); // 3 ("wke")
```

**Time Complexity:** O(n) | **Space Complexity:** O(min(m,n)) where m is charset
size

---

## 6. 🔗 Group Anagrams

**Companies:** Google, Amazon, Microsoft

### Problem Statement

Given an array of strings strs, group the anagrams together. You can return the
answer in any order.

### Concept Explanation

We group strings that are anagrams by using their sorted version as a key. All
anagrams will have the same sorted string.

### Solution

```javascript
function groupAnagrams(strs) {
  const anagramGroups = new Map();

  for (let str of strs) {
    // Sort string to create key for anagrams
    const sortedStr = str.split('').sort().join('');

    // Group anagrams together
    if (!anagramGroups.has(sortedStr)) {
      anagramGroups.set(sortedStr, []);
    }
    anagramGroups.get(sortedStr).push(str);
  }

  // Return all groups as array
  return Array.from(anagramGroups.values());
}

// Alternative using character count as key
function groupAnagramsCharCount(strs) {
  const groups = new Map();

  for (let str of strs) {
    // Create character count signature
    const charCount = new Array(26).fill(0);
    for (let char of str) {
      charCount[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    // Use count array as key
    const key = charCount.join(',');

    if (!groups.has(key)) {
      groups.set(key, []);
    }
    groups.get(key).push(str);
  }

  return Array.from(groups.values());
}

// Example usage
console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
// [["eat","tea","ate"],["tan","nat"],["bat"]]
```

**Time Complexity:** O(n _ k log k) where k is max string length | **Space
Complexity:** O(n _ k)

---

## 7. ✅ Valid Parentheses

**Companies:** Google, Facebook, Amazon

### Problem Statement

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
determine if the input string is valid.

### Concept Explanation

We use a stack to keep track of opening brackets. For each closing bracket, we
check if it matches the most recent opening bracket.

### Solution

```javascript
function isValid(s) {
  const stack = [];
  const pairs = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  for (let char of s) {
    if (char === '(' || char === '{' || char === '[') {
      // Opening bracket - push to stack
      stack.push(char);
    } else {
      // Closing bracket - check if it matches top of stack
      if (stack.length === 0 || stack.pop() !== pairs[char]) {
        return false;
      }
    }
  }

  // Valid if stack is empty (all brackets matched)
  return stack.length === 0;
}

// Alternative with cleaner mapping
function isValidClean(s) {
  const stack = [];
  const mapping = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  for (let char of s) {
    if (mapping[char]) {
      // Closing bracket
      const topElement = stack.length === 0 ? '#' : stack.pop();
      if (mapping[char] !== topElement) {
        return false;
      }
    } else {
      // Opening bracket
      stack.push(char);
    }
  }

  return stack.length === 0;
}

// Example usage
console.log(isValid('()')); // true
console.log(isValid('()[]{}')); // true
console.log(isValid('(]')); // false
```

**Time Complexity:** O(n) | **Space Complexity:** O(n)

---

## 8. 🔍 String to Integer (atoi)

**Companies:** Google, Microsoft, Amazon

### Problem Statement

Implement the myAtoi(s) function, which converts a string to a 32-bit signed
integer.

### Concept Explanation

We need to handle whitespace, signs, overflow, and invalid characters. The
algorithm processes characters one by one while maintaining the integer value.

### Solution

```javascript
function myAtoi(s) {
  const INT_MAX = 2 ** 31 - 1;
  const INT_MIN = -(2 ** 31);

  let i = 0;
  let sign = 1;
  let result = 0;

  // Step 1: Skip leading whitespace
  while (i < s.length && s[i] === ' ') {
    i++;
  }

  // Step 2: Handle sign
  if (i < s.length && (s[i] === '+' || s[i] === '-')) {
    sign = s[i] === '-' ? -1 : 1;
    i++;
  }

  // Step 3: Convert digits
  while (i < s.length && s[i] >= '0' && s[i] <= '9') {
    const digit = parseInt(s[i]);

    // Check for overflow before updating result
    if (
      result > Math.floor(INT_MAX / 10) ||
      (result === Math.floor(INT_MAX / 10) && digit > INT_MAX % 10)
    ) {
      return sign === 1 ? INT_MAX : INT_MIN;
    }

    result = result * 10 + digit;
    i++;
  }

  return result * sign;
}

// Alternative with regex
function myAtoiRegex(s) {
  const INT_MAX = 2 ** 31 - 1;
  const INT_MIN = -(2 ** 31);

  // Match optional whitespace, optional sign, and digits
  const match = s.trim().match(/^[+-]?\d+/);

  if (!match) {
    return 0;
  }

  const num = parseInt(match[0]);

  // Handle overflow
  if (num > INT_MAX) return INT_MAX;
  if (num < INT_MIN) return INT_MIN;

  return num;
}

// Example usage
console.log(myAtoi('42')); // 42
console.log(myAtoi('   -42')); // -42
console.log(myAtoi('4193 with words')); // 4193
```

**Time Complexity:** O(n) | **Space Complexity:** O(1)

---

## 9. 🎨 Longest Palindromic Substring

**Companies:** Amazon, Microsoft, Google

### Problem Statement

Given a string s, return the longest palindromic substring in s.

### Concept Explanation

We can expand around centers to find palindromes. For each position, we check
for both odd-length (single center) and even-length (two centers) palindromes.

### Solution

```javascript
function longestPalindrome(s) {
  if (!s || s.length < 1) return '';

  let start = 0;
  let maxLength = 1;

  // Helper function to expand around center
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
    // Check for odd-length palindromes (center at i)
    expandAroundCenter(i, i);

    // Check for even-length palindromes (center between i and i+1)
    expandAroundCenter(i, i + 1);
  }

  return s.substring(start, start + maxLength);
}

// Dynamic Programming approach
function longestPalindromeDP(s) {
  const n = s.length;
  if (n === 0) return '';

  // dp[i][j] represents if substring from i to j is palindrome
  const dp = Array(n)
    .fill()
    .map(() => Array(n).fill(false));

  let start = 0;
  let maxLength = 1;

  // All single characters are palindromes
  for (let i = 0; i < n; i++) {
    dp[i][i] = true;
  }

  // Check for 2-character palindromes
  for (let i = 0; i < n - 1; i++) {
    if (s[i] === s[i + 1]) {
      dp[i][i + 1] = true;
      start = i;
      maxLength = 2;
    }
  }

  // Check for palindromes of length 3 and more
  for (let length = 3; length <= n; length++) {
    for (let i = 0; i < n - length + 1; i++) {
      const j = i + length - 1;

      if (s[i] === s[j] && dp[i + 1][j - 1]) {
        dp[i][j] = true;
        start = i;
        maxLength = length;
      }
    }
  }

  return s.substring(start, start + maxLength);
}

// Example usage
console.log(longestPalindrome('babad')); // "bab" or "aba"
console.log(longestPalindrome('cbbd')); // "bb"
```

**Time Complexity:** O(n²) | **Space Complexity:** O(1) for expand around
center, O(n²) for DP

---

## 10. 🔤 Implement strStr()

**Companies:** Facebook, Google, Microsoft

### Problem Statement

Implement strStr(). Return the index of the first occurrence of needle in
haystack, or -1 if needle is not part of haystack.

### Concept Explanation

We can use brute force or more efficient algorithms like KMP. The brute force
approach checks each position in the haystack to see if the needle matches.

### Solution

```javascript
// Brute Force Approach
function strStr(haystack, needle) {
  if (needle === '') return 0;
  if (needle.length > haystack.length) return -1;

  for (let i = 0; i <= haystack.length - needle.length; i++) {
    let match = true;

    // Check if needle matches at position i
    for (let j = 0; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) {
        match = false;
        break;
      }
    }

    if (match) return i;
  }

  return -1;
}

// Using built-in method
function strStrBuiltIn(haystack, needle) {
  return haystack.indexOf(needle);
}

// KMP Algorithm (More Efficient)
function strStrKMP(haystack, needle) {
  if (needle === '') return 0;

  // Build failure function (LPS array)
  function buildLPS(pattern) {
    const lps = new Array(pattern.length).fill(0);
    let len = 0;
    let i = 1;

    while (i < pattern.length) {
      if (pattern[i] === pattern[len]) {
        len++;
        lps[i] = len;
        i++;
      } else {
        if (len !== 0) {
          len = lps[len - 1];
        } else {
          lps[i] = 0;
          i++;
        }
      }
    }

    return lps;
  }

  const lps = buildLPS(needle);
  let i = 0; // haystack pointer
  let j = 0; // needle pointer

  while (i < haystack.length) {
    if (haystack[i] === needle[j]) {
      i++;
      j++;
    }

    if (j === needle.length) {
      return i - j; // Found match
    } else if (i < haystack.length && haystack[i] !== needle[j]) {
      if (j !== 0) {
        j = lps[j - 1];
      } else {
        i++;
      }
    }
  }

  return -1;
}

// Example usage
console.log(strStr('hello', 'll')); // 2
console.log(strStr('aaaaa', 'bba')); // -1
```

**Time Complexity:** O(nm) for brute force, O(n+m) for KMP | **Space
Complexity:** O(1) for brute force, O(m) for KMP

---

## 11. 📝 Count and Say

**Companies:** Facebook, Google, Amazon

### Problem Statement

The count-and-say sequence is a sequence of digit strings defined by the
recursive formula. Given a positive integer n, return the nth term of the
count-and-say sequence.

### Concept Explanation

We build each term by "reading" the previous term: counting consecutive
identical digits and saying the count followed by the digit.

### Solution

```javascript
function countAndSay(n) {
  if (n === 1) return '1';

  let result = '1';

  // Generate each term from 2 to n
  for (let i = 2; i <= n; i++) {
    result = getNextTerm(result);
  }

  return result;
}

// Helper function to generate next term
function getNextTerm(s) {
  let nextTerm = '';
  let i = 0;

  while (i < s.length) {
    let count = 1;
    let currentDigit = s[i];

    // Count consecutive identical digits
    while (i + 1 < s.length && s[i + 1] === currentDigit) {
      count++;
      i++;
    }

    // Add count and digit to next term
    nextTerm += count + currentDigit;
    i++;
  }

  return nextTerm;
}

// Alternative recursive approach
function countAndSayRecursive(n) {
  if (n === 1) return '1';

  const prev = countAndSayRecursive(n - 1);
  let result = '';
  let i = 0;

  while (i < prev.length) {
    let count = 1;
    let digit = prev[i];

    // Count consecutive same digits
    while (i + 1 < prev.length && prev[i + 1] === digit) {
      count++;
      i++;
    }

    result += count + digit;
    i++;
  }

  return result;
}

// Example usage
console.log(countAndSay(1)); // "1"
console.log(countAndSay(4)); // "1211"
/*
1: "1"
2: "11" (one 1)
3: "21" (two 1s)
4: "1211" (one 2, one 1)
*/
```

**Time Complexity:** O(2^n) | **Space Complexity:** O(2^n)

---

## 12. 🔄 Reverse Words in a String

**Companies:** Microsoft, Amazon, Google

### Problem Statement

Given an input string s, reverse the order of the words. A word is defined as a
sequence of non-space characters.

### Concept Explanation

We can split the string by spaces, filter out empty strings, reverse the array,
and join back. Alternatively, we can use two-pointer technique for in-place
reversal.

### Solution

```javascript
// Method 1: Using built-in methods
function reverseWords(s) {
  return s
    .trim() // Remove leading/trailing spaces
    .split(/\s+/) // Split by one or more spaces
    .reverse() // Reverse word order
    .join(' '); // Join with single space
}

// Method 2: Manual approach
function reverseWordsManual(s) {
  const words = [];
  let word = '';

  // Extract words manually
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== ' ') {
      word += s[i];
    } else {
      if (word.length > 0) {
        words.push(word);
        word = '';
      }
    }
  }

  // Add last word if exists
  if (word.length > 0) {
    words.push(word);
  }

  // Reverse and join
  let result = '';
  for (let i = words.length - 1; i >= 0; i--) {
    result += words[i];
    if (i > 0) result += ' ';
  }

  return result;
}

// Method 3: Two-pass approach (reverse entire string, then reverse each word)
function reverseWordsInPlace(s) {
  // Convert to array for manipulation
  let chars = s.trim().replace(/\s+/g, ' ').split('');

  // Helper function to reverse portion of array
  function reverse(arr, start, end) {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }

  // Reverse entire string
  reverse(chars, 0, chars.length - 1);

  // Reverse each word
  let start = 0;
  for (let i = 0; i <= chars.length; i++) {
    if (i === chars.length || chars[i] === ' ') {
      reverse(chars, start, i - 1);
      start = i + 1;
    }
  }

  return chars.join('');
}

// Example usage
console.log(reverseWords('the sky is blue')); // "blue is sky the"
console.log(reverseWords('  hello world  ')); // "world hello"
```

**Time Complexity:** O(n) | **Space Complexity:** O(n)

---

## 13. 📊 Character Frequency

**Companies:** Amazon, Google, Facebook

### Problem Statement

Given a string, return the character that appears most frequently. If there are
multiple characters with the same highest frequency, return any one of them.

### Concept Explanation

We count the frequency of each character using a hash map, then find the
character with maximum frequency.

### Solution

```javascript
function mostFrequentChar(s) {
  const freqMap = new Map();
  let maxChar = '';
  let maxCount = 0;

  // Count frequency of each character
  for (let char of s) {
    const count = (freqMap.get(char) || 0) + 1;
    freqMap.set(char, count);

    // Update maximum if current character has higher frequency
    if (count > maxCount) {
      maxCount = count;
      maxChar = char;
    }
  }

  return maxChar;
}

// Return all characters with maximum frequency
function mostFrequentChars(s) {
  const freqMap = new Map();
  let maxCount = 0;

  // Count frequencies
  for (let char of s) {
    const count = (freqMap.get(char) || 0) + 1;
    freqMap.set(char, count);
    maxCount = Math.max(maxCount, count);
  }

  // Find all characters with max frequency
  const result = [];
  for (let [char, count] of freqMap) {
    if (count === maxCount) {
      result.push(char);
    }
  }

  return result;
}

// Using object instead of Map
function mostFrequentCharObj(s) {
  const freq = {};
  let maxChar = '';
  let maxCount = 0;

  for (let char of s) {
    freq[char] = (freq[char] || 0) + 1;

    if (freq[char] > maxCount) {
      maxCount = freq[char];
      maxChar = char;
    }
  }

  return { char: maxChar, count: maxCount };
}

// Example usage
console.log(mostFrequentChar('hello')); // "l"
console.log(mostFrequentChars('aabbcc')); // ["a", "b", "c"]
```

**Time Complexity:** O(n) | **Space Complexity:** O(k) where k is number of
unique characters

---

## 14. 🎯 Longest Common Prefix

**Companies:** Google, Amazon, Microsoft

### Problem Statement

Write a function to find the longest common prefix string amongst an array of
strings. If there is no common prefix, return an empty string.

### Concept Explanation

We can compare characters at the same position across all strings. The moment we
find a mismatch, we return the prefix found so far.

### Solution

```javascript
function longestCommonPrefix(strs) {
  if (!strs || strs.length === 0) return '';

  // Start with first string as reference
  let prefix = strs[0];

  // Compare with each subsequent string
  for (let i = 1; i < strs.length; i++) {
    // Keep reducing prefix until it matches start of current string
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (prefix === '') return '';
    }
  }

  return prefix;
}

// Vertical scanning approach
function longestCommonPrefixVertical(strs) {
  if (!strs || strs.length === 0) return '';

  // Check each character position
  for (let i = 0; i < strs[0].length; i++) {
    const char = strs[0][i];

    // Check if this character exists at same position in all strings
    for (let j = 1; j < strs.length; j++) {
      if (i >= strs[j].length || strs[j][i] !== char) {
        return strs[0].substring(0, i);
      }
    }
  }

  return strs[0];
}

// Binary search approach
function longestCommonPrefixBinary(strs) {
  if (!strs || strs.length === 0) return '';

  // Find minimum length string
  let minLen = Math.min(...strs.map((str) => str.length));

  let low = 0;
  let high = minLen;

  while (low < high) {
    const mid = Math.floor((low + high + 1) / 2);

    if (isCommonPrefix(strs, mid)) {
      low = mid;
    } else {
      high = mid - 1;
    }
  }

  return strs[0].substring(0, low);
}

// Helper function for binary search
function isCommonPrefix(strs, len) {
  const prefix = strs[0].substring(0, len);

  for (let i = 1; i < strs.length; i++) {
    if (!strs[i].startsWith(prefix)) {
      return false;
    }
  }

  return true;
}

// Example usage
console.log(longestCommonPrefix(['flower', 'flow', 'flight'])); // "fl"
console.log(longestCommonPrefix(['dog', 'racecar', 'car'])); // ""
```

**Time Complexity:** O(S) where S is sum of all characters | **Space
Complexity:** O(1)

---

## 15. 🔍 Valid Palindrome II

**Companies:** Facebook, Amazon, Google

### Problem Statement

Given a string s, return true if the s can be palindrome after deleting at most
one character from it.

### Concept Explanation

We use two pointers. When characters don't match, we try deleting either the
left or right character and check if the remaining string is a palindrome.

### Solution

```javascript
function validPalindrome(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      // Try deleting left character OR right character
      return (
        isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1)
      );
    }
    left++;
    right--;
  }

  return true; // Already a palindrome
}

// Helper function to check if substring is palindrome
function isPalindrome(s, left, right) {
  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

// Alternative approach with detailed tracking
function validPalindromeDetailed(s) {
  function checkPalindrome(str, left, right, deletions) {
    while (left < right) {
      if (str[left] !== str[right]) {
        if (deletions === 0) {
          // Try deleting left or right character
          return (
            checkPalindrome(str, left + 1, right, 1) ||
            checkPalindrome(str, left, right - 1, 1)
          );
        } else {
          return false; // Already used one deletion
        }
      }
      left++;
      right--;
    }
    return true;
  }

  return checkPalindrome(s, 0, s.length - 1, 0);
}

// Example usage
console.log(validPalindrome('aba')); // true
console.log(validPalindrome('abca')); // true (delete 'c')
console.log(validPalindrome('abc')); // false
```

**Time Complexity:** O(n) | **Space Complexity:** O(1)

---

## 16. 🎨 Minimum Window Substring

**Companies:** Google, Facebook, Amazon

### Problem Statement

Given two strings s and t, return the minimum window substring of s such that
every character in t is included in the window.

### Concept Explanation

We use sliding window technique with two pointers and frequency maps. Expand the
window until all characters of t are included, then shrink from left while
maintaining validity.

### Solution

```javascript
function minWindow(s, t) {
  if (s.length < t.length) return '';

  // Count characters in t
  const tCount = new Map();
  for (let char of t) {
    tCount.set(char, (tCount.get(char) || 0) + 1);
  }

  const required = tCount.size; // Number of unique characters in t
  let formed = 0; // Number of unique characters in current window with desired frequency

  // Window counts
  const windowCounts = new Map();

  let left = 0,
    right = 0;
  let minLen = Infinity;
  let minLeft = 0,
    minRight = 0;

  while (right < s.length) {
    // Add character from right to window
    const char = s[right];
    windowCounts.set(char, (windowCounts.get(char) || 0) + 1);

    // If frequency of current character matches desired count in t
    if (tCount.has(char) && windowCounts.get(char) === tCount.get(char)) {
      formed++;
    }

    // Try to shrink window from left
    while (left <= right && formed === required) {
      // Update minimum window if current is smaller
      if (right - left + 1 < minLen) {
        minLen = right - left + 1;
        minLeft = left;
        minRight = right;
      }

      // Remove character from left of window
      const leftChar = s[left];
      windowCounts.set(leftChar, windowCounts.get(leftChar) - 1);

      if (
        tCount.has(leftChar) &&
        windowCounts.get(leftChar) < tCount.get(leftChar)
      ) {
        formed--;
      }

      left++;
    }

    right++;
  }

  return minLen === Infinity ? '' : s.substring(minLeft, minRight + 1);
}

// Simplified version using arrays for lowercase letters
function minWindowArray(s, t) {
  if (s.length < t.length) return '';

  const tCount = new Array(128).fill(0);
  const windowCount = new Array(128).fill(0);

  // Count characters in t
  for (let char of t) {
    tCount[char.charCodeAt(0)]++;
  }

  let left = 0;
  let minLen = Infinity;
  let minStart = 0;
  let required = t.length;

  for (let right = 0; right < s.length; right++) {
    const rightChar = s.charCodeAt(right);

    // Expand window
    if (tCount[rightChar] > 0) {
      if (windowCount[rightChar] < tCount[rightChar]) {
        required--;
      }
    }
    windowCount[rightChar]++;

    // Shrink window
    while (required === 0) {
      if (right - left + 1 < minLen) {
        minLen = right - left + 1;
        minStart = left;
      }

      const leftChar = s.charCodeAt(left);
      windowCount[leftChar]--;

      if (tCount[leftChar] > 0 && windowCount[leftChar] < tCount[leftChar]) {
        required++;
      }

      left++;
    }
  }

  return minLen === Infinity ? '' : s.substring(minStart, minStart + minLen);
}

// Example usage
console.log(minWindow('ADOBECODEBANC', 'ABC')); // "BANC"
console.log(minWindow('a', 'a')); // "a"
console.log(minWindow('a', 'aa')); // ""
```

**Time Complexity:** O(|s| + |t|) | **Space Complexity:** O(|s| + |t|)

---

## 17. 🔤 Letter Combinations of Phone Number

**Companies:** Amazon, Google, Microsoft

### Problem Statement

Given a string containing digits from 2-9 inclusive, return all possible letter
combinations that the number could represent.

### Concept Explanation

We use backtracking to generate all combinations. For each digit, we try all
possible letters and recursively build combinations.

### Solution

```javascript
function letterCombinations(digits) {
  if (!digits || digits.length === 0) return [];

  // Mapping of digits to letters
  const phoneMap = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };

  const result = [];

  function backtrack(index, currentCombination) {
    // Base case: if we've processed all digits
    if (index === digits.length) {
      result.push(currentCombination);
      return;
    }

    // Get letters for current digit
    const letters = phoneMap[digits[index]];

    // Try each letter for current digit
    for (let letter of letters) {
      backtrack(index + 1, currentCombination + letter);
    }
  }

  backtrack(0, '');
  return result;
}

// Iterative approach using queue
function letterCombinationsIterative(digits) {
  if (!digits || digits.length === 0) return [];

  const phoneMap = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };

  let result = [''];

  for (let digit of digits) {
    const letters = phoneMap[digit];
    const newResult = [];

    // For each existing combination, add each letter
    for (let combination of result) {
      for (let letter of letters) {
        newResult.push(combination + letter);
      }
    }

    result = newResult;
  }

  return result;
}

// Using reduce for functional approach
function letterCombinationsFunctional(digits) {
  if (!digits) return [];

  const phoneMap = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };

  return digits.split('').reduce(
    (combinations, digit) => {
      return combinations.flatMap((combination) =>
        phoneMap[digit].split('').map((letter) => combination + letter)
      );
    },
    ['']
  );
}

// Example usage
console.log(letterCombinations('23'));
// ["ad","ae","af","bd","be","bf","cd","ce","cf"]
console.log(letterCombinations('')); // []
```

**Time Complexity:** O(3^n × 4^m) where n and m are digits with 3 and 4 letters
| **Space Complexity:** O(3^n × 4^m)

---

## 18. 📝 Decode String

**Companies:** Google, Amazon, Facebook

### Problem Statement

Given an encoded string, return its decoded string. The encoding rule is:
k[encoded_string], where the encoded_string inside the square brackets is being
repeated exactly k times.

### Concept Explanation

We use a stack to handle nested brackets. When we encounter '[', we push current
state to stack. When we encounter ']', we pop and repeat the string.

### Solution

```javascript
function decodeString(s) {
  const stack = [];
  let currentString = '';
  let currentNum = 0;

  for (let char of s) {
    if (char >= '0' && char <= '9') {
      // Build the number (could be multi-digit)
      currentNum = currentNum * 10 + parseInt(char);
    } else if (char === '[') {
      // Push current state to stack and reset
      stack.push([currentString, currentNum]);
      currentString = '';
      currentNum = 0;
    } else if (char === ']') {
      // Pop from stack and decode
      const [prevString, repeatCount] = stack.pop();
      currentString = prevString + currentString.repeat(repeatCount);
    } else {
      // Regular character
      currentString += char;
    }
  }

  return currentString;
}

// Recursive approach
function decodeStringRecursive(s) {
  let index = 0;

  function decode() {
    let result = '';
    let num = 0;

    while (index < s.length) {
      const char = s[index];
      index++;

      if (char >= '0' && char <= '9') {
        num = num * 10 + parseInt(char);
      } else if (char === '[') {
        // Recursively decode the substring
        const decodedSubstring = decode();
        result += decodedSubstring.repeat(num);
        num = 0;
      } else if (char === ']') {
        // End of current bracket, return result
        return result;
      } else {
        // Regular character
        result += char;
      }
    }

    return result;
  }

  return decode();
}

// Alternative stack implementation with clearer separation
function decodeStringClear(s) {
  const stringStack = [];
  const countStack = [];
  let currentString = '';
  let count = 0;

  for (let char of s) {
    if (char >= '0' && char <= '9') {
      count = count * 10 + parseInt(char);
    } else if (char === '[') {
      // Save current state
      stringStack.push(currentString);
      countStack.push(count);

      // Reset for new bracket level
      currentString = '';
      count = 0;
    } else if (char === ']') {
      // Restore previous state and repeat current string
      const prevString = stringStack.pop();
      const repeatCount = countStack.pop();
      currentString = prevString + currentString.repeat(repeatCount);
    } else {
      currentString += char;
    }
  }

  return currentString;
}

// Example usage
console.log(decodeString('3[a]2[bc]')); // "aaabcbc"
console.log(decodeString('3[a2[c]]')); // "accaccacc"
console.log(decodeString('2[abc]3[cd]ef')); // "abcabccdcdcdef"
```

**Time Complexity:** O(maxK × n) where maxK is maximum value of k | **Space
Complexity:** O(m + n) where m is number of brackets

---

## 19. 🔄 Rotate String

**Companies:** Amazon, Google, Microsoft

### Problem Statement

Given two strings s and goal, return true if and only if s can become goal after
some number of shifts on s.

### Concept Explanation

If goal is a rotation of s, then goal will be a substring of s+s. This works
because concatenating s with itself contains all possible rotations of s.

### Solution

```javascript
function rotateString(s, goal) {
  // If lengths are different, goal cannot be rotation of s
  if (s.length !== goal.length) {
    return false;
  }

  // If s is empty, goal must also be empty
  if (s.length === 0) {
    return true;
  }

  // Check if goal is substring of s+s
  return (s + s).includes(goal);
}

// Alternative approach by trying all rotations
function rotateStringBruteForce(s, goal) {
  if (s.length !== goal.length) return false;
  if (s.length === 0) return true;

  // Try all possible rotations
  for (let i = 0; i < s.length; i++) {
    const rotated = s.substring(i) + s.substring(0, i);
    if (rotated === goal) {
      return true;
    }
  }

  return false;
}

// Using KMP algorithm for efficient substring search
function rotateStringKMP(s, goal) {
  if (s.length !== goal.length) return false;
  if (s.length === 0) return true;

  const doubled = s + s;

  // KMP search for goal in doubled string
  function kmpSearch(text, pattern) {
    const lps = buildLPS(pattern);
    let i = 0,
      j = 0;

    while (i < text.length) {
      if (text[i] === pattern[j]) {
        i++;
        j++;
      }

      if (j === pattern.length) {
        return true;
      } else if (i < text.length && text[i] !== pattern[j]) {
        if (j !== 0) {
          j = lps[j - 1];
        } else {
          i++;
        }
      }
    }

    return false;
  }

  function buildLPS(pattern) {
    const lps = new Array(pattern.length).fill(0);
    let len = 0;
    let i = 1;

    while (i < pattern.length) {
      if (pattern[i] === pattern[len]) {
        len++;
        lps[i] = len;
        i++;
      } else {
        if (len !== 0) {
          len = lps[len - 1];
        } else {
          lps[i] = 0;
          i++;
        }
      }
    }

    return lps;
  }

  return kmpSearch(doubled, goal);
}

// Manual rotation check
function rotateStringManual(s, goal) {
  if (s.length !== goal.length) return false;

  for (let i = 0; i < s.length; i++) {
    let match = true;

    // Check if rotation starting at position i matches goal
    for (let j = 0; j < s.length; j++) {
      if (s[(i + j) % s.length] !== goal[j]) {
        match = false;
        break;
      }
    }

    if (match) return true;
  }

  return false;
}

// Example usage
console.log(rotateString('abcde', 'cdeab')); // true
console.log(rotateString('abcde', 'abced')); // false
```

**Time Complexity:** O(n) for concatenation method, O(n²) for brute force |
**Space Complexity:** O(n)

---

## 20. 🎯 Isomorphic Strings

**Companies:** Google, Facebook, Amazon

### Problem Statement

Given two strings s and t, determine if they are isomorphic. Two strings are
isomorphic if the characters in s can be replaced to get t.

### Concept Explanation

Two strings are isomorphic if there's a one-to-one character mapping between
them. We use two hash maps to ensure bidirectional mapping consistency.

### Solution

```javascript
function isIsomorphic(s, t) {
  if (s.length !== t.length) return false;

  const mapST = new Map(); // Mapping from s to t
  const mapTS = new Map(); // Mapping from t to s

  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];

    // Check mapping from s to t
    if (mapST.has(charS)) {
      if (mapST.get(charS) !== charT) {
        return false;
      }
    } else {
      mapST.set(charS, charT);
    }

    // Check mapping from t to s
    if (mapTS.has(charT)) {
      if (mapTS.get(charT) !== charS) {
        return false;
      }
    } else {
      mapTS.set(charT, charS);
    }
  }

  return true;
}

// Using single map with careful checking
function isIsomorphicSingleMap(s, t) {
  if (s.length !== t.length) return false;

  const mapping = new Map();
  const mapped = new Set();

  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];

    if (mapping.has(charS)) {
      // Check if existing mapping is consistent
      if (mapping.get(charS) !== charT) {
        return false;
      }
    } else {
      // Check if target character is already mapped
      if (mapped.has(charT)) {
        return false;
      }
      mapping.set(charS, charT);
      mapped.add(charT);
    }
  }

  return true;
}

// Using arrays for ASCII characters (more efficient)
function isIsomorphicArray(s, t) {
  if (s.length !== t.length) return false;

  const mapS = new Array(256).fill(-1);
  const mapT = new Array(256).fill(-1);

  for (let i = 0; i < s.length; i++) {
    const codeS = s.charCodeAt(i);
    const codeT = t.charCodeAt(i);

    if (mapS[codeS] !== mapT[codeT]) {
      return false;
    }

    mapS[codeS] = i;
    mapT[codeT] = i;
  }

  return true;
}

// Pattern-based approach
function isIsomorphicPattern(s, t) {
  function getPattern(str) {
    const map = new Map();
    const pattern = [];
    let id = 0;

    for (let char of str) {
      if (!map.has(char)) {
        map.set(char, id++);
      }
      pattern.push(map.get(char));
    }

    return pattern.join(',');
  }

  return getPattern(s) === getPattern(t);
}

// Example usage
console.log(isIsomorphic('egg', 'add')); // true
console.log(isIsomorphic('foo', 'bar')); // false
console.log(isIsomorphic('paper', 'title')); // true
```

**Time Complexity:** O(n) | **Space Complexity:** O(1) for array approach, O(k)
for map approach where k is unique characters

---

## 🎯 Summary

This comprehensive guide covers the **20 most frequently asked string-based DSA
questions** in technical interviews. Each problem includes:

- **Problem Statement** with clear explanation
- **Concept Explanation** covering the algorithmic approach
- **Multiple Solution Approaches** with detailed comments
- **Time & Space Complexity** analysis
- **Company Information** where these questions are commonly asked
- **Example Usage** with test cases

### 📈 Key Concepts Covered:

- **Two Pointers** - Palindrome checks, string reversal
- **Sliding Window** - Longest substring problems, minimum window
- **Hash Maps** - Character frequency, anagram detection
- **Stack** - Parentheses validation, decode string
- **String Manipulation** - Pattern matching, transformations
- **Backtracking** - Letter combinations, recursive solutions
- **Dynamic Programming** - Longest palindromic substring

### 💡 Tips for Success:

1. **Practice multiple approaches** for each problem
2. **Understand time/space tradeoffs** between solutions
3. **Master the fundamental patterns** (two pointers, sliding window)
4. **Handle edge cases** (empty strings, single characters)
5. **Optimize space complexity** when possible
6. **Use appropriate data structures** (Map vs Object vs Array)

Happy coding! 🚀
