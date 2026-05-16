import { useNavigate } from 'react-router-dom';
import { useDocsRouteParams } from '@/hooks/useDocsRouteParams';
import { TOPICS, getStreamByTopicId, type Stream, type Topic, type TopicItem } from '@/topics';
import {
  Fragment,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  startTransition,
  type ReactNode,
  type RefObject,
} from 'react';
import { ChevronUp, Home, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useI18n } from '@/i18n/I18nProvider';
import { useScrollViewport } from '@/context/scrollViewportContext';
import { useDocsFeedSync } from '@/context/docsFeedSyncContext';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
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

/** Stable section id: avoids slug collisions across topics and encodes route segment for URL sync. */
const docFeedSectionDomId = (topicId: string, itemId: string) => `doc-feed-${topicId}__${itemId}`;

const parseDocFeedSectionDomId = (elementId: string): { topicId: string; itemId: string } | null => {
  if (!elementId.startsWith('doc-feed-')) return null;
  const rest = elementId.slice('doc-feed-'.length);
  const sep = rest.indexOf('__');
  if (sep < 0) return null;
  return { topicId: rest.slice(0, sep), itemId: rest.slice(sep + 2) };
};

type FeedRow = { topic: Topic; item: TopicItem };

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

/** Full-width stream ribbon (Computer Science, Mechanical Engineering, …) above the topic hero. */
function DocsFeedStreamBanner({ stream }: { stream: Stream }) {
  const iconEl = stream.icon ?? <FileText className="size-[1.1rem] shrink-0 text-primary sm:size-5" strokeWidth={1.75} aria-hidden />;

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
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/90 sm:text-[11px]">Learning stream</p>
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

/** Shown when the infinite feed chains another topic below the first — keeps orientation without duplicating the full hero + search chrome. */
function DocsFeedTopicContinuationHero({ topic }: { topic: Topic }) {
  const iconEl = topic.icon ?? <FileText className="size-[1.05rem] shrink-0 text-primary sm:size-4" strokeWidth={1.75} aria-hidden />;
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
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_45%_at_50%_-20%,hsl(var(--primary)/0.08),transparent_55%)] dark:bg-[radial-gradient(ellipse_80%_45%_at_50%_-20%,hsl(var(--primary)/0.06),transparent_55%)]" aria-hidden />
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


