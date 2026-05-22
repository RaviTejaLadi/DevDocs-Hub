import type {
    ObjectMethodCategory,
    ObjectMethodDefinition,
  } from '../types';
  
  export const OBJECT_METHOD_CATEGORIES: Record<
    ObjectMethodCategory,
    {
      label: string;
      description: string;
    }
  > = {
    static: {
      label: 'Static',
      description: 'Methods available directly on Object.',
    },
  
    inspection: {
      label: 'Inspection',
      description: 'Read or inspect object data.',
    },
  
    transformation: {
      label: 'Transformation',
      description: 'Convert or transform object structures.',
    },
  
    mutation: {
      label: 'Mutation',
      description: 'Modify or control object behavior.',
    },
  };
  
  export const OBJECT_METHODS: ObjectMethodDefinition[] = [
    {
      id: 'keys',
      name: 'keys',
      category: 'inspection',
      signature: 'Object.keys(obj)',
      description: 'Returns an array of enumerable property names.',
      mutates: false,
      returns: 'string[]',
      example: 'Object.keys({ a: 1, b: 2 });',
      defaultObject: '{ "a": 1, "b": 2 }',
    },
  
    {
      id: 'values',
      name: 'values',
      category: 'inspection',
      signature: 'Object.values(obj)',
      description: 'Returns an array of enumerable property values.',
      mutates: false,
      returns: 'any[]',
      example: 'Object.values({ a: 1, b: 2 });',
      defaultObject: '{ "a": 1, "b": 2 }',
    },
  
    {
      id: 'entries',
      name: 'entries',
      category: 'inspection',
      signature: 'Object.entries(obj)',
      description: 'Returns key-value pairs as nested arrays.',
      mutates: false,
      returns: '[string, any][]',
      example: 'Object.entries({ a: 1 });',
      defaultObject: '{ "a": 1, "b": 2 }',
    },
  
    {
      id: 'assign',
      name: 'assign',
      category: 'mutation',
      signature: 'Object.assign(target, ...sources)',
      description: 'Copies properties from sources into target object.',
      mutates: true,
      returns: 'object',
      example: 'Object.assign(obj, { c: 3 });',
      defaultObject: '{ "a": 1 }',
      extraArgsLabel: 'Source object(s)',
      defaultExtraArgs: '{ "b": 2 }',
    },
  
    {
      id: 'freeze',
      name: 'freeze',
      category: 'mutation',
      signature: 'Object.freeze(obj)',
      description: 'Prevents adding/removing/changing properties.',
      mutates: true,
      returns: 'object',
      example: 'Object.freeze(obj);',
      defaultObject: '{ "name": "Ravi" }',
    },
  
    {
      id: 'seal',
      name: 'seal',
      category: 'mutation',
      signature: 'Object.seal(obj)',
      description: 'Prevents adding/removing properties.',
      mutates: true,
      returns: 'object',
      example: 'Object.seal(obj);',
      defaultObject: '{ "name": "React" }',
    },
  
    {
      id: 'hasOwn',
      name: 'hasOwn',
      category: 'inspection',
      signature: 'Object.hasOwn(obj, key)',
      description: 'Checks if object contains own property.',
      mutates: false,
      returns: 'boolean',
      example: 'Object.hasOwn(obj, "name");',
      defaultObject: '{ "name": "JS" }',
      extraArgsLabel: 'Property name',
      defaultExtraArgs: '"name"',
    },
  
    {
      id: 'fromEntries',
      name: 'fromEntries',
      category: 'transformation',
      signature: 'Object.fromEntries(entries)',
      description: 'Transforms entries into an object.',
      mutates: false,
      returns: 'object',
      example: 'Object.fromEntries([["a",1],["b",2]])',
      defaultObject: '{}',
      extraArgsLabel: 'Entries array',
      defaultExtraArgs: '[["a",1],["b",2]]',
    },
  
    {
      id: 'create',
      name: 'create',
      category: 'static',
      signature: 'Object.create(proto)',
      description: 'Creates a new object with specified prototype.',
      mutates: false,
      returns: 'object',
      example: 'Object.create({ role: "admin" })',
      defaultObject: '{}',
      extraArgsLabel: 'Prototype object',
      defaultExtraArgs: '{ "role": "admin" }',
    },
  ];
  
  export const getObjectMethodById = (id: string) =>
    OBJECT_METHODS.find((m) => m.id === id);