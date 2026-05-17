import { FileText } from 'lucide-react';
import type { Stream } from '@/topics';
import { cn } from '@/lib/utils';
import { TranslatedText } from '@/i18n/TranslatedText';

export function DocsFeedStreamBanner({ stream }: { stream: Stream }) {
  const iconEl = stream.icon ?? (
    <FileText className="size-[1.1rem] shrink-0 text-primary sm:size-5" strokeWidth={1.75} aria-hidden />
  );

  return (
    <div
      className={cn(
        'not-prose relative mb-3 overflow-hidden rounded-lg border border-primary/25 bg-linear-to-r from-primary/12 via-primary/6 to-transparent',
        'shadow-[inset_0_1px_0_0_hsl(var(--foreground)/0.06)] sm:mb-4 sm:rounded-xl',
        'dark:from-primary/16 dark:via-primary/8 dark:border-primary/30'
      )}
      role="banner"
      aria-label={stream.title}
    >
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(ellipse_80%_120%_at_100%_50%,hsl(var(--primary)/0.12),transparent_62%)] dark:bg-[radial-gradient(ellipse_80%_120%_at_100%_50%,hsl(var(--primary)/0.1),transparent_62%)]"
        aria-hidden
      />
      <div className="relative flex min-w-0 items-start gap-3 px-3 py-3 sm:gap-4 sm:px-4 sm:py-3.5 md:px-5">
        <div
          className={cn(
            'flex size-10 shrink-0 items-center justify-center rounded-lg border border-border/60 bg-background/90 text-primary sm:size-11 sm:rounded-xl',
            'shadow-[0_8px_24px_-14px_hsl(var(--primary)/0.35)] dark:bg-card/80'
          )}
          aria-hidden
        >
          {iconEl}
        </div>
        <div className="min-w-0 flex-1 space-y-1">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/90 sm:text-[11px]">
            Learning stream
          </p>
          <h2 className="text-balance text-base font-semibold leading-snug text-foreground sm:text-lg md:text-xl">
            <TranslatedText text={stream.title} />
          </h2>
          <p className="line-clamp-2 max-w-3xl text-pretty text-xs leading-snug text-muted-foreground sm:text-sm">
            <TranslatedText text={stream.description} />
          </p>
        </div>
      </div>
    </div>
  );
}
