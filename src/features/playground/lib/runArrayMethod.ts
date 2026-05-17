import type { ArrayMethodDefinition, ArrayRunResult } from '../types';

const cloneArray = (arr: unknown[]) => {
  try {
    return structuredClone(arr);
  } catch {
    return [...arr];
  }
};

const parseJson = (raw: string, label: string): unknown => {
  try {
    return JSON.parse(raw.trim() || 'null');
  } catch {
    throw new Error(`Invalid JSON for ${label}`);
  }
};

const parseCallback = (source: string) => {
  const trimmed = source.trim();
  if (!trimmed) throw new Error('Callback is required');
  // eslint-disable-next-line no-new-func
  return new Function('value', 'index', 'array', `return (${trimmed})(value, index, array);`) as (
    value: unknown,
    index: number,
    array: unknown[]
  ) => unknown;
};

const parseReduceCallback = (source: string) => {
  const trimmed = source.trim();
  const match = trimmed.match(/^\s*\(\s*([^)]*)\)\s*=>\s*(.+)$/s);
  if (match) {
    const [, params, body] = match;
    // eslint-disable-next-line no-new-func
    return new Function(params, `return ${body};`) as (
      acc: unknown,
      value: unknown,
      index: number,
      array: unknown[]
    ) => unknown;
  }
  // eslint-disable-next-line no-new-func
  return new Function('acc', 'value', 'index', 'array', `return (${trimmed})(acc, value, index, array);`) as (
    acc: unknown,
    value: unknown,
    index: number,
    array: unknown[]
  ) => unknown;
};

const parseExtraArgs = (raw: string): unknown[] => {
  const trimmed = raw.trim();
  if (!trimmed) return [];
  if (trimmed.startsWith('[')) {
    const parsed = parseJson(trimmed, 'arguments');
    if (!Array.isArray(parsed)) throw new Error('Arguments must be a JSON array');
    return parsed;
  }
  return [parseJson(trimmed, 'argument')];
};

const resolveExtra = (extra: string, methodDefault?: string, fallback = '') => {
  if (extra) return extra;
  return methodDefault ?? fallback;
};

