import { ChevronRight, Pause, Play, RotateCcw, SkipBack, SkipForward } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useI18n } from '@/i18n/I18nProvider';

type VisualizationControlsProps = {
  isFirst: boolean;
  isLast: boolean;
  isPlaying: boolean;
  onReset: () => void;
  onStepBack: () => void;
  onTogglePlay: () => void;
  onStepForward: () => void;
};

export function VisualizationControls({
  isFirst,
  isLast,
  isPlaying,
  onReset,
  onStepBack,
  onTogglePlay,
  onStepForward,
}: VisualizationControlsProps) {
  const { t } = useI18n();

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 rounded-xl border border-border/35 bg-card/60 p-3">
      <Button type="button" variant="outline" size="icon" onClick={onReset} aria-label={t('visualization.reset')}>
        <RotateCcw className="h-4 w-4" />
      </Button>
      <Button
        type="button"
        variant="outline"
        size="icon"
        onClick={onStepBack}
        disabled={isFirst}
        aria-label={t('visualization.previousStep')}
      >
        <SkipBack className="h-4 w-4" />
      </Button>
      <Button
        type="button"
        size="icon"
        className="size-11 rounded-full bg-emerald-600 text-white hover:bg-emerald-600/90"
        onClick={onTogglePlay}
        aria-label={isPlaying ? t('visualization.pause') : t('visualization.play')}
      >
        {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 ml-0.5" />}
      </Button>
      <Button
        type="button"
        variant="outline"
        size="icon"
        onClick={onStepForward}
        disabled={isLast}
        aria-label={t('visualization.nextStep')}
      >
        <SkipForward className="h-4 w-4" />
      </Button>
      <Button
        type="button"
        variant="ghost"
        size="sm"
        className="text-muted-foreground"
        onClick={() => (isLast ? onReset() : onStepForward())}
      >
        {isLast ? t('visualization.runAgain') : t('visualization.nextStep')}
        <ChevronRight className="ml-1 h-4 w-4" />
      </Button>
    </div>
  );
}
