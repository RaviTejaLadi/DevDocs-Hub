import { useEffect, useState } from 'react';
import type { Stream } from '@/topics';

export function useLandingStreams() {
  const [streams, setStreams] = useState<Stream[] | null>(null);

  useEffect(() => {
    let cancelled = false;
    void import('@/topics').then((m) => {
      if (!cancelled) setStreams(m.STREAMS);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return streams;
}
