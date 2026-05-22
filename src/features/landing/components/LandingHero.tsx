import { Search, Grid3x3, List, HelpCircle, FlaskConical } from 'lucide-react';
import { Logo } from '@/components/brand/Logo';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useI18n } from '@/i18n/I18nProvider';
import type { ViewMode } from '../types';

type LandingHeroProps = {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
  onInterviewClick: () => void;
  onPlaygroundClick: () => void;
};

export function LandingHero({
  searchQuery,
  onSearchChange,
  viewMode,
  onViewModeChange,
  onInterviewClick,
  onPlaygroundClick,
}: LandingHeroProps) {
  const { t } = useI18n();

  return (
    <header className="text-center pt-6 sm:pt-12 pb-10 sm:pb-16 min-w-0">
      <h1 className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-3 sm:gap-4 mb-3 min-w-0">
        <Logo
          showText
          size="lg"
          asLink={false}
          className="flex-col sm:flex-row justify-center hover:opacity-100 max-w-full min-w-0 shrink sm:shrink-0"
          textClassName="text-center text-balance wrap-break-word [overflow-wrap:anywhere] max-w-full"
        />
      </h1>
      <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-8 text-pretty leading-relaxed wrap-break-word px-0 sm:px-0">
        {t('landing.heroDescription')}
      </p>

      <div className="max-w-xl mx-auto w-full min-w-0 flex flex-col gap-3 sm:flex-row sm:items-stretch">
        <div className="relative flex-1 min-w-0">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder={t('landing.searchTopics')}
            className="pl-10 h-11 rounded-lg border-border/40 bg-background text-foreground placeholder:text-muted-foreground"
          />
        </div>
        <div className="flex items-center justify-center gap-1 rounded-lg border border-border/40 bg-muted/30 p-1 sm:shrink-0 w-full sm:w-auto max-sm:mx-auto">
          <Button
            size="icon"
            variant={viewMode === 'grid' ? 'secondary' : 'ghost'}
            onClick={() => onViewModeChange('grid')}
          >
            <Grid3x3 className="w-4 h-4" />
          </Button>
          <Button
            size="icon"
            variant={viewMode === 'list' ? 'secondary' : 'ghost'}
            onClick={() => onViewModeChange('list')}
          >
            <List className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row flex-wrap justify-center gap-3 px-1">
        <Button
          variant="outline"
          className="gap-2 border-border/40 bg-card/50 hover:bg-accent w-full sm:w-auto min-h-11 touch-manipulation sm:min-w-[220px]"
          onClick={onInterviewClick}
        >
          <HelpCircle className="h-4 w-4 shrink-0" />
          {t('landing.interviewQuestionsByLevel')}
        </Button>
        <Button
          variant="outline"
          className="hidden gap-2 border-violet-500/30 bg-violet-500/5 hover:bg-violet-500/10 w-full sm:w-auto min-h-11 touch-manipulation sm:min-w-[220px]"
          onClick={onPlaygroundClick}
        >
          <FlaskConical className="h-4 w-4 shrink-0 text-violet-500" />
          {t('landing.playground')}
        </Button>
      </div>
    </header>
  );
}
