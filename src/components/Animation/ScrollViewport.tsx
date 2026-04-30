import type { RefObject } from 'react';
import { ScrollViewportContext } from './scrollViewportContext';

export function ScrollViewportProvider({
  value,
  children,
}: {
  value: RefObject<HTMLDivElement | null>;
  children: React.ReactNode;
}) {
  return <ScrollViewportContext.Provider value={value}>{children}</ScrollViewportContext.Provider>;
}
