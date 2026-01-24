# Complete Guide to JavaScript Functions

## Function Declaration

### Definition

A function declaration defines a named function with the `function` keyword.
It's hoisted, meaning it can be called before its definition in the code.

### Syntax

```javascript
function functionName(parameters) {
  // function body
  return value; // optional
}
```

### Key Features

- **Hoisted**: Can be called before declaration
- **Named**: Has a function name
- **Block scoped** in strict mode, **function scoped** otherwise

### Usage

- When you need a reusable block of code
- When function needs to be available throughout its scope
- For recursive functions (can reference itself by name)

### Examples

#### Basic Function Declaration

```javascript
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet('Alice')); // Output: Hello, Alice!
```

#### Function with Multiple Parameters

```javascript
function add(a, b) {
  return a + b;
}

console.log(add(5, 3)); // Output: 8
```

#### Function with Default Parameters

```javascript
function multiply(a, b = 1) {
  return a * b;
}

console.log(multiply(5)); // Output: 5
console.log(multiply(5, 3)); // Output: 15
```

#### Function with Rest Parameters

```javascript
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // Output: 10
```

---

## Function Expression

### Definition

A function expression defines a function as part of an expression. It's not
hoisted and can be anonymous or named.

### Syntax

```javascript
const functionName = function (parameters) {
  // function body
  return value; // optional
};
```

### Key Features

- **Not hoisted**: Cannot be called before definition
- **Can be anonymous**: No function name required
- **Treated as a value**: Can be assigned to variables

### Usage

- When you want to assign a function to a variable
- When you need conditional function creation
- For callback functions

### Examples

#### Basic Function Expression

```javascript
const greet = function (name) {
  return `Hello, ${name}!`;
};

console.log(greet('Bob')); // Output: Hello, Bob!
```

#### Named Function Expression

```javascript
const factorial = function fact(n) {
  return n <= 1 ? 1 : n * fact(n - 1);
};

console.log(factorial(5)); // Output: 120
```

#### Conditional Function Creation

```javascript
let operation;

if (Math.random() > 0.5) {
  operation = function (a, b) {
    return a + b;
  };
} else {
  operation = function (a, b) {
    return a * b;
  };
}

console.log(operation(3, 4));
```

---

## Arrow Functions

### Definition

Arrow functions provide a shorter syntax for writing functions and lexically
bind the `this` value.

### Syntax

```javascript
// Single parameter, single expression
param => expression

// Multiple parameters, single expression
(param1, param2) => expression

// Multiple parameters, multiple statements
(param1, param2) => {
    // statements
    return value;
}
```

### Key Features

- **Concise syntax**: Shorter than traditional functions
- **Lexical this**: Inherits `this` from enclosing scope
- **No hoisting**: Cannot be called before definition
- **Cannot be constructors**: No `new` keyword

### Usage

- For short, simple functions
- As callback functions
- When you need to preserve `this` context
- For functional programming patterns

### Examples

#### Basic Arrow Function

```javascript
const greet = (name) => `Hello, ${name}!`;
console.log(greet('Charlie')); // Output: Hello, Charlie!
```

#### Arrow Function with Multiple Parameters

```javascript
const add = (a, b) => a + b;
console.log(add(10, 5)); // Output: 15
```

#### Arrow Function with Block Body

```javascript
const processArray = (arr) => {
  const doubled = arr.map((x) => x * 2);
  const filtered = doubled.filter((x) => x > 10);
  return filtered;
};

console.log(processArray([1, 5, 8, 12])); // Output: [16, 24]
```

#### Arrow Function in Array Methods

```javascript
const numbers = [1, 2, 3, 4, 5];

const squared = numbers.map((n) => n * n);
console.log(squared); // Output: [1, 4, 9, 16, 25]

const evens = numbers.filter((n) => n % 2 === 0);
console.log(evens); // Output: [2, 4]
```

---

## Anonymous Functions

