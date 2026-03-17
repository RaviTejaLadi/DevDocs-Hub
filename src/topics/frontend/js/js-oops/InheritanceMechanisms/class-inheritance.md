# 📚 Class Inheritance - Explained Simply

## 🔍 Definition

**Class inheritance** in JavaScript allows one class to inherit properties and
methods from another class using the `extends` keyword.

---

## ❓ Why is it Important?

It promotes **code reuse**, **organization**, and helps build **hierarchies** in
object-oriented programming — making your code cleaner and more maintainable.

---

## 🧱 Syntax/Structure

```javascript
class ParentClass {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
}

class ChildClass extends ParentClass {
  constructor(name, age) {
    super(name); // calls ParentClass constructor
    this.age = age;
  }

  showAge() {
    console.log(`I'm ${this.age} years old.`);
  }
}
```

---

## 💡 Examples

### 🧪 Basic Example

```javascript
class Animal {
  speak() {
    console.log('Animal speaks');
  }
}

class Dog extends Animal {
  bark() {
    console.log('Woof!');
  }
}

const myDog = new Dog();
myDog.speak(); // Animal speaks
myDog.bark(); // Woof!
```

### 🌍 Real-World Use Case

Imagine a system for vehicles:

```javascript
class Vehicle {
  constructor(make) {
    this.make = make;
  }

  drive() {
    console.log(`${this.make} is driving.`);
  }
}

class ElectricCar extends Vehicle {
  charge() {
    console.log(`${this.make} is charging.`);
  }
}

const tesla = new ElectricCar('Tesla');
tesla.drive(); // Tesla is driving.
tesla.charge(); // Tesla is charging.
```

---

## 🛠️ When/Where to Use It

- Building apps with shared behavior (e.g., **User**, **Admin**, **Guest**
  classes).
- In UI frameworks/components (e.g., **BaseButton**, **IconButton**).
- Game development: **Character → Player → Enemy**.
- APIs/models that share structure but have custom features.

---

## ⚠️ Gotchas/Tips

✅ Use `super()` in the child constructor **before** using `this`. ❌ Don't
overuse inheritance — prefer **composition** when it makes code simpler. ✅
Group shared logic in the parent, but allow children to override methods as
needed. 🔁 You can use `super.methodName()` to call the parent’s version of a
method. 📄 ES6 classes are syntactic sugar over JavaScript’s prototype-based
inheritance — good to know!
