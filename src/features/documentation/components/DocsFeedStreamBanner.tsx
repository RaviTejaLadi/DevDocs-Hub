import { FileText, Layers } from 'lucide-react';
import type { Stream } from '@/data/topics';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { useI18n } from '@/i18n/I18nProvider';
import { TranslatedText } from '@/i18n/TranslatedText';
import { getStreamEmoji } from '@/features/landing/constants';

export function DocsFeedStreamBanner({ stream }: { stream: Stream }) {
  const { t } = useI18n();
  const iconEl = stream.icon ?? (
    <FileText className="size-[1.1rem] shrink-0 text-primary sm:size-5" strokeWidth={1.75} aria-hidden />
  );
  const emoji = getStreamEmoji(stream.id);

  return (
    <div
      className={cn(
        'not-prose group relative isolate mb-3 overflow-hidden rounded-2xl border border-primary/25',
        'bg-card/45 shadow-[0_1px_0_0_hsl(var(--foreground)/0.06)_inset,0_18px_48px_-28px_hsl(var(--foreground)/0.32)]',
        'backdrop-blur-xl dark:border-primary/30 dark:bg-card/25'
      )}
      role="banner"
      aria-label={stream.title}
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-[18%] -top-[95%] h-44 w-44 rounded-full bg-primary/12 blur-3xl dark:bg-primary/16" />
        <div className="absolute -bottom-[70%] -left-[14%] h-36 w-36 rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_50%_-20%,hsl(var(--primary)/0.12),transparent_55%)]" />
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.4)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.4)_1px,transparent_1px)] bg-size-[22px_22px] opacity-[0.14] mask-[linear-gradient(to_bottom,black_40%,transparent_95%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(ellipse_80%_120%_at_100%_50%,hsl(var(--primary)/0.12),transparent_62%)]"
          aria-hidden
        />
      </div>

      <div className="relative flex min-w-0 items-start gap-3.5 px-4 py-4 sm:gap-4 sm:px-5 sm:py-4 md:px-6">
        <div className="relative shrink-0">
          <div
            className={cn(
              'flex size-11 shrink-0 items-center justify-center rounded-xl border border-border/60 bg-linear-to-br from-background/95 via-background/88 to-muted/30 text-primary sm:size-12 sm:rounded-2xl',
              'shadow-[0_10px_28px_-14px_hsl(var(--primary)/0.38)] dark:from-card/90 dark:via-card/75 dark:to-muted/20'
            )}
            aria-hidden
          >
            {iconEl}
          </div>
          <span
            className="absolute -bottom-1.5 -right-1.5 flex size-6 items-center justify-center rounded-full border border-border/40 bg-background text-xs shadow-sm"
            aria-hidden
          >
            {emoji}
          </span>
        </div>

        <div className="min-w-0 flex-1 space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1 rounded-full border border-primary/20 bg-primary/8 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.16em] text-primary sm:text-[11px]">
              <span aria-hidden>🎓</span>
              {t('docs.learningStream')}
            </span>
            <Badge variant="secondary" className="h-6 px-2 border border-border/35 bg-secondary/65 text-[10px]">
              <Layers className="h-3 w-3 mr-1 opacity-70" />
              {t('docs.topicsInStream', { count: stream.topics.length })}
            </Badge>
          </div>
          <h2 className="text-balance text-base font-bold leading-snug tracking-tight text-gradient-sheen sm:text-lg md:text-xl">
            <TranslatedText text={stream.title} />
          </h2>
          <p className="line-clamp-2 max-w-3xl text-pretty text-xs leading-relaxed text-muted-foreground sm:text-sm">
            <TranslatedText text={stream.description} />
          </p>
        </div>
      </div>
    </div>
  );
}
