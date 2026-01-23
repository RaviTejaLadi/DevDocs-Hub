import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, Github, Search, FileText } from 'lucide-react';
import { TOPICS, type TopicItem } from '../../topics';
import { ModeToggle } from '../Theme/ModeToggle';
import type { SearchResult } from '../../types';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';

const NavBar = ({ setSidebarOpen }: { setSidebarOpen: (open: boolean) => void }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isDocsPage = location.pathname.startsWith('/docs');

  // Search State
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);

  // Toggle Search with Keyboard Shortcut (Cmd/Ctrl + K)
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  // Search Logic
  const searchRecursive = (
    items: TopicItem[],
    categoryId: string,
    categoryTitle: string,
    query: string
  ): SearchResult[] => {
    let hits: SearchResult[] = [];

    items.forEach((item) => {
      // Check current item
      const matchTitle = item.title.toLowerCase().includes(query.toLowerCase());
      const matchContent = item.content && item.content.toLowerCase().includes(query.toLowerCase());

      if (matchTitle || matchContent) {
        hits.push({
          ...item,
          category: categoryTitle,
          categoryId: categoryId,
        });
      }

      // Recurse if children exist
      if (item.items && item.items.length > 0) {
        hits = [...hits, ...searchRecursive(item.items, categoryId, categoryTitle, query)];
      }
    });

    return hits;
  };

  // Search Logic Effect
  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }

    let globalHits: SearchResult[] = [];

    TOPICS.forEach((topic) => {
      const topicHits = searchRecursive(topic.items, topic.id, topic.title, query);
      globalHits = [...globalHits, ...topicHits];
    });

    setResults(globalHits);
  }, [query]);

  const handleSelectResult = (categoryId: string, id: string) => {
    navigate(`/docs/${categoryId}/${id}`);
    setOpen(false);
    setQuery('');
  };

  return (
    <header
      className="
      sticky top-0 z-50 border
      border-slate-200 dark:border-slate-800
      bg-white/95 dark:bg-slate-950/95
      backdrop-blur-lg shadow-sm dark:shadow-none
      mx-auto m-2 rounded-md w-[98%]
    "
    >
      <div className="flex h-12 items-center px-4 sm:px-6 max-w-7xl mx-auto">
        {/* Left: Logo & Mobile Menu */}
        <div className="flex items-center gap-4 flex-1">
          <Link to="/" className="flex items-center gap-2 font-bold text-lg text-foreground">
            ⚡ Dev Docs Hub
          </Link>

          {isDocsPage && (
            <Button variant="outline" className="md:hidden" size="icon" onClick={() => setSidebarOpen(true)}>
              <Menu className="h-5 w-5" />
            </Button>
          )}
        </div>

        {/* Right: Actions & Search */}
        <div className="flex items-center gap-2">
          {/* SEARCH DIALOG */}
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <div className="relative w-full max-w-sm cursor-text hidden sm:block">
                <Button
                  variant="outline"
                  className="relative h-9 w-64 justify-start bg-slate-50 text-sm text-muted-foreground dark:bg-slate-900/50 sm:pr-12 lg:w-80 border-slate-200 dark:border-slate-800"
                >
                  <span className="hidden lg:inline-flex">Search documentation...</span>
                  <span className="inline-flex lg:hidden">Search...</span>
                  <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                    <span className="text-xs">⌘</span>K
                  </kbd>
                </Button>
              </div>
            </DialogTrigger>

            {/* Mobile Search Icon Trigger */}
            <DialogTrigger asChild>
              <Button variant="ghost" size="icon" className="sm:hidden">
                <Search className="h-4 w-4" />
              </Button>
            </DialogTrigger>

            <DialogContent className="p-0 gap-0 max-w-137.5 overflow-hidden">
              <DialogHeader className="px-4 py-2 border-b">
                <DialogTitle className="sr-only">Search Documentation</DialogTitle>
                <div className="flex items-center gap-2">
                  <Search className="h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Type to search..."
                    className="border-none focus-visible:ring-0 shadow-none px-0 text-base h-10 bg-transparent"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                </div>
              </DialogHeader>

              <div className="max-h-87.5 overflow-y-auto p-2">
                {results.length === 0 && query && (
                  <div className="py-6 text-center text-sm text-muted-foreground">No results found.</div>
                )}

                {results.length === 0 && !query && (
                  <div className="py-6 text-center text-sm text-muted-foreground">
                    Type something to search documentation...
                  </div>
                )}

                {results.length > 0 && (
                  <div className="flex flex-col gap-1">
                    <h4 className="px-2 py-1 text-xs font-semibold text-muted-foreground mb-1">Search Results</h4>
                    {results.map((res) => (
                      <div
                        key={`${res.categoryId}-${res.id}`}
                        onClick={() => handleSelectResult(res.categoryId, res.id)}
                        className="
                          group flex flex-col gap-0.5 rounded-md px-3 py-2 text-sm cursor-pointer
                          hover:bg-accent hover:text-accent-foreground
                          transition-colors
                        "
                      >
                        <span className="font-medium flex items-center gap-2">
                          <FileText className="h-3.5 w-3.5 text-muted-foreground group-hover:text-accent-foreground" />
                          {res.title}
                        </span>
                        <span className="text-xs text-muted-foreground group-hover:text-accent-foreground pl-5.5">
                          In <span className="text-indigo-500 dark:text-indigo-400">{res.category}</span>
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="p-2 border-t bg-muted/30 flex items-center justify-end">
                <span className="text-[10px] text-muted-foreground mr-2">
                  Press <kbd className="font-sans bg-background border rounded px-1">Esc</kbd> to close
                </span>
              </div>
            </DialogContent>
          </Dialog>

          {/* Other Navbar Actions */}
          <Button
            variant="outline"
            size="icon"
            onClick={() => navigate('/terms')}
            className="text-sm font-medium hidden sm:flex"
          >
            <FileText className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" className="hidden sm:flex">
            <Github className="h-4 w-4" />
          </Button>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