### Definition

Anonymous functions are functions without a name identifier. They're often used
as arguments to other functions.

### Syntax

```javascript
function(parameters) {
    // function body
}

// Or as arrow function
(parameters) => {
    // function body
}
```

### Key Features

- **No name**: Cannot be referenced by name
- **Often used as callbacks**: Passed to other functions
- **Can be immediately invoked**: IIFE pattern

### Usage

- As callback functions
- For one-time use functions
- In event handlers
- For functional programming

### Examples

#### Anonymous Function as Callback

```javascript
const numbers = [1, 2, 3, 4, 5];

// Anonymous function in map
const doubled = numbers.map(function (num) {
  return num * 2;
});

console.log(doubled); // Output: [2, 4, 6, 8, 10]
```

#### Anonymous Function in Event Handler

```javascript
document.getElementById('button').addEventListener('click', function () {
  console.log('Button clicked!');
});
```

#### Anonymous Arrow Function

```javascript
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // Output: 15
```

---

## Higher-Order Functions

### Definition

Higher-order functions are functions that either take other functions as
arguments or return functions as results.

### Key Features

- **Accept functions as parameters**: Can receive function arguments
- **Return functions**: Can return other functions
- **Enable functional programming**: Support composition and abstraction

### Usage

- For creating reusable, composable code
- Implementing functional programming patterns
- Creating utility functions
- Building abstractions

### Examples

#### Function that Takes Another Function

```javascript
function operateOnArray(arr, operation) {
  return arr.map(operation);
}

const numbers = [1, 2, 3, 4, 5];
const doubled = operateOnArray(numbers, (x) => x * 2);
const squared = operateOnArray(numbers, (x) => x * x);

console.log(doubled); // Output: [2, 4, 6, 8, 10]
console.log(squared); // Output: [1, 4, 9, 16, 25]
```

#### Function that Returns Another Function

```javascript
function createMultiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // Output: 10
console.log(triple(4)); // Output: 12
```

#### Function Composition

```javascript
const compose = (f, g) => (x) => f(g(x));

const addOne = (x) => x + 1;
const multiplyByTwo = (x) => x * 2;

const addThenMultiply = compose(multiplyByTwo, addOne);
console.log(addThenMultiply(3)); // Output: 8 (3 + 1 = 4, 4 * 2 = 8)
```

#### Partial Application

```javascript
function partial(fn, ...presetArgs) {
  return function (...laterArgs) {
    return fn(...presetArgs, ...laterArgs);
  };
}

function greet(greeting, name, punctuation) {
  return `${greeting}, ${name}${punctuation}`;
}

const sayHello = partial(greet, 'Hello');
const sayHelloFormal = partial(greet, 'Hello', 'Sir/Madam');

console.log(sayHello('Alice', '!')); // Output: Hello, Alice!
console.log(sayHelloFormal('.')); // Output: Hello, Sir/Madam.
```

---

## Callback Functions

### Definition

Callback functions are functions passed as arguments to other functions and
executed at a specific time or condition.

### Key Features

- **Passed as arguments**: Given to other functions
- **Executed later**: Called when needed
- **Enable asynchronous programming**: Handle events and async operations

### Usage

- Event handling
- Asynchronous operations
- Array methods (map, filter, reduce)
- Custom control flow

### Examples

#### Simple Callback

```javascript
function processData(data, callback) {
  const processed = data.toUpperCase();
  callback(processed);
}

function displayResult(result) {
  console.log(`Result: ${result}`);
}

processData('hello world', displayResult); // Output: Result: HELLO WORLD
```

#### Callback with Array Methods

```javascript
const numbers = [1, 2, 3, 4, 5];

// Using callbacks with built-in methods
numbers.forEach(function (num, index) {
  console.log(`Index ${index}: ${num}`);
});

const evenNumbers = numbers.filter(function (num) {
  return num % 2 === 0;
});
console.log(evenNumbers); // Output: [2, 4]
```

