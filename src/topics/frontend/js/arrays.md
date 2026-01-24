# Arrays in JavaScript 🗂️

## What is an Array? 🤔

An array is a special variable that can hold multiple values under a single
name. It's an ordered collection of elements where each element has a numeric
index (starting from 0) that identifies its position in the array.

Arrays in JavaScript can contain elements of different data types (numbers,
strings, objects, even other arrays) in the same array.

## Why Use Arrays? 💡

1. **Organization** 🗃️: Store multiple related values in one variable
2. **Efficiency** ⚡: Access and manipulate collections of data easily
3. **Flexibility** 🔄: Can mix data types (unlike many other languages)
4. **Built-in Methods** 🛠️: JavaScript provides many useful array methods
5. **Order Preservation** 📋: Maintains the order of elements

## When to Use Arrays? 📅

- When you need to store a list/collection of items 📝
- When you need to maintain ordered data 🔢
- When you need to perform operations on multiple values 🛠️
- When you need to pass multiple values to a function 📦
- When you need to implement stacks, queues, or other data structures 🏗️

## JavaScript Array Methods 🧰

Here's a comprehensive table of JavaScript array methods:

| Method            | Description                                                | Example Usage                      | Output                          |
| ----------------- | ---------------------------------------------------------- | ---------------------------------- | ------------------------------- |
| `push()`          | Adds one or more elements to the end of an array ➕        | `arr.push(6)`                      | Returns new length (6)          |
| `pop()`           | Removes the last element from an array ➖                  | `arr.pop()`                        | Returns removed element (5)     |
| `unshift()`       | Adds one or more elements to the beginning ⬅️              | `arr.unshift(0)`                   | Returns new length (6)          |
| `shift()`         | Removes the first element ➡️                               | `arr.shift()`                      | Returns removed element (1)     |
| `concat()`        | Merges two or more arrays 🔗                               | `arr.concat([6,7])`                | New array `[1,2,3,4,5,6,7]`     |
| `join()`          | Joins all elements into a string 🧵                        | `arr.join('-')`                    | "1-2-3-4-5"                     |
| `slice()`         | Returns a shallow copy of a portion ✂️                     | `arr.slice(1,3)`                   | `[2,3]`                         |
| `splice()`        | Adds/removes elements at specific index 🛠️                 | `arr.splice(2,1,9)`                | `[3]` (original array modified) |
| `indexOf()`       | Returns first index of element 🔍                          | `arr.indexOf(3)`                   | 2                               |
| `lastIndexOf()`   | Returns last index of element 🔎                           | `arr.lastIndexOf(3)`               | 2                               |
| `includes()`      | Checks if array contains value ✅                          | `arr.includes(3)`                  | true                            |
| `find()`          | Returns first element that satisfies condition 🕵️          | `arr.find(x => x > 3)`             | 4                               |
| `findIndex()`     | Returns index of first element that satisfies condition 📍 | `arr.findIndex(x => x > 3)`        | 3                               |
| `filter()`        | Creates new array with elements that pass test 🚿          | `arr.filter(x => x > 2)`           | `[3,4,5]`                       |
| `map()`           | Creates new array with results of calling function 🗺️      | `arr.map(x => x*2)`                | `[2,4,6,8,10]`                  |
| `reduce()`        | Reduces array to single value 🧮                           | `arr.reduce((a,b) => a+b)`         | 15                              |
| `reduceRight()`   | Reduces from right to left ↩️                              | `arr.reduceRight((a,b) => a-b)`    | -5                              |
| `every()`         | Checks if all elements pass test ✔️                        | `arr.every(x => x < 10)`           | true                            |
| `some()`          | Checks if any element passes test ❓                       | `arr.some(x => x > 4)`             | true                            |
| `forEach()`       | Executes function for each element 🔁                      | `arr.forEach(x => console.log(x))` | Logs each element               |
| `sort()`          | Sorts elements (modifies original) 🔢                      | `[3,1,2].sort()`                   | `[1,2,3]`                       |
| `reverse()`       | Reverses order of elements 🔄                              | `arr.reverse()`                    | `[5,4,3,2,1]`                   |
| `toString()`      | Converts array to string 📝                                | `arr.toString()`                   | "1,2,3,4,5"                     |
| `flat()`          | Flattens nested arrays 🏞️                                  | `[1,[2,3]].flat()`                 | `[1,2,3]`                       |
| `flatMap()`       | Maps then flattens result 🗺️➡️                             | `[1,2].flatMap(x => [x,x*2])`      | `[1,2,2,4]`                     |
| `Array.isArray()` | Checks if value is an array 🧐                             | `Array.isArray(arr)`               | true                            |
| `fill()`          | Fills elements with static value 🧱                        | `arr.fill(0)`                      | `[0,0,0,0,0]`                   |
| `copyWithin()`    | Copies part of array to another location 📋                | `[1,2,3,4].copyWithin(0,2)`        | `[3,4,3,4]`                     |
| `entries()`       | Returns iterator with key/value pairs 🗝️                   | `[...arr.entries()]`               | `[[0,1],[1,2],...]`             |
| `keys()`          | Returns iterator with array keys 🗝️                        | `[...arr.keys()]`                  | `[0,1,2,3,4]`                   |
| `values()`        | Returns iterator with array values 💎                      | `[...arr.values()]`                | `[1,2,3,4,5]`                   |

