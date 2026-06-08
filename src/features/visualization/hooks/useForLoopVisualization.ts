import { useMemo } from 'react';
import { useStepPlayer } from './useStepPlayer';

export const FOR_LOOP_ITEMS = ['apple', 'banana', 'cherry'] as const;

export type ForLoopPhase = 'init' | 'check' | 'body' | 'increment' | 'done';

export type ForLoopStep = {
  line: number;
  i: number | null;
  activeIndex: number | null;
  condition: string | null;
  conditionMet: boolean | null;
  logLine: string | null;
  consoleOutput: string[];
  phase: ForLoopPhase;
  caption: string;
};

function buildForLoopSteps(items: readonly string[]): ForLoopStep[] {
  const steps: ForLoopStep[] = [
    {
      line: 1,
      i: null,
      activeIndex: null,
      condition: null,
      conditionMet: null,
      logLine: null,
      consoleOutput: [],
      phase: 'init',
      caption: 'The fruits array is created in memory. The loop counter i does not exist yet.',
    },
  ];

  for (let i = 0; i < items.length; i++) {
    steps.push({
      line: 2,
      i,
      activeIndex: null,
      condition: `i (${i}) < fruits.length (${items.length})`,
      conditionMet: true,
      logLine: null,
      consoleOutput: steps[steps.length - 1]!.consoleOutput,
      phase: 'check',
      caption: `Before each iteration, JavaScript evaluates the middle condition. Right now ${i} is less than ${items.length}, so the body will run.`,
    });

    const output = [...steps[steps.length - 1]!.consoleOutput, items[i]!];
    steps.push({
      line: 3,
      i,
      activeIndex: i,
      condition: `i (${i}) < fruits.length (${items.length})`,
      conditionMet: true,
      logLine: `fruits[${i}]  →  "${items[i]}"`,
      consoleOutput: output,
      phase: 'body',
      caption: `The body executes: fruits[i] reads index ${i} and console.log prints "${items[i]}".`,
    });

    if (i < items.length - 1) {
      steps.push({
        line: 2,
        i: i + 1,
        activeIndex: null,
        condition: null,
        conditionMet: null,
        logLine: null,
        consoleOutput: output,
        phase: 'increment',
        caption: `After the body, the increment i++ runs. The counter moves from ${i} to ${i + 1}, then the condition is checked again.`,
      });
    }
  }

  const finalOutput = [...steps[steps.length - 1]!.consoleOutput];
  steps.push({
    line: 2,
    i: items.length,
    activeIndex: null,
    condition: `i (${items.length}) < fruits.length (${items.length})`,
    conditionMet: false,
    logLine: null,
    consoleOutput: finalOutput,
    phase: 'done',
    caption: 'The condition is now false, so the loop stops. Execution continues on the next line after the closing brace.',
  });

  return steps;
}

export function useForLoopVisualization(items: readonly string[] = FOR_LOOP_ITEMS) {
  const steps = useMemo(() => buildForLoopSteps(items), [items]);
  const player = useStepPlayer(steps);

  return {
    items,
    steps,
    ...player,
    step: player.step as ForLoopStep,
  };
}
