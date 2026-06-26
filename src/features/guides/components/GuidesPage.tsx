import { Link } from 'react-router-dom';
import { ChevronLeft, Search, X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { PageSEO } from '@/components/seo';
import { guidesPath } from '@/app/routes/paths';
import { GUIDE_TYPE_OPTIONS } from '@/data/guides';
import { cn } from '@/lib/utils';
import { useGuidesFilter } from '../hooks/useGuidesFilter';
import { GuideListItem } from './GuideListItem';

export default function GuidesPage() {
  const {
    searchQuery,
    setSearchQuery,
    activeType,
    setActiveType,
    filteredCategories,
    totalGuides,
    filteredCount,
    hasSearch,
    hasAnyGuides,
  } = useGuidesFilter();

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-4">
      <PageSEO
        title="Guides"
        description="In-depth study guides for interview prep, roadmaps, and focused revision — DSA, system design, and more."
        path={guidesPath()}
        keywords={['study guides', 'interview prep', 'roadmaps']}
      />
      <section
        className={cn(
          'group relative isolate overflow-hidden rounded-2xl border border-border/45',
          'bg-card/40 shadow-none',
          'backdrop-blur-xl dark:border-border/35 dark:bg-card/25'
        )}
      >
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute right-[-20%] top-[-90%] h-52 w-52 rounded-full bg-primary/12 blur-3xl dark:bg-primary/16" />
          <div className="absolute bottom-[-70%] left-[-15%] h-44 w-44 rounded-full bg-violet-500/8 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_50%_-20%,hsl(var(--primary)/0.12),transparent_55%)]" />
        </div>

        <div className="relative p-6 sm:p-8 space-y-6">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 rounded-lg border border-border/40 bg-background/60 px-3 py-1.5 text-sm text-muted-foreground transition-all hover:border-primary/30 hover:bg-background hover:text-foreground hover:shadow-none"
          >
            <ChevronLeft className="h-4 w-4" />
            {'Back to overview'}
          </Link>
          <div className="flex justify-between items-center gap-2">
            <div className="space-y-3 max-w-2xl">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gradient-sheen">
                {'Guides'}
              </h1>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="outline" className="h-6 border-border/45 bg-muted/30 px-2.5 text-xs font-medium">
                {`${totalGuides} guides`}
              </Badge>
              {hasSearch && (
                <Badge
                  variant="outline"
                  className="h-6 border-primary/25 bg-primary/8 px-2.5 text-xs font-medium text-primary"
                >
                  {`Showing ${filteredCount}`}
                </Badge>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full sm:max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground pointer-events-none" />
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={'Search guides...'}
              className="h-10 rounded-lg border-border/35 bg-background/90 pl-9 pr-9"
            />
            {searchQuery && (
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={() => setSearchQuery('')}
                className="absolute right-1 top-1/2 h-7 w-7 -translate-y-1/2"
                aria-label="Clear search"
              >
                <X className="h-3.5 w-3.5" />
              </Button>
            )}
          </div>

          <div className="flex flex-wrap gap-1.5">
            {GUIDE_TYPE_OPTIONS.map(({ value, label }) => (
              <Button
                key={value}
                type="button"
                variant={activeType === value ? 'secondary' : 'outline'}
                size="sm"
                onClick={() => setActiveType(value)}
                className="h-8 rounded-lg text-xs"
              >
                {label}
              </Button>
            ))}
          </div>
        </div>

        {hasAnyGuides ? (
          <div className="space-y-8">
            {filteredCategories.map(
              (category) =>
                category.guides.length > 0 && (
                  <div key={category.label} className="space-y-3">
                    <h2 className="text-lg font-semibold tracking-tight text-foreground/90">{category.label}</h2>
                    <div className="space-y-2">
                      {category.guides.map((guide, index) => (
                        <GuideListItem key={guide.slug} index={index} guide={guide} />
                      ))}
                    </div>
                  </div>
                )
            )}
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-border/50 bg-muted/20 px-6 py-12 text-center">
            <p className="text-sm text-muted-foreground">
              {'No guides match your search. Try a different keyword or filter.'}
            </p>
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="mt-4"
              onClick={() => {
                setSearchQuery('');
                setActiveType('all');
              }}
            >
              {'Clear filters'}
            </Button>
          </div>
        )}
      </section>
    </div>
  );
}
