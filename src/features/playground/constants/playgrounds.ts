import { Braces, Layers, ListOrdered, Type } from 'lucide-react';
import { ARRAY_METHODS } from './arrayMethods';
import type { PlaygroundDefinition } from '../types';

export const PLAYGROUNDS: PlaygroundDefinition[] = [
  {
    id: 'js-arrays',
    label: 'JavaScript Arrays',
    description:
      'Explore every major array method with signatures, examples, and a live runner — mutate, search, iterate, and more.',
    category: 'javascript',
    icon: ListOrdered,
    methodCount: ARRAY_METHODS.length,
    available: true,
  },
  {
    id: 'js-strings',
    label: 'JavaScript Strings',
    description: 'Interactive string methods playground — slice, split, replace, and template patterns.',
    category: 'javascript',
    icon: Type,
    available: false,
  },
  {
    id: 'js-objects',
    label: 'JavaScript Objects',
    description: 'Keys, values, entries, spread, and Object static helpers in one place.',
    category: 'javascript',
    icon: Braces,
    available: false,
  },
  {
    id: 'js-map-set',
    label: 'Map & Set',
    description: 'Collections beyond arrays — Map, Set, WeakMap, and WeakSet operations.',
    category: 'javascript',
    icon: Layers,
    available: false,
  },
];

export const getPlaygroundById = (id: string) => PLAYGROUNDS.find((p) => p.id === id);
