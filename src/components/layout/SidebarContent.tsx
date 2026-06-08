import { useNavigate } from 'react-router-dom';
import { useState, useCallback, useEffect, useRef, type JSX } from 'react';
import { useDocsRouteParams } from '@/hooks/useDocsRouteParams';
import type { Topic, TopicItem } from '@/data/topics';
import { hasDocContent } from '@/types/docContent';
import { BookOpen, ChevronRight, Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  SidebarContent as UiSidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarInput,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { DOCS_NAV_RESET_SCROLL } from '@/lib/docsLocationState';
import {
  docsSidePanelNavSurfaceClass,
  docsSidebarTreeBranchClass,
  docsSidebarTreeSubMenuClass,
} from '@/constants/docsSidePanel';
import { cn } from '@/lib/utils';

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

const isDocumentItem = (item: TopicItem) => hasDocContent(item.content);

const countDocumentItems = (item: TopicItem): number => {
  if (isDocumentItem(item)) return 1;
  return item.items?.reduce((sum, child) => sum + countDocumentItems(child), 0) ?? 0;
};

const flattenItems = (items: TopicItem[]): TopicItem[] => {
  return items.reduce((acc: TopicItem[], item) => {
    acc.push(item);
    if (item.items) acc.push(...flattenItems(item.items));
    return acc;
  }, []);
};

const sectionIndexLabel = (index: number) => String(index + 1).padStart(2, '0');

const SidebarContent = ({
  closeSheet,
  showCollapseControl,
}: {
  closeSheet?: () => void;
  showCollapseControl?: boolean;
}) => {
    const { categoryId: currentTopicId, slug: activeSlug } = useDocsRouteParams();
  const [topicsIndex, setTopicsIndex] = useState<Topic[] | null>(null);

  useEffect(() => {
    void import('@/data/topics').then((m) => setTopicsIndex(m.TOPICS));
  }, []);

  const topic = topicsIndex?.find((tp) => tp.id === currentTopicId);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const activeRouteKey = currentTopicId && activeSlug ? `${currentTopicId}/${activeSlug}` : '';
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({});
  const initializedTopicIdRef = useRef<string | null>(null);

  useEffect(() => {
    if (!topic) return;
    if (initializedTopicIdRef.current === topic.id) return;
    initializedTopicIdRef.current = topic.id;

    const firstWithChildren = topic.items.find((item) => item.items?.length);
    setExpandedIds(firstWithChildren ? { [firstWithChildren.id]: true } : {});
  }, [topic]);

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
    if (!activeRouteKey || searchQuery) return;

    const id = window.setTimeout(() => {
      const el = document.querySelector<HTMLElement>(`[data-sidebar-route="${CSS.escape(activeRouteKey)}"]`);
      if (!el) return;

      const sidebarViewport =
        el.closest('[data-slot="scroll-area-viewport"]') ?? el.closest('[data-slot="sidebar-content"]');
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
      closeSheet?.();
    },
    [navigate, closeSheet]
  );

  const renderExpandAction = (itemId: string, isExpanded: boolean) => (
    <SidebarMenuAction
      onClick={(e) => toggleExpand(e, itemId)}
      aria-label={isExpanded ? 'Collapse' : 'Expand'}
    >
      <ChevronRight className={cn('size-3.5 transition-transform duration-200', isExpanded && 'rotate-90')} />
    </SidebarMenuAction>
  );

  const renderSubExpandButton = (itemId: string, isExpanded: boolean) => (
    <button
      type="button"
      onClick={(e) => toggleExpand(e, itemId)}
      className="absolute right-0.5 top-1/2 flex size-6 -translate-y-1/2 items-center justify-center rounded-md text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground"
      aria-label={isExpanded ? 'Collapse' : 'Expand'}
    >
      <ChevronRight className={cn('size-3.5 transition-transform duration-200', isExpanded && 'rotate-90')} />
    </button>
  );

  const renderSubNodes = (items: TopicItem[]): JSX.Element[] =>
    items.map((item) => {
      const routeKey = topic ? `${topic.id}/${item.id}` : '';
      const isActive = Boolean(activeRouteKey && routeKey === activeRouteKey);
      const hasChildren = Boolean(item.items?.length);
      const isExpanded = expandedIds[item.id];
      const isDoc = isDocumentItem(item);

      if (!hasChildren) {
        return (
          <SidebarMenuSubItem key={item.id} className="w-full min-w-0">
            <SidebarMenuSubButton
              asChild
              isActive={isActive && isDoc}
              size="md"
              className="h-8 w-full min-w-0 px-1.5 text-sm"
            >
              <button
                type="button"
                data-sidebar-route={routeKey}
                className="w-full min-w-0 text-left"
                onClick={() => topic && handleNavigate(topic.id, item.id)}
              >
                <span className="block w-full truncate">
                  {item.title}
                </span>
              </button>
            </SidebarMenuSubButton>
          </SidebarMenuSubItem>
        );
      }

      return (
        <SidebarMenuSubItem key={item.id} className="relative w-full min-w-0">
          <SidebarMenuSubButton
            asChild
            isActive={isActive && isDoc}
            size="md"
            className="h-8 w-full min-w-0 px-1.5 pr-8 text-sm font-medium"
          >
            <button
              type="button"
              data-sidebar-route={routeKey}
              className="w-full min-w-0 text-left"
              onClick={() => topic && handleNavigate(topic.id, item.id)}
            >
              <span className="block w-full truncate">
                {item.title}
              </span>
            </button>
          </SidebarMenuSubButton>
          {renderSubExpandButton(item.id, isExpanded)}
          {isExpanded ? (
            <SidebarMenuSub className={docsSidebarTreeSubMenuClass}>{renderSubNodes(item.items!)}</SidebarMenuSub>
          ) : null}
        </SidebarMenuSubItem>
      );
    });

  const renderMenuNodes = (items: TopicItem[]): JSX.Element[] =>
    items.map((item) => {
      const routeKey = topic ? `${topic.id}/${item.id}` : '';
      const isActive = Boolean(activeRouteKey && routeKey === activeRouteKey);
      const hasChildren = Boolean(item.items?.length);
      const isExpanded = expandedIds[item.id];
      const isDoc = isDocumentItem(item);

      if (!hasChildren) {
        return (
          <SidebarMenuItem key={item.id} className="w-full min-w-0">
            <SidebarMenuButton
              asChild
              size="default"
              isActive={isActive && isDoc}
              className="h-8 w-full min-w-0 px-1.5 text-sm"
            >
              <button
                type="button"
                data-sidebar-route={routeKey}
                className="w-full min-w-0 text-left"
                onClick={() => topic && handleNavigate(topic.id, item.id)}
              >
                <span className="block w-full truncate">
                  {item.title}
                </span>
              </button>
            </SidebarMenuButton>
          </SidebarMenuItem>
        );
      }

      return (
        <SidebarMenuItem key={item.id} className="w-full min-w-0">
          <SidebarMenuButton
            asChild
            size="default"
            isActive={isActive && isDoc}
            className="h-8 w-full min-w-0 px-1.5 text-sm font-medium"
          >
            <button
              type="button"
              data-sidebar-route={routeKey}
              className="w-full min-w-0 text-left"
              onClick={() => topic && handleNavigate(topic.id, item.id)}
            >
              <span className="block w-full truncate">
                {item.title}
              </span>
            </button>
          </SidebarMenuButton>
          {renderExpandAction(item.id, isExpanded)}
          {isExpanded ? (
            <SidebarMenuSub className={docsSidebarTreeSubMenuClass}>{renderSubNodes(item.items!)}</SidebarMenuSub>
          ) : null}
        </SidebarMenuItem>
      );
    });

  const renderSection = (item: TopicItem, index: number): JSX.Element => {
    const routeKey = topic ? `${topic.id}/${item.id}` : '';
    const isActive = Boolean(activeRouteKey && routeKey === activeRouteKey);
    const hasChildren = Boolean(item.items?.length);
    const isExpanded = expandedIds[item.id];
    const isDoc = isDocumentItem(item);
    const lessonCount = hasChildren ? countDocumentItems(item) : 0;
    const sectionActive = isActive && (isDoc || !hasChildren);

    if (!hasChildren) {
      return (
        <SidebarGroup
          key={item.id}
          className="w-full min-w-0 border-b border-border/20 p-0 pb-2 last:border-b-0 last:pb-0"
        >
          <SidebarMenu className="w-full min-w-0 gap-0.5">
            <SidebarMenuItem className="w-full min-w-0">
              <SidebarMenuButton
                asChild
                size="default"
                isActive={sectionActive}
                className="h-9 w-full min-w-0 px-2 text-sm font-semibold"
              >
                <button
                  type="button"
                  data-sidebar-route={routeKey}
                  className="w-full min-w-0 text-left"
                  onClick={() => topic && handleNavigate(topic.id, item.id)}
                >
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-md border border-sidebar-border bg-background text-[11px] font-bold tabular-nums">
                    {sectionIndexLabel(index)}
                  </span>
                  <span className="min-w-0 flex-1 truncate">
                    {item.title}
                  </span>
                </button>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      );
    }

    return (
      <SidebarGroup
        key={item.id}
        className="w-full min-w-0 border-b border-border/20 p-0 pb-2 last:border-b-0 last:pb-0"
      >
        <div
          className={cn(
            'flex w-full min-w-0 items-center gap-1 rounded-lg px-0.5',
            sectionActive ? 'bg-sidebar-accent/80' : 'hover:bg-sidebar-accent/40'
          )}
        >
          <button
            type="button"
            data-sidebar-route={routeKey}
            onClick={() => topic && handleNavigate(topic.id, item.id)}
            className={cn(
              'flex min-w-0 flex-1 items-center gap-2 rounded-md px-2 py-2 text-left',
              sectionActive && 'text-sidebar-accent-foreground'
            )}
          >
            <span className="flex size-6 shrink-0 items-center justify-center rounded-md border border-sidebar-border bg-background text-[11px] font-bold tabular-nums">
              {sectionIndexLabel(index)}
            </span>
            <span className="min-w-0 flex-1 truncate text-sm font-semibold leading-snug">
              {item.title}
            </span>
          </button>
          {lessonCount > 0 ? (
            <SidebarMenuBadge className="static right-auto bg-background/80 text-xs">{lessonCount}</SidebarMenuBadge>
          ) : null}
          <button
            type="button"
            onClick={(e) => toggleExpand(e, item.id)}
            className="flex size-7 shrink-0 items-center justify-center rounded-md text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground"
            aria-label={isExpanded ? 'Collapse' : 'Expand'}
          >
            <ChevronRight className={cn('size-3.5 transition-transform duration-200', isExpanded && 'rotate-90')} />
          </button>
        </div>
        {isExpanded ? (
          <SidebarGroupContent className="w-full min-w-0 pt-1.5">
            <div className={docsSidebarTreeBranchClass}>
              <SidebarMenu className="w-full min-w-0 gap-0.5">{renderMenuNodes(item.items!)}</SidebarMenu>
            </div>
          </SidebarGroupContent>
        ) : null}
      </SidebarGroup>
    );
  };

  if (!topicsIndex) {
    return (
      <UiSidebarContent className="gap-2 p-3" aria-busy="true">
        <div className="h-7 animate-pulse rounded-md bg-sidebar-accent/50" />
        <div className="h-7 animate-pulse rounded-md bg-sidebar-accent/35" />
        <div className="flex-1 space-y-1.5 pt-1">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="h-6 animate-pulse rounded-md bg-sidebar-accent/25" />
          ))}
        </div>
      </UiSidebarContent>
    );
  }

  if (!topic) {
    return (
      <UiSidebarContent className="items-center justify-center p-6 text-center">
        <span className="text-3xl" aria-hidden>
          📚
        </span>
        <BookOpen className="mx-auto mt-2 size-8 text-muted-foreground/70" />
        <p className="mt-2 text-sm text-muted-foreground">{'Select a topic'}</p>
      </UiSidebarContent>
    );
  }

  const displayContent = !searchQuery
    ? topic.items.map((item, index) => renderSection(item, index))
    : (() => {
        const filtered = flattenItems(topic.items).filter((item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase())
        );

        if (filtered.length === 0) {
          return (
            <div className="py-8 text-center">
              <span className="block text-2xl" aria-hidden>
                🔎
              </span>
              <p className="mt-2 text-sm text-muted-foreground">{'No topic found'}</p>
            </div>
          );
        }

        return (
          <div className={docsSidebarTreeBranchClass}>
            <SidebarMenu className="w-full min-w-0 gap-0.5">
              {filtered.map((item) => {
                const routeKey = `${topic.id}/${item.id}`;
                const isActive = Boolean(activeRouteKey && routeKey === activeRouteKey);
                return (
                  <SidebarMenuItem key={item.id} className="w-full min-w-0">
                    <SidebarMenuButton
                      asChild
                      size="default"
                      isActive={isActive && isDocumentItem(item)}
                      className="h-8 w-full min-w-0 px-1.5 text-sm"
                    >
                      <button
                        type="button"
                        data-sidebar-route={routeKey}
                        className="w-full min-w-0 text-left"
                        onClick={() => handleNavigate(topic.id, item.id)}
                      >
                        <span className="block w-full truncate">
                          {item.title}
                        </span>
                      </button>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </div>
        );
      })();

  return (
    <div className="flex h-full min-h-0 flex-col overflow-hidden bg-sidebar text-sidebar-foreground">
      <SidebarHeader className="border-b border-sidebar-border px-3 py-2.5">
        <div className="flex items-center gap-2">
          <div className="relative min-w-0 flex-1">
            <Search className="pointer-events-none absolute left-2.5 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
            <SidebarInput
              type="text"
              placeholder={'Search in this section...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-8 bg-background pl-8 pr-8 text-sm"
            />
            {searchQuery ? (
              <Button
                variant="ghost"
                size="sm"
                className="absolute right-0 top-1/2 size-6 -translate-y-1/2 p-0"
                onClick={() => setSearchQuery('')}
                aria-label={'Clear search'}
              >
                <X className="size-3" />
              </Button>
            ) : null}
          </div>
          {showCollapseControl ? <SidebarTrigger className="size-8 shrink-0" /> : null}
        </div>
      </SidebarHeader>

      <UiSidebarContent className="px-3 py-3">
        <div className={cn(docsSidePanelNavSurfaceClass, 'flex w-full min-w-0 flex-col gap-1')}>{displayContent}</div>
      </UiSidebarContent>
    </div>
  );
};

export default SidebarContent;
