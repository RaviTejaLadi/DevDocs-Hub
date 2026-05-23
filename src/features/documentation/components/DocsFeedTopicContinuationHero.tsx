import { FileText } from 'lucide-react';
import type { Topic } from '@/data/topics';
import { cn } from '@/lib/utils';
import { TranslatedText } from '@/i18n/TranslatedText';
import { formatTopicTrackLabel, getTopicAccent } from '../utils';

/** Compact chapter break when the infinite feed crosses into another topic. */
export function DocsFeedTopicContinuationHero({ topic }: { topic: Topic }) {
  const { style: accentStyle } = getTopicAccent(topic.id);
  const iconEl = topic.icon ?? (
    <FileText
      className="size-[1.05rem] shrink-0 text-[hsl(var(--topic-h)_72%_42%)] sm:size-4"
      strokeWidth={1.75}
      aria-hidden
    />
  );
  const track = formatTopicTrackLabel(topic.category || topic.type);

  return (
    <div className="not-prose relative mb-1 mt-6 sm:mt-7" style={accentStyle} role="separator" aria-label={topic.title}>
      <div
        className="pointer-events-none absolute inset-x-0 -top-3 h-px bg-linear-to-r from-transparent via-border/55 to-transparent dark:via-border/35"
        aria-hidden
      />

      <div
        className={cn(
          'group relative isolate overflow-hidden rounded-lg border sm:rounded-xl',
          'border-[hsl(var(--topic-h)_42%_48%/0.28)] bg-card/50',
          'shadow-[0_1px_0_0_hsl(var(--foreground)/0.05)_inset,0_14px_40px_-28px_hsl(var(--topic-h)_55%_35%/0.35)]',
          'backdrop-blur-md dark:border-[hsl(var(--topic-h)_38%_52%/0.22)] dark:bg-card/30',
          'dark:shadow-[0_1px_0_0_hsl(var(--foreground)/0.07)_inset,0_18px_48px_-30px_hsl(var(--topic-h)_50%_30%/0.4)]'
        )}
      >
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden>
          <div className="absolute inset-y-0 start-0 w-[3px] bg-linear-to-b from-[hsl(var(--topic-h)_72%_52%)] via-[hsl(var(--topic-h)_65%_48%/0.85)] to-[hsl(var(--topic-h)_58%_44%/0.35)]" />
          <div className="absolute -end-[18%] -top-[110%] size-[min(9rem,36vw)] rounded-full bg-[hsl(var(--topic-h)_68%_55%/0.14)] blur-3xl dark:bg-[hsl(var(--topic-h)_62%_50%/0.2)]" />
          <div className="absolute -bottom-[90%] -start-[12%] size-[min(7.5rem,30vw)] rounded-full bg-[hsl(var(--topic-h)_60%_50%/0.08)] blur-3xl dark:bg-[hsl(var(--topic-h)_55%_48%/0.12)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_12%_-25%,hsl(var(--topic-h)_65%_50%/0.16),transparent_58%)] dark:bg-[radial-gradient(ellipse_90%_55%_at_12%_-25%,hsl(var(--topic-h)_60%_48%/0.12),transparent_58%)]" />
          <div
            className={cn(
              'absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.4)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.4)_1px,transparent_1px)]',
              'bg-size-[18px_18px] opacity-[0.14] mask-[linear-gradient(105deg,black_35%,transparent_88%)]',
              'dark:bg-[linear-gradient(to_right,hsl(var(--border)/0.28)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.28)_1px,transparent_1px)] dark:opacity-[0.1]'
            )}
          />
          <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-[hsl(var(--topic-h)_70%_55%/0.45)] via-foreground/10 to-transparent dark:via-foreground/6" />
        </div>

        <div className="relative flex min-w-0 items-center gap-3 px-3.5 py-3 ps-4 sm:gap-3.5 sm:px-5 sm:py-3.5 sm:ps-5">
          <div className="relative shrink-0">
            <div
              className="absolute -inset-0.5 rounded-lg bg-[radial-gradient(circle_at_50%_50%,hsl(var(--topic-h)_68%_55%/0.35),transparent_70%)] opacity-80 blur-sm transition-opacity duration-500 group-hover:opacity-100 sm:rounded-xl"
              aria-hidden
            />
            <div
              className={cn(
                'relative flex size-9 items-center justify-center rounded-lg border sm:size-10 sm:rounded-xl',
                'border-[hsl(var(--topic-h)_40%_48%/0.35)] bg-linear-to-br from-background/96 via-background/88 to-[hsl(var(--topic-h)_55%_96%/0.35)]',
                'shadow-[0_10px_28px_-14px_hsl(var(--topic-h)_55%_40%/0.45),0_0_0_1px_hsl(var(--foreground)/0.04)_inset]',
                'dark:from-card/92 dark:via-card/78 dark:to-[hsl(var(--topic-h)_45%_22%/0.28)]',
                'dark:shadow-[0_12px_32px_-16px_hsl(var(--topic-h)_50%_35%/0.38),0_0_0_1px_hsl(0_0%_100%/0.05)_inset]',
                '[&_svg]:drop-shadow-[0_1px_8px_hsl(var(--topic-h)_60%_45%/0.35)]'
              )}
              aria-hidden
            >
              {iconEl}
            </div>
          </div>

          <div className="min-w-0 flex-1 space-y-1">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
              {track ? (
                <span
                  className={cn(
                    'inline-flex items-center rounded-md border px-1.5 py-px text-[9px] font-bold uppercase tracking-[0.18em] sm:text-[10px]',
                    'border-[hsl(var(--topic-h)_38%_48%/0.32)] bg-[hsl(var(--topic-h)_55%_96%/0.45)] text-[hsl(var(--topic-h)_42%_32%)]',
                    'dark:border-[hsl(var(--topic-h)_35%_50%/0.28)] dark:bg-[hsl(var(--topic-h)_40%_22%/0.35)] dark:text-[hsl(var(--topic-h)_68%_78%)]'
                  )}
                >
                  {track}
                </span>
              ) : null}
              <span className="hidden h-3.5 w-px shrink-0 bg-border/50 sm:block" aria-hidden />
              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-muted-foreground/75 sm:text-[10px]">
                Up next
              </span>
            </div>
            <h2 className="min-w-0 text-balance text-sm font-semibold leading-snug tracking-tight sm:text-base">
              <span className="bg-linear-to-br from-foreground via-foreground to-[hsl(var(--topic-h)_35%_38%)] bg-clip-text text-transparent dark:from-foreground dark:via-foreground dark:to-[hsl(var(--topic-h)_55%_72%)]">
                <TranslatedText text={topic.title} />
              </span>
            </h2>
            <p className="line-clamp-2 text-pretty text-[11px] leading-snug text-muted-foreground sm:text-xs sm:leading-relaxed">
              <TranslatedText text={topic.description} />
            </p>
          </div>

          <div className="pointer-events-none hidden shrink-0 sm:flex sm:items-center sm:justify-center" aria-hidden>
            <div
              className={cn(
                'flex size-8 items-center justify-center rounded-full border',
                'border-[hsl(var(--topic-h)_38%_48%/0.25)] bg-[hsl(var(--topic-h)_55%_96%/0.25)]',
                'dark:border-[hsl(var(--topic-h)_35%_50%/0.2)] dark:bg-[hsl(var(--topic-h)_40%_22%/0.2)]'
              )}
            >
              <span className="size-1.5 rounded-full bg-[hsl(var(--topic-h)_65%_48%)] shadow-[0_0_10px_hsl(var(--topic-h)_60%_50%/0.55)]" />
            </div>
          </div>
        </div>

        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-[hsl(var(--topic-h)_65%_50%/0.35)] via-border/40 to-transparent dark:via-border/25"
          aria-hidden
        />
      </div>
    </div>
  );
}
