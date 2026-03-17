# 🏭 Factory Pattern in JavaScript

**Creating Objects Without Specifying Exact Classes**

## 🔍 Definition

The **Factory Pattern** is a design pattern that lets you create objects without
exposing the creation logic. You use a function (factory) to generate and return
new objects.

---

## ❓ Why Is It Important?

It provides a **clean and reusable way** to create many similar
objects—especially useful when:

- The exact object type isn’t known in advance
- Object creation is complex
- You want to avoid using `new` keyword everywhere

---

## 🧱 Syntax / Structure

```javascript
function createObject(type) {
  const obj = {};

  if (type === 'car') {
    obj.wheels = 4;
    obj.drive = () => console.log('Driving a car');
  } else if (type === 'bike') {
    obj.wheels = 2;
    obj.ride = () => console.log('Riding a bike');
  }

  return obj;
}
```

---

## 🧪 Examples

### ✨ Basic Example

```javascript
function createAnimal(type) {
  const animal = {};

  if (type === 'dog') {
    animal.sound = () => console.log('Woof!');
  } else if (type === 'cat') {
    animal.sound = () => console.log('Meow!');
  }

  return animal;
}

const pet1 = createAnimal('dog');
pet1.sound(); // Woof!
```

---

### 🌍 Real-World Use Case

Imagine a UI app that creates different types of buttons for web and mobile
platforms.

```javascript
function createButton(platform) {
  if (platform === 'web') {
    return {
      render: () => console.log('<button>Web Button</button>'),
    };
  } else if (platform === 'mobile') {
    return {
      render: () => console.log('Render iOS/Android button'),
    };
  }
}

const webBtn = createButton('web');
webBtn.render(); // <button>Web Button</button>

const mobileBtn = createButton('mobile');
mobileBtn.render(); // Render iOS/Android button
```

---

## 📌 When / Where to Use It

Use the Factory Pattern when:

- You want to **hide complex object creation logic**
- You need to **create many similar objects** with small differences
- Working with **abstract or unknown object types** (e.g., plugins, UI
  components, database connectors)
- You want **cleaner, more readable code**

---

## ⚠️ Gotchas / Tips

✅ **Do:**

- Use factory functions for reusable logic
- Keep them small and focused
- Combine with other patterns like Singleton or Module if needed

❌ **Avoid:**

- Overusing it for simple object creation
- Making factories too complicated or deeply nested
- Using it when a class or constructor is more appropriate
