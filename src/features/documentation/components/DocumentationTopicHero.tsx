import { FileText, BookOpen } from 'lucide-react';
import type { Topic } from '@/data/topics';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { useI18n } from '@/i18n/I18nProvider';
import { TranslatedText } from '@/i18n/TranslatedText';
import { formatTopicTrackLabel } from '../utils';
import { flattenTopicItems } from '../utils/topicItems';

export function DocumentationTopicHero({ topic }: { topic: Topic }) {
  const { t } = useI18n();
  const iconEl = topic.icon ?? (
    <FileText className="size-[1.05rem] shrink-0 text-primary sm:size-5" strokeWidth={1.75} aria-hidden />
  );
  const track = formatTopicTrackLabel(topic.category || topic.type);
  const lessonCount = flattenTopicItems(topic.items).length;

  return (
    <div
      className={cn(
        'not-prose group relative isolate mb-px overflow-hidden rounded-2xl',
        'border border-border/50 bg-card/40 shadow-[0_1px_0_0_hsl(var(--foreground)/0.06)_inset,0_16px_48px_-28px_hsl(var(--foreground)/0.28)]',
        'backdrop-blur-xl dark:border-border/40 dark:bg-card/25 dark:shadow-[0_1px_0_0_hsl(var(--foreground)/0.08)_inset,0_20px_56px_-32px_hsl(0_0%_0%/0.5)]'
      )}
      role="region"
      aria-labelledby="docs-topic-banner-title"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-[25%] -top-[95%] h-[min(10rem,42vw)] w-[min(10rem,42vw)] rounded-full bg-primary/10 blur-3xl dark:bg-primary/16" />
        <div className="absolute -bottom-[75%] -left-[18%] h-[min(9rem,38vw)] w-[min(9rem,38vw)] rounded-full bg-primary/6 blur-3xl dark:bg-primary/10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_85%_50%_at_50%_-35%,hsl(var(--primary)/0.1),transparent_52%)]" />
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.45)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.45)_1px,transparent_1px)] bg-size-[20px_20px] opacity-[0.18] mask-[linear-gradient(to_bottom,black_45%,transparent_92%)]"
          aria-hidden
        />
        <div className="pointer-events-none absolute -right-2 -top-2 text-6xl opacity-[0.06] select-none" aria-hidden>
          📚
        </div>
      </div>

      <div className="relative px-4 py-4 sm:px-5 sm:py-5 md:px-6 space-y-3">
        <div className="flex items-start gap-3 sm:gap-4">
          <div className="relative shrink-0 pt-0.5">
            <div
              className="absolute -inset-0.5 rounded-xl bg-linear-to-br from-primary/22 via-primary/5 to-transparent opacity-75 blur-sm transition-opacity duration-500 group-hover:opacity-100"
              aria-hidden
            />
            <div
              className={cn(
                'relative flex size-11 items-center justify-center rounded-xl border border-border/60 bg-linear-to-br from-background/95 via-background/80 to-muted/30 text-primary sm:size-12',
                'shadow-[0_8px_28px_-14px_hsl(var(--primary)/0.42),0_0_0_1px_hsl(var(--foreground)/0.04)_inset]',
                '[&_svg]:drop-shadow-[0_1px_6px_hsl(var(--primary)/0.22)]'
              )}
              aria-hidden
            >
              {iconEl}
            </div>
          </div>

          <div className="min-w-0 flex-1 space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1 rounded-full border border-primary/20 bg-primary/8 px-2.5 py-0.5 text-[10px] font-semibold text-primary">
                <span aria-hidden>📖</span>
                {t('docs.nowReading')}
              </span>
              {track ? (
                <span className="rounded-md border border-border/50 bg-muted/35 px-1.5 py-px text-[10px] font-semibold uppercase tracking-[0.14em] text-foreground/75">
                  {track}
                </span>
              ) : null}
              <Badge variant="secondary" className="h-6 px-2 border border-border/35 bg-secondary/65 text-[10px]">
                <BookOpen className="h-3 w-3 mr-1 opacity-70" />
                {t('sidebar.lessonsInTopic', { count: lessonCount })}
              </Badge>
            </div>
            <h1
              id="docs-topic-banner-title"
              className="min-w-0 text-balance text-lg font-bold leading-tight tracking-tight sm:text-xl md:text-2xl"
            >
              <span className="text-gradient-sheen">
                <TranslatedText text={topic.title} />
              </span>
            </h1>
            <p className="line-clamp-2 max-w-3xl text-pretty text-xs leading-relaxed text-muted-foreground sm:text-sm">
              <TranslatedText text={topic.description} />
            </p>
          </div>
        </div>

        <p className="flex items-start gap-2 rounded-lg border border-border/35 bg-muted/25 px-3 py-2 text-xs text-muted-foreground">
          <span className="text-sm leading-none mt-px shrink-0" aria-hidden>
            💡
          </span>
          {t('docs.readingTip')}
        </p>
      </div>
    </div>
  );
}
