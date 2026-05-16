/** React Router `location.state` for docs feed scroll behavior (see App.tsx + DocumentationPage). */
export type DocsLocationState = {
  /** `preserve`: in-feed / observer-driven topic advance — keep main ScrollArea position. */
  docsScroll?: 'preserve' | 'reset';
};

export const DOCS_NAV_PRESERVE_SCROLL = { docsScroll: 'preserve' as const } satisfies DocsLocationState;
export const DOCS_NAV_RESET_SCROLL = { docsScroll: 'reset' as const } satisfies DocsLocationState;

export function isDocsPreserveScrollState(state: unknown): boolean {
  return (state as DocsLocationState | null)?.docsScroll === 'preserve';
}
