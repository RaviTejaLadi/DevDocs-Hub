import jsOOPSIntro from './intro.md?raw';

// OOPS Core Concepts
import abstraction from './oops/abstraction.md?raw';
import encapsulation from './oops/encapsulation.md?raw';
import inheritance from './oops/inheritance.md?raw';
import polymorphism from './oops/polymorphism.md?raw';

// ES6 Classes
import classDeclaration from './ES6Classes/class-declaration.md?raw';
import constructorMethod from './ES6Classes/constructor-method.md?raw';
import gettersAndSetters from './ES6Classes/getters-and-setters.md?raw';
import instanceMethod from './ES6Classes/instance-method.md?raw';
import staticMethod from './ES6Classes/static-method.md?raw';

// Inheritance Mechanisms
import classInheritance from './InheritanceMechanisms/class-inheritance.md?raw';
import prototypalInheritance from './InheritanceMechanisms/prototypal-inheritance.md?raw';
import prototypeChain from './InheritanceMechanisms/prototype-chain.md?raw';
import superKeyword from './InheritanceMechanisms/super-keyword.md?raw';

// This Binding and Context
import arrowFunctions from './ThisBindingAndContext/arrow-functions.md?raw';
import contextLoss from './ThisBindingAndContext/context-loss.md?raw';
import explicitBinding from './ThisBindingAndContext/explicit-binding.md?raw';
import methodBinding from './ThisBindingAndContext/method-binding.md?raw';

// Object Creation Patterns
import objectLiterals from './object-creation-patterns/object-literals.md?raw';
import objectCreate from './object-creation-patterns/object.create.md?raw';
import constructorFunctions from './object-creation-patterns/constructor-functions.md?raw';
import factoryFunctions from './object-creation-patterns/factory-functions.md?raw';

// Mixins and Composition
import mixins from './MixinsAndComposition/mixins.md?raw';
import compositionOverInheritance from './MixinsAndComposition/composition-over-inheritance.md?raw';
import delegation from './MixinsAndComposition/delegation.md?raw';

// Design Patterns
import factoryPattern from './DesignPatterns/factory-pattern.md?raw';
import modulePattern from './DesignPatterns/module-pattern.md?raw';
import observerPattern from './DesignPatterns/observer-pattern.md?raw';
import singletonPattern from './DesignPatterns/singleton-pattern.md?raw';

// Advanced OOP
import abstractClasses from './AdvancedOOP/abstract-classes.md?raw';
import methodOverriding from './AdvancedOOP/method-overriding.md?raw';
import privateFields from './AdvancedOOP/private-fields.md?raw';
import privateMethods from './AdvancedOOP/private-methods.md?raw';

