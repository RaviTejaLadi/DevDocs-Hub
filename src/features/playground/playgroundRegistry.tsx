import type { ComponentType } from 'react';
import { ArrayPlaygroundPage } from './components/playgrounds/ArrayPlaygroundPage';
import { ObjectPlaygroundPage } from './components/playgrounds/ObjectPlaygroundPage';

/** Add a playground page here — routing and list "available" state follow automatically. */
export const PLAYGROUND_PAGE_COMPONENTS = {
  'js-arrays': ArrayPlaygroundPage,
  'js-objects': ObjectPlaygroundPage,
} as const satisfies Record<string, ComponentType>;

export type ImplementedPlaygroundId = keyof typeof PLAYGROUND_PAGE_COMPONENTS;

export function isImplementedPlaygroundId(id: string): id is ImplementedPlaygroundId {
  return id in PLAYGROUND_PAGE_COMPONENTS;
}

export function getPlaygroundPageComponent(id: string): ComponentType | undefined {
  if (!isImplementedPlaygroundId(id)) return undefined;
  return PLAYGROUND_PAGE_COMPONENTS[id];
}
