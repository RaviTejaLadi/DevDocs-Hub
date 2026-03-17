# 🌱 Prototypal Inheritance - Explained Simply

## 🔍 Definition

Prototypal Inheritance allows an object to inherit properties and methods from
another object in JavaScript.

In simpler terms: **objects can use other objects as blueprints**.

---

## 🎯 Why Is It Important?

It enables **code reuse** and helps create **efficient, memory-friendly
programs** by sharing behavior between objects without duplication.

---

## 🧱 Syntax/Structure

```javascript
const parent = {
  greet() {
    console.log('Hello from parent!');
  },
};

const child = Object.create(parent);
child.greet(); // Inherits greet method
```

- `Object.create(obj)` creates a new object with `obj` as its prototype.

---

## 🧪 Examples

### 📌 Basic Example

```javascript
const animal = {
  eats: true,
};

const rabbit = Object.create(animal);
console.log(rabbit.eats); // true (inherited from animal)
```

- `rabbit` does not have `eats`, but it gets it from `animal`.

---

### 🌍 Real-World Use Case

Imagine a game:

```javascript
const character = {
  attack() {
    console.log('Attacks with a sword!');
  },
};

const knight = Object.create(character);
knight.name = 'Sir Lancelot';

console.log(knight.name); // Sir Lancelot
knight.attack(); // Attacks with a sword!
```

Here, `knight` uses the shared `attack()` method from `character` but has its
own `name`.

---

## 📌 When/Where to Use It

Use prototypal inheritance when:

- You want multiple objects to **share methods** (e.g., game characters, UI
  components).
- You’re creating **lightweight, object-based hierarchies**.
- You want more **flexibility than class-based inheritance**.

---

## ⚠️ Gotchas & Tips

- 🧠 **Don’t over-nest**: Deep prototype chains are hard to debug.
- ✍️ **Use `Object.create(null)`** if you need a pure object without inherited
  methods like `toString`.
- 🛠️ **Don’t modify native prototypes** (e.g., `Array.prototype`) — it can break
  other code.
- 🔍 Use `hasOwnProperty()` to check if a property is **directly on the
  object**:

```javascript
rabbit.hasOwnProperty('eats'); // false
```
