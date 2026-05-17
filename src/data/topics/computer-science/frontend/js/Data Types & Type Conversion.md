# JavaScript Data Types & Type Conversion 🟦🔄

## Primitive vs. Reference Types 🧩

| Aspect         | Primitive Types 🟢                                                     | Reference Types 🟠                          |
| -------------- | ---------------------------------------------------------------------- | ------------------------------------------- |
| **Definition** | Simple data types stored by value                                      | Complex data types stored by reference      |
| **Storage**    | Stack memory 📦                                                        | Heap memory 🗄️ (reference in stack)         |
| **Mutability** | Immutable 🔒                                                           | Mutable 🔓                                  |
| **Assignment** | Value copied 📋                                                        | Reference copied 🔗                         |
| **Comparison** | By value 🆚                                                            | By reference 🔗                             |
| **Types**      | `number`, `string`, `boolean`, `undefined`, `null`, `symbol`, `bigint` | `object`, `array`, `function`, `date`, etc. |

### Primitive Types Examples

```javascript
// Numbers 🔢
let integer = 42;
let float = 3.14;
let scientific = 2.5e6; // 2500000
let infinity = Infinity;
let notANumber = NaN;

// Strings 📝
let singleQuote = 'Hello';
let doubleQuote = 'World';
let template = `Hello ${singleQuote}`;
let multiline = `Line 1
Line 2`;

// Boolean ✅❌
let isTrue = true;
let isFalse = false;

// Undefined ❓
let undefinedVar;
console.log(undefinedVar); // undefined

// Null ⛔
let nullVar = null;

// Symbol (ES6) 🏷️
let sym1 = Symbol('id');
let sym2 = Symbol('id');
console.log(sym1 === sym2); // false (each symbol is unique)

// BigInt (ES2020) 💹
let bigNumber = 123456789012345678901234567890n;
let bigFromConstructor = BigInt('123456789012345678901234567890');
```

### Reference Types Examples

```javascript
// Objects 🧑‍💻
let person = {
  name: 'John',
  age: 30,
  address: {
    city: 'New York',
    zip: '10001',
  },
};

// Arrays 📚
let numbers = [1, 2, 3, 4, 5];
let mixed = [1, 'hello', true, null, { name: 'John' }];

// Functions 🛠️
function greet(name) {
  return `Hello, ${name}!`;
}

let arrowFunc = (x, y) => x + y;

// Dates 📅
let now = new Date();
let specificDate = new Date('2023-12-25');

// Regular Expressions 🔍
let regex = /[a-z]+/gi;
let regexConstructor = new RegExp('[a-z]+', 'gi');
```

### Value vs Reference Behavior 🔄

```javascript
// Primitives - Copied by value
let a = 10;
let b = a; // b gets a copy of a's value
a = 20;
console.log(a); // 20
console.log(b); // 10 (unchanged)

// References - Copied by reference
let obj1 = { name: 'John' };
let obj2 = obj1; // obj2 gets reference to same object
obj1.name = 'Jane';
console.log(obj1.name); // 'Jane'
console.log(obj2.name); // 'Jane' (same object)

// Array example
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr1.push(4);
console.log(arr1); // [1, 2, 3, 4]
console.log(arr2); // [1, 2, 3, 4] (same array)
```

## Type Checking Methods 🕵️‍♂️

| Method                      | Purpose                     | Returns | Best For                   |
| --------------------------- | --------------------------- | ------- | -------------------------- |
| `typeof`                    | Get primitive type          | String  | Primitive types, functions |
| `instanceof`                | Check prototype chain       | Boolean | Object types, inheritance  |
| `Object.prototype.toString` | Precise type identification | String  | All types accurately       |

### `typeof` Operator 🏷️

| Value           | `typeof` Result | Notes                              |
| --------------- | --------------- | ---------------------------------- |
| `42`            | `"number"`      | All numbers                        |
| `"hello"`       | `"string"`      | All strings                        |
| `true`          | `"boolean"`     | Boolean values                     |
| `undefined`     | `"undefined"`   | Undefined values                   |
| `null`          | `"object"`      | **Quirk**: null shows as object ⚠️ |
| `Symbol()`      | `"symbol"`      | Symbol values                      |
| `123n`          | `"bigint"`      | BigInt values                      |
| `{}`            | `"object"`      | Objects, arrays, null              |
| `function() {}` | `"function"`    | Functions                          |

