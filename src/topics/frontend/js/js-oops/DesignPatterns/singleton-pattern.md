# 🧠 Singleton Pattern: Ensuring Only One Instance of a Class Exists

## 📚 Table of Contents

1. 🔍 [Definition](#definition)
2. 🎯 [Why is it Important?](#why-is-it-important)
3. 🏗️ [Syntax / Structure](#syntax--structure)
4. 💡 [Examples](#examples)

   - ⚙️ [Basic Example](#basic-example)
   - 🌐 [Real-World Use Case](#real-world-use-case)

5. 📌 [When / Where to Use It](#when--where-to-use-it)
6. ⚠️ [Gotchas / Tips](#gotchas--tips)

---

## 🔍 Definition

The **Singleton Pattern** ensures that a class has **only one instance** and
provides a **global point of access** to it.

---

## 🎯 Why is it Important?

It’s useful when **only one object** is needed to coordinate actions across a
system—like a single database connection, logger, or configuration manager.

---

## 🏗️ Syntax / Structure

```javascript
class Singleton {
  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    }

    this.data = "I'm the only instance!";
    Singleton.instance = this;
  }
}

const obj1 = new Singleton();
const obj2 = new Singleton();

console.log(obj1 === obj2); // true
```

---

## 💡 Examples

### ⚙️ Basic Example

```javascript
class Counter {
  constructor() {
    if (Counter.instance) {
      return Counter.instance;
    }

    this.count = 0;
    Counter.instance = this;
  }

  increment() {
    this.count++;
  }

  getCount() {
    return this.count;
  }
}

const c1 = new Counter();
c1.increment();

const c2 = new Counter();
console.log(c2.getCount()); // 1 (same instance as c1)
```

### 🌐 Real-World Use Case: App Configuration

```javascript
class AppConfig {
  constructor() {
    if (AppConfig.instance) return AppConfig.instance;

    this.settings = {
      theme: 'dark',
      language: 'en',
    };

    AppConfig.instance = this;
  }

  get(key) {
    return this.settings[key];
  }

  set(key, value) {
    this.settings[key] = value;
  }
}

const config1 = new AppConfig();
config1.set('language', 'fr');

const config2 = new AppConfig();
console.log(config2.get('language')); // "fr"
```

---

## 📌 When / Where to Use It

- 📝 App configuration or settings
- 🔄 Global state or cache manager
- 📦 Shared services like a logger, API handler, or database connector
- 🧪 In test environments where a consistent instance is needed

---

## ⚠️ Gotchas / Tips

- ❌ Avoid overusing singletons—they can make testing and debugging harder.
- ♻️ Singleton can be implemented using closures or modules too.
- ⚠️ Ensure it doesn’t get reset accidentally by not properly handling instance
  logic.
