import { memo, useCallback, useState } from 'react';
import type { RefObject } from 'react';
import type { TopicItem } from '@/data/topics';
import { resolveTopicBadge } from '@/data/topics';
import { TopicBadgeChip } from '@/components/topic/TopicBadgeChip';
import { ListTree } from 'lucide-react';
import MarkdownRender from '@/components/markdown';
import { TranslatedText } from '@/i18n/TranslatedText';
import { useI18n } from '@/i18n/I18nProvider';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { DocsFeedMarkdownSkeleton } from './DocsFeedMarkdownSkeleton';
import type { DocsFeedNavHandlers } from '../types';
import { useDocsFeedSectionMount } from '../hooks';

type DocsFeedTopicSectionProps = {
  item: TopicItem;
  idx: number;
  total: number;
  /** Stable within a topic feed — include topic id when the same slug can exist across topics. */
  sectionDomId: string;
  /** Avoid passing route slug string to every row — only rows where this flips re-render. */
  isCurrentRoute: boolean;
  viewportRef: RefObject<HTMLDivElement | null>;
  feedNav: DocsFeedNavHandlers;
  /** Only the centered card is true; booleans keep `memo` from re-rendering every section. */
  isActive: boolean;
  sectionClassName: string;
  /** When true, the last card can advance into the next topic’s feed (infinite chain). */
  chainHasMoreToNextTopic?: boolean;
  /** When true (typically first row), the user can load the previous topic above the window. */
  chainHasMoreToPrevTopic?: boolean;
};

