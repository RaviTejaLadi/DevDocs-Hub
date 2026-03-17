# 📘 Object.create()

Learn how to use `Object.create()` in JavaScript to create powerful and flexible
objects.

---

## 🔍 Definition

`Object.create()` creates a **new object** and sets the **prototype** of that
object to another object you specify.

> ✅ It’s a way to create objects that inherit from another object.

---

## 🎯 Why Is It Important?

It gives you full control over the **prototype chain**, helping you build
**cleaner**, more **efficient**, and **organized** code — especially when
working with inheritance.

---

## 🧱 Syntax / Structure

```javascript
Object.create(proto, propertiesObject?)
```

- `proto`: The object to use as the new object's prototype.
- `propertiesObject` _(optional)_: Additional properties to add to the new
  object.

---

## 🧪 Examples

### ⚙️ Basic Example

```javascript
const animal = {
  sound: 'Roar',
  speak() {
    console.log(this.sound);
  },
};

const lion = Object.create(animal);
lion.sound = 'Grrr';
lion.speak(); // Grrr
```

➡️ Here, `lion` inherits from `animal`.

---

### 🌍 Real-World Use Case

**Scenario**: Reusing behavior across similar objects, like a user role system.

```javascript
const user = {
  login() {
    console.log(`${this.name} has logged in.`);
  },
};

const admin = Object.create(user);
admin.name = 'Alice';
admin.login(); // Alice has logged in.
```

➡️ The `admin` object shares the `login` method without copying it. Efficient
and DRY (Don't Repeat Yourself)!

---

## 🧭 When / Where to Use It

Use `Object.create()` when you:

- Need simple **prototype-based inheritance**
- Want to **extend existing objects** cleanly
- Are building **custom object hierarchies**
- Need to create **shared behavior** without using classes

---

## ⚠️ Gotchas / Tips

🔸 **Access vs Own Properties** Inherited properties are not owned by the object
— use `hasOwnProperty()` to check.

🔸 **Avoid null prototypes unless needed**

```javascript
Object.create(null); // Creates an object with no prototype (no toString, etc.)
```

🔸 **Great for polyfills and patterns** Useful in older browsers or when
mimicking `class` behavior pre-ES6.
