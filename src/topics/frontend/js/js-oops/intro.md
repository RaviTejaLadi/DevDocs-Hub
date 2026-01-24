# 🚀 JavaScript OOP Concepts - Complete Guide

## 🏛️ The Four Pillars of OOP

### 📦 Encapsulation

- **What it is**: Bundling data and methods together within objects
- **Purpose**: Control access to internal state through public interfaces
- **Example**: Using private fields (#) to hide implementation details
- **Benefits**: Data protection, code organization, easier maintenance

### 🧬 Inheritance

- **What it is**: Creating new objects based on existing ones
- **Purpose**: Code reuse and establishing hierarchical relationships
- **Example**: Child classes extending parent classes with `extends`
- **Benefits**: Reduces code duplication, promotes code reuse

### 🎭 Polymorphism

- **What it is**: Objects of different types treated uniformly
- **Purpose**: Same interface for different underlying forms
- **Example**: Different classes with same method names behaving differently
- **Benefits**: Flexible code, easier to extend and maintain

### 🎨 Abstraction

- **What it is**: Hiding complex implementation details
- **Purpose**: Expose only necessary functionality to outside world
- **Example**: Public methods that hide complex internal operations
- **Benefits**: Simplifies usage, reduces complexity

---

## 🏗️ Object Creation Patterns

### 📝 Object Literals

```javascript
const person = {
  name: 'John',
  age: 30,
  greet() {
    return `Hello, I'm ${this.name}`;
  },
};
```

- **When to use**: Simple objects with known properties
- **Pros**: Easy to read, quick to create
- **Cons**: No reusability, no inheritance

### 🏭 Constructor Functions

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    return `Hello, I'm ${this.name}`;
  };
}
const john = new Person('John', 30);
```

- **When to use**: Creating multiple similar objects
- **Pros**: Reusable, supports inheritance via prototype
- **Cons**: Must remember to use `new`, function hoisting issues

### 🏪 Factory Functions

```javascript
function createPerson(name, age) {
  return {
    name,
    age,
    greet() {
      return `Hello, I'm ${this.name}`;
    },
  };
}
const john = createPerson('John', 30);
```

- **When to use**: Need flexibility without `new` keyword
- **Pros**: No `new` required, flexible, closures for privacy
- **Cons**: More memory usage, no shared prototype

### 🔧 Object.create()

```javascript
const personPrototype = {
  greet() {
    return `Hello, I'm ${this.name}`;
  },
};
const john = Object.create(personPrototype);
john.name = 'John';
john.age = 30;
```

- **When to use**: Fine-grained control over prototype chain
- **Pros**: Direct prototype control, clean inheritance
- **Cons**: More verbose, less intuitive

---

## 🆕 ES6 Classes

### 📋 Class Declaration

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, I'm ${this.name}`;
  }
}
```

- **Purpose**: Modern, clean syntax for object creation
- **Benefits**: Familiar syntax, built-in inheritance support
- **Note**: Syntactic sugar over prototypal inheritance

### 🎯 Constructor Method

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
```

- **Purpose**: Initialize new instances
- **Called**: Automatically when using `new`
- **Important**: Only one constructor per class

### ⚡ Instance Methods

```javascript
class Person {
  greet() {
    return `Hello, I'm ${this.name}`;
  }
  walk() {
    return `${this.name} is walking`;
  }
}
```

- **Purpose**: Methods available on every instance
- **Access**: Called on object instances
- **Shared**: Same method for all instances (prototype)

### 🏢 Static Methods

```javascript
class Person {
  static species() {
    return 'Homo sapiens';
  }
  static compare(person1, person2) {
    /* comparison logic */
  }
}
```

- **Purpose**: Methods that belong to the class itself
- **Access**: Called on class, not instances
- **Use cases**: Utility functions, factory methods

### 🔐 Getters and Setters

```javascript
class Person {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value.trim();
  }
}
```

- **Purpose**: Controlled access to properties
- **Benefits**: Validation, computed properties, encapsulation
- **Usage**: Access like properties, not methods

---

## 🌳 Inheritance Mechanisms

### 🧩 Prototypal Inheritance

```javascript
const animal = { species: 'Unknown' };
const dog = Object.create(animal);
dog.breed = 'Labrador';
```

- **How it works**: Objects inherit directly from other objects
- **Prototype chain**: Objects linked through **proto**
- **JavaScript's way**: Native inheritance mechanism

### ⛓️ Prototype Chain

```javascript
function Animal(species) {
  this.species = species;
}
Animal.prototype.speak = function () {
  return 'Some sound';
};

