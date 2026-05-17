import {
  ChevronLeft,
  ChevronRight,
  Search,
  Grid3x3,
  List,
  ChevronDown,
  HelpCircle,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import type { Stream, Topic } from '@/topics';
import Footer from '@/components/layout/Footer';
import FeaturesSection from '@/components/landing/FeaturesSection';
import { Logo } from '@/components/brand/Logo';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { DOCS_NAV_RESET_SCROLL } from '@/lib/docsLocationState';
import { colors } from '@/constants/colors';
import { useI18n } from '@/i18n/I18nProvider';
import { TranslatedText } from '@/i18n/TranslatedText';
type ViewMode = 'grid' | 'list';

const badgeToneClasses = [
  'border-sky-500/35 bg-sky-500/12 text-sky-800 dark:border-sky-400/25 dark:bg-sky-500/10 dark:text-sky-200',
  'border-violet-500/35 bg-violet-500/12 text-violet-800 dark:border-violet-400/25 dark:bg-violet-500/10 dark:text-violet-200',
  'border-emerald-500/35 bg-emerald-500/12 text-emerald-800 dark:border-emerald-400/25 dark:bg-emerald-500/10 dark:text-emerald-200',
  'border-amber-500/40 bg-amber-500/14 text-amber-900 dark:border-amber-400/25 dark:bg-amber-500/10 dark:text-amber-200',
  'border-rose-500/35 bg-rose-500/12 text-rose-800 dark:border-rose-400/25 dark:bg-rose-500/10 dark:text-rose-200',
  'border-cyan-500/35 bg-cyan-500/12 text-cyan-800 dark:border-cyan-400/25 dark:bg-cyan-500/10 dark:text-cyan-200',
  'border-fuchsia-500/35 bg-fuchsia-500/12 text-fuchsia-800 dark:border-fuchsia-400/25 dark:bg-fuchsia-500/10 dark:text-fuchsia-200',
  'border-teal-500/35 bg-teal-500/12 text-teal-800 dark:border-teal-400/25 dark:bg-teal-500/10 dark:text-teal-200',
];

function LandingStreamTabs({
  streams,
  activeStreamId,
  activeStream,
  onSelectStream,
}: {
  streams: Stream[];
  activeStreamId: string;
  activeStream: Stream | undefined;
  onSelectStream: (id: string) => void;
}) {
  const { t } = useI18n();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollAffordances = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    const max = Math.max(0, scrollWidth - clientWidth);
    setCanScrollLeft(scrollLeft > 4);
    setCanScrollRight(scrollLeft < max - 4);
  }, []);

  useEffect(() => {
    updateScrollAffordances();
    const el = scrollRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => updateScrollAffordances());
    ro.observe(el);
    const id = requestAnimationFrame(() => updateScrollAffordances());
    return () => {
      cancelAnimationFrame(id);
      ro.disconnect();
    };
  }, [streams, updateScrollAffordances]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const tab = el.querySelector(`[data-stream-tab="${CSS.escape(activeStreamId)}"]`);
    if (tab instanceof HTMLElement) {
      tab.scrollIntoView({ behavior: 'smooth', inline: 'nearest', block: 'nearest' });
    }
    requestAnimationFrame(() => updateScrollAffordances());
  }, [activeStreamId, streams, updateScrollAffordances]);

  const scrollByDir = (dir: -1 | 1) => {
    const el = scrollRef.current;
    if (!el) return;
    const delta = Math.max(160, Math.floor(el.clientWidth * 0.55)) * dir;
    el.scrollBy({ left: delta, behavior: 'smooth' });
  };

  return (
    <div
      className={cn(
        'mb-8 flex min-w-0 items-stretch gap-1',
        'max-sm:rounded-2xl max-sm:border max-sm:border-border/45 max-sm:bg-card/45 max-sm:p-1 max-sm:shadow-sm',
        'max-sm:ring-1 max-sm:ring-border/25'
      )}
    >
      <Button
        type="button"
        variant="outline"
        size="icon"
        disabled={!canScrollLeft}
        aria-label={t('landing.streamTabsScrollLeft')}
        onClick={() => scrollByDir(-1)}
        className={cn(
          'hidden shrink-0 self-center',
          /** Chevrons only on narrow viewports where tabs don’t wrap */
          'max-sm:inline-flex',
          'h-10 w-10 rounded-xl border-border/50 bg-background/90 shadow-sm backdrop-blur-sm touch-manipulation',
          'disabled:pointer-events-none disabled:opacity-25'
        )}
      >
        <ChevronLeft className="h-5 w-5" aria-hidden />
      </Button>

      <div className="relative min-h-10.5 min-w-0 flex-1">
        {canScrollLeft ? (
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-linear-to-r from-card from-25% to-transparent sm:hidden"
            aria-hidden
          />
        ) : null}
        {canScrollRight ? (
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-linear-to-l from-card from-25% to-transparent sm:hidden"
            aria-hidden
          />
        ) : null}

        <nav
          aria-label={t('landing.streamTabs')}
          ref={scrollRef}
          onScroll={updateScrollAffordances}
          className={cn(
            'flex max-h-14 min-h-11 min-w-0 overflow-x-auto overflow-y-hidden overscroll-x-contain sm:max-h-none sm:overflow-visible',
            'touch-pan-x [-webkit-overflow-scrolling:touch]',
            '[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden'
          )}
        >
          <div className="flex w-max items-center gap-2 px-0.5 py-0.5 sm:w-full sm:min-w-0 sm:flex-wrap sm:px-0 sm:py-0">
            {streams.map((stream) => {
              const isActive = stream.id === activeStream?.id;
              return (
                <button
                  key={stream.id}
                  type="button"
                  data-stream-tab={stream.id}
                  onClick={() => onSelectStream(stream.id)}
                  aria-pressed={isActive}
                  className={cn(
                    'inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full border px-3.5 py-2 text-sm transition-all',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                    'max-sm:shadow-sm',
                    isActive
                      ? 'border-primary/55 bg-primary/12 text-primary shadow-sm ring-1 ring-primary/15'
                      : 'border-border/45 bg-background/70 text-muted-foreground hover:bg-accent hover:text-foreground'
                  )}
                >
                  {stream.icon && <span className="shrink-0 [&_svg]:text-current">{stream.icon}</span>}
                  <span className="font-medium">
                    <TranslatedText text={stream.title} />
                  </span>
                  <span
                    className={cn(
                      'ml-0.5 rounded-full px-1.5 py-0.5 text-[10px] font-semibold tabular-nums',
                      isActive ? 'bg-primary/15 text-primary' : 'bg-muted/80 text-muted-foreground'
                    )}
                  >
                    {stream.topics.length}
                  </span>
                </button>
              );
            })}
          </div>
        </nav>
      </div>

      <Button
        type="button"
        variant="outline"
        size="icon"
        disabled={!canScrollRight}
        aria-label={t('landing.streamTabsScrollRight')}
        onClick={() => scrollByDir(1)}
        className={cn(
          'hidden shrink-0 self-center',
          'max-sm:inline-flex',
          'h-10 w-10 rounded-xl border-border/50 bg-background/90 shadow-sm backdrop-blur-sm touch-manipulation',
          'disabled:pointer-events-none disabled:opacity-25'
        )}
      >
        <ChevronRight className="h-5 w-5" aria-hidden />
      </Button>
    </div>
  );
}

