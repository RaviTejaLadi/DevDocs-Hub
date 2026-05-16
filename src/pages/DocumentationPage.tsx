import { useNavigate, useParams } from 'react-router-dom';
import { TOPICS, type Topic, type TopicItem } from '@/topics';
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState, startTransition, type ReactNode, type RefObject } from 'react';
import { ChevronUp, Home, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useI18n } from '@/i18n/I18nProvider';
import { useScrollViewport } from '@/context/scrollViewportContext';
import { cn } from '@/lib/utils';
import { TooltipProvider } from '@/components/ui/tooltip';
import { TranslatedText } from '@/i18n/TranslatedText';
import DocsFeedTopicSection from './DocsFeedTopicSection';
import type { DocsFeedNavHandlers } from './DocsFeedTopicSection';
import { DocsTopicFeedSearch } from './DocsTopicFeedSearch';

const FALLBACK_SCROLL_ROOT: RefObject<HTMLDivElement | null> = { current: null };

const findTopicItem = (items: TopicItem[], slug: string): TopicItem | undefined => {
  for (const item of items) {
    if (item.id === slug) {
      return item;
    }
    if (item.items) {
      const found = findTopicItem(item.items, slug);
      if (found) {
        return found;
      }
    }
  }
  return undefined;
};

const flattenTopicItems = (items: TopicItem[]): TopicItem[] => {
  const flattened: TopicItem[] = [];
  for (const item of items) {
    if (item.content) {
      flattened.push(item);
    }
    if (item.items) {
      flattened.push(...flattenTopicItems(item.items));
    }
  }
  return flattened.filter((i) => i.content);
};

