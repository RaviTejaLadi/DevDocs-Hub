import { FileText } from 'lucide-react';
import type { Topic } from '@/topics';
import { cn } from '@/lib/utils';
import { TranslatedText } from '@/i18n/TranslatedText';
import { formatTopicTrackLabel } from '../utils';

export function DocumentationTopicHero({ topic }: { topic: Topic }) {
  const iconEl = topic.icon ?? (
    <FileText className="size-[1.05rem] shrink-0 text-primary sm:size-5" strokeWidth={1.75} aria-hidden />
  );
  const track = formatTopicTrackLabel(topic.category || topic.type);

  return (
    <div
      className={cn(
        'not-prose group relative isolate mb-px overflow-hidden rounded-lg sm:rounded-xl',
        'border border-border/50 bg-card/40 shadow-[0_1px_0_0_hsl(var(--foreground)/0.06)_inset,0_16px_48px_-28px_hsl(var(--foreground)/0.28)]',
        'backdrop-blur-xl dark:border-border/40 dark:bg-card/25 dark:shadow-[0_1px_0_0_hsl(var(--foreground)/0.08)_inset,0_20px_56px_-32px_hsl(0_0%_0%/0.5)]'
      )}
      role="region"
      aria-labelledby="docs-topic-banner-title"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute -right-[25%] -top-[95%] h-[min(10rem,42vw)] w-[min(10rem,42vw)] rounded-full bg-primary/10 blur-3xl dark:bg-primary/16"
          aria-hidden
        />
        <div
          className="absolute -bottom-[75%] -left-[18%] h-[min(9rem,38vw)] w-[min(9rem,38vw)] rounded-full bg-primary/6 blur-3xl dark:bg-primary/10"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_85%_50%_at_50%_-35%,hsl(var(--primary)/0.1),transparent_52%)] dark:bg-[radial-gradient(ellipse_85%_50%_at_50%_-35%,hsl(var(--primary)/0.08),transparent_52%)]"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.45)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.45)_1px,transparent_1px)] bg-size-[20px_20px] opacity-[0.18] mask-[linear-gradient(to_bottom,black_45%,transparent_92%)] dark:bg-[linear-gradient(to_right,hsl(var(--border)/0.32)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.32)_1px,transparent_1px)] dark:opacity-[0.12]"
          aria-hidden
        />
      </div>

      <div className="relative px-3 py-3 sm:px-4 md:px-5">
        <div className="flex items-start gap-2.5 sm:gap-3">
          <div className="relative shrink-0 pt-0.5">
            <div
              className="absolute -inset-0.5 rounded-lg bg-linear-to-br from-primary/22 via-primary/5 to-transparent opacity-75 blur-sm transition-opacity duration-500 group-hover:opacity-100 dark:from-primary/32 dark:via-primary/8 sm:rounded-xl"
              aria-hidden
            />
            <div
              className={cn(
                'relative flex size-9 items-center justify-center rounded-lg border border-border/60 bg-linear-to-br from-background/95 via-background/80 to-muted/30 text-primary sm:size-10 sm:rounded-xl',
                'shadow-[0_8px_28px_-14px_hsl(var(--primary)/0.42),0_0_0_1px_hsl(var(--foreground)/0.04)_inset] dark:from-card/90 dark:via-card/70 dark:to-muted/20 dark:shadow-[0_12px_36px_-18px_hsl(var(--primary)/0.32),0_0_0_1px_hsl(0_0%_100%/0.05)_inset]',
                '[&_svg]:drop-shadow-[0_1px_6px_hsl(var(--primary)/0.22)]'
              )}
              aria-hidden
            >
              {iconEl}
            </div>
          </div>

          <div className="min-w-0 flex-1 space-y-1 sm:space-y-1.5">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
              {track ? (
                <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-muted-foreground/90 sm:text-[10px]">
                  <span className="rounded-md border border-border/50 bg-muted/35 px-1.5 py-px text-foreground/75 dark:bg-muted/20">
                    {track}
                  </span>
                </span>
              ) : null}
              <h1
                id="docs-topic-banner-title"
                className="min-w-0 text-balance text-base font-semibold leading-tight tracking-tight text-foreground sm:text-lg md:text-xl"
              >
                <span className="bg-linear-to-br from-foreground via-foreground to-foreground/78 bg-clip-text text-transparent dark:from-foreground dark:via-foreground dark:to-foreground/72">
                  <TranslatedText text={topic.title} />
                </span>
              </h1>
            </div>
            <p className="line-clamp-2 max-w-3xl text-pretty text-xs leading-snug text-muted-foreground sm:text-[0.8125rem] sm:leading-snug">
              <TranslatedText text={topic.description} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