## Sample Array with Different Data Types 🧪

Let's declare a sample array with mixed data types and perform operations on it:

```javascript
// Sample array with different data types
let sampleArray = [
  42,
  'hello',
  true,
  { name: 'John', age: 30 },
  [1, 2, 3],
  null,
  undefined,
];

// 1. push() - Add element at end
sampleArray.push('new item');
console.log('After push:', sampleArray);
// After push: [ 42, 'hello', true, { name: 'John', age: 30 }, [ 1, 2, 3 ], null, undefined, 'new item' ]

// 2. pop() - Remove last element
let popped = sampleArray.pop();
console.log('Popped element:', popped);
// Popped element: new item
console.log('After pop:', sampleArray);
// After pop: [ 42, 'hello', true, { name: 'John', age: 30 }, [ 1, 2, 3 ], null, undefined ]

// 3. unshift() - Add element at beginning
sampleArray.unshift('first item');
console.log('After unshift:', sampleArray);
// After unshift: [ 'first item', 42, 'hello', true, { name: 'John', age: 30 }, [ 1, 2, 3 ], null, undefined ]

// 4. shift() - Remove first element
let shifted = sampleArray.shift();
console.log('Shifted element:', shifted);
// Shifted element: first item
console.log('After shift:', sampleArray);
// After shift: [ 42, 'hello', true, { name: 'John', age: 30 }, [ 1, 2, 3 ], null, undefined ]

// 5. concat() - Merge arrays
let newArray = sampleArray.concat(['a', 'b', 'c']);
console.log('After concat:', newArray);
// After concat: [ 42, 'hello', true, { name: 'John', age: 30 }, [ 1, 2, 3 ], null, undefined, 'a', 'b', 'c' ]

// 6. join() - Create string from array
let joined = sampleArray.join(' | ');
console.log('Joined array:', joined);
// Joined array: 42 | hello | true | [object Object] | 1,2,3 |  |

// 7. slice() - Get portion of array
let sliced = sampleArray.slice(2, 5);
console.log('Sliced portion:', sliced);
// Sliced portion: [ true, { name: 'John', age: 30 }, [ 1, 2, 3 ] ]

// 8. splice() - Modify array (insert/remove)
let removed = sampleArray.splice(3, 1, 'replaced item');
console.log('Removed elements:', removed);
// Removed elements: [ { name: 'John', age: 30 } ]
console.log('After splice:', sampleArray);
// After splice: [ 42, 'hello', true, 'replaced item', [ 1, 2, 3 ], null, undefined ]

// 9. indexOf() - Find element index
let index = sampleArray.indexOf('hello');
console.log("Index of 'hello':", index);
// Index of 'hello': 1

// 10. includes() - Check if element exists
let hasHello = sampleArray.includes('hello');
console.log("Includes 'hello':", hasHello);
// Includes 'hello': true

// 11. find() - Find first matching element
let found = sampleArray.find(
  (element) => typeof element === 'object' && element !== null
);
console.log('Found object:', found);
// Found object: [ 1, 2, 3 ]

// 12. filter() - Filter elements
let filtered = sampleArray.filter((element) => typeof element !== 'boolean');
console.log('Filtered array (no booleans):', filtered);
// Filtered array (no booleans): [ 42, 'hello', 'replaced item', [ 1, 2, 3 ], null, undefined ]

// 13. map() - Transform elements
let mapped = sampleArray.map((element) => {
  if (typeof element === 'number') return element * 2;
  if (typeof element === 'string') return element.toUpperCase();
  return element;
});
console.log('Mapped array:', mapped);
// Mapped array: [ 84, 'HELLO', true, 'REPLACED ITEM', [ 1, 2, 3 ], null, undefined ]

// 14. reduce() - Reduce to single value
let numbersOnly = sampleArray.filter((e) => typeof e === 'number');
let sum = numbersOnly.reduce((acc, val) => acc + val, 0);
console.log('Sum of numbers:', sum);
// Sum of numbers: 42

// 15. forEach() - Execute function for each element
console.log('Array elements:');
// Array elements:
sampleArray.forEach((item, index) => console.log(`${index}: ${item}`));
// 0: 42
// 1: hello
// 2: true
// 3: replaced item
// 4: 1,2,3
// 5: null
// 6: undefined

// 16. sort() - Sort array
let sortable = ['banana', 'apple', 'cherry'];
sortable.sort();
console.log('Sorted array:', sortable);
// Sorted array: [ 'apple', 'banana', 'cherry' ]

// 17. reverse() - Reverse array
sortable.reverse();
console.log('Reversed array:', sortable);
// Reversed array: [ 'cherry', 'banana', 'apple' ]

// 18. flat() - Flatten nested arrays
let nested = [1, [2, [3, [4]]]];
let flattened = nested.flat(2);
console.log('Flattened array:', flattened);
// Flattened array: [ 1, 2, 3, [ 4 ] ]

// 19. every() - Test all elements
let allValid = sampleArray.every((e) => e !== undefined);
console.log('All elements defined:', allValid);
// All elements defined: false

// 20. some() - Test any elements
let hasString = sampleArray.some((e) => typeof e === 'string');
console.log('Has string:', hasString);
// Has string: true

// 21. entries() - Get key/value pairs
for (let [index, value] of sampleArray.entries()) {
  console.log(`Entry ${index}:`, value);
}
// Entry 0: 42
// Entry 1: hello
// Entry 2: true
// Entry 3: replaced item
// Entry 4: [ 1, 2, 3 ]
// Entry 5: null
// Entry 6: undefined

// 22. fill() - Fill with static value
let fillExample = new Array(5).fill('default');
console.log('Filled array:', fillExample);
// Filled array: [ 'default', 'default', 'default', 'default', 'default' ]

// 23. Array.isArray() - Check if array
console.log('Is sampleArray an array?', Array.isArray(sampleArray));
// Is sampleArray an array? true

// 24. toString() - Convert to string
console.log('Array as string:', sampleArray.toString());
// Array as string: 42,hello,true,replaced item,1,2,3,,

// 25. flatMap() - Map then flatten
let flatMapped = [1, 2, 3].flatMap((x) => [x, x * 2]);
console.log('FlatMapped:', flatMapped);
// FlatMapped: [ 1, 2, 2, 4, 3, 6 ]
```

This demonstrates how to work with arrays containing different data types and
how to apply various array methods to manipulate and query the array. 🚀
