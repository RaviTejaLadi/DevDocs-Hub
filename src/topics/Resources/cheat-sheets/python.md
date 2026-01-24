# Python Cheat Sheet

## Table of Contents

1. [Variables & Data Types](#1.variables-&-data-types)
2. [Operators](#2.operators)
3. [Strings](#3.strings)
4. [Lists](#4.lists)
5. [Dictionaries](#5.dictionaries)
6. [Tuples](#6.tuples)
7. [Sets](#7.sets)
8. [Conditionals](#8.conditionals)
9. [Loops](#9.loops)
10. [Functions](#10.functions)
11. [File Handling](#11.file-handling)
12. [Exception Handling](#12.exception-handling)
13. [Classes & OOP](#13.classes-&-oop)

---

### 1.Variables & Data Types

| **Syntax**                 | **Description**  |
| -------------------------- | ---------------- |
| `x = 5`                    | Integer variable |
| `y = 3.14`                 | Float variable   |
| `name = "Alice"`           | String variable  |
| `is_valid = True`          | Boolean variable |
| `nums = [1, 2, 3]`         | List             |
| `person = {"name": "Bob"}` | Dictionary       |
| `coordinates = (10, 20)`   | Tuple            |
| `unique_nums = {1, 2, 3}`  | Set              |

---

### 2.Operators

| **Operator** | **Description**  |
| ------------ | ---------------- |
| `+ - * /`    | Arithmetic       |
| `%`          | Modulus          |
| `**`         | Exponentiation   |
| `//`         | Floor division   |
| `== !=`      | Comparison       |
| `< > <= >=`  | Comparison       |
| `and or not` | Logical          |
| `in`         | Membership check |

---

### 3.Strings

| **Method**                | **Description**         |
| ------------------------- | ----------------------- |
| `len(s)`                  | String length           |
| `s.lower()`               | Convert to lowercase    |
| `s.upper()`               | Convert to uppercase    |
| `s.strip()`               | Remove whitespace       |
| `s.split()`               | Split into list         |
| `s.replace("old", "new")` | Replace substring       |
| `f"Hello {name}"`         | f-strings (Python 3.6+) |

---

### 4.Lists

| **Method**      | **Description** |
| --------------- | --------------- |
| `len(lst)`      | List length     |
| `lst.append(x)` | Add element     |
| `lst.remove(x)` | Remove element  |
| `lst.pop(i)`    | Remove at index |
| `lst.sort()`    | Sort list       |
| `lst.reverse()` | Reverse list    |
| `lst[1:3]`      | Slicing         |

---

### 5.Dictionaries

| **Method**               | **Description**     |
| ------------------------ | ------------------- |
| `dict.keys()`            | Get all keys        |
| `dict.values()`          | Get all values      |
| `dict.items()`           | Get key-value pairs |
| `dict.get(key, default)` | Safe key access     |
| `dict.update(new_dict)`  | Merge dictionaries  |

---

### 6.Tuples

| **Method**      | **Description**       |
| --------------- | --------------------- |
| `t = (1, 2, 3)` | Immutable sequence    |
| `t.count(x)`    | Count occurrences     |
| `t.index(x)`    | Find index of element |

---

### 7.Sets

| **Method**          | **Description** |
| ------------------- | --------------- |
| `s.add(x)`          | Add element     |
| `s.remove(x)`       | Remove element  |
| `s.union(t)`        | Union of sets   |
| `s.intersection(t)` | Intersection    |

---

### 8.Conditionals

```python
if x > 0:
    print("Positive")
elif x == 0:
    print("Zero")
else:
    print("Negative")
```

---

### 9.Loops

| **Loop**   | **Example**          |
| ---------- | -------------------- |
| `for`      | `for i in range(5):` |
| `while`    | `while x < 10:`      |
| `break`    | Exit loop            |
| `continue` | Skip iteration       |

---

### 10.Functions

```python
def greet(name="User"):
    return f"Hello, {name}"
```

---

### 11.File Handling

| **Mode** | **Description** |
| -------- | --------------- |
| `"r"`    | Read            |
| `"w"`    | Write           |
| `"a"`    | Append          |
| `"rb"`   | Read binary     |

```python
with open("file.txt", "r") as f:
    content = f.read()
```

---

### 12.Exception Handling

```python
try:
    x = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero!")
finally:
    print("Done")
```

---

### 13.Classes & OOP

```python
class Person:
    def __init__(self, name):
        self.name = name

    def greet(self):
        return f"Hello, {self.name}"

p = Person("Alice")
print(p.greet())
```

---

This cheat sheet covers essential Python syntax. Bookmark it for quick
reference! 🚀 **[⬆ Back to Top](#table-of-contents)**
