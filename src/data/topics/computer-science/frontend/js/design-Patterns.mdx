# 🧠 JavaScript Design Patterns – A Structured Guide

## 1. **Constructor Pattern**

### ✅ Definition:

Used to create objects with the same properties and methods using a constructor
function.

### 🧩 Syntax:

```js
function ConstructorName(param1, param2) {
  this.prop1 = param1;
  this.prop2 = param2;

  this.method1 = function () {
    // logic
  };
}
```

### 🛠️ Use Case:

Create multiple instances with shared structure but different data.

### 📦 Example:

```js
function Car(brand, model) {
  this.brand = brand;
  this.model = model;
  this.display = function () {
    console.log(`${this.brand} ${this.model}`);
  };
}

const car1 = new Car('Toyota', 'Camry');
car1.display(); // Toyota Camry
```

---

## 2. **Module Pattern**

### ✅ Definition:

Encapsulates related functions and variables into a single scope, exposing only
public API.

### 🧩 Syntax:

```js
const Module = (function () {
  let privateVar = 'secret';

  function privateMethod() {
    return privateVar;
  }

  return {
    publicMethod: function () {
      return privateMethod();
    },
  };
})();
```

### 🛠️ Use Case:

Hiding implementation details and exposing only what's necessary.

### 📦 Example:

```js
const Counter = (function () {
  let count = 0;

  return {
    increment: function () {
      count++;
      return count;
    },
    reset: function () {
      count = 0;
    },
  };
})();

console.log(Counter.increment()); // 1
console.log(Counter.increment()); // 2
Counter.reset();
```

---

## 3. **Singleton Pattern**

### ✅ Definition:

Restricts the instantiation of a class to a single object.

### 🧩 Syntax:

```js
const Singleton = (function () {
  let instance;

  function createInstance() {
    return { id: Math.random() };
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();
```

### 🛠️ Use Case:

Maintain a single shared state or configuration.

### 📦 Example:

```js
const obj1 = Singleton.getInstance();
const obj2 = Singleton.getInstance();

console.log(obj1 === obj2); // true
```

---

## 4. **Factory Pattern**

### ✅ Definition:

Defines an interface for creating objects, allowing subclasses to alter the type
of objects that will be created.

### 🧩 Syntax:

```js
function CarFactory() {
  this.createCar = function (type) {
    let car;

    if (type === 'sedan') {
      car = new Sedan();
    } else if (type === 'suv') {
      car = new SUV();
    }

    car.type = type;
    return car;
  };
}
```

### 🛠️ Use Case:

When object creation is complex or needs to be abstracted.

### 📦 Example:

```js
function Sedan() {
  this.name = 'Sedan';
}
function SUV() {
  this.name = 'SUV';
}

const factory = new CarFactory();
const myCar = factory.createCar('suv');
console.log(myCar.name); // SUV
```

---

## 5. **Observer Pattern**

### ✅ Definition:

A subject maintains a list of observers and notifies them automatically of state
changes.

### 🧩 Syntax:

```js
function Subject() {
  this.observers = [];

  this.subscribe = function (fn) {
    this.observers.push(fn);
  };

  this.notify = function (data) {
    this.observers.forEach((fn) => fn(data));
  };
}
```

### 🛠️ Use Case:

Event systems, real-time data updates, pub-sub systems.

### 📦 Example:

```js
const news = new Subject();

function subscriber1(data) {
  console.log('Subscriber 1:', data);
}
function subscriber2(data) {
  console.log('Subscriber 2:', data);
}

news.subscribe(subscriber1);
news.subscribe(subscriber2);

news.notify('Breaking News!');
// Subscriber 1: Breaking News!
// Subscriber 2: Breaking News!
```

---

## 6. **Prototype Pattern**

### ✅ Definition:

Use a prototype to share properties and methods across all instances.

### 🧩 Syntax:

```js
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  return `${this.name} makes a sound.`;
};
```

### 🛠️ Use Case:

Memory-efficient method sharing across instances.

### 📦 Example:

```js
const dog = new Animal('Dog');
console.log(dog.speak()); // Dog makes a sound.
```

---

## 7. **Command Pattern**

### ✅ Definition:

Encapsulates a request as an object, separating the command from the object that
executes it.

### 🧩 Syntax:

```js
function Command(execute, undo) {
  this.execute = execute;
  this.undo = undo;
}
```

### 🛠️ Use Case:

Undo/redo systems, UI interaction history.

### 📦 Example:

```js
function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

const addCommand = new Command(
  () => add(5, 2),
  () => subtract(7, 2)
);

console.log(addCommand.execute()); // 7
console.log(addCommand.undo()); // 5
```

---

## 8. **Strategy Pattern**

### ✅ Definition:

Defines a family of algorithms and makes them interchangeable.

### 🧩 Syntax:

```js
function Context(strategy) {
  this.strategy = strategy;
  this.executeStrategy = function (a, b) {
    return this.strategy(a, b);
  };
}
```

### 🛠️ Use Case:

Switch between multiple behaviors at runtime.

### 📦 Example:

```js
function add(a, b) {
  return a + b;
}
function multiply(a, b) {
  return a * b;
}

const context = new Context(add);
console.log(context.executeStrategy(3, 4)); // 7

context.strategy = multiply;
console.log(context.executeStrategy(3, 4)); // 12
```

---

## 9. **Decorator Pattern**

### ✅ Definition:

Adds new behavior to existing objects dynamically.

### 🧩 Syntax:

```js
function baseComponent() {
  return {
    operation: function () {
      return 'Base';
    },
  };
}

function decorator(component) {
  const baseOperation = component.operation();
  component.operation = function () {
    return `${baseOperation} + Decorated`;
  };
  return component;
}
```

### 🛠️ Use Case:

Add responsibilities to individual objects without changing their structure.

### 📦 Example:

```js
let comp = baseComponent();
comp = decorator(comp);

console.log(comp.operation()); // Base + Decorated
```

---

## 10. **Proxy Pattern**

### ✅ Definition:

Provides a placeholder to control access to another object.

### 🧩 Syntax:

```js
const handler = {
  get: function (target, prop) {
    console.log(`Getting ${prop}`);
    return target[prop];
  },
};

const proxy = new Proxy(targetObj, handler);
```

### 🛠️ Use Case:

Lazy loading, logging, access control, validation.

### 📦 Example:

```js
const user = {
  name: 'Ravi',
  age: 25,
};

const proxy = new Proxy(user, {
  get(target, key) {
    console.log(`Accessed: ${key}`);
    return target[key];
  },
});

console.log(proxy.name); // Accessed: name -> Ravi
```

# Summary Table

| Pattern   | Type       | Purpose                                |
| --------- | ---------- | -------------------------------------- |
| Factory   | Creational | Simplifies object creation             |
| Singleton | Creational | Single global instance                 |
| Module    | Structural | Encapsulates private data              |
| Observer  | Behavioral | Notifies all observers on state change |
| Command   | Behavioral | Encapsulates commands                  |
| Strategy  | Behavioral | Chooses behavior at runtime            |
| Prototype | Creational | Clones object from prototype           |
| Decorator | Structural | Adds functionality dynamically         |
