# 🧠 JavaScript Hoisting

---

## 📘 1. Definition

**Hoisting** is JavaScript's default behavior of moving **declarations** (not
initializations) **to the top of the current scope** (script or function)
**before code execution**.

---

## 📐 2. Syntax Concept

```js
console.log(x); // undefined (not ReferenceError)
var x = 10;
```

**Internally interpreted as:**

```js
var x;
console.log(x); // undefined
x = 10;
```

---

## 🛠️ 3. What Gets Hoisted?

| Type                  | Hoisted? | Initialized? | Notes                                       |
| --------------------- | -------- | ------------ | ------------------------------------------- |
| `var` declarations    | ✅ Yes   | ❌ No        | Initialized with `undefined`                |
| `let` and `const`     | ✅ Yes   | ❌ No        | Hoisted but in **Temporal Dead Zone (TDZ)** |
| Function Declarations | ✅ Yes   | ✅ Yes       | Fully hoisted (code + body)                 |
| Function Expressions  | ❌ No    | ❌ No        | Not hoisted if assigned to variable         |
| Class Declarations    | ✅ Yes   | ❌ No        | Also in TDZ like `let` and `const`          |

---

## 🧪 4. Usage & Examples

### 4.1 `var` Hoisting

```js
console.log(a); // undefined
var a = 5;
```

🧠 **Explanation**:

```js
var a;
console.log(a); // undefined
a = 5;
```

---

### 4.2 `let` and `const` Hoisting

```js
console.log(b); // ❌ ReferenceError: Cannot access 'b' before initialization
let b = 10;
```

**Why?** Because `let`/`const` are hoisted but placed in **Temporal Dead Zone
(TDZ)** until their declaration line.

---

### 4.3 Function Declaration Hoisting

```js
sayHello(); // ✅ "Hello World"

function sayHello() {
  console.log('Hello World');
}
```

🧠 Fully hoisted: declaration + function body.

---

### 4.4 Function Expression Hoisting

```js
sayHi(); // ❌ TypeError: sayHi is not a function

var sayHi = function () {
  console.log('Hi');
};
```

🧠 Explanation:

```js
var sayHi; // hoisted
sayHi(); // ❌ TypeError
sayHi = function () {
  console.log('Hi');
};
```

---

## 📊 5. Visual Diagram (Text-Based)

```
Phase 1: Memory Creation (Hoisting Phase)

| Identifier | Memory Location | Value         |
|------------|------------------|---------------|
| var a      | Allocated        | undefined     |
| let b      | Allocated        | <TDZ>         |
| sayHello   | Allocated        | [Function]    |
| sayHi      | Allocated        | undefined     |

Phase 2: Execution

Code executes line by line using the above memory context.
```

---

## 🧱 6. Best Practices

✅ Always **declare variables at the top** of their scope. ✅ Prefer `let` and
`const` over `var` to avoid hoisting-related bugs. ✅ Define functions before
calling them (even though declarations are hoisted). ❌ Avoid using undeclared
variables.

---

## ⚠️ 7. Common Pitfalls

### Example 1

```js
console.log(a); // undefined
var a = 10;
```

✅ Safe but confusing. Avoid.

### Example 2

```js
console.log(b); // ❌ ReferenceError
let b = 20;
```

⚠️ Happens due to Temporal Dead Zone.

---

## 🧩 8. Interview Tricky Example

```js
function test() {
  console.log(x); // undefined
  var x = 100;

  if (false) {
    var x = 200;
  }

  console.log(x); // 100
}
test();
```

🧠 Why? Because `var` is function-scoped and hoisted to the top of `test()`.

---

## 🧾 9. Summary Table

| Keyword              | Hoisted | Initial Value  | Scope           | TDZ Exists |
| -------------------- | ------- | -------------- | --------------- | ---------- |
| `var`                | ✅ Yes  | `undefined`    | Function/Global | ❌ No      |
| `let`                | ✅ Yes  | ❌ Error (TDZ) | Block           | ✅ Yes     |
| `const`              | ✅ Yes  | ❌ Error (TDZ) | Block           | ✅ Yes     |
| Function Declaration | ✅ Yes  | \[Function]    | Function/Global | ❌ No      |
| Function Expression  | ❌ No   | ❌ Error       | Block           | ✅ Yes     |

---

## 📚 10. Real-World Tip

If you're debugging weird `undefined` values, check for **`var` hoisting** or
misplaced declarations. Use **ESLint** rules like `no-use-before-define` to
catch issues early.
