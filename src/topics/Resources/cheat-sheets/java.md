# Java Cheat Sheet in Table Format

## Table of Contents

1. [Basic Syntax](#basic-syntax)
2. [Data Types](#data-types)
3. [Control Flow](#control-flow)
4. [Arrays](#arrays)
5. [Methods (Functions)](<#methods-(functions)>)
6. [Object-Oriented Programming (OOP)](<#object-oriented-programming-(oop)>)
7. [Exception Handling](#exception-handling)
8. [Collections Framework](#collections-framework)

## Basic Syntax

| **Category**         | **Syntax**                                       | **Example**                                      |
| -------------------- | ------------------------------------------------ | ------------------------------------------------ |
| **Class Definition** | `class ClassName { ... }`                        | `class Main { ... }`                             |
| **Main Method**      | `public static void main(String[] args) { ... }` | `public static void main(String[] args) { ... }` |
| **Print to Console** | `System.out.println();`                          | `System.out.println("Hello");`                   |
| **Variables**        | `type varName = value;`                          | `int num = 10;`                                  |
| **Constants**        | `final type VAR_NAME = value;`                   | `final double PI = 3.14;`                        |

---

## Data Types

| **Type**  | **Size** | **Range**          | **Example**              |
| --------- | -------- | ------------------ | ------------------------ |
| `byte`    | 1 byte   | -128 to 127        | `byte b = 100;`          |
| `short`   | 2 bytes  | -32,768 to 32,767  | `short s = 5000;`        |
| `int`     | 4 bytes  | -2³¹ to 2³¹-1      | `int num = 100000;`      |
| `long`    | 8 bytes  | -2⁶³ to 2⁶³-1      | `long l = 15000000000L;` |
| `float`   | 4 bytes  | ~±3.4e38           | `float f = 5.75f;`       |
| `double`  | 8 bytes  | ~±1.7e308          | `double d = 19.99;`      |
| `boolean` | 1 bit    | `true`/`false`     | `boolean flag = true;`   |
| `char`    | 2 bytes  | Unicode characters | `char c = 'A';`          |

---

## Control Flow

| **Statement**      | **Syntax**                                        | **Example**                       |
| ------------------ | ------------------------------------------------- | --------------------------------- |
| **If-Else**        | `if (cond) { ... } else { ... }`                  | `if (x > 0) { ... }`              |
| **Switch**         | `switch(var) { case x: ... break; default: ... }` | `switch(day) { case 1: ... }`     |
| **For Loop**       | `for (init; cond; incr) { ... }`                  | `for (int i=0; i<5; i++) { ... }` |
| **While Loop**     | `while (cond) { ... }`                            | `while (x < 10) { ... }`          |
| **Do-While Loop**  | `do { ... } while (cond);`                        | `do { ... } while (x < 5);`       |
| **Break/Continue** | `break;` / `continue;`                            | `if (x==5) break;`                |

---

## Arrays

| **Operation**      | **Syntax**                       | **Example**               |
| ------------------ | -------------------------------- | ------------------------- |
| **Declare Array**  | `type[] arrName;`                | `int[] nums;`             |
| **Initialize**     | `arrName = new type[size];`      | `nums = new int[5];`      |
| **Shortcut Init**  | `type[] arrName = {val1, val2};` | `int[] nums = {1, 2, 3};` |
| **Access Element** | `arrName[index]`                 | `nums[0] = 10;`           |
| **Length**         | `arrName.length`                 | `int len = nums.length;`  |

---

## Methods (Functions)

| **Syntax**                              | **Example**                                  |
| --------------------------------------- | -------------------------------------------- |
| `returnType methodName(params) { ... }` | `int add(int a, int b) { return a + b; }`    |
| `void methodName() { ... }` (no return) | `void greet() { System.out.println("Hi"); }` |

---

## Object-Oriented Programming (OOP)

| **Concept**           | **Syntax**                             | **Example**                                    |
| --------------------- | -------------------------------------- | ---------------------------------------------- |
| **Class**             | `class ClassName { fields; methods; }` | `class Person { String name; }`                |
| **Object Creation**   | `ClassName obj = new ClassName();`     | `Person p1 = new Person();`                    |
| **Constructor**       | `ClassName(params) { ... }`            | `Person(String n) { name = n; }`               |
| **Inheritance**       | `class Child extends Parent { ... }`   | `class Student extends Person { ... }`         |
| **Method Overriding** | `@Override retType method() { ... }`   | `@Override void display() { ... }`             |
| **Encapsulation**     | `private` fields + getters/setters     | `private int age; public int getAge() { ... }` |

---

## Exception Handling

| **Keyword** | **Usage**                        | **Example**                               |
| ----------- | -------------------------------- | ----------------------------------------- |
| `try`       | `try { risky code }`             | `try { int x = 5/0; }`                    |
| `catch`     | `catch (Exception e) { handle }` | `catch (ArithmeticException e) { ... }`   |
| `finally`   | `finally { cleanup }`            | `finally { System.out.println("Done"); }` |
| `throw`     | `throw new Exception("msg");`    | `throw new IOException("Error");`         |

---

## Collections Framework

| **Collection** | **Syntax**                                  | **Example**                                        |
| -------------- | ------------------------------------------- | -------------------------------------------------- |
| **ArrayList**  | `ArrayList<Type> list = new ArrayList<>();` | `ArrayList<String> names = new ArrayList<>();`     |
| **HashMap**    | `HashMap<Key, Val> map = new HashMap<>();`  | `HashMap<String, Integer> ages = new HashMap<>();` |
| **HashSet**    | `HashSet<Type> set = new HashSet<>();`      | `HashSet<Integer> nums = new HashSet<>();`         |

---

This cheat sheet covers essential Java syntax in a tabular format for quick
reference. Let me know if you'd like any additions! 🚀
**[⬆ Back to Top](#table-of-contents)**
