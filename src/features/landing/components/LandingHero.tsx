import { Search, Grid3x3, List, HelpCircle, FlaskConical, Sparkles } from 'lucide-react';
import { Logo } from '@/components/brand/Logo';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { useI18n } from '@/i18n/I18nProvider';
import type { ViewMode } from '../types';

type LandingStats = {
  streams: number;
  topics: number;
  lessons: number;
};

type LandingHeroProps = {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
  onInterviewClick: () => void;
  onPlaygroundClick: () => void;
  stats?: LandingStats | null;
};

function StatCard({ emoji, label, value }: { emoji: string; label: string; value: number }) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-border/40 bg-card/70 px-4 py-3 backdrop-blur-sm shadow-[0_10px_28px_-22px_hsl(var(--foreground)/0.55)]">
      <div className="pointer-events-none absolute -right-3 -top-3 text-4xl opacity-[0.12] select-none" aria-hidden>
        {emoji}
      </div>
      <p className="text-2xl font-bold tabular-nums tracking-tight text-foreground">{value}</p>
      <p className="mt-0.5 text-xs font-medium text-muted-foreground">
        <span className="mr-1" aria-hidden>
          {emoji}
        </span>
        {label}
      </p>
    </div>
  );
}

export function LandingHero({
  searchQuery,
  onSearchChange,
  viewMode,
  onViewModeChange,
  onInterviewClick,
  onPlaygroundClick,
  stats,
}: LandingHeroProps) {
  const { t } = useI18n();

  return (
    <header className="min-w-0 space-y-6 pt-4 sm:pt-8 pb-8 sm:pb-10">
      <section
        className={cn(
          'relative isolate overflow-hidden rounded-2xl border border-border/45 text-center',
          'bg-card/40 shadow-[0_1px_0_0_hsl(var(--foreground)/0.06)_inset,0_20px_50px_-28px_hsl(var(--foreground)/0.35)]',
          'backdrop-blur-xl dark:border-border/35 dark:bg-card/25'
        )}
      >
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -right-[15%] -top-[85%] h-52 w-52 rounded-full bg-primary/12 blur-3xl dark:bg-primary/16" />
          <div className="absolute -bottom-[65%] -left-[12%] h-44 w-44 rounded-full bg-primary/8 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_50%_-15%,hsl(var(--primary)/0.12),transparent_55%)]" />
          <div
            className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.4)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.4)_1px,transparent_1px)] bg-size-[22px_22px] opacity-[0.14] mask-[linear-gradient(to_bottom,black_35%,transparent_95%)]"
            aria-hidden
          />
        </div>

        <div className="relative px-5 py-8 sm:px-8 sm:py-10 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/8 px-3 py-1 text-xs font-semibold text-primary">
            <Sparkles className="h-3.5 w-3.5" aria-hidden />
            {t('landing.heroBadge')}
          </div>

          <h1 className="flex flex-col items-center justify-center gap-3 min-w-0">
            <Logo
              showText
              size="lg"
              asLink={false}
              className="flex-col justify-center hover:opacity-100 max-w-full min-w-0"
              textClassName="text-center text-balance wrap-break-word [overflow-wrap:anywhere] max-w-full text-gradient-sheen"
            />
          </h1>

          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto text-pretty leading-relaxed wrap-break-word">
            {t('landing.heroDescription')}
          </p>

          {stats && (
            <div className="grid grid-cols-3 gap-2 sm:gap-3 max-w-md mx-auto w-full">
              <StatCard emoji="🎓" label={t('landing.streamsLabel')} value={stats.streams} />
              <StatCard emoji="📚" label={t('landing.topicsLabel')} value={stats.topics} />
              <StatCard emoji="📖" label={t('landing.lessonsLabel')} value={stats.lessons} />
            </div>
          )}

          <p className="flex items-start gap-2 rounded-lg border border-border/35 bg-muted/25 px-3.5 py-2.5 text-xs sm:text-sm text-muted-foreground text-left max-w-2xl mx-auto">
            <span className="text-base leading-none mt-0.5 shrink-0" aria-hidden>
              💡
            </span>
            {t('landing.heroTip')}
          </p>
        </div>
      </section>

      <Card className="border-border/40 bg-card/65 backdrop-blur-sm shadow-[0_14px_35px_-25px_hsl(var(--foreground)/0.65)]">
        <CardContent className="pt-6 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <span aria-hidden>🔍</span>
              {t('landing.searchTopics')}
            </div>
            <div className="flex items-center gap-1 rounded-xl border border-border/40 bg-muted/30 p-1">
              <Button
                size="icon"
                variant={viewMode === 'grid' ? 'secondary' : 'ghost'}
                onClick={() => onViewModeChange('grid')}
                className="h-8 w-8 rounded-lg"
                aria-label="Grid view"
              >
                <Grid3x3 className="w-4 h-4" />
              </Button>
              <Button
                size="icon"
                variant={viewMode === 'list' ? 'secondary' : 'ghost'}
                onClick={() => onViewModeChange('list')}
                className="h-8 w-8 rounded-lg"
                aria-label="List view"
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="relative min-w-0">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
            <Input
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder={t('landing.searchTopics')}
              className="pl-10 h-11 rounded-xl border-border/35 bg-background/85 focus-visible:ring-primary/30"
            />
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3">
        <Button
          variant="outline"
          className="gap-2 rounded-xl border-primary/25 bg-primary/5 hover:bg-primary/10 hover:border-primary/40 w-full sm:w-auto min-h-11 touch-manipulation sm:min-w-[240px] shadow-sm"
          onClick={onInterviewClick}
        >
          <HelpCircle className="h-4 w-4 shrink-0 text-primary" />
          <span aria-hidden>💼</span>
          {t('landing.interviewQuestionsByLevel')}
        </Button>
        <Button
          variant="outline"
          className="hidden gap-2 rounded-xl border-violet-500/30 bg-violet-500/5 hover:bg-violet-500/10 w-full sm:w-auto min-h-11 touch-manipulation sm:min-w-[240px] shadow-sm"
          onClick={onPlaygroundClick}
        >
          <FlaskConical className="h-4 w-4 shrink-0 text-violet-500" />
          <span aria-hidden>🧪</span>
          {t('landing.playground')}
        </Button>
      </div>
    </header>
  );
}