const LandingPage = () => {
  const navigate = useNavigate();
  const { t } = useI18n();

  const [streams, setStreams] = useState<Stream[] | null>(null);

  useEffect(() => {
    let cancelled = false;
    void import('@/topics').then((m) => {
      if (!cancelled) setStreams(m.STREAMS);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});
  const [activeStreamId, setActiveStreamId] = useState<string>('computer-science');

  const activeStream: Stream | undefined = useMemo(() => {
    if (!streams?.length) return undefined;
    return streams.find((stream) => stream.id === activeStreamId) ?? streams[0];
  }, [streams, activeStreamId]);

  const filteredTopics = useMemo<Topic[]>(() => {
    const topics = activeStream?.topics ?? [];
    if (!searchQuery) return topics;

    const query = searchQuery.toLowerCase();

    return topics.filter(
      (topic) =>
        topic.title.toLowerCase().includes(query) ||
        topic.description.toLowerCase().includes(query) ||
        topic.items.some((item) => item.title.toLowerCase().includes(query))
    );
  }, [activeStream, searchQuery]);

  const groupedTopics = useMemo(() => {
    return filteredTopics.reduce<Record<string, Topic[]>>((acc, topic) => {
      if (!acc[topic.category]) acc[topic.category] = [];
      acc[topic.category].push(topic);
      return acc;
    }, {});
  }, [filteredTopics]);

  const toggleSection = (category: string) => {
    setCollapsed((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  return (
    <div className="pb-16 sm:pb-20 max-w-5xl mx-auto w-full min-w-0 px-0 sm:px-0">
      <header className="text-center pt-6 sm:pt-12 pb-10 sm:pb-16 min-w-0">
        <h1 className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-3 sm:gap-4 mb-3 min-w-0">
          <Logo
            showText
            size="lg"
            asLink={false}
            className="flex-col sm:flex-row justify-center hover:opacity-100 max-w-full min-w-0 shrink sm:shrink-0"
            textClassName="text-center text-balance wrap-break-word [overflow-wrap:anywhere] max-w-full"
          />
        </h1>
        <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-8 text-pretty leading-relaxed wrap-break-word px-0 sm:px-0">
          {t('landing.heroDescription')}
        </p>

        <div className="max-w-xl mx-auto w-full min-w-0 flex flex-col gap-3 sm:flex-row sm:items-stretch">
          <div className="relative flex-1 min-w-0">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('landing.searchTopics')}
              className="pl-10 h-11 rounded-lg border-border/40 bg-background text-foreground placeholder:text-muted-foreground"
            />
          </div>
          <div className="flex items-center justify-center gap-1 rounded-lg border border-border/40 bg-muted/30 p-1 sm:shrink-0 w-full sm:w-auto max-sm:mx-auto">
            <Button
              size="icon"
              variant={viewMode === 'grid' ? 'secondary' : 'ghost'}
              onClick={() => setViewMode('grid')}
            >
              <Grid3x3 className="w-4 h-4" />
            </Button>
            <Button
              size="icon"
              variant={viewMode === 'list' ? 'secondary' : 'ghost'}
              onClick={() => setViewMode('list')}
            >
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <Button
            variant="outline"
            className="gap-2 border-border/40 bg-card/50 hover:bg-accent w-full max-w-md sm:w-auto min-h-11 touch-manipulation"
            onClick={() => navigate('/interview-questions')}
          >
            <HelpCircle className="h-4 w-4" />
            {t('landing.interviewQuestionsByLevel')}
          </Button>
        </div>
      </header>

      {streams === null ? (
        <div className="mb-14 space-y-6 min-w-0" aria-busy="true" aria-live="polite">
          <div className="flex flex-wrap gap-2 min-w-0 overflow-x-auto pb-0.5 [scrollbar-width:thin]">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-10 w-36 shrink-0 animate-pulse rounded-full bg-muted/35" />
            ))}
          </div>
          <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-44 animate-pulse rounded-xl border border-border/25 bg-muted/20" />
            ))}
          </div>
        </div>
      ) : (
        <>
          <LandingStreamTabs
            streams={streams}
            activeStreamId={activeStreamId}
            activeStream={activeStream}
            onSelectStream={setActiveStreamId}
          />

          {activeStream?.description && (
            <p className="mb-8 min-w-0 text-sm text-muted-foreground wrap-break-word">
              <TranslatedText text={activeStream.description} />
            </p>
          )}

          {Object.keys(groupedTopics).length === 0 && (
            <div className="rounded-lg border border-dashed border-border/50 bg-card/40 p-10 text-center text-sm text-muted-foreground">
              {t('landing.noTopicsInStream')}
            </div>
          )}

          {Object.entries(groupedTopics).map(([category, topics]) => {
            const isCollapsed = collapsed[`${activeStream?.id}:${category}`];

            return (
              <section key={`${activeStream?.id}:${category}`} className="mb-14 min-w-0">
                <button
                  type="button"
                  onClick={() => toggleSection(`${activeStream?.id}:${category}`)}
                  className="group flex w-full min-w-0 touch-manipulation items-center justify-between gap-3 py-2.5 text-left"
                >
                  <h2 className="min-w-0 flex-1 text-base font-semibold capitalize tracking-tight text-foreground wrap-break-word hyphens-auto pr-2 sm:text-lg">
                    {category.replace(/-/g, ' ')}
                  </h2>
                  <ChevronDown
                    className={cn(
                      'h-5 w-5 shrink-0 text-muted-foreground transition-transform',
                      isCollapsed && '-rotate-90'
                    )}
                  />
                </button>

                {!isCollapsed && (
                  <div
                    className={cn(
                      'min-w-0',
                      viewMode === 'grid'
                        ? 'grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'
                        : 'flex flex-col gap-3'
                    )}
                  >
                    {topics.map((topic, index) => {
                      const color = colors[index % colors.length];
                      const badgeItems = topic.items.slice(0, 8);
                      const extraBadgeCount = Math.max(topic.items.length - 8, 0);

                      return (
                        <article
                          key={topic.id}
                          role="button"
                          tabIndex={0}
                          onClick={() =>
                            navigate(`/docs/${topic.id}/${topic.items[0].id}`, { state: DOCS_NAV_RESET_SCROLL })
                          }
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              navigate(`/docs/${topic.id}/${topic.items[0].id}`, { state: DOCS_NAV_RESET_SCROLL });
                            }
                          }}
                          className={cn(
                            'group min-w-0 max-w-full cursor-pointer rounded-lg border border-border/40 bg-card text-card-foreground touch-manipulation',
                            'transition-all duration-200 hover:border-primary/30 hover:shadow-sm',
                            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                            viewMode === 'grid'
                              ? 'flex h-full flex-col p-5'
                              : 'flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:gap-5 sm:p-5'
                          )}
                        >
                          <div
                            className={cn(
                              viewMode === 'grid'
                                ? 'flex items-start justify-between gap-2 mb-3'
                                : 'flex items-center gap-3 shrink-0'
                            )}
                          >
                            <div className={cn('shrink-0 p-2.5 rounded-lg', color.iconBg, color.iconColor)}>
                              {topic.icon}
                            </div>
                            {viewMode === 'grid' && (
                              <span className="text-xs font-medium px-2 py-0.5 rounded-md shrink-0 border border-border/40 bg-muted/35 text-muted-foreground/90">
                                {t('landing.topicsCount', { count: topic.items.length })}
                              </span>
                            )}
                          </div>

                          <div
                            className={cn(
                              viewMode === 'list' ? 'min-w-0 flex-1 space-y-2' : 'min-w-0 flex-1'
                            )}
                          >
                            <h3
                              className={cn(
                                'wrap-break-word font-semibold text-foreground transition-colors duration-200 group-hover:text-primary',
                                viewMode === 'list' ? 'text-base' : 'mb-1'
                              )}
                            >
                              <TranslatedText text={topic.title} />
                            </h3>
                            <p
                              className={cn(
                                'wrap-break-word text-sm text-muted-foreground',
                                viewMode === 'list' ? 'line-clamp-1 sm:line-clamp-2' : 'mb-3 line-clamp-2'
                              )}
                            >
                              <TranslatedText text={topic.description} />
                            </p>

                            <div
                              className={cn(
                                'flex min-w-0 flex-wrap gap-2',
                                viewMode === 'grid' ? 'mt-4' : 'mt-2'
                              )}
                            >
                              {badgeItems.map((item, badgeIndex) => (
                                <span
                                  key={item.id}
                                  className={cn(
                                    'inline-flex max-w-full items-center rounded-md border px-2.5 py-1 text-xs',
                                    badgeToneClasses[badgeIndex % badgeToneClasses.length]
                                  )}
                                >
                                  <span className="truncate">
                                    <TranslatedText text={item.title} />
                                  </span>
                                </span>
                              ))}
                              {extraBadgeCount > 0 && (
                                <span className="inline-flex items-center rounded-md border border-border/40 bg-muted/35 px-2.5 py-1 text-xs text-muted-foreground/90">
                                  {t('landing.more', { count: extraBadgeCount })}
                                </span>
                              )}
                            </div>
                          </div>

                          {viewMode === 'list' && (
                            <div className="flex min-w-0 w-full items-center justify-between gap-2 pt-1 sm:w-auto sm:justify-end sm:pt-0">
                              <span className="text-xs font-medium px-2 py-1 rounded-md shrink-0 border border-border/40 bg-muted/35 text-muted-foreground/90">
                                {t('landing.topicsCount', { count: topic.items.length })}
                              </span>
                              <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                            </div>
                          )}
                        </article>
                      );
                    })}
                  </div>
                )}
              </section>
            );
          })}
        </>
      )}

      <FeaturesSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
