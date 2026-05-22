import { Braces, Layers, ListOrdered, Type } from 'lucide-react';
import { ARRAY_METHODS } from './arrayMethods';
import { OBJECT_METHODS } from './objectMethods';
import type { PlaygroundMeta } from '../types';

export const PLAYGROUNDS: PlaygroundMeta[] = [
  {
    id: 'js-arrays',
    label: 'JavaScript Arrays',
    description:
      'Explore every major array method with signatures, examples, and a live runner — mutate, search, iterate, and more.',
    category: 'javascript',
    icon: ListOrdered,
    methodCount: ARRAY_METHODS.length,
  },
  {
    id: 'js-strings',
    label: 'JavaScript Strings',
    description: 'Interactive string methods playground — slice, split, replace, and template patterns.',
    category: 'javascript',
    icon: Type,
  },
  {
    id: 'js-objects',
    label: 'JavaScript Objects',
    description: 'Keys, values, entries, spread, and Object static helpers in one place.',
    category: 'javascript',
    icon: Braces,
    methodCount: OBJECT_METHODS.length,
  },
  {
    id: 'js-map-set',
    label: 'Map & Set',
    description: 'Collections beyond arrays — Map, Set, WeakMap, and WeakSet operations.',
    category: 'javascript',
    icon: Layers,
  },
];