```javascript
// typeof Examples
console.log(typeof 42); // "number"
console.log(typeof 'hello'); // "string"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (famous JavaScript quirk ⚠️)
console.log(typeof Symbol('id')); // "symbol"
console.log(typeof 123n); // "bigint"
console.log(typeof {}); // "object"
console.log(typeof []); // "object"
console.log(typeof function () {}); // "function"
console.log(typeof NaN); // "number"
console.log(typeof Infinity); // "number"

// typeof with variables
let x;
console.log(typeof x); // "undefined"
console.log(typeof undeclaredVar); // "undefined" (doesn't throw error)
```

### `instanceof` Operator 🧬

```javascript
// instanceof Examples
let arr = [1, 2, 3];
let obj = {};
let date = new Date();
let regex = /test/;

console.log(arr instanceof Array); // true
console.log(arr instanceof Object); // true (Array inherits from Object)
console.log(obj instanceof Object); // true
console.log(date instanceof Date); // true
console.log(date instanceof Object); // true
console.log(regex instanceof RegExp); // true

// Custom constructor
function Person(name) {
  this.name = name;
}
let john = new Person('John');
console.log(john instanceof Person); // true
console.log(john instanceof Object); // true

// Primitives return false
console.log(42 instanceof Number); // false
console.log('hello' instanceof String); // false
console.log(true instanceof Boolean); // false

// Wrapper objects return true
console.log(new Number(42) instanceof Number); // true
console.log(new String('hello') instanceof String); // true
```

### `Object.prototype.toString` 🎯

```javascript
// Most accurate type checking
function getType(value) {
  return Object.prototype.toString.call(value).slice(8, -1);
}

console.log(getType(42)); // "Number"
console.log(getType('hello')); // "String"
console.log(getType(true)); // "Boolean"
console.log(getType(undefined)); // "Undefined"
console.log(getType(null)); // "Null"
console.log(getType(Symbol('id'))); // "Symbol"
console.log(getType(123n)); // "BigInt"
console.log(getType({})); // "Object"
console.log(getType([])); // "Array"
console.log(getType(function () {})); // "Function"
console.log(getType(new Date())); // "Date"
console.log(getType(/test/)); // "RegExp"
console.log(getType(new Map())); // "Map"
console.log(getType(new Set())); // "Set"

// Direct usage
console.log(Object.prototype.toString.call([])); // "[object Array]"
console.log(Object.prototype.toString.call(null)); // "[object Null]"
console.log(Object.prototype.toString.call(NaN)); // "[object Number]"
```

## Type Conversion (Coercion) 🔄

| Conversion Type       | Definition                                 | When It Occurs                     | Control   |
| --------------------- | ------------------------------------------ | ---------------------------------- | --------- |
| **Implicit Coercion** | Automatic type conversion by JavaScript 🤖 | Operations between different types | Automatic |
| **Explicit Coercion** | Manual type conversion by developer ✋     | Using conversion functions/methods | Manual    |

### Implicit Coercion Examples

#### String Coercion 📝

```javascript
// + operator with strings
console.log(5 + '3'); // "53" (number to string)
console.log('5' + 3); // "53" (number to string)
console.log('5' + true); // "5true" (boolean to string)
console.log('5' + null); // "5null" (null to string)
console.log('5' + undefined); // "5undefined" (undefined to string)

// Template literals
console.log(`Value: ${42}`); // "Value: 42"
```

#### Numeric Coercion 🔢

```javascript
// - operator (always numeric)
console.log('5' - 3); // 2 (string to number)
console.log('5' - '2'); // 3 (both strings to numbers)
console.log(true - false); // 1 (booleans to numbers: true=1, false=0)
console.log(null - 5); // -5 (null becomes 0)

// Other operators
console.log('6' * '2'); // 12
console.log('8' / '2'); // 4
console.log('10' % '3'); // 1
console.log(+'42'); // 42 (unary + converts to number)
```