function Dog(breed) {
  this.breed = breed;
}
Dog.prototype = Object.create(Animal.prototype);
```

- **Mechanism**: How objects inherit properties and methods
- **Lookup**: JavaScript searches up the chain for properties
- **Foundation**: Basis for all inheritance in JavaScript

### 👨‍👩‍👧‍👦 Class Inheritance

```javascript
class Animal {
  constructor(species) {
    this.species = species;
  }
  speak() {
    return 'Some sound';
  }
}

class Dog extends Animal {
  constructor(breed) {
    super('Canine');
    this.breed = breed;
  }
  speak() {
    return 'Woof!';
  }
}
```

- **Syntax**: Clean, familiar inheritance with `extends`
- **Benefits**: Easy to understand, less boilerplate
- **Behind scenes**: Still uses prototypal inheritance

### 🦸‍♂️ Super Keyword

```javascript
class Dog extends Animal {
  constructor(breed) {
    super('Canine'); // Call parent constructor
    this.breed = breed;
  }

  speak() {
    return super.speak() + ' Woof!'; // Call parent method
  }
}
```

- **Purpose**: Access parent class constructors and methods
- **Constructor**: Must call before using `this`
- **Methods**: Can extend parent behavior

---

## 🔥 Advanced OOP Features

### 🔒 Private Fields

```javascript
class Person {
  #ssn; // Private field

  constructor(name, ssn) {
    this.name = name;
    this.#ssn = ssn;
  }

  #validateSSN() {
    /* private method */
  }
}
```

- **Syntax**: Use # prefix for truly private fields
- **Access**: Only accessible within the class
- **Benefits**: True encapsulation, data protection

### 🤫 Private Methods

```javascript
class Calculator {
  #validate(number) {
    return typeof number === 'number';
  }

  add(a, b) {
    if (!this.#validate(a) || !this.#validate(b)) {
      throw new Error('Invalid numbers');
    }
    return a + b;
  }
}
```

- **Purpose**: Internal helper methods
- **Access**: Only callable from within class
- **Use cases**: Validation, internal utilities

### 🔄 Method Overriding

```javascript
class Animal {
  speak() {
    return 'Some sound';
  }
}

class Dog extends Animal {
  speak() {
    return 'Woof!';
  } // Override parent method
}
```

- **Purpose**: Redefine parent behavior in child classes
- **Benefits**: Customization, polymorphism
- **Best practice**: Use `super` when extending behavior

### 📐 Abstract Classes

```javascript
class Shape {
  constructor() {
    if (new.target === Shape) {
      throw new Error('Cannot instantiate abstract class');
    }
  }

  area() {
    throw new Error('Must implement area method');
  }
}
```

- **Purpose**: Base classes not meant to be instantiated
- **Implementation**: Manual checks in JavaScript
- **Benefits**: Enforce implementation contracts

---

## 🎯 This Binding and Context

### 🔗 Method Binding

```javascript
const person = {
  name: 'John',
  greet() {
    return `Hello, I'm ${this.name}`;
  },
};

person.greet(); // "Hello, I'm John"
const greetFunc = person.greet;
greetFunc(); // "Hello, I'm undefined" (context lost)
```

- **Rule**: `this` refers to the object that calls the method
- **Problem**: Context can be lost when methods are reassigned
- **Solution**: Use arrow functions or explicit binding

### 🏹 Arrow Functions

```javascript
const person = {
  name: 'John',
  greet: () => `Hello, I'm ${this.name}`, // Wrong!

  delayedGreet() {
    setTimeout(() => {
      console.log(`Hello, I'm ${this.name}`); // Correct!
    }, 1000);
  },
};
```

- **Behavior**: Inherit `this` from lexical scope
- **Use cases**: Callbacks, event handlers
- **Caution**: Don't use for object methods

### 🎮 Explicit Binding

```javascript
function greet() {
  return `Hello, I'm ${this.name}`;
}
const person = { name: 'John' };

