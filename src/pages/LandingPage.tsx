import { ChevronRight, Search, Grid3x3, List, ChevronDown, HelpCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';

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
    <div className="pb-16 sm:pb-20 max-w-5xl mx-auto w-full min-w-0 overflow-x-hidden px-1 sm:px-0">
      <header className="text-center pt-6 sm:pt-12 pb-10 sm:pb-16 px-0.5">
        <h1 className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-3 px-1 min-w-0">
          <Logo
            showText
            size="lg"
            asLink={false}
            className="justify-center hover:opacity-100 max-w-full min-w-0"
            textClassName="text-center text-balance"
          />
        </h1>
        <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-8 px-1 text-pretty leading-relaxed">
          {t('landing.heroDescription')}
        </p>

        <div className="max-w-xl mx-auto w-full min-w-0 flex flex-col gap-3 sm:flex-row sm:items-stretch px-1">
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

        <div className="mt-6 flex justify-center px-1">
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
        <div className="mb-14 space-y-6" aria-busy="true" aria-live="polite">
          <div className="flex flex-wrap gap-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-10 w-36 animate-pulse rounded-full bg-muted/35" />
            ))}
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-44 animate-pulse rounded-xl border border-border/25 bg-muted/20" />
            ))}
          </div>
        </div>
      ) : (
        <>
          <nav
            aria-label={t('landing.streamTabs')}
            className="mb-8 -mx-1 px-1 sm:mx-0 sm:px-0 overflow-x-auto overscroll-x-contain [scrollbar-width:thin]"
          >
            <div className="flex items-center gap-2 min-w-max sm:min-w-0 sm:flex-wrap pb-0.5">
              {streams.map((stream) => {
                const isActive = stream.id === activeStream?.id;
                return (
                  <button
                    key={stream.id}
                    type="button"
                    onClick={() => setActiveStreamId(stream.id)}
                    aria-pressed={isActive}
                    className={cn(
                      'inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm transition-all',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                      isActive
                        ? 'border-primary/50 bg-primary/10 text-primary shadow-sm'
                        : 'border-border/40 bg-card/40 text-muted-foreground hover:bg-accent hover:text-foreground'
                    )}
                  >
                    {stream.icon && <span className="shrink-0">{stream.icon}</span>}
                    <span className="font-medium">
                      <TranslatedText text={stream.title} />
                    </span>
                    <span
                      className={cn(
                        'ml-1 rounded-full px-1.5 py-0.5 text-[10px] font-semibold',
                        isActive ? 'bg-primary/15 text-primary' : 'bg-muted text-muted-foreground'
                      )}
                    >
                      {stream.topics.length}
                    </span>
                  </button>
                );
              })}
            </div>
          </nav>

          {activeStream?.description && (
            <p className="mb-8 text-sm text-muted-foreground">
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
              <section key={`${activeStream?.id}:${category}`} className="mb-14">
                <button
                  type="button"
                  onClick={() => toggleSection(`${activeStream?.id}:${category}`)}
                  className="w-full min-w-0 flex items-center justify-between gap-3 py-2.5 text-left group touch-manipulation"
                >
                  <h2 className="text-base sm:text-lg font-semibold text-foreground capitalize tracking-tight wrap-break-word hyphens-auto pr-2 min-w-0">
                    {category.replace(/-/g, ' ')}
                  </h2>
                  <ChevronDown
                    className={cn('w-5 h-5 text-muted-foreground transition-transform', isCollapsed && '-rotate-90')}
                  />
                </button>

                {!isCollapsed && (
                  <div
                    className={cn(
                      viewMode === 'grid'
                        ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr'
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
                            'group cursor-pointer rounded-lg border border-border/40 bg-card text-card-foreground touch-manipulation',
                            'transition-all duration-200 hover:border-primary/30 hover:shadow-sm',
                            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                            viewMode === 'grid'
                              ? 'p-5 h-full flex flex-col'
                              : 'p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5'
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

                          <div className={cn(viewMode === 'list' ? 'flex-1 min-w-0 space-y-2' : 'flex-1')}>
                            <h3
                              className={cn(
                                'font-semibold text-foreground transition-colors duration-200 group-hover:text-primary',
                                viewMode === 'list' ? 'text-base' : 'mb-1'
                              )}
                            >
                              <TranslatedText text={topic.title} />
                            </h3>
                            <p
                              className={cn(
                                'text-sm text-muted-foreground',
                                viewMode === 'list' ? 'line-clamp-1 sm:line-clamp-2' : 'mb-3 line-clamp-2'
                              )}
                            >
                              <TranslatedText text={topic.description} />
                            </p>

                            <div className={cn('flex flex-wrap gap-2', viewMode === 'grid' ? 'mt-4' : 'mt-2')}>
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
                            <div className="flex items-center justify-between sm:justify-end gap-2 w-full sm:w-auto pt-1 sm:pt-0">
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
