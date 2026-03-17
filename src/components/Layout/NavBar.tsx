import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, Github, Search, FileText, HelpCircle } from 'lucide-react';
import { Logo } from '../Logo';
import { TOPICS, type TopicItem } from '../../topics';
import { ModeToggle } from '../Theme/ModeToggle';
import type { SearchResult } from '../../types';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { ScrollArea } from '../ui/scroll-area';

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

  const searchRecursive = (
    items: TopicItem[],
    categoryId: string,
    categoryTitle: string,
    q: string
  ): SearchResult[] => {
    let hits: SearchResult[] = [];
    items.forEach((item) => {
      const matchTitle = item.title.toLowerCase().includes(q.toLowerCase());
      const matchContent = item.content && item.content.toLowerCase().includes(q.toLowerCase());
      if (matchTitle || matchContent) {
        hits.push({ ...item, category: categoryTitle, categoryId });
      }
      if (item.items?.length) {
        hits = [...hits, ...searchRecursive(item.items, categoryId, categoryTitle, q)];
      }
    });
    return hits;
  };

  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }
    let globalHits: SearchResult[] = [];
    TOPICS.forEach((topic) => {
      globalHits = [...globalHits, ...searchRecursive(topic.items, topic.id, topic.title, query)];
    });
    setResults(globalHits);
  }, [query]);

  const handleSelectResult = (categoryId: string, id: string) => {
    navigate(`/docs/${categoryId}/${id}`);
    setOpen(false);
    setQuery('');
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="flex h-14 items-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
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

        <div className="flex items-center gap-2">
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="relative h-9 min-w-9 sm:min-w-0 sm:w-full sm:max-w-56 lg:max-w-72 justify-start gap-2 text-muted-foreground font-normal border-border bg-muted/30 hover:bg-muted/50 px-2 sm:pl-3"
              >
                <Search className="h-4 w-4 shrink-0" />
                <span className="hidden sm:inline truncate">Search topics...</span>
                <kbd className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 hidden h-5 select-none items-center gap-0.5 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-70 lg:flex">
                  <span className="text-xs">⌘</span>K
                </kbd>
              </Button>
            </DialogTrigger>

            <DialogContent className="p-0 gap-0 max-w-xl bg-background border-border overflow-hidden rounded-lg">
              <DialogHeader className="px-4 py-3 border-b border-border">
                <DialogTitle className="sr-only">Search topics</DialogTitle>
                <div className="flex items-center gap-2">
                  <Search className="h-4 w-4 text-muted-foreground shrink-0" />
                  <Input
                    placeholder="Type to search..."
                    className="border-0 focus-visible:ring-0 shadow-none px-0 text-base h-10 bg-transparent placeholder:text-muted-foreground"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                </div>
              </DialogHeader>

              <ScrollArea className="max-h-[70vh] overflow-y-auto p-2">
                {results.length === 0 && query && (
                  <div className="py-8 text-center text-sm text-muted-foreground">No results found.</div>
                )}
                {results.length === 0 && !query && (
                  <div className="py-8 text-center text-sm text-muted-foreground">
                    Type to search across topics...
                  </div>
                )}
                {results.length > 0 && (
                  <div className="flex flex-col gap-0.5">
                    <p className="px-2 py-1.5 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Results
                    </p>
                    {results.map((res) => (
                      <button
                        type="button"
                        key={`${res.categoryId}-${res.id}`}
                        onClick={() => handleSelectResult(res.categoryId, res.id)}
                        className="flex flex-col gap-0.5 rounded-md px-3 py-2.5 text-left text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                      >
                        <span className="font-medium flex items-center gap-2">
                          <FileText className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
                          {res.title}
                        </span>
                        <span className="text-xs text-muted-foreground pl-5">
                          in <span className="text-primary">{res.category}</span>
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </ScrollArea>

              <div className="px-3 py-2 border-t border-border bg-muted/30 flex items-center justify-end">
                <span className="text-[10px] text-muted-foreground">
                  <kbd className="rounded border bg-background px-1 font-mono">Esc</kbd> to close
                </span>
              </div>
            </DialogContent>
          </Dialog>

          <Button variant="ghost" size="icon" className="hidden sm:inline-flex px-3" onClick={() => navigate('/interview-questions')} aria-label="Interview questions">
            <HelpCircle className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="hidden sm:inline-flex px-3" onClick={() => navigate('/terms')} aria-label="Terms">
            <FileText className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="hidden sm:inline-flex px-3" aria-label="GitHub">
            <Github className="h-4 w-4" />
          </Button>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
