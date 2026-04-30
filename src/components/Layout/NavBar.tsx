import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, Github, Search, FileText, HelpCircle, CornerDownLeft } from 'lucide-react';
import { Logo } from '../Logo';
import { TOPICS, type TopicItem } from '../../topics';
import { ModeToggle } from '../Theme/ModeToggle';
import type { SearchResult } from '../../types';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { ScrollArea } from '../ui/scroll-area';

type RankedSearchResult = SearchResult & { score: number };

const NavBar = ({ setSidebarOpen }: { setSidebarOpen: (open: boolean) => void }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isDocsPage = location.pathname.startsWith('/docs');

  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

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
    const content = normalize((item.content ?? '').slice(0, 3000));

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
    topicIcon: React.ReactNode,
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
    let globalHits: RankedSearchResult[] = [];
    TOPICS.forEach((topic) => {
      globalHits = [...globalHits, ...searchRecursive(topic.items, topic.id, topic.title, topic.icon, query)];
    });

    const deduped = Array.from(
      new Map(globalHits.map((hit) => [`${hit.categoryId}:${hit.id}`, hit])).values()
    );

    deduped.sort((a, b) => b.score - a.score || a.title.length - b.title.length);

    setResults(deduped.slice(0, 24));
  }, [query]);

  const handleSelectResult = (categoryId: string, id: string) => {
    navigate(`/docs/${categoryId}/${id}`);
    setOpen(false);
    setQuery('');
  };

  const highlightMatch = (value: string, q: string) => {
    if (!q.trim()) return value;
    const index = value.toLowerCase().indexOf(q.trim().toLowerCase());
    if (index === -1) return value;
    const before = value.slice(0, index);
    const match = value.slice(index, index + q.length);
    const after = value.slice(index + q.length);
    return (
      <>
        {before}
        <span className="bg-primary/15 text-foreground rounded-sm px-0.5">{match}</span>
        {after}
      </>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/80">
      <div className="flex h-14 items-center px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 flex-1 min-w-0">
          <Logo showText size="sm" className="font-semibold" />

          {isDocsPage && (
            <Button
              variant="outline"
              size="icon"
              className="md:hidden shrink-0"
              onClick={() => setSidebarOpen(true)}
              aria-label="Open sidebar"
            >
              <Menu className="h-5 w-5" />
            </Button>
          )}
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="relative h-9 w-9 sm:w-[18rem] md:w-[20rem] justify-start gap-2 text-muted-foreground font-normal border-border/40 bg-muted/30 hover:bg-muted/50 px-2 sm:pl-3"
              >
                <Search className="h-4 w-4 shrink-0" />
                <span className="hidden sm:inline truncate pr-12">Search topics...</span>
                <kbd className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 hidden h-5 select-none items-center gap-0.5 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-70 lg:flex">
                  <span className="text-xs">⌘</span>K
                </kbd>
              </Button>
            </DialogTrigger>

            <DialogContent
              showCloseButton={false}
              className="p-0 gap-0 w-[min(96vw,72rem)] max-w-none bg-background/98 border-border/50 overflow-hidden rounded-md shadow-2xl"
            >
              <DialogHeader className="px-3 sm:px-4 py-2.5 border-b border-border/40 bg-muted/20">
                <DialogTitle className="sr-only">Search topics</DialogTitle>
                <div className="flex items-center gap-2 rounded-md border border-border/40 bg-background/80 px-2.5 sm:px-3">
                  <div className="h-8 w-8 rounded-md border border-border/40 bg-background grid place-items-center shrink-0">
                    <Search className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <Input
                    placeholder="Type to search..."
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
                  <div className="py-10 text-center text-sm text-muted-foreground space-y-1.5">
                    <p className="text-foreground/90 font-medium">No matching topics found</p>
                    <p>Try a different keyword, like React, SQL, system design...</p>
                  </div>
                )}
                {results.length === 0 && !query && (
                  <div className="py-10 text-center text-sm text-muted-foreground space-y-1.5">
                    <p className="text-foreground/90 font-medium">Search across all docs</p>
                    <p>Start typing to find topics instantly.</p>
                  </div>
                )}
                {results.length > 0 && (
                  <div className="space-y-2">
                    <p className="px-2 py-1.5 text-[11px] font-semibold text-muted-foreground uppercase tracking-[0.14em]">
                      Results
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {results.map((res) => (
                        <button
                          type="button"
                          key={`${res.categoryId}-${res.id}`}
                          onClick={() => handleSelectResult(res.categoryId, res.id)}
                          className="group flex min-h-24 items-start gap-3 rounded-md border border-border/30 bg-card/50 px-3 py-3 text-left text-sm transition-all hover:bg-accent/60 hover:border-primary/30 hover:shadow-sm"
                        >
                          <div className="h-8 w-8 rounded-md bg-primary/10 text-primary grid place-items-center shrink-0">
                            {res.icon ?? <FileText className="h-4 w-4" />}
                          </div>
                          <span className="min-w-0 flex-1">
                            <span className="font-medium text-foreground line-clamp-2 leading-5">
                              {highlightMatch(res.title, query)}
                            </span>
                            <span className="text-xs text-muted-foreground block mt-1.5 truncate">
                              in <span className="text-primary">{res.category}</span>
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
                  Use <kbd className="rounded border bg-background px-1 font-mono">⌘K</kbd> anytime to reopen
                </span>
                <span className="text-[10px] text-muted-foreground ml-auto">
                  <kbd className="rounded border bg-background px-1 font-mono">Esc</kbd> to close
                </span>
              </div>
            </DialogContent>
          </Dialog>

          <Button
            variant="ghost"
            size="icon"
            className="hidden md:inline-flex px-3"
            onClick={() => navigate('/interview-questions')}
            aria-label="Interview questions"
          >
            <HelpCircle className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="hidden md:inline-flex px-3"
            onClick={() => navigate('/terms')}
            aria-label="Terms"
          >
            <FileText className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="hidden lg:inline-flex px-3" aria-label="GitHub">
            <Github className="h-4 w-4" />
          </Button>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
