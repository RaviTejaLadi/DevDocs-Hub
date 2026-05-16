import { useCallback, useEffect, useId, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { Search, X } from 'lucide-react';
import type { TopicItem } from '@/topics';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useI18n } from '@/i18n/I18nProvider';
import { TranslatedText } from '@/i18n/TranslatedText';
import { cn } from '@/lib/utils';

type RankedItem = { item: TopicItem; score: number };

const normalize = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^\w\s-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const queryTokens = (value: string) => normalize(value).split(' ').filter(Boolean);

/** Rank a leaf document within the current topic feed (title, slug, parent title, content excerpt). */
function rankFeedTopicItem(item: TopicItem, parentTopicTitle: string, queryRaw: string): number {
  const q = normalize(queryRaw);
  if (!q) return 0;
  const tokens = queryTokens(queryRaw);
  if (tokens.length === 0) return 0;

  const title = normalize(item.title);
  const category = normalize(parentTopicTitle);
  const idNorm = normalize(item.id.replace(/-/g, ' '));
  const content = normalize((item.content ?? '').slice(0, 3000));

  const titleOrSlugHasToken = tokens.some((t) => title.includes(t) || idNorm.includes(t));
  const allTokensPresent = tokens.every(
    (t) => title.includes(t) || category.includes(t) || content.includes(t) || idNorm.includes(t)
  );
  if (!titleOrSlugHasToken || !allTokensPresent) return 0;

  let score = 0;
  if (title === q) score += 140;
  if (title.startsWith(q)) score += 110;
  if (title.includes(q)) score += 85;
  if (idNorm === q) score += 130;
  if (idNorm.includes(q)) score += 70;
  if (category.includes(q)) score += 35;
  if (content.includes(q) && q.length >= 5) score += 12;

  tokens.forEach((token) => {
    if (title.includes(token)) score += 35;
    if (idNorm.includes(token)) score += 28;
    if (category.includes(token)) score += 12;
    if (content.includes(token) && token.length >= 4) score += 4;
  });

  if (item.title.length <= 28) score += 6;
  return score;
}

const MAX_RESULTS = 40;

export type DocsTopicFeedSearchProps = {
  parentTopicTitle: string;
  items: TopicItem[];
  activeSlug: string;
  /** When the feed spans multiple topics, disambiguate the “current doc” chip in results. */
  activeTopicId?: string;
  /**
   * Optional corpus: multiple topics in one feed (e.g. chained infinite scroll).
   * When set, search runs across these rows instead of `items` / `parentTopicTitle`.
   */
  multiTopicRows?: Array<{ topicId: string; topicTitle: string; item: TopicItem }>;
  onNavigateToItem: (item: TopicItem, topicId: string) => void;
  /** `embedded`: sits inside the topic hero dock (lighter chrome). Default matches standalone card. */
  variant?: 'card' | 'embedded';
};

