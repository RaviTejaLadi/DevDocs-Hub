import { cn } from '@/lib/utils';

export function DocsFeedMarkdownSkeleton({ loadingLabel }: { loadingLabel: string }) {
  const shimmerBar = 'rounded-md bg-muted/50 dark:bg-muted/35';

  return (
    <div
      className={cn(
        'flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden motion-safe:animate-in motion-safe:fade-in motion-safe:duration-300'
      )}
      role="status"
      aria-busy="true"
      aria-live="polite"
    >
      <span className="sr-only">{loadingLabel}</span>
      <div
        className={cn(
          'motion-safe:animate-pulse flex min-h-0 flex-1 flex-col overflow-hidden',
          'rounded-[1.35rem] border border-border/40 bg-linear-to-b from-card/88 to-card/72 backdrop-blur-md sm:rounded-[1.4rem]',
          'shadow-[0_24px_60px_-34px_hsl(var(--foreground)/0.38)] ring-1 ring-black/4 dark:from-card/60 dark:to-card/45 dark:ring-white/6'
        )}
      >
        <div className="min-h-0 flex-1 overflow-hidden px-5 pt-4 pb-5 sm:px-8 sm:pt-5 sm:pb-6">
          <div className="mx-auto flex min-h-0 w-full max-w-200 flex-col gap-5">
            <div className={cn('h-7 w-[62%] shrink-0 sm:h-8', shimmerBar)} />
            <div className="flex flex-col gap-2.5">
              <div className={cn('h-3.5 w-full', shimmerBar)} />
              <div className={cn('h-3.5 w-[92%]', shimmerBar)} />
              <div className={cn('h-3.5 w-[84%]', shimmerBar)} />
              <div className={cn('h-3.5 w-[96%]', shimmerBar)} />
              <div className={cn('h-3.5 w-[58%]', shimmerBar)} />
            </div>
            <div className="rounded-xl border border-border/35 bg-muted/25 px-3.5 py-3 dark:bg-muted/15">
              <div className="flex flex-col gap-2">
                <div className={cn('h-2.5 w-[90%]', shimmerBar)} />
                <div className={cn('h-2.5 w-[76%]', shimmerBar)} />
                <div className={cn('h-2.5 w-[82%]', shimmerBar)} />
              </div>
            </div>
            <div className="flex flex-col gap-2.5 pb-2">
              <div className={cn('h-3.5 w-[94%]', shimmerBar)} />
              <div className={cn('h-3.5 w-[72%]', shimmerBar)} />
            </div>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-2 border-t border-border/35 bg-muted/20 px-3 py-2 sm:gap-3 sm:px-4 sm:py-2.5 dark:bg-muted/12">
          <div
            className={cn('h-8 w-19 shrink-0 rounded-md border border-border/25 bg-muted/40 sm:w-19.5', shimmerBar)}
          />
          <div className={cn('mx-auto h-3 w-28 rounded-md bg-muted/35 sm:w-32', shimmerBar)} />
          <div
            className={cn('h-8 w-19 shrink-0 rounded-md border border-border/25 bg-muted/40 sm:w-19.5', shimmerBar)}
          />
        </div>
      </div>
    </div>
  );
}
