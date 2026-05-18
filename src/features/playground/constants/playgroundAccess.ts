import { isImplementedPlaygroundId } from '../playgroundRegistry';
import { PLAYGROUNDS } from './playgrounds';
import type { PlaygroundDefinition } from '../types';

export const getPlaygrounds = (): PlaygroundDefinition[] =>
  PLAYGROUNDS.map((playground) => ({
    ...playground,
    available: isImplementedPlaygroundId(playground.id),
  }));

export const getPlaygroundById = (id: string): PlaygroundDefinition | undefined =>
  getPlaygrounds().find((playground) => playground.id === id);
