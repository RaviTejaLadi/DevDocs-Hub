import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { useI18n } from '@/i18n/I18nProvider';
import { useArrayIterationVisualization, type IterationMode } from '../../hooks';
import { VisualizationCodePanel } from '../shared/VisualizationCodePanel';
import { VisualizationConsole } from '../shared/VisualizationConsole';
import { VisualizationControls } from '../shared/VisualizationControls';
import { VisualizationExplanation } from '../shared/VisualizationExplanation';
import { VisualizationPageShell } from '../shared/VisualizationPageShell';

const MODE_KEYS: Record<IterationMode, { label: string; overview: string; how: readonly string[]; when: string; takeaway: string }> = {
  'for-of': {
    label: 'visualization.arrayIteration.modeForOf',
    overview: 'visualization.arrayIteration.forOf.overview',
    how: ['visualization.arrayIteration.forOf.how1', 'visualization.arrayIteration.forOf.how2', 'visualization.arrayIteration.forOf.how3'],
    when: 'visualization.arrayIteration.forOf.whenToUse',
    takeaway: 'visualization.arrayIteration.forOf.takeaway',
  },
  forEach: {
    label: 'visualization.arrayIteration.modeForEach',
    overview: 'visualization.arrayIteration.forEach.overview',
    how: ['visualization.arrayIteration.forEach.how1', 'visualization.arrayIteration.forEach.how2', 'visualization.arrayIteration.forEach.how3'],
    when: 'visualization.arrayIteration.forEach.whenToUse',
    takeaway: 'visualization.arrayIteration.forEach.takeaway',
  },
  map: {
    label: 'visualization.arrayIteration.modeMap',
    overview: 'visualization.arrayIteration.map.overview',
    how: ['visualization.arrayIteration.map.how1', 'visualization.arrayIteration.map.how2', 'visualization.arrayIteration.map.how3'],
    when: 'visualization.arrayIteration.map.whenToUse',
    takeaway: 'visualization.arrayIteration.map.takeaway',
  },
};

const MODES: IterationMode[] = ['for-of', 'forEach', 'map'];

export function ArrayIterationVisualization() {
  const { t } = useI18n();
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

  const modeCopy = MODE_KEYS[mode];

  return (
    <VisualizationPageShell
      category="data-structures"
      titleKey="visualization.arrayIterationTitle"
      descriptionKey="visualization.arrayIterationDescription"
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
            className={cn(
              'rounded-lg',
              mode === option && 'bg-emerald-600 text-white hover:bg-emerald-600/90'
            )}
            onClick={() => setMode(option)}
          >
            {t(MODE_KEYS[option].label)}
          </Button>
        ))}
      </div>

      <VisualizationExplanation
        overviewKey={modeCopy.overview}
        howItWorksKeys={modeCopy.how}
        whenToUseKey={modeCopy.when}
        takeawayKey={modeCopy.takeaway}
      />

      <div className="grid gap-4 lg:grid-cols-2">
        <VisualizationCodePanel lines={codeLines} activeLine={step.line} />

        <Card className="border-border/40 shadow-none">
          <CardHeader className="pb-3">
            <CardTitle className="text-base">{t('visualization.state')}</CardTitle>
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
                <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                  {t('visualization.currentValue')}
                </p>
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
                    <span className="text-sm text-muted-foreground">{t('visualization.mapBuilding')}</span>
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
                {t('visualization.forEachReturnsUndefined')}
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
