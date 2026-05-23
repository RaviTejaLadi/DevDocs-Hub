import type { ObjectMethodDefinition } from '../types';

function parseJson(value: string) {
  return Function(`"use strict"; return (${value})`)();
}

export function runObjectMethod(method: ObjectMethodDefinition, objectInput: string, extraArgs: string) {
  try {
    const originalObject = parseJson(objectInput);

    let result: unknown;

    const clonedObject =
      typeof structuredClone === 'function'
        ? structuredClone(originalObject)
        : JSON.parse(JSON.stringify(originalObject));

    switch (method.id) {
      case 'keys':
        result = Object.keys(clonedObject);
        break;

      case 'values':
        result = Object.values(clonedObject);
        break;

      case 'entries':
        result = Object.entries(clonedObject);
        break;

      case 'assign':
        result = Object.assign(clonedObject, parseJson(extraArgs));
        break;

      case 'freeze':
        result = Object.freeze(clonedObject);
        break;

      case 'seal':
        result = Object.seal(clonedObject);
        break;

      case 'hasOwn':
        result = Object.hasOwn(clonedObject, parseJson(extraArgs));
        break;

      case 'fromEntries':
        result = Object.fromEntries(parseJson(extraArgs));
        break;

      case 'create':
        result = Object.create(parseJson(extraArgs));
        break;

      default:
        throw new Error(`Unsupported method: ${method.id}`);
    }

    return {
      ok: true,
      result,
      objectAfter: clonedObject,
    };
  } catch (error) {
    return {
      ok: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}
