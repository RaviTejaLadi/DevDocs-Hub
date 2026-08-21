import { ChevronRight, Pause, Play, RotateCcw, SkipBack, SkipForward } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 rounded-xl border border-border/35 bg-card/60 p-3">
      <Button type="button" variant="outline" size="icon" onClick={onReset} aria-label={'Reset'}>
        <RotateCcw className="h-4 w-4" />
      </Button>
      <Button
        type="button"
        variant="outline"
        size="icon"
        onClick={onStepBack}
        disabled={isFirst}
        aria-label={'Previous step'}
      >
        <SkipBack className="h-4 w-4" />
      </Button>
      <Button
        type="button"
        size="icon"
        className="size-11 rounded-lg bg-emerald-600 text-white hover:bg-emerald-600/90"
        onClick={onTogglePlay}
        aria-label={isPlaying ? 'Pause' : 'Play'}
      >
        {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 ml-0.5" />}
      </Button>
      <Button
        type="button"
        variant="outline"
        size="icon"
        onClick={onStepForward}
        disabled={isLast}
        aria-label={'Next step'}
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
        {isLast ? 'Run again' : 'Next step'}
        <ChevronRight className="ml-1 h-4 w-4" />
      </Button>
    </div>
  );
}
