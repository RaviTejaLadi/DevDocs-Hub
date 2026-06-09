import { useMemo, useState } from 'react';
import { useStepPlayer } from './useStepPlayer';

export const ITERATION_SCORES = [10, 25, 18] as const;

export type IterationMode = 'for-of' | 'forEach' | 'map';

export type ArrayIterationStep = {
  line: number;
  activeIndex: number | null;
  currentValue: number | null;
  derivedArray: number[];
  consoleOutput: string[];
  logLine: string | null;
  caption: string;
};

const CODE_BY_MODE: Record<IterationMode, readonly string[]> = {
  'for-of': ['const scores = [10, 25, 18];', 'for (const score of scores) {', '  console.log(score);', '}'],
  forEach: ['const scores = [10, 25, 18];', 'scores.forEach((score) => {', '  console.log(score);', '});'],
  map: [
    'const scores = [10, 25, 18];',
    'const doubled = scores.map((score) => {',
    '  return score * 2;',
    '});',
    'console.log(doubled);',
  ],
};

function buildForOfSteps(items: readonly number[]): ArrayIterationStep[] {
  const steps: ArrayIterationStep[] = [
    {
      line: 1,
      activeIndex: null,
      currentValue: null,
      derivedArray: [],
      consoleOutput: [],
      logLine: null,
      caption: 'scores holds three numbers. for…of will visit each value directly — no manual index needed.',
    },
  ];

  items.forEach((value, index) => {
    const output = [...steps[steps.length - 1]!.consoleOutput, String(value)];
    steps.push({
      line: 2,
      activeIndex: index,
      currentValue: value,
      derivedArray: [],
      consoleOutput: steps[steps.length - 1]!.consoleOutput,
      logLine: `score = ${value}`,
      caption: `Iterator moves to index ${index}. The variable score temporarily holds ${value}.`,
    });
    steps.push({
      line: 3,
      activeIndex: index,
      currentValue: value,
      derivedArray: [],
      consoleOutput: output,
      logLine: `console.log(${value})`,
      caption: `The body logs ${value}. for…of does not create a new array — it only reads values.`,
    });
  });

  steps.push({
    line: 2,
    activeIndex: null,
    currentValue: null,
    derivedArray: [],
    consoleOutput: steps[steps.length - 1]!.consoleOutput,
    logLine: null,
    caption: 'All values were visited. The loop ends and score goes out of scope.',
  });

  return steps;
}

function buildForEachSteps(items: readonly number[]): ArrayIterationStep[] {
  const steps: ArrayIterationStep[] = [
    {
      line: 1,
      activeIndex: null,
      currentValue: null,
      derivedArray: [],
      consoleOutput: [],
      logLine: null,
      caption: 'forEach is a higher-order method: it calls your callback once per element.',
    },
  ];

  items.forEach((value, index) => {
    const output = [...steps[steps.length - 1]!.consoleOutput, String(value)];
    steps.push({
      line: 2,
      activeIndex: index,
      currentValue: value,
      derivedArray: [],
      consoleOutput: steps[steps.length - 1]!.consoleOutput,
      logLine: `callback(score = ${value})`,
      caption: `forEach invokes the callback for index ${index} with score = ${value}.`,
    });
    steps.push({
      line: 3,
      activeIndex: index,
      currentValue: value,
      derivedArray: [],
      consoleOutput: output,
      logLine: `console.log(${value})`,
      caption: `Inside the callback we log ${value}. forEach always returns undefined.`,
    });
  });

  steps.push({
    line: 2,
    activeIndex: null,
    currentValue: null,
    derivedArray: [],
    consoleOutput: steps[steps.length - 1]!.consoleOutput,
    logLine: 'return undefined',
    caption: 'Every element was processed. forEach finishes and returns undefined.',
  });

  return steps;
}

function buildMapSteps(items: readonly number[]): ArrayIterationStep[] {
  const steps: ArrayIterationStep[] = [
    {
      line: 1,
      activeIndex: null,
      currentValue: null,
      derivedArray: [],
      consoleOutput: [],
      logLine: null,
      caption: 'map walks the array and builds a brand-new array from the callback return values.',
    },
  ];

  const derived: number[] = [];
  items.forEach((value, index) => {
    steps.push({
      line: 2,
      activeIndex: index,
      currentValue: value,
      derivedArray: [...derived],
      consoleOutput: steps[steps.length - 1]!.consoleOutput,
      logLine: `callback(score = ${value})`,
      caption: `map calls the callback for index ${index}. score is ${value}.`,
    });

    const doubled = value * 2;
    derived.push(doubled);
    steps.push({
      line: 3,
      activeIndex: index,
      currentValue: value,
      derivedArray: [...derived],
      consoleOutput: steps[steps.length - 1]!.consoleOutput,
      logLine: `return ${value} * 2  →  ${doubled}`,
      caption: `The callback returns ${doubled}, which is pushed into the new doubled array.`,
    });
  });

  const finalArray = `[${derived.join(', ')}]`;
  steps.push({
    line: 4,
    activeIndex: null,
    currentValue: null,
    derivedArray: [...derived],
    consoleOutput: [finalArray],
    logLine: `console.log(${finalArray})`,
    caption: `After map completes, doubled contains [${derived.join(', ')}] — a new array, leaving scores unchanged.`,
  });

  return steps;
}

const STEP_BUILDERS: Record<IterationMode, (items: readonly number[]) => ArrayIterationStep[]> = {
  'for-of': buildForOfSteps,
  forEach: buildForEachSteps,
  map: buildMapSteps,
};

export function useArrayIterationVisualization(items: readonly number[] = ITERATION_SCORES) {
  const [mode, setMode] = useState<IterationMode>('for-of');
  const steps = useMemo(() => STEP_BUILDERS[mode](items), [mode, items]);
  const player = useStepPlayer(steps);
  const codeLines = CODE_BY_MODE[mode];

  return {
    items,
    mode,
    setMode,
    codeLines,
    steps,
    ...player,
    step: player.step as ArrayIterationStep,
  };
}