#### Asynchronous Callback

```javascript
function fetchData(callback) {
  setTimeout(() => {
    const data = { id: 1, name: 'John Doe' };
    callback(data);
  }, 1000);
}

fetchData(function (data) {
  console.log('Received data:', data);
});
```

#### Error-First Callback Pattern

```javascript
function divide(a, b, callback) {
  if (b === 0) {
    callback(new Error('Division by zero'), null);
  } else {
    callback(null, a / b);
  }
}

divide(10, 2, function (error, result) {
  if (error) {
    console.log('Error:', error.message);
  } else {
    console.log('Result:', result); // Output: Result: 5
  }
});
```

---

## Immediately Invoked Function Expression (IIFE)

### Definition

IIFE is a function that is executed immediately after it's defined. It's used to
create a private scope and avoid polluting the global namespace.

### Syntax

```javascript
(function () {
  // code here
})();

// Or with parameters
(function (param1, param2) {
  // code here
})(arg1, arg2);

// Arrow function IIFE
(() => {
  // code here
})();
```

### Key Features

- **Executed immediately**: Runs as soon as it's defined
- **Creates private scope**: Variables inside don't leak to global scope
- **Self-contained**: Encapsulates functionality

### Usage

- Creating private scope
- Initialization code
- Module pattern
- Avoiding global namespace pollution

### Examples

#### Basic IIFE

```javascript
(function () {
  const message = 'This is private!';
  console.log(message);
})();

// console.log(message); // Error: message is not defined
```

#### IIFE with Parameters

```javascript
(function (name, age) {
  console.log(`Name: ${name}, Age: ${age}`);
})('Alice', 30);
```

#### IIFE for Initialization

```javascript
const app = (function () {
  let private = 'This is private';

  return {
    init: function () {
      console.log('App initialized');
    },
    getPrivate: function () {
      return private;
    },
  };
})();

app.init(); // Output: App initialized
console.log(app.getPrivate()); // Output: This is private
```

#### IIFE Module Pattern

```javascript
const Calculator = (function () {
  let history = [];

  return {
    add: function (a, b) {
      const result = a + b;
      history.push(`${a} + ${b} = ${result}`);
      return result;
    },
    getHistory: function () {
      return [...history];
    },
    clearHistory: function () {
      history = [];
    },
  };
})();

console.log(Calculator.add(2, 3)); // Output: 5
console.log(Calculator.getHistory()); // Output: ["2 + 3 = 5"]
```

---

## Constructor Functions

### Definition

Constructor functions are regular functions used with the `new` keyword to
create objects. They serve as blueprints for creating multiple objects with
similar properties and methods.

### Syntax

```javascript
function ConstructorName(parameters) {
  this.property = value;
  this.method = function () {
    // method body
  };
}

// Usage
const instance = new ConstructorName(arguments);
```

### Key Features

- **Used with `new` keyword**: Creates new object instances
- **`this` refers to new object**: Sets properties on the created object
- **Convention**: Constructor names start with capital letter
- **Return object automatically**: No need for explicit return

### Usage

- Creating multiple similar objects
- Object-oriented programming
- Before ES6 classes (alternative to classes)
- Custom object types

### Examples

#### Basic Constructor Function

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    return `Hello, I'm ${this.name}`;
  };
}

const person1 = new Person('Alice', 30);
const person2 = new Person('Bob', 25);

console.log(person1.greet()); // Output: Hello, I'm Alice
console.log(person2.name); // Output: Bob
```

#### Constructor with Prototype Methods

```javascript
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

Car.prototype.getInfo = function () {
  return `${this.year} ${this.make} ${this.model}`;
};

Car.prototype.start = function () {
  return `${this.make} ${this.model} is starting...`;
};

const car1 = new Car('Toyota', 'Camry', 2022);
const car2 = new Car('Honda', 'Civic', 2021);

