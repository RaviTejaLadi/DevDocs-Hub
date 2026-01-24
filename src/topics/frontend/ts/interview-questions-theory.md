# Top 30 TypeScript Theory Questions for Interviews

## Table of Contents

1. [What is TypeScript and how does it differ from JavaScript?](#1.-what-is-typescript-and-how-does-it-differ-from-javascript?)
2. [What are the primitive types in TypeScript?](#2.-what-are-the-primitive-types-in-typescript?)
3. [What is the difference between any and unknown types?](#3.-what-is-the-difference-between-any-and-unknown-types?)
4. [Explain the difference between interface and type in TypeScript.](#4.-explain-the-difference-between-interface-and-type-in-typescript.)
5. [What are Union Types and Intersection Types?](#5.-what-are-union-types-and-intersection-types?)
6. [What is Type Assertion and when should you use it?](#6.-what-is-type-assertion-and-when-should-you-use-it?)
7. [What are Generics in TypeScript and why are they useful?](#7.-what-are-generics-in-typescript-and-why-are-they-useful?)
8. [Explain the never type and provide use cases.](#8.-explain-the-never-type-and-provide-use-cases.)
9. [What is the difference between let, const, and var in TypeScript?](#9.-what-is-the-difference-between-let-const-and-var-in-typescript?)
10. [What are Conditional Types in TypeScript?](#10.-what-are-conditional-types-in-typescript?)
11. [What is Type Inference and how does it work?](#11.-what-is-type-inference-and-how-does-it-work?)
12. [Explain Mapped Types with examples.](#12.-explain-mapped-types-with-examples.)
13. [What are Utility Types in TypeScript?](#13.-what-are-utility-types-in-typescript?)
14. [What is the difference between readonly and const?](#14.-what-is-the-difference-between-readonly-and-const?)
15. [What are Index Signatures in TypeScript?](#15.-what-are-index-signatures-in-typescript?)
16. [Explain the concept of Type Guards.](#16.-explain-the-concept-of-type-guards.)
17. [What are Abstract Classes and how do they differ from Interfaces?](#17.-what-are-abstract-classes-and-how-do-they-differ-from-interfaces?)
18. [What is the keyof operator and how is it used?](#18.-what-is-the-keyof-operator-and-how-is-it-used?)
19. [Explain Function Overloading in TypeScript.](#19.-explain-function-overloading-in-typescript.)
20. [What are Template Literal Types?](#20.-what-are-template-literal-types?)
21. [What is the difference between Structural and Nominal typing?](#21.-what-is-the-difference-between-structural-and-nominal-typing?)
22. [What are Decorators in TypeScript?](#22.-what-are-decorators-in-typescript?)
23. [Explain the infer keyword in Conditional Types.](#23.-explain-the-infer-keyword-in-conditional-types.)
24. [What is Type Narrowing and what techniques achieve it?](#24.-what-is-type-narrowing-and-what-techniques-achieve-it?)
25. [What are Module Declaration Merging and Namespace Merging?](#25.-what-are-module-declaration-merging-and-namespace-merging?)
26. [What is the difference between Array<T> and T[] syntax?](#26.-what-is-the-difference-between-array<t>-and-t[]-syntax?)
27. [What are Ambient Declarations and when are they used?](#27.-what-are-ambient-declarations-and-when-are-they-used?)
28. [Explain the concept of Discriminated Unions.](#28.-explain-the-concept-of-discriminated-unions.)
29. [What is the satisfies operator in TypeScript?](#29.-what-is-the-satisfies-operator-in-typescript?)
30. [What are Higher-Order Types and provide examples?](#30.-what-are-higher-order-types-and-provide-examples?)

## 1. What is TypeScript and how does it differ from JavaScript?

**Answer:** TypeScript is a superset of JavaScript that adds static type
checking at compile time. It compiles to plain JavaScript and provides better
tooling, error detection during development, and enhanced code maintainability
compared to JavaScript's dynamic typing.

## 2. What are the primitive types in TypeScript?

**Answer:** The primitive types are: `string`, `number`, `boolean`, `null`,
`undefined`, `symbol`, `bigint`, and `void`. TypeScript also has `any`,
`unknown`, `never`, and `object` as additional built-in types.

## 3. What is the difference between any and unknown types?

**Answer:** `any` disables type checking completely, allowing any operation.
`unknown` is type-safe and requires type checking before performing operations.
`unknown` is the safer alternative to `any`.

## 4. Explain the difference between interface and type in TypeScript.

**Answer:** Both define object shapes, but `interface` supports declaration
merging, inheritance with `extends`, and is ideal for object-oriented patterns.
`type` supports union types, intersections, and computed properties, making it
more flexible for complex type operations.

## 5. What are Union Types and Intersection Types?

**Answer:** Union types (`A | B`) allow a value to be one of several types.
Intersection types (`A & B`) combine multiple types into one, requiring the
value to satisfy all constituent types simultaneously.

## 6. What is Type Assertion and when should you use it?

**Answer:** Type assertion tells the compiler to treat a value as a specific
type using `as` keyword or angle bracket syntax. Use it when you know more about
a value's type than TypeScript can infer, but use sparingly as it bypasses type
checking.

## 7. What are Generics in TypeScript and why are they useful?

**Answer:** Generics allow creating reusable components that work with multiple
types while maintaining type safety. They use type parameters (`<T>`) to capture
and preserve type information, enabling flexible yet type-safe code.

## 8. Explain the never type and provide use cases.

**Answer:** `never` represents values that never occur. It's used for functions
that never return (infinite loops, always throw errors), exhaustive checks in
switch statements, and represents unreachable code paths.

## 9. What is the difference between let, const, and var in TypeScript?

**Answer:** `var` is function-scoped and hoisted. `let` is block-scoped and not
hoisted. `const` is block-scoped, not hoisted, and cannot be reassigned (though
object contents can be modified).

## 10. What are Conditional Types in TypeScript?

**Answer:** Conditional types allow creating types based on conditions using the
`T extends U ? X : Y` syntax. They enable sophisticated type transformations and
are fundamental to advanced TypeScript patterns.

## 11. What is Type Inference and how does it work?

**Answer:** Type inference automatically determines types based on context
without explicit type annotations. TypeScript analyzes assigned values, return
statements, and usage patterns to infer the most appropriate types.

## 12. Explain Mapped Types with examples.

**Answer:** Mapped types create new types by transforming properties of existing
types. Common examples include `Partial<T>`, `Required<T>`, `Readonly<T>`, and
`Pick<T, K>`. They use the syntax `{ [K in keyof T]: ... }`.

## 13. What are Utility Types in TypeScript?

**Answer:** Utility types are built-in generic types that facilitate common type
transformations: `Partial<T>`, `Required<T>`, `Readonly<T>`, `Pick<T, K>`,
`Omit<T, K>`, `Record<K, T>`, `Exclude<T, U>`, `Extract<T, U>`, `ReturnType<T>`,
etc.

## 14. What is the difference between readonly and const?

**Answer:** `const` prevents reassignment of variables. `readonly` prevents
modification of object properties or array elements. `const` works on bindings,
while `readonly` works on properties.

## 15. What are Index Signatures in TypeScript?

**Answer:** Index signatures define types for object properties when property
names are not known in advance. Syntax: `{ [key: string]: valueType }`. They
allow objects to have additional properties of specified types.

## 16. Explain the concept of Type Guards.

**Answer:** Type guards are runtime checks that narrow types within conditional
blocks. They include `typeof`, `instanceof`, `in` operator, and custom type
guard functions that return `value is Type`.

## 17. What are Abstract Classes and how do they differ from Interfaces?

**Answer:** Abstract classes can contain implementation details and cannot be
instantiated directly. They can have abstract methods (must be implemented by
subclasses) and concrete methods. Interfaces only define contracts without
implementation.

## 18. What is the keyof operator and how is it used?

**Answer:** `keyof` creates a union type of all property names of a given type.
It's used for type-safe property access, creating mapped types, and ensuring
only valid property names are used.

## 19. Explain Function Overloading in TypeScript.

**Answer:** Function overloading allows defining multiple function signatures
for the same function name with different parameter types or counts. The
implementation must handle all overload cases.

## 20. What are Template Literal Types?

**Answer:** Template literal types use template literal syntax to create types
based on string patterns. They enable precise string type definitions and are
useful for creating APIs with specific string formats.

## 21. What is the difference between Structural and Nominal typing?

**Answer:** TypeScript uses structural typing (duck typing) where type
compatibility is based on structure/shape rather than explicit declarations.
Objects are compatible if they have the same properties, regardless of how they
were declared.

## 22. What are Decorators in TypeScript?

**Answer:** Decorators are special functions that can be attached to classes,
methods, properties, or parameters to modify their behavior or add metadata.
They use the `@decorator` syntax and are experimental features.

## 23. Explain the infer keyword in Conditional Types.

**Answer:** `infer` allows extracting types from other types within conditional
type expressions. It's used to capture and use parts of types being checked,
enabling powerful type-level programming.

## 24. What is Type Narrowing and what techniques achieve it?

**Answer:** Type narrowing reduces union types to more specific types through
runtime checks. Techniques include type guards, `typeof`, `instanceof`,
truthiness checks, equality checks, and the `in` operator.

## 25. What are Module Declaration Merging and Namespace Merging?

**Answer:** Declaration merging allows multiple declarations with the same name
to be combined into a single definition. Interface merging combines properties,
while namespace merging combines exports.

## 26. What is the difference between Array<T> and T[] syntax?

**Answer:** Both represent arrays of type T and are functionally identical.
`T[]` is shorthand syntax, while `Array<T>` is generic syntax. Choice is often
stylistic, but `T[]` is more common for simple types.

## 27. What are Ambient Declarations and when are they used?

**Answer:** Ambient declarations describe types for JavaScript libraries or
global variables without providing implementation. They use the `declare`
keyword and are typically found in `.d.ts` files for type definitions.

## 28. Explain the concept of Discriminated Unions.

**Answer:** Discriminated unions use a common property (discriminant) to
distinguish between union members. They enable type-safe handling of different
object shapes and are useful for state management and API responses.

## 29. What is the satisfies operator in TypeScript?

**Answer:** The `satisfies` operator ensures a value matches a type constraint
while preserving the most specific inferred type. It provides type safety
without widening the type unnecessarily.

## 30. What are Higher-Order Types and provide examples?

**Answer:** Higher-order types are types that operate on other types, similar to
higher-order functions. Examples include mapped types, conditional types, and
utility types like `ReturnType<T>` or `Parameters<T>` that extract information
from function types.

**[⬆ Back to Top](#table-of-contents)**
