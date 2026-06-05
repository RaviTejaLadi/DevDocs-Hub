import { Link, useNavigate } from 'react-router-dom';
import { useState, useCallback, useEffect, useMemo, type JSX } from 'react';
import { useSidebarDocsRouteKeys } from '@/context/docsFeedSyncContext';
import type { Topic, TopicItem } from '@/data/topics';
import { resolveTopicBadge, findTopicBadgeContext } from '@/data/topics';
import { topicBadgeAccentBorder } from '@/data/topics/topicBadges';
import { TopicBadgeChip } from '@/components/topic/TopicBadgeChip';
import { BookOpen, ChevronLeft, Search, X, ChevronDown, ChevronRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { DOCS_NAV_RESET_SCROLL } from '@/lib/docsLocationState';
import { useI18n } from '@/i18n/I18nProvider';
import { TranslatedText } from '@/i18n/TranslatedText';
import {
  docsSidePanelHeaderSurfaceClass,
  docsSidePanelNavSurfaceClass,
  docsSidePanelScrollAreaClass,
  docsSidePanelScrollViewportClass,
} from '@/constants/docsSidePanel';

/** Parent topic ids needed to reveal `targetId` in the tree (not including target). */
const findAncestorIds = (items: TopicItem[], targetId: string, chain: string[] = []): string[] | null => {
  for (const item of items) {
    if (item.id === targetId) return chain;
    if (item.items?.length) {
      const found = findAncestorIds(item.items, targetId, [...chain, item.id]);
      if (found) return found;
    }
  }
  return null;
};

/** Leaf docs only — section headers with empty content are expanders, not articles. */
const isDocumentItem = (item: TopicItem) => Boolean(item.content?.trim());

const countDocumentItems = (item: TopicItem): number => {
  if (isDocumentItem(item)) return 1;
  return item.items?.reduce((sum, child) => sum + countDocumentItems(child), 0) ?? 0;
};

/** Flatten topic tree for search results. */
const flattenItems = (items: TopicItem[]): TopicItem[] => {
  return items.reduce((acc: TopicItem[], item) => {
    acc.push(item);
    if (item.items) {
      acc.push(...flattenItems(item.items));
    }
    return acc;
  }, []);
};

const SidebarContent = ({ closeSheet }: { closeSheet?: () => void }) => {
  const { t } = useI18n();
  const { topicId: currentTopicId, slug: activeSlug } = useSidebarDocsRouteKeys();
  const [topicsIndex, setTopicsIndex] = useState<Topic[] | null>(null);

  useEffect(() => {
    void import('@/data/topics').then((m) => setTopicsIndex(m.TOPICS));
  }, []);

  const topic = topicsIndex?.find((t) => t.id === currentTopicId);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const totalLessons = useMemo(() => {
    if (!topic) return 0;
    return topic.items.reduce((sum, item) => sum + countDocumentItems(item), 0);
  }, [topic]);

  /** Matches `/docs/:topicId/:itemId` — avoids highlighting wrong row when item ids repeat across topics. */
  const activeRouteKey = currentTopicId && activeSlug ? `${currentTopicId}/${activeSlug}` : '';

  // State to track expanded parent items
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (!topic || !activeSlug || searchQuery) return;
    const ancestors = findAncestorIds(topic.items, activeSlug);
    if (!ancestors?.length) return;
    setExpandedIds((prev) => {
      const next = { ...prev };
      for (const id of ancestors) next[id] = true;
      return next;
    });
  }, [topic, activeSlug, searchQuery]);

  /** Debounced + visibility-checked — feed scroll updates highlight often; avoid layout thrash. */
  useEffect(() => {
    if (!activeRouteKey || searchQuery) return;

    const id = window.setTimeout(() => {
      const el = document.querySelector<HTMLElement>(`[data-sidebar-route="${CSS.escape(activeRouteKey)}"]`);
      if (!el) return;

      const sidebarViewport = el.closest('[data-slot="scroll-area-viewport"]');
      if (sidebarViewport) {
        const elRect = el.getBoundingClientRect();
        const vpRect = sidebarViewport.getBoundingClientRect();
        const fullyVisible = elRect.top >= vpRect.top - 2 && elRect.bottom <= vpRect.bottom + 2;
        if (fullyVisible) return;
      }

      requestAnimationFrame(() => {
        el.scrollIntoView({ block: 'nearest', behavior: 'auto' });
      });
    }, 120);

    return () => window.clearTimeout(id);
  }, [activeRouteKey, searchQuery, expandedIds]);

  const toggleExpand = useCallback((e: React.MouseEvent, id: string) => {
    e.preventDefault();
    e.stopPropagation();
    setExpandedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  }, []);

  const handleNavigate = useCallback(
    (topicId: string, itemId: string) => {
      navigate(`/docs/${topicId}/${itemId}`, { state: DOCS_NAV_RESET_SCROLL });
      if (closeSheet) closeSheet();
    },
    [navigate, closeSheet]
  );

  // Recursive tree renderer
  const renderTree = (items: TopicItem[], depth = 0, parentTitle?: string): JSX.Element[] => {
    return items.map((item, index) => {
      const routeKey = topic ? `${topic.id}/${item.id}` : '';
      const isActive = Boolean(activeRouteKey && routeKey === activeRouteKey);
      const hasChildren = item.items && item.items.length > 0;
      const isExpanded = expandedIds[item.id];
      const shouldShowTitleTooltip = item.title.length > 28;
      const isDoc = isDocumentItem(item);
      const badgeKind = resolveTopicBadge(item.title, item.badge, {
        parentTitle,
        siblingIndex: index,
        siblingCount: items.length,
        depth,
      });
      const lessonCount = hasChildren ? countDocumentItems(item) : 0;

      return (
        <div key={item.id} className="w-full max-w-full overflow-hidden">
          <div className="flex w-full items-center overflow-hidden">
            <Button
              variant="ghost"
              data-sidebar-route={routeKey}
              className={cn(
                'group/nav flex min-w-0 flex-1 justify-start rounded-xl overflow-hidden box-border touch-manipulation',
                'border-l-2 transition-[color,background-color,box-shadow,border-color] duration-150',
                depth === 0 ? 'min-h-11 py-2 px-2.5' : 'min-h-9 py-1.5 px-2',
                !isActive || !isDoc ? 'border-l-transparent' : topicBadgeAccentBorder[badgeKind],
                isActive && isDoc
                  ? 'bg-linear-to-r from-primary/12 via-accent/90 to-accent/70 text-accent-foreground shadow-[inset_0_1px_0_hsl(var(--foreground)/0.04)] ring-1 ring-primary/10'
                  : isActive && !isDoc
                  ? 'bg-muted/55 text-foreground'
                  : 'text-muted-foreground hover:border-l-border/40 hover:bg-muted/40 hover:text-foreground hover:shadow-sm'
              )}
              style={{ paddingLeft: `${depth * 10 + 8}px` }}
              onClick={() => topic && handleNavigate(topic.id, item.id)}
            >
              <div className="flex w-full min-w-0 items-center gap-2">
                {depth === 0 && (
                  <span
                    className={cn(
                      'inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md border text-[10px] font-bold tabular-nums',
                      isActive
                        ? 'border-primary/35 bg-primary/15 text-primary shadow-[0_0_0_1px_hsl(var(--primary)/0.12)]'
                        : 'border-border/50 bg-background/80 text-muted-foreground dark:bg-card/80'
                    )}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                )}

                <div className="flex min-w-0 flex-1 items-center gap-1 overflow-hidden">
                  {shouldShowTitleTooltip ? (
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <span
                          className={cn(
                            'min-w-0 flex-1 truncate text-left',
                            depth === 0 && !isDoc ? 'text-sm font-medium text-foreground' : 'text-[13px]'
                          )}
                        >
                          <TranslatedText text={item.title} />
                        </span>
                      </TooltipTrigger>
                      <TooltipContent side="right" align="start" className="max-w-64 wrap-break-word">
                        <TranslatedText text={item.title} />
                      </TooltipContent>
                    </Tooltip>
                  ) : (
                    <span
                      className={cn(
                        'min-w-0 flex-1 truncate text-left',
                        depth === 0 && !isDoc ? 'text-sm font-medium text-foreground' : 'text-[13px]'
                      )}
                    >
                      <TranslatedText text={item.title} />
                    </span>
                  )}

                  {hasChildren && lessonCount > 0 && (
                    <span className="shrink-0 rounded-md bg-muted/50 px-1.5 py-px text-[10px] font-medium tabular-nums text-muted-foreground">
                      {lessonCount}
                    </span>
                  )}
                </div>

                {hasChildren && (
                  <button
                    type="button"
                    onClick={(e) => toggleExpand(e, item.id)}
                    className={cn(
                      'inline-flex size-8 shrink-0 items-center justify-center rounded-md touch-manipulation transition-colors',
                      'hover:bg-foreground/8 dark:hover:bg-foreground/10',
                      isExpanded && 'bg-foreground/6 dark:bg-foreground/8'
                    )}
                    aria-label={isExpanded ? t('sidebar.collapse') : t('sidebar.expand')}
                  >
                    {isExpanded ? (
                      <ChevronDown className="size-3.5 text-foreground/70" />
                    ) : (
                      <ChevronRight className="size-3.5 text-muted-foreground" />
                    )}
                  </button>
                )}
              </div>
            </Button>

            {isDoc && (
              <TopicBadgeChip kind={badgeKind} variant="sidebar" active={isActive} className="mr-2 shrink-0" />
            )}
          </div>

          {hasChildren && isExpanded && (
            <div className={cn('ml-4 border-l border-border/30 pl-1', depth === 0 && 'mb-1 ml-5')}>
              {renderTree(item.items!, depth + 1, item.title)}
            </div>
          )}
        </div>
      );
    });
  };

  if (!topicsIndex) {
    return (
      <div className="flex min-h-0 flex-1 flex-col gap-3 p-4" aria-busy="true">
        <div className="h-8 animate-pulse rounded-md bg-muted/35" />
        <div className="h-9 animate-pulse rounded-lg bg-muted/25" />
        <div className="flex-1 space-y-2 pt-2">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="h-10 animate-pulse rounded-md bg-muted/20" />
          ))}
        </div>
      </div>
    );
  }

  if (!topic)
    return (
      <div className="flex flex-1 flex-col items-center justify-center p-6 text-center space-y-3">
        <span className="text-4xl" aria-hidden>
          📚
        </span>
        <BookOpen className="w-10 h-10 mx-auto text-muted-foreground/70" />
        <p className="text-sm text-muted-foreground">{t('sidebar.selectTopic')}</p>
      </div>
    );

  // Filter Logic
  const displayContent = !searchQuery
    ? renderTree(topic.items)
    : (() => {
        const allItems = flattenItems(topic.items);
        const filtered = allItems.filter((item) => item.title.toLowerCase().includes(searchQuery.toLowerCase()));

        if (filtered.length === 0) {
          return (
            <div className="text-center py-10 space-y-2">
              <span className="text-3xl block" aria-hidden>
                🔎
              </span>
              <p className="text-sm text-muted-foreground">{t('sidebar.noTopicFound')}</p>
            </div>
          );
        }

        return filtered.map((item) => {
          const routeKey = `${topic.id}/${item.id}`;
          const isActive = Boolean(activeRouteKey && routeKey === activeRouteKey);
          const badgeKind = resolveTopicBadge(
            item.title,
            item.badge,
            findTopicBadgeContext(topic.items, item.id)
          );
          return (
            <div key={item.id} className="flex w-full items-center overflow-hidden">
              <Button
                variant="ghost"
                data-sidebar-route={routeKey}
                className={cn(
                  'group/nav flex min-w-0 flex-1 justify-start min-h-10 rounded-lg border-l-2 py-2 px-2.5 font-normal overflow-hidden box-border touch-manipulation transition-colors',
                  isActive && isDocumentItem(item)
                    ? cn(
                        'border-l-2',
                        topicBadgeAccentBorder[badgeKind],
                        'bg-linear-to-r from-primary/12 via-accent/90 to-accent/70 text-accent-foreground'
                      )
                    : 'border-l-transparent hover:bg-muted/35'
                )}
                onClick={() => handleNavigate(topic.id, item.id)}
              >
                <span className="min-w-0 flex-1 truncate text-left text-[13px]">
                  <TranslatedText text={item.title} />
                </span>
              </Button>
              {isDocumentItem(item) && (
                <TopicBadgeChip kind={badgeKind} variant="sidebar" active={isActive} className="mr-2 shrink-0" />
              )}
            </div>
          );
        });
      })();

  return (
    <div className="flex min-h-0 min-w-0 max-w-full flex-1 touch-manipulation flex-col overflow-x-hidden bg-inherit">
      <div
        className={cn(docsSidePanelHeaderSurfaceClass, 'space-y-2 px-3 pb-2.5 pt-3 text-fade-up min-w-0 sm:px-4')}
      >
        <div className="flex min-w-0 items-center gap-2">
          <Link
            to="/"
            onClick={closeSheet}
            className="group inline-flex shrink-0 items-center gap-0.5 rounded-md px-1 py-0.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            <ChevronLeft className="size-3.5 shrink-0 transition-transform group-hover:-translate-x-0.5" />
          </Link>

          <span className="h-3.5 w-px shrink-0 bg-border/50" aria-hidden />

          <div className="flex min-w-0 flex-1 items-center gap-2">
            <div
              className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-border/40 bg-muted/20 text-primary [&_svg]:size-4"
              aria-hidden
            >
              {topic.icon ?? <BookOpen className="size-4" strokeWidth={1.75} />}
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[13px] font-semibold leading-tight text-foreground">
                <TranslatedText text={topic.title} />
              </p>
              <p className="truncate text-[10px] leading-tight text-muted-foreground">
                📖 {t('sidebar.lessonsInTopic', { count: totalLessons })}
              </p>
            </div>
          </div>
        </div>

        <div className="relative min-w-0">
          <Search className="pointer-events-none absolute left-2.5 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="text"
            placeholder={t('sidebar.searchSection')}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="h-9 w-full rounded-lg border-border/35 bg-background/85 pl-8 pr-8 text-sm focus-visible:ring-primary/30"
          />
          {searchQuery && (
            <Button
              variant="ghost"
              size="sm"
              className="absolute right-0.5 top-1/2 size-7 shrink-0 -translate-y-1/2 p-0 rounded-md"
              onClick={() => setSearchQuery('')}
              aria-label={t('sidebar.clearSearch')}
            >
              <X className="size-3" />
            </Button>
          )}
        </div>
      </div>

      <div className="flex min-h-0 flex-1 flex-col px-2.5 pb-2 pt-1.5 sm:px-3">
        <ScrollArea
          className={cn(docsSidePanelScrollAreaClass, 'overflow-hidden')}
          viewportClassName={docsSidePanelScrollViewportClass}
        >
          <div className={docsSidePanelNavSurfaceClass}>
            <nav className="space-y-0.5 group/nav" aria-label="Topic sections">
              {displayContent}
            </nav>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default SidebarContent;
