# **JavaScript Arrays (1D & 2D) Complete Guide 📚**

## Definition 🎯

**Arrays in JavaScript** are ordered collections of elements that can store
multiple values in a single variable. They come in two main forms:

- **1D Arrays (One-Dimensional)**: A simple list of elements stored in a linear
  sequence
- **2D Arrays (Two-Dimensional)**: An array of arrays, creating a matrix-like
  structure with rows and columns

Arrays are dynamic in JavaScript, meaning they can grow or shrink in size and
can hold elements of different data types.

---

## Key Characteristics 🔑

### Time Complexity ⏰

| Operation           | 1D Array | 2D Array |
| ------------------- | -------- | -------- |
| Access by index     | O(1)     | O(1)     |
| Search              | O(n)     | O(n×m)   |
| Insert at end       | O(1)     | O(1)     |
| Insert at beginning | O(n)     | O(n×m)   |
| Delete              | O(n)     | O(n×m)   |

### Space Complexity 💾

- **1D Array**: O(n) where n is the number of elements
- **2D Array**: O(n×m) where n is rows and m is columns

### Key Properties ✨

- **Zero-indexed**: First element is at index 0
- **Dynamic size**: Can grow and shrink during runtime
- **Heterogeneous**: Can store different data types
- **Reference type**: Arrays are objects in JavaScript

---

## Syntax/Implementation 💻

### 1D Array Creation

```javascript
// Method 1: Array literal (most common)
let fruits = ['apple', 'banana', 'orange'];

// Method 2: Array constructor
let numbers = new Array(1, 2, 3, 4, 5);

// Method 3: Empty array with fixed size
let emptyArray = new Array(5); // Creates array with 5 empty slots
```

### 2D Array Creation

```javascript
// Method 1: Manual creation
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// Method 2: Dynamic creation using loops
function create2DArray(rows, cols, defaultValue = 0) {
  let array = [];
  for (let i = 0; i < rows; i++) {
    array[i] = [];
    for (let j = 0; j < cols; j++) {
      array[i][j] = defaultValue;
    }
  }
  return array;
}
```

---

## Visualization 📊

### 1D Array Structure

```bash
Index:  0    1    2    3    4
Value: [🍎] [🍌] [🍊] [🍇] [🥝]
       ↑
   fruits[0] = '🍎'
```

### 2D Array Structure (3×3 Matrix)

```bash
     Col: 0   1   2
Row 0: [1] [2] [3]
Row 1: [4] [5] [6]
Row 2: [7] [8] [9]
       ↑
   matrix[1][2] = 6
```

### Memory Layout

```bash
1D Array: [element0][element1][element2][element3]...
                ↑        ↑        ↑        ↑
              index0   index1   index2   index3

2D Array: [row0_pointer][row1_pointer][row2_pointer]...
             ↓             ↓             ↓
           [col0][col1]  [col0][col1]  [col0][col1]...
```

---

## Example 🌍

### Real-World Analogies

**1D Array** 📋 Think of a **shopping list** - it's a single column of items:

1. Milk
2. Bread
3. Eggs
4. Butter

**2D Array** 🏢 Think of an **office building** with floors and rooms:

- Floor 1: Room 101, Room 102, Room 103
- Floor 2: Room 201, Room 202, Room 203
- Floor 3: Room 301, Room 302, Room 303

To find someone, you need both the floor number (row) and room number (column).

### Practical Use Cases

- **1D Arrays**: Shopping lists, student grades, user IDs, menu items
- **2D Arrays**: Game boards (chess, tic-tac-toe), spreadsheet data, image
  pixels, seating charts

---

## Code Example 🧑‍💻

### 1D Array Example: Student Grades

```javascript
// Create and manage student grades
let studentGrades = [85, 92, 78, 96, 88];

// Access elements
console.log(`First student grade: ${studentGrades[0]}`); // Output: 85

// Add new grade
studentGrades.push(91);
console.log(`Total students: ${studentGrades.length}`); // Output: 6

// Calculate average
let sum = studentGrades.reduce((total, grade) => total + grade, 0);
let average = sum / studentGrades.length;
console.log(`Class average: ${average.toFixed(2)}`); // Output: 88.33

// Find highest grade
let highest = Math.max(...studentGrades);
console.log(`Highest grade: ${highest}`); // Output: 96
```

### 2D Array Example: Tic-Tac-Toe Game Board

