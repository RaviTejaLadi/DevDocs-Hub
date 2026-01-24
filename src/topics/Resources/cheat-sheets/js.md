# JavaScript Cheat Sheet

## Table of Contents

1. [Basics](#basics)
2. [Variables](#variables)
3. [Data Types](#data-types)
4. [Operators](#operators)
   - [Arithmetic](#arithmetic)
   - [Comparison](#comparison)
   - [Logical](#logical)
5. [Conditionals](#conditionals)
6. [Loops](#loops)
7. [Functions](#functions)
8. [Objects](#objects)
9. [Arrays](#arrays)
10. [Strings](#strings)
11. [Regular Expressions](#regular-expressions)
12. [Numbers and Math](#numbers-and-math)
13. [Dates](#dates)
14. [Error Handling](#error-handling)
15. [Promises and Async/Await](#promises-and-asyncawait)
16. [Modules](#modules)
17. [Browser APIs](#browser-apis)
18. [JSON](#json)
19. [Miscellaneous](#miscellaneous)

## Basics

| Syntax         | Description          | Example                    |
| -------------- | -------------------- | -------------------------- |
| `//`           | Single-line comment  | `// This is a comment`     |
| `/* */`        | Multi-line comment   | `/* Multi-line comment */` |
| `;`            | Statement terminator | `let x = 5;`               |
| `' '` or `" "` | Strings              | `'Hello'` or `"World"`     |
| `` ` ``        | Template literals    | `` `Hello ${name}` ``      |

## Variables

| Syntax  | Description              | Example            |
| ------- | ------------------------ | ------------------ |
| `var`   | Function-scoped variable | `var x = 10;`      |
| `let`   | Block-scoped variable    | `let y = 20;`      |
| `const` | Block-scoped constant    | `const PI = 3.14;` |

## Data Types

| Type        | Description              | Example                   |
| ----------- | ------------------------ | ------------------------- |
| `Number`    | Numeric value            | `42`, `3.14`              |
| `String`    | Text                     | `"hello"`, `'world'`      |
| `Boolean`   | True/false               | `true`, `false`           |
| `null`      | Intentional empty value  | `null`                    |
| `undefined` | Uninitialized value      | `undefined`               |
| `Object`    | Collection of properties | `{name: "John", age: 30}` |
| `Array`     | Ordered list             | `[1, 2, 3]`               |
| `Symbol`    | Unique identifier        | `Symbol('id')`            |

## Operators

### Arithmetic

| Operator | Description    | Example         |
| -------- | -------------- | --------------- |
| `+`      | Addition       | `5 + 2` → `7`   |
| `-`      | Subtraction    | `5 - 2` → `3`   |
| `*`      | Multiplication | `5 * 2` → `10`  |
| `/`      | Division       | `5 / 2` → `2.5` |
| `%`      | Modulus        | `5 % 2` → `1`   |
| `**`     | Exponentiation | `5 ** 2` → `25` |
| `++`     | Increment      | `x++`           |
| `--`     | Decrement      | `x--`           |

### Comparison

| Operator | Description           | Example               |
| -------- | --------------------- | --------------------- |
| `==`     | Equal to              | `5 == '5'` → `true`   |
| `===`    | Strict equal          | `5 === '5'` → `false` |
| `!=`     | Not equal             | `5 != '5'` → `false`  |
| `!==`    | Strict not equal      | `5 !== '5'` → `true`  |
| `>`      | Greater than          | `5 > 3` → `true`      |
| `<`      | Less than             | `5 < 3` → `false`     |
| `>=`     | Greater than or equal | `5 >= 5` → `true`     |
| `<=`     | Less than or equal    | `5 <= 3` → `false`    |

### Logical

| Operator | Description | Example                    |
| -------- | ----------- | -------------------------- |
| `&&`     | AND         | `true && false` → `false`  |
| `\|\|`   | OR          | `true \|\| false` → `true` |
| `!`      | NOT         | `!true` → `false`          |

## Conditionals

| Syntax    | Description      | Example                     |
| --------- | ---------------- | --------------------------- |
| `if`      | If statement     | `if (x > 5) { ... }`        |
| `else`    | Else clause      | `else { ... }`              |
| `else if` | Else if clause   | `else if (x < 0) { ... }`   |
| `switch`  | Switch statement | `switch(x) { case 1: ... }` |
| `? :`     | Ternary operator | `x > 5 ? 'big' : 'small'`   |

## Loops

| Syntax     | Description            | Example                               |
| ---------- | ---------------------- | ------------------------------------- |
| `for`      | For loop               | `for (let i = 0; i < 5; i++) { ... }` |
| `while`    | While loop             | `while (x < 5) { ... }`               |
| `do while` | Do-while loop          | `do { ... } while (x < 5)`            |
| `for...in` | Loop object properties | `for (let key in obj) { ... }`        |
| `for...of` | Loop iterables         | `for (let val of arr) { ... }`        |
| `break`    | Exit loop              | `break;`                              |
| `continue` | Skip iteration         | `continue;`                           |

## Functions

| Syntax      | Description          | Example                                                  |
| ----------- | -------------------- | -------------------------------------------------------- |
| `function`  | Function declaration | `function foo() { ... }`                                 |
| `() =>`     | Arrow function       | `const foo = () => { ... }`                              |
| `return`    | Return value         | `return x + y;`                                          |
| `arguments` | Function arguments   | `function sum() { return arguments[0] + arguments[1]; }` |
| `...`       | Rest parameters      | `function sum(...nums) { ... }`                          |

## Objects

| Syntax        | Description        | Example                         |
| ------------- | ------------------ | ------------------------------- |
| `{}`          | Object literal     | `const obj = { prop: 'value' }` |
| `.`           | Dot notation       | `obj.prop`                      |
| `[]`          | Bracket notation   | `obj['prop']`                   |
| `this`        | Current object     | `this.prop`                     |
| `new`         | Create instance    | `new Date()`                    |
| `class`       | Class definition   | `class Person { ... }`          |
| `constructor` | Class constructor  | `constructor() { ... }`         |
| `extends`     | Class inheritance  | `class Student extends Person`  |
| `super`       | Parent constructor | `super();`                      |

## Arrays

| Syntax       | Description       | Example                               |
| ------------ | ----------------- | ------------------------------------- |
| `[]`         | Array literal     | `const arr = [1, 2, 3]`               |
| `length`     | Array length      | `arr.length`                          |
| `push()`     | Add to end        | `arr.push(4)`                         |
| `pop()`      | Remove from end   | `arr.pop()`                           |
| `shift()`    | Remove from start | `arr.shift()`                         |
| `unshift()`  | Add to start      | `arr.unshift(0)`                      |
| `slice()`    | Copy portion      | `arr.slice(1, 3)`                     |
| `splice()`   | Add/remove items  | `arr.splice(1, 0, 'a')`               |
| `concat()`   | Combine arrays    | `arr.concat([4, 5])`                  |
| `join()`     | Join to string    | `arr.join('-')`                       |
| `indexOf()`  | Find index        | `arr.indexOf(2)`                      |
| `includes()` | Check for value   | `arr.includes(3)`                     |
| `find()`     | Find element      | `arr.find(x => x > 2)`                |
| `filter()`   | Filter elements   | `arr.filter(x => x > 2)`              |
| `map()`      | Transform array   | `arr.map(x => x * 2)`                 |
| `reduce()`   | Reduce to value   | `arr.reduce((acc, val) => acc + val)` |
| `sort()`     | Sort array        | `arr.sort()`                          |
| `forEach()`  | Loop elements     | `arr.forEach(x => console.log(x))`    |

## Strings

| Syntax          | Description          | Example                     |
| --------------- | -------------------- | --------------------------- |
| `length`        | String length        | `'hello'.length`            |
| `toUpperCase()` | Convert to uppercase | `'hello'.toUpperCase()`     |
| `toLowerCase()` | Convert to lowercase | `'HELLO'.toLowerCase()`     |
| `charAt()`      | Get character        | `'hello'.charAt(1)`         |
| `indexOf()`     | Find substring       | `'hello'.indexOf('e')`      |
| `lastIndexOf()` | Find last occurrence | `'hello'.lastIndexOf('l')`  |
| `substring()`   | Extract substring    | `'hello'.substring(1, 3)`   |
| `slice()`       | Extract substring    | `'hello'.slice(1, 3)`       |
| `split()`       | Split into array     | `'hello'.split('')`         |
| `replace()`     | Replace substring    | `'hello'.replace('h', 'j')` |
| `trim()`        | Remove whitespace    | `' hello '.trim()`          |
| `startsWith()`  | Check start          | `'hello'.startsWith('he')`  |
| `endsWith()`    | Check end            | `'hello'.endsWith('lo')`    |
| `includes()`    | Check substring      | `'hello'.includes('ell')`   |

## Regular Expressions

| Syntax      | Description      | Example                    |
| ----------- | ---------------- | -------------------------- |
| `/pattern/` | Regex literal    | `/\d+/`                    |
| `test()`    | Test match       | `/\d+/.test('123')`        |
| `exec()`    | Execute match    | `/\d+/.exec('123')`        |
| `match()`   | String match     | `'123'.match(/\d+/)`       |
| `search()`  | Search string    | `'123'.search(/\d+/)`      |
| `replace()` | Replace matches  | `'123'.replace(/\d/, 'x')` |
| `split()`   | Split by pattern | `'123'.split(/\d/)`        |

## Numbers and Math

| Syntax          | Description       | Example              |
| --------------- | ----------------- | -------------------- |
| `Number()`      | Convert to number | `Number('123')`      |
| `parseInt()`    | Parse integer     | `parseInt('123')`    |
| `parseFloat()`  | Parse float       | `parseFloat('12.3')` |
| `isNaN()`       | Check if NaN      | `isNaN(NaN)`         |
| `isFinite()`    | Check if finite   | `isFinite(123)`      |
| `Math.abs()`    | Absolute value    | `Math.abs(-5)`       |
| `Math.round()`  | Round to nearest  | `Math.round(5.6)`    |
| `Math.floor()`  | Round down        | `Math.floor(5.6)`    |
| `Math.ceil()`   | Round up          | `Math.ceil(5.1)`     |
| `Math.random()` | Random number     | `Math.random()`      |
| `Math.max()`    | Maximum value     | `Math.max(1, 2, 3)`  |
| `Math.min()`    | Minimum value     | `Math.min(1, 2, 3)`  |
| `Math.pow()`    | Exponentiation    | `Math.pow(2, 3)`     |
| `Math.sqrt()`   | Square root       | `Math.sqrt(9)`       |

## Dates

| Syntax          | Description        | Example                  |
| --------------- | ------------------ | ------------------------ |
| `new Date()`    | Create date object | `new Date()`             |
| `getFullYear()` | Get year           | `date.getFullYear()`     |
| `getMonth()`    | Get month (0-11)   | `date.getMonth()`        |
| `getDate()`     | Get day of month   | `date.getDate()`         |
| `getDay()`      | Get day of week    | `date.getDay()`          |
| `getHours()`    | Get hours          | `date.getHours()`        |
| `getMinutes()`  | Get minutes        | `date.getMinutes()`      |
| `getSeconds()`  | Get seconds        | `date.getSeconds()`      |
| `getTime()`     | Get timestamp      | `date.getTime()`         |
| `setFullYear()` | Set year           | `date.setFullYear(2023)` |

## Error Handling

| Syntax      | Description    | Example                          |
| ----------- | -------------- | -------------------------------- |
| `try/catch` | Handle errors  | `try { ... } catch(err) { ... }` |
| `throw`     | Throw error    | `throw new Error('message')`     |
| `finally`   | Execute always | `finally { ... }`                |
| `Error`     | Error object   | `new Error('message')`           |

## Promises and Async/Await

| Syntax           | Description       | Example                                 |
| ---------------- | ----------------- | --------------------------------------- |
| `Promise`        | Promise object    | `new Promise((resolve, reject) => ...)` |
| `then()`         | Handle resolution | `promise.then(value => ...)`            |
| `catch()`        | Handle rejection  | `promise.catch(err => ...)`             |
| `finally()`      | Handle completion | `promise.finally(() => ...)`            |
| `Promise.all()`  | Multiple promises | `Promise.all([p1, p2])`                 |
| `Promise.race()` | First to settle   | `Promise.race([p1, p2])`                |
| `async`          | Async function    | `async function foo() { ... }`          |
| `await`          | Wait for promise  | `await promise`                         |

## Modules

| Syntax           | Description    | Example                              |
| ---------------- | -------------- | ------------------------------------ |
| `import`         | Import module  | `import { func } from './module.js'` |
| `export`         | Export module  | `export const func = () => ...`      |
| `export default` | Default export | `export default function() { ... }`  |

## Browser APIs

| Syntax            | Description           | Example                              |
| ----------------- | --------------------- | ------------------------------------ |
| `window`          | Global browser object | `window.alert()`                     |
| `document`        | DOM document          | `document.getElementById()`          |
| `console.log()`   | Log to console        | `console.log('message')`             |
| `alert()`         | Show alert            | `alert('message')`                   |
| `confirm()`       | Show confirmation     | `confirm('OK?')`                     |
| `prompt()`        | Show prompt           | `prompt('Name?')`                    |
| `setTimeout()`    | Execute after delay   | `setTimeout(() => {}, 1000)`         |
| `setInterval()`   | Execute repeatedly    | `setInterval(() => {}, 1000)`        |
| `clearTimeout()`  | Cancel timeout        | `clearTimeout(id)`                   |
| `clearInterval()` | Cancel interval       | `clearInterval(id)`                  |
| `fetch()`         | HTTP request          | `fetch(url).then(res => res.json())` |

## JSON

| Syntax             | Description       | Example                 |
| ------------------ | ----------------- | ----------------------- |
| `JSON.parse()`     | Parse JSON string | `JSON.parse('{"x":1}')` |
| `JSON.stringify()` | Convert to JSON   | `JSON.stringify({x:1})` |

## Miscellaneous

| Syntax       | Description           | Example                  |
| ------------ | --------------------- | ------------------------ |
| `typeof`     | Type of value         | `typeof 42` → `"number"` |
| `instanceof` | Check instance        | `obj instanceof Date`    |
| `delete`     | Delete property       | `delete obj.prop`        |
| `in`         | Check property        | `'prop' in obj`          |
| `void`       | Evaluate to undefined | `void 0`                 |
| `debugger`   | Breakpoint            | `debugger;`              |
| `eval()`     | Evaluate string       | `eval('2 + 2')`          |

**[⬆ Back to Top](#table-of-contents)**