export function DocsTopicFeedSearch({
  parentTopicTitle,
  items,
  activeSlug,
  activeTopicId,
  multiTopicRows,
  onNavigateToItem,
  variant = 'card',
}: DocsTopicFeedSearchProps) {
  const { t } = useI18n();
  const idBase = useId();
  const listId = `${idBase}-listbox`;
  const labelId = `${idBase}-label`;

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const ranked = useMemo((): Array<RankedItem & { topicId?: string }> => {
    const q = query.trim();
    if (!q) return [];
    if (multiTopicRows?.length) {
      const rankedInner = multiTopicRows
        .map((row) => {
          const score = rankFeedTopicItem(row.item, row.topicTitle, q);
          return score > 0 ? { item: row.item, score, topicId: row.topicId } : null;
        })
        .filter((x): x is RankedItem & { topicId: string } => x !== null);
      rankedInner.sort((a, b) => b.score - a.score || a.item.title.localeCompare(b.item.title));
      return rankedInner.slice(0, MAX_RESULTS);
    }
    const rankedInner = items
      .map((item) => {
        const score = rankFeedTopicItem(item, parentTopicTitle, q);
        return score > 0 ? { item, score } : null;
      })
      .filter((x): x is RankedItem => x !== null);
    rankedInner.sort((a, b) => b.score - a.score || a.item.title.localeCompare(b.item.title));
    return rankedInner.slice(0, MAX_RESULTS);
  }, [items, multiTopicRows, parentTopicTitle, query]);

  const showPanel = open && query.trim().length > 0;
  const hasResults = ranked.length > 0;

  const activeOptionRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!open || ranked.length === 0) return;
    setActiveIndex((i) => Math.min(Math.max(i, 0), ranked.length - 1));
  }, [open, ranked.length]);

  useLayoutEffect(() => {
    if (!showPanel || !hasResults) return;
    activeOptionRef.current?.scrollIntoView({ block: 'nearest' });
  }, [activeIndex, showPanel, hasResults]);

  useEffect(() => {
    const onDocMouseDown = (e: MouseEvent) => {
      const el = containerRef.current;
      if (!el || el.contains(e.target as Node)) return;
      setOpen(false);
    };
    document.addEventListener('mousedown', onDocMouseDown);
    return () => document.removeEventListener('mousedown', onDocMouseDown);
  }, []);

  const pick = useCallback(
    (entry: RankedItem & { topicId?: string }) => {
      const topicId = entry.topicId ?? activeTopicId;
      if (!topicId) return;
      onNavigateToItem(entry.item, topicId);
      setQuery('');
      setOpen(false);
      inputRef.current?.blur();
    },
    [activeTopicId, onNavigateToItem]
  );

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      setOpen(false);
      setQuery('');
      return;
    }
    if (!open && (e.key === 'ArrowDown' || e.key === 'ArrowUp') && ranked.length > 0) {
      e.preventDefault();
      setOpen(true);
      setActiveIndex(e.key === 'ArrowUp' ? ranked.length - 1 : 0);
      return;
    }
    if (!open || ranked.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((i) => (i + 1) % ranked.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((i) => (i - 1 + ranked.length) % ranked.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const chosen = ranked[activeIndex];
      if (chosen) pick(chosen);
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn('relative min-w-0 w-full max-w-full', variant === 'embedded' ? 'z-20' : 'z-30')}
    >
      <p id={labelId} className="sr-only">
        {t('docs.searchFeedSectionLabel')}. {t('docs.searchFeedHint')}
      </p>
      <div
        className={cn(
          'flex min-w-0 items-center gap-1.5 sm:gap-2',
          variant === 'embedded' ? 'px-2 py-1 sm:px-2.5 sm:py-1.5' : 'px-2.5 py-2 sm:px-3 sm:py-2',
          variant === 'embedded'
            ? cn(
                'rounded-lg border border-border/55 bg-background/75 shadow-[inset_0_1px_2px_hsl(var(--foreground)/0.05)]',
                'dark:bg-background/35 dark:shadow-[inset_0_1px_3px_hsl(0_0%_0%/0.22)]',
                'focus-within:border-primary/35 focus-within:ring-2 focus-within:ring-primary/15',
                showPanel && 'rounded-b-none border-b-0 shadow-none'
              )
            : cn(
                'rounded-xl border border-border/50 bg-card/35 shadow-[0_1px_0_0_hsl(var(--foreground)/0.06)_inset] backdrop-blur-md',
                'dark:border-border/40 dark:bg-card/20',
                showPanel && 'rounded-b-none border-b-0'
              )
        )}
      >
        <Search
          className={cn('shrink-0 text-muted-foreground', variant === 'embedded' ? 'size-3.5' : 'size-4')}
          strokeWidth={2}
          aria-hidden
        />
        <Input
          ref={inputRef}
          type="text"
          name="docs-feed-search"
          autoComplete="off"
          autoCorrect="off"
          spellCheck={false}
          title={variant === 'embedded' ? t('docs.searchFeedHint') : undefined}
          aria-labelledby={labelId}
          aria-autocomplete="list"
          aria-expanded={showPanel}
          aria-controls={showPanel ? listId : undefined}
          aria-activedescendant={showPanel && hasResults ? `${listId}-opt-${activeIndex}` : undefined}
          placeholder={t('docs.searchFeedPlaceholder')}
          value={query}
          onChange={(ev) => {
            const v = ev.target.value;
            setQuery(v);
            const nextOpen = v.trim().length > 0;
            setOpen(nextOpen);
            if (nextOpen) setActiveIndex(0);
          }}
          onFocus={() => {
            if (query.trim().length > 0) setOpen(true);
          }}
          onKeyDown={onKeyDown}
          className={cn(
            'min-w-0 flex-1 border-0 bg-transparent px-0.5 shadow-none  pl-4 focus-visible:ring-0',
            variant === 'embedded'
              ? 'h-8 py-0 text-sm placeholder:text-muted-foreground/65'
              : 'h-9 placeholder:text-muted-foreground'
          )}
        />
        {query.length > 0 ? (
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className={cn(
              'shrink-0 text-muted-foreground hover:text-foreground',
              variant === 'embedded' ? 'size-7' : 'size-8'
            )}
            aria-label={t('docs.searchFeedClear')}
            onClick={() => {
              setQuery('');
              setOpen(false);
              inputRef.current?.focus();
            }}
          >
            <X className={cn(variant === 'embedded' ? 'size-3.5' : 'size-4')} aria-hidden />
          </Button>
        ) : null}
        {variant === 'embedded' ? (
          <div className="hidden shrink-0 select-none items-center gap-0.5 sm:flex" aria-hidden>
            <kbd className="rounded border border-border/55 bg-muted/40 px-1 py-px font-mono text-[9px] text-muted-foreground dark:bg-muted/25">
              ↑
            </kbd>
            <kbd className="rounded border border-border/55 bg-muted/40 px-1 py-px font-mono text-[9px] text-muted-foreground dark:bg-muted/25">
              ↓
            </kbd>
            <span className="px-0.5 text-[9px] text-muted-foreground/75">{t('docs.searchFeedKbdThen')}</span>
            <kbd className="rounded border border-border/55 bg-muted/40 px-1 py-px font-mono text-[9px] text-muted-foreground dark:bg-muted/25">
              ↵
            </kbd>
          </div>
        ) : null}
      </div>

      {showPanel ? (
        <div
          id={listId}
          role="listbox"
          aria-label={t('docs.searchFeedResults')}
          className={cn(
            'absolute left-0 right-0 top-full max-h-[min(22rem,50vh)] overflow-y-auto overflow-x-hidden py-1 shadow-xl',
            variant === 'embedded'
              ? 'rounded-b-lg rounded-t-none border border-t-0 border-border/50 bg-popover/95 ring-1 ring-border/40 backdrop-blur-md dark:bg-popover/90'
              : 'rounded-b-xl rounded-t-none border border-t-0 border-border/50 bg-popover/95 backdrop-blur-md dark:border-border/40 dark:bg-popover/90'
          )}
        >
          {hasResults ? (
            ranked.map((row, idx) => {
              const isActive = idx === activeIndex;
              const rowTopicId = row.topicId ?? activeTopicId;
              const isCurrent =
                row.item.id === activeSlug && (!rowTopicId || !activeTopicId || rowTopicId === activeTopicId);
              return (
                <div
                  key={row.topicId ? `${row.topicId}-${row.item.id}` : row.item.id}
                  ref={isActive ? activeOptionRef : undefined}
                  id={`${listId}-opt-${idx}`}
                  role="option"
                  aria-selected={isActive}
                  className={cn(
                    'cursor-pointer px-3 py-2.5 text-sm outline-none sm:px-3.5',
                    isActive ? 'bg-accent text-accent-foreground' : 'hover:bg-accent/60',
                    isCurrent && !isActive && 'bg-muted/40'
                  )}
                  onMouseEnter={() => setActiveIndex(idx)}
                  onMouseDown={(ev) => {
                    ev.preventDefault();
                    pick(row);
                  }}
                >
                  <div className="flex min-w-0 items-start justify-between gap-2">
                    <span className="min-w-0 font-medium leading-snug text-foreground">
                      <TranslatedText text={row.item.title} />
                    </span>
                    {isCurrent ? (
                      <span className="shrink-0 rounded-md border border-border/60 bg-background/80 px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
                        {t('docs.searchFeedCurrent')}
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-0.5 truncate font-mono text-[11px] text-muted-foreground/90">{row.item.id}</p>
                </div>
              );
            })
          ) : (
            <p className="px-3 py-4 text-center text-sm text-muted-foreground sm:px-4">
              {t('docs.searchFeedNoResults')}
            </p>
          )}
        </div>
      ) : null}
    </div>
  );
}