console.log(car1.getInfo()); // Output: 2022 Toyota Camry
console.log(car2.start()); // Output: Honda Civic is starting...
```

#### Constructor with Validation

```javascript
function BankAccount(accountNumber, initialBalance) {
  if (!accountNumber) {
    throw new Error('Account number is required');
  }

  this.accountNumber = accountNumber;
  this.balance = initialBalance || 0;

  this.deposit = function (amount) {
    if (amount > 0) {
      this.balance += amount;
      return this.balance;
    }
    throw new Error('Deposit amount must be positive');
  };

  this.withdraw = function (amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      return this.balance;
    }
    throw new Error('Invalid withdrawal amount');
  };
}

const account = new BankAccount('12345', 1000);
console.log(account.deposit(500)); // Output: 1500
console.log(account.withdraw(200)); // Output: 1300
```

---

## Async Functions

### Definition

Async functions are functions that handle asynchronous operations using the
`async` and `await` keywords, providing a cleaner alternative to promises and
callbacks.

### Syntax

```javascript
async function functionName() {
  try {
    const result = await asyncOperation();
    return result;
  } catch (error) {
    // handle error
  }
}

// Arrow function version
const functionName = async () => {
  // async code
};
```

### Key Features

- **Returns a Promise**: Always returns a Promise
- **Uses await**: Can pause execution for async operations
- **Error handling**: Can use try/catch for async errors
- **Sequential or parallel**: Control over async execution flow

### Usage

- API calls and data fetching
- File operations
- Database operations
- Any asynchronous operations

### Examples

#### Basic Async Function

```javascript
async function fetchUserData(userId) {
  try {
    const response = await fetch(`/api/users/${userId}`);
    const userData = await response.json();
    return userData;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
}

// Usage
fetchUserData(123)
  .then((user) => console.log(user))
  .catch((error) => console.error(error));
```

#### Async Function with Multiple Operations

```javascript
async function processUserOrder(userId, orderId) {
  try {
    // Sequential operations
    const user = await fetchUser(userId);
    const order = await fetchOrder(orderId);
    const inventory = await checkInventory(order.items);

    if (inventory.available) {
      const payment = await processPayment(user, order);
      const shipment = await createShipment(order, user.address);

      return {
        success: true,
        orderId: order.id,
        shipmentId: shipment.id,
      };
    } else {
      throw new Error('Items not available');
    }
  } catch (error) {
    return {
      success: false,
      error: error.message,
    };
  }
}
```

#### Parallel Async Operations

```javascript
async function fetchMultipleData() {
  try {
    // Run operations in parallel
    const [users, posts, comments] = await Promise.all([
      fetch('/api/users').then((r) => r.json()),
      fetch('/api/posts').then((r) => r.json()),
      fetch('/api/comments').then((r) => r.json()),
    ]);

    return { users, posts, comments };
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}
```

#### Async Function with Timeout

```javascript
function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchWithTimeout(url, timeoutMs = 5000) {
  try {
    const fetchPromise = fetch(url);
    const timeoutPromise = timeout(timeoutMs).then(() => {
      throw new Error('Request timeout');
    });

    const response = await Promise.race([fetchPromise, timeoutPromise]);
    return await response.json();
  } catch (error) {
    console.error('Fetch error:', error.message);
    throw error;
  }
}
```

---

## Generator Functions

### Definition

Generator functions are special functions that can pause and resume their
execution, yielding multiple values over time.

### Syntax

```javascript
function* generatorName() {
  yield value1;
  yield value2;
  return finalValue;
}

// Usage
const generator = generatorName();
const result = generator.next(); // { value: value1, done: false }
```

### Key Features

- **Can pause and resume**: Using `yield` keyword
- **Return iterator object**: Can be iterated over
- **Lazy evaluation**: Values generated on demand
- **Memory efficient**: Don't store all values at once

### Usage

- Creating iterators
- Lazy evaluation of sequences
- Implementing state machines
- Asynchronous programming patterns

### Examples

#### Basic Generator Function

```javascript
function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
  return 'Done';
}

const gen = numberGenerator();

console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: "Done", done: true }
```

#### Infinite Generator

```javascript
function* infiniteSequence() {
  let i = 0;
  while (true) {
    yield i++;
  }
}

