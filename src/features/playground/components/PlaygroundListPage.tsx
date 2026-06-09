import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, FlaskConical, Search, Sparkles, X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { playgroundPath } from '@/app/routes/paths';
import { usePlaygroundListFilter } from '../hooks';

export function PlaygroundListPage() {
  const {
    playgrounds,
    searchQuery,
    setSearchQuery,
    hasSearch,
    clearSearch,
    totalCount,
    availableCount,
    comingSoonCount,
  } = usePlaygroundListFilter();

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-4">
      <section className="relative overflow-hidden rounded-2xl border border-border/40 bg-linear-to-br from-card via-card to-violet-500/10 p-6 sm:p-8 shadow-none">
        <div className="pointer-events-none absolute -left-16 -bottom-16 h-52 w-52 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="space-y-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-md border border-border/35 bg-card/45 px-2.5 py-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ChevronLeft className="h-4 w-4" />
              {'Back to overview'}
            </Link>
            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-xl border border-violet-500/25 bg-violet-500/10">
                <FlaskConical className="h-6 w-6 text-violet-500" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gradient-sheen">{'Playground'}</h1>
                <p className="text-muted-foreground mt-1 max-w-2xl">
                  {
                    'Hands-on sandboxes to learn APIs by doing — run code, see results, and build intuition faster than reading alone.'
                  }
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="h-7 px-3 border border-border/35 bg-secondary/65">
              {`${availableCount} available`}
            </Badge>
            <Badge variant="outline" className="h-7 px-3 border-border/35">
              {`${comingSoonCount} coming soon`}
            </Badge>
            <Badge variant="secondary" className="h-7 px-3 border border-border/35 bg-secondary/65">
              {`${totalCount} total`}
            </Badge>
          </div>
        </div>
      </section>

      <Card className="border-border/40 bg-card/65 backdrop-blur-sm shadow-none">
        <CardContent className="pt-6 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-sm font-medium text-foreground">
              <Search className="h-4 w-4 text-violet-500" />
              {'Search playgrounds'}
            </div>
            <p className="text-xs text-muted-foreground">{`Showing ${playgrounds.length} of ${totalCount}`}</p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <div className="relative min-w-0 flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
              <Input
                type="search"
                placeholder={'Search by name or topic...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 h-10 border-border/35 bg-background/85 focus-visible:ring-violet-500/30"
              />
            </div>
            {hasSearch && (
              <Button type="button" variant="ghost" size="sm" className="text-muted-foreground" onClick={clearSearch}>
                <X className="h-4 w-4 mr-1" />
                {'Clear search'}
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {playgrounds.map((playground) => {
          const Icon = playground.icon;
          const card = (
            <div
              className={cn(
                'group relative rounded-xl border border-border/35 bg-card/85 backdrop-blur-sm p-5 transition-all duration-200 h-full',
                'shadow-none',
                playground.available
                  ? 'hover:border-violet-500/40 hover:bg-card hover:shadow-none hover:-translate-y-0.5'
                  : 'opacity-75 cursor-not-allowed'
              )}
            >
              {!playground.available && (
                <Badge
                  variant="outline"
                  className="absolute top-3 right-3 text-[10px] uppercase tracking-wide border-amber-500/30 text-amber-600 dark:text-amber-400"
                >
                  {'Soon'}
                </Badge>
              )}
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-lg bg-violet-500/10 text-violet-500 shrink-0">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1 pr-16 sm:pr-0">
                  <p className="font-semibold text-foreground">{playground.label}</p>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{playground.description}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <Badge variant="secondary" className="text-xs capitalize">
                      {playground.category}
                    </Badge>
                    {playground.methodCount != null && (
                      <Badge variant="outline" className="text-xs">
                        {`${playground.methodCount} methods`}
                      </Badge>
                    )}
                  </div>
                </div>
                {playground.available && (
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors shrink-0 mt-1 hidden sm:block" />
                )}
              </div>
            </div>
          );

          if (!playground.available) {
            return (
              <div key={playground.id} aria-disabled>
                {card}
              </div>
            );
          }

          return (
            <Link key={playground.id} to={playgroundPath(playground.id)} className="block">
              {card}
            </Link>
          );
        })}
      </div>

      {playgrounds.length === 0 && (
        <Card className="border-dashed border-border/50 bg-card/50">
          <CardContent className="py-10 text-center">
            <Sparkles className="h-8 w-8 mx-auto text-muted-foreground/60 mb-3" />
            <p className="text-muted-foreground">{'No playgrounds match your search.'}</p>
            {hasSearch && (
              <Button variant="outline" size="sm" className="mt-4" onClick={clearSearch}>
                {'Clear search'}
              </Button>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
