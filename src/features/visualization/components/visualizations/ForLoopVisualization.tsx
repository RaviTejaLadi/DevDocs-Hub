import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { useI18n } from '@/i18n/I18nProvider';
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

const HOW_IT_WORKS_KEYS = [
  'visualization.forLoop.how1',
  'visualization.forLoop.how2',
  'visualization.forLoop.how3',
  'visualization.forLoop.how4',
] as const;

export function ForLoopVisualization() {
  const { t } = useI18n();
  const { items, step, stepIndex, stepCount, isFirst, isLast, isPlaying, reset, stepForward, stepBack, togglePlay } =
    useForLoopVisualization();

  return (
    <VisualizationPageShell
      category="loops"
      titleKey="visualization.forLoopTitle"
      descriptionKey="visualization.forLoopDescription"
      stepIndex={stepIndex}
      stepCount={stepCount}
    >
      <VisualizationExplanation
        overviewKey="visualization.forLoop.overview"
        howItWorksKeys={HOW_IT_WORKS_KEYS}
        whenToUseKey="visualization.forLoop.whenToUse"
        takeawayKey="visualization.forLoop.takeaway"
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
                <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">i</p>
                <p className="mt-1 font-mono text-2xl font-semibold text-emerald-600 dark:text-emerald-400">
                  {step.i ?? '—'}
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
