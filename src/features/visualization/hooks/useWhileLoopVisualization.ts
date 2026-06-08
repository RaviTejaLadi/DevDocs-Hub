import { useMemo } from 'react';
import { useStepPlayer } from './useStepPlayer';

export type WhileLoopPhase = 'init' | 'check' | 'body' | 'increment' | 'done';

export type WhileLoopStep = {
  line: number;
  count: number | null;
  condition: string | null;
  conditionMet: boolean | null;
  logLine: string | null;
  consoleOutput: string[];
  phase: WhileLoopPhase;
  caption: string;
};

const MAX_COUNT = 3;

function buildWhileLoopSteps(max: number): WhileLoopStep[] {
  const steps: WhileLoopStep[] = [
    {
      line: 1,
      count: 0,
      condition: null,
      conditionMet: null,
      logLine: null,
      consoleOutput: [],
      phase: 'init',
      caption: 'count is initialized to 0. The while loop has not evaluated its condition yet.',
    },
  ];

  for (let count = 0; count < max; count++) {
    steps.push({
      line: 2,
      count,
      condition: `count (${count}) < ${max}`,
      conditionMet: true,
      logLine: null,
      consoleOutput: steps[steps.length - 1]!.consoleOutput,
      phase: 'check',
      caption: `The while loop always checks the condition first. Because ${count} < ${max} is true, the body will execute.`,
    });

    const output = [...steps[steps.length - 1]!.consoleOutput, `Step ${count + 1}`];
    steps.push({
      line: 3,
      count,
      condition: `count (${count}) < ${max}`,
      conditionMet: true,
      logLine: `console.log("Step ${count + 1}")`,
      consoleOutput: output,
      phase: 'body',
      caption: `Inside the body, we log "Step ${count + 1}". Notice count is still ${count} until the increment line runs.`,
    });

    steps.push({
      line: 4,
      count: count + 1,
      condition: null,
      conditionMet: null,
      logLine: 'count++',
      consoleOutput: output,
      phase: 'increment',
      caption: `count++ increases the variable to ${count + 1}. The loop jumps back to the condition line.`,
    });
  }

  const finalOutput = [...steps[steps.length - 1]!.consoleOutput];
  steps.push({
    line: 2,
    count: max,
    condition: `count (${max}) < ${max}`,
    conditionMet: false,
    logLine: null,
    consoleOutput: finalOutput,
    phase: 'done',
    caption: `count is now ${max}, so count < ${max} is false. The loop exits without running the body again.`,
  });

  return steps;
}

export function useWhileLoopVisualization(maxCount = MAX_COUNT) {
  const steps = useMemo(() => buildWhileLoopSteps(maxCount), [maxCount]);
  const player = useStepPlayer(steps);

  return {
    maxCount,
    steps,
    ...player,
    step: player.step as WhileLoopStep,
  };
}