function DocsFeedTopicSectionInner({
  item,
  idx,
  total,
  sectionDomId,
  isCurrentRoute,
  viewportRef,
  feedNav,
  isActive,
  sectionClassName,
  chainHasMoreToNextTopic = false,
  chainHasMoreToPrevTopic = false,
}: DocsFeedTopicSectionProps) {
  const { t } = useI18n();
  const [outlineOpen, setOutlineOpen] = useState(false);
  const { sectionRef, contentMounted } = useDocsFeedSectionMount(idx, isCurrentRoute, viewportRef);

  const onReachEnd = useCallback(() => feedNav.goToNextFrom(idx), [feedNav, idx]);
  const onReachStart = useCallback(() => feedNav.goToPrevFrom(idx), [feedNav, idx]);
  const progressPct = ((idx + 1) / total) * 100;
  const badgeKind = resolveTopicBadge(item.title, item.badge, {
    siblingIndex: idx,
    siblingCount: total,
  });

  return (
    <section
      ref={sectionRef}
      id={sectionDomId}
      className={cn('doc-feed-section isolate min-w-0 w-full max-w-full contain-[layout_style]', sectionClassName)}
    >
      <div
        className={cn(
          'doc-feed-post-surface flex h-full min-h-0 w-full max-w-full min-w-0 flex-col overflow-hidden rounded-2xl border sm:rounded-3xl',
          /* Lighter blur + solid tint: heavy backdrop-filter repaints during feed scroll. */
          'border-border/70 bg-card/95 shadow-[0_22px_55px_-40px_hsl(var(--foreground)/0.48)]',
          'dark:border-border/50 dark:bg-card/45 dark:shadow-[0_26px_60px_-38px_hsl(0_0%_0%/0.55)]'
        )}
      >
        <header
          className={cn(
            'relative isolate flex min-h-13 shrink-0 flex-col overflow-hidden border-b sm:min-h-14',
            isActive ? 'border-primary/25' : 'border-border/45'
          )}
        >
          <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
            <div
              className={cn(
                'absolute inset-0',
                isActive
                  ? 'bg-[linear-gradient(102deg,hsl(var(--primary)/0.14)_0%,hsl(var(--card)/0.98)_36%,hsl(var(--muted)/0.22)_100%)] dark:bg-[linear-gradient(102deg,hsl(var(--primary)/0.18)_0%,hsl(var(--card)/0.52)_40%,hsl(var(--muted)/0.14)_100%)]'
                  : 'bg-[linear-gradient(102deg,hsl(var(--muted)/0.38)_0%,hsl(var(--card)/0.97)_48%,hsl(var(--card)/0.99)_100%)] dark:bg-[linear-gradient(102deg,hsl(var(--muted)/0.22)_0%,hsl(var(--card)/0.48)_52%,hsl(var(--card)/0.42)_100%)]'
              )}
            />
            <div className="absolute -right-6 -top-8 size-20 rounded-full bg-primary/10 blur-2xl dark:bg-primary/14 sm:size-24" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_90%_at_0%_45%,hsl(var(--primary)/0.09),transparent_58%)] dark:bg-[radial-gradient(ellipse_65%_90%_at_0%_45%,hsl(var(--primary)/0.07),transparent_58%)]" />
            <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-foreground/12 to-transparent dark:via-foreground/8" />
          </div>

          <div className="relative flex items-center gap-2.5 px-3 py-2.5 sm:gap-3.5 sm:px-4 sm:py-3">
            <div
              className={cn(
                'relative flex shrink-0 flex-col items-center justify-center rounded-xl border px-2 py-1.5 min-w-[2.65rem]',
                'bg-linear-to-br from-background/95 via-background/88 to-muted/30',
                'shadow-[0_6px_22px_-12px_hsl(var(--primary)/0.38),0_0_0_1px_hsl(var(--foreground)/0.04)_inset]',
                'dark:from-card/95 dark:via-card/82 dark:to-muted/22 dark:shadow-[0_8px_26px_-14px_hsl(var(--primary)/0.28),0_0_0_1px_hsl(0_0%_100%/0.05)_inset]',
                'sm:min-w-[2.85rem] sm:px-2.5 sm:py-2',
                isActive ? 'border-primary/40 ring-1 ring-primary/20' : 'border-border/55'
              )}
              aria-label={`${idx + 1} of ${total}`}
            >
              <span
                className={cn(
                  'font-mono text-[0.8125rem] font-bold tabular-nums leading-none sm:text-sm',
                  isActive ? 'text-primary' : 'text-foreground'
                )}
              >
                {String(idx + 1).padStart(2, '0')}
              </span>
              <span className="mt-0.5 text-[8px] font-semibold uppercase tracking-[0.16em] text-muted-foreground/80 sm:text-[9px]">
                of {total}
              </span>
            </div>

            <div className="hidden h-9 w-px shrink-0 bg-border/50 sm:block" aria-hidden />

            <div className="flex min-w-0 flex-1 items-center gap-2 overflow-hidden py-px sm:gap-2.5">
              <h2
                className={cn(
                  'min-w-0 flex-1 truncate text-base font-semibold leading-snug tracking-tight sm:text-lg',
                  isActive
                    ? 'bg-linear-to-br from-foreground via-foreground to-foreground/76 bg-clip-text text-transparent dark:to-foreground/70'
                    : 'text-foreground'
                )}
              >
                <TranslatedText text={item.title} />
              </h2>
              <TopicBadgeChip kind={badgeKind} variant="header" active={isActive} />
            </div>

            <div className="hidden shrink-0 lg:block">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    aria-pressed={outlineOpen}
                    aria-label={outlineOpen ? t('docs.hideOutline') : t('docs.showOutline')}
                    onClick={() => setOutlineOpen((open) => !open)}
                    className={cn(
                      'h-8 w-8 border-border/55 bg-background/90 shadow-[0_4px_14px_-8px_hsl(var(--foreground)/0.35)] hover:bg-accent/70 sm:h-9 sm:w-9',
                      'dark:bg-card/85',
                      outlineOpen && 'border-primary/45 bg-primary/10 text-primary hover:bg-primary/14',
                      isActive && !outlineOpen && 'border-primary/30'
                    )}
                  >
                    <ListTree className="size-4 opacity-90" aria-hidden />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom" className="max-w-[16rem] text-center">
                  {outlineOpen ? t('docs.hideOutline') : t('docs.showOutline')}
                </TooltipContent>
              </Tooltip>
            </div>
          </div>

          <div
            className="relative h-0.5 w-full bg-border/30 dark:bg-border/40"
            role="progressbar"
            aria-valuenow={idx + 1}
            aria-valuemin={1}
            aria-valuemax={total}
            aria-label={`${idx + 1} of ${total}`}
          >
            <div
              className={cn(
                'h-full bg-linear-to-r from-primary/55 via-primary to-primary/75 transition-[width] duration-300 ease-out',
                isActive && 'shadow-[0_0_10px_hsl(var(--primary)/0.4)]'
              )}
              style={{ width: `${progressPct}%` }}
            />
          </div>
        </header>

        <div className="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden bg-muted/15 px-3 pt-2.5 pb-2 dark:bg-muted/10 sm:px-3.5 sm:pt-3 sm:pb-3 md:px-4">
          <div className="prose prose-slate dark:prose-invert flex min-h-0 flex-1 flex-col overflow-hidden max-w-none min-w-0 prose-headings:font-semibold prose-headings:tracking-tight">
            {contentMounted ? (
              <MarkdownRender
                content={item.content}
                feedScrollMode
                fillViewportCard
                headingIdScope={item.id}
                scrollIntentActive={isActive}
                keyboardActive={isActive}
                hasNextDocument={idx < total - 1 || chainHasMoreToNextTopic}
                hasPrevDocument={idx > 0 || chainHasMoreToPrevTopic}
                onReachDocumentEnd={onReachEnd}
                onReachDocumentStart={onReachStart}
                hideToc={!outlineOpen}
              />
            ) : (
              <DocsFeedMarkdownSkeleton loadingLabel={t('docs.loading')} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * One topic “card” in the infinite feed. Heavy markdown UI mounts only when the section
 * nears the viewport so scrolling stays smooth.
 */
const DocsFeedTopicSection = memo(DocsFeedTopicSectionInner);
export default DocsFeedTopicSection;
