import { useNavigate, useLocation } from 'react-router-dom';
import { flushSync } from 'react-dom';
import { useDocsRouteParams } from '@/hooks/useDocsRouteParams';
import { TOPICS, STREAMS, getStreamByTopicId, type Topic, type TopicItem } from '@/topics';
import {
  Fragment,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { ArrowRight, ChevronRight, ChevronUp, Home, FileText, Library } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { useI18n } from '@/i18n/I18nProvider';
import { useScrollViewport } from '@/context/scrollViewportContext';
import { useDocsFeedSync } from '@/context/docsFeedSyncContext';
import { cn } from '@/lib/utils';
import { DOCS_NAV_PRESERVE_SCROLL, DOCS_NAV_RESET_SCROLL, isDocsPreserveScrollState } from '@/lib/docsLocationState';
import { TranslatedText } from '@/i18n/TranslatedText';
import DocsFeedTopicSection from './DocsFeedTopicSection';
import type { DocsFeedNavHandlers } from './DocsFeedTopicSection';
import {
  docsSidePanelHeaderSurfaceClass,
  docsSidePanelNavSurfaceClass,
  docsSidePanelScrollAreaClass,
  docsSidePanelWidthClass,
} from '@/constants/docsSidePanel';
import { FALLBACK_SCROLL_ROOT } from '../constants';
import {
  CHAIN_TOPICS_PREFETCH_BATCH,
  DOC_FEED_SECTION_SHELL_CLASS,
} from '../constants';
import { findTopicItem, flattenTopicItems, docFeedSectionDomId, parseDocFeedSectionDomId } from '../utils';
import { formatTopicTrackLabel } from '../utils/formatTopicTrackLabel';
import type { FeedRow, NavigateToFeedItemOptions } from '../types';
import { normalizeNavigateToFeedItemOptions } from '../types';
import { DocsFeedStreamBanner } from './DocsFeedStreamBanner';
import { DocumentationTopicHero } from './DocumentationTopicHero';
import { DocsFeedTopicContinuationHero } from './DocsFeedTopicContinuationHero';



const DocumentationPage = () => {
  const { t } = useI18n();
  const { categoryId, slug } = useDocsRouteParams();
  const location = useLocation();
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
  const inViewSyncSuppressedUntilRef = useRef(0);

  /**
   * Keep `feedRange` consistent with the route *before paint*.
   * Critical: sidebar / search use `docsScroll: 'reset'` (or no state). Those navigations must collapse
   * to exactly the route topic. The old “only if outside range” rule broke when the chain already
   * included the target index (HTML…React) — the hero came from the URL but prior topics stayed mounted.
   */
  useLayoutEffect(() => {
    if (!categoryId) return;
    const newIdx = TOPICS.findIndex((t) => t.id === categoryId);
    if (newIdx < 0) return;

    const preserve = isDocsPreserveScrollState(location.state);
    const { start, end } = feedRangeRef.current;
    let didMutateRange = false;

    if (!preserve) {
      if (start !== newIdx || end !== newIdx) {
        prependSnapRef.current = null;
        prependPreserveOnlyRef.current = false;
        pendingScrollToDomIdRef.current = null;
        flushSync(() => setFeedRange({ start: newIdx, end: newIdx }));
        didMutateRange = true;
      }
    } else if (newIdx < start || newIdx > end) {
      prependSnapRef.current = null;
      prependPreserveOnlyRef.current = false;
      pendingScrollToDomIdRef.current = null;
      flushSync(() => setFeedRange({ start: newIdx, end: newIdx }));
      didMutateRange = true;
    }

    if (didMutateRange) {
      inViewSyncSuppressedUntilRef.current = Date.now() + 1200;
    }

    const vp = viewportRef?.current;
    if (!preserve && vp) {
      vp.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      requestAnimationFrame(() => {
        vp.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      });
    }
  }, [categoryId, location.key, location.state, viewportRef]);

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

  /** Full catalog for topic browser sheet: each stream → categories → topics. */
  const docsTopicBrowserSections = useMemo(() => {
    type CategoryBlock = { key: string; label: string; topics: Topic[] };
    return STREAMS.map((stream) => {
      const categories: CategoryBlock[] = [];
      const byKey = new Map<string, CategoryBlock>();
      for (const top of stream.topics) {
        let block = byKey.get(top.category);
        if (!block) {
          block = {
            key: top.category,
            label: formatTopicTrackLabel(top.category) || top.category,
            topics: [],
          };
          byKey.set(top.category, block);
          categories.push(block);
        }
        block.topics.push(top);
      }
      return { stream, categories };
    });
  }, []);

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
      navigate(`/docs/${categoryId}/${content.items[0].id}`, { replace: true, state: DOCS_NAV_RESET_SCROLL });
    }
  }, [content, categoryId, navigate]);

  const routeTopicIdRef = useRef(categoryId);
  const slugRef = useRef(slug);
  useLayoutEffect(() => {
    routeTopicIdRef.current = categoryId;
    slugRef.current = slug;
  });

  const [inViewFeedKey, setInViewFeedKey] = useState(() => (categoryId && slug ? `${categoryId}/${slug}` : ''));
  const [topicBrowserOpen, setTopicBrowserOpen] = useState(false);
  const [topicBrowserOpenCats, setTopicBrowserOpenCats] = useState<Record<string, boolean>>({});
  const [showScrollTop, setShowScrollTop] = useState(false);
  const skipSlugScrollIntoViewRef = useRef(false);
  const appendSentinelRef = useRef<HTMLDivElement | null>(null);
  const prevCatSlugForScrollSyncRef = useRef<{ c?: string; s?: string }>({});

  useEffect(() => {
    const root = document.documentElement;
    if (topicBrowserOpen) root.setAttribute('data-docs-topic-browser', 'open');
    else root.removeAttribute('data-docs-topic-browser');
    return () => root.removeAttribute('data-docs-topic-browser');
  }, [topicBrowserOpen]);

  const buildTopicBrowserExpandedMap = useCallback((): Record<string, boolean> => {
    const initial: Record<string, boolean> = {};
    for (const { stream, categories } of docsTopicBrowserSections) {
      for (const cat of categories) {
        const ck = `${stream.id}::${cat.key}`;
        initial[ck] = Boolean(categoryId && cat.topics.some((t) => t.id === categoryId));
      }
    }
    return initial;
  }, [categoryId, docsTopicBrowserSections]);

  const onTopicBrowserOpenChange = useCallback(
    (open: boolean) => {
      if (open) {
        setTopicBrowserOpenCats(buildTopicBrowserExpandedMap());
      }
      setTopicBrowserOpen(open);
    },
    [buildTopicBrowserExpandedMap]
  );

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

  useLayoutEffect(() => {
    if (!categoryId || !slug) return;
    setFeedOverlay({ topicId: categoryId, slug, pathRevision: pathRevisionRef.current });
  }, [categoryId, slug, setFeedOverlay, pathRevisionRef]);

  useEffect(() => {
    if (!categoryId || !slug) return;
    const id = requestAnimationFrame(() => {
      setInViewFeedKey(`${categoryId}/${slug}`);
    });
    return () => cancelAnimationFrame(id);
  }, [categoryId, slug]);

  /** Scroll viewport to the route’s card when the *target doc* changes within the same topic. */
  useEffect(() => {
    if (!slug || !categoryId || !viewportRef?.current) return;

    if (skipSlugScrollIntoViewRef.current) {
      skipSlugScrollIntoViewRef.current = false;
      prevCatSlugForScrollSyncRef.current = { c: categoryId, s: slug };
      return;
    }

    const prev = prevCatSlugForScrollSyncRef.current;
    if (prev.c !== categoryId) {
      prevCatSlugForScrollSyncRef.current = { c: categoryId, s: slug };
      return;
    }

    const routeUnchanged = prev.s === slug;
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

      const rt = routeTopicIdRef.current;
      const sl = slugRef.current;
      const { start: frStart, end: frEnd } = feedRangeRef.current;

      /**
       * Stale RAF: a pending winner can be from the previous multi-topic feed after a discrete jump
       * collapsed the range. Do not let observer navigation overwrite `/docs/typescript/...` with CSS.
       */
      if (frStart === frEnd && p.topicId !== rt) return;

      if (p.itemId === sl && p.topicId === rt) return;

      if (p.itemId !== sl || p.topicId !== rt) {
        skipSlugScrollIntoViewRef.current = true;
        navigate(`/docs/${p.topicId}/${p.itemId}`, { replace: true, state: DOCS_NAV_PRESERVE_SCROLL });
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
          if (Date.now() < inViewSyncSuppressedUntilRef.current) return;
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

          const { start: frStart, end: frEnd } = feedRangeRef.current;
          const topicInMountedRange = TOPICS.slice(frStart, frEnd + 1).some((t) => t.id === topicId);
          if (!topicInMountedRange) return;

          const rt = routeTopicIdRef.current;
          /** Single-topic window must match the URL topic so a stale node can’t rewrite the route. */
          if (frStart === frEnd && rt && topicId !== rt) return;

          const winnerOrd = feedOrdinalByDomId.get(winner.id);
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
          document
            .getElementById(docFeedSectionDomId(nextRow.topic.id, nextRow.item.id))
            ?.scrollIntoView({ behavior: 'auto', block: 'start' });
          navigate(`/docs/${nextRow.topic.id}/${nextRow.item.id}`, {
            replace: true,
            state: DOCS_NAV_PRESERVE_SCROLL,
          });
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
        navigate(`/docs/${nextTopic.id}/${first.id}`, { replace: true, state: DOCS_NAV_PRESERVE_SCROLL });
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
          document
            .getElementById(docFeedSectionDomId(prevRow.topic.id, prevRow.item.id))
            ?.scrollIntoView({ behavior: 'auto', block: 'start' });
          navigate(`/docs/${prevRow.topic.id}/${prevRow.item.id}`, {
            replace: true,
            state: DOCS_NAV_PRESERVE_SCROLL,
          });
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
        navigate(`/docs/${prevTopic.id}/${lastItem.id}`, { replace: true, state: DOCS_NAV_PRESERVE_SCROLL });
        setInViewFeedKey(`${prevTopic.id}/${lastItem.id}`);
      },
    }),
    [
      feedRange.end,
      feedRange.start,
      feedRows,
      navigate,
      viewportRef,
      catalogBounds.end,
      catalogBounds.start,
      setFeedOverlay,
      pathRevisionRef,
    ]
  );

  const navigateToFeedItem = useCallback(
    (item: TopicItem, itemTopicId: string, third?: ScrollBehavior | NavigateToFeedItemOptions) => {
      if (!viewportRef?.current) return;

      const { scrollBehavior = 'auto', scrollToTopicStart = false } = normalizeNavigateToFeedItemOptions(third);
      const newIdx = TOPICS.findIndex((t) => t.id === itemTopicId);
      if (newIdx >= 0) {
        prependSnapRef.current = null;
        prependPreserveOnlyRef.current = false;
        pendingScrollToDomIdRef.current = null;
        /** Feed range follows `categoryId` in layout effect after `navigate` — avoid updating range before the URL (split UI + stale observer RAF). */
      }

      inViewSyncSuppressedUntilRef.current = Date.now() + (scrollToTopicStart ? 1800 : 1000);
      skipSlugScrollIntoViewRef.current = true;

      if (!scrollToTopicStart) {
        document
          .getElementById(docFeedSectionDomId(itemTopicId, item.id))
          ?.scrollIntoView({ behavior: scrollBehavior, block: 'start' });
      }

      navigate(`/docs/${itemTopicId}/${item.id}`, { replace: true, state: DOCS_NAV_RESET_SCROLL });
      setInViewFeedKey(`${itemTopicId}/${item.id}`);
    },
    [navigate, viewportRef]
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
      <div className="max-w-none min-w-0 flex flex-col gap-5 pb-24 sm:gap-6">
        {activeStream ? (
          <div className="mb-1">
            <DocsFeedStreamBanner stream={activeStream} />
          </div>
        ) : null}
        <DocumentationTopicHero topic={topic} />
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

      <Sheet open={topicBrowserOpen} onOpenChange={onTopicBrowserOpenChange}>
        <Button
          type="button"
          variant="secondary"
          size="icon"
          aria-haspopup="dialog"
          aria-expanded={topicBrowserOpen}
          aria-label={t('docs.topicBrowserTrigger')}
          className={cn(
            'fixed z-60 inline-flex size-11 rounded-full bg-card/85 shadow-lg backdrop-blur-md',
            'bg-linear-to-br from-card/95 via-card/88 to-muted/25 dark:from-card/90 dark:via-card/82 dark:to-muted/15',
            'shadow-[0_10px_34px_-14px_hsl(var(--primary)/0.42)]',
            'transition-[transform,box-shadow] duration-200 hover:shadow-[0_14px_40px_-16px_hsl(var(--primary)/0.48)] active:scale-[0.96]',
            /** Below `DocsDesktopSidebarToggle` — same column, second control. */
            'top-[calc(0.5rem+3.5rem+max(0px,env(safe-area-inset-top))+0.5rem+2.5rem+0.375rem)]',
            'right-[max(1rem,env(safe-area-inset-right))] sm:right-6',
            topicBrowserOpen && 'hidden'
          )}
          onClick={() => onTopicBrowserOpenChange(true)}
        >
          <Library className="size-[1.1rem] text-primary" strokeWidth={1.75} />
        </Button>

        <SheetContent
          side="right"
          overlayClassName="z-[68] backdrop-blur-[2px]"
          className={cn(
            'flex min-h-0 flex-col gap-0 overflow-hidden border-l border-border/30 p-0 sm:rounded-l-2xl',
            'z-70 bg-background/95 shadow-2xl backdrop-blur-xl supports-backdrop-filter:bg-background/78',
            docsSidePanelWidthClass
          )}
        >
          <SheetHeader
            className={cn(docsSidePanelHeaderSurfaceClass, 'px-4 pb-4 pt-5 text-left')}
          >
            <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden>
              <div className="absolute -right-10 -top-14 size-30 rounded-full bg-primary/10 blur-3xl dark:bg-primary/14" />
              <div className="absolute -bottom-16 -left-8 size-26 rounded-full bg-primary/8 blur-3xl dark:bg-primary/12" />
            </div>
            <div className="flex gap-3">
              <div
                className={cn(
                  'flex size-10 shrink-0 items-center justify-center rounded-xl',
                  'bg-muted/45 text-primary shadow-inner [&_svg]:size-[1.15rem]'
                )}
                aria-hidden
              >
                <Library strokeWidth={1.75} />
              </div>
              <div className="min-w-0 flex-1 space-y-1">
                <SheetTitle className="text-base font-semibold leading-snug tracking-tight">
                  {t('docs.topicBrowserTitle')}
                </SheetTitle>
                <SheetDescription className="text-xs leading-relaxed text-muted-foreground">
                  {t('docs.topicBrowserSubtitle')}
                </SheetDescription>
              </div>
            </div>
          </SheetHeader>
          <ScrollArea className={cn(docsSidePanelScrollAreaClass, 'min-h-0 overflow-hidden')}>
            <div className="px-3 py-4">
              {docsTopicBrowserSections.map(({ stream, categories }, si) => (
                <Fragment key={stream.id}>
                  {si > 0 ? <Separator className="my-5 bg-border/30" decorative /> : null}
                  <section className={docsSidePanelNavSurfaceClass}>
                    <div className="mb-3 flex items-start gap-2.5 border-b border-border/20 pb-3">
                      <div
                        className={cn(
                          'flex size-9 shrink-0 items-center justify-center rounded-lg',
                          'bg-background/80 text-primary shadow-inner backdrop-blur-sm [&_svg]:size-[1.05rem]'
                        )}
                        aria-hidden
                      >
                        {stream.icon ?? <FileText className="size-[1.05rem]" strokeWidth={1.75} />}
                      </div>
                      <div className="min-w-0 flex-1 pt-0.5">
                        <p className="truncate text-[13px] font-semibold leading-tight tracking-tight">
                          <TranslatedText text={stream.title} />
                        </p>
                        <p className="mt-0.5 line-clamp-2 text-[11px] leading-snug text-muted-foreground">
                          <TranslatedText text={stream.description} />
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-0">
                      {categories.map((cat) => {
                        const ck = `${stream.id}::${cat.key}`;
                        const open = topicBrowserOpenCats[ck] ?? false;
                        return (
                          <Fragment key={ck}>
                            <div
                              className={cn(
                                'overflow-hidden rounded-lg transition-colors',
                                open
                                  ? 'bg-background/55 dark:bg-background/35'
                                  : 'bg-background/35 dark:bg-background/20'
                              )}
                            >
                              <button
                                type="button"
                                className={cn(
                                  'flex w-full min-h-10 items-center gap-2 rounded-lg px-2 py-2 text-left transition-colors',
                                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
                                  open ? 'bg-muted/25 dark:bg-muted/15' : 'hover:bg-muted/30 dark:hover:bg-muted/12'
                                )}
                                aria-expanded={open}
                                onClick={() =>
                                  setTopicBrowserOpenCats((prev) => ({
                                    ...prev,
                                    [ck]: !(prev[ck] ?? false),
                                  }))
                                }
                              >
                                <ChevronRight
                                  className={cn(
                                    'size-4 shrink-0 text-muted-foreground transition-transform duration-200 ease-out',
                                    open && 'rotate-90 text-foreground'
                                  )}
                                  aria-hidden
                                />
                                <span className="min-w-0 flex-1 truncate text-[11px] font-semibold uppercase tracking-[0.06em] text-foreground/85">
                                  {cat.label}
                                </span>
                                <span
                                  className={cn(
                                    'tabular-nums rounded-md bg-muted/50 px-1.5 py-px text-[10px] font-medium text-muted-foreground',
                                    open && 'bg-primary/12 text-foreground/80'
                                  )}
                                >
                                  {cat.topics.length}
                                </span>
                              </button>
                              {open ? (
                                <ul className="animate-in fade-in slide-in-from-top-1 space-y-1 px-1.5 pb-1.5 pt-1 duration-200">
                                  {cat.topics.map((visTopic) => {
                                    const jumpItem = flattenTopicItems(visTopic.items)[0];
                                    if (!jumpItem) return null;
                                    const iconEl = visTopic.icon ?? (
                                      <FileText
                                        className="size-3.5 shrink-0 text-primary"
                                        strokeWidth={1.75}
                                        aria-hidden
                                      />
                                    );
                                    const isCurrentTopic = categoryId === visTopic.id;
                                    return (
                                      <li key={visTopic.id}>
                                        <Button
                                          type="button"
                                          variant="ghost"
                                          aria-current={isCurrentTopic ? 'page' : undefined}
                                          className={cn(
                                            'group relative h-auto min-h-11 w-full justify-start gap-2.5 rounded-lg px-2 py-2 text-left shadow-none',
                                            'transition-colors',
                                            'bg-transparent hover:bg-muted/50 dark:hover:bg-muted/22',
                                            'focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
                                            isCurrentTopic &&
                                              cn(
                                                'bg-primary/11 hover:bg-primary/14 dark:bg-primary/14 dark:hover:bg-primary/17',
                                                'shadow-[inset_3px_0_0_0_hsl(var(--primary))]'
                                              )
                                          )}
                                          onClick={() => {
                                            setTopicBrowserOpen(false);
                                            navigateToFeedItem(jumpItem, visTopic.id, {
                                              scrollBehavior: 'auto',
                                              scrollToTopicStart: true,
                                            });
                                          }}
                                        >
                                          <span
                                            className={cn(
                                              'flex size-8 shrink-0 items-center justify-center rounded-lg bg-muted/35 [&_svg]:size-[0.95rem]',
                                              isCurrentTopic
                                                ? 'bg-primary/15 text-primary'
                                                : 'text-muted-foreground group-hover:bg-muted/50 group-hover:text-primary'
                                            )}
                                          >
                                            {iconEl}
                                          </span>
                                          <span className="min-w-0 flex-1 text-[13px] font-medium leading-snug">
                                            <TranslatedText text={visTopic.title} />
                                          </span>
                                          <ArrowRight
                                            className={cn(
                                              'size-4 shrink-0 transition-opacity duration-200',
                                              isCurrentTopic
                                                ? 'text-primary opacity-90'
                                                : 'text-muted-foreground opacity-0 group-hover:opacity-70'
                                            )}
                                            strokeWidth={2}
                                            aria-hidden
                                          />
                                        </Button>
                                      </li>
                                    );
                                  })}
                                </ul>
                              ) : null}
                            </div>
                          </Fragment>
                        );
                      })}
                    </div>
                  </section>
                </Fragment>
              ))}
            </div>
          </ScrollArea>
        </SheetContent>
      </Sheet>

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
