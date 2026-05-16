import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Loader2, PanelLeftClose, PanelLeftOpen } from 'lucide-react';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { useI18n } from '@/i18n/I18nProvider';
import { ScrollViewportProvider } from '@/context/scrollViewportContext';
import { DocsFeedSyncProvider } from '@/context/docsFeedSyncContext';
import { isDocsPreserveScrollState } from '@/lib/docsLocationState';
import NavBar from '@/components/layout/NavBar';
import SidebarWrapperMobile from '@/components/layout/SidebarWrapperMobile';
import SidebarWrapperDesktop from '@/components/layout/SidebarWrapperDesktop';

const LandingPage = lazy(() => import('@/pages/LandingPage'));
const DocumentationPage = lazy(() => import('@/pages/DocumentationPage'));
const TermsOfServicePage = lazy(() => import('@/pages/TermsOfServicePage'));
const InterviewQuestionsPage = lazy(() => import('@/pages/InterviewQuestionsPage'));
const CodeEditorPage = lazy(() => import('@/pages/CodeEditorPage'));

const RouteFallback = () => {
  const { t } = useI18n();
  return (
    <div
      className="flex min-h-[50vh] items-center justify-center gap-2.5 text-sm text-muted-foreground"
      role="status"
      aria-live="polite"
    >
      <Loader2
        className="h-5 w-5 shrink-0 animate-spin text-muted-foreground motion-reduce:animate-none"
        aria-hidden
      />
      <span>{t('common.loading')}</span>
    </div>
  );
};

const DocsDesktopSidebarToggle = ({ collapsed, onToggle }: { collapsed: boolean; onToggle: () => void }) => {
  const { t } = useI18n();
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          type="button"
          variant="secondary"
          size="icon"
          onClick={onToggle}
          aria-label={collapsed ? t('docs.showSidebar') : t('docs.hideSidebar')}
          className={cn(
            'fixed z-60 h-10 w-10 rounded-full border border-border/50 bg-card/90 shadow-md backdrop-blur-sm',
            'docs-desktop-sidebar-toggle',
            'hidden md:inline-flex',
            /** NavBar: sticky top-2 + h-14 — sit just under it, outside scroll layout. */
            'top-[calc(0.5rem+3.5rem+max(0px,env(safe-area-inset-top))+0.5rem)] right-[max(1rem,env(safe-area-inset-right))] sm:right-6'
          )}
        >
          {collapsed ? <PanelLeftOpen className="h-4 w-4" /> : <PanelLeftClose className="h-4 w-4" />}
        </Button>
      </TooltipTrigger>
      <TooltipContent side="left">{collapsed ? t('docs.showSidebar') : t('docs.hideSidebar')}</TooltipContent>
    </Tooltip>
  );
};

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [docsSidebarCollapsed, setDocsSidebarCollapsed] = useState(true);
  const location = useLocation();
  const showSidebar = location.pathname.startsWith('/docs/');
  const contentViewportRef = useRef<HTMLDivElement>(null);

  const docsCategoryScrollRef = useRef<string | null>(null);

  useEffect(() => {
    const el = contentViewportRef.current;
    const m = location.pathname.match(/^\/docs\/([^/]+)\//);
    const docsCat = m?.[1];

    if (docsCat !== undefined && docsCat === docsCategoryScrollRef.current) {
      /** Same docs category — slug swaps (replaceState) must not snap the feed back to scroll top. */
      return;
    }

    /**
     * Only in-feed / observer-driven navigation sets `location.state.docsScroll === 'preserve'`.
     * Sidebar / landing / search use `reset` (or default). Adjacent catalog indices (e.g. html→css)
     * are *not* implicitly “chain” — without this, sidebar jumps kept the old scroll position.
     */
    if (isDocsPreserveScrollState(location.state)) {
      docsCategoryScrollRef.current = docsCat ?? null;
      return;
    }

    docsCategoryScrollRef.current = docsCat ?? null;

    if (el) el.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    else window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location.pathname, location.search, location.state]);

  return (
    <DocsFeedSyncProvider>
      <ScrollViewportProvider value={contentViewportRef}>
        <div className="min-h-dvh h-dvh overflow-hidden bg-background">
          <NavBar setSidebarOpen={setSidebarOpen} />

          <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
            <SheetContent side="left" className="w-[88vw] max-w-sm p-0 border-r border-border/40">
              <ScrollArea className="h-full">
                <Routes location={location}>
                  <Route
                    path="/docs/:categoryId/:slug"
                    element={<SidebarWrapperMobile close={() => setSidebarOpen(false)} />}
                  />
                </Routes>
              </ScrollArea>
            </SheetContent>
          </Sheet>

          <div className="h-[calc(100dvh-3.5rem-env(safe-area-inset-top))] min-h-0 flex">
            {showSidebar && (
              <DocsDesktopSidebarToggle
                collapsed={docsSidebarCollapsed}
                onToggle={() => setDocsSidebarCollapsed((prev) => !prev)}
              />
            )}
            {showSidebar && (
              <aside
                className={cn(
                  'hidden md:block h-full my-4 rounded-md border border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/80 shrink-0 transition-all duration-200 ease-in-out',
                  docsSidebarCollapsed
                    ? 'mx-0 w-0 overflow-hidden border-r-0 pointer-events-none'
                    : 'mx-2 w-64 lg:w-72 border-r border-border/40'
                )}
                aria-hidden={docsSidebarCollapsed}
              >
                <Routes location={location}>
                  <Route path="/docs/:categoryId/:slug" element={<SidebarWrapperDesktop />} />
                </Routes>
              </aside>
            )}

            <main className="flex-1 overflow-hidden">
              <ScrollArea
                className="h-full"
                viewportRef={contentViewportRef}
                viewportClassName={showSidebar ? 'docs-feed-scroll scroll-pt-2 scroll-pb-4' : undefined}
              >
                <div className="mx-auto w-full max-w-7xl py-6 sm:py-8 lg:py-10 text-foreground ps-[max(0.75rem,env(safe-area-inset-left))] pe-[max(0.75rem,env(safe-area-inset-right))] sm:ps-6 sm:pe-6 lg:ps-8 lg:pe-8 pb-[max(1.5rem,env(safe-area-inset-bottom))] sm:pb-8 lg:pb-10">
                  <Suspense fallback={<RouteFallback />}>
                    <Routes location={location}>
                      <Route path="/" element={<LandingPage />} />
                      <Route path="/docs/:categoryId/:slug" element={<DocumentationPage />} />
                      <Route path="/terms" element={<TermsOfServicePage />} />
                      <Route path="/interview-questions/:topicId?" element={<InterviewQuestionsPage />} />
                      <Route path="/code-editor" element={<CodeEditorPage />} />
                    </Routes>
                  </Suspense>
                </div>
              </ScrollArea>
            </main>
          </div>
        </div>
      </ScrollViewportProvider>
    </DocsFeedSyncProvider>
  );
};
export default App;
