# 🟨 JavaScript Variables & Scoping

## 📝 Variable Declarations: `var`, `let`, `const`

| Feature                | `var`                             | `let`                        | `const`                      |
| ---------------------- | --------------------------------- | ---------------------------- | ---------------------------- |
| **Scope**              | 🌍 Function or Global             | 🧱 Block                     | 🧱 Block                     |
| **Hoisting**           | ✅ (initialized with `undefined`) | ✅ (but in 🕳️ TDZ)           | ✅ (but in 🕳️ TDZ)           |
| **Re-declaration**     | 🔁 Allowed                        | 🚫 Not allowed in same scope | 🚫 Not allowed in same scope |
| **Re-assignment**      | 🔁 Allowed                        | 🔁 Allowed                   | 🚫 Not allowed               |
| **Temporal Dead Zone** | ❌ No                             | ✅ Yes                       | ✅ Yes                       |
| **Introduced**         | ES5                               | ES6 (2015)                   | ES6 (2015)                   |

### 💡 Examples

#### `var` Declaration

```javascript
function varExample() {
  console.log(x); // undefined (hoisted)
  var x = 5;
  var x = 10; // Re-declaration allowed
  console.log(x); // 10
}

// Function scoped
function varScope() {
  if (true) {
    var y = 20;
  }
  console.log(y); // 20 (accessible outside block)
}
```

#### `let` Declaration

```javascript
function letExample() {
  // console.log(x); // ReferenceError: Cannot access 'x' before initialization
  let x = 5;
  // let x = 10; // SyntaxError: Identifier 'x' has already been declared
  x = 15; // Re-assignment allowed
  console.log(x); // 15
}

// Block scoped
function letScope() {
  if (true) {
    let y = 20;
  }
  // console.log(y); // ReferenceError: y is not defined
}
```

#### `const` Declaration

```javascript
function constExample() {
  // console.log(x); // ReferenceError: Cannot access 'x' before initialization
  const x = 5;
  // const x = 10; // SyntaxError: Identifier 'x' has already been declared
  // x = 15; // TypeError: Assignment to constant variable
  console.log(x); // 5
}

// Objects and arrays are mutable
const obj = { name: 'John' };
obj.name = 'Jane'; // Allowed
obj.age = 25; // Allowed

const arr = [1, 2, 3];
arr.push(4); // Allowed
// arr = [5, 6, 7]; // TypeError: Assignment to constant variable
```

## 🚀 Hoisting & Temporal Dead Zone (TDZ)

| Concept                | Definition                                                                                   | Applies To                                          |
| ---------------------- | -------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| **Hoisting**           | ⬆️ JavaScript's behavior of moving declarations to the top of their scope during compilation | All declarations (`var`, `let`, `const`, functions) |
| **Temporal Dead Zone** | ⏳ Period between entering scope and declaration where variable cannot be accessed           | `let` and `const` only                              |

### 🏗️ Hoisting Examples

#### `var` Hoisting

```javascript
console.log(x); // undefined (not ReferenceError)
var x = 5;

// Above code is interpreted as:
var x; // hoisted and initialized with undefined
console.log(x); // undefined
x = 5;
```

#### `let`/`const` Hoisting with TDZ

```javascript
console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10;

console.log(z); // ReferenceError: Cannot access 'z' before initialization
const z = 20;

// The variables are hoisted but remain in TDZ until declaration
```

#### Function Hoisting

```javascript
// Function declarations are fully hoisted
console.log(myFunc()); // "Hello!"

function myFunc() {
  return 'Hello!';
}

// Function expressions are not fully hoisted
console.log(myFuncExpr); // undefined
console.log(myFuncExpr()); // TypeError: myFuncExpr is not a function

var myFuncExpr = function () {
  return 'Hi!';
};
```

## 🗂️ Scoping Types

| Scope Type         | Definition                                        | Created By                                  | Accessibility          |
| ------------------ | ------------------------------------------------- | ------------------------------------------- | ---------------------- |
| **Global Scope**   | 🌐 Variables accessible everywhere in the program | Variables declared outside functions/blocks | Entire program         |
| **Function Scope** | 🏛️ Variables accessible only within the function  | `var` declarations, function parameters     | Within function only   |
| **Block Scope**    | 🧱 Variables accessible only within the block     | `let`, `const` declarations                 | Within `{}` block only |

### 🔍 Scope Examples

#### Global Scope

```javascript
var globalVar = "I'm global";
let globalLet = "I'm also global";
const globalConst = 'Me too!';

function testGlobal() {
  console.log(globalVar); // Accessible
  console.log(globalLet); // Accessible
  console.log(globalConst); // Accessible
}

console.log(globalVar); // Accessible
console.log(globalLet); // Accessible
console.log(globalConst); // Accessible
```

#### Function Scope

```javascript
function functionScope() {
  var functionVar = 'Function scoped';
  let functionLet = 'Also function scoped';
  const functionConst = 'Me too!';

  function innerFunction() {
    console.log(functionVar); // Accessible
    console.log(functionLet); // Accessible
    console.log(functionConst); // Accessible
  }

  innerFunction();
}

functionScope();
// console.log(functionVar); // ReferenceError: functionVar is not defined
```

#### Block Scope

```javascript
if (true) {
  var blockVar = 'Not block scoped';
  let blockLet = 'Block scoped';
  const blockConst = 'Also block scoped';
}

console.log(blockVar); // "Not block scoped" (accessible)
// console.log(blockLet);    // ReferenceError: blockLet is not defined
// console.log(blockConst);  // ReferenceError: blockConst is not defined

// Other examples of block scope
for (let i = 0; i < 3; i++) {
  // i is block scoped to this for loop
}
// console.log(i); // ReferenceError: i is not defined

{
  let blockScoped = 'Only in this block';
  const alsoBlockScoped = 'Me too!';
}
// console.log(blockScoped); // ReferenceError
```

## 🌟 Best Practices

| Practice                               | Reason                               | Example                   |
| -------------------------------------- | ------------------------------------ | ------------------------- |
| **Use `const` by default**             | 🛡️ Prevents accidental reassignment  | `const name = 'John';`    |
| **Use `let` when reassignment needed** | 🧱 Block scoped and safer than `var` | `let counter = 0;`        |
| **Avoid `var`**                        | ⚠️ Function scoped, hoisting issues  | Use `let`/`const` instead |
| **Declare variables at top of scope**  | ⬆️ Makes hoisting behavior explicit  | Declare before use        |
| **Use meaningful names**               | 🏷️ Improves code readability         | `userAge` vs `x`          |

## ⚠️ Common Pitfalls

### 🔁 Loop Variable Issue with `var`

```javascript
// Problem with var
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100); // Prints: 3, 3, 3
}

// Solution with let
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100); // Prints: 0, 1, 2
}
```

### ⏳ Temporal Dead Zone Confusion

```javascript
function tdz() {
  console.log(typeof x); // ReferenceError (not "undefined")
  let x = 10;
}

function noTdz() {
  console.log(typeof y); // "undefined"
  var y = 10;
}
```