greet.call(person); // "Hello, I'm John"
greet.apply(person); // "Hello, I'm John"
const boundGreet = greet.bind(person);
boundGreet(); // "Hello, I'm John"
```

- **call()**: Invoke with specific `this` and arguments
- **apply()**: Like call() but with array of arguments
- **bind()**: Create new function with bound `this`

### ⚠️ Context Loss

```javascript
// Problem
const button = document.getElementById('myButton');
button.addEventListener('click', person.greet); // `this` is button

// Solutions
button.addEventListener('click', () => person.greet());
button.addEventListener('click', person.greet.bind(person));
```

- **Common issue**: `this` changes when methods are passed around
- **Solutions**: Arrow functions, bind(), or wrapper functions
- **Prevention**: Be mindful of method context

---

## 🎨 Design Patterns

### 👑 Singleton Pattern

```javascript
class Database {
  static instance = null;

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}
```

- **Purpose**: Ensure only one instance exists
- **Use cases**: Database connections, configuration objects
- **Benefits**: Controlled access, resource management

### 🏭 Factory Pattern

```javascript
class ShapeFactory {
  static createShape(type, ...args) {
    switch (type) {
      case 'circle':
        return new Circle(...args);
      case 'square':
        return new Square(...args);
      default:
        throw new Error('Unknown shape type');
    }
  }
}
```

- **Purpose**: Create objects without specifying exact classes
- **Benefits**: Flexibility, centralized creation logic
- **Use cases**: Object creation based on conditions

### 👀 Observer Pattern

```javascript
class Subject {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }
  unsubscribe(observer) {
    /* remove observer */
  }
  notify(data) {
    this.observers.forEach((obs) => obs.update(data));
  }
}
```

- **Purpose**: Define dependencies between objects
- **Use cases**: Event systems, model-view architectures
- **Benefits**: Loose coupling, reactive programming

### 📦 Module Pattern

```javascript
const UserModule = (function () {
  let users = []; // Private

  return {
    addUser(user) {
      users.push(user);
    },
    getUsers() {
      return [...users];
    },
  };
})();
```

- **Purpose**: Encapsulate code and create public/private scope
- **Benefits**: Privacy, namespace protection
- **Implementation**: IIFE or ES6 modules

---

## 🧩 Mixins and Composition

### 🎪 Mixins

```javascript
const CanFly = {
  fly() {
    return `${this.name} is flying`;
  },
};

const CanSwim = {
  swim() {
    return `${this.name} is swimming`;
  },
};

class Duck {
  constructor(name) {
    this.name = name;
  }
}

Object.assign(Duck.prototype, CanFly, CanSwim);
```

- **Purpose**: Copy properties from one object to another
- **Benefits**: Multiple inheritance-like behavior
- **Use cases**: Shared behaviors across unrelated classes

### 🏗️ Composition over Inheritance

```javascript
class Engine {
  start() {
    return 'Engine started';
  }
}

class Car {
  constructor() {
    this.engine = new Engine(); // Composition
  }

  start() {
    return this.engine.start();
  }
}
```

- **Principle**: Favor object composition over class inheritance
- **Benefits**: More flexible, easier to test, less coupling
- **Implementation**: Objects contain other objects

### 🤝 Delegation

```javascript
const calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
};

const scientificCalculator = {
  power(base, exp) {
    return Math.pow(base, exp);
  },

  // Delegate to calculator
  add(a, b) {
    return calculator.add(a, b);
  },
  subtract(a, b) {
    return calculator.subtract(a, b);
  },
};
```

- **Purpose**: Objects forward method calls to other objects
- **Benefits**: Code reuse without inheritance
- **Use cases**: Wrapper objects, behavior delegation

---

## 🎓 Summary

These JavaScript OOP concepts provide the foundation for building
well-structured, maintainable applications. JavaScript's unique prototypal
inheritance system, combined with modern ES6+ features, offers powerful tools
for object-oriented programming.

**Key Points to Remember:**

- JavaScript uses prototypal inheritance, not classical inheritance
- ES6 classes are syntactic sugar over prototypes
- Composition is often better than inheritance
- Understanding `this` binding is crucial
- Private fields and methods provide true encapsulation
- Design patterns solve common programming problems
