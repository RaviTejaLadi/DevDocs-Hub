/** React Router `location.state` for docs navigation scroll behavior. */
export type DocsLocationState = {
  docsScroll?: 'reset';
};

export const DOCS_NAV_RESET_SCROLL = { docsScroll: 'reset' as const } satisfies DocsLocationState;
