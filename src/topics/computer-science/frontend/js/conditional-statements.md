# Conditional Statements: Complete Guide 🚦

## 1. If Statement ❓

The `if` statement executes code only when a specified condition is true.

### Syntax

```javascript
if (condition) {
  // code to be executed if condition is true
}
```

### Flow Diagram

```bash
START
  ↓
[Check condition] → ❌ NO → END
  ↓ ✅ YES
[Execute code block]
  ↓
END
```

### Example

```javascript
let age = 18;
if (age >= 18) {
  console.log('You are eligible to vote!');
}
```

### Execution Table

| age Value | Condition (age >= 18) | Result        | Output                      |
| --------- | --------------------- | ------------- | --------------------------- |
| 18        | ✅ true               | Execute block | "You are eligible to vote!" |
| 16        | ❌ false              | Skip block    | No output                   |
| 25        | ✅ true               | Execute block | "You are eligible to vote!" |

---

## 2. If-Else Statement 🔀

The `if-else` statement provides an alternative path when the condition is
false.

### Syntax

```javascript
if (condition) {
  // code if condition is true
} else {
  // code if condition is false
}
```

### Flow Diagram

```bash
START
  ↓
[Check condition] → ❌ NO → [Execute else block]
  ↓ ✅ YES              ↓
[Execute if block]   END
  ↓                  ↑
  END ──────────────┘
```

### Example

```javascript
let temperature = 25;
if (temperature > 30) {
  console.log("It's hot outside!");
} else {
  console.log("It's pleasant weather.");
}
```

### Execution Table

| temperature | Condition (temp > 30) | Branch Executed | Output                   |
| ----------- | --------------------- | --------------- | ------------------------ |
| 35          | ✅ true               | if block        | "It's hot outside!"      |
| 25          | ❌ false              | else block      | "It's pleasant weather." |
| 30          | ❌ false              | else block      | "It's pleasant weather." |

---

## 3. If-Else If-Else Statement 🧩

Multiple conditions can be checked using `else if` statements.

### Syntax

```javascript
if (condition1) {
  // code if condition1 is true
} else if (condition2) {
  // code if condition2 is true
} else if (condition3) {
  // code if condition3 is true
} else {
  // code if all conditions are false
}
```

### Flow Diagram

```bash
START
  ↓
[Check condition1] → ❌ NO → [Check condition2] → ❌ NO → [Check condition3] → ❌ NO → [Execute else]
  ↓ ✅ YES                    ↓ ✅ YES                    ↓ ✅ YES                    ↓
[Execute block1]         [Execute block2]         [Execute block3]         END
  ↓                         ↓                         ↓                     ↑
  END ←─────────────────── END ←─────────────────── END ←───────────────────┘
```

### Example

```javascript
let grade = 85;
if (grade >= 90) {
  console.log('Grade: A');
} else if (grade >= 80) {
  console.log('Grade: B');
} else if (grade >= 70) {
  console.log('Grade: C');
} else if (grade >= 60) {
  console.log('Grade: D');
} else {
  console.log('Grade: F');
}
```

### Execution Table

| grade | Condition 1 (≥90) | Condition 2 (≥80) | Condition 3 (≥70) | Condition 4 (≥60) | Result          | Output     |
| ----- | ----------------- | ----------------- | ----------------- | ----------------- | --------------- | ---------- |
| 95    | ✅ true           | -                 | -                 | -                 | Execute block 1 | "Grade: A" |
| 85    | ❌ false          | ✅ true           | -                 | -                 | Execute block 2 | "Grade: B" |
| 75    | ❌ false          | ❌ false          | ✅ true           | -                 | Execute block 3 | "Grade: C" |
| 65    | ❌ false          | ❌ false          | ❌ false          | ✅ true           | Execute block 4 | "Grade: D" |
| 45    | ❌ false          | ❌ false          | ❌ false          | ❌ false          | Execute else    | "Grade: F" |

---

## 4. Switch Statement 🔄

The `switch` statement compares a value against multiple cases.

### Syntax

```javascript
switch (expression) {
  case value1:
    // code for case 1
    break;
  case value2:
    // code for case 2
    break;
  case value3:
    // code for case 3
    break;
  default:
  // code if no case matches
}
```

### Flow Diagram