#### Boolean Coercion ✅❌

```javascript
// Falsy values: false, 0, -0, 0n, "", null, undefined, NaN
console.log(Boolean(false)); // false
console.log(Boolean(0)); // false
console.log(Boolean(-0)); // false
console.log(Boolean(0n)); // false
console.log(Boolean('')); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false

// Truthy values: everything else
console.log(Boolean(true)); // true
console.log(Boolean(42)); // true
console.log(Boolean('hello')); // true
console.log(Boolean([])); // true (empty array is truthy! 😲)
console.log(Boolean({})); // true (empty object is truthy! 😲)
console.log(Boolean('0')); // true (string "0" is truthy!)

// In conditions
if ('0') console.log('Truthy'); // Executes
if ([]) console.log('Truthy'); // Executes
```

### Explicit Coercion Examples

#### To String 📝

```javascript
// String() function
console.log(String(42)); // "42"
console.log(String(true)); // "true"
console.log(String(null)); // "null"
console.log(String(undefined)); // "undefined"

// .toString() method
console.log((42).toString()); // "42"
console.log(true.toString()); // "true"
console.log([1, 2, 3].toString()); // "1,2,3"

// Template literals
console.log(`${42}`); // "42"
```

#### To Number 🔢

```javascript
// Number() function
console.log(Number('42')); // 42
console.log(Number('42.5')); // 42.5
console.log(Number('42px')); // NaN
console.log(Number('')); // 0
console.log(Number(' ')); // 0
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN

// parseInt() and parseFloat()
console.log(parseInt('42px')); // 42
console.log(parseInt('42.8')); // 42
console.log(parseFloat('42.8px')); // 42.8
console.log(parseInt('px42')); // NaN

// Unary + operator
console.log(+'42'); // 42
console.log(+'42.5'); // 42.5
console.log(+'hello'); // NaN
```

#### To Boolean ✅❌

```javascript
// Boolean() function
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean('hello')); // true
console.log(Boolean('')); // false

// Double negation (!!)
console.log(!!1); // true
console.log(!!0); // false
console.log(!!'hello'); // true
console.log(!!''); // false
```

## Common Coercion Gotchas ⚠️

| Expression  | Result              | Explanation                                        |
| ----------- | ------------------- | -------------------------------------------------- |
| `[] + []`   | `""`                | Both arrays convert to empty strings               |
| `[] + {}`   | `"[object Object]"` | Array becomes "", object becomes "[object Object]" |
| `{} + []`   | `0`                 | {} seen as block, +[] converts to 0                |
| `0 == "0"`  | `true`              | String "0" converts to number 0                    |
| `0 == []`   | `true`              | Array converts to "" then to 0                     |
| `"0" == []` | `false`             | Array converts to "", "0" != ""                    |

```javascript
// Surprising comparisons 😲
console.log([] == []); // false (different references)
console.log([] == !![]); // false ([] is truthy, !![] is true, [] != true)
console.log([] == ![]); // true ([] converts to "", ![] is false, "" == false)

// == vs === comparisons
console.log(0 == false); // true (implicit coercion)
console.log(0 === false); // false (no coercion)
console.log('' == false); // true (implicit coercion)
console.log('' === false); // false (no coercion)
console.log(null == undefined); // true (special case)
console.log(null === undefined); // false (different types)
```

## Best Practices 🏆

| Practice                            | Reason                      | Example                          |
| ----------------------------------- | --------------------------- | -------------------------------- |
| **Use `===` instead of `==`**       | Avoids unexpected coercion  | `if (x === 5)` not `if (x == 5)` |
| **Explicit coercion**               | Makes intentions clear      | `String(value)` not `value + ""` |
| **Check for `null`/`undefined`**    | Handle edge cases           | `if (value != null)`             |
| **Use `Object.prototype.toString`** | Most reliable type checking | For complex type detection       |
| **Understand falsy values**         | Prevent logical errors      | Know what evaluates to false     |
