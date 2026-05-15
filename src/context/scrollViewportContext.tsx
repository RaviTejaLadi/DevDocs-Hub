import { createContext, useContext, type ReactNode, type RefObject } from 'react';

export type ViewportRef = RefObject<HTMLDivElement | null> | null;

export const ScrollViewportContext = createContext<ViewportRef>(null);

export function ScrollViewportProvider({
  value,
  children,
}: {
  value: RefObject<HTMLDivElement | null>;
  children: ReactNode;
}) {
  return <ScrollViewportContext.Provider value={value}>{children}</ScrollViewportContext.Provider>;
}

export function useScrollViewport(): RefObject<HTMLDivElement | null> | null {
  return useContext(ScrollViewportContext);
}
