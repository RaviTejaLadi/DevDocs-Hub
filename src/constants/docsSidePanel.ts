import { cn } from '@/lib/utils';

/** Shared width for docs topic sections panel (aside) and topic browser sheet — keeps layout visually aligned at `md+`. */
export const docsSidePanelWidthClass = 'w-80 max-w-full shrink-0';

export const docsSidePanelHeaderSurfaceClass =
  'relative shrink-0 gap-0 overflow-hidden border-b border-border/25 bg-background';

export const docsSidePanelNavSurfaceClass =
  'rounded-xl bg-muted/15 p-3 dark:bg-muted/10 border border-border/20 shadow-[inset_0_1px_0_hsl(var(--foreground)/0.06)] dark:border-border/25';

/** Scroll region: flex child must shrink; bottom padding clears last row above sheet/home affordances. */
export const docsSidePanelScrollAreaClass = cn(
  'min-h-0 min-w-0 flex-1 *:data-[slot=scroll-area-viewport]:pb-4'
);
