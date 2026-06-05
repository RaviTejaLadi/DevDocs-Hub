import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { Stream, Topic, TopicItem } from '@/data/topics';
import { ChevronDown, Library, Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { useI18n } from '@/i18n/I18nProvider';
import { TranslatedText } from '@/i18n/TranslatedText';
import { getCategoryVisual, getStreamEmoji } from '@/features/landing/constants';
import {
  docsFloatingActionButtonClass,
  docsFloatingActionButtonBottomClass,
  docsSidePanelScrollAreaClass,
  docsSidePanelScrollViewportClass,
  docsTopicBrowserSheetContentClass,
} from '@/constants/docsSidePanel';
import { formatTopicTrackLabel } from '../utils/formatTopicTrackLabel';
import { flattenTopicItems } from '../utils';
import { cn } from '@/lib/utils';

export type DocsTopicBrowserSection = {
  stream: Stream;
  categories: { key: string; label: string; topics: Topic[] }[];
};

type DocsTopicBrowserSheetProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  sections: DocsTopicBrowserSection[];
  activeTopicId: string | undefined;
  activeStreamId: string;
  onActiveStreamChange: (streamId: string) => void;
  openCategories: Record<string, boolean>;
  onToggleCategory: (key: string) => void;
  onExpandAllCategories: (streamId: string) => void;
  onCollapseAllCategories: (streamId: string) => void;
  onSelectTopic: (item: TopicItem, topicId: string) => void;
};

type SearchHit = {
  topic: Topic;
  jumpItem: TopicItem;
  lessonCount: number;
  streamTitle: string;
  streamId: string;
  categoryLabel: string;
};

function countTopicLessons(topic: Topic) {
  return flattenTopicItems(topic.items).length;
}

