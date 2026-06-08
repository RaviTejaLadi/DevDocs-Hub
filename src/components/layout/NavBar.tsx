import { useEffect, useRef, useState, type ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Menu,
  Github,
  Search,
  FileText,
  HelpCircle,
  CornerDownLeft,
  Code2,
  MoreHorizontal,
} from 'lucide-react';
import { Logo } from '@/components/brand/Logo';
import type { Topic, TopicItem } from '@/data/topics';
import { docContentSearchText } from '@/types/docContent';
import { ModeToggle } from '@/components/theme/ModeToggle';
import type { SearchResult } from '@/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { DOCS_NAV_RESET_SCROLL } from '@/lib/docsLocationState';
import { useAppLayoutStore } from '@/stores';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

type RankedSearchResult = SearchResult & { score: number };

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isDocsPage = location.pathname.startsWith('/docs');
    const setMobileSidebarOpen = useAppLayoutStore((s) => s.setMobileSidebarOpen);

  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<RankedSearchResult[]>([]);
  const [topics, setTopics] = useState<Topic[] | null>(null);
  const openSearchRef = useRef(false);

  useEffect(() => {
    openSearchRef.current = open;
  }, [open]);

  useEffect(() => {
    void import('@/data/topics').then((m) => setTopics(m.TOPICS));
  }, []);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key !== 'k' || !(e.metaKey || e.ctrlKey)) return;
      if (openSearchRef.current) {
        e.preventDefault();
        setOpen(false);
        return;
      }
      const el = e.target as HTMLElement | null;
      if (el?.closest?.('textarea,select,[contenteditable="true"]')) return;
      const inp = el?.closest?.('input') as HTMLInputElement | null;
      const type = inp?.type ?? '';
      if (
        inp &&
        !inp.readOnly &&
        !['radio', 'checkbox', 'button', 'submit', 'reset', 'hidden', 'file'].includes(type)
      ) {
        return;
      }
      e.preventDefault();
      setOpen(true);
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  useEffect(() => {
    setOpen(false);
    setQuery('');
  }, [location.pathname]);

  const normalize = (value: string) =>
    value
      .toLowerCase()
      .replace(/[^\w\s-]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();

  const queryTokens = (value: string) => normalize(value).split(' ').filter(Boolean);

  const rankResult = (item: TopicItem, categoryTitle: string, q: string): number => {
    const normalizedQuery = normalize(q);
    if (!normalizedQuery) return 0;

    const tokens = queryTokens(normalizedQuery);
    if (tokens.length === 0) return 0;

    const title = normalize(item.title);
    const category = normalize(categoryTitle);
    // Limit content span for relevance and performance.
    const content = normalize(docContentSearchText(item.content));

    const titleHasAnyToken = tokens.some((t) => title.includes(t));
    const allTokensPresent = tokens.every((t) => title.includes(t) || category.includes(t) || content.includes(t));
    if (!titleHasAnyToken || !allTokensPresent) return 0;

    let score = 0;

    if (title === normalizedQuery) score += 140;
    if (title.startsWith(normalizedQuery)) score += 110;
    if (title.includes(normalizedQuery)) score += 85;
    if (category.includes(normalizedQuery)) score += 35;
    if (content.includes(normalizedQuery) && normalizedQuery.length >= 5) score += 12;

    tokens.forEach((token) => {
      if (title.includes(token)) score += 35;
      if (category.includes(token)) score += 12;
      if (content.includes(token) && token.length >= 4) score += 4;
    });

    if (item.title.length <= 28) score += 6;
    return score;
  };

  const searchRecursive = (
    items: TopicItem[],
    categoryId: string,
    categoryTitle: string,
    topicIcon: ReactNode,
    q: string
  ): RankedSearchResult[] => {
    let hits: RankedSearchResult[] = [];
    items.forEach((item) => {
      const score = rankResult(item, categoryTitle, q);
      if (score > 0) {
        hits.push({ ...item, category: categoryTitle, categoryId, icon: topicIcon, score });
      }
      if (item.items?.length) {
        hits = [...hits, ...searchRecursive(item.items, categoryId, categoryTitle, topicIcon, q)];
      }
    });
    return hits;
  };

  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }
    if (!topics) {
      setResults([]);
      return;
    }
    let globalHits: RankedSearchResult[] = [];
    topics.forEach((topic) => {
      globalHits = [...globalHits, ...searchRecursive(topic.items, topic.id, topic.title, topic.icon, query)];
    });

    const deduped = Array.from(new Map(globalHits.map((hit) => [`${hit.categoryId}:${hit.id}`, hit])).values());

    deduped.sort((a, b) => b.score - a.score || a.title.length - b.title.length);

    setResults(deduped.slice(0, 24));
  }, [query, topics]);

  const handleSelectResult = (categoryId: string, id: string) => {
    navigate(`/docs/${categoryId}/${id}`, { state: DOCS_NAV_RESET_SCROLL });
    setOpen(false);
    setQuery('');
  };

  return (
    <header className="sticky top-[max(0.5rem,env(safe-area-inset-top))] rounded-md z-50 w-[min(100%,calc(100vw-env(safe-area-inset-left)-env(safe-area-inset-right)-1px))] mx-auto max-w-full border border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/80 box-border">
      <div className="flex h-14 min-w-0 items-center gap-1.5 max-sm:gap-1 max-w-7xl mx-auto ps-[max(0.5rem,env(safe-area-inset-left))] pe-[max(0.5rem,env(safe-area-inset-right))] sm:gap-2 sm:ps-6 sm:pe-6 lg:ps-8 lg:pe-8">
        <div className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3">
          <Logo showText size="sm" className="min-w-0 shrink-0 font-semibold" textClassName="max-[360px]:hidden" />

          {isDocsPage && (
            <Button
              variant="outline"
              size="icon"
              className="md:hidden shrink-0"
              onClick={() => setMobileSidebarOpen(true)}
              aria-label={'Open sidebar'}
            >
              <Menu className="h-5 w-5" />
            </Button>
          )}
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button
                type="button"
                variant="outline"
                className="relative h-9 min-w-0 flex-1 sm:max-w-md md:max-w-xl justify-start gap-2 text-muted-foreground font-normal border-border/40 bg-muted/30 hover:bg-muted/50 px-2 sm:pl-3"
                aria-label={'Search topics...'}
              >
                <Search className="h-4 w-4 shrink-0" />
                <span className="min-w-0 truncate pr-11 text-left">{'Search topics...'}</span>
                <kbd className="pointer-events-none absolute right-2 top-1/2 hidden h-5 -translate-y-1/2 select-none items-center gap-0.5 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-70 sm:flex">
                  <span className="text-xs">⌘</span>K
                </kbd>
              </Button>
            </DialogTrigger>

            <DialogContent
              showCloseButton={false}
              className="p-0 gap-0 w-[min(96vw,72rem)] max-w-none bg-background/98 border-border/50 overflow-hidden rounded-md shadow-2xl"
            >
              <DialogHeader className="px-3 sm:px-4 py-2.5 border-b border-border/40 bg-muted/20">
                <DialogTitle className="sr-only">{'Search topics'}</DialogTitle>
                <div className="flex items-center gap-2 rounded-md border border-border/40 bg-background/80 px-2.5 sm:px-3">
                  <div className="h-8 w-8 rounded-md border border-border/40 bg-background grid place-items-center shrink-0">
                    <Search className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <Input
                    autoFocus
                    placeholder={'Type to search...'}
                    className="border-0 focus-visible:ring-0 shadow-none px-0 py-0 h-11 text-[15px] sm:text-base bg-transparent! dark:bg-transparent! placeholder:text-muted-foreground"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                  {query && (
                    <span className="text-[11px] text-muted-foreground shrink-0">
                      {results.length} result{results.length === 1 ? '' : 's'}
                    </span>
                  )}
                </div>
              </DialogHeader>

              <ScrollArea className="max-h-[min(70vh,32rem)] overflow-y-auto p-2 sm:p-3">
                {results.length === 0 && query && (
                  <div className="text-fade-up py-10 text-center text-sm text-muted-foreground space-y-1.5">
                    <p className="text-foreground/90 font-medium">{'No matching topics found'}</p>
                    <p>{'Try a different keyword — for example React, thermodynamics, organic chemistry, or machine design...'}</p>
                  </div>
                )}
                {results.length === 0 && !query && (
                  <div className="text-fade-up py-10 text-center text-sm text-muted-foreground space-y-1.5">
                    <p className="text-foreground/90 font-medium">{'Search across all docs'}</p>
                    <p>{'Start typing to find topics instantly.'}</p>
                  </div>
                )}
                {results.length > 0 && (
                  <div className="space-y-2">
                    <p className="px-2 py-1.5 text-[11px] font-semibold text-muted-foreground uppercase tracking-[0.14em]">
                      {'Results'}
                    </p>
                    <div className="motion-stagger grid grid-cols-1 min-[480px]:grid-cols-2 gap-2">
                      {results.map((res) => (
                        <button
                          type="button"
                          key={`${res.categoryId}-${res.id}`}
                          onClick={() => handleSelectResult(res.categoryId, res.id)}
                          className="group flex min-h-24 items-start gap-3 rounded-md border border-border/30 bg-card/50 px-3 py-3 text-left text-sm transition-all hover:bg-accent/60 hover:border-primary/30 hover:shadow-none"
                        >
                          <div className="h-8 w-8 rounded-md bg-primary/10 text-primary grid place-items-center shrink-0">
                            {res.icon ?? <FileText className="h-4 w-4" />}
                          </div>
                          <span className="min-w-0 flex-1">
                            <span className="font-medium text-foreground line-clamp-2 leading-5">
                              {res.title}
                            </span>
                            <span className="text-xs text-muted-foreground block mt-1.5 truncate">
                              {'in'}{' '}
                              <span className="text-primary">
                                {res.category}
                              </span>
                            </span>
                          </span>
                          <CornerDownLeft className="h-3.5 w-3.5 text-muted-foreground/70 mt-1 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </ScrollArea>

              <div className="px-3 sm:px-4 py-2.5 border-t border-border/40 bg-muted/25 flex items-center justify-between">
                <span className="text-[10px] text-muted-foreground hidden sm:inline">
                  {`Use ${'⌘K / Ctrl K'} anytime to reopen`}
                </span>
                <span className="text-[10px] text-muted-foreground ml-auto">{`${'Esc'} to close`}</span>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        <div className="flex shrink-0 min-w-0 items-center gap-1.5 sm:gap-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="hidden md:inline-flex px-3"
                onClick={() => navigate('/code-editor')}
                aria-label={'Live code editor'}
              >
                <Code2 className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom">{'Live code editor'}</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="hidden md:inline-flex px-3"
                onClick={() => navigate('/interview-questions')}
                aria-label={'Interview questions'}
              >
                <HelpCircle className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom">{'Interview questions'}</TooltipContent>
          </Tooltip>
          {/* <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="hidden md:inline-flex px-3"
                onClick={() => navigate('/playground')}
                aria-label={'Playground'}
              >
                <FlaskConical className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom">{'Playground'}</TooltipContent>
          </Tooltip> */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="hidden md:inline-flex px-3"
                onClick={() => navigate('/terms')}
                aria-label={'Terms'}
              >
                <FileText className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom">{'Terms'}</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="hidden md:inline-flex px-3" aria-label={'GitHub'}>
                <Github className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom">{'GitHub'}</TooltipContent>
          </Tooltip>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                type="button"
                variant="outline"
                size="icon"
                className="md:hidden shrink-0 border-border/40"
                aria-label={'More navigation'}
              >
                <MoreHorizontal className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[min(92vw,17rem)] max-h-[min(70vh,22rem)] overflow-y-auto">
              <DropdownMenuItem
                onClick={() => {
                  navigate('/code-editor');
                }}
                className="gap-2"
              >
                <Code2 className="h-4 w-4 shrink-0" />
                {'Live code editor'}
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  navigate('/interview-questions');
                }}
                className="gap-2"
              >
                <HelpCircle className="h-4 w-4 shrink-0" />
                {'Interview questions'}
              </DropdownMenuItem>
              {/* <DropdownMenuItem
                onClick={() => {
                  navigate('/playground');
                }}
                className="gap-2"
              >
                <FlaskConical className="h-4 w-4 shrink-0" />
                {'Playground'}
              </DropdownMenuItem> */}
              <DropdownMenuItem
                onClick={() => {
                  navigate('/terms');
                }}
                className="gap-2"
              >
                <FileText className="h-4 w-4 shrink-0" />
                {'Terms'}
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="gap-2">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <Github className="h-4 w-4 shrink-0" />
                  {'GitHub'}
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