```bash
START
  ↓
[Evaluate expression]
  ↓
[Compare with case1] → 🎯 MATCH → [Execute case1] → [break?] → ✅ YES → END
  ↓ ❌ NO MATCH                                      ↓ ❌ NO
[Compare with case2] → 🎯 MATCH → [Execute case2] → [break?] → ✅ YES → END
  ↓ ❌ NO MATCH                                      ↓ ❌ NO
[Compare with case3] → 🎯 MATCH → [Execute case3] → [break?] → ✅ YES → END
  ↓ ❌ NO MATCH                                      ↓ ❌ NO
[Execute default] ──────────────────────────────→ END
```

### Example

```javascript
let day = 'Monday';
switch (day) {
  case 'Monday':
    console.log('Start of work week');
    break;
  case 'Tuesday':
  case 'Wednesday':
  case 'Thursday':
    console.log('Midweek');
    break;
  case 'Friday':
    console.log('TGIF!');
    break;
  case 'Saturday':
  case 'Sunday':
    console.log('Weekend!');
    break;
  default:
    console.log('Invalid day');
}
```

### Switch vs If-Else Comparison

| Aspect              | Switch 🔄                 | If-Else 🔀                      |
| ------------------- | ------------------------- | ------------------------------- |
| **Comparison Type** | Strict equality (===)     | Any boolean expression          |
| **Multiple Values** | Easy with fall-through    | Requires OR operators           |
| **Performance**     | 🚀 Faster for many cases  | 🐢 Slower for many conditions   |
| **Readability**     | Clean for discrete values | Better for ranges/complex logic |
| **Break Required**  | ✅ Yes                    | ❌ No                           |

---

## 5. Ternary Operator (Conditional Operator) ⚡

A shorthand way to write simple if-else statements.

### Syntax

```javascript
condition ? valueIfTrue : valueIfFalse;
```

### Visual Representation

```bash
condition
    ↓
   [?] ────→ ✅ TRUE  ────→ valueIfTrue
    ↓
   [:]
    ↓
  ❌ FALSE ────→ valueIfFalse
```

### Example

```javascript
let age = 20;
let status = age >= 18 ? 'Adult' : 'Minor';
console.log(status); // Output: "Adult"

// Equivalent if-else:
let status2;
if (age >= 18) {
  status2 = 'Adult';
} else {
  status2 = 'Minor';
}
```

### Execution Table

| age | Condition (age >= 18) | Result              | Value Assigned |
| --- | --------------------- | ------------------- | -------------- |
| 20  | ✅ true               | Return first value  | "Adult"        |
| 15  | ❌ false              | Return second value | "Minor"        |
| 18  | ✅ true               | Return first value  | "Adult"        |

### Nested Ternary Example

```javascript
let score = 85;
let grade =
  score >= 90
    ? 'A'
    : score >= 80
    ? 'B'
    : score >= 70
    ? 'C'
    : score >= 60
    ? 'D'
    : 'F';
```

---

## 6. Logical Operators in Conditionals 🤝

### AND Operator (&&) 🟩

```javascript
let age = 25;
let hasLicense = true;

if (age >= 18 && hasLicense) {
  console.log('Can drive!');
}
```

### Truth Table for AND (&&)

| Condition 1 | Condition 2 | Result   |
| ----------- | ----------- | -------- |
| ✅ true     | ✅ true     | ✅ true  |
| ✅ true     | ❌ false    | ❌ false |
| ❌ false    | ✅ true     | ❌ false |
| ❌ false    | ❌ false    | ❌ false |

### OR Operator (||) 🟦

```javascript
let isWeekend = true;
let isHoliday = false;

if (isWeekend || isHoliday) {
  console.log('No work today!');
}
```

### Truth Table for OR (||)

| Condition 1 | Condition 2 | Result   |
| ----------- | ----------- | -------- |
| ✅ true     | ✅ true     | ✅ true  |
| ✅ true     | ❌ false    | ✅ true  |
| ❌ false    | ✅ true     | ✅ true  |
| ❌ false    | ❌ false    | ❌ false |

### NOT Operator (!) 🔄

```javascript
let isRaining = false;

if (!isRaining) {
  console.log("Let's go for a walk!");
}
```

### Truth Table for NOT (!)

| Condition | Result   |
| --------- | -------- |
| ✅ true   | ❌ false |
| ❌ false  | ✅ true  |

---

## Conditional Statement Comparison 🏆