const sequence = infiniteSequence();

console.log(sequence.next().value); // 0
console.log(sequence.next().value); // 1
console.log(sequence.next().value); // 2
```

#### Fibonacci Generator

```javascript
function* fibonacci() {
  let [a, b] = [0, 1];

  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

const fib = fibonacci();

// Get first 10 Fibonacci numbers
for (let i = 0; i < 10; i++) {
  console.log(fib.next().value);
}
// Output: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
```

#### Generator with Parameters

```javascript
function* parameterizedGenerator() {
  const first = yield 'First yield';
  console.log('Received:', first);

  const second = yield 'Second yield';
  console.log('Received:', second);

  return 'Generator finished';
}

const gen = parameterizedGenerator();

console.log(gen.next().value); // "First yield"
console.log(gen.next('Hello').value); // Logs "Received: Hello", returns "Second yield"
console.log(gen.next('World').value); // Logs "Received: World", returns "Generator finished"
```

#### Generator for Object Iteration

```javascript
function* objectEntries(obj) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      yield [key, obj[key]];
    }
  }
}

const person = { name: 'Alice', age: 30, city: 'New York' };

for (const [key, value] of objectEntries(person)) {
  console.log(`${key}: ${value}`);
}
// Output:
// name: Alice
// age: 30
// city: New York
```

---

## Recursive Functions

### Definition

Recursive functions are functions that call themselves to solve problems by
breaking them down into smaller, similar subproblems.

### Key Features

- **Calls itself**: Function invokes itself
- **Base case**: Condition to stop recursion
- **Recursive case**: Function calls itself with modified parameters
- **Stack-based**: Uses call stack for execution

### Usage

- Mathematical calculations (factorial, fibonacci)
- Tree and graph traversal
- Parsing nested structures
- Divide and conquer algorithms

### Examples

#### Factorial Function

```javascript
function factorial(n) {
  // Base case
  if (n <= 1) {
    return 1;
  }

  // Recursive case
  return n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120
console.log(factorial(0)); // Output: 1
```

#### Fibonacci Sequence

```javascript
function fibonacci(n) {
  // Base cases
  if (n <= 0) return 0;
  if (n === 1) return 1;

  // Recursive case
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(6)); // Output: 8
console.log(fibonacci(10)); // Output: 55
```

#### Array Sum

```javascript
function arraySum(arr, index = 0) {
  // Base case
  if (index >= arr.length) {
    return 0;
  }

  // Recursive case
  return arr[index] + arraySum(arr, index + 1);
}

const numbers = [1, 2, 3, 4, 5];
console.log(arraySum(numbers)); // Output: 15
```

#### Tree Traversal (Object)

```javascript
function traverseObject(obj, depth = 0) {
  const indent = '  '.repeat(depth);

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(`${indent}${key}: ${typeof obj[key]}`);

      if (typeof obj[key] === 'object' && obj[key] !== null) {
        traverseObject(obj[key], depth + 1);
      }
    }
  }
}

const data = {
  name: 'John',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'New York',
    coordinates: {
      lat: 40.7128,
      lng: -74.006,
    },
  },
};

traverseObject(data);
```

#### Flattening Nested Arrays

```javascript
function flattenArray(arr) {
  const result = [];

  for (const item of arr) {
    if (Array.isArray(item)) {
      // Recursive case
      result.push(...flattenArray(item));
    } else {
      // Base case
      result.push(item);
    }
  }

  return result;
}

