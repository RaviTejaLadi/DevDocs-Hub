import { useCallback, useEffect, useMemo, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { runObjectMethod } from '../lib/runObjectMethod';
import type { ObjectMethodCategory } from '../types';
import { OBJECT_METHODS, getObjectMethodById } from '../constants/objectMethods';

export function useObjectPlayground() {
  const { playgroundId } = useParams<{ playgroundId: string }>();
  const [searchParams, setSearchParams] = useSearchParams();

  const methodFromUrl = searchParams.get('method') ?? OBJECT_METHODS[0]?.id ?? 'keys';

  const selectedMethod = getObjectMethodById(methodFromUrl) ?? OBJECT_METHODS[0]!;

  const [categoryFilter, setCategoryFilter] = useState<ObjectMethodCategory | 'all'>('all');

  const [methodSearch, setMethodSearch] = useState('');

  const [objectInput, setObjectInput] = useState(selectedMethod.defaultObject);

  const [extraArgs, setExtraArgs] = useState(selectedMethod.defaultExtraArgs ?? '');

  const [runResult, setRunResult] = useState<ReturnType<typeof runObjectMethod> | null>(null);

  const [autoRun, setAutoRun] = useState(false);

  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  useEffect(() => {
    if (playgroundId !== 'js-objects') return;

    setObjectInput(selectedMethod.defaultObject);
    setExtraArgs(selectedMethod.defaultExtraArgs ?? '');
    setRunResult(null);
  }, [selectedMethod.id, playgroundId]);

  const filteredMethods = useMemo(() => {
    const q = methodSearch.trim().toLowerCase();

    return OBJECT_METHODS.filter((m) => {
      if (categoryFilter !== 'all' && m.category !== categoryFilter) {
        return false;
      }

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

  const globalIndex = useMemo(() => OBJECT_METHODS.findIndex((m) => m.id === selectedMethod.id), [selectedMethod.id]);

  const selectMethod = useCallback(
    (id: string) => {
      setSearchParams({ method: id }, { replace: true });
    },
    [setSearchParams]
  );

  const run = useCallback(() => {
    setRunResult(runObjectMethod(selectedMethod, objectInput, extraArgs));
  }, [selectedMethod, objectInput, extraArgs]);

  const resetInputs = useCallback(() => {
    setObjectInput(selectedMethod.defaultObject);
    setExtraArgs(selectedMethod.defaultExtraArgs ?? '');
    setRunResult(null);
  }, [selectedMethod]);

  const goToAdjacent = useCallback(
    (direction: 'prev' | 'next') => {
      const pool = filteredMethods.length > 0 ? filteredMethods : OBJECT_METHODS;

      const idx = pool.findIndex((m) => m.id === selectedMethod.id);

      const base = idx >= 0 ? idx : 0;

      const next = direction === 'next' ? (base + 1) % pool.length : (base - 1 + pool.length) % pool.length;

      const target = pool[next];

      if (target) {
        selectMethod(target.id);
      }
    },
    [filteredMethods, selectMethod, selectedMethod.id]
  );

  const copyText = useCallback(async (key: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);

      setCopiedKey(key);

      window.setTimeout(() => {
        setCopiedKey((k) => (k === key ? null : k));
      }, 1600);
    } catch {
      setCopiedKey(null);
    }
  }, []);

  useEffect(() => {
    if (!autoRun) return;

    const timer = window.setTimeout(() => {
      setRunResult(runObjectMethod(selectedMethod, objectInput, extraArgs));
    }, 450);

    return () => window.clearTimeout(timer);
  }, [autoRun, selectedMethod, objectInput, extraArgs]);

  const categoryCounts = useMemo(() => {
    const counts: Record<ObjectMethodCategory | 'all', number> = {
      all: OBJECT_METHODS.length,
      static: 0,
      inspection: 0,
      transformation: 0,
      mutation: 0,
    };

    for (const method of OBJECT_METHODS) {
      counts[method.category] += 1;
    }

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
    objectInput,
    setObjectInput,
    extraArgs,
    setExtraArgs,
    run,
    runResult,
    resetInputs,
    totalMethods: OBJECT_METHODS.length,
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