| Statement Type | Use Case                 | Syntax Complexity | Performance            | Best For                          |
| -------------- | ------------------------ | ----------------- | ---------------------- | --------------------------------- |
| **if**         | Single condition         | 🟢 Simple         | 🚀 Fast                | Basic true/false logic            |
| **if-else**    | Two outcomes             | 🟢 Simple         | 🚀 Fast                | Binary decisions                  |
| **if-else if** | Multiple conditions      | 🟡 Medium         | 🟡 Medium              | Range checking, multiple criteria |
| **switch**     | Multiple discrete values | 🟡 Medium         | 🚀 Fast for many cases | Menu systems, state machines      |
| **ternary**    | Simple assignment        | ⚡ Compact        | 🚀 Fast                | Inline conditional assignment     |

---

## Truthy and Falsy Values 🎭

### Falsy Values in JavaScript

| Value       | Type      | Example          |
| ----------- | --------- | ---------------- |
| `false`     | Boolean   | `if (false)`     |
| `0`         | Number    | `if (0)`         |
| `-0`        | Number    | `if (-0)`        |
| `0n`        | BigInt    | `if (0n)`        |
| `""`        | String    | `if ("")`        |
| `null`      | null      | `if (null)`      |
| `undefined` | undefined | `if (undefined)` |
| `NaN`       | Number    | `if (NaN)`       |

### Truthy Values (Everything Else)

```javascript
// All these are truthy:
if (1) {
} // number (non-zero)
if ('hello') {
} // non-empty string
if ([]) {
} // empty array
if ({}) {
} // empty object
if (function () {}) {
} // function
```

---

## Advanced Conditional Patterns 🧠

### Guard Clauses 🚪

```javascript
function processUser(user) {
  // Guard clauses - early returns
  if (!user) {
    console.log('No user provided');
    return;
  }

  if (!user.email) {
    console.log('User email is required');
    return;
  }

  if (user.age < 18) {
    console.log('User must be 18 or older');
    return;
  }

  // Main logic here
  console.log('Processing user:', user.name);
}
```

### Short-Circuit Evaluation ⚡

#### AND Short-Circuit (&&)

```javascript
let user = { name: 'Alice' };

// Only execute if user exists
user && console.log(user.name); // Output: "Alice"

// Traditional if statement equivalent:
if (user) {
  console.log(user.name);
}
```

#### OR Short-Circuit (||)

```javascript
let username = null;
let displayName = username || 'Guest';
console.log(displayName); // Output: "Guest"

// Traditional if-else equivalent:
let displayName2;
if (username) {
  displayName2 = username;
} else {
  displayName2 = 'Guest';
}
```

#### Nullish Coalescing (??)

```javascript
let count = 0;
let defaultCount = count ?? 5;
console.log(defaultCount); // Output: 0 (because 0 is not null/undefined)

let score = null;
let defaultScore = score ?? 100;
console.log(defaultScore); // Output: 100
```

### Optional Chaining (?.) 🔗

```javascript
let user = {
  profile: {
    address: {
      city: 'New York',
    },
  },
};

// Safe property access
let city = user?.profile?.address?.city;
console.log(city); // Output: "New York"

// Without optional chaining (traditional):
let city2;
if (user && user.profile && user.profile.address) {
  city2 = user.profile.address.city;
}
```

---

## Best Practices 🌟

### ✅ Do:

- Use `===` instead of `==` for comparisons
- Keep conditions simple and readable
- Use meaningful variable names in conditions
- Consider using guard clauses for early returns
- Use ternary operators for simple assignments only

```javascript
// Good
if (user.age >= MINIMUM_AGE && user.hasValidId) {
  allowEntry();
}

// Good - ternary for simple assignment
const message = isLoggedIn ? 'Welcome back!' : 'Please log in';
```

### ❌ Don't:

- Use deeply nested conditions
- Compare boolean values to `true`/`false`
- Use ternary operators for complex logic
- Forget break statements in switch cases

```javascript
// Bad - unnecessary boolean comparison
if (isActive === true) {
}

// Good
if (isActive) {
}

// Bad - complex nested ternary
const result = condition1
  ? condition2
    ? value1
    : value2
  : condition3
  ? value3
  : value4;

// Good - use if-else for complex logic
let result;
if (condition1) {
  result = condition2 ? value1 : value2;
} else {
  result = condition3 ? value3 : value4;
}
```

---

## Performance Tips 🚀

### Condition Ordering

```javascript
// Put most likely conditions first
if (commonCondition) {
  // Most frequent case
} else if (lessCommonCondition) {
  // Less frequent case
} else {
  // Rare case
}
```

### Switch vs If-Else Performance

```bash
For 2-3 conditions:    if-else ≈ switch
For 4-10 conditions:   switch > if-else
For 10+ conditions:    switch >> if-else (much faster)
```

Understanding these conditional statements will help you write more efficient
and readable JavaScript code! ✨