const nested = [1, [2, 3], [4, [5, 6]], 7];
console.log(flattenArray(nested)); // Output: [1, 2, 3, 4, 5, 6, 7]
```

---

## Method Functions

### Definition

Method functions are functions that are properties of objects or classes. They
operate on the data contained in the object they belong to.

### Syntax

```javascript
// Object method
const obj = {
  methodName: function () {
    // method body
  },

  // ES6 shorthand
  methodName() {
    // method body
  },

  // Arrow function (be careful with 'this')
  methodName: () => {
    // method body
  },
};

// Class method
class MyClass {
  methodName() {
    // method body
  }
}
```

### Key Features

- **Belong to objects**: Part of object or class
- **Access to `this`**: Can access object properties
- **Encapsulation**: Group related functionality
- **Different `this` binding**: Depends on how they're called

### Usage

- Object behavior definition
- Data manipulation within objects
- Encapsulating related functionality
- Creating APIs for objects

### Examples

#### Object Methods

```javascript
const calculator = {
  result: 0,

  add(value) {
    this.result += value;
    return this;
  },

  subtract(value) {
    this.result -= value;
    return this;
  },

  multiply(value) {
    this.result *= value;
    return this;
  },

  divide(value) {
    if (value !== 0) {
      this.result /= value;
    }
    return this;
  },

  clear() {
    this.result = 0;
    return this;
  },

  getValue() {
    return this.result;
  },
};

// Method chaining
const result = calculator.clear().add(10).multiply(2).subtract(5).getValue();

console.log(result); // Output: 15
```

#### Class Methods

```javascript
class BankAccount {
  constructor(accountNumber, initialBalance = 0) {
    this.accountNumber = accountNumber;
    this.balance = initialBalance;
    this.transactions = [];
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      this.transactions.push({
        type: 'deposit',
        amount: amount,
        date: new Date(),
        balance: this.balance,
      });
    }
    return this.balance;
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      this.transactions.push({
        type: 'withdrawal',
        amount: amount,
        date: new Date(),
        balance: this.balance,
      });
    }
    return this.balance;
  }

  getBalance() {
    return this.balance;
  }

  getTransactionHistory() {
    return [...this.transactions];
  }

  // Static method
  static compareAccounts(account1, account2) {
    return account1.balance - account2.balance;
  }
}

const account = new BankAccount('12345', 1000);
account.deposit(500);
account.withdraw(200);

console.log(account.getBalance()); // Output: 1300
console.log(account.getTransactionHistory());
```

#### Getter and Setter Methods

```javascript
class Person {
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  // Getter method
  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  // Setter method
  set fullName(name) {
    const [firstName, lastName] = name.split(' ');
    this._firstName = firstName;
    this._lastName = lastName;
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(name) {
    this._firstName = name;
  }

  // Regular method
  introduce() {
    return `Hi, I'm ${this.fullName}`;
  }
}

const person = new Person('John', 'Doe');
console.log(person.fullName); // Output: John Doe
console.log(person.introduce()); // Output: Hi, I'm John Doe

person.fullName = 'Jane Smith';
console.log(person.firstName); // Output: Jane
```

#### Methods with Different `this` Contexts

```javascript
const obj = {
  name: 'MyObject',

  regularMethod: function () {
    console.log('Regular method:', this.name);
  },

  arrowMethod: () => {
    console.log('Arrow method:', this.name); // 'this' refers to global object
  },

  methodWithCallback: function () {
    // Problem: 'this' context lost in callback
    setTimeout(function () {
      console.log('Callback (lost context):', this.name);
    }, 100);

    // Solution 1: Arrow function preserves 'this'
    setTimeout(() => {
      console.log('Arrow callback:', this.name);
    }, 200);

    // Solution 2: Bind method
    setTimeout(
      function () {
        console.log('Bound callback:', this.name);
      }.bind(this),
      300
    );
  },
};

obj.regularMethod(); // Output: Regular method: MyObject
obj.arrowMethod(); // Output: Arrow method: undefined
obj.methodWithCallback();
```
