import { Search, Grid3x3, List, HelpCircle } from 'lucide-react';
import { Logo } from '@/components/brand/Logo';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import type { ViewMode } from '../types';

type LandingHeroProps = {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
  onInterviewClick: () => void;
  onVisualizationClick?: () => void;
};

export function LandingHero({
  searchQuery,
  onSearchChange,
  viewMode,
  onViewModeChange,
  onInterviewClick,
}: // onVisualizationClick,
LandingHeroProps) {
  return (
    <header className="min-w-0 space-y-3 pt-2 sm:pt-3 pb-4 sm:pb-5">
      <section className="rounded-xl border border-border/45 bg-card/72 backdrop-blur-md text-center shadow-[var(--panel-shadow)] dark:bg-card/45 dark:shadow-none">
        <div className="px-4 py-4 sm:px-5 sm:py-5 space-y-3">
          <h1 className="flex flex-col items-center justify-center min-w-0">
            <Logo
              showText
              size="md"
              asLink={false}
              className="flex-col justify-center hover:opacity-100 max-w-full min-w-0"
              textClassName="text-center text-balance wrap-break-word [overflow-wrap:anywhere] max-w-full text-gradient-sheen"
            />
          </h1>

          <p className="text-muted-foreground text-sm max-w-xl mx-auto leading-relaxed wrap-break-word">
            {
              'Browse organized topics by stream — from computer science and software to engineering, sciences, and beyond. Clear explanations for quick revision before exams, interviews, or whenever you need a refresher.'
            }
          </p>

          <div className="relative mx-auto w-full max-w-2xl min-w-0">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
            <Input
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder={'Search topics...'}
              className="h-10 rounded-lg border-border/35 bg-background/90 pl-9 pr-20"
            />
            <div className="absolute right-1.5 top-1/2 -translate-y-1/2 flex items-center gap-1 rounded-md border border-border/35 bg-muted/35 p-0.5">
              <Button
                size="icon"
                variant={viewMode === 'grid' ? 'secondary' : 'ghost'}
                onClick={() => onViewModeChange('grid')}
                className="h-7 w-7 rounded"
                aria-label="Grid view"
              >
                <Grid3x3 className="w-3.5 h-3.5" />
              </Button>
              <Button
                size="icon"
                variant={viewMode === 'list' ? 'secondary' : 'ghost'}
                onClick={() => onViewModeChange('list')}
                className="h-7 w-7 rounded"
                aria-label="List view"
              >
                <List className="w-3.5 h-3.5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        <Button
          variant="outline"
          className="h-9 gap-2 rounded-lg border-primary/25 bg-primary/5 px-4 text-sm hover:bg-primary/10 hover:border-primary/40 shadow-none"
          onClick={onInterviewClick}
        >
          <HelpCircle className="h-4 w-4 shrink-0 text-primary" />
          {'Interview Questions (by level)'}
        </Button>
        {/* <Button
          variant="outline"
          className="h-9 gap-2 rounded-lg border-emerald-500/25 bg-emerald-500/5 px-4 text-sm hover:border-emerald-500/40 hover:bg-emerald-500/10 shadow-none"
          onClick={onVisualizationClick}
        >
          <Eye className="h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
          {'Visualization'}
        </Button> */}
      </div>
    </header>
  );
}