export function DocsTopicBrowserSheet({
  open,
  onOpenChange,
  sections,
  activeTopicId,
  activeStreamId,
  onActiveStreamChange,
  openCategories,
  onToggleCategory,
  onExpandAllCategories,
  onCollapseAllCategories,
  onSelectTopic,
}: DocsTopicBrowserSheetProps) {
  const { t } = useI18n();
  const [query, setQuery] = useState('');
  const activeRowRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) setQuery('');
  }, [open]);

  useEffect(() => {
    if (!open || query || !activeTopicId) return;
    const id = window.setTimeout(() => {
      activeRowRef.current?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }, 120);
    return () => window.clearTimeout(id);
  }, [open, query, activeTopicId, openCategories, activeStreamId]);

  const normalizedQuery = query.trim().toLowerCase();
  const isSearching = normalizedQuery.length > 0;

  const activeSection = useMemo(
    () => sections.find((s) => s.stream.id === activeStreamId) ?? sections[0],
    [sections, activeStreamId]
  );

  const searchHits = useMemo((): SearchHit[] => {
    if (!isSearching) return [];
    const hits: SearchHit[] = [];
    for (const { stream, categories } of sections) {
      for (const cat of categories) {
        const categoryLabel = formatTopicTrackLabel(cat.label);
        for (const topic of cat.topics) {
          const jumpItem = flattenTopicItems(topic.items)[0];
          if (!jumpItem) continue;
          const haystack = [topic.title, categoryLabel, stream.title, topic.description ?? ''].join(' ').toLowerCase();
          if (!haystack.includes(normalizedQuery)) continue;
          hits.push({
            topic,
            jumpItem,
            lessonCount: countTopicLessons(topic),
            streamTitle: stream.title,
            streamId: stream.id,
            categoryLabel,
          });
        }
      }
    }
    return hits;
  }, [sections, isSearching, normalizedQuery]);

  const renderTopicRow = useCallback(
    (
      topic: Topic,
      jumpItem: TopicItem,
      options?: {
        meta?: string;
        setActiveRef?: boolean;
      }
    ) => {
      const isCurrent = activeTopicId === topic.id;
      const lessonCount = countTopicLessons(topic);

      return (
        <button
          key={topic.id}
          ref={options?.setActiveRef ? activeRowRef : undefined}
          type="button"
          aria-current={isCurrent ? 'page' : undefined}
          aria-label={`${t('docs.topicBrowserJumpTo')} ${topic.title}`}
          className={cn(
            'group/topic flex w-full min-h-8 items-center gap-2 rounded-md border-l-2 px-2 py-1.5 text-left transition-colors duration-150',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring',
            isCurrent
              ? 'border-l-primary bg-primary/8 font-medium text-primary'
              : 'border-l-transparent text-muted-foreground hover:bg-muted/45 hover:text-foreground'
          )}
          onClick={() => onSelectTopic(jumpItem, topic.id)}
        >
          <span className="min-w-0 flex-1 text-left">
            <span className="block truncate text-[13px] leading-snug">
              <TranslatedText text={topic.title} />
            </span>
            {options?.meta ? (
              <span className="block truncate text-[10px] font-normal leading-tight text-muted-foreground">
                {options.meta}
              </span>
            ) : null}
          </span>
          <span
            className={cn(
              'shrink-0 rounded px-1.5 py-px text-[10px] font-medium tabular-nums',
              isCurrent ? 'bg-primary/15 text-primary' : 'bg-muted/50 text-muted-foreground'
            )}
          >
            {lessonCount}
          </span>
        </button>
      );
    },
    [activeTopicId, onSelectTopic, t]
  );

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <Tooltip>
        <TooltipTrigger asChild>
          <SheetTrigger asChild>
            <Button
              type="button"
              variant="secondary"
              size="icon"
              aria-label={t('docs.topicBrowserTrigger')}
              className={cn(docsFloatingActionButtonClass, docsFloatingActionButtonBottomClass, open && 'hidden')}
            >
              <Library className="size-4" />
            </Button>
          </SheetTrigger>
        </TooltipTrigger>
        <TooltipContent side="left">{t('docs.topicBrowserTrigger')}</TooltipContent>
      </Tooltip>

      <SheetContent
        side="right"
        overlayClassName="backdrop-blur-sm bg-background/40"
        className={docsTopicBrowserSheetContentClass}
      >
        <SheetHeader className="shrink-0 gap-3 border-b border-border/30 bg-muted/15 px-4 py-3.5 text-left">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0 space-y-1">
              <SheetTitle className="text-base font-semibold leading-tight tracking-tight">
                {t('docs.topicBrowserTitle')}
              </SheetTitle>
              <p className="text-xs text-muted-foreground">{t('docs.topicBrowserSubtitle')}</p>
            </div>
            <SheetClose asChild>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="size-8 shrink-0 rounded-lg text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                aria-label="Close"
              >
                <X className="size-4" />
              </Button>
            </SheetClose>
          </div>

          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t('nav.searchTopics')}
              className="h-10 rounded-xl border-border/40 bg-background pl-9 pr-9 text-sm shadow-none focus-visible:ring-primary/30"
            />
            {query ? (
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-1 top-1/2 size-8 -translate-y-1/2 rounded-lg"
                aria-label={t('sidebar.clearSearch')}
                onClick={() => setQuery('')}
              >
                <X className="size-3.5" />
              </Button>
            ) : null}
          </div>
        </SheetHeader>

        {sections.length > 1 && !isSearching ? (
          <div className="shrink-0 border-b border-border/25 bg-muted/10 px-3 py-3">
            <p className="mb-2 px-0.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
              {t('docs.learningStream')}
            </p>
            <nav aria-label={t('docs.learningStream')} className="grid grid-cols-2 gap-1.5 sm:grid-cols-2">
              {sections.map(({ stream }) => {
                const isActive = stream.id === activeStreamId;
                return (
                  <button
                    key={stream.id}
                    type="button"
                    data-stream-tab={stream.id}
                    aria-pressed={isActive}
                    onClick={() => onActiveStreamChange(stream.id)}
                    className={cn(
                      'flex min-h-11 w-full min-w-0 items-start gap-1.5 rounded-full border px-2.5 py-2 text-left transition-all duration-200 touch-manipulation',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1',
                      isActive
                        ? 'border-primary/50 bg-primary/12 text-primary shadow-none ring-1 ring-primary/15'
                        : 'border-border/45 bg-background/90 text-foreground hover:border-border/70 hover:bg-card'
                    )}
                  >
                    <span className="mt-0.5 shrink-0 text-sm leading-none" aria-hidden>
                      {getStreamEmoji(stream.id)}
                    </span>
                    <span className="min-w-0 flex-1 text-[11px] font-semibold leading-snug wrap-break-word hyphens-auto">
                      <TranslatedText text={stream.title} />
                    </span>
                    <span
                      className={cn(
                        'mt-0.5 shrink-0 rounded-full px-1.5 py-0.5 text-[10px] font-bold leading-none tabular-nums',
                        isActive ? 'bg-primary/20 text-primary' : 'bg-muted/80 text-muted-foreground'
                      )}
                    >
                      {stream.topics.length}
                    </span>
                  </button>
                );
              })}
            </nav>
          </div>
        ) : null}

        {!isSearching && activeSection ? (
          <div className="flex shrink-0 items-center justify-between gap-2 border-b border-border/20 px-4 py-2">
            <p className="truncate text-xs font-medium text-muted-foreground">
              {t('docs.topicsInStream', { count: activeSection.stream.topics.length })}
            </p>
            <div className="flex shrink-0 items-center gap-1">
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="h-7 rounded-lg px-2 text-[11px] text-muted-foreground hover:text-foreground"
                onClick={() => onExpandAllCategories(activeSection.stream.id)}
              >
                {t('docs.topicBrowserExpandAll')}
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="h-7 rounded-lg px-2 text-[11px] text-muted-foreground hover:text-foreground"
                onClick={() => onCollapseAllCategories(activeSection.stream.id)}
              >
                {t('docs.topicBrowserCollapseAll')}
              </Button>
            </div>
          </div>
        ) : null}

        <ScrollArea
          className={cn(docsSidePanelScrollAreaClass, 'min-h-0 overflow-hidden')}
          viewportClassName={docsSidePanelScrollViewportClass}
        >
          <div className="space-y-1.5 px-2 py-2 pb-4">
            {isSearching ? (
              <>
                <p className="px-1.5 pb-0.5 text-[11px] font-medium text-muted-foreground">
                  {t('docs.topicBrowserSearchResults', { count: searchHits.length })}
                </p>
                {searchHits.length === 0 ? (
                  <div className="rounded-lg border border-dashed border-border/45 bg-muted/10 px-3 py-8 text-center">
                    <p className="text-[13px] text-muted-foreground">{t('sidebar.noTopicFound')}</p>
                  </div>
                ) : (
                  <div className="rounded-lg border border-border/25 bg-muted/15 p-1">
                    {searchHits.map((hit) => (
                      <div key={hit.topic.id} className="space-y-0">
                        {renderTopicRow(hit.topic, hit.jumpItem, {
                          meta: `${hit.streamTitle} · ${hit.categoryLabel}`,
                          setActiveRef: activeTopicId === hit.topic.id,
                        })}
                      </div>
                    ))}
                  </div>
                )}
              </>
            ) : activeSection ? (
              activeSection.categories.map((cat) => {
                const ck = `${activeSection.stream.id}::${cat.key}`;
                const isOpen = openCategories[ck] ?? false;
                const categoryLabel = formatTopicTrackLabel(cat.label);
                const visual = getCategoryVisual(cat.label);

                return (
                  <div
                    key={ck}
                    className={cn(
                      'overflow-hidden rounded-lg border transition-colors duration-150',
                      isOpen ? 'border-border/40 bg-card/40' : 'border-border/30 bg-card/20'
                    )}
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => onToggleCategory(ck)}
                      className={cn(
                        'flex w-full min-h-9 items-center gap-2 px-2.5 py-2 text-left transition-colors',
                        'hover:bg-muted/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring',
                        isOpen && 'bg-muted/25'
                      )}
                    >
                      <span className="shrink-0 text-sm leading-none" aria-hidden>
                        {visual.emoji}
                      </span>
                      <span className="min-w-0 flex-1 truncate text-[13px] font-medium capitalize text-foreground">
                        {categoryLabel}
                      </span>
                      <span className="shrink-0 rounded bg-muted/55 px-1.5 py-px text-[10px] font-medium tabular-nums text-muted-foreground">
                        {cat.topics.length}
                      </span>
                      <ChevronDown
                        className={cn(
                          'size-3.5 shrink-0 text-muted-foreground transition-transform duration-150',
                          isOpen && 'rotate-180'
                        )}
                        aria-hidden
                      />
                    </button>

                    <div
                      className={cn(
                        'grid transition-[grid-template-rows] duration-150 ease-out',
                        isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                      )}
                    >
                      <div className="overflow-hidden">
                        <div className="space-y-px border-t border-border/20 px-1 pb-1 pt-0.5">
                          {cat.topics.map((topic) => {
                            const jumpItem = flattenTopicItems(topic.items)[0];
                            if (!jumpItem) return null;
                            return renderTopicRow(topic, jumpItem, {
                              setActiveRef: activeTopicId === topic.id,
                            });
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : null}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
