import { DEFAULT_LANGUAGE, type SupportedLanguage } from './translations';

const memoryCache = new Map<string, string>();
const inflight = new Map<string, Promise<string>>();
const MAX_CHUNK_LENGTH = 1200;

const makeKey = (text: string, targetLanguage: SupportedLanguage) => `${targetLanguage}::${text}`;

const splitText = (text: string): string[] => {
  if (text.length <= MAX_CHUNK_LENGTH) return [text];
  const chunks: string[] = [];
  let start = 0;
  while (start < text.length) {
    let end = Math.min(start + MAX_CHUNK_LENGTH, text.length);
    if (end < text.length) {
      const nearestBreak = Math.max(text.lastIndexOf('\n', end), text.lastIndexOf(' ', end));
      if (nearestBreak > start + 200) end = nearestBreak;
    }
    chunks.push(text.slice(start, end));
    start = end;
  }
  return chunks;
};

const translateChunk = async (chunk: string, targetLanguage: SupportedLanguage) => {
  if (!chunk.trim()) return chunk;
  const params = new URLSearchParams({
    client: 'gtx',
    sl: 'en',
    tl: targetLanguage,
    dt: 't',
    q: chunk,
  });
  const response = await fetch(`https://translate.googleapis.com/translate_a/single?${params.toString()}`);
  if (!response.ok) {
    throw new Error(`Translation request failed: ${response.status}`);
  }
  const data = (await response.json()) as unknown[];
  const segments = Array.isArray(data?.[0]) ? (data[0] as unknown[]) : [];
  return segments.map((part) => (Array.isArray(part) ? String(part[0] ?? '') : '')).join('');
};

const getLocalStorageCache = (key: string) => {
  try {
    return localStorage.getItem(`runtime-i18n:${key}`);
  } catch {
    return null;
  }
};

const setLocalStorageCache = (key: string, value: string) => {
  try {
    localStorage.setItem(`runtime-i18n:${key}`, value);
  } catch {
    // ignore quota or disabled storage
  }
};

export const translateText = async (text: string, targetLanguage: SupportedLanguage): Promise<string> => {
  if (!text || targetLanguage === DEFAULT_LANGUAGE) return text;
  const key = makeKey(text, targetLanguage);

  const memo = memoryCache.get(key);
  if (memo) return memo;

  const persisted = getLocalStorageCache(key);
  if (persisted) {
    memoryCache.set(key, persisted);
    return persisted;
  }

  const pending = inflight.get(key);
  if (pending) return pending;

  const promise = (async () => {
    try {
      const translatedChunks = await Promise.all(splitText(text).map((chunk) => translateChunk(chunk, targetLanguage)));
      const translated = translatedChunks.join('');
      memoryCache.set(key, translated);
      setLocalStorageCache(key, translated);
      return translated;
    } catch {
      return text;
    } finally {
      inflight.delete(key);
    }
  })();

  inflight.set(key, promise);
  return promise;
};
