import { Suspense, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { PanelLeftClose, PanelLeftOpen } from 'lucide-react';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { useI18n } from '@/i18n/I18nProvider';
import { ScrollViewportProvider } from '@/context/scrollViewportContext';
import { DocsFeedSyncProvider } from '@/context/docsFeedSyncContext';
import { useAppLayoutStore } from '@/stores';
import { isDocsPreserveScrollState } from '@/lib/docsLocationState';
import NavBar from '@/components/layout/NavBar';
import { docsSidePanelWidthClass } from '@/constants/docsSidePanel';
import {
  DocsSidebarDesktopRoutes,
  DocsSidebarMobileRoutes,
  isDocsRoute,
  MainAppRoutes,
  RouteFallback,
} from '@/app/routes';

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
  const mobileSidebarOpen = useAppLayoutStore((s) => s.mobileSidebarOpen);
  const setMobileSidebarOpen = useAppLayoutStore((s) => s.setMobileSidebarOpen);
  const docsSidebarCollapsed = useAppLayoutStore((s) => s.docsSidebarCollapsed);
  const toggleDocsSidebarCollapsed = useAppLayoutStore((s) => s.toggleDocsSidebarCollapsed);
  const location = useLocation();
  const showSidebar = isDocsRoute(location.pathname);
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

  const closeSidebar = () => setMobileSidebarOpen(false);

  return (
    <DocsFeedSyncProvider>
      <ScrollViewportProvider value={contentViewportRef}>
        <div className="relative min-h-dvh h-dvh overflow-hidden overscroll-none bg-background max-w-[100vw]">
          <NavBar />

          <Sheet open={mobileSidebarOpen} onOpenChange={setMobileSidebarOpen}>
            <SheetContent
              side="left"
              className={cn(
                'gap-0 p-0 border-r border-border/40 flex flex-col min-h-0',
                /** Full usable height on mobile — single scroll surface lives inside SidebarContent */
                'h-dvh max-h-dvh w-[min(92vw,20rem)] max-w-sm',
                /** Clear device notches / home indicator; avoid clipping the fixed close affordance area */
                'pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)] ps-[env(safe-area-inset-left)]'
              )}
            >
              <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
                <DocsSidebarMobileRoutes location={location} closeSidebar={closeSidebar} />
              </div>
            </SheetContent>
          </Sheet>

          <div className="box-border flex min-h-0 h-[calc(100dvh-3.5rem-env(safe-area-inset-top))] flex-nowrap gap-3 overflow-x-hidden overscroll-none px-3 py-4 sm:px-4">
            {showSidebar && (
              <DocsDesktopSidebarToggle collapsed={docsSidebarCollapsed} onToggle={toggleDocsSidebarCollapsed} />
            )}
            {showSidebar && (
              <aside
                className={cn(
                  'hidden md:flex md:flex-col min-h-0 max-h-none overflow-hidden rounded-xl border bg-background/95 shadow-sm backdrop-blur supports-backdrop-filter:bg-background/80 transition-[width,min-width,max-width,opacity,padding,border-color] duration-200 ease-in-out',
                  docsSidebarCollapsed
                    ? 'w-0 min-w-0 max-w-0 shrink-0 border-transparent p-0 opacity-0 pointer-events-none'
                    : cn(docsSidePanelWidthClass, 'h-full border-border/40 opacity-100')
                )}
                aria-hidden={docsSidebarCollapsed}
              >
                <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
                  <DocsSidebarDesktopRoutes location={location} />
                </div>
              </aside>
            )}

            <main className="min-h-0 flex-1 min-w-0 overflow-hidden">
              <ScrollArea
                className="h-full min-h-0"
                viewportRef={contentViewportRef}
                viewportClassName={showSidebar ? 'docs-feed-scroll scroll-pt-2 scroll-pb-4' : undefined}
              >
                <div className="mx-auto w-full min-w-0 max-w-7xl py-6 sm:py-8 lg:py-10 text-foreground ps-[max(0.75rem,env(safe-area-inset-left))] pe-[max(0.75rem,env(safe-area-inset-right))] sm:ps-6 sm:pe-6 lg:ps-8 lg:pe-8 pb-[max(1.5rem,env(safe-area-inset-bottom))] sm:pb-8 lg:pb-10">
                  <Suspense fallback={<RouteFallback />}>
                    <MainAppRoutes location={location} />
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
