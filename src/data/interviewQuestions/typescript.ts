import type { InterviewQA } from './types';

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
    answer: [
      'Conditional types choose types based on conditions.',
      '',
      'Syntax:',
      'T extends U ? X : Y',
    ].join('\n\n'),
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
    answer: [
      'const prevents variable reassignment.',
      '',
      'readonly prevents modification of object properties.',
    ].join('\n\n'),
  },

  {
    id: 'ts-15',
    topicId: 'typescript',
    level: 'mid',
    questionType: 'theory',
    question: 'What are Index Signatures in TypeScript?',
    answer: [
      'Index signatures allow dynamic property keys.',
      '',
      'Example:',
      '{ [key: string]: number }',
    ].join('\n\n'),
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
    answer: [
      'Abstract classes can contain implementation.',
      '',
      'Interfaces only define contracts.',
    ].join('\n\n'),
  },

  {
    id: 'ts-18',
    topicId: 'typescript',
    level: 'mid',
    questionType: 'theory',
    question: 'What is the keyof operator and how is it used?',
    answer: [
      'keyof creates a union of property names from a type.',
      '',
      'Example:',
      'type Keys = keyof User',
    ].join('\n\n'),
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
    answer: [
      'TypeScript uses structural typing.',
      '',
      'Types are compatible if their structure matches.',
    ].join('\n\n'),
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
    answer: [
      'Both represent arrays of type T.',
      '',
      'T[] is shorthand while Array<T> uses generic syntax.',
    ].join('\n\n'),
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
    answer: [
      'satisfies ensures a value conforms to a type while preserving the inferred type.',
    ].join('\n\n'),
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
];