import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { useArrayIterationVisualization, type IterationMode } from '../../hooks';
import { VisualizationCodePanel } from '../shared/VisualizationCodePanel';
import { VisualizationConsole } from '../shared/VisualizationConsole';
import { VisualizationControls } from '../shared/VisualizationControls';
import { VisualizationExplanation } from '../shared/VisualizationExplanation';
import { VisualizationPageShell } from '../shared/VisualizationPageShell';

const MODE_COPY: Record<
  IterationMode,
  { label: string; overview: string; how: readonly string[]; when: string; takeaway: string }
> = {
  'for-of': {
    label: 'for…of',
    overview:
      'for…of walks array values directly. You get clean readable syntax without managing an index, and it works with any iterable.',
    how: [
      'Each iteration binds the next value to score — no manual index variable.',
      'The body can read or log the value; the original array stays unchanged.',
      'You can break or continue out of the loop with standard control flow.',
    ],
    when: 'Choose for…of when you only need values (not indices) and want the simplest readable loop.',
    takeaway: 'for…of is for consuming values. It does not return a new array.',
  },
  forEach: {
    label: 'forEach',
    overview:
      'forEach is an array method that calls your function once per element. It expresses intent clearly but returns undefined and cannot be broken with break.',
    how: [
      'forEach passes each element to your callback as the first argument.',
      'The callback runs in order from index 0 to the end.',
      'The method itself returns undefined — use it for side effects like logging.',
    ],
    when: 'Use forEach for side effects (logging, DOM updates) when you do not need to stop early or chain a new array.',
    takeaway: 'forEach = "do something for each item." It is not for building transformed arrays.',
  },
  map: {
    label: 'map',
    overview:
      'map transforms every element and collects the results into a new array. The original array is never modified.',
    how: [
      'map calls your callback for each element in order.',
      'Whatever you return from the callback is pushed into a new array.',
      'After all elements are processed, the new array is returned.',
    ],
    when: 'Use map when you need a new array derived from the old one — doubling numbers, extracting fields, formatting data.',
    takeaway:
      'map = transform + collect. Same length in, same length out (unless you filter inside, which is usually a separate step).',
  },
};

const MODES: IterationMode[] = ['for-of', 'forEach', 'map'];

export function ArrayIterationVisualization() {
  const {
    items,
    mode,
    setMode,
    codeLines,
    step,
    stepIndex,
    stepCount,
    isFirst,
    isLast,
    isPlaying,
    reset,
    stepForward,
    stepBack,
    togglePlay,
  } = useArrayIterationVisualization();

  const modeCopy = MODE_COPY[mode];

  return (
    <VisualizationPageShell
      category="data-structures"
      title="Array iteration patterns"
      description="Same array, three approaches — switch between for…of, forEach, and map to compare behavior and return values."
      stepIndex={stepIndex}
      stepCount={stepCount}
    >
      <div className="flex flex-wrap gap-2">
        {MODES.map((option) => (
          <Button
            key={option}
            type="button"
            size="sm"
            variant={mode === option ? 'default' : 'outline'}
            className={cn('rounded-lg', mode === option && 'bg-emerald-600 text-white hover:bg-emerald-600/90')}
            onClick={() => setMode(option)}
          >
            {MODE_COPY[option].label}
          </Button>
        ))}
      </div>

      <VisualizationExplanation
        overview={modeCopy.overview}
        howItWorks={modeCopy.how}
        whenToUse={modeCopy.when}
        takeaway={modeCopy.takeaway}
      />

      <div className="grid gap-4 lg:grid-cols-2">
        <VisualizationCodePanel lines={codeLines} activeLine={step.line} />

        <Card className="border-border/40 shadow-none">
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Live state</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">scores</p>
              <div className="flex flex-wrap gap-2">
                {items.map((value, index) => (
                  <div
                    key={`score-${index}`}
                    className={cn(
                      'rounded-lg border px-3 py-2 font-mono text-sm transition-all',
                      step.activeIndex === index
                        ? 'border-emerald-500/50 bg-emerald-500/15 text-emerald-700 dark:text-emerald-300'
                        : 'border-border/35 bg-muted/20 text-foreground/80'
                    )}
                  >
                    <span className="mr-2 text-[10px] text-muted-foreground">[{index}]</span>
                    {value}
                  </div>
                ))}
              </div>
            </div>

            {step.currentValue != null && (
              <div className="rounded-xl border border-border/35 bg-card/70 p-3">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">Current value</p>
                <p className="mt-1 font-mono text-2xl font-semibold text-emerald-600 dark:text-emerald-400">
                  {step.currentValue}
                </p>
              </div>
            )}

            {mode === 'map' && (
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">doubled</p>
                <div className="flex flex-wrap gap-2">
                  {step.derivedArray.length === 0 ? (
                    <span className="text-sm text-muted-foreground">Building new array…</span>
                  ) : (
                    step.derivedArray.map((value, index) => (
                      <div
                        key={`doubled-${index}`}
                        className="rounded-lg border border-sky-500/35 bg-sky-500/10 px-3 py-2 font-mono text-sm text-sky-700 dark:text-sky-300"
                      >
                        [{index}] {value}
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}

            {step.logLine && (
              <div className="rounded-xl border border-emerald-500/25 bg-emerald-500/8 px-3 py-2 font-mono text-sm text-emerald-800 dark:text-emerald-200">
                {step.logLine}
              </div>
            )}

            {mode === 'forEach' && step.logLine === 'return undefined' && (
              <Badge variant="outline" className="border-amber-500/30 text-amber-700 dark:text-amber-300">
                forEach always returns undefined
              </Badge>
            )}
          </CardContent>
        </Card>
      </div>

      <VisualizationConsole output={step.consoleOutput} caption={step.caption} />
      <VisualizationControls
        isFirst={isFirst}
        isLast={isLast}
        isPlaying={isPlaying}
        onReset={reset}
        onStepBack={stepBack}
        onTogglePlay={togglePlay}
        onStepForward={stepForward}
      />
    </VisualizationPageShell>
  );
}
