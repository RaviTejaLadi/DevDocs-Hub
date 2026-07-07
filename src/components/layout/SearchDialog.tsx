import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Button } from '../ui/button';
import { CornerDownLeft, FileText, Search } from 'lucide-react';
import { Input } from '../ui/input';
import { ScrollArea } from '../ui/scroll-area';
import type { RankedSearchResult } from './NavBar';

const SearchDialog = ({
  open,
  setOpen,
  query,
  setQuery,
  results,
  handleSelectResult,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  query: string;
  setQuery: (query: string) => void;
  results: RankedSearchResult[];
  handleSelectResult: (categoryId: string, id: string) => void;
}) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          type="button"
          variant="outline"
          className="relative h-9 w-40 flex justify-start gap-2 text-muted-foreground font-normal border-border/40 bg-muted/30 hover:bg-muted/50 px-2 sm:pl-3"
          aria-label={'Search...'}
        >
          <Search className="h-4 w-4 shrink-0" />
          <span className="min-w-0 truncate pr-11 text-left">{'Search...'}</span>
          <kbd className="pointer-events-none absolute right-2 top-1/2 hidden h-5 -translate-y-1/2 select-none items-center gap-0.5 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-70 sm:flex">
            <span className="text-xs">⌘</span>K
          </kbd>
        </Button>
      </DialogTrigger>

      <DialogContent
        showCloseButton={false}
        className="@container p-0 gap-0 w-[min(96vw,42rem)] sm:max-w-none! lg:w-[min(90vw,56rem)] xl:w-[min(85vw,64rem)] bg-background/98 border-border/50 overflow-hidden rounded-md shadow-2xl"
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
              className="border-0 bg-inherit shadow-none px-0 py-0 h-11 text-[15px] sm:text-base focus-visible:ring-0 placeholder:text-muted-foreground"
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

        <ScrollArea className="min-h-64 lg:min-h-96 max-h-[min(70vh,32rem)] lg:max-h-[min(75vh,42rem)] xl:max-h-[min(80vh,48rem)] overflow-y-auto p-2 sm:p-3 lg:p-4">
          {results.length === 0 && query && (
            <div className="text-fade-up py-10 text-center text-sm text-muted-foreground space-y-1.5">
              <p className="text-foreground/90 font-medium">{'No matching topics found'}</p>
              <p>
                {'Try a different keyword — for example React, thermodynamics, organic chemistry, or machine design...'}
              </p>
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
              <div className="motion-stagger grid grid-cols-2 @md:grid-cols-3 @lg:grid-cols-4 gap-2 @lg:gap-3">
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
                      <span className="font-medium text-foreground line-clamp-2 leading-5">{res.title}</span>
                      <span className="text-xs text-muted-foreground block mt-1.5 truncate">
                        {'in'} <span className="text-primary">{res.category}</span>
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
  );
};

export default SearchDialog;
