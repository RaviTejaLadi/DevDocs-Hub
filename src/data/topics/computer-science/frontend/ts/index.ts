import type { TopicItem } from '@/data/topics';
import tsIntro from './Introduction to TypeScript.md?raw';
import typescriptSetup from './beginner/typescript-setup.md?raw';
import tsconfigBasics from './beginner/tsconfig-basics.md?raw';
import primitiveTypes from './beginner/primitive-types.md?raw';
import typeAnnotations from './beginner/type-annotations.md?raw';
import typeInference from './beginner/type-inference.md?raw';
import functions from './beginner/functions.md?raw';
import arrays from './beginner/arrays.md?raw';
import objects from './beginner/objects.md?raw';
import unionTypes from './beginner/union-types.md?raw';
import typeAliases from './beginner/type-aliases.md?raw';
import interfaces from './beginner/interfaces.md?raw';
import genericsBasics from './beginner/generics-basics.md?raw';
import nullAndUndefined from './beginner/null-and-undefined.md?raw';
import typeAssertions from './beginner/type-assertions.md?raw';
import typeNarrowing from './beginner/type-narrowing.md?raw';
import modulesAndImports from './beginner/modules-and-imports.md?raw';
import asyncFunctions from './beginner/async-functions.md?raw';
import promiseTyping from './beginner/promise-typing.md?raw';
import utilityTypesBasics from './beginner/utility-types-basics.md?raw';
import optionalChaining from './beginner/optional-chaining.md?raw';
import nullishCoalescing from './beginner/nullish-coalescing.md?raw';
import strictMode from './beginner/strict-mode.md?raw';
import genericConstraints from './intermediate/generic-constraints.md?raw';
import keyofOperator from './intermediate/keyof-operator.md?raw';
import typeofOperator from './intermediate/typeof-operator.md?raw';
import indexedAccessTypes from './intermediate/indexed-access-types.md?raw';
import mappedTypes from './intermediate/mapped-types.md?raw';
import conditionalTypes from './intermediate/conditional-types.md?raw';
import discriminatedUnions from './intermediate/discriminated-unions.md?raw';
import typeGuards from './intermediate/type-guards.md?raw';
import intersectionTypes from './intermediate/intersection-types.md?raw';
import templateLiteralTypes from './intermediate/template-literal-types.md?raw';
import pickAndOmit from './intermediate/pick-and-omit.md?raw';
import recordUtility from './intermediate/record-utility.md?raw';
import excludeAndExtract from './intermediate/exclude-and-extract.md?raw';
import returntypeUtility from './intermediate/returntype-utility.md?raw';
import inferKeyword from './intermediate/infer-keyword.md?raw';
import typeSafeApis from './intermediate/type-safe-apis.md?raw';
import jsonTyping from './intermediate/json-typing.md?raw';
import environmentTyping from './intermediate/environment-typing.md?raw';
import eslintIntegration from './intermediate/eslint-integration.md?raw';
import reactTypescript from './intermediate/react-typescript.md?raw';
import jsxTyping from './intermediate/jsx-typing.md?raw';
import nodejsTyping from './intermediate/nodejs-typing.md?raw';
import genericsDeepDive from './advanced/generics-deep-dive.md?raw';
import declarationFiles from './advanced/declaration-files.md?raw';
import moduleAugmentation from './advanced/module-augmentation.md?raw';
import satisfiesOperator from './advanced/satisfies-operator.md?raw';
import constTypeParameters from './advanced/const-type-parameters.md?raw';
import brandedTypes from './advanced/branded-types.md?raw';
import top25TypescriptQuestions from './interview-prep/top-25-typescript-questions.md?raw';