export function runArrayMethod(
  method: ArrayMethodDefinition,
  arrayInput: string,
  extraArgsInput: string
): ArrayRunResult {
  try {
    const parsed = parseJson(arrayInput, 'array');
    const working = Array.isArray(parsed) ? cloneArray(parsed) : [];
    const extra = extraArgsInput.trim();

    switch (method.id) {
      case 'push': {
        const items = parseExtraArgs(resolveExtra(extra, method.defaultExtraArgs, '[]'));
        const result = working.push(...items);
        return { ok: true, result, arrayAfter: working };
      }
      case 'pop': {
        const result = working.pop();
        return { ok: true, result, arrayAfter: working };
      }
      case 'shift': {
        const result = working.shift();
        return { ok: true, result, arrayAfter: working };
      }
      case 'unshift': {
        const items = parseExtraArgs(resolveExtra(extra, method.defaultExtraArgs, '[]'));
        const result = working.unshift(...items);
        return { ok: true, result, arrayAfter: working };
      }
      case 'splice': {
        const args = parseExtraArgs(resolveExtra(extra, method.defaultExtraArgs, '[0,0]'));
        const start = Number(args[0] ?? 0);
        const deleteCount = args[1] !== undefined ? Number(args[1]) : undefined;
        const insertItems = args.slice(2);
        const result =
          deleteCount !== undefined ? working.splice(start, deleteCount, ...insertItems) : working.splice(start);
        return { ok: true, result, arrayAfter: working };
      }
      case 'reverse': {
        const result = working.reverse();
        return { ok: true, result, arrayAfter: working };
      }
      case 'sort': {
        if (extra) {
          const trimmed = extra.trim();
          // eslint-disable-next-line no-new-func
          const compareFn = new Function('a', 'b', `return (${trimmed})(a, b);`) as (a: unknown, b: unknown) => number;
          const result = working.sort(compareFn);
          return { ok: true, result, arrayAfter: working };
        }
        const result = working.sort();
        return { ok: true, result, arrayAfter: working };
      }
      case 'fill': {
        const args = parseExtraArgs(resolveExtra(extra, method.defaultExtraArgs, '[0]'));
        const result = working.fill(...(args as [unknown, number?, number?]));
        return { ok: true, result, arrayAfter: working };
      }
      case 'concat': {
        const items = parseExtraArgs(resolveExtra(extra, method.defaultExtraArgs, '[]'));
        const result = working.concat(...items);
        return { ok: true, result, arrayAfter: working };
      }
      case 'slice': {
        const args = parseExtraArgs(resolveExtra(extra, method.defaultExtraArgs, '[0]'));
        const result = working.slice(...(args as [number?, number?]));
        return { ok: true, result, arrayAfter: working };
      }
      case 'join': {
        const sep = extra ? String(parseJson(extra, 'separator')) : ',';
        const result = working.join(sep);
        return { ok: true, result, arrayAfter: working };
      }
      case 'at': {
        const index = Number(parseJson(resolveExtra(extra, method.defaultExtraArgs, '0'), 'index'));
        const result = working.at(index);
        return { ok: true, result, arrayAfter: working };
      }
      case 'flat': {
        const depth = extra ? Number(parseJson(extra, 'depth')) : 1;
        const result = working.flat(depth);
        return { ok: true, result, arrayAfter: working };
      }
      case 'flatMap': {
        const fn = parseCallback(resolveExtra(extra, method.defaultExtraArgs, 'x => x'));
        const result = working.flatMap((v, i) => fn(v, i, working) as unknown[] | unknown);
        return { ok: true, result, arrayAfter: working };
      }
      case 'forEach': {
        const fn = parseCallback(resolveExtra(extra, method.defaultExtraArgs, 'x => x'));
        const log: unknown[] = [];
        working.forEach((v, i) => log.push(fn(v, i, working)));
        return { ok: true, result: log, arrayAfter: working };
      }
      case 'map': {
        const fn = parseCallback(resolveExtra(extra, method.defaultExtraArgs, 'x => x'));
        const result = working.map((v, i) => fn(v, i, working));
        return { ok: true, result, arrayAfter: working };
      }
      case 'filter': {
        const fn = parseCallback(resolveExtra(extra, method.defaultExtraArgs, '() => true'));
        const result = working.filter((v, i) => Boolean(fn(v, i, working)));
        return { ok: true, result, arrayAfter: working };
      }
      case 'reduce': {
        const trimmed = resolveExtra(extra, method.defaultExtraArgs, '((acc, x) => acc + x, 0)');
        const comma = trimmed.lastIndexOf(',');
        let callbackSrc = trimmed;
        let initial: unknown = undefined;
        if (comma > trimmed.indexOf('=>')) {
          callbackSrc = trimmed.slice(0, comma).trim();
          initial = parseJson(trimmed.slice(comma + 1).trim(), 'initial value');
        }
        const fn = parseReduceCallback(callbackSrc);
        const result =
          initial === undefined
            ? working.reduce((acc, v, i) => fn(acc, v, i, working))
            : working.reduce((acc, v, i) => fn(acc, v, i, working), initial);
        return { ok: true, result, arrayAfter: working };
      }
      case 'find':
      case 'findIndex':
      case 'some':
      case 'every': {
        const fn = parseCallback(resolveExtra(extra, method.defaultExtraArgs, '() => false'));
        const result = working[method.name as 'find' | 'findIndex' | 'some' | 'every'](
          (v, i) => Boolean(fn(v, i, working)) as never
        );
        return { ok: true, result, arrayAfter: working };
      }
      case 'includes':
      case 'indexOf': {
        const args = parseExtraArgs(resolveExtra(extra, method.defaultExtraArgs, '0'));
        const result = working[method.name as 'includes' | 'indexOf'](args[0], args[1] as number | undefined);
        return { ok: true, result, arrayAfter: working };
      }
      case 'isArray': {
        const value = parseJson(extra ? extra : arrayInput, 'value');
        const result = Array.isArray(value);
        return { ok: true, result, arrayAfter: working };
      }
      case 'from': {
        const src = resolveExtra(extra, method.defaultExtraArgs, '"abc"');
        if (src.includes('=>')) {
          const paren = src.indexOf(',');
          const like = src.slice(0, paren > 0 ? paren : undefined).trim();
          const mapSrc = paren > 0 ? src.slice(paren + 1).trim() : '';
          const arrayLike = parseJson(like.startsWith('(') ? like : `(${like})`, 'arrayLike') as ArrayLike<unknown>;
          const mapFn = parseCallback(mapSrc || 'x => x');
          const result = Array.from(arrayLike, (v, i) => mapFn(v, i, working));
          return { ok: true, result, arrayAfter: working };
        }
        const arrayLike = parseJson(src.startsWith('(') ? src : `(${src})`, 'arrayLike') as ArrayLike<unknown>;
        const result = Array.from(arrayLike);
        return { ok: true, result, arrayAfter: working };
      }
      default:
        return { ok: false, error: `Method "${method.id}" is not runnable yet.` };
    }
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return { ok: false, error: message };
  }
}