/** Visual polish for `/docs/:categoryId/*` — topic metadata from `@/topics`. */
function formatTopicTrackLabel(type: string): string {
  const t = type.trim().toLowerCase();
  if (!t) return '';
  return t.replace(/[-_]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

function DocumentationTopicHero({ topic, search }: { topic: Topic; search: ReactNode }) {
  const iconEl = topic.icon ?? <FileText className="size-[1.05rem] shrink-0 text-primary sm:size-5" strokeWidth={1.75} aria-hidden />;
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

      <div className="relative">
        <div className="px-3 py-2 sm:px-4 sm:py-2.5 md:px-5">
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

        <div
          className={cn(
            'relative border-t border-border/40',
            'bg-linear-to-b from-muted/6 to-muted/20 dark:from-muted/5 dark:to-muted/18'
          )}
        >
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/20 to-transparent opacity-80 dark:via-primary/15"
            aria-hidden
          />
          <div className="relative px-2.5 py-1.5 sm:px-3.5 sm:py-2 md:px-4">{search}</div>
        </div>
      </div>
    </div>
  );
}

/** Fits one topic “screen” inside the ScrollArea viewport (navbar + outer py + safe areas — see App.tsx wrapper). */
const DOC_FEED_TOPIC_CARD_CLASS = cn(
  'h-[calc(100dvh-9rem-env(safe-area-inset-bottom))] min-h-[18rem]',
  'max-h-[calc(100dvh-9rem-env(safe-area-inset-bottom))]',
  'sm:h-[calc(100dvh-8.5rem-env(safe-area-inset-bottom))] sm:min-h-[20rem] sm:max-h-[calc(100dvh-8.5rem-env(safe-area-inset-bottom))]',
  'md:h-[calc(100dvh-8.85rem-env(safe-area-inset-bottom))] md:max-h-[calc(100dvh-8.85rem-env(safe-area-inset-bottom))]',
  /** lg: outer content uses py-10 — reserve a touch more vertical space than sm:py-8. */
  'lg:h-[calc(100dvh-9rem-env(safe-area-inset-bottom))] lg:min-h-[21rem]',
  'lg:max-h-[calc(100dvh-9rem-env(safe-area-inset-bottom))]'
);

/** Section shell: fixed viewport card height; inner post chrome lives in DocsFeedTopicSection. */
const DOC_FEED_SECTION_SHELL_CLASS = cn(
  'not-prose doc-feed-post flex min-w-0 w-full max-w-full flex-col overflow-x-hidden',
  'scroll-mt-24 md:scroll-mt-28',
  DOC_FEED_TOPIC_CARD_CLASS
);

const DocumentationPage = () => {
  const { t } = useI18n();
  const { categoryId, slug } = useParams();
  const navigate = useNavigate();
  const topic = TOPICS.find((t) => t.id === categoryId);
  const viewportRef = useScrollViewport();

  const content = useMemo(() => {
    if (!topic || !slug) return undefined;
    return findTopicItem(topic.items, slug);
  }, [topic, slug]);

  useEffect(() => {
    if (content && !content.content && content.items?.[0]) {
      navigate(`/docs/${categoryId}/${content.items[0].id}`, { replace: true });
    }
  }, [content, categoryId, navigate]);

  const flatItems = useMemo(() => (topic ? flattenTopicItems(topic.items) : []), [topic]);

  const topicIdRef = useRef(topic?.id);
  const slugRef = useRef(slug);
  useLayoutEffect(() => {
    topicIdRef.current = topic?.id;
    slugRef.current = slug;
  });

  const [inViewSlug, setInViewSlug] = useState(slug ?? '');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const skipSlugScrollIntoViewRef = useRef(false);

  useEffect(() => {
    const vp = viewportRef?.current;
    if (!vp) return;
    let ticking = false;
    let lastShown = vp.scrollTop > 360;
    setShowScrollTop(lastShown);

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        const nextShown = vp.scrollTop > 360;
        if (nextShown !== lastShown) {
          lastShown = nextShown;
          setShowScrollTop(nextShown);
        }
      });
    };

    vp.addEventListener('scroll', onScroll, { passive: true });
    return () => vp.removeEventListener('scroll', onScroll);
  }, [viewportRef, categoryId, flatItems.length]);

  const scrollFeedToTop = () => {
    viewportRef?.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    setInViewSlug(slug ?? '');
  }, [slug]);

  useEffect(() => {
    const el = viewportRef?.current;
    if (el) {
      el.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    } else {
      window.scrollTo(0, 0);
    }
  }, [categoryId, viewportRef]);

  /** Scroll selected topic card into view — skipped when URL was updated by the feed observer. */
  useEffect(() => {
    if (!slug || !viewportRef?.current) return;
    if (skipSlugScrollIntoViewRef.current) {
      skipSlugScrollIntoViewRef.current = false;
      return;
    }
    const el = document.getElementById(`doc-feed-${slug}`);
    if (!el) return;

    window.requestAnimationFrame(() => {
      el.scrollIntoView({ behavior: 'auto', block: 'start' });
    });
  }, [slug, topic?.id, flatItems.length, viewportRef]);

  /** Debounced URL + sidebar sync (replace) so scrolling does not jitter. */
  useEffect(() => {
    const root = viewportRef?.current;
    const catId = topicIdRef.current;
    if (!root || !catId || flatItems.length === 0) return;

    let obs: IntersectionObserver | null = null;
    let cancelled = false;
    /** DOM lib typing: browser timers are numeric ids. */
    let debounceTimerId: number | undefined;

    const start = () => {
      if (cancelled) return;
      obs = new IntersectionObserver(
        (entries) => {
          const hits = entries.filter((e) => e.isIntersecting && e.target.id.startsWith('doc-feed-'));
          if (!hits.length) return;
          const rr = root.getBoundingClientRect();
          const focusY = rr.top + rr.height * 0.38;
          const scored = hits.map((e) => {
            const rect = e.boundingClientRect;
            const mid = rect.top + rect.height / 2;
            const dist = Math.abs(mid - focusY);
            return {
              e,
              score: e.intersectionRatio - (dist / Math.max(rr.height, 1)) * 0.4,
            };
          });
          scored.sort((a, b) => b.score - a.score);
          const winner = scored[0]?.e.target;
          if (!winner?.id.startsWith('doc-feed-')) return;
          const id = winner.id.slice('doc-feed-'.length);

          window.clearTimeout(debounceTimerId);
          debounceTimerId = window.setTimeout(() => {
            startTransition(() => {
              setInViewSlug(id);
              if (id !== slugRef.current) {
                skipSlugScrollIntoViewRef.current = true;
                navigate(`/docs/${catId}/${id}`, { replace: true });
              }
            });
          }, 200);
        },
        {
          root,
          threshold: [0.2, 0.45],
          rootMargin: '-15% 0px -35% 0px',
        }
      );

      flatItems.forEach((item) => {
        const section = document.getElementById(`doc-feed-${item.id}`);
        if (section) obs!.observe(section);
      });
    };

    let raf1 = 0;
    let raf2 = 0;
    raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(start);
    });

    return () => {
      cancelled = true;
      window.clearTimeout(debounceTimerId);
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
      obs?.disconnect();
    };
  }, [flatItems, navigate, topic?.id, viewportRef]);

  const feedNav = useMemo<DocsFeedNavHandlers>(
    () => ({
      goToNextFrom: (i) => {
        const next = flatItems[i + 1];
        if (!next || !viewportRef?.current || !topic) return;
        skipSlugScrollIntoViewRef.current = true;
        document.getElementById(`doc-feed-${next.id}`)?.scrollIntoView({ behavior: 'auto', block: 'start' });
        navigate(`/docs/${topic.id}/${next.id}`, { replace: true });
        startTransition(() => setInViewSlug(next.id));
      },
      goToPrevFrom: (i) => {
        const prev = flatItems[i - 1];
        if (!prev || !viewportRef?.current || !topic) return;
        skipSlugScrollIntoViewRef.current = true;
        document.getElementById(`doc-feed-${prev.id}`)?.scrollIntoView({ behavior: 'auto', block: 'start' });
        navigate(`/docs/${topic.id}/${prev.id}`, { replace: true });
        startTransition(() => setInViewSlug(prev.id));
      },
    }),
    [flatItems, navigate, viewportRef, topic]
  );

  const navigateToFeedItem = useCallback(
    (item: TopicItem) => {
      if (!topic || !viewportRef?.current) return;
      skipSlugScrollIntoViewRef.current = true;
      document.getElementById(`doc-feed-${item.id}`)?.scrollIntoView({ behavior: 'auto', block: 'start' });
      navigate(`/docs/${topic.id}/${item.id}`, { replace: true });
      startTransition(() => setInViewSlug(item.id));
    },
    [navigate, topic, viewportRef]
  );

  if (!topic || !content) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Card className="max-w-md border-none bg-inherit w-full">
          <CardContent className="pt-6  text-center">
            <div className="text-6xl mb-4">📚</div>
            <h2 className="text-2xl font-bold mb-2 text-foreground">{t('docs.pageNotFound')}</h2>
            <p className="text-muted-foreground mb-6">{t('docs.notFoundDescription')}</p>
            <Button onClick={() => navigate('/')} className="w-full">
              <Home className="mr-2 h-4 w-4" />
              {t('docs.backHome')}
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!content.content) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <p>{t('docs.loading')}</p>
      </div>
    );
  }

  return (
    <div className="w-full min-w-0 max-w-full overflow-x-hidden">
      <TooltipProvider delayDuration={200}>
        <div className="max-w-none min-w-0 flex flex-col gap-5 pb-24 sm:gap-6">
          <DocumentationTopicHero
            topic={topic}
            search={
              <DocsTopicFeedSearch
                variant="embedded"
                parentTopicTitle={topic.title}
                items={flatItems}
                activeSlug={slug ?? ''}
                onNavigateToItem={navigateToFeedItem}
              />
            }
          />
          {flatItems.map((item, idx) => (
            <DocsFeedTopicSection
              key={item.id}
              item={item}
              idx={idx}
              total={flatItems.length}
              isCurrentRoute={slug === item.id}
              viewportRef={viewportRef ?? FALLBACK_SCROLL_ROOT}
              feedNav={feedNav}
              isActive={inViewSlug === item.id}
              sectionClassName={DOC_FEED_SECTION_SHELL_CLASS}
            />
          ))}
        </div>
      </TooltipProvider>

      {showScrollTop && (
        <Button
          type="button"
          variant="secondary"
          size="icon"
          onClick={scrollFeedToTop}
          className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-[max(1rem,env(safe-area-inset-right))] z-40  rounded-full border border-border/50 bg-card/90 shadow-lg backdrop-blur-sm md:right-8"
          aria-label={t('docs.scrollToTop')}
        >
          <ChevronUp className="size-5" />
        </Button>
      )}
    </div>
  );
};

export default DocumentationPage;
