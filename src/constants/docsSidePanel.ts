import { cn } from '@/lib/utils';

/** Shared width for docs topic sections panel (aside). */
export const docsSidePanelWidthClass = 'w-80 max-w-full shrink-0';

/** Docs page shell: gap between sidebar and main, outer inset. */
export const docsShellLayoutClass = 'gap-4 p-4 sm:gap-4 sm:p-4';

/** Main docs content column — shell already provides horizontal inset. */
export const docsMainContentPaddingClass =
  'mx-auto w-full min-w-0 max-w-none pb-[max(1.5rem,env(safe-area-inset-bottom))]';

/** Elevation: sidebar panel, hero strip, article cards. */
export const docsPanelShadowClass = 'shadow-[var(--panel-shadow)] dark:shadow-none';

/** Elevation: topic browser sheet and other overlays. */
export const docsRaisedShadowClass = 'shadow-[var(--panel-shadow-raised)] dark:shadow-none';

/** Inset: nested nav wells inside the sidebar. */
export const docsInsetShadowClass = '';

/** FAB / floating controls. */
export const docsFabShadowClass = 'shadow-none';

export const docsFabShadowHoverClass = 'hover:shadow-none';

/** Small toolbar controls (sidebar collapse, reopen). */
export const docsControlShadowClass = 'shadow-none';

/** Article + on-this-page TOC shared card surface. */
export const docsArticleSurfaceClass = cn(
  'overflow-hidden rounded-2xl border border-border/35 bg-card/72 backdrop-blur-md dark:bg-card/55 dark:backdrop-blur-sm',
  docsPanelShadowClass
);

export const docsSidePanelAsideClass = cn(
  'rounded-xl border border-border/40 bg-card/72 backdrop-blur-md dark:bg-background',
  docsPanelShadowClass
);

export const docsSidePanelHeaderSurfaceClass =
  'relative shrink-0 overflow-hidden border-b border-border/25 bg-background';

/** Single left guide line wrapping a sidebar tree branch. */
export const docsSidebarTreeBranchClass = 'ml-2 border-l-2 border-sidebar-border/70 pl-2.5';

/** Nested sub-menu — indent only, shares the branch line. */
export const docsSidebarTreeSubMenuClass = 'mx-0 w-full min-w-0 translate-x-0 gap-0.5 border-l-0 py-0.5 pl-3';

export const docsSidePanelNavSurfaceClass = cn('rounded-xl bg-muted/35 dark:bg-muted/10', docsInsetShadowClass);

export const docsHeroSurfaceClass = cn(
  'rounded-xl border border-border/40 bg-card/72 backdrop-blur-md dark:bg-card/50 dark:backdrop-blur-sm',
  docsPanelShadowClass
);

export const docsHeroIconSurfaceClass = cn('rounded-lg border border-border/40 bg-muted/20', 'shadow-none');

/** Scroll region: flex child must shrink; bottom padding clears last row above sheet/home affordances. */
export const docsSidePanelScrollAreaClass = cn('min-h-0 min-w-0 flex-1 *:data-[slot=scroll-area-viewport]:pb-4');

/** Native wheel steps in the topic tree — do not inherit global smooth scroll on the viewport. */
export const docsSidePanelScrollViewportClass = 'docs-sidebar-scroll';

/** Right topic-browser sheet — wider than the docs sidebar for stream/category browsing. */
export const docsTopicBrowserSheetContentClass = cn(
  'flex min-h-0 flex-col gap-0 overflow-hidden border border-border/40 p-0',
  'shrink-0 bg-card/72 backdrop-blur-md supports-backdrop-filter:bg-card/62 dark:bg-background dark:supports-backdrop-filter:bg-background/95',
  docsRaisedShadowClass,
  '!top-2 !right-2 !bottom-2 !left-auto !h-auto',
  'max-h-[calc(100dvh-1.5rem-env(safe-area-inset-top)-0.5rem)] md:rounded-xl',
  '!w-96 !max-w-[min(92vw,24rem)]'
);

/** Fixed bottom-right anchor for docs FABs; scroll-to-top is absolutely stacked above the topic browser. */
export const docsFloatingActionStackClass = cn(
  'fixed z-40',
  'right-[max(1rem,env(safe-area-inset-right))] sm:right-6 md:right-8',
  'bottom-[max(1.25rem,env(safe-area-inset-bottom))]'
);

/** Scroll-to-top overlays above the topic browser without shifting its anchor. */
export const docsScrollToTopButtonClass = cn(
  'absolute bottom-full left-1/2 mb-3 size-11 -translate-x-1/2',
  'transition-[opacity,transform] duration-200 ease-out'
);

/** Shared chrome for docs floating controls (position via docsFloatingActionStackClass). */
export const docsFloatingActionButtonClass = cn(
  'inline-flex size-10 shrink-0 items-center justify-center rounded-lg',
  'border border-border/50 bg-card/85 backdrop-blur-md text-muted-foreground dark:bg-card/90 dark:backdrop-blur-sm',
  docsFabShadowClass,
  'transition-[transform,box-shadow,background-color] duration-200',
  'hover:bg-card hover:text-foreground active:scale-[0.96]',
  docsFabShadowHoverClass
);

/** Prev/next lesson navigation cards. */
export const docsPageNavLinkClass = cn(
  'rounded-xl border border-border/60 transition-[color,background-color,box-shadow] duration-200',
  'hover:border-border hover:bg-muted/40'
);
