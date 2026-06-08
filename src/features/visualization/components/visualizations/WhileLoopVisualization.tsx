import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { useWhileLoopVisualization } from '../../hooks';
import { VisualizationCodePanel } from '../shared/VisualizationCodePanel';
import { VisualizationConsole } from '../shared/VisualizationConsole';
import { VisualizationControls } from '../shared/VisualizationControls';
import { VisualizationExplanation } from '../shared/VisualizationExplanation';
import { VisualizationPageShell } from '../shared/VisualizationPageShell';

const CODE_LINES = [
  'let count = 0;',
  'while (count < 3) {',
  "  console.log('Step ' + (count + 1));",
  '  count++;',
  '}',
] as const;

const HOW_IT_WORKS = [
  'The condition is evaluated before each iteration — the body may run zero times.',
  'If the condition is true, the body executes.',
  'You must update the variables used in the condition, or the loop never ends.',
  'When the condition becomes false, execution continues after the loop block.',
] as const;

export function WhileLoopVisualization() {
  const { maxCount, step, stepIndex, stepCount, isFirst, isLast, isPlaying, reset, stepForward, stepBack, togglePlay } =
    useWhileLoopVisualization();

  return (
    <VisualizationPageShell
      category="loops"
      title="How a while loop works"
      description="Unlike for, while only has a condition — watch how the check happens before every body execution."
      stepIndex={stepIndex}
      stepCount={stepCount}
    >
      <VisualizationExplanation
        overview="A while loop repeats as long as its condition stays true. There is no built-in counter in the syntax — you manage state inside the body, which makes while loops flexible but easier to get wrong."
        howItWorks={HOW_IT_WORKS}
        whenToUse="Use while when you do not know how many iterations you need — reading input, polling, or processing until a flag changes."
        takeaway='while = "keep going while this is true." Always ensure something in the body moves the condition toward false.'
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
                <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">count</p>
                <p className="mt-1 font-mono text-2xl font-semibold text-emerald-600 dark:text-emerald-400">
                  {step.count ?? '—'}
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

            <div className="rounded-xl border border-border/35 bg-muted/20 p-4">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Loop progress</p>
              <div className="flex gap-2">
                {Array.from({ length: maxCount }, (_, index) => {
                  const completed = (step.count ?? 0) > index || (step.phase === 'done' && index < maxCount);
                  const active = step.count === index && step.phase !== 'done';
                  return (
                    <div
                      key={index}
                      className={cn(
                        'flex h-10 flex-1 items-center justify-center rounded-lg border font-mono text-sm transition-all',
                        completed && 'border-emerald-500/40 bg-emerald-500/15 text-emerald-700 dark:text-emerald-300',
                        active && 'ring-2 ring-emerald-500/40',
                        !completed && !active && 'border-border/35 bg-card/50 text-muted-foreground'
                      )}
                    >
                      {index + 1}
                    </div>
                  );
                })}
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
