import { Link, useNavigate, useParams } from 'react-router-dom';
import { TOPICS, type TopicItem } from '../topics';
import { useEffect, useMemo, useRef, useState, startTransition, type RefObject } from 'react';
import { ChevronRight, ChevronUp, Home, PanelLeftClose, PanelLeftOpen } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '../components/ui/breadcrumb';
import { useI18n } from '@/i18n/I18nProvider';
import { TranslatedText } from '@/i18n/TranslatedText';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useScrollViewport } from '@/context/scrollViewportContext';
import { cn } from '@/lib/utils';
import DocsFeedTopicSection from './DocsFeedTopicSection';
import type { DocsFeedNavHandlers } from './DocsFeedTopicSection';

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

/** Fits one topic “screen” inside the ScrollArea viewport (navbar + breadcrumbs + padding). */
const DOC_FEED_TOPIC_CARD_CLASS =
  'h-[calc(100dvh-12.75rem)] min-h-[20rem] max-h-[calc(100dvh-12.75rem)] sm:h-[calc(100dvh-13.25rem)] sm:max-h-[calc(100dvh-13.25rem)]';

/** Section shell (title + body area) — shared with lazy-loaded body. */
const DOC_FEED_SECTION_SHELL_CLASS = cn(
  'not-prose flex min-w-0 flex-col gap-3 overflow-hidden',
  'scroll-mt-28',
  DOC_FEED_TOPIC_CARD_CLASS
);

const DocumentationPage = ({
  isSidebarCollapsed,
  onToggleSidebar,
}: {
  isSidebarCollapsed: boolean;
  onToggleSidebar: () => void;
}) => {
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
  topicIdRef.current = topic?.id;
  slugRef.current = slug;

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
    <div className="w-full space-y-4">
      <div className="flex items-start sm:items-center gap-2 sm:gap-3">
          <TooltipProvider delayDuration={200}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={onToggleSidebar}
                  aria-label={isSidebarCollapsed ? t('docs.showSidebar') : t('docs.hideSidebar')}
                  className="hidden md:inline-flex h-9 w-9 shrink-0 p-0 border-border/40 bg-card/60 hover:bg-accent/60"
                >
                  {isSidebarCollapsed ? <PanelLeftOpen className="h-4 w-4" /> : <PanelLeftClose className="h-4 w-4" />}
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                {isSidebarCollapsed ? t('docs.showSidebar') : t('docs.hideSidebar')}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <Breadcrumb className="min-w-0 flex-1">
            <BreadcrumbList className="flex-wrap min-h-9 gap-1 rounded-md border border-border/40 bg-card/45 backdrop-blur-sm px-2.5 sm:px-3 py-1 text-xs sm:text-sm text-muted-foreground shadow-[0_10px_24px_-20px_hsl(var(--foreground)/0.35)]">
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link
                    to="/"
                    className="rounded-md px-1.5 py-0.5 font-medium transition-colors hover:bg-accent/55 hover:text-foreground"
                  >
                    {t('docs.breadcrumbDocs')}
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="h-3.5 w-3.5 opacity-45" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link
                    to={`/docs/${topic.id}/${topic.items[0].id}`}
                    className="flex items-center gap-1.5 rounded-md px-1.5 py-0.5 font-medium transition-colors hover:bg-accent/55 hover:text-foreground"
                  >
                    <span className="text-base opacity-85">{topic.icon}</span>
                    <span className="max-w-30 sm:max-w-none truncate">
                      <TranslatedText text={topic.title} />
                    </span>
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="h-3.5 w-3.5 opacity-45" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage className="max-w-38 sm:max-w-md truncate rounded-md bg-primary/8 px-2 py-0.5 font-semibold text-foreground">
                  <TranslatedText text={content.title} />
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

      <div className="max-w-none min-w-0 space-y-6 pb-20">
        {flatItems.map((item, idx) => (
          <DocsFeedTopicSection
            key={item.id}
            item={item}
            idx={idx}
            total={flatItems.length}
            routeSlug={slug}
            viewportRef={viewportRef ?? FALLBACK_SCROLL_ROOT}
            feedNav={feedNav}
            inViewSlug={inViewSlug}
            sectionClassName={DOC_FEED_SECTION_SHELL_CLASS}
          />
        ))}
      </div>

      {showScrollTop && (
        <Button
          type="button"
          variant="secondary"
          size="icon"
          onClick={scrollFeedToTop}
          className="fixed bottom-6 right-5 z-40 h-11 w-11 rounded-full border border-border/50 bg-card/90 shadow-lg backdrop-blur-sm md:right-8"
          aria-label={t('docs.scrollToTop')}
        >
          <ChevronUp className="size-5" />
        </Button>
      )}
    </div>
  );
};

export default DocumentationPage;
