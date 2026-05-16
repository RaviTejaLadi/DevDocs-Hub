import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

/** Same segments for every consumer — avoids useParams() divergence across split <Routes> trees + concurrent transitions. */
const DOCS_PATH = /^\/docs\/([^/]+)\/([^/]+)\/?$/;

export function useDocsRouteParams(): { categoryId: string | undefined; slug: string | undefined } {
  const { pathname } = useLocation();
  return useMemo(() => {
    const m = pathname.match(DOCS_PATH);
    return { categoryId: m?.[1], slug: m?.[2] };
  }, [pathname]);
}
