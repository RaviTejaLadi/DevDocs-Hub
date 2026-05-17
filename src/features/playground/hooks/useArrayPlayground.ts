import { useCallback, useEffect, useMemo, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { ARRAY_METHODS, getArrayMethodById } from '../constants';
import { runArrayMethod } from '../lib/runArrayMethod';
import type { ArrayMethodCategory } from '../types';

export function useArrayPlayground() {
  const { playgroundId } = useParams<{ playgroundId: string }>();
  const [searchParams, setSearchParams] = useSearchParams();

  const methodFromUrl = searchParams.get('method') ?? ARRAY_METHODS[0]?.id ?? 'push';
  const selectedMethod = getArrayMethodById(methodFromUrl) ?? ARRAY_METHODS[0]!;

  const [categoryFilter, setCategoryFilter] = useState<ArrayMethodCategory | 'all'>('all');
  const [methodSearch, setMethodSearch] = useState('');
  const [arrayInput, setArrayInput] = useState(selectedMethod.defaultArray);
  const [extraArgs, setExtraArgs] = useState(selectedMethod.defaultExtraArgs ?? '');
  const [runResult, setRunResult] = useState<ReturnType<typeof runArrayMethod> | null>(null);
  const [autoRun, setAutoRun] = useState(false);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  useEffect(() => {
    if (playgroundId !== 'js-arrays') return;
    setArrayInput(selectedMethod.defaultArray);
    setExtraArgs(selectedMethod.defaultExtraArgs ?? '');
    setRunResult(null);
  }, [selectedMethod.id, playgroundId]);

  const filteredMethods = useMemo(() => {
    const q = methodSearch.trim().toLowerCase();
    return ARRAY_METHODS.filter((m) => {
      if (categoryFilter !== 'all' && m.category !== categoryFilter) return false;
      if (!q) return true;
      return (
        m.name.toLowerCase().includes(q) ||
        m.description.toLowerCase().includes(q) ||
        m.signature.toLowerCase().includes(q)
      );
    });
  }, [categoryFilter, methodSearch]);

  const selectedIndex = useMemo(
    () => filteredMethods.findIndex((m) => m.id === selectedMethod.id),
    [filteredMethods, selectedMethod.id]
  );

  const globalIndex = useMemo(() => ARRAY_METHODS.findIndex((m) => m.id === selectedMethod.id), [selectedMethod.id]);

  const selectMethod = useCallback(
    (id: string) => {
      setSearchParams({ method: id }, { replace: true });
    },
    [setSearchParams]
  );

  const run = useCallback(() => {
    setRunResult(runArrayMethod(selectedMethod, arrayInput, extraArgs));
  }, [selectedMethod, arrayInput, extraArgs]);

  const resetInputs = useCallback(() => {
    setArrayInput(selectedMethod.defaultArray);
    setExtraArgs(selectedMethod.defaultExtraArgs ?? '');
    setRunResult(null);
  }, [selectedMethod]);

  const goToAdjacent = useCallback(
    (direction: 'prev' | 'next') => {
      const pool = filteredMethods.length > 0 ? filteredMethods : ARRAY_METHODS;
      const idx = pool.findIndex((m) => m.id === selectedMethod.id);
      const base = idx >= 0 ? idx : 0;
      const next = direction === 'next' ? (base + 1) % pool.length : (base - 1 + pool.length) % pool.length;
      const target = pool[next];
      if (target) selectMethod(target.id);
    },
    [filteredMethods, selectMethod, selectedMethod.id]
  );

  const copyText = useCallback(async (key: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedKey(key);
      window.setTimeout(() => setCopiedKey((k) => (k === key ? null : k)), 1600);
    } catch {
      setCopiedKey(null);
    }
  }, []);

  useEffect(() => {
    if (!autoRun) return;
    const timer = window.setTimeout(() => {
      setRunResult(runArrayMethod(selectedMethod, arrayInput, extraArgs));
    }, 450);
    return () => window.clearTimeout(timer);
  }, [autoRun, selectedMethod, arrayInput, extraArgs]);

  const categoryCounts = useMemo(() => {
    const counts: Record<ArrayMethodCategory | 'all', number> = {
      all: ARRAY_METHODS.length,
      mutator: 0,
      accessor: 0,
      iteration: 0,
      search: 0,
      static: 0,
    };
    for (const m of ARRAY_METHODS) counts[m.category] += 1;
    return counts;
  }, []);

  return {
    selectedMethod,
    selectMethod,
    categoryFilter,
    setCategoryFilter,
    methodSearch,
    setMethodSearch,
    filteredMethods,
    arrayInput,
    setArrayInput,
    extraArgs,
    setExtraArgs,
    run,
    runResult,
    resetInputs,
    totalMethods: ARRAY_METHODS.length,
    autoRun,
    setAutoRun,
    goToAdjacent,
    selectedIndex,
    globalIndex,
    copiedKey,
    copyText,
    categoryCounts,
  };
}
