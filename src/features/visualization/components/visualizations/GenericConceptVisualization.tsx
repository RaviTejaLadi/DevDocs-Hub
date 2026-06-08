import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { useStepPlayer } from '../../hooks';
import type { GenericVisualizationConfig } from '../../types/genericVisualization';
import { VisualizationCodePanel } from '../shared/VisualizationCodePanel';
import { VisualizationConsole } from '../shared/VisualizationConsole';
import { VisualizationControls } from '../shared/VisualizationControls';
import { VisualizationExplanation } from '../shared/VisualizationExplanation';
import { VisualizationPageShell } from '../shared/VisualizationPageShell';

type GenericConceptVisualizationProps = {
  topicId: string;
  config: GenericVisualizationConfig;
};

function parseBracketList(value: string): string[] {
  const trimmed = value.trim();
  if (!trimmed.startsWith('[') || !trimmed.endsWith(']')) return [];
  return trimmed
    .slice(1, -1)
    .split(',')
    .map((part) => part.trim())
    .filter(Boolean);
}

function parseArrowList(value: string): string[] {
  return value
    .split('->')
    .map((part) => part.trim())
    .filter(Boolean);
}

function getState(step: GenericVisualizationConfig['steps'][number], label: string): string | undefined {
  return step.state.find((item) => item.label.toLowerCase() === label.toLowerCase())?.value;
}