export const tsConcepts: TopicItem[] = [
  {
    id: 'intro-to-ts',
    title: '📚 Introduction',
    content: tsIntro,
  },
  {
    id: 'ts-beginner-concepts',
    title: '🧩 Beginner',
    content: '',
    items: [
      { id: 'ts-typescript-setup', title: '🛠️ TypeScript Setup', content: typescriptSetup },
      { id: 'ts-tsconfig-basics', title: '⚙️ tsconfig Basics', content: tsconfigBasics },
      { id: 'ts-primitive-types', title: '🔤 Primitive Types', content: primitiveTypes },
      { id: 'ts-type-annotations', title: '🏷️ Type Annotations', content: typeAnnotations },
      { id: 'ts-type-inference', title: '🧠 Type Inference', content: typeInference },
      { id: 'ts-functions', title: '📞 Functions', content: functions },
      { id: 'ts-arrays', title: '📚 Arrays', content: arrays },
      { id: 'ts-objects', title: '🧱 Objects', content: objects },
      { id: 'ts-union-types', title: '🔀 Union Types', content: unionTypes },
      { id: 'ts-type-aliases', title: '🧩 Type Aliases', content: typeAliases },
      { id: 'ts-interfaces', title: '🧾 Interfaces', content: interfaces },
      { id: 'ts-generics-basics', title: '🌀 Generics Basics', content: genericsBasics },
      { id: 'ts-null-and-undefined', title: '⭕ Null and Undefined', content: nullAndUndefined },
      { id: 'ts-type-assertions', title: '✅ Type Assertions', content: typeAssertions },
      { id: 'ts-type-narrowing', title: '🎯 Type Narrowing', content: typeNarrowing },
      { id: 'ts-modules-and-imports', title: '📦 Modules and Imports', content: modulesAndImports },
      { id: 'ts-async-functions', title: '⏱️ Async Functions', content: asyncFunctions },
      { id: 'ts-promise-typing', title: '🤝 Promise Typing', content: promiseTyping },
      { id: 'ts-utility-types-basics', title: '🧰 Utility Types Basics', content: utilityTypesBasics },
      { id: 'ts-optional-chaining', title: '🔗 Optional Chaining', content: optionalChaining },
      { id: 'ts-nullish-coalescing', title: '🛟 Nullish Coalescing', content: nullishCoalescing },
      { id: 'ts-strict-mode', title: '📏 Strict Mode', content: strictMode },
    ],
  },
  {
    id: 'ts-intermediate-concepts',
    title: '🧩 Intermediate',
    content: '',
    items: [
      { id: 'ts-generic-constraints', title: '🧬 Generic Constraints', content: genericConstraints },
      { id: 'ts-keyof-operator', title: '🔑 keyof Operator', content: keyofOperator },
      { id: 'ts-typeof-operator', title: '🔍 typeof Operator', content: typeofOperator },
      { id: 'ts-indexed-access-types', title: '📌 Indexed Access Types', content: indexedAccessTypes },
      { id: 'ts-mapped-types', title: '🗺️ Mapped Types', content: mappedTypes },
      { id: 'ts-conditional-types', title: '⚖️ Conditional Types', content: conditionalTypes },
      { id: 'ts-discriminated-unions', title: '🏷️ Discriminated Unions', content: discriminatedUnions },
      { id: 'ts-type-guards', title: '🛡️ Type Guards', content: typeGuards },
      { id: 'ts-intersection-types', title: '➕ Intersection Types', content: intersectionTypes },
      { id: 'ts-template-literal-types', title: '🧵 Template Literal Types', content: templateLiteralTypes },
      { id: 'ts-pick-and-omit', title: '✂️ Pick and Omit', content: pickAndOmit },
      { id: 'ts-record-utility', title: '📚 Record Utility', content: recordUtility },
      { id: 'ts-exclude-and-extract', title: '🧹 Exclude and Extract', content: excludeAndExtract },
      { id: 'ts-returntype-utility', title: '↩️ ReturnType Utility', content: returntypeUtility },
      { id: 'ts-infer-keyword', title: '🧠 infer Keyword', content: inferKeyword },
      { id: 'ts-type-safe-apis', title: '🌐 Type-safe APIs', content: typeSafeApis },
      { id: 'ts-json-typing', title: '🧾 JSON Typing', content: jsonTyping },
      { id: 'ts-environment-typing', title: '🌱 Environment Typing', content: environmentTyping },
      { id: 'ts-eslint-integration', title: '🧰 ESLint Integration', content: eslintIntegration },
      { id: 'ts-react-typescript', title: '⚛️ React TypeScript', content: reactTypescript },
      { id: 'ts-jsx-typing', title: '🧩 JSX Typing', content: jsxTyping },
      { id: 'ts-nodejs-typing', title: '🟢 Node.js Typing', content: nodejsTyping },
    ],
  },
  {
    id: 'ts-advanced-concepts',
    title: '🔬 Advanced',
    content: '',
    items: [
      { id: 'ts-generics-deep-dive', title: '🌀 Generics Deep Dive', content: genericsDeepDive },
      { id: 'ts-declaration-files', title: '📄 Declaration Files (.d.ts)', content: declarationFiles },
      { id: 'ts-module-augmentation', title: '➕ Module Augmentation', content: moduleAugmentation },
      { id: 'ts-satisfies-operator', title: '✅ satisfies Operator', content: satisfiesOperator },
      { id: 'ts-const-type-parameters', title: '🔒 const Type Parameters', content: constTypeParameters },
      { id: 'ts-branded-types', title: '🏷️ Branded Types', content: brandedTypes },
    ],
  },
  {
    id: 'ts-interview',
    title: '💼 Interview Preparation',
    content: '',
    items: [
      {
        id: 'ts-top-25-interview-questions',
        title: '📌 Top 25 Interview Questions',
        content: top25TypescriptQuestions,
      },
    ],
  },
];
