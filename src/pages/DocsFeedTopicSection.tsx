import { memo, useCallback, useEffect, useRef, useState } from 'react';
import type { RefObject } from 'react';
import type { TopicItem } from '../topics';
import { ListTree } from 'lucide-react';
import MarkdownRender from '@/components/markdown';
import { TranslatedText } from '@/i18n/TranslatedText';
import { useI18n } from '@/i18n/I18nProvider';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

const EAGER_MOUNT_COUNT = 2;
/** Prefetch band: ~one viewport above/below the scroll root so mounts happen before the card is centered. */
const LAZY_ROOT_MARGIN = '95% 0px 95% 0px';

export type DocsFeedNavHandlers = {
  goToNextFrom: (idx: number) => void;
  goToPrevFrom: (idx: number) => void;
};

type DocsFeedTopicSectionProps = {
  item: TopicItem;
  idx: number;
  total: number;
  routeSlug: string | undefined;
  viewportRef: RefObject<HTMLDivElement | null>;
  feedNav: DocsFeedNavHandlers;
  inViewSlug: string;
  sectionClassName: string;
};

function DocsFeedTopicSectionInner({
  item,
  idx,
  total,
  routeSlug,
  viewportRef,
  feedNav,
  inViewSlug,
  sectionClassName,
}: DocsFeedTopicSectionProps) {
  const { t } = useI18n();
  const sectionRef = useRef<HTMLElement>(null);
  const [outlineOpen, setOutlineOpen] = useState(false);
  const [contentMounted, setContentMounted] = useState(() => idx < EAGER_MOUNT_COUNT || item.id === routeSlug);

  useEffect(() => {
    if (item.id === routeSlug) {
      setContentMounted(true);
    }
  }, [item.id, routeSlug]);

  useEffect(() => {
    if (contentMounted) return;

    let io: IntersectionObserver | null = null;
    let raf = 0;
    let cancelled = false;

    let attempts = 0;
    const maxAttempts = 300;

    const attach = () => {
      if (cancelled) return;
      const el = sectionRef.current;
      const root = viewportRef.current;
      if (!el || !root) {
        if (attempts < maxAttempts) {
          attempts += 1;
          raf = requestAnimationFrame(attach);
        }
        return;
      }
      io = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (e.isIntersecting) {
              setContentMounted(true);
              io?.disconnect();
              io = null;
              return;
            }
          }
        },
        { root, rootMargin: LAZY_ROOT_MARGIN, threshold: 0 }
      );
      io.observe(el);
    };

    attach();

    return () => {
      cancelled = true;
      if (raf) cancelAnimationFrame(raf);
      io?.disconnect();
    };
  }, [contentMounted, viewportRef]);

  const onReachEnd = useCallback(() => feedNav.goToNextFrom(idx), [feedNav, idx]);
  const onReachStart = useCallback(() => feedNav.goToPrevFrom(idx), [feedNav, idx]);

  const isActive = inViewSlug === item.id;

  return (
    <section ref={sectionRef} id={`doc-feed-${item.id}`} className={cn('doc-feed-section min-w-0 w-full max-w-full', sectionClassName)}>
      <div
        className={cn(
          'doc-feed-post-surface flex h-full min-h-0 w-full max-w-full min-w-0 flex-col overflow-hidden rounded-2xl border sm:rounded-3xl',
          'border-border/70 bg-card/90 shadow-[0_22px_55px_-40px_hsl(var(--foreground)/0.48)] backdrop-blur-md',
          'dark:border-border/50 dark:bg-card/30 dark:shadow-[0_26px_60px_-38px_hsl(0_0%_0%/0.55)]',
          'transition-[box-shadow,border-color] duration-300 ease-out',
          isActive &&
            'border-primary/40 shadow-[0_28px_64px_-36px_hsl(var(--primary)/0.35)] ring-1 ring-primary/25 dark:shadow-[0_30px_70px_-36px_hsl(var(--primary)/0.22)]'
        )}
      >
        <header className="flex min-h-11 shrink-0 items-center gap-2.5 border-b border-border/40 bg-muted/20 px-3 py-2.5 sm:min-h-12 sm:gap-3 sm:px-4 sm:py-3">
          <span
            className="inline-flex h-7 shrink-0 items-center justify-center rounded-md border border-border/50 bg-background/80 px-2 font-mono text-[10px] font-semibold tabular-nums text-muted-foreground sm:h-8 sm:text-[11px]"
            aria-label={`${idx + 1} of ${total}`}
          >
            {String(idx + 1).padStart(2, '0')}
            <span className="mx-0.5 opacity-40" aria-hidden>
              /
            </span>
            {total}
          </span>
          <h2 className="min-w-0 flex-1 text-pretty text-base font-semibold leading-tight tracking-tight text-foreground sm:text-lg">
            <TranslatedText text={item.title} />
          </h2>
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
                  className="h-8 w-8 border-border/50 bg-background/80 shadow-none hover:bg-accent/70 sm:h-9 sm:w-9"
                >
                  <ListTree className="size-4 opacity-90" aria-hidden />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom" className="max-w-[16rem] text-center">
                {outlineOpen ? t('docs.hideOutline') : t('docs.showOutline')}
              </TooltipContent>
            </Tooltip>
          </div>
        </header>

        <div className="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden bg-muted/15 px-3 pt-2.5 pb-2 dark:bg-muted/10 sm:px-3.5 sm:pt-3 sm:pb-3 md:px-4">
          <div className="prose prose-slate dark:prose-invert flex min-h-0 flex-1 flex-col overflow-hidden max-w-none min-w-0 prose-headings:font-semibold prose-headings:tracking-tight">
            {contentMounted ? (
              <MarkdownRender
                content={item.content}
                slideMode
                fillViewportCard
                headingIdScope={item.id}
                scrollIntentActive={inViewSlug === item.id}
                keyboardActive={inViewSlug === item.id}
                hasNextDocument={idx < total - 1}
                hasPrevDocument={idx > 0}
                onReachDocumentEnd={onReachEnd}
                onReachDocumentStart={onReachStart}
                hideToc={!outlineOpen}
              />
            ) : (
              <div
                className="min-h-0 flex-1 rounded-[1.25rem] border border-border/35 bg-muted/20 dark:bg-muted/15"
                aria-hidden
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * One topic “card” in the infinite feed. Heavy markdown/slide UI mounts only when the section
 * nears the viewport so scrolling stays smooth.
 */
const DocsFeedTopicSection = memo(DocsFeedTopicSectionInner);
export default DocsFeedTopicSection;
