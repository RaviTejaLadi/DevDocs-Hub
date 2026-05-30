import {
  createContext,
  useCallback,
  useContext,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import { useLocation } from 'react-router-dom';
import { useDocsRouteParams } from '@/hooks/useDocsRouteParams';

const DOCS_SEGMENTS = /^\/docs\/([^/]+)\/([^/]+)/;

/** Scroll-driven preview row; `pathRevision` must match provider when it should override the URL for the sidebar. */
export type DocsFeedOverlay = { topicId: string; slug: string; pathRevision: number };

type DocsFeedSyncContextValue = {
  pathRevision: number;
  pathRevisionRef: React.MutableRefObject<number>;
  feedOverlay: DocsFeedOverlay | null;
  setFeedOverlay: (next: DocsFeedOverlay | null) => void;
};

const DocsFeedSyncContext = createContext<DocsFeedSyncContextValue | null>(null);

export function DocsFeedSyncProvider({ children }: { children: ReactNode }) {
  const location = useLocation();
  const pathRevisionRef = useRef(0);
  const prevDocsKeyRef = useRef<string>('');
  const [pathRevision, setPathRevision] = useState(0);
  const [feedOverlay, setFeedOverlayState] = useState<DocsFeedOverlay | null>(null);

  useLayoutEffect(() => {
    const m = location.pathname.match(DOCS_SEGMENTS);
    if (!m) {
      prevDocsKeyRef.current = '';
      setFeedOverlayState(null);
      return;
    }
    const key = `${m[1]}/${m[2]}`;
    if (key !== prevDocsKeyRef.current) {
      prevDocsKeyRef.current = key;
      pathRevisionRef.current += 1;
      setPathRevision(pathRevisionRef.current);
    }
  }, [location.pathname]);

  const setFeedOverlay = useCallback((next: DocsFeedOverlay | null) => {
    setFeedOverlayState((prev) => {
      if (next === null) return prev === null ? prev : null;
      if (prev && prev.topicId === next.topicId && prev.slug === next.slug && prev.pathRevision === next.pathRevision) {
        return prev;
      }
      return next;
    });
  }, []);

  const value = useMemo(
    () => ({ pathRevision, pathRevisionRef, feedOverlay, setFeedOverlay }),
    [pathRevision, feedOverlay, setFeedOverlay]
  );

  return <DocsFeedSyncContext.Provider value={value}>{children}</DocsFeedSyncContext.Provider>;
}

export function useDocsFeedSync(): DocsFeedSyncContextValue {
  const ctx = useContext(DocsFeedSyncContext);
  if (!ctx) throw new Error('useDocsFeedSync must be used within DocsFeedSyncProvider');
  return ctx;
}

export function useDocsFeedOverlay(): DocsFeedOverlay | null {
  return useContext(DocsFeedSyncContext)?.feedOverlay ?? null;
}

/** Sidebar: follow live feed row while scroll and URL are on the same path revision; otherwise trust the URL. */
export function useSidebarDocsRouteKeys(): { topicId: string | undefined; slug: string | undefined } {
  const path = useDocsRouteParams();
  const ctx = useContext(DocsFeedSyncContext);
  const overlay = ctx?.feedOverlay ?? null;
  const pathRevision = ctx?.pathRevision ?? 0;
  const overlayApplies = overlay !== null && overlay.pathRevision === pathRevision;
  return {
    topicId: overlayApplies ? overlay.topicId : path.categoryId,
    slug: overlayApplies ? overlay.slug : path.slug,
  };
}
