import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, Eye, Search, Sparkles, X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { PageSEO } from '@/components/seo';
import { cn } from '@/lib/utils';
import { visualizationPath } from '@/app/routes/paths';
import { useVisualizationListFilter } from '../hooks';
import type { VisualizationDefinition } from '../types';

function VisualizationCard({
  visualization,
  soonLabel,
}: {
  visualization: VisualizationDefinition;
  soonLabel: string;
}) {
  const Icon = visualization.icon;
  const card = (
    <div
      className={cn(
        'group relative h-full rounded-xl border border-border/35 bg-card/85 p-5 backdrop-blur-sm transition-all duration-200',
        'shadow-none',
        visualization.available
          ? 'hover:-translate-y-0.5 hover:border-emerald-500/40 hover:bg-card'
          : 'cursor-not-allowed opacity-75'
      )}
    >
      {!visualization.available && (
        <Badge
          variant="outline"
          className="absolute right-3 top-3 border-amber-500/30 text-[10px] uppercase tracking-wide text-amber-600 dark:text-amber-400"
        >
          {soonLabel}
        </Badge>
      )}
      <div className="flex items-start gap-3">
        <div className="shrink-0 rounded-lg bg-emerald-500/10 p-2.5 text-emerald-600 dark:text-emerald-400">
          <Icon className="h-5 w-5" />
        </div>
        <div className="min-w-0 flex-1 pr-16 sm:pr-0">
          <p className="font-semibold text-foreground">{visualization.label}</p>
          <p className="mt-1 line-clamp-3 text-sm text-muted-foreground">{visualization.description}</p>
        </div>
        {visualization.available && (
          <ArrowRight className="mt-1 hidden h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground sm:block" />
        )}
      </div>
    </div>
  );

  if (!visualization.available) {
    return (
      <div aria-disabled className="h-full">
        {card}
      </div>
    );
  }

  return (
    <Link to={visualizationPath(visualization.id)} className="block h-full">
      {card}
    </Link>
  );
}

export function VisualizationListPage() {
  const {
    visualizations,
    groupedByCategory,
    searchQuery,
    setSearchQuery,
    categoryFilter,
    setCategoryFilter,
    hasSearch,
    clearSearch,
    totalCount,
    availableCount,
    comingSoonCount,
    categories,
  } = useVisualizationListFilter();

  const showGrouped = categoryFilter === 'all' && !hasSearch;

  return (
    <div className="mx-auto max-w-6xl space-y-8 pb-4">
      <PageSEO
        title="Visualizations"
        description="Step-through visualizations for loops, data structures, and JavaScript concepts — learn programming ideas frame by frame."
        path={visualizationPath()}
        keywords={['programming visualizations', 'algorithm visualization', 'learn loops']}
      />
      <section className="relative overflow-hidden rounded-2xl border border-border/40 bg-linear-to-br from-card via-card to-emerald-500/10 p-6 shadow-none sm:p-8">
        <div className="pointer-events-none absolute -right-16 -bottom-16 h-52 w-52 rounded-full bg-emerald-500/10 blur-3xl" />
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
              <div className="rounded-xl border border-emerald-500/25 bg-emerald-500/10 p-2.5">
                <Eye className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <h1 className="text-2xl font-bold tracking-tight text-gradient-sheen sm:text-3xl">{'Visualization'}</h1>
                <p className="mt-1 max-w-2xl text-muted-foreground">
                  {
                    'Watch programming concepts come alive — step through loops, state changes, and output one frame at a time.'
                  }
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="h-7 border border-border/35 bg-secondary/65 px-3">
              {`${availableCount} available`}
            </Badge>
            <Badge variant="outline" className="h-7 border-border/35 px-3">
              {`${comingSoonCount} coming soon`}
            </Badge>
            <Badge variant="secondary" className="h-7 border border-border/35 bg-secondary/65 px-3">
              {`${totalCount} total`}
            </Badge>
          </div>
        </div>
      </section>

      <Card className="border-border/40 bg-card/65 shadow-none backdrop-blur-sm">
        <CardContent className="space-y-4 pt-6">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-sm font-medium text-foreground">
              <Search className="h-4 w-4 text-emerald-500" />
              {'Search visualizations'}
            </div>
            <p className="text-xs text-muted-foreground">{`Showing ${visualizations.length} of ${totalCount}`}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            <Button
              type="button"
              size="sm"
              variant={categoryFilter === 'all' ? 'default' : 'outline'}
              className={cn('rounded-lg', categoryFilter === 'all' && 'bg-emerald-600 hover:bg-emerald-600/90')}
              onClick={() => setCategoryFilter('all')}
            >
              {'All categories'}
            </Button>
            {categories.map((category) => (
              <Button
                key={category.id}
                type="button"
                size="sm"
                variant={categoryFilter === category.id ? 'default' : 'outline'}
                className={cn('rounded-lg', categoryFilter === category.id && 'bg-emerald-600 hover:bg-emerald-600/90')}
                onClick={() => setCategoryFilter(category.id)}
              >
                {category.label}
              </Button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div className="relative min-w-0 flex-1">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder={'Search by concept or topic...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-10 border-border/35 bg-background/85 pl-9 focus-visible:ring-emerald-500/30"
              />
            </div>
            {hasSearch && (
              <Button type="button" variant="ghost" size="sm" className="text-muted-foreground" onClick={clearSearch}>
                <X className="mr-1 h-4 w-4" />
                {'Clear search'}
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {showGrouped ? (
        <div className="space-y-8">
          {groupedByCategory.map(({ category, items }) => (
            <section key={category.id} className="space-y-4">
              <div className="space-y-1">
                <h2 className="text-lg font-semibold text-foreground">{category.label}</h2>
                <p className="max-w-3xl text-sm text-muted-foreground">{category.description}</p>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {items.map((visualization) => (
                  <VisualizationCard key={visualization.id} visualization={visualization} soonLabel={'Soon'} />
                ))}
              </div>
            </section>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {visualizations.map((visualization) => (
            <VisualizationCard key={visualization.id} visualization={visualization} soonLabel={'Soon'} />
          ))}
        </div>
      )}

      {visualizations.length === 0 && (
        <Card className="border-dashed border-border/50 bg-card/50">
          <CardContent className="py-10 text-center">
            <Sparkles className="mx-auto mb-3 h-8 w-8 text-muted-foreground/60" />
            <p className="text-muted-foreground">{'No visualizations match your search.'}</p>
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
