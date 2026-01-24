# JavaScript Object Methods 🚀

## What is an Object? 🧩

An object in JavaScript is a collection of key-value pairs where each key
(property) maps to a value. Objects are used to store complex data structures
and represent real-world entities.

## Why Use Objects? 🤔

1. **Structured Data**: Organize related data and functionality 📦
2. **Key-Value Pairs**: Access data by meaningful names (keys) rather than
   indexes 🔑
3. **Methods**: Can store functions as object properties (methods) 🛠️
4. **Flexibility**: Dynamic structure - can add/remove properties at runtime 🔄
5. **OOP**: Foundation for object-oriented programming in JavaScript 🏗️

## When to Use Objects? 🕒

- When you need to represent an entity with multiple attributes 🏷️
- When you need to group related data and functionality 📚
- When you need to pass complex data structures between functions 🔗
- When you need to model real-world objects in your code 🌍
- When you need to organize code using object-oriented principles 🧱

## JavaScript Object Methods 📝

Here's a comprehensive table of JavaScript object methods:

| Method                              | Description                                       | Example Usage                                    | Output                            |
| ----------------------------------- | ------------------------------------------------- | ------------------------------------------------ | --------------------------------- |
| `Object.keys()`                     | Returns array of object's own property names 🗝️   | `Object.keys(obj)`                               | `['prop1', 'prop2']`              |
| `Object.values()`                   | Returns array of object's own property values 💎  | `Object.values(obj)`                             | `['value1', 'value2']`            |
| `Object.entries()`                  | Returns array of [key, value] pairs 📑            | `Object.entries(obj)`                            | `[['prop1','value1'],...]`        |
| `Object.assign()`                   | Copies properties from source to target object 📋 | `Object.assign({}, obj)`                         | New object with copied properties |
| `Object.create()`                   | Creates new object with specified prototype 🧬    | `Object.create(proto)`                           | New object inheriting from proto  |
| `Object.freeze()`                   | Prevents modifications to object ❄️               | `Object.freeze(obj)`                             | Frozen object                     |
| `Object.seal()`                     | Prevents adding/removing properties 🔒            | `Object.seal(obj)`                               | Sealed object                     |
| `Object.isFrozen()`                 | Checks if object is frozen 🧊                     | `Object.isFrozen(obj)`                           | `true`/`false`                    |
| `Object.isSealed()`                 | Checks if object is sealed 🏷️                     | `Object.isSealed(obj)`                           | `true`/`false`                    |
| `Object.getPrototypeOf()`           | Returns object's prototype 🧬                     | `Object.getPrototypeOf(obj)`                     | Prototype object                  |
| `Object.setPrototypeOf()`           | Sets object's prototype 🏗️                        | `Object.setPrototypeOf(obj, proto)`              | Modified object                   |
| `Object.hasOwnProperty()`           | Checks if property exists directly on object 🔍   | `obj.hasOwnProperty('prop')`                     | `true`/`false`                    |
| `Object.is()`                       | Compares if two values are the same ⚖️            | `Object.is(val1, val2)`                          | `true`/`false`                    |
| `Object.getOwnPropertyNames()`      | Returns all own property names 🏷️                 | `Object.getOwnPropertyNames(obj)`                | Array of property names           |
| `Object.getOwnPropertyDescriptor()` | Returns property descriptor 📝                    | `Object.getOwnPropertyDescriptor(obj, 'prop')`   | Property descriptor object        |
| `Object.defineProperty()`           | Defines new/modifies existing property 🛠️         | `Object.defineProperty(obj, 'prop', descriptor)` | Modified object                   |
| `Object.defineProperties()`         | Defines multiple properties 🛠️🛠️                  | `Object.defineProperties(obj, descriptors)`      | Modified object                   |
| `Object.fromEntries()`              | Creates object from [key, value] pairs 🏗️         | `Object.fromEntries([['a',1],['b',2]])`          | `{a:1, b:2}`                      |
| `Object.preventExtensions()`        | Prevents adding new properties 🚫                 | `Object.preventExtensions(obj)`                  | Non-extensible object             |
| `Object.isExtensible()`             | Checks if object is extensible 🔓                 | `Object.isExtensible(obj)`                       | `true`/`false`                    |

## Sample Object with Different Data Types 🧪

Let's declare a sample object with mixed data types and perform operations on
it:

