import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, Github, Search } from 'lucide-react';
import { TOPICS } from '../../topics';
import { ModeToggle } from '../Theme/ModeToggle';
import type { SearchResult } from '../../types';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

const NavBar = ({ setSidebarOpen }: { setSidebarOpen: (open: boolean) => void }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const isDocsPage = location.pathname.startsWith('/docs');
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);

  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }

    const hits: SearchResult[] = [];
    TOPICS.forEach((topic) => {
      topic.items.forEach((item) => {
        if (
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.content.toLowerCase().includes(query.toLowerCase())
        ) {
          hits.push({
            ...item,
            category: topic.title,
            categoryId: topic.id,
          });
        }
      });
    });

    setResults(hits);
  }, [query]);

  return (
    <header
      className="
      sticky top-0 z-50 w-full border-b
      border-slate-200 dark:border-slate-800
      bg-white/95 dark:bg-slate-950/95
      backdrop-blur-lg shadow-sm dark:shadow-none
    "
    >
      <div className="flex h-16 items-center px-4 sm:px-6 max-w-7xl mx-auto">
        {/* Left */}
        <div className="flex items-center gap-4 flex-1">
          <Link to="/" className="flex items-center gap-2 font-bold text-lg text-foreground">
            ⚡ Dev Docs Hub
          </Link>

          {isDocsPage && (
            <button
              className="
                md:hidden p-2 rounded-lg
                hover:bg-slate-100 dark:hover:bg-slate-800
                text-slate-700 dark:text-slate-200
              "
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </button>
          )}
        </div>

        {/* Right */}
        <div className="flex items-center gap-3 relative">
          <div className="relative w-72">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500 dark:text-slate-400" />

            <Input
              type="search"
              placeholder="Search documentation..."
              className="
                w-full rounded-md border
                bg-slate-50 dark:bg-slate-900/10
                px-8 py-2 text-sm
                text-foreground dark:text-foreground
                placeholder:text-muted-foreground dark:placeholder:text-muted-foreground
              "
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />

            {results.length > 0 && (
              <div
                className="
                  absolute top-full mt-2 w-full rounded-md border
                  border-slate-200 dark:border-slate-700
                  bg-white dark:bg-slate-900
                  p-2 shadow-lg z-50
                "
              >
                {results.map((res) => (
                  <div
                    key={`${res.categoryId}-${res.id}`}
                    className="
                      p-2 rounded cursor-pointer text-sm
                       text-foreground dark:text-foreground
                      hover:bg-slate-100 dark:hover:bg-slate-800
                    "
                    onClick={() => {
                      navigate(`/docs/${res.categoryId}/${res.id}`);
                      setQuery('');
                    }}
                  >
                    <span className="font-semibold text-indigo-600 dark:text-indigo-400">{res.category}</span> /{' '}
                    {res.title}
                  </div>
                ))}
              </div>
            )}
          </div>

          <ModeToggle />
          <Button variant="outline" size="icon">
            <Github size={18} />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
