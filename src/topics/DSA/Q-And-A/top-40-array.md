# **📚 Top 40 DSA Array Interview Questions in JavaScript**

## 📋 Table of Contents

### 🟢 Easy (10 Questions)

1. [Two Sum](#1-two-sum) - _LeetCode, Google, Amazon_
2. [Best Time to Buy and Sell Stock](#2-best-time-to-buy-and-sell-stock) -
   _Amazon, Microsoft_
3. [Contains Duplicate](#3-contains-duplicate) - _Google, Facebook_
4. [Maximum Subarray](#4-maximum-subarray) - _Amazon, Microsoft_
5. [Merge Sorted Array](#5-merge-sorted-array) - _Facebook, Apple_
6. [Plus One](#6-plus-one) - _Google, Amazon_
7. [Move Zeroes](#7-move-zeroes) - _Facebook, Microsoft_
8. [Remove Duplicates from Sorted Array](#8-remove-duplicates-from-sorted-array) -
   _Apple, Google_
9. [Single Number](#9-single-number) - _Amazon, Facebook_
10. [Intersection of Two Arrays II](#10-intersection-of-two-arrays-ii) -
    _Google, Facebook_

### 🟡 Medium (10 Questions)

11. [3Sum](#11-3sum) - _Facebook, Amazon_
12. [Container With Most Water](#12-container-with-most-water) - _Amazon,
    Microsoft_
13. [Product of Array Except Self](#13-product-of-array-except-self) - _Amazon,
    Facebook_
14. [Find All Duplicates in an Array](#14-find-all-duplicates-in-an-array) -
    _Amazon, Google_
15. [Rotate Array](#15-rotate-array) - _Microsoft, Amazon_
16. [Search in Rotated Sorted Array](#16-search-in-rotated-sorted-array) -
    _Amazon, Facebook_
17. [Sort Colors](#17-sort-colors) - _Microsoft, Apple_
18. [Subarray Sum Equals K](#18-subarray-sum-equals-k) - _Facebook, Google_
19. [Find Peak Element](#19-find-peak-element) - _Google, Microsoft_
20. [Spiral Matrix](#20-spiral-matrix) - _Amazon, Microsoft_

### 🔴 Hard (10 Questions)

21. [Trapping Rain Water](#21-trapping-rain-water) - _Amazon, Google_
22. [First Missing Positive](#22-first-missing-positive) - _Facebook, Amazon_
23. [Merge Intervals](#23-merge-intervals) - _Facebook, Google_
24. [Largest Rectangle in Histogram](#24-largest-rectangle-in-histogram) -
    _Amazon, Google_
25. [Jump Game II](#25-jump-game-ii) - _Google, Amazon_
26. [Candy](#26-candy) - _Facebook, Google_
27. [Maximum Gap](#27-maximum-gap) - _Google, Amazon_
28. [Sliding Window Maximum](#28-sliding-window-maximum) - _Amazon, Google_
29. [Median of Two Sorted Arrays](#29-median-of-two-sorted-arrays) - _Google,
    Facebook_
30. [Minimum Window Substring](#30-minimum-window-substring) - _Facebook,
    Amazon_

### ⚫ Expert (10 Questions)

31. [Count of Smaller Numbers After Self](#31-count-of-smaller-numbers-after-self) -
    _Google, Amazon_
32. [Reverse Pairs](#32-reverse-pairs) - _Google, Microsoft_
33. [Russian Doll Envelopes](#33-russian-doll-envelopes) - _Google, Facebook_
34. [Maximum Rectangle](#34-maximum-rectangle) - _Amazon, Google_
35. [Burst Balloons](#35-burst-balloons) - _Google, Facebook_
36. [Create Maximum Number](#36-create-maximum-number) - _Google, Amazon_
37. [Shortest Subarray with Sum at Least K](#37-shortest-subarray-with-sum-at-least-k) -
    _Google, Facebook_
38. [Number of Subarrays with Bounded Maximum](#38-number-of-subarrays-with-bounded-maximum) -
    _Google, Amazon_
39. [Split Array Largest Sum](#39-split-array-largest-sum) - _Google, Facebook_
40. [Count of Range Sum](#40-count-of-range-sum) - _Google, Microsoft_

---

## 🟢 Easy Questions

### 1. Two Sum

**Company**: _LeetCode, Google, Amazon_ 🏢

**Problem Statement**: Given an array of integers `nums` and an integer
`target`, return indices of the two numbers such that they add up to target.

**Concept**: Hash Map for O(1) lookups to find complement values.

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 *
 * Time: O(n), Space: O(n)
 */
function twoSum(nums, target) {
  const map = new Map(); // Hash map to store value -> index

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]; // Find what we need

    // If complement exists in map, we found our pair
    if (map.has(complement)) {
      return [map.get(complement), i];
    }

    // Store current number and its index
    map.set(nums[i], i);
  }

  return []; // No solution found
}
```

### 2. Best Time to Buy and Sell Stock

**Company**: _Amazon, Microsoft_ 🏢

**Problem Statement**: You are given an array prices where prices[i] is the
price of a given stock on the ith day. Find the maximum profit you can achieve.

**Concept**: Track minimum price seen so far and calculate max profit at each
step.

```javascript
/**
 * @param {number[]} prices
 * @return {number}
 *
 * Time: O(n), Space: O(1)
 */
function maxProfit(prices) {
  let minPrice = Infinity; // Track minimum price seen so far
  let maxProfit = 0; // Track maximum profit possible

  for (let price of prices) {
    // Update minimum price if current price is lower
    if (price < minPrice) {
      minPrice = price;
    }
    // Calculate profit if we sell at current price
    else if (price - minPrice > maxProfit) {
      maxProfit = price - minPrice;
    }
  }

  return maxProfit;
}
```

### 3. Contains Duplicate

**Company**: _Google, Facebook_ 🏢

**Problem Statement**: Given an integer array nums, return true if any value
appears at least twice in the array.

**Concept**: Use Set to track seen elements for O(1) lookup time.

```javascript
/**
 * @param {number[]} nums
 * @return {boolean}
 *
 * Time: O(n), Space: O(n)
 */
function containsDuplicate(nums) {
  const seen = new Set(); // Set to track seen numbers

  for (let num of nums) {
    // If number already exists in set, we found a duplicate
    if (seen.has(num)) {
      return true;
    }
    seen.add(num); // Add number to set
  }

  return false; // No duplicates found
}
```

### 4. Maximum Subarray

**Company**: _Amazon, Microsoft_ 🏢

**Problem Statement**: Given an integer array nums, find the contiguous subarray
with the largest sum, and return its sum.

**Concept**: Kadane's Algorithm - keep track of current sum and reset when it
becomes negative.

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 *
 * Time: O(n), Space: O(1)
 */
function maxSubArray(nums) {
  let currentSum = nums[0]; // Current subarray sum
  let maxSum = nums[0]; // Maximum sum found so far

  for (let i = 1; i < nums.length; i++) {
    // Either extend existing subarray or start new one
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    // Update maximum sum if current is better
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}
```

### 5. Merge Sorted Array

**Company**: _Facebook, Apple_ 🏢

**Problem Statement**: Merge two sorted arrays nums1 and nums2 into nums1 in
sorted order.

**Concept**: Two pointers from the end to avoid overwriting elements.

```javascript
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void}
 *
 * Time: O(m+n), Space: O(1)
 */
function merge(nums1, m, nums2, n) {
  let i = m - 1; // Pointer for nums1
  let j = n - 1; // Pointer for nums2
  let k = m + n - 1; // Pointer for merged position

  // Merge from the end to avoid overwriting
  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }

  // Copy remaining elements from nums2
  while (j >= 0) {
    nums1[k] = nums2[j];
    j--;
    k--;
  }
}
```

### 6. Plus One

**Company**: _Google, Amazon_ 🏢

**Problem Statement**: Given a non-empty array representing a non-negative
integer, plus one to the integer.

**Concept**: Handle carry propagation from right to left.

```javascript
/**
 * @param {number[]} digits
 * @return {number[]}
 *
 * Time: O(n), Space: O(1) or O(n) if all 9s
 */
function plusOne(digits) {
  // Start from the last digit
  for (let i = digits.length - 1; i >= 0; i--) {
    // If digit is less than 9, just increment and return
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }
    // If digit is 9, set to 0 and continue carry
    digits[i] = 0;
  }

  // If we reach here, all digits were 9
  // Need to add 1 at the beginning
  return [1, ...digits];
}
```

### 7. Move Zeroes

**Company**: _Facebook, Microsoft_ 🏢

**Problem Statement**: Move all 0's to the end of the array while maintaining
relative order of non-zero elements.

**Concept**: Two pointers - one for placing non-zero elements, another for
iterating.

```javascript
/**
 * @param {number[]} nums
 * @return {void}
 *
 * Time: O(n), Space: O(1)
 */
function moveZeroes(nums) {
  let writeIndex = 0; // Position to place next non-zero element

  // Move all non-zero elements to the front
  for (let readIndex = 0; readIndex < nums.length; readIndex++) {
    if (nums[readIndex] !== 0) {
      nums[writeIndex] = nums[readIndex];
      writeIndex++;
    }
  }

  // Fill remaining positions with zeros
  while (writeIndex < nums.length) {
    nums[writeIndex] = 0;
    writeIndex++;
  }
}
```

### 8. Remove Duplicates from Sorted Array

**Company**: _Apple, Google_ 🏢

**Problem Statement**: Remove duplicates from sorted array in-place and return
the new length.

**Concept**: Two pointers to overwrite duplicates while maintaining order.

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 *
 * Time: O(n), Space: O(1)
 */
function removeDuplicates(nums) {
  if (nums.length === 0) return 0;

  let writeIndex = 1; // Position for next unique element

  for (let readIndex = 1; readIndex < nums.length; readIndex++) {
    // If current element is different from previous
    if (nums[readIndex] !== nums[readIndex - 1]) {
      nums[writeIndex] = nums[readIndex];
      writeIndex++;
    }
  }

  return writeIndex; // New length of array
}
```

### 9. Single Number

**Company**: _Amazon, Facebook_ 🏢

**Problem Statement**: Given an array where every element appears twice except
for one, find that single element.

**Concept**: XOR operation - x ^ x = 0, x ^ 0 = x.

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 *
 * Time: O(n), Space: O(1)
 */
function singleNumber(nums) {
  let result = 0; // XOR of all elements

  // XOR all numbers together
  // Duplicates will cancel out, single number remains
  for (let num of nums) {
    result ^= num;
  }

  return result;
}
```

### 10. Intersection of Two Arrays II

**Company**: _Google, Facebook_ 🏢

**Problem Statement**: Return the intersection of two arrays, including
duplicates.

**Concept**: Use frequency map to count occurrences in first array.

```javascript
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 *
 * Time: O(m+n), Space: O(min(m,n))
 */
function intersect(nums1, nums2) {
  const map = new Map(); // Frequency map for nums1
  const result = [];

  // Count frequency of elements in nums1
  for (let num of nums1) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  // Check each element in nums2
  for (let num of nums2) {
    if (map.has(num) && map.get(num) > 0) {
      result.push(num); // Add to result
      map.set(num, map.get(num) - 1); // Decrease count
    }
  }

  return result;
}
```

---

## 🟡 Medium Questions

### 11. 3Sum

**Company**: _Facebook, Amazon_ 🏢

**Problem Statement**: Find all unique triplets in the array that sum to zero.

**Concept**: Sort array and use two pointers for each fixed element to avoid
duplicates.

```javascript
/**
 * @param {number[]} nums
 * @return {number[][]}
 *
 * Time: O(n²), Space: O(1)
 */
function threeSum(nums) {
  nums.sort((a, b) => a - b); // Sort for two pointer approach
  const result = [];

  for (let i = 0; i < nums.length - 2; i++) {
    // Skip duplicates for first element
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);

        // Skip duplicates for second element
        while (left < right && nums[left] === nums[left + 1]) left++;
        // Skip duplicates for third element
        while (left < right && nums[right] === nums[right - 1]) right--;

        left++;
        right--;
      } else if (sum < 0) {
        left++; // Need larger sum
      } else {
        right--; // Need smaller sum
      }
    }
  }

  return result;
}
```

### 12. Container With Most Water

**Company**: _Amazon, Microsoft_ 🏢

**Problem Statement**: Find two lines that together with x-axis forms a
container that holds the most water.

**Concept**: Two pointers from ends, move pointer with smaller height to
potentially find larger area.

```javascript
/**
 * @param {number[]} height
 * @return {number}
 *
 * Time: O(n), Space: O(1)
 */
function maxArea(height) {
  let left = 0;
  let right = height.length - 1;
  let maxWater = 0;

  while (left < right) {
    // Calculate current water area
    const width = right - left;
    const currentArea = Math.min(height[left], height[right]) * width;
    maxWater = Math.max(maxWater, currentArea);

    // Move pointer with smaller height
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxWater;
}
```

### 13. Product of Array Except Self

**Company**: _Amazon, Facebook_ 🏢

**Problem Statement**: Return an array where each element is the product of all
elements except itself, without using division.

**Concept**: Two passes - left products and right products.

```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 *
 * Time: O(n), Space: O(1) excluding output array
 */
function productExceptSelf(nums) {
  const result = new Array(nums.length);

  // First pass: calculate left products
  result[0] = 1;
  for (let i = 1; i < nums.length; i++) {
    result[i] = result[i - 1] * nums[i - 1];
  }

  // Second pass: multiply with right products
  let rightProduct = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= rightProduct;
    rightProduct *= nums[i];
  }

  return result;
}
```

### 14. Find All Duplicates in an Array

**Company**: _Amazon, Google_ 🏢

**Problem Statement**: Find all duplicates in an array where 1 ≤ a[i] ≤ n (n =
size of array).

**Concept**: Use array indices as hash table by negating values at corresponding
positions.

```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 *
 * Time: O(n), Space: O(1)
 */
function findDuplicates(nums) {
  const duplicates = [];

  for (let num of nums) {
    const index = Math.abs(num) - 1; // Convert to 0-based index

    // If value at index is already negative, we found duplicate
    if (nums[index] < 0) {
      duplicates.push(Math.abs(num));
    } else {
      // Mark as visited by negating
      nums[index] = -nums[index];
    }
  }

  return duplicates;
}
```

### 15. Rotate Array

**Company**: _Microsoft, Amazon_ 🏢

**Problem Statement**: Rotate array to the right by k steps.

**Concept**: Three reversals - reverse entire array, reverse first k elements,
reverse remaining elements.

```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void}
 *
 * Time: O(n), Space: O(1)
 */
function rotate(nums, k) {
  k = k % nums.length; // Handle k larger than array length

  // Helper function to reverse array portion
  function reverse(start, end) {
    while (start < end) {
      [nums[start], nums[end]] = [nums[end], nums[start]];
      start++;
      end--;
    }
  }

  // Step 1: Reverse entire array
  reverse(0, nums.length - 1);

  // Step 2: Reverse first k elements
  reverse(0, k - 1);

  // Step 3: Reverse remaining elements
  reverse(k, nums.length - 1);
}
```

### 16. Search in Rotated Sorted Array

**Company**: _Amazon, Facebook_ 🏢

**Problem Statement**: Search for a target in a rotated sorted array.

**Concept**: Modified binary search - determine which half is sorted and check
if target lies in that half.

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 *
 * Time: O(log n), Space: O(1)
 */
function search(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    // Check if left half is sorted
    if (nums[left] <= nums[mid]) {
      // Target is in sorted left half
      if (target >= nums[left] && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      // Right half is sorted
      // Target is in sorted right half
      if (target > nums[mid] && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1; // Target not found
}
```

### 17. Sort Colors

**Company**: _Microsoft, Apple_ 🏢

**Problem Statement**: Sort an array containing only 0s, 1s, and 2s in-place.

**Concept**: Dutch National Flag algorithm using three pointers.

```javascript
/**
 * @param {number[]} nums
 * @return {void}
 *
 * Time: O(n), Space: O(1)
 */
function sortColors(nums) {
  let low = 0; // Pointer for 0s
  let mid = 0; // Current element pointer
  let high = nums.length - 1; // Pointer for 2s

  while (mid <= high) {
    if (nums[mid] === 0) {
      // Swap with low pointer and advance both
      [nums[low], nums[mid]] = [nums[mid], nums[low]];
      low++;
      mid++;
    } else if (nums[mid] === 1) {
      // 1 is in correct position, just advance mid
      mid++;
    } else {
      // Swap with high pointer and decrease high
      // Don't advance mid as we need to check swapped element
      [nums[mid], nums[high]] = [nums[high], nums[mid]];
      high--;
    }
  }
}
```

### 18. Subarray Sum Equals K

**Company**: _Facebook, Google_ 🏢

**Problem Statement**: Find the total number of continuous subarrays whose sum
equals k.

**Concept**: Use prefix sum and hash map to track cumulative sums.

```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 *
 * Time: O(n), Space: O(n)
 */
function subarraySum(nums, k) {
  const prefixSumCount = new Map(); // Map to store prefix sum frequencies
  prefixSumCount.set(0, 1); // Initialize with sum 0

  let count = 0;
  let prefixSum = 0;

  for (let num of nums) {
    prefixSum += num;

    // If (prefixSum - k) exists, we found subarrays ending at current position
    if (prefixSumCount.has(prefixSum - k)) {
      count += prefixSumCount.get(prefixSum - k);
    }

    // Update frequency of current prefix sum
    prefixSumCount.set(prefixSum, (prefixSumCount.get(prefixSum) || 0) + 1);
  }

  return count;
}
```

### 19. Find Peak Element

**Company**: _Google, Microsoft_ 🏢

**Problem Statement**: Find a peak element in an array where peak is greater
than its neighbors.

**Concept**: Binary search based on the slope - move towards the increasing
side.

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 *
 * Time: O(log n), Space: O(1)
 */
function findPeakElement(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    // If mid element is less than next, peak is on right side
    if (nums[mid] < nums[mid + 1]) {
      left = mid + 1;
    } else {
      // Peak is on left side (including mid)
      right = mid;
    }
  }

  return left; // left === right at this point
}
```

### 20. Spiral Matrix

**Company**: _Amazon, Microsoft_ 🏢

**Problem Statement**: Return all elements of the matrix in spiral order.

**Concept**: Maintain boundaries and traverse layer by layer.

```javascript
/**
 * @param {number[][]} matrix
 * @return {number[]}
 *
 * Time: O(m*n), Space: O(1)
 */
function spiralOrder(matrix) {
  if (!matrix.length || !matrix[0].length) return [];

  const result = [];
  let top = 0,
    bottom = matrix.length - 1;
  let left = 0,
    right = matrix[0].length - 1;

  while (top <= bottom && left <= right) {
    // Traverse top row from left to right
    for (let col = left; col <= right; col++) {
      result.push(matrix[top][col]);
    }
    top++;

    // Traverse right column from top to bottom
    for (let row = top; row <= bottom; row++) {
      result.push(matrix[row][right]);
    }
    right--;

    if (top <= bottom) {
      // Traverse bottom row from right to left
      for (let col = right; col >= left; col--) {
        result.push(matrix[bottom][col]);
      }
      bottom--;
    }

    if (left <= right) {
      // Traverse left column from bottom to top
      for (let row = bottom; row >= top; row--) {
        result.push(matrix[row][left]);
      }
      left++;
    }
  }

  return result;
}
```

---

## 🔴 Hard Questions

### 21. Trapping Rain Water

**Company**: _Amazon, Google_ 🏢

**Problem Statement**: Calculate how much water can be trapped after raining
given elevation heights.

**Concept**: Two pointers approach - water level is determined by minimum of max
heights on both sides.

```javascript
/**
 * @param {number[]} height
 * @return {number}
 *
 * Time: O(n), Space: O(1)
 */
function trap(height) {
  if (height.length < 3) return 0;

  let left = 0,
    right = height.length - 1;
  let leftMax = 0,
    rightMax = 0;
  let waterTrapped = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      // Process left side
      if (height[left] >= leftMax) {
        leftMax = height[left]; // Update left max
      } else {
        // Water can be trapped
        waterTrapped += leftMax - height[left];
      }
      left++;
    } else {
      // Process right side
      if (height[right] >= rightMax) {
        rightMax = height[right]; // Update right max
      } else {
        // Water can be trapped
        waterTrapped += rightMax - height[right];
      }
      right--;
    }
  }

  return waterTrapped;
}
```

### 22. First Missing Positive

**Company**: _Facebook, Amazon_ 🏢

**Problem Statement**: Find the smallest missing positive integer in unsorted
array.

**Concept**: Use array itself as hash table by placing each number at its
corresponding index.

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 *
 * Time: O(n), Space: O(1)
 */
function firstMissingPositive(nums) {
  const n = nums.length;

  // Step 1: Place each positive number at its correct position
  for (let i = 0; i < n; i++) {
    // Keep swapping until current position has correct number
    while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
      // Swap nums[i] to its correct position
      const correctIndex = nums[i] - 1;
      [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
    }
  }

  // Step 2: Find first position with incorrect number
  for (let i = 0; i < n; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }

  // All numbers 1 to n are present
  return n + 1;
}
```

### 23. Merge Intervals

**Company**: _Facebook, Google_ 🏢

**Problem Statement**: Merge all overlapping intervals.

**Concept**: Sort intervals by start time, then merge overlapping ones.

```javascript
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 *
 * Time: O(n log n), Space: O(1)
 */
function merge(intervals) {
  if (intervals.length <= 1) return intervals;

  // Sort intervals by start time
  intervals.sort((a, b) => a[0] - b[0]);

  const merged = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const current = intervals[i];
    const lastMerged = merged[merged.length - 1];

    // Check if current interval overlaps with last merged
    if (current[0] <= lastMerged[1]) {
      // Merge intervals by extending end time
      lastMerged[1] = Math.max(lastMerged[1], current[1]);
    } else {
      // No overlap, add current interval
      merged.push(current);
    }
  }

  return merged;
}
```

### 24. Largest Rectangle in Histogram

**Company**: _Amazon, Google_ 🏢

**Problem Statement**: Find the area of largest rectangle that can be formed in
histogram.

**Concept**: Use stack to keep track of increasing heights and calculate area
when decreasing height is found.

```javascript
/**
 * @param {number[]} heights
 * @return {number}
 *
 * Time: O(n), Space: O(n)
 */
function largestRectangleArea(heights) {
  const stack = []; // Stack to store indices
  let maxArea = 0;

  for (let i = 0; i <= heights.length; i++) {
    // Use 0 for last iteration to pop all remaining elements
    const currentHeight = i === heights.length ? 0 : heights[i];

    // Pop from stack while current height is smaller
    while (
      stack.length > 0 &&
      currentHeight < heights[stack[stack.length - 1]]
    ) {
      const height = heights[stack.pop()]; // Height of rectangle
      const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
      maxArea = Math.max(maxArea, height * width);
    }

    stack.push(i);
  }

  return maxArea;
}
```

### 25. Jump Game II

**Company**: _Google, Amazon_ 🏢

**Problem Statement**: Find minimum number of jumps to reach the last index.

**Concept**: Greedy approach - keep track of furthest reachable position and
jump when necessary.

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 *
 * Time: O(n), Space: O(1)
 */
function jump(nums) {
  if (nums.length <= 1) return 0;

  let jumps = 0;
  let currentEnd = 0; // End of current jump range
  let farthest = 0; // Farthest position reachable

  for (let i = 0; i < nums.length - 1; i++) {
    // Update farthest position we can reach
    farthest = Math.max(farthest, i + nums[i]);

    // If we've reached the end of current jump range
    if (i === currentEnd) {
      jumps++; // We need another jump
      currentEnd = farthest; // Update jump range end

      // Early termination if we can reach the end
      if (currentEnd >= nums.length - 1) break;
    }
  }

  return jumps;
}
```

### 26. Candy

**Company**: _Facebook, Google_ 🏢

**Problem Statement**: Distribute candies to children where each child gets at
least one candy and children with higher rating get more candies than neighbors.

**Concept**: Two passes - left to right for increasing ratings, right to left
for decreasing ratings.

```javascript
/**
 * @param {number[]} ratings
 * @return {number}
 *
 * Time: O(n), Space: O(n)
 */
function candy(ratings) {
  const n = ratings.length;
  const candies = new Array(n).fill(1); // Each child gets at least 1 candy

  // Left to right pass: handle increasing ratings
  for (let i = 1; i < n; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candies[i] = candies[i - 1] + 1;
    }
  }

  // Right to left pass: handle decreasing ratings
  for (let i = n - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      candies[i] = Math.max(candies[i], candies[i + 1] + 1);
    }
  }

  // Return total candies needed
  return candies.reduce((sum, candy) => sum + candy, 0);
}
```

### 27. Maximum Gap

**Company**: _Google, Amazon_ 🏢

**Problem Statement**: Find maximum difference between successive elements in
sorted form.

**Concept**: Bucket sort approach - divide range into buckets and find gaps
between buckets.

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 *
 * Time: O(n), Space: O(n)
 */
function maximumGap(nums) {
  if (nums.length < 2) return 0;

  const n = nums.length;
  const minNum = Math.min(...nums);
  const maxNum = Math.max(...nums);

  if (minNum === maxNum) return 0;

  // Calculate bucket size and count
  const bucketSize = Math.ceil((maxNum - minNum) / (n - 1));
  const bucketCount = Math.floor((maxNum - minNum) / bucketSize) + 1;

  // Initialize buckets
  const buckets = Array(bucketCount)
    .fill(null)
    .map(() => ({
      min: Infinity,
      max: -Infinity,
      hasNum: false,
    }));

  // Place numbers in buckets
  for (let num of nums) {
    const bucketIndex = Math.floor((num - minNum) / bucketSize);
    buckets[bucketIndex].min = Math.min(buckets[bucketIndex].min, num);
    buckets[bucketIndex].max = Math.max(buckets[bucketIndex].max, num);
    buckets[bucketIndex].hasNum = true;
  }

  // Find maximum gap between buckets
  let maxGap = 0;
  let prevMax = minNum;

  for (let bucket of buckets) {
    if (bucket.hasNum) {
      maxGap = Math.max(maxGap, bucket.min - prevMax);
      prevMax = bucket.max;
    }
  }

  return maxGap;
}
```

### 28. Sliding Window Maximum

**Company**: _Amazon, Google_ 🏢

**Problem Statement**: Find maximum element in each sliding window of size k.

**Concept**: Use deque to maintain potential maximums in decreasing order.

```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 *
 * Time: O(n), Space: O(k)
 */
function maxSlidingWindow(nums, k) {
  const result = [];
  const deque = []; // Store indices in decreasing order of values

  for (let i = 0; i < nums.length; i++) {
    // Remove indices outside current window
    while (deque.length > 0 && deque[0] <= i - k) {
      deque.shift();
    }

    // Remove smaller elements from back (they can't be maximum)
    while (deque.length > 0 && nums[deque[deque.length - 1]] <= nums[i]) {
      deque.pop();
    }

    deque.push(i); // Add current index

    // Add maximum to result if window is complete
    if (i >= k - 1) {
      result.push(nums[deque[0]]);
    }
  }

  return result;
}
```

### 29. Median of Two Sorted Arrays

**Company**: _Google, Facebook_ 🏢

**Problem Statement**: Find median of two sorted arrays in O(log(m+n)) time.

**Concept**: Binary search to partition arrays such that left half has equal
elements as right half.

```javascript
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 *
 * Time: O(log(min(m,n))), Space: O(1)
 */
function findMedianSortedArrays(nums1, nums2) {
  // Ensure nums1 is the smaller array
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }

  const m = nums1.length;
  const n = nums2.length;
  let low = 0,
    high = m;

  while (low <= high) {
    // Partition positions
    const partitionX = Math.floor((low + high) / 2);
    const partitionY = Math.floor((m + n + 1) / 2) - partitionX;

    // Elements around partitions
    const maxLeftX = partitionX === 0 ? -Infinity : nums1[partitionX - 1];
    const minRightX = partitionX === m ? Infinity : nums1[partitionX];

    const maxLeftY = partitionY === 0 ? -Infinity : nums2[partitionY - 1];
    const minRightY = partitionY === n ? Infinity : nums2[partitionY];

    // Check if partition is correct
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
      // Move left in nums1
      high = partitionX - 1;
    } else {
      // Move right in nums1
      low = partitionX + 1;
    }
  }

  throw new Error('Input arrays are not sorted');
}
```

### 30. Minimum Window Substring

**Company**: _Facebook, Amazon_ 🏢

**Problem Statement**: Find minimum window substring in s that contains all
characters of t.

**Concept**: Sliding window with two pointers and character frequency tracking.

```javascript
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 *
 * Time: O(|s| + |t|), Space: O(|s| + |t|)
 */
function minWindow(s, t) {
  if (s.length < t.length) return '';

  // Count characters in t
  const targetCount = new Map();
  for (let char of t) {
    targetCount.set(char, (targetCount.get(char) || 0) + 1);
  }

  let left = 0,
    right = 0;
  let formed = 0; // Number of unique characters in current window with desired frequency
  const required = targetCount.size;

  const windowCounts = new Map();
  let minLen = Infinity;
  let minLeft = 0;

  while (right < s.length) {
    // Expand window by including character at right
    const char = s[right];
    windowCounts.set(char, (windowCounts.get(char) || 0) + 1);

    // Check if current character contributes to desired count
    if (
      targetCount.has(char) &&
      windowCounts.get(char) === targetCount.get(char)
    ) {
      formed++;
    }

    // Try to shrink window from left
    while (left <= right && formed === required) {
      // Update minimum window if current is smaller
      if (right - left + 1 < minLen) {
        minLen = right - left + 1;
        minLeft = left;
      }

      // Remove character at left from window
      const leftChar = s[left];
      windowCounts.set(leftChar, windowCounts.get(leftChar) - 1);

      if (
        targetCount.has(leftChar) &&
        windowCounts.get(leftChar) < targetCount.get(leftChar)
      ) {
        formed--;
      }

      left++;
    }

    right++;
  }

  return minLen === Infinity ? '' : s.substring(minLeft, minLeft + minLen);
}
```

---

## ⚫ Expert Questions

### 31. Count of Smaller Numbers After Self

**Company**: _Google, Amazon_ 🏢

**Problem Statement**: Count how many numbers after each element are smaller
than it.

**Concept**: Modified merge sort with index tracking to count inversions.

```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 *
 * Time: O(n log n), Space: O(n)
 */
function countSmaller(nums) {
  const result = new Array(nums.length).fill(0);
  const indices = nums.map((_, i) => i); // Track original indices

  function mergeSort(start, end) {
    if (start >= end) return;

    const mid = Math.floor((start + end) / 2);
    mergeSort(start, mid);
    mergeSort(mid + 1, end);
    merge(start, mid, end);
  }

  function merge(start, mid, end) {
    const temp = [];
    let i = start,
      j = mid + 1,
      k = 0;

    while (i <= mid && j <= end) {
      if (nums[indices[i]] <= nums[indices[j]]) {
        // Count how many elements from right half are smaller
        result[indices[i]] += j - (mid + 1);
        temp[k++] = indices[i++];
      } else {
        temp[k++] = indices[j++];
      }
    }

    // Add remaining elements from left half
    while (i <= mid) {
      result[indices[i]] += j - (mid + 1);
      temp[k++] = indices[i++];
    }

    // Add remaining elements from right half
    while (j <= end) {
      temp[k++] = indices[j++];
    }

    // Copy back to original array
    for (let i = start; i <= end; i++) {
      indices[i] = temp[i - start];
    }
  }

  mergeSort(0, nums.length - 1);
  return result;
}
```

### 32. Reverse Pairs

**Company**: _Google, Microsoft_ 🏢

**Problem Statement**: Count reverse pairs where i < j and nums[i] > 2 \*
nums[j].

**Concept**: Modified merge sort to count reverse pairs during merge process.

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 *
 * Time: O(n log n), Space: O(n)
 */
function reversePairs(nums) {
  let count = 0;

  function mergeSort(start, end) {
    if (start >= end) return;

    const mid = Math.floor((start + end) / 2);
    mergeSort(start, mid);
    mergeSort(mid + 1, end);

    // Count reverse pairs
    let i = start,
      j = mid + 1;
    while (i <= mid && j <= end) {
      if (nums[i] > 2 * nums[j]) {
        count += mid - i + 1; // All elements from i to mid form reverse pairs
        j++;
      } else {
        i++;
      }
    }

    merge(start, mid, end);
  }

  function merge(start, mid, end) {
    const temp = [];
    let i = start,
      j = mid + 1,
      k = 0;

    while (i <= mid && j <= end) {
      if (nums[i] <= nums[j]) {
        temp[k++] = nums[i++];
      } else {
        temp[k++] = nums[j++];
      }
    }

    while (i <= mid) temp[k++] = nums[i++];
    while (j <= end) temp[k++] = nums[j++];

    for (let i = start; i <= end; i++) {
      nums[i] = temp[i - start];
    }
  }

  mergeSort(0, nums.length - 1);
  return count;
}
```

### 33. Russian Doll Envelopes

**Company**: _Google, Facebook_ 🏢

**Problem Statement**: Find maximum number of envelopes that can be nested
inside each other.

**Concept**: Sort by width ascending and height descending, then find LIS on
heights.

```javascript
/**
 * @param {number[][]} envelopes
 * @return {number}
 *
 * Time: O(n log n), Space: O(n)
 */
function maxEnvelopes(envelopes) {
  // Sort by width ascending, height descending
  envelopes.sort((a, b) => (a[0] === b[0] ? b[1] - a[1] : a[0] - b[0]));

  // Find LIS on heights using binary search
  const tails = []; // tails[i] = smallest tail of increasing subsequence of length i+1

  for (let [width, height] of envelopes) {
    // Binary search for position to place current height
    let left = 0,
      right = tails.length;

    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (tails[mid] < height) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    // If left == tails.length, append; otherwise replace
    if (left === tails.length) {
      tails.push(height);
    } else {
      tails[left] = height;
    }
  }

  return tails.length;
}
```

### 34. Maximum Rectangle

**Company**: _Amazon, Google_ 🏢

**Problem Statement**: Find largest rectangle containing only 1s in binary
matrix.

**Concept**: For each row, treat it as base of histogram and find largest
rectangle.

```javascript
/**
 * @param {character[][]} matrix
 * @return {number}
 *
 * Time: O(m*n), Space: O(n)
 */
function maximalRectangle(matrix) {
  if (!matrix.length || !matrix[0].length) return 0;

  const rows = matrix.length;
  const cols = matrix[0].length;
  const heights = new Array(cols).fill(0);
  let maxArea = 0;

  for (let row = 0; row < rows; row++) {
    // Update heights array for current row
    for (let col = 0; col < cols; col++) {
      heights[col] = matrix[row][col] === '1' ? heights[col] + 1 : 0;
    }

    // Find largest rectangle in histogram
    maxArea = Math.max(maxArea, largestRectangleInHistogram(heights));
  }

  return maxArea;

  function largestRectangleInHistogram(heights) {
    const stack = [];
    let maxArea = 0;

    for (let i = 0; i <= heights.length; i++) {
      const currentHeight = i === heights.length ? 0 : heights[i];

      while (
        stack.length > 0 &&
        currentHeight < heights[stack[stack.length - 1]]
      ) {
        const height = heights[stack.pop()];
        const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
        maxArea = Math.max(maxArea, height * width);
      }

      stack.push(i);
    }

    return maxArea;
  }
}
```

### 35. Burst Balloons

**Company**: _Google, Facebook_ 🏢

**Problem Statement**: Burst balloons to get maximum coins where coins = left _
current _ right.

**Concept**: Dynamic programming with interval DP - consider each balloon as
last to burst.

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 *
 * Time: O(n³), Space: O(n²)
 */
function maxCoins(nums) {
  // Add boundary balloons with value 1
  const balloons = [1, ...nums, 1];
  const n = balloons.length;

  // dp[i][j] = max coins from bursting balloons between i and j (exclusive)
  const dp = Array(n)
    .fill(null)
    .map(() => Array(n).fill(0));

  // Length of interval
  for (let length = 2; length < n; length++) {
    // Start position of interval
    for (let left = 0; left < n - length; left++) {
      const right = left + length;

      // Try each balloon as last to burst in interval (left, right)
      for (let k = left + 1; k < right; k++) {
        // Coins from bursting balloon k last
        const coins = balloons[left] * balloons[k] * balloons[right];

        // Total coins = coins from k + coins from left interval + coins from right interval
        dp[left][right] = Math.max(
          dp[left][right],
          coins + dp[left][k] + dp[k][right]
        );
      }
    }
  }

  return dp[0][n - 1];
}
```

### 36. Create Maximum Number

**Company**: _Google, Amazon_ 🏢

**Problem Statement**: Create maximum number of length k from two arrays while
preserving relative order.

**Concept**: Try all possible splits of k, create max subsequence from each
array, then merge optimally.

```javascript
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[]}
 *
 * Time: O(k*(m+n+k²)), Space: O(k)
 */
function maxNumber(nums1, nums2, k) {
  let result = [];

  // Try all possible ways to split k between two arrays
  for (
    let i = Math.max(0, k - nums2.length);
    i <= Math.min(k, nums1.length);
    i++
  ) {
    const candidate = merge(
      maxSubsequence(nums1, i),
      maxSubsequence(nums2, k - i)
    );

    if (isGreater(candidate, result)) {
      result = candidate;
    }
  }

  return result;

  // Get maximum subsequence of length k from array
  function maxSubsequence(nums, k) {
    const result = [];
    let toRemove = nums.length - k;

    for (let num of nums) {
      // Remove smaller elements if we can still remove more
      while (
        result.length > 0 &&
        result[result.length - 1] < num &&
        toRemove > 0
      ) {
        result.pop();
        toRemove--;
      }
      result.push(num);
    }

    return result.slice(0, k);
  }

  // Merge two arrays to get maximum possible number
  function merge(nums1, nums2) {
    const result = [];
    let i = 0,
      j = 0;

    while (i < nums1.length || j < nums2.length) {
      if (isArrayGreater(nums1, i, nums2, j)) {
        result.push(nums1[i++]);
      } else {
        result.push(nums2[j++]);
      }
    }

    return result;
  }

  // Check if nums1[i:] > nums2[j:]
  function isArrayGreater(nums1, i, nums2, j) {
    while (i < nums1.length && j < nums2.length && nums1[i] === nums2[j]) {
      i++;
      j++;
    }
    return j === nums2.length || (i < nums1.length && nums1[i] > nums2[j]);
  }

  // Check if arr1 > arr2 lexicographically
  function isGreater(arr1, arr2) {
    for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
      const a = i < arr1.length ? arr1[i] : -1;
      const b = i < arr2.length ? arr2[i] : -1;
      if (a > b) return true;
      if (a < b) return false;
    }
    return false;
  }
}
```

### 37. Shortest Subarray with Sum at Least K

**Company**: _Google, Facebook_ 🏢

**Problem Statement**: Find length of shortest subarray with sum at least K.

**Concept**: Monotonic deque with prefix sums to find shortest valid subarray.

```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 *
 * Time: O(n), Space: O(n)
 */
function shortestSubarray(nums, k) {
  const n = nums.length;
  const prefixSum = new Array(n + 1);
  prefixSum[0] = 0;

  // Calculate prefix sums
  for (let i = 0; i < n; i++) {
    prefixSum[i + 1] = prefixSum[i] + nums[i];
  }

  const deque = []; // Store indices in increasing order of prefix sums
  let minLength = Infinity;

  for (let i = 0; i <= n; i++) {
    // Remove indices where current prefix sum - their prefix sum >= k
    while (deque.length > 0 && prefixSum[i] - prefixSum[deque[0]] >= k) {
      minLength = Math.min(minLength, i - deque.shift());
    }

    // Remove indices with greater or equal prefix sums (they're not useful)
    while (
      deque.length > 0 &&
      prefixSum[i] <= prefixSum[deque[deque.length - 1]]
    ) {
      deque.pop();
    }

    deque.push(i);
  }

  return minLength === Infinity ? -1 : minLength;
}
```

### 38. Number of Subarrays with Bounded Maximum

**Company**: _Google, Amazon_ 🏢

**Problem Statement**: Count number of subarrays where maximum element is
between L and R.

**Concept**: Count valid subarrays by tracking positions of elements > R and <
L.

```javascript
/**
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 * @return {number}
 *
 * Time: O(n), Space: O(1)
 */
function numSubarrayBoundedMax(nums, left, right) {
  let count = 0;
  let validSubarrays = 0; // Number of valid subarrays ending at current position
  let lastInvalidIndex = -1; // Last index where nums[i] > right

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > right) {
      // Reset count as this element breaks all previous subarrays
      validSubarrays = 0;
      lastInvalidIndex = i;
    } else if (nums[i] >= left) {
      // This element can be maximum of valid subarrays
      validSubarrays = i - lastInvalidIndex;
    }
    // If nums[i] < left, validSubarrays remains same

    count += validSubarrays;
  }

  return count;
}
```

### 39. Split Array Largest Sum

**Company**: _Google, Facebook_ 🏢

**Problem Statement**: Split array into m non-empty continuous subarrays to
minimize the largest sum.

**Concept**: Binary search on answer - check if we can split array with max sum
≤ target.

```javascript
/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 *
 * Time: O(n * log(sum)), Space: O(1)
 */
function splitArray(nums, m) {
  let left = Math.max(...nums); // Minimum possible largest sum
  let right = nums.reduce((sum, num) => sum + num, 0); // Maximum possible largest sum

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (canSplit(nums, m, mid)) {
      right = mid; // Try smaller maximum sum
    } else {
      left = mid + 1; // Need larger maximum sum
    }
  }

  return left;

  // Check if we can split array into m subarrays with max sum ≤ maxSum
  function canSplit(nums, m, maxSum) {
    let subarrays = 1;
    let currentSum = 0;

    for (let num of nums) {
      if (currentSum + num <= maxSum) {
        currentSum += num;
      } else {
        subarrays++;
        currentSum = num;

        if (subarrays > m) return false;
      }
    }

    return true;
  }
}
```

### 40. Count of Range Sum

**Company**: _Google, Microsoft_ 🏢

**Problem Statement**: Count number of range sums that lie in [lower, upper].

**Concept**: Modified merge sort with prefix sums to count valid ranges.

```javascript
/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 *
 * Time: O(n log n), Space: O(n)
 */
function countRangeSum(nums, lower, upper) {
  const prefixSums = [0];

  // Calculate prefix sums
  for (let num of nums) {
    prefixSums.push(prefixSums[prefixSums.length - 1] + num);
  }

  return mergeSort(0, prefixSums.length - 1);

  function mergeSort(start, end) {
    if (start >= end) return 0;

    const mid = Math.floor((start + end) / 2);
    let count = mergeSort(start, mid) + mergeSort(mid + 1, end);

    // Count valid ranges across the split
    let j = mid + 1,
      k = mid + 1;
    for (let i = start; i <= mid; i++) {
      // Find range [j, k) where prefixSums[m] - prefixSums[i] ∈ [lower, upper]
      while (j <= end && prefixSums[j] - prefixSums[i] < lower) j++;
      while (k <= end && prefixSums[k] - prefixSums[i] <= upper) k++;
      count += k - j;
    }

    // Merge the two sorted halves
    const temp = [];
    let i = start,
      l = mid + 1,
      idx = 0;

    while (i <= mid && l <= end) {
      if (prefixSums[i] <= prefixSums[l]) {
        temp[idx++] = prefixSums[i++];
      } else {
        temp[idx++] = prefixSums[l++];
      }
    }

    while (i <= mid) temp[idx++] = prefixSums[i++];
    while (l <= end) temp[idx++] = prefixSums[l++];

    for (let i = start; i <= end; i++) {
      prefixSums[i] = temp[i - start];
    }

    return count;
  }
}
```

---

## 🎯 Summary

This comprehensive guide covers **40 essential DSA array questions** commonly
asked in technical interviews at
