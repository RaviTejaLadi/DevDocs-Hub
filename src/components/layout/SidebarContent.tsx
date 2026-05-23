import { Link, useNavigate } from 'react-router-dom';
import { useState, useCallback, useEffect, type JSX } from 'react';
import { useSidebarDocsRouteKeys } from '@/context/docsFeedSyncContext';
import type { Topic, TopicItem } from '@/data/topics';
import { resolveTopicBadge } from '@/data/topics';
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

  useEffect(() => {
    if (!activeRouteKey) return;
    const ms = 320;
    const id = window.setTimeout(() => {
      document
        .querySelector(`[data-sidebar-route="${CSS.escape(activeRouteKey)}"]`)
        ?.scrollIntoView({ block: 'nearest', behavior: 'auto' });
    }, ms);
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
          <Button
            variant="ghost"
            data-sidebar-route={routeKey}
            className={cn(
              'group/nav flex min-w-0 w-full max-w-full justify-start rounded-lg overflow-hidden box-border touch-manipulation',
              'border-l-2 transition-[background-color,border-color,box-shadow,color] duration-200',
              depth === 0 ? 'min-h-11 py-2 px-2.5' : 'min-h-9 py-1.5 px-2',
              !isActive || !isDoc ? 'border-l-transparent' : topicBadgeAccentBorder[badgeKind],
              isActive && isDoc
                ? 'bg-linear-to-r from-primary/12 via-accent/90 to-accent/70 text-accent-foreground shadow-[inset_0_1px_0_hsl(var(--foreground)/0.04)]'
                : isActive && !isDoc
                ? 'bg-muted/55 text-foreground'
                : 'text-muted-foreground hover:border-l-border/40 hover:bg-muted/35 hover:text-foreground'
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

                {isDoc && <TopicBadgeChip kind={badgeKind} variant="sidebar" active={isActive} />}
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
      <div className="flex flex-1 flex-col items-center justify-center p-6 text-center">
        <BookOpen className="w-12 h-12 mx-auto mb-3 text-muted-foreground" />
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
            <div className="text-center py-8">
              <p className="text-sm text-muted-foreground">{t('sidebar.noTopicFound')}</p>
            </div>
          );
        }

        return filtered.map((item) => {
          const routeKey = `${topic.id}/${item.id}`;
          const isActive = Boolean(activeRouteKey && routeKey === activeRouteKey);
          const badgeKind = resolveTopicBadge(item.title, item.badge);
          return (
            <Button
              key={item.id}
              variant="ghost"
              data-sidebar-route={routeKey}
              className={cn(
                'group/nav flex w-full justify-start min-h-10 rounded-lg border-l-2 py-2 px-2.5 font-normal overflow-hidden box-border touch-manipulation transition-colors',
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
              <div className="flex min-w-0 w-full items-center gap-1 overflow-hidden text-left">
                <span className="min-w-0 flex-1 truncate text-[13px]">
                  <TranslatedText text={item.title} />
                </span>
                {isDocumentItem(item) && <TopicBadgeChip kind={badgeKind} variant="sidebar" active={isActive} />}
              </div>
            </Button>
          );
        });
      })();

  return (
    <div className="flex min-h-0 min-w-0 max-w-full flex-1 touch-manipulation flex-col overflow-x-hidden bg-inherit">
      <div
        className={cn(
          docsSidePanelHeaderSurfaceClass,
          'text-fade-up min-w-0',
          closeSheet ? 'px-3 pb-4 pt-5 sm:px-4' : 'px-4 pb-4 pt-5'
        )}
      >
        {!closeSheet ? (
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden>
            <div className="absolute -right-10 -top-14 size-30 rounded-full bg-primary/10 blur-3xl dark:bg-primary/14" />
            <div className="absolute -bottom-16 -left-8 size-26 rounded-full bg-primary/8 blur-3xl dark:bg-primary/12" />
          </div>
        ) : null}
        <Link
          to="/"
          onClick={closeSheet}
          className="group mb-3 flex max-w-full min-w-0 items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground sm:mb-4"
        >
          <ChevronLeft className="h-4 w-4 shrink-0 transition-transform group-hover:-translate-x-0.5" />
          <span>{t('sidebar.backToOverview')}</span>
        </Link>
        <div className="flex min-w-0 flex-col gap-3 sm:flex-row sm:items-center sm:gap-3">
          <div
            className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-muted/45 text-primary shadow-inner [&_svg]:size-[1.15rem]"
            aria-hidden
          >
            {topic.icon}
          </div>
          <div className="relative min-w-0 flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder={t('sidebar.searchSection')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-9 w-full rounded-lg border-border/40 bg-background pl-9 pr-8 shadow-[inset_0_1px_2px_hsl(var(--foreground)/0.05)] dark:shadow-[inset_0_1px_3px_hsl(0_0%_0%/0.18)]"
            />
            {searchQuery && (
              <Button
                variant="ghost"
                size="sm"
                className="absolute right-1 top-1/2 h-7 w-7 shrink-0 -translate-y-1/2 p-0"
                onClick={() => setSearchQuery('')}
                aria-label={t('sidebar.clearSearch')}
              >
                <X className="h-3 w-3" />
              </Button>
            )}
          </div>
        </div>
      </div>

      <div className="flex min-h-0 flex-1 flex-col px-3 pb-2 pt-2 sm:px-3">
        <ScrollArea className={cn(docsSidePanelScrollAreaClass, 'overflow-hidden')}>
          <div className={docsSidePanelNavSurfaceClass}>
            <nav className="motion-stagger space-y-0.5 group/nav" aria-label="Topic sections">
              {displayContent}
            </nav>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default SidebarContent;
