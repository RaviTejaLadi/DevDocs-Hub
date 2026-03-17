# 📚 Context Loss in JavaScript: Problems with `this` Binding

## 🔍 Definition

**Context loss** refers to situations where the value of `this` changes
unexpectedly, especially when functions are passed around.

---

## ❓ Why is it Important?

In JavaScript, `this` refers to the object a function is bound to. Losing the
correct `this` can break your code — causing unexpected behavior, especially in
callbacks and event handlers.

---

## 🧱 Syntax/Structure

```javascript
const obj = {
  name: 'Alice',
  greet() {
    console.log("Hi, I'm " + this.name);
  },
};

setTimeout(obj.greet, 1000); // ❌ `this` is lost
```

---

## 💡 Examples

### 🔹 Basic Example

```javascript
const person = {
  name: 'John',
  sayHi() {
    console.log("Hi, I'm " + this.name);
  },
};

const greet = person.sayHi;
greet(); // ❌ undefined, because `this` is lost
```

✅ **Fix using `.bind()`**:

```javascript
const greetBound = person.sayHi.bind(person);
greetBound(); // ✅ Hi, I'm John
```

---

### 🌍 Real-World Use Case

```javascript
class Button {
  constructor(label) {
    this.label = label;
  }

  clickHandler() {
    console.log('Clicked ' + this.label);
  }

  attach() {
    document
      .querySelector('button')
      .addEventListener('click', this.clickHandler); // ❌ `this` is undefined
  }
}

const btn = new Button('Submit');
btn.attach();
```

✅ **Fix using arrow function or `bind`:**

```javascript
addEventListener('click', () => this.clickHandler()); // ✅ keeps `this`
```

---

## 🛠️ When/Where to Use It

- ✅ In **event handlers**
- ✅ In **class methods**
- ✅ In **callbacks**
- ✅ With **setTimeout/setInterval**
- ✅ When **passing functions around**

---

## ⚠️ Gotchas/Tips

- ❗ `this` in **regular functions** depends on how it's called, not where it's
  defined.
- ✅ Use **arrow functions** if you want to keep the context.
- ✅ Use **`.bind(this)`** to explicitly lock `this` to a specific object.
- ❌ Don’t assign methods to variables without binding them first.
