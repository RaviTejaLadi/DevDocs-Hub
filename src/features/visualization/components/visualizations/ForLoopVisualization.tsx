import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { useForLoopVisualization } from '../../hooks';
import { VisualizationCodePanel } from '../shared/VisualizationCodePanel';
import { VisualizationConsole } from '../shared/VisualizationConsole';
import { VisualizationControls } from '../shared/VisualizationControls';
import { VisualizationExplanation } from '../shared/VisualizationExplanation';
import { VisualizationPageShell } from '../shared/VisualizationPageShell';

const CODE_LINES = [
  "const fruits = ['apple', 'banana', 'cherry'];",
  'for (let i = 0; i < fruits.length; i++) {',
  '  console.log(fruits[i]);',
  '}',
] as const;

const HOW_IT_WORKS = [
  'The init clause (let i = 0) runs once before the loop starts.',
  'The condition (i < length) is checked before every iteration — if false, the loop stops.',
  'The body runs when the condition is true — here it reads fruits[i] by index.',
  'The increment (i++) runs after the body, then control jumps back to the condition.',
] as const;

export function ForLoopVisualization() {
  const { items, step, stepIndex, stepCount, isFirst, isLast, isPlaying, reset, stepForward, stepBack, togglePlay } =
    useForLoopVisualization();

  return (
    <VisualizationPageShell
      category="loops"
      title="How a for loop works"
      description="Step through initialization, condition checks, body execution, and increment — the full lifecycle of a counted loop."
      stepIndex={stepIndex}
      stepCount={stepCount}
    >
      <VisualizationExplanation
        overview="A for loop is the classic counted loop. You declare a counter, set a stop condition, and update the counter after each pass. It is ideal when you need an index or a fixed number of iterations."
        howItWorks={HOW_IT_WORKS}
        whenToUse="Use a for loop when you need the index, want a specific number of iterations, or must loop backwards / skip items with continue."
        takeaway="Think: init → check → body → increment → check again. The condition gate is what prevents infinite loops."
      />

      <div className="grid gap-4 lg:grid-cols-2">
        <VisualizationCodePanel lines={CODE_LINES} activeLine={step.line} />

        <Card className="border-border/40 shadow-none">
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Live state</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-border/35 bg-card/70 p-3">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">i</p>
                <p className="mt-1 font-mono text-2xl font-semibold text-emerald-600 dark:text-emerald-400">
                  {step.i ?? '—'}
                </p>
              </div>
              <div className="rounded-xl border border-border/35 bg-card/70 p-3">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">Condition</p>
                <p className="mt-1 font-mono text-sm text-foreground/85">{step.condition ?? '—'}</p>
                {step.conditionMet != null && (
                  <Badge
                    variant="outline"
                    className={cn(
                      'mt-2 text-[10px] uppercase',
                      step.conditionMet
                        ? 'border-emerald-500/35 text-emerald-600 dark:text-emerald-400'
                        : 'border-rose-500/35 text-rose-600 dark:text-rose-400'
                    )}
                  >
                    {step.conditionMet ? 'true' : 'false'}
                  </Badge>
                )}
              </div>
            </div>

            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">fruits</p>
              <div className="flex flex-wrap gap-2">
                {items.map((item, index) => (
                  <div
                    key={item}
                    className={cn(
                      'rounded-lg border px-3 py-2 font-mono text-sm transition-all',
                      step.activeIndex === index
                        ? 'border-emerald-500/50 bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 shadow-sm'
                        : 'border-border/35 bg-muted/20 text-foreground/80'
                    )}
                  >
                    <span className="mr-2 text-[10px] text-muted-foreground">[{index}]</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {step.logLine && (
              <div className="rounded-xl border border-emerald-500/25 bg-emerald-500/8 px-3 py-2 font-mono text-sm text-emerald-800 dark:text-emerald-200">
                {step.logLine}
              </div>
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