/** How many catalog topics to append when the user nears the end of the chained feed (sentinel). */
/** How many topic "chapters" to load per sentinel hit (global catalog, all streams). */
const CHAIN_TOPICS_PREFETCH_BATCH = 2;

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
  const { categoryId, slug } = useDocsRouteParams();
  const { setFeedOverlay, pathRevisionRef } = useDocsFeedSync();
  const navigate = useNavigate();
  const topic = TOPICS.find((t) => t.id === categoryId);
  const viewportRef = useScrollViewport();

  /** Inclusive topic indices in `TOPICS` currently mounted in the feed (within the active stream). */
  const [feedRange, setFeedRange] = useState(() => {
    const i = categoryId ? TOPICS.findIndex((t) => t.id === categoryId) : -1;
    const ix = i >= 0 ? i : 0;
    return { start: ix, end: ix };
  });

  const feedRangeRef = useRef(feedRange);
  useLayoutEffect(() => {
    feedRangeRef.current = feedRange;
  }, [feedRange]);

  const prependSnapRef = useRef<{ sh: number; st: number } | null>(null);
  /** Prepended rows from top sentinel only — preserve scroll, no `scrollIntoView`. */
  const prependPreserveOnlyRef = useRef(false);
  const pendingScrollWasPrependRef = useRef(false);
  const pendingScrollToDomIdRef = useRef<string | null>(null);
  const feedRowsCountBeforeMutationRef = useRef(0);
  const prependSentinelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!categoryId) return;
    const newIdx = TOPICS.findIndex((t) => t.id === categoryId);
    if (newIdx < 0) return;
    const { start, end } = feedRangeRef.current;
    if (newIdx < start || newIdx > end) {
      prependSnapRef.current = null;
      prependPreserveOnlyRef.current = false;
      pendingScrollToDomIdRef.current = null;
      startTransition(() => setFeedRange({ start: newIdx, end: newIdx }));
    }
  }, [categoryId]);

  const activeStream = useMemo(() => (categoryId ? getStreamByTopicId(categoryId) : undefined), [categoryId]);

  /** Full flat catalog — feed can chain across Computer Science → Mechanical → Basic Science (same order as `TOPICS`). */
  const catalogBounds = useMemo(() => ({ start: 0, end: Math.max(0, TOPICS.length - 1) }), []);

  const visibleTopics = useMemo(() => {
    const { start, end } = feedRange;
    const { start: c0, end: c1 } = catalogBounds;
    if (start > c1 || end < c0) return [];
    const lo = Math.max(c0, start);
    const hi = Math.min(c1, end);
    if (hi < lo) return [];
    return TOPICS.slice(lo, hi + 1);
  }, [feedRange, catalogBounds]);

  const feedRows = useMemo((): FeedRow[] => {
    return visibleTopics.flatMap((visTopic) =>
      flattenTopicItems(visTopic.items).map((item) => ({ topic: visTopic, item }))
    );
  }, [visibleTopics]);

  const chainHasMoreBelow = useMemo(() => {
    if (visibleTopics.length === 0) return false;
    return feedRange.end < catalogBounds.end;
  }, [feedRange.end, catalogBounds.end, visibleTopics.length]);

  const chainHasMoreAbove = useMemo(() => {
    if (visibleTopics.length === 0) return false;
    return feedRange.start > catalogBounds.start;
  }, [feedRange.start, catalogBounds.start, visibleTopics.length]);

  const feedOrdinalByDomId = useMemo(() => {
    const m = new Map<string, number>();
    feedRows.forEach((row, i) => {
      m.set(docFeedSectionDomId(row.topic.id, row.item.id), i);
    });
    return m;
  }, [feedRows]);

  const content = useMemo(() => {
    if (!topic || !slug) return undefined;
    return findTopicItem(topic.items, slug);
  }, [topic, slug]);

  useEffect(() => {
    if (content && !content.content && content.items?.[0]) {
      navigate(`/docs/${categoryId}/${content.items[0].id}`, { replace: true });
    }
  }, [content, categoryId, navigate]);

  const routeTopicIdRef = useRef(categoryId);
  const slugRef = useRef(slug);
  useLayoutEffect(() => {
    routeTopicIdRef.current = categoryId;
    slugRef.current = slug;
  });

  const [inViewFeedKey, setInViewFeedKey] = useState(() => (categoryId && slug ? `${categoryId}/${slug}` : ''));
  const [showScrollTop, setShowScrollTop] = useState(false);
  const skipSlugScrollIntoViewRef = useRef(false);
  const appendSentinelRef = useRef<HTMLDivElement | null>(null);
  const prevRouteTopicForScrollRef = useRef<string | undefined>(undefined);
  const prevCatSlugForScrollSyncRef = useRef<{ c?: string; s?: string }>({});

  useEffect(() => {
    const vp = viewportRef?.current;
    if (!vp) return;
    let ticking = false;
    let lastShown = vp.scrollTop > 360;
    queueMicrotask(() => {
      setShowScrollTop(lastShown);
    });

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
  }, [viewportRef, categoryId, feedRows.length]);

  const scrollFeedToTop = () => {
    viewportRef?.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    if (!categoryId || !slug) return;
    setFeedOverlay({ topicId: categoryId, slug, pathRevision: pathRevisionRef.current });
    const id = requestAnimationFrame(() => {
      setInViewFeedKey(`${categoryId}/${slug}`);
    });
    return () => cancelAnimationFrame(id);
  }, [categoryId, slug, setFeedOverlay, pathRevisionRef]);

  useEffect(() => {
    const el = viewportRef?.current;
    if (!categoryId) {
      if (!el && typeof window !== 'undefined') window.scrollTo(0, 0);
      return;
    }
    const newIdx = TOPICS.findIndex((t) => t.id === categoryId);
    if (newIdx < 0) return;

    const prevCat = prevRouteTopicForScrollRef.current;
    prevRouteTopicForScrollRef.current = categoryId;

    if (prevCat === undefined) {
      if (el) el.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      else if (typeof window !== 'undefined') window.scrollTo(0, 0);
      return;
    }
    if (prevCat === categoryId) return;

    const prevIdx = TOPICS.findIndex((t) => t.id === prevCat);
    if (prevIdx < 0) {
      if (el) el.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      else if (typeof window !== 'undefined') window.scrollTo(0, 0);
      return;
    }

    /* Chained feed: URL advances to the next topic in `TOPICS` — do not reset scroll (avoids jumping back to HTML). */
    if (newIdx === prevIdx + 1) {
      return;
    }

    if (el) el.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    else if (typeof window !== 'undefined') window.scrollTo(0, 0);
  }, [categoryId, viewportRef]);

  /** Scroll viewport to the route’s card when the *target doc* changes — not when the chained feed merely grows (avoids jumping back to HTML). */
  useEffect(() => {
    if (!slug || !categoryId || !viewportRef?.current) return;

    if (skipSlugScrollIntoViewRef.current) {
      skipSlugScrollIntoViewRef.current = false;
      prevCatSlugForScrollSyncRef.current = { c: categoryId, s: slug };
      return;
    }

    const prev = prevCatSlugForScrollSyncRef.current;
    const routeUnchanged = prev.c === categoryId && prev.s === slug;
    if (routeUnchanged) {
      return;
    }

    const el = document.getElementById(docFeedSectionDomId(categoryId, slug));
    if (!el) {
      return;
    }

    prevCatSlugForScrollSyncRef.current = { c: categoryId, s: slug };

    window.requestAnimationFrame(() => {
      el.scrollIntoView({ behavior: 'auto', block: 'start' });
    });
  }, [slug, categoryId, feedRows.length, viewportRef]);

  /** After prepending or appending feed rows: restore scroll or scroll to pending section. */
  useLayoutEffect(() => {
    const applyPrependScrollPreserve = () => {
      const snap = prependSnapRef.current;
      prependSnapRef.current = null;
      const vp = viewportRef?.current;
      if (vp && snap) {
        vp.scrollTop = snap.st + (vp.scrollHeight - snap.sh);
      }
    };

    const pending = pendingScrollToDomIdRef.current;
    if (pending) {
      if (feedRows.length <= feedRowsCountBeforeMutationRef.current) return;
      pendingScrollToDomIdRef.current = null;
      const wasPrepend = pendingScrollWasPrependRef.current;
      pendingScrollWasPrependRef.current = false;
      if (wasPrepend) applyPrependScrollPreserve();
      const el = document.getElementById(pending);
      if (el) {
        skipSlugScrollIntoViewRef.current = true;
        el.scrollIntoView({ behavior: 'auto', block: 'start' });
      }
      return;
    }

    if (prependPreserveOnlyRef.current) {
      prependPreserveOnlyRef.current = false;
      if (feedRows.length <= feedRowsCountBeforeMutationRef.current) return;
      applyPrependScrollPreserve();
    }
  }, [feedRows.length, feedRows, viewportRef]);

  /** URL + sidebar sync: update overlay immediately; path `replace` at most once per frame. */
  useEffect(() => {
    const root = viewportRef?.current;
    if (!root || feedRows.length === 0) return;

    let obs: IntersectionObserver | null = null;
    let cancelled = false;
    let navRafId = 0;
    let pendingNav: { topicId: string; itemId: string } | null = null;

    const MIN_WINNER_RATIO = 0.14;
    const MAX_ORDINAL_JUMP = 36;

    const flushNav = () => {
      navRafId = 0;
      const p = pendingNav;
      pendingNav = null;
      if (!p || cancelled) return;
      if (p.itemId !== slugRef.current || p.topicId !== routeTopicIdRef.current) {
        skipSlugScrollIntoViewRef.current = true;
        navigate(`/docs/${p.topicId}/${p.itemId}`, { replace: true });
      }
    };

    const scheduleNav = (topicId: string, itemId: string) => {
      pendingNav = { topicId, itemId };
      if (navRafId) return;
      navRafId = requestAnimationFrame(flushNav);
    };

    const start = () => {
      if (cancelled) return;
      obs = new IntersectionObserver(
        (entries) => {
          const hits = entries.filter((e) => e.isIntersecting && e.target.id.startsWith('doc-feed-'));
          if (!hits.length) return;
          const rr = root.getBoundingClientRect();
          const focusY = rr.top + rr.height * 0.36;
          const scored = hits.map((e) => {
            const rect = e.boundingClientRect;
            const mid = rect.top + rect.height / 2;
            const dist = Math.abs(mid - focusY);
            return {
              target: e.target as HTMLElement,
              intersectionRatio: e.intersectionRatio,
              score: e.intersectionRatio * 1.12 - (dist / Math.max(rr.height, 1)) * 0.42,
            };
          });
          scored.sort((a, b) => b.score - a.score);
          const best = scored[0];
          if (!best || best.intersectionRatio < MIN_WINNER_RATIO) return;

          const winner = best.target;
          const parsed = parseDocFeedSectionDomId(winner.id);
          if (!parsed) return;
          const { topicId, itemId } = parsed;

          const winnerOrd = feedOrdinalByDomId.get(winner.id);
          const rt = routeTopicIdRef.current;
          const sl = slugRef.current;
          if (rt && sl) {
            const curOrd = feedOrdinalByDomId.get(docFeedSectionDomId(rt, sl));
            if (
              winnerOrd !== undefined &&
              curOrd !== undefined &&
              Math.abs(winnerOrd - curOrd) > MAX_ORDINAL_JUMP &&
              best.intersectionRatio < 0.38
            ) {
              return;
            }
          }

          setFeedOverlay({ topicId, slug: itemId, pathRevision: pathRevisionRef.current });
          setInViewFeedKey(`${topicId}/${itemId}`);
          scheduleNav(topicId, itemId);
        },
        {
          root,
          threshold: [0.12, 0.28, 0.52],
          rootMargin: '-18% 0px -42% 0px',
        }
      );

      feedRows.forEach((row) => {
        const section = document.getElementById(docFeedSectionDomId(row.topic.id, row.item.id));
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
      if (navRafId) cancelAnimationFrame(navRafId);
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
      obs?.disconnect();
    };
  }, [feedRows, feedOrdinalByDomId, navigate, viewportRef, setFeedOverlay, pathRevisionRef]);

  /** Prefetch older topics when the user scrolls up toward the hero. */
  useEffect(() => {
    const root = viewportRef?.current;
    const el = prependSentinelRef.current;
    if (!root || !el || !chainHasMoreAbove) return;

    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries.some((e) => e.isIntersecting);
        if (!hit) return;
        const vp = viewportRef.current;
        if (vp) prependSnapRef.current = { sh: vp.scrollHeight, st: vp.scrollTop };
        feedRowsCountBeforeMutationRef.current = feedRows.length;
        prependPreserveOnlyRef.current = true;
        setFeedRange((r) => {
          const nextStart = Math.max(catalogBounds.start, r.start - CHAIN_TOPICS_PREFETCH_BATCH);
          if (nextStart >= r.start) return r;
          return { ...r, start: nextStart };
        });
      },
      { root, rootMargin: '520px 0px 520px 0px', threshold: 0 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [viewportRef, chainHasMoreAbove, feedRows.length, catalogBounds.start, feedRange.start]);

  /** Infinite chain: prefetch the next topic when the sentinel below the feed nears the viewport. */
  useEffect(() => {
    const root = viewportRef?.current;
    const el = appendSentinelRef.current;
    if (!root || !el || !chainHasMoreBelow) return;

    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries.some((e) => e.isIntersecting);
        if (!hit) return;
        setFeedRange((r) => {
          const nextEnd = Math.min(catalogBounds.end, r.end + CHAIN_TOPICS_PREFETCH_BATCH);
          if (nextEnd <= r.end) return r;
          return { ...r, end: nextEnd };
        });
      },
      { root, rootMargin: '480px 0px 640px 0px', threshold: 0 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [viewportRef, chainHasMoreBelow, feedRange.end, feedRows.length, catalogBounds.end]);

  const feedNav = useMemo<DocsFeedNavHandlers>(
    () => ({
      goToNextFrom: (i) => {
        if (!viewportRef?.current) return;
        const nextRow = feedRows[i + 1];
        if (nextRow) {
          skipSlugScrollIntoViewRef.current = true;
          setFeedOverlay({
            topicId: nextRow.topic.id,
            slug: nextRow.item.id,
            pathRevision: pathRevisionRef.current,
          });
          document.getElementById(docFeedSectionDomId(nextRow.topic.id, nextRow.item.id))?.scrollIntoView({ behavior: 'auto', block: 'start' });
          navigate(`/docs/${nextRow.topic.id}/${nextRow.item.id}`, { replace: true });
          setInViewFeedKey(`${nextRow.topic.id}/${nextRow.item.id}`);
          return;
        }
        const nextTopicIx = feedRange.end + 1;
        if (nextTopicIx > catalogBounds.end) return;
        const nextTopic = TOPICS[nextTopicIx];
        const first = flattenTopicItems(nextTopic.items)[0];
        if (!first) return;
        pendingScrollWasPrependRef.current = false;
        feedRowsCountBeforeMutationRef.current = feedRows.length;
        pendingScrollToDomIdRef.current = docFeedSectionDomId(nextTopic.id, first.id);
        setFeedRange((r) => ({ ...r, end: r.end + 1 }));
        skipSlugScrollIntoViewRef.current = true;
        setFeedOverlay({ topicId: nextTopic.id, slug: first.id, pathRevision: pathRevisionRef.current });
        navigate(`/docs/${nextTopic.id}/${first.id}`, { replace: true });
        setInViewFeedKey(`${nextTopic.id}/${first.id}`);
      },
      goToPrevFrom: (i) => {
        if (!viewportRef?.current) return;
        if (i > 0) {
          const prevRow = feedRows[i - 1];
          skipSlugScrollIntoViewRef.current = true;
          setFeedOverlay({
            topicId: prevRow.topic.id,
            slug: prevRow.item.id,
            pathRevision: pathRevisionRef.current,
          });
          document.getElementById(docFeedSectionDomId(prevRow.topic.id, prevRow.item.id))?.scrollIntoView({ behavior: 'auto', block: 'start' });
          navigate(`/docs/${prevRow.topic.id}/${prevRow.item.id}`, { replace: true });
          setInViewFeedKey(`${prevRow.topic.id}/${prevRow.item.id}`);
          return;
        }
        if (feedRange.start <= catalogBounds.start) return;
        const prevTopicIx = feedRange.start - 1;
        const prevTopic = TOPICS[prevTopicIx];
        const prevItems = flattenTopicItems(prevTopic.items);
        const lastItem = prevItems[prevItems.length - 1];
        if (!lastItem) return;
        const vp = viewportRef.current;
        if (vp) prependSnapRef.current = { sh: vp.scrollHeight, st: vp.scrollTop };
        pendingScrollWasPrependRef.current = true;
        feedRowsCountBeforeMutationRef.current = feedRows.length;
        pendingScrollToDomIdRef.current = docFeedSectionDomId(prevTopic.id, lastItem.id);
        setFeedRange((r) => ({ ...r, start: prevTopicIx }));
        skipSlugScrollIntoViewRef.current = true;
        setFeedOverlay({ topicId: prevTopic.id, slug: lastItem.id, pathRevision: pathRevisionRef.current });
        navigate(`/docs/${prevTopic.id}/${lastItem.id}`, { replace: true });
        setInViewFeedKey(`${prevTopic.id}/${lastItem.id}`);
      },
    }),
    [feedRange.end, feedRange.start, feedRows, navigate, viewportRef, catalogBounds.end, catalogBounds.start, setFeedOverlay, pathRevisionRef]
  );

  const navigateToFeedItem = useCallback(
    (item: TopicItem, itemTopicId: string, scrollBehavior: ScrollBehavior = 'auto') => {
      if (!viewportRef?.current) return;
      skipSlugScrollIntoViewRef.current = true;
      setFeedOverlay({ topicId: itemTopicId, slug: item.id, pathRevision: pathRevisionRef.current });
      document
        .getElementById(docFeedSectionDomId(itemTopicId, item.id))
        ?.scrollIntoView({ behavior: scrollBehavior, block: 'start' });
      navigate(`/docs/${itemTopicId}/${item.id}`, { replace: true });
      setInViewFeedKey(`${itemTopicId}/${item.id}`);
    },
    [navigate, viewportRef, setFeedOverlay, pathRevisionRef]
  );

  const feedSearchRows = useMemo(
    () => feedRows.map((r) => ({ topicId: r.topic.id, topicTitle: r.topic.title, item: r.item })),
    [feedRows]
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
    <TooltipProvider delayDuration={200}>
      <div className="w-full min-w-0 max-w-full overflow-x-hidden">
        <div className="max-w-none min-w-0 flex flex-col gap-5 pb-24 sm:gap-6">
          {activeStream ? (
            <div className="mb-1">
              <DocsFeedStreamBanner stream={activeStream} />
            </div>
          ) : null}
          <DocumentationTopicHero
            topic={topic}
            search={
              <DocsTopicFeedSearch
                variant="embedded"
                parentTopicTitle={topic.title}
                items={[]}
                activeSlug={slug ?? ''}
                activeTopicId={categoryId}
                multiTopicRows={feedSearchRows}
                onNavigateToItem={navigateToFeedItem}
              />
            }
          />
          {chainHasMoreAbove ? <div ref={prependSentinelRef} className="h-1 w-full shrink-0" aria-hidden /> : null}
          {feedRows.map((row, idx) => (
            <Fragment key={`${row.topic.id}-${row.item.id}`}>
              {idx > 0 && row.topic.id !== feedRows[idx - 1]!.topic.id ? (
                <>
                  {(() => {
                    const prevT = feedRows[idx - 1]!.topic;
                    const sp = getStreamByTopicId(prevT.id);
                    const sc = getStreamByTopicId(row.topic.id);
                    return sp && sc && sp.id !== sc.id ? (
                      <div className="mb-1 mt-2 sm:mt-3">
                        <DocsFeedStreamBanner stream={sc} />
                      </div>
                    ) : null;
                  })()}
                  <DocsFeedTopicContinuationHero topic={row.topic} />
                </>
              ) : null}
              <DocsFeedTopicSection
                item={row.item}
                idx={idx}
                total={feedRows.length}
                sectionDomId={docFeedSectionDomId(row.topic.id, row.item.id)}
                isCurrentRoute={slug === row.item.id && categoryId === row.topic.id}
                viewportRef={viewportRef ?? FALLBACK_SCROLL_ROOT}
                feedNav={feedNav}
                isActive={inViewFeedKey === `${row.topic.id}/${row.item.id}`}
                sectionClassName={DOC_FEED_SECTION_SHELL_CLASS}
                chainHasMoreToNextTopic={chainHasMoreBelow && idx === feedRows.length - 1}
                chainHasMoreToPrevTopic={chainHasMoreAbove && idx === 0}
              />
            </Fragment>
          ))}
          {chainHasMoreBelow ? <div ref={appendSentinelRef} className="h-1 w-full shrink-0" aria-hidden /> : null}
        </div>

        {visibleTopics.length > 1 ? (
          <nav
            aria-label={t('docs.feedTopicJumpNav')}
            className={cn(
              'fixed z-60 hidden max-h-[min(50dvh,22rem)] w-10 flex-col gap-1.5 overflow-y-auto overflow-x-hidden py-0.5 pe-0.5 md:flex',
              /** Directly under `DocsDesktopSidebarToggle` in App.tsx (nav strip + h-10 + gap). */
              'top-[calc(0.5rem+3.5rem+max(0px,env(safe-area-inset-top))+0.5rem+2.5rem+0.375rem)]',
              'right-[max(1rem,env(safe-area-inset-right))] sm:right-6'
            )}
          >
            {visibleTopics.map((visTopic) => {
              const firstRow = feedRows.find((r) => r.topic.id === visTopic.id);
              if (!firstRow) return null;
              const iconEl =
                visTopic.icon ?? <FileText className="size-[0.95rem] shrink-0 text-primary" strokeWidth={1.75} aria-hidden />;
              const railTopicId = inViewFeedKey ? inViewFeedKey.split('/')[0] : categoryId;
              const isActive = railTopicId === visTopic.id;
              return (
                <Tooltip key={visTopic.id}>
                  <TooltipTrigger asChild>
                    <Button
                      type="button"
                      variant="secondary"
                      size="icon"
                      aria-current={isActive ? 'true' : undefined}
                      aria-label={t('docs.feedTopicJump', { topic: visTopic.title })}
                      className={cn(
                        'h-9 w-9 shrink-0 rounded-full border border-border/50 bg-card/90 shadow-md backdrop-blur-sm',
                        isActive && 'border-primary/45 bg-primary/12 ring-1 ring-primary/25'
                      )}
                      onClick={() => navigateToFeedItem(firstRow.item, firstRow.topic.id, 'smooth')}
                    >
                      <span className="flex size-[1.35rem] items-center justify-center [&_svg]:size-[0.95rem]">{iconEl}</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="left" className="max-w-56">
                    <span className="font-medium">
                      <TranslatedText text={visTopic.title} />
                    </span>
                  </TooltipContent>
                </Tooltip>
              );
            })}
          </nav>
        ) : null}

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
    </TooltipProvider>
  );
};

export default DocumentationPage;
