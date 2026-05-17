import { FileText } from 'lucide-react';
import type { Topic } from '@/data/topics';
import { cn } from '@/lib/utils';
import { TranslatedText } from '@/i18n/TranslatedText';
import { formatTopicTrackLabel } from '../utils';

export function DocsFeedTopicContinuationHero({ topic }: { topic: Topic }) {
  const iconEl = topic.icon ?? (
    <FileText className="size-[1.05rem] shrink-0 text-primary sm:size-4" strokeWidth={1.75} aria-hidden />
  );
  const track = formatTopicTrackLabel(topic.category || topic.type);

  return (
    <div
      className={cn(
        'not-prose relative mb-1 mt-6 overflow-hidden rounded-lg border border-border/50 bg-card/40 shadow-sm sm:rounded-xl sm:mt-7',
        'dark:border-border/40 dark:bg-card/25'
      )}
      role="separator"
      aria-label={topic.title}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_45%_at_50%_-20%,hsl(var(--primary)/0.08),transparent_55%)] dark:bg-[radial-gradient(ellipse_80%_45%_at_50%_-20%,hsl(var(--primary)/0.06),transparent_55%)]"
        aria-hidden
      />
      <div className="relative flex min-w-0 items-center gap-2.5 px-3 py-2.5 sm:gap-3 sm:px-4 sm:py-3">
        <div
          className={cn(
            'relative flex size-8 shrink-0 items-center justify-center rounded-lg border border-border/55 bg-linear-to-br from-background/95 via-background/85 to-muted/25 text-primary sm:size-9 sm:rounded-xl',
            'dark:from-card/90 dark:via-card/75 dark:to-muted/20'
          )}
          aria-hidden
        >
          {iconEl}
        </div>
        <div className="min-w-0 flex-1 space-y-0.5">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
            {track ? (
              <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-muted-foreground/90 sm:text-[10px]">
                <span className="rounded-md border border-border/45 bg-muted/30 px-1.5 py-px text-foreground/75 dark:bg-muted/18">
                  {track}
                </span>
              </span>
            ) : null}
            <h2 className="min-w-0 text-balance text-sm font-semibold leading-snug tracking-tight text-foreground sm:text-base">
              <TranslatedText text={topic.title} />
            </h2>
          </div>
          <p className="line-clamp-2 text-pretty text-[11px] leading-snug text-muted-foreground sm:text-xs">
            <TranslatedText text={topic.description} />
          </p>
        </div>
      </div>
    </div>
  );
}