```javascript
// Sample object with different data types
let sampleObject = {
  id: 101,
  name: 'John Doe',
  isActive: true,
  address: {
    street: '123 Main St',
    city: 'New York',
  },
  skills: ['JavaScript', 'React', 'Node.js'],
  getFullName: function () {
    return this.name;
  },
  joinDate: new Date('2024-07-02T00:00:00'), // fixed date for consistent output
  salary: null,
  bonus: undefined,
};

// 1. Object.keys() - Get property names
let keys = Object.keys(sampleObject);
console.log('Object keys:', keys);
// Object keys: [ 'id', 'name', 'isActive', 'address', 'skills', 'getFullName', 'joinDate', 'salary', 'bonus' ]

// 2. Object.values() - Get property values
let values = Object.values(sampleObject);
console.log('Object values:', values);
// Object values: [ 101, 'John Doe', true, { street: '123 Main St', city: 'New York' }, [ 'JavaScript', 'React', 'Node.js' ], [Function: getFullName], 2024-07-02T00:00:00.000Z, null, undefined ]

// 3. Object.entries() - Get [key, value] pairs
let entries = Object.entries(sampleObject);
console.log('Object entries:', entries);
// Object entries: [
//   [ 'id', 101 ],
//   [ 'name', 'John Doe' ],
//   [ 'isActive', true ],
//   [ 'address', { street: '123 Main St', city: 'New York' } ],
//   [ 'skills', [ 'JavaScript', 'React', 'Node.js' ] ],
//   [ 'getFullName', [Function: getFullName] ],
//   [ 'joinDate', 2024-07-02T00:00:00.000Z ],
//   [ 'salary', null ],
//   [ 'bonus', undefined ]
// ]

// 4. Object.assign() - Copy/merge objects
let copiedObj = Object.assign({}, sampleObject);
console.log('Copied object:', copiedObj);
// Copied object: same as sampleObject content (too large to repeat fully)

// 5. Object.create() - Create with prototype
let newObj = Object.create(sampleObject);
newObj.extraProp = 'Additional property';
console.log('New object with prototype:', newObj);
// New object with prototype: { extraProp: 'Additional property' }

// 6. Object.freeze() - Make object immutable
Object.freeze(sampleObject);
console.log('Is frozen:', Object.isFrozen(sampleObject));
// Is frozen: true

// 7. Object.seal() - Prevent adding/removing properties
Object.seal(sampleObject);
console.log('Is sealed:', Object.isSealed(sampleObject));
// Is sealed: true (Note: sealing has no effect since it's already frozen)

// 8. hasOwnProperty() - Check if property exists
console.log("Has 'name' property:", sampleObject.hasOwnProperty('name'));
// Has 'name' property: true

// 9. Object.getPrototypeOf() - Get prototype
let proto = Object.getPrototypeOf(sampleObject);
console.log('Object prototype:', proto);
// Object prototype: { protoProp: 'Prototype property' } (after setPrototypeOf below)

// 10. Object.setPrototypeOf() - Set prototype
let newProto = { protoProp: 'Prototype property' };
Object.setPrototypeOf(sampleObject, newProto);
console.log('New prototype:', Object.getPrototypeOf(sampleObject));
// New prototype: { protoProp: 'Prototype property' }

// 11. Object.is() - Compare values
console.log('Comparison with Object.is:', Object.is(NaN, NaN));
// Comparison with Object.is: true

// 12. Object.getOwnPropertyNames() - Get all property names
let allProps = Object.getOwnPropertyNames(sampleObject);
console.log('All properties:', allProps);
// All properties: [ 'id', 'name', 'isActive', 'address', 'skills', 'getFullName', 'joinDate', 'salary', 'bonus' ]

// 13. Object.getOwnPropertyDescriptor() - Get property details
let propDesc = Object.getOwnPropertyDescriptor(sampleObject, 'name');
console.log("Property descriptor for 'name':", propDesc);
// Property descriptor for 'name': { value: 'John Doe', writable: false, enumerable: true, configurable: false }

// 14. Object.defineProperty() - Define new property
Object.defineProperty(sampleObject, 'newProp', {
  value: 'New property value',
  writable: true,
  enumerable: true,
  configurable: true,
});
console.log('After adding new property:', sampleObject.newProp);
// After adding new property: New property value

// 15. Object.defineProperties() - Define multiple properties
Object.defineProperties(sampleObject, {
  prop1: { value: 'Value 1', enumerable: true },
  prop2: { value: 'Value 2', enumerable: true },
});
console.log(
  'After adding multiple properties:',
  sampleObject.prop1,
  sampleObject.prop2
);
// After adding multiple properties: Value 1 Value 2

// 16. Object.fromEntries() - Create object from entries
let entriesArray = [
  ['a', 1],
  ['b', 2],
  ['c', 3],
];
let fromEntriesObj = Object.fromEntries(entriesArray);
console.log('Object from entries:', fromEntriesObj);
// Object from entries: { a: 1, b: 2, c: 3 }

// 17. Object.preventExtensions() - Prevent new properties
Object.preventExtensions(sampleObject);
console.log('Is extensible:', Object.isExtensible(sampleObject));
// Is extensible: false

// 18. Accessing nested objects and arrays
console.log('Street address:', sampleObject.address.street);
// Street address: 123 Main St
console.log('First skill:', sampleObject.skills[0]);
// First skill: JavaScript

// 19. Calling object method
console.log('Full name:', sampleObject.getFullName());
// Full name: John Doe

// 20. Checking property existence with 'in' operator
console.log("'name' exists in object:", 'name' in sampleObject);
// 'name' exists in object: true
```

## Important Notes About Objects 📝

1. **Property Access**: Can use dot notation (`obj.prop`) or bracket notation
   (`obj['prop']`) 🖊️
2. **Property Enumeration**: Some methods only return enumerable properties 📋
3. **Prototype Chain**: Methods like `hasOwnProperty()` only check the object
   itself, not the prototype chain ⛓️
4. **Immutability**: `freeze()`, `seal()`, and `preventExtensions()` provide
   different levels of immutability 🧊
5. **Property Descriptors**: Can control property behavior (writable,
   enumerable, configurable) ⚙️

Objects are fundamental to JavaScript programming, and mastering these methods
will give you powerful tools for working with complex data structures. 💡