```javascript
// Create 3x3 game board
let gameBoard = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' '],
];

// Function to display board
function displayBoard(board) {
  console.log('Current Game Board:');
  for (let row = 0; row < board.length; row++) {
    console.log(`${board[row][0]} | ${board[row][1]} | ${board[row][2]}`);
    if (row < board.length - 1) console.log('---------');
  }
}

// Function to make a move
function makeMove(board, row, col, player) {
  if (board[row][col] === ' ') {
    board[row][col] = player;
    return true;
  }
  return false; // Position already taken
}

// Function to check winner
function checkWinner(board) {
  // Check rows
  for (let row = 0; row < 3; row++) {
    if (
      board[row][0] === board[row][1] &&
      board[row][1] === board[row][2] &&
      board[row][0] !== ' '
    ) {
      return board[row][0];
    }
  }

  // Check columns
  for (let col = 0; col < 3; col++) {
    if (
      board[0][col] === board[1][col] &&
      board[1][col] === board[2][col] &&
      board[0][col] !== ' '
    ) {
      return board[0][col];
    }
  }

  // Check diagonals
  if (
    board[0][0] === board[1][1] &&
    board[1][1] === board[2][2] &&
    board[0][0] !== ' '
  ) {
    return board[0][0];
  }

  if (
    board[0][2] === board[1][1] &&
    board[1][1] === board[2][0] &&
    board[0][2] !== ' '
  ) {
    return board[0][2];
  }

  return null; // No winner yet
}

// Example game play
makeMove(gameBoard, 0, 0, 'X'); // X plays top-left
makeMove(gameBoard, 1, 1, 'O'); // O plays center
makeMove(gameBoard, 0, 1, 'X'); // X plays top-middle
displayBoard(gameBoard);

// Output:
// Current Game Board:
// X | X |
// ---------
//   | O |
// ---------
//   |   |
```

---

## Common Pitfalls ⚠️

### 1. Array Index Out of Bounds 🚫

```javascript
let fruits = ['apple', 'banana'];

// Wrong - will return undefined
console.log(fruits[5]); // undefined

// Right - check array length first
if (fruits.length > 5) {
  console.log(fruits[5]);
} else {
  console.log('Index out of bounds');
}
```

### 2. Shallow vs Deep Copy Issues 🔄

```javascript
let original = [
  [1, 2],
  [3, 4],
];

// Wrong - shallow copy (both arrays share inner arrays)
let shallowCopy = [...original];
shallowCopy[0][0] = 999;
console.log(original[0][0]); // 999 (original is affected!)

// Right - deep copy
let deepCopy = JSON.parse(JSON.stringify(original));
// Or use structured cloning: structuredClone(original)
```

### 3. Incorrect 2D Array Initialization 🏗️

```javascript
// Wrong - all rows reference the same array
let wrong2D = new Array(3).fill(new Array(3).fill(0));
wrong2D[0][0] = 1;
console.log(wrong2D); // [[1,0,0], [1,0,0], [1,0,0]] - all rows affected!

// Right - create separate arrays for each row
let correct2D = Array.from({ length: 3 }, () => new Array(3).fill(0));
correct2D[0][0] = 1;
console.log(correct2D); // [[1,0,0], [0,0,0], [0,0,0]] - only first row affected
```

### 4. Confusing Array Methods 🔀

```javascript
let numbers = [1, 2, 3, 4, 5];

// push() vs concat() - different behaviors
numbers.push(6); // Modifies original array: [1,2,3,4,5,6]
let newArray = numbers.concat(7); // Creates new array: [1,2,3,4,5,6,7]

// slice() vs splice() - easy to confuse
let sliced = numbers.slice(1, 3); // Returns [2,3], original unchanged
let spliced = numbers.splice(1, 2); // Removes and returns [2,3], original modified
```

### 5. Forgetting Array Mutability 🔧

```javascript
// Arrays are reference types
let arr1 = [1, 2, 3];
let arr2 = arr1; // arr2 points to same array as arr1

arr2.push(4);
console.log(arr1); // [1, 2, 3, 4] - arr1 is also modified!

// To avoid this, create a copy
let arr3 = [...arr1]; // or arr1.slice()
arr3.push(5);
console.log(arr1); // [1, 2, 3, 4] - arr1 unchanged
```

### Quick Tips 💡

- Always check array bounds before accessing elements
- Use `Array.isArray()` to verify if a variable is an array
- Remember that arrays are objects in JavaScript
- Be careful with array methods that modify the original vs create new arrays
- When working with 2D arrays, ensure proper initialization to avoid reference
  issues
