import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { useI18n } from '@/i18n/I18nProvider';
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

const HOW_IT_WORKS_KEYS = [
  'visualization.whileLoop.how1',
  'visualization.whileLoop.how2',
  'visualization.whileLoop.how3',
  'visualization.whileLoop.how4',
] as const;

export function WhileLoopVisualization() {
  const { t } = useI18n();
  const { maxCount, step, stepIndex, stepCount, isFirst, isLast, isPlaying, reset, stepForward, stepBack, togglePlay } =
    useWhileLoopVisualization();

  return (
    <VisualizationPageShell
      category="loops"
      titleKey="visualization.whileLoopTitle"
      descriptionKey="visualization.whileLoopDescription"
      stepIndex={stepIndex}
      stepCount={stepCount}
    >
      <VisualizationExplanation
        overviewKey="visualization.whileLoop.overview"
        howItWorksKeys={HOW_IT_WORKS_KEYS}
        whenToUseKey="visualization.whileLoop.whenToUse"
        takeawayKey="visualization.whileLoop.takeaway"
      />

      <div className="grid gap-4 lg:grid-cols-2">
        <VisualizationCodePanel lines={CODE_LINES} activeLine={step.line} />

        <Card className="border-border/40 shadow-none">
          <CardHeader className="pb-3">
            <CardTitle className="text-base">{t('visualization.state')}</CardTitle>
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
                <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                  {t('visualization.condition')}
                </p>
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
                    {step.conditionMet ? t('visualization.true') : t('visualization.false')}
                  </Badge>
                )}
              </div>
            </div>

            <div className="rounded-xl border border-border/35 bg-muted/20 p-4">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                {t('visualization.loopProgress')}
              </p>
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
