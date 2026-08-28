# 📚 JavaScript Prototypes & Inheritance

---

## 1. 🔹 What is a Prototype?

### ✅ Definition

In JavaScript, every object has a hidden internal property called
`[[Prototype]]`, which refers to another object. This is used for
**prototype-based inheritance** — objects can inherit properties and methods
from other objects.

When we access a property or method on an object, JavaScript looks for it on the
object. If it doesn't find it, it looks up the prototype chain.

---

## 2. 🔹 Syntax to Access or Set Prototype

### ✅ Old Way (pre-ES6)

```js
object.__proto__; // Access prototype (not recommended)
```

### ✅ ES6 Way (recommended)

```js
Object.getPrototypeOf(object); // Get prototype
Object.setPrototypeOf(object, prototype); // Set prototype
```

---

## 3. 🔹 Creating Prototypes via Constructor Functions

### ✅ Syntax

```js
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  return `Hello, my name is ${this.name}`;
};

const john = new Person('John');
console.log(john.greet()); // Hello, my name is John
```

### ✅ Explanation

- `Person` is a constructor.
- `greet` is added to `Person.prototype`, so all instances share it.

---

## 4. 🔹 Prototype Chain

### ✅ Visualization

```
john --> Person.prototype --> Object.prototype --> null
```

When `john.greet()` is called:

1. JS looks on `john`
2. Then on `Person.prototype`
3. Then on `Object.prototype`

---

## 5. 🔹 Inheritance via Prototypes

### ✅ Syntax

```js
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  return `${this.name} makes a noise.`;
};

function Dog(name) {
  Animal.call(this, name); // Call super constructor
}

// Inherit
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
  return `${this.name} barks.`;
};

const dog = new Dog('Rex');
console.log(dog.speak()); // Rex makes a noise.
console.log(dog.bark()); // Rex barks.
```

### ✅ Key Points

- `Object.create(Animal.prototype)` creates a new object that inherits from
  `Animal.prototype`.
- `Dog.prototype.constructor = Dog` resets the constructor (important).

---

## 6. 🔹 Inheritance using ES6 Classes

### ✅ Syntax

```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `${this.name} makes a noise.`;
  }
}

class Dog extends Animal {
  bark() {
    return `${this.name} barks.`;
  }
}

const rex = new Dog('Rex');
console.log(rex.speak()); // Rex makes a noise.
console.log(rex.bark()); // Rex barks.
```

### ✅ Benefits of ES6 Classes

- Cleaner and clearer syntax.
- Under the hood, still uses prototype-based inheritance.

---

## 7. 🔹 Prototype vs `__proto__`

| Term        | Description                                                                |
| ----------- | -------------------------------------------------------------------------- |
| `prototype` | A property of functions that is used when creating new objects using `new` |
| `__proto__` | A reference to the actual prototype object, used in the prototype chain    |

```js
function A() {}
const obj = new A();

console.log(obj.__proto__ === A.prototype); // true
```

---

## 8. 🔹 Checking Inheritance

### ✅ Using `instanceof`

```js
console.log(dog instanceof Dog); // true
console.log(dog instanceof Animal); // true
```

### ✅ Using `isPrototypeOf`

```js
console.log(Animal.prototype.isPrototypeOf(dog)); // true
```

---

## 9. 🔹 Prototype Pollution (⚠️)

### ❌ Dangerous Example

```js
Object.prototype.hacked = true;

console.log({}.hacked); // true — affects all objects!
```

✅ Always avoid modifying built-in prototypes like `Object.prototype`.

---

## 10. 🔹 Summary

| Concept         | Description                                              |
| --------------- | -------------------------------------------------------- |
| Prototype       | Internal object all JS objects have; enables inheritance |
| Prototype Chain | The chain JavaScript follows to find properties/methods  |
| Inheritance     | Objects can inherit from other objects via prototype     |
| `__proto__`     | Actual reference to prototype                            |
| `prototype`     | Property on constructor functions                        |
| ES6 `class`     | Cleaner syntax for prototype-based inheritance           |
