import { useCallback, useEffect, useRef, useState } from 'react';

const AUTO_PLAY_MS = 1400;

export function useStepPlayer<T>(steps: readonly T[], autoPlayMs = AUTO_PLAY_MS) {
  const [stepIndex, setStepIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const step = steps[stepIndex] ?? steps[0]!;
  const isFirst = stepIndex === 0;
  const isLast = stepIndex >= steps.length - 1;

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const reset = useCallback(() => {
    clearTimer();
    setIsPlaying(false);
    setStepIndex(0);
  }, [clearTimer]);

  const stepForward = useCallback(() => {
    setStepIndex((current) => Math.min(current + 1, steps.length - 1));
  }, [steps.length]);

  const stepBack = useCallback(() => {
    setStepIndex((current) => Math.max(current - 1, 0));
  }, []);

  const togglePlay = useCallback(() => {
    setIsPlaying((playing) => {
      if (playing) {
        clearTimer();
        return false;
      }
      return true;
    });
  }, [clearTimer]);

  useEffect(() => {
    setStepIndex(0);
    setIsPlaying(false);
    clearTimer();
  }, [steps, clearTimer]);

  useEffect(() => {
    if (!isPlaying) return;
    if (isLast) {
      setIsPlaying(false);
      return;
    }

    timerRef.current = setInterval(() => {
      setStepIndex((current) => {
        if (current >= steps.length - 1) {
          clearTimer();
          setIsPlaying(false);
          return current;
        }
        return current + 1;
      });
    }, autoPlayMs);

    return clearTimer;
  }, [isPlaying, isLast, steps.length, autoPlayMs, clearTimer]);

  useEffect(() => () => clearTimer(), [clearTimer]);

  return {
    step,
    stepIndex,
    stepCount: steps.length,
    isFirst,
    isLast,
    isPlaying,
    reset,
    stepForward,
    stepBack,
    togglePlay,
    goToStep: setStepIndex,
  };
}