export function GenericConceptVisualization({ topicId, config }: GenericConceptVisualizationProps) {
  const { step, stepIndex, stepCount, isFirst, isLast, isPlaying, reset, stepForward, stepBack, togglePlay } =
    useStepPlayer(config.steps, 1200);

  const stackItems = parseBracketList(getState(step, 'stack') ?? '');
  const queueItems = parseBracketList(getState(step, 'queue') ?? '');
  const chainItems = parseArrowList(getState(step, 'chain') ?? getState(step, 'head') ?? '');
  const mapEntriesValue = getState(step, 'entries') ?? '';
  const callStackItems = parseBracketList(getState(step, 'stack') ?? '');
  const currentValue = getState(step, 'score') ?? getState(step, 'key') ?? getState(step, 'pair') ?? getState(step, 'attempts');
  const closureState = getState(step, 'closure state') ?? getState(step, 'captured n');
  const asyncState = getState(step, 'state') ?? getState(step, 'promise');

  return (
    <VisualizationPageShell
      category={config.category}
      title={config.title}
      description={config.description}
      stepIndex={stepIndex}
      stepCount={stepCount}
    >
      <VisualizationExplanation
        overview={config.overview}
        howItWorks={config.howItWorks}
        whenToUse={config.whenToUse}
        takeaway={config.takeaway}
      />

      <div className="grid gap-4 lg:grid-cols-2">
        <VisualizationCodePanel lines={config.code} activeLine={step.line} />

        <Card className="border-border/40 shadow-none">
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Live state</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {step.state.map((item) => (
              <div key={`${item.label}-${item.value}`} className="rounded-xl border border-border/35 bg-card/70 p-3">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">{item.label}</p>
                <p className="mt-1 font-mono text-sm text-foreground/90">{item.value}</p>
              </div>
            ))}

            <div className="rounded-xl border border-border/35 bg-muted/20 p-3">
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                Topic visualization
              </p>

              {topicId === 'stack' && (
                <div className="flex min-h-28 flex-col-reverse gap-1">
                  {stackItems.length === 0 ? (
                    <span className="text-sm text-muted-foreground">Empty stack</span>
                  ) : (
                    stackItems.map((item, index) => (
                      <div
                        key={`${item}-${index}`}
                        className={cn(
                          'rounded-md border px-3 py-1.5 text-center font-mono text-sm',
                          index === stackItems.length - 1
                            ? 'border-emerald-500/45 bg-emerald-500/12 text-emerald-700 dark:text-emerald-300'
                            : 'border-border/40 bg-card/70'
                        )}
                      >
                        {item}
                      </div>
                    ))
                  )}
                </div>
              )}

              {topicId === 'queue' && (
                <div className="flex min-h-20 items-center gap-2">
                  {queueItems.length === 0 ? (
                    <span className="text-sm text-muted-foreground">Empty queue</span>
                  ) : (
                    queueItems.map((item, index) => (
                      <div
                        key={`${item}-${index}`}
                        className={cn(
                          'rounded-md border px-3 py-1.5 font-mono text-sm',
                          index === 0
                            ? 'border-sky-500/45 bg-sky-500/12 text-sky-700 dark:text-sky-300'
                            : 'border-border/40 bg-card/70'
                        )}
                      >
                        {item}
                      </div>
                    ))
                  )}
                </div>
              )}

              {topicId === 'linked-list' && (
                <div className="flex flex-wrap items-center gap-2">
                  {chainItems.map((item, index) => (
                    <div key={`${item}-${index}`} className="flex items-center gap-2">
                      <div className="rounded-md border border-violet-500/35 bg-violet-500/10 px-3 py-1.5 font-mono text-sm">
                        {item}
                      </div>
                      {index < chainItems.length - 1 && <span className="text-muted-foreground">→</span>}
                    </div>
                  ))}
                </div>
              )}

              {topicId === 'hash-map' && (
                <div className="space-y-2">
                  {mapEntriesValue.includes('{') ? (
                    mapEntriesValue
                      .replace('{', '')
                      .replace('}', '')
                      .split(',')
                      .map((entry) => entry.trim())
                      .filter(Boolean)
                      .map((entry) => (
                        <div key={entry} className="rounded-md border border-border/40 bg-card/70 px-3 py-1.5 font-mono text-sm">
                          {entry}
                        </div>
                      ))
                  ) : (
                    <span className="text-sm text-muted-foreground">No entries yet</span>
                  )}
                </div>
              )}

              {(topicId === 'call-stack' || topicId === 'recursion') && (
                <div className="flex min-h-28 flex-col-reverse gap-1">
                  {callStackItems.length === 0 ? (
                    <span className="text-sm text-muted-foreground">No active frames</span>
                  ) : (
                    callStackItems.map((frame, index) => (
                      <div
                        key={`${frame}-${index}`}
                        className={cn(
                          'rounded-md border px-3 py-1.5 font-mono text-sm',
                          index === callStackItems.length - 1
                            ? 'border-amber-500/45 bg-amber-500/12 text-amber-700 dark:text-amber-300'
                            : 'border-border/40 bg-card/70'
                        )}
                      >
                        {frame}
                      </div>
                    ))
                  )}
                </div>
              )}

              {topicId === 'event-loop' && (
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div className="rounded-md border border-border/40 bg-card/70 p-2">
                    <p className="font-semibold text-muted-foreground">Call stack</p>
                    <p className="mt-1 font-mono">{getState(step, 'call stack') ?? 'sync done'}</p>
                  </div>
                  <div className="rounded-md border border-border/40 bg-card/70 p-2">
                    <p className="font-semibold text-muted-foreground">Microtasks</p>
                    <p className="mt-1 font-mono">{getState(step, 'microtask queue') ?? '[]'}</p>
                  </div>
                  <div className="rounded-md border border-border/40 bg-card/70 p-2">
                    <p className="font-semibold text-muted-foreground">Macrotasks</p>
                    <p className="mt-1 font-mono">{getState(step, 'macrotask queue') ?? '[]'}</p>
                  </div>
                </div>
              )}

              {topicId === 'closures' && closureState && (
                <div className="rounded-md border border-emerald-500/35 bg-emerald-500/10 px-3 py-2">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-300">
                    Closure memory
                  </p>
                  <p className="mt-1 font-mono text-sm">{closureState}</p>
                </div>
              )}

              {topicId === 'hoisting-tdz' && (
                <div className="flex gap-2">
                  <Badge variant="outline" className="border-emerald-500/35">
                    var: {getState(step, 'a') ?? 'undefined'}
                  </Badge>
                  <Badge variant="outline" className="border-rose-500/35">
                    let: {getState(step, 'b') ?? 'TDZ'}
                  </Badge>
                </div>
              )}

              {topicId === 'scope-chain' && (
                <div className="space-y-1 font-mono text-xs">
                  <div className="rounded-md border border-border/40 bg-card/70 px-2 py-1">global scope</div>
                  <div className="rounded-md border border-border/40 bg-card/70 px-2 py-1">outer scope</div>
                  <div className="rounded-md border border-emerald-500/40 bg-emerald-500/10 px-2 py-1">
                    inner scope (lookup starts here)
                  </div>
                </div>
              )}

              {topicId === 'references-vs-values' && (
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="rounded-md border border-border/40 bg-card/70 p-2 font-mono">a → object</div>
                  <div className="rounded-md border border-border/40 bg-card/70 p-2 font-mono">b → object</div>
                </div>
              )}

              {topicId === 'async-await' && asyncState && (
                <div className="flex gap-2">
                  <Badge variant="outline" className="border-sky-500/35 text-sky-700 dark:text-sky-300">
                    async state: {asyncState}
                  </Badge>
                </div>
              )}

              {(topicId === 'do-while' || topicId === 'for-of-loop' || topicId === 'for-in-loop' || topicId === 'nested-loops') &&
                currentValue && (
                  <div className="rounded-md border border-emerald-500/35 bg-emerald-500/10 px-3 py-2 font-mono text-sm text-emerald-700 dark:text-emerald-300">
                    Current: {currentValue}
                  </div>
                )}
            </div>
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
