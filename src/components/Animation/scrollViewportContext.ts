import { createContext, useContext } from 'react';
import type { RefObject } from 'react';

export type ViewportRef = RefObject<HTMLDivElement | null> | null;

export const ScrollViewportContext = createContext<ViewportRef>(null);

export function useScrollViewport(): RefObject<HTMLDivElement | null> | null {
  return useContext(ScrollViewportContext);
}
