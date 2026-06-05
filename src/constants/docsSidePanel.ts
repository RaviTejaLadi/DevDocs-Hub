import { cn } from '@/lib/utils';

/** Shared width for docs topic sections panel (aside) and topic browser sheet — keeps layout visually aligned at `md+`. */
export const docsSidePanelWidthClass = 'w-80 max-w-full shrink-0';

export const docsSidePanelHeaderSurfaceClass =
  'relative shrink-0 gap-0 overflow-hidden border-b border-border/25 bg-background';

export const docsSidePanelNavSurfaceClass =
  'rounded-xl bg-muted/20 p-2.5 dark:bg-muted/10 border border-border/25 shadow-[inset_0_1px_0_hsl(var(--foreground)/0.05)] dark:border-border/20';

/** Scroll region: flex child must shrink; bottom padding clears last row above sheet/home affordances. */
export const docsSidePanelScrollAreaClass = cn('min-h-0 min-w-0 flex-1 *:data-[slot=scroll-area-viewport]:pb-4');

/** Native wheel steps in the topic tree — do not inherit global smooth scroll on the viewport. */
export const docsSidePanelScrollViewportClass = 'docs-sidebar-scroll';

/** Right topic-browser sheet: inset from viewport with rounded panel at `md+`. */
export const docsTopicBrowserSheetContentClass = cn(
  'flex min-h-0 flex-col gap-0 overflow-hidden border border-border/40 p-0 shadow-xl',
  'top-2 right-2 bottom-2 left-auto m-0 h-[calc(100%-1rem)] max-h-[calc(100%-1rem)] md:rounded-xl',
  'z-70 w-[min(100vw-1rem,24rem)] max-w-full shrink-0 bg-background supports-backdrop-filter:bg-background/95'
);

/** Shared chrome for fixed circular docs controls (primary sidebar toggle, topic browser trigger). */
export const docsFloatingActionButtonClass = cn(
  'fixed z-60 inline-flex size-10 shrink-0 rounded-full border border-border/50 bg-card/90 shadow-md backdrop-blur-sm',
  'text-secondary-foreground transition-[transform,box-shadow] duration-200',
  'hover:bg-card hover:shadow-lg active:scale-[0.96]',
  'right-[max(1rem,env(safe-area-inset-right))] sm:right-6'
);

/** Below NavBar (sticky top-2 + h-14 + safe-area). */
export const docsFloatingActionButtonTopClass = 'top-[calc(0.5rem+3.5rem+max(0px,env(safe-area-inset-top))+0.5rem)]';

/** Second slot in the vertical stack (toggle height + gap). */
export const docsFloatingActionButtonTopStackedClass =
  'top-[calc(0.5rem+3.5rem+max(0px,env(safe-area-inset-top))+0.5rem+2.5rem+0.375rem)]';
