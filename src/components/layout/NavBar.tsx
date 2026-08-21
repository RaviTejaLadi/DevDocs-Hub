import { useEffect, useRef, useState, type ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, Github, FileText, HelpCircle, Code2, LayoutDashboard, MoreHorizontal } from 'lucide-react';
import { Logo } from '@/components/brand/Logo';
import type { Topic, TopicItem } from '@/data/topics';
import { ModeToggle } from '@/components/theme/ModeToggle';
import type { SearchResult } from '@/types';
import { Button } from '@/components/ui/button';
import SearchDialog from '@/components/layout/SearchDialog';
import { DOCS_NAV_RESET_SCROLL } from '@/lib/docsLocationState';
import { useAppLayoutStore } from '@/stores';
import { ROUTE_PATHS, topicsPath } from '@/app/routes/paths';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export type RankedSearchResult = SearchResult & { score: number };

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
    const excerpt = normalize(item.excerpt || '');
    const keywords = (item.keywords || []).map(normalize);

    const titleHasAnyToken = tokens.some((t) => title.includes(t));
    const keywordHasAnyToken = tokens.some((t) => keywords.some((k) => k.includes(t)));
    const excerptHasAnyToken = tokens.some((t) => excerpt.includes(t));

    const allTokensPresent = tokens.every(
      (t) => title.includes(t) || category.includes(t) || excerpt.includes(t) || keywords.some((k) => k.includes(t))
    );

    if (!titleHasAnyToken && !keywordHasAnyToken && !excerptHasAnyToken) return 0;
    if (!allTokensPresent) return 0;

    let score = 0;

    if (title === normalizedQuery) score += 150;
    if (title.startsWith(normalizedQuery)) score += 120;
    if (title.includes(normalizedQuery)) score += 90;
    if (category.includes(normalizedQuery)) score += 40;
    if (excerpt.includes(normalizedQuery)) score += 30;
    if (keywords.some((k) => k === normalizedQuery)) score += 100;

    tokens.forEach((token) => {
      if (title.includes(token)) score += 40;
      if (category.includes(token)) score += 15;
      if (excerpt.includes(token) && token.length >= 4) score += 10;
      if (keywords.some((k) => k.includes(token))) score += 30;
    });

    if (item.title.length <= 28) score += 8;
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
    <header className="sticky top-[max(0.5rem,env(safe-area-inset-top))] rounded-md z-50 w-[min(98%,calc(100vw-env(safe-area-inset-left)-env(safe-area-inset-right)-1px))] mx-auto max-w-full border border-border/40 bg-card/72 backdrop-blur-md supports-backdrop-filter:bg-card/62 dark:bg-background/95 dark:supports-backdrop-filter:bg-background/80 box-border shadow-[--panel-shadow-raised,none] dark:shadow-none">
      <div className="flex h-14 min-w-0 items-center gap-1.5 max-sm:gap-1 max-w-7xl mx-auto ps-[max(0.5rem,env(safe-area-inset-left))] pe-[max(0.5rem,env(safe-area-inset-right))] sm:gap-2 sm:ps-6 sm:pe-6 lg:ps-8 lg:pe-8">
        <div className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3">
          <Logo
            showText
            size="sm"
            to={isDocsPage ? topicsPath() : ROUTE_PATHS.home}
            className="min-w-0 shrink-0 font-semibold"
            textClassName="max-[360px]:hidden"
          />

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
        </div>
        <div className="flex shrink-0 min-w-0 items-center gap-1.5 sm:gap-2">
          <SearchDialog
            open={open}
            setOpen={setOpen}
            query={query}
            setQuery={setQuery}
            results={results}
            handleSelectResult={handleSelectResult}
          />
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="hidden h-9 w-9 md:inline-flex"
                onClick={() => navigate(ROUTE_PATHS.home)}
                aria-label={'Overview'}
              >
                <LayoutDashboard className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom">{'Overview'}</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="hidden h-9 w-9 md:inline-flex"
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
                className="hidden h-9 w-9 md:inline-flex"
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
                className="hidden h-9 w-9 md:inline-flex"
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
              <Button variant="ghost" size="icon" className="hidden h-9 w-9 md:inline-flex" aria-label={'GitHub'}>
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
                  navigate(ROUTE_PATHS.home);
                }}
                className="gap-2"
              >
                <LayoutDashboard className="h-4 w-4 shrink-0" />
                {'Overview'}
              </DropdownMenuItem>
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