export const jsOOPSConcepts = [
  {
    id: 'js-oops-introduction',
    title: '📖 JavaScript OOP Fundamentals',
    content: '',
    items: [
      {
        id: 'intro-to-js-oops',
        title: '🚀 Introduction to JavaScript OOP',
        content: jsOOPSIntro,
      },
    ],
  },

  {
    id: 'js-oops-object-creation-patterns',
    title: '🏗️ Object Creation Patterns',
    content: '',
    items: [
      {
        id: 'object-literals',
        title: '📦 Object Literals',
        content: objectLiterals,
      },
      {
        id: 'factory-functions',
        title: '🏭 Factory Functions',
        content: factoryFunctions,
      },
      {
        id: 'constructor-functions',
        title: '🔨 Constructor Functions',
        content: constructorFunctions,
      },
      {
        id: 'object-create',
        title: '🧬 Object.create()',
        content: objectCreate,
      },
    ],
  },

  {
    id: 'js-oops-core-concepts',
    title: '🎯 Core OOP Concepts',
    content: '',
    items: [
      {
        id: 'oops-encapsulation',
        title: '🔒 Encapsulation',
        content: encapsulation,
      },
      {
        id: 'oops-abstraction',
        title: '🎭 Abstraction',
        content: abstraction,
      },
      {
        id: 'oops-inheritance',
        title: '🧬 Inheritance',
        content: inheritance,
      },
      {
        id: 'oops-polymorphism',
        title: '🔄 Polymorphism',
        content: polymorphism,
      },
    ],
  },

  {
    id: 'js-oops-es6-classes',
    title: '🏛️ ES6 Classes',
    content: '',
    items: [
      {
        id: 'class-declaration',
        title: '📘 Class Declaration',
        content: classDeclaration,
      },
      {
        id: 'constructor-method',
        title: '🏗️ Constructor Method',
        content: constructorMethod,
      },
      {
        id: 'instance-method',
        title: '⚙️ Instance Methods',
        content: instanceMethod,
      },
      {
        id: 'getters-and-setters',
        title: '🎛️ Getters & Setters',
        content: gettersAndSetters,
      },
      {
        id: 'static-method',
        title: '📌 Static Methods',
        content: staticMethod,
      },
    ],
  },

  {
    id: 'js-oops-inheritance-mechanisms',
    title: '🌳 Inheritance & Prototypes',
    content: '',
    items: [
      {
        id: 'prototype-chain',
        title: '🔗 Prototype Chain',
        content: prototypeChain,
      },
      {
        id: 'prototypal-inheritance',
        title: '🧬 Prototypal Inheritance',
        content: prototypalInheritance,
      },
      {
        id: 'class-inheritance',
        title: '👨‍👩‍👧‍👦 Class Inheritance',
        content: classInheritance,
      },
      {
        id: 'super-keyword',
        title: '⬆️ super Keyword',
        content: superKeyword,
      },
    ],
  },

  {
    id: 'js-oops-this-binding-and-context',
    title: '🧭 this Binding & Context',
    content: '',
    items: [
      {
        id: 'arrow-functions',
        title: '🏹 Arrow Functions',
        content: arrowFunctions,
      },
      {
        id: 'method-binding',
        title: '🔗 Method Binding',
        content: methodBinding,
      },
      {
        id: 'explicit-binding',
        title: '🎯 Explicit Binding (call, apply, bind)',
        content: explicitBinding,
      },
      {
        id: 'context-loss',
        title: '⚠️ Context Loss',
        content: contextLoss,
      },
    ],
  },

  {
    id: 'js-oops-mixins-and-composition',
    title: '🧩 Composition & Reusability',
    content: '',
    items: [
      {
        id: 'delegation',
        title: '🤝 Delegation',
        content: delegation,
      },
      {
        id: 'mixins',
        title: '🧩 Mixins',
        content: mixins,
      },
      {
        id: 'composition-over-inheritance',
        title: '🏆 Composition over Inheritance',
        content: compositionOverInheritance,
      },
    ],
  },

  {
    id: 'js-oops-design-patterns',
    title: '🎨 Design Patterns',
    content: '',
    items: [
      {
        id: 'module-pattern',
        title: '📦 Module Pattern',
        content: modulePattern,
      },
      {
        id: 'singleton-pattern',
        title: '1️⃣ Singleton Pattern',
        content: singletonPattern,
      },
      {
        id: 'factory-pattern',
        title: '🏭 Factory Pattern',
        content: factoryPattern,
      },
      {
        id: 'observer-pattern',
        title: '📡 Observer Pattern',
        content: observerPattern,
      },
    ],
  },

  {
    id: 'js-oops-advanced',
    title: '🚀 Advanced OOP Concepts',
    content: '',
    items: [
      {
        id: 'method-overriding',
        title: '🔄 Method Overriding',
        content: methodOverriding,
      },
      {
        id: 'private-fields',
        title: '🔐 Private Fields',
        content: privateFields,
      },
      {
        id: 'private-methods',
        title: '🛡️ Private Methods',
        content: privateMethods,
      },
      {
        id: 'abstract-classes',
        title: '📚 Abstract Classes',
        content: abstractClasses,
      },
    ],
  },
];
