import type { InterviewQA } from '../types';

export const typescriptQuestions: InterviewQA[] = [
  {
    id: 'ts-1',
    topicId: 'typescript',
    level: 'entry',
    questionType: 'theory',
    question: 'What is TypeScript and how does it differ from JavaScript?',
    answer: [
      'TypeScript is a superset of JavaScript that adds static type checking.',
      '',
      '- It compiles to JavaScript.',
      '- Errors are detected during development.',
      '- Provides better IDE tooling and maintainability.',
    ].join('\n\n'),
  },

  {
    id: 'ts-2',
    topicId: 'typescript',
    level: 'entry',
    questionType: 'theory',
    question: 'What are the primitive types in TypeScript?',
    answer: [
      'Primitive types represent basic data values.',
      '',
      '- string',
      '- number',
      '- boolean',
      '- null',
      '- undefined',
      '- symbol',
      '- bigint',
      '- void',
    ].join('\n\n'),
  },

  {
    id: 'ts-3',
    topicId: 'typescript',
    level: 'junior',
    questionType: 'theory',
    question: 'What is the difference between any and unknown types?',
    answer: [
      '`any` disables type checking.',
      '',
      '`unknown` is type-safe and requires validation before usage.',
      '',
      'unknown is preferred because it enforces safer type handling.',
    ].join('\n\n'),
  },

  {
    id: 'ts-4',
    topicId: 'typescript',
    level: 'junior',
    questionType: 'theory',
    question: 'Explain the difference between interface and type in TypeScript.',
    answer: [
      'Both define shapes of data.',
      '',
      'Interfaces:',
      '- Support declaration merging',
      '- Best for object contracts',
      '',
      'Type aliases:',
      '- Support unions, intersections, tuples',
      '- More flexible for complex types',
    ].join('\n\n'),
  },

  {
    id: 'ts-5',
    topicId: 'typescript',
    level: 'entry',
    questionType: 'theory',
    question: 'What are Union Types and Intersection Types?',
    answer: [
      'Union (`A | B`) → value can be one of multiple types.',
      '',
      'Intersection (`A & B`) → combines multiple types into one type.',
    ].join('\n\n'),
  },

  {
    id: 'ts-6',
    topicId: 'typescript',
    level: 'junior',
    questionType: 'theory',
    question: 'What is Type Assertion and when should you use it?',
    answer: [
      'Type assertion tells TypeScript to treat a value as a specific type.',
      '',
      'Example:',
      'value as string',
      '',
      'Used when the developer knows more about the value than TypeScript.',
    ].join('\n\n'),
  },

  {
    id: 'ts-7',
    topicId: 'typescript',
    level: 'mid',
    questionType: 'theory',
    question: 'What are Generics in TypeScript and why are they useful?',
    answer: [
      'Generics allow writing reusable and type-safe code.',
      '',
      'Example:',
      'function identity<T>(value: T): T { return value }',
      '',
      'They help create flexible components while maintaining type safety.',
    ].join('\n\n'),
  },

  {
    id: 'ts-8',
    topicId: 'typescript',
    level: 'mid',
    questionType: 'theory',
    question: 'Explain the never type and provide use cases.',
    answer: [
      '`never` represents values that never occur.',
      '',
      'Use cases:',
      '- Functions that always throw errors',
      '- Infinite loops',
      '- Exhaustive switch checks',
    ].join('\n\n'),
  },

  {
    id: 'ts-9',
    topicId: 'typescript',
    level: 'entry',
    questionType: 'theory',
    question: 'What is the difference between let, const, and var?',
    answer: [
      'var → function scoped and hoisted.',
      '',
      'let → block scoped and reassignable.',
      '',
      'const → block scoped and cannot be reassigned.',
    ].join('\n\n'),
  },

  {
    id: 'ts-10',
    topicId: 'typescript',
    level: 'mid',
    questionType: 'theory',
    question: 'What are Conditional Types in TypeScript?',
    answer: ['Conditional types choose types based on conditions.', '', 'Syntax:', 'T extends U ? X : Y'].join('\n\n'),
  },

  {
    id: 'ts-11',
    topicId: 'typescript',
    level: 'entry',
    questionType: 'theory',
    question: 'What is Type Inference and how does it work?',
    answer: [
      'TypeScript automatically determines variable types based on values.',
      '',
      'Example:',
      'let age = 25 // inferred as number',
    ].join('\n\n'),
  },

  {
    id: 'ts-12',
    topicId: 'typescript',
    level: 'mid',
    questionType: 'theory',
    question: 'Explain Mapped Types with examples.',
    answer: [
      'Mapped types transform existing types.',
      '',
      'Example:',
      '{ [K in keyof T]: boolean }',
      '',
      'Common utilities:',
      '- Partial',
      '- Readonly',
      '- Required',
    ].join('\n\n'),
  },

  {
    id: 'ts-13',
    topicId: 'typescript',
    level: 'junior',
    questionType: 'theory',
    question: 'What are Utility Types in TypeScript?',
    answer: [
      'Utility types help transform types.',
      '',
      'Examples:',
      '- Partial',
      '- Pick',
      '- Omit',
      '- Record',
      '- ReturnType',
    ].join('\n\n'),
  },

  {
    id: 'ts-14',
    topicId: 'typescript',
    level: 'junior',
    questionType: 'theory',
    question: 'What is the difference between readonly and const?',
    answer: ['const prevents variable reassignment.', '', 'readonly prevents modification of object properties.'].join(
      '\n\n'
    ),
  },

  {
    id: 'ts-15',
    topicId: 'typescript',
    level: 'mid',
    questionType: 'theory',
    question: 'What are Index Signatures in TypeScript?',
    answer: ['Index signatures allow dynamic property keys.', '', 'Example:', '{ [key: string]: number }'].join('\n\n'),
  },

  {
    id: 'ts-16',
    topicId: 'typescript',
    level: 'junior',
    questionType: 'theory',
    question: 'Explain the concept of Type Guards.',
    answer: [
      'Type guards narrow types using runtime checks.',
      '',
      'Examples:',
      '- typeof',
      '- instanceof',
      '- in operator',
    ].join('\n\n'),
  },

  {
    id: 'ts-17',
    topicId: 'typescript',
    level: 'mid',
    questionType: 'theory',
    question: 'What are Abstract Classes and how do they differ from Interfaces?',
    answer: ['Abstract classes can contain implementation.', '', 'Interfaces only define contracts.'].join('\n\n'),
  },

  {
    id: 'ts-18',
    topicId: 'typescript',
    level: 'mid',
    questionType: 'theory',
    question: 'What is the keyof operator and how is it used?',
    answer: ['keyof creates a union of property names from a type.', '', 'Example:', 'type Keys = keyof User'].join(
      '\n\n'
    ),
  },

  {
    id: 'ts-19',
    topicId: 'typescript',
    level: 'mid',
    questionType: 'theory',
    question: 'Explain Function Overloading in TypeScript.',
    answer: [
      'Function overloading allows multiple function signatures.',
      '',
      'Implementation must handle all overload cases.',
    ].join('\n\n'),
  },

  {
    id: 'ts-20',
    topicId: 'typescript',
    level: 'senior',
    questionType: 'theory',
    question: 'What are Template Literal Types?',
    answer: [
      'Template literal types create string patterns at the type level.',
      '',
      'Example:',
      'type Event = `on${string}`',
    ].join('\n\n'),
  },

  {
    id: 'ts-21',
    topicId: 'typescript',
    level: 'mid',
    questionType: 'theory',
    question: 'What is Structural Typing?',
    answer: ['TypeScript uses structural typing.', '', 'Types are compatible if their structure matches.'].join('\n\n'),
  },

  {
    id: 'ts-22',
    topicId: 'typescript',
    level: 'senior',
    questionType: 'theory',
    question: 'What are Decorators in TypeScript?',
    answer: [
      'Decorators modify classes or class members.',
      '',
      'They use @decorator syntax.',
      '',
      'Common in frameworks like Angular and NestJS.',
    ].join('\n\n'),
  },

  {
    id: 'ts-23',
    topicId: 'typescript',
    level: 'expert',
    questionType: 'theory',
    question: 'Explain the infer keyword in Conditional Types.',
    answer: [
      'infer extracts types within conditional types.',
      '',
      'Example:',
      'type Return<T> = T extends (...args:any)=>infer R ? R : never',
    ].join('\n\n'),
  },

  {
    id: 'ts-24',
    topicId: 'typescript',
    level: 'junior',
    questionType: 'theory',
    question: 'What is Type Narrowing?',
    answer: [
      'Type narrowing reduces a union type to a specific type.',
      '',
      'Techniques:',
      '- typeof',
      '- instanceof',
      '- truthiness checks',
    ].join('\n\n'),
  },

  {
    id: 'ts-25',
    topicId: 'typescript',
    level: 'senior',
    questionType: 'theory',
    question: 'What is Declaration Merging?',
    answer: [
      'Declaration merging combines multiple declarations into one.',
      '',
      'Common with interfaces and namespaces.',
    ].join('\n\n'),
  },

  {
    id: 'ts-26',
    topicId: 'typescript',
    level: 'entry',
    questionType: 'theory',
    question: 'What is the difference between Array<T> and T[]?',
    answer: ['Both represent arrays of type T.', '', 'T[] is shorthand while Array<T> uses generic syntax.'].join(
      '\n\n'
    ),
  },

  {
    id: 'ts-27',
    topicId: 'typescript',
    level: 'senior',
    questionType: 'theory',
    question: 'What are Ambient Declarations?',
    answer: [
      'Ambient declarations describe types without implementation.',
      '',
      'Used in .d.ts files for libraries.',
    ].join('\n\n'),
  },

  {
    id: 'ts-28',
    topicId: 'typescript',
    level: 'mid',
    questionType: 'theory',
    question: 'Explain Discriminated Unions.',
    answer: [
      'Discriminated unions use a shared property to differentiate union members.',
      '',
      'Common in state machines and API responses.',
    ].join('\n\n'),
  },

  {
    id: 'ts-29',
    topicId: 'typescript',
    level: 'senior',
    questionType: 'theory',
    question: 'What is the satisfies operator in TypeScript?',
    answer: ['satisfies ensures a value conforms to a type while preserving the inferred type.'].join('\n\n'),
  },

  {
    id: 'ts-30',
    topicId: 'typescript',
    level: 'expert',
    questionType: 'theory',
    question: 'What are Higher-Order Types?',
    answer: [
      'Higher-order types operate on other types.',
      '',
      'Examples:',
      '- Conditional types',
      '- Mapped types',
      '- ReturnType and Parameters utilities',
    ].join('\n\n'),
  },
  {
    id: 'ts-31',
    topicId: 'typescript',
    level: 'mid',
    questionType: 'theory',
    question: 'What is Nominal Typing and how can it be simulated in TypeScript?',
    answer: [
      'Nominal typing means types are compatible only if they have the same name/identity, even if their structure is identical.',
      '',
      'TypeScript is structurally typed, but we can simulate nominal typing using "Branding":',
      '```ts',
      'type Brand<K, T> = K & { __brand: T };',
      'type UserId = Brand<string, "UserId">;',
      '```',
    ].join('\n'),
  },
  {
    id: 'ts-32',
    topicId: 'typescript',
    level: 'senior',
    questionType: 'theory',
    question: 'How do you perform exhaustiveness checking in a switch statement?',
    answer: [
      'By using the `never` type. If the switch handles all cases, the default case should be assignable to `never`.',
      '',
      '```ts',
      'function assertNever(x: never): never { throw new Error("Unexpected object: " + x); }',
      'switch (s.kind) {',
      '  case "square": return s.size * s.size;',
      '  default: return assertNever(s);',
      '}',
      '```',
    ].join('\n'),
  },
  {
    id: 'ts-33',
    topicId: 'typescript',
    level: 'mid',
    questionType: 'theory',
    question: 'What is the difference between `interface` and `type` when it comes to declaration merging?',
    answer:
      'Interfaces support declaration merging (multiple interfaces with the same name will be merged into one). Type aliases do not; defining a type alias twice with the same name will result in an error.',
  },
  {
    id: 'ts-34',
    topicId: 'typescript',
    level: 'senior',
    questionType: 'theory',
    question: 'Explain Covariance and Contravariance in TypeScript.',
    answer: [
      '- **Covariance:** Allows a type to be replaced by a more specific subtype (e.g., `string[]` is assignable to `(string | number)[]`).',
      '- **Contravariance:** Allows a type to be replaced by a more general supertype (primarily happens with function parameters in strict mode).',
    ].join('\n\n'),
  },
  {
    id: 'ts-35',
    topicId: 'typescript',
    level: 'mid',
    questionType: 'theory',
    question: 'What are "Branded Types" or "Opaque Types"?',
    answer:
      'They are types that have a unique identifier (the "brand") attached to them to distinguish them from other types with the same structure, preventing accidental misuse of values (e.g., passing a `CurrencyAmount` where a `Distance` is expected).',
  },
  {
    id: 'ts-36',
    topicId: 'typescript',
    level: 'senior',
    questionType: 'theory',
    question: 'How can you extract the return type of a function without using the `ReturnType` utility?',
    answer: [
      'Using conditional types and the `infer` keyword:',
      '```ts',
      'type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never;',
      '```',
    ].join('\n'),
  },
  {
    id: 'ts-37',
    topicId: 'typescript',
    level: 'mid',
    questionType: 'theory',
    question: 'What is the `declare` keyword used for?',
    answer:
      'It is used to tell TypeScript that a variable, function, or module exists elsewhere (usually in a global scope or external library) and was not created in the current file. This is common in `.d.ts` files.',
  },
  {
    id: 'ts-38',
    topicId: 'typescript',
    level: 'senior',
    questionType: 'theory',
    question: 'Explain recursive types with an example.',
    answer: [
      'Recursive types are types that refer to themselves. They are used for data structures with nesting.',
      '```ts',
      'type JSONValue = string | number | boolean | null | { [key: string]: JSONValue } | JSONValue[];',
      '```',
    ].join('\n'),
  },
  {
    id: 'ts-39',
    topicId: 'typescript',
    level: 'mid',
    questionType: 'theory',
    question: 'What is "Const Type Parameters" (introduced in TS 5.0)?',
    answer: [
      'It allows a generic type parameter to be inferred as a `const` literal, similar to using `as const` on the argument itself.',
      '```ts',
      'function getNames<const T extends string[]>(names: T) { return names; }',
      '```',
    ].join('\n'),
  },
  {
    id: 'ts-40',
    topicId: 'typescript',
    level: 'senior',
    questionType: 'theory',
    question: 'What is the difference between `private` (TS) and `#private` (JS)?',
    answer:
      '`private` is a TypeScript compile-time check; the property is still accessible at runtime. `#private` is a native JavaScript feature (ES2020) that provides true runtime privacy; the property cannot be accessed outside the class even with hacks.',
  },
  {
    id: 'ts-41',
    topicId: 'typescript',
    level: 'mid',
    questionType: 'theory',
    question: 'What is the `NonNullable<T>` utility type?',
    answer: 'It constructs a type by excluding `null` and `undefined` from type `T`.',
  },
  {
    id: 'ts-42',
    topicId: 'typescript',
    level: 'senior',
    questionType: 'theory',
    question: 'How do you create a type-safe Event Emitter?',
    answer: [
      'By using a mapped type or a record where keys are event names and values are function signatures.',
      '```ts',
      'interface Events { click: (x: number) => void; }',
      'function on<K extends keyof Events>(name: K, cb: Events[K]) { ... }',
      '```',
    ].join('\n'),
  },
  {
    id: 'ts-43',
    topicId: 'typescript',
    level: 'expert',
    questionType: 'theory',
    question: 'What is "Type Metadata" and how do `reflect-metadata` and decorators work together?',
    answer:
      'Decorators can store metadata about classes/properties at runtime using the `reflect-metadata` library. This is used by frameworks like NestJS or TypeDI for Dependency Injection by inspecting the types of constructor arguments.',
  },
  {
    id: 'ts-44',
    topicId: 'typescript',
    level: 'mid',
    questionType: 'theory',
    question: 'What are String Manipulation Types?',
    answer:
      'Intrinsic utility types for transforming strings at the type level: `Uppercase<S>`, `Lowercase<S>`, `Capitalize<S>`, and `Uncapitalize<S>`.',
  },
  {
    id: 'ts-45',
    topicId: 'typescript',
    level: 'senior',
    questionType: 'theory',
    question: 'What is the `Awaited<T>` utility?',
    answer:
      'It is used to model operations like `await` in `async` functions, or the `.then()` method on Promises—specifically, the way that they recursively unwrap Promises.',
  },
  {
    id: 'ts-46',
    topicId: 'typescript',
    level: 'mid',
    questionType: 'theory',
    question: 'What is the `Parameters<T>` utility?',
    answer: 'It extracts the parameter types of a function type `T` as a tuple.',
  },
  {
    id: 'ts-47',
    topicId: 'typescript',
    level: 'senior',
    questionType: 'theory',
    question: 'What are "Global Augmentations"?',
    answer:
      'Using `declare global` to add new members to the global scope or to existing global interfaces like `Window` or `ProcessEnv`.',
  },
  {
    id: 'ts-48',
    topicId: 'typescript',
    level: 'mid',
    questionType: 'theory',
    question: 'What is "Module Augmentation"?',
    answer:
      'Adding new declarations to an existing module without modifying its source code, usually using `declare module "name" { ... }`.',
  },
  {
    id: 'ts-49',
    topicId: 'typescript',
    level: 'senior',
    questionType: 'theory',
    question: 'Explain the difference between `Exclude<T, U>` and `Omit<T, K>`.',
    answer: '`Exclude` works on union types to remove members. `Omit` works on object types to remove specific keys.',
  },
  {
    id: 'ts-50',
    topicId: 'typescript',
    level: 'mid',
    questionType: 'theory',
    question: 'What is the `Extract<T, U>` utility?',
    answer: 'It extracts from `T` all union members that are assignable to `U`.',
  },
  {
    id: 'ts-51',
    topicId: 'typescript',
    level: 'expert',
    questionType: 'theory',
    question: 'How do you implement a `DeepPartial<T>` type?',
    answer: [
      'Using a recursive mapped type:',
      '```ts',
      'type DeepPartial<T> = {',
      '  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];',
      '};',
      '```',
    ].join('\n'),
  },
  {
    id: 'ts-52',
    topicId: 'typescript',
    level: 'senior',
    questionType: 'theory',
    question: 'What is the `this` parameter in functions?',
    answer:
      'TypeScript allows you to declare the expected type of `this` in a function as the first parameter (e.g., `function(this: MyType, ...) {}`). This parameter is erased at compile time.',
  },
  {
    id: 'ts-53',
    topicId: 'typescript',
    level: 'mid',
    questionType: 'theory',
    question: 'What is the `ConstructorParameters<T>` utility?',
    answer: 'It extracts the types of all parameters of a constructor function type `T` as a tuple.',
  },
  {
    id: 'ts-54',
    topicId: 'typescript',
    level: 'senior',
    questionType: 'theory',
    question: 'What is the difference between `any` and `unknown` in terms of assignability?',
    answer:
      'Everything is assignable to both `any` and `unknown`. However, `any` is also assignable to everything else (dangerous), whereas `unknown` is only assignable to itself and `any`.',
  },
  {
    id: 'ts-55',
    topicId: 'typescript',
    level: 'mid',
    questionType: 'theory',
    question: 'What are "Ambient Modules"?',
    answer:
      'Modules declared using `declare module "..."` that describe the shape of an external JS library that does not have its own types.',
  },
  {
    id: 'ts-56',
    topicId: 'typescript',
    level: 'expert',
    questionType: 'theory',
    question: 'How do you handle "Excess Property Checking" in TypeScript?',
    answer:
      'TypeScript checks for excess properties only on object literals when they are directly assigned to a variable with a specific type. To bypass this, you can use an intermediate variable or a type assertion.',
  },
  {
    id: 'ts-57',
    topicId: 'typescript',
    level: 'senior',
    questionType: 'theory',
    question: 'Explain the concept of "Distributive Conditional Types".',
    answer:
      'When a generic type `T` in a conditional type `T extends U ? X : Y` is a union, TypeScript automatically "distributes" the condition over each member of the union.',
  },
  {
    id: 'ts-58',
    topicId: 'typescript',
    level: 'mid',
    questionType: 'theory',
    question: 'What is the `instanceof` type guard?',
    answer: 'A runtime check that narrows a type to a specific class instance.',
  },
  {
    id: 'ts-59',
    topicId: 'typescript',
    level: 'senior',
    questionType: 'theory',
    question: 'How do you use the `in` operator as a type guard?',
    answer:
      'By checking if a property exists on an object (e.g., `"name" in user`), which narrows the union based on which members have that property.',
  },
  {
    id: 'ts-60',
    topicId: 'typescript',
    level: 'expert',
    questionType: 'theory',
    question: 'What are "Higher-Kinded Types" and does TypeScript support them?',
    answer:
      'HKTs are types that take other types and return a new type (like `List<T>`). TypeScript does not natively support them (it only supports "Generic Types"), but they can be simulated using "Interface Merging" and "Lightweight HKT" patterns.',
  },
];
