import { Suspense, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { PanelLeftOpen } from 'lucide-react';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { ScrollViewportProvider } from '@/context/scrollViewportContext';
import { useAppLayoutStore } from '@/stores';
import NavBar from '@/components/layout/NavBar';
import { Sidebar, SidebarProvider } from '@/components/ui/sidebar';
import {
  docsControlShadowClass,
  docsMainContentPaddingClass,
  docsShellLayoutClass,
  docsSidePanelAsideClass,
  docsSidePanelWidthClass,
} from '@/constants/docsSidePanel';
import {
  DocsSidebarDesktopRoutes,
  DocsSidebarMobileRoutes,
  isDocsRoute,
  MainAppRoutes,
  RouteFallback,
} from '@/app/routes';

const App = () => {
  const mobileSidebarOpen = useAppLayoutStore((s) => s.mobileSidebarOpen);
  const setMobileSidebarOpen = useAppLayoutStore((s) => s.setMobileSidebarOpen);
  const docsSidebarCollapsed = useAppLayoutStore((s) => s.docsSidebarCollapsed);
  const setDocsSidebarCollapsed = useAppLayoutStore((s) => s.setDocsSidebarCollapsed);
  const toggleDocsSidebarCollapsed = useAppLayoutStore((s) => s.toggleDocsSidebarCollapsed);
  const location = useLocation();
  const showSidebar = isDocsRoute(location.pathname);
  const contentViewportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = contentViewportRef.current;
    if (el) el.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    else window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location.pathname, location.search]);

  const closeSidebar = () => setMobileSidebarOpen(false);

  const docsShell = (
    <div
      className={cn(
        'box-border flex min-h-0 h-[calc(100dvh-3.5rem-env(safe-area-inset-top))] flex-nowrap overflow-x-hidden overscroll-none',
        showSidebar ? docsShellLayoutClass : 'gap-0 px-3 py-4 sm:px-4'
      )}
    >
      {showSidebar && docsSidebarCollapsed && (
        <div className="hidden shrink-0 md:flex md:items-start">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={toggleDocsSidebarCollapsed}
                aria-label={'Show sidebar'}
                className={cn(
                  'size-9 rounded-lg border-border/40 bg-card/80 hover:bg-accent/50',
                  docsControlShadowClass
                )}
              >
                <PanelLeftOpen className="size-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">{'Show sidebar'}</TooltipContent>
          </Tooltip>
        </div>
      )}
      {showSidebar && !docsSidebarCollapsed && (
        <Sidebar
          collapsible="none"
          variant="floating"
          className={cn(
            'hidden h-full shrink-0 bg-transparent p-0 shadow-none md:flex',
            docsSidePanelWidthClass,
            docsSidePanelAsideClass
          )}
        >
          <DocsSidebarDesktopRoutes location={location} />
        </Sidebar>
      )}

      <main className="min-h-0 flex-1 min-w-0 overflow-hidden">
        <ScrollArea
          className="h-full min-h-0"
          viewportRef={contentViewportRef}
          viewportClassName={showSidebar ? 'scroll-pt-2 scroll-pb-4' : undefined}
        >
          <div
            className={cn(
              'mx-auto w-full min-w-0 text-foreground',
              showSidebar
                ? docsMainContentPaddingClass
                : 'max-w-7xl py-6 sm:py-8 lg:py-10 ps-[max(0.75rem,env(safe-area-inset-left))] pe-[max(0.75rem,env(safe-area-inset-right))] sm:ps-6 sm:pe-6 lg:ps-8 lg:pe-8 pb-[max(1.5rem,env(safe-area-inset-bottom))] sm:pb-8 lg:pb-10'
            )}
          >
            <Suspense fallback={<RouteFallback />}>
              <MainAppRoutes location={location} />
            </Suspense>
          </div>
        </ScrollArea>
      </main>
    </div>
  );

  return (
    <ScrollViewportProvider value={contentViewportRef}>
      <div className="relative min-h-dvh h-dvh overflow-hidden overscroll-none bg-transparent dark:bg-background max-w-[100vw]">
        <NavBar />

        {showSidebar ? (
          <SidebarProvider
            open={!docsSidebarCollapsed}
            onOpenChange={(open) => setDocsSidebarCollapsed(!open)}
            className="flex min-h-0 flex-1 flex-col"
          >
            <Sheet open={mobileSidebarOpen} onOpenChange={setMobileSidebarOpen}>
              <SheetContent
                side="left"
                className={cn(
                  'gap-0 p-0 border-r border-sidebar-border flex flex-col min-h-0 bg-sidebar',
                  'h-dvh max-h-dvh w-[min(92vw,20rem)] max-w-sm',
                  'pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)] ps-[env(safe-area-inset-left)]'
                )}
              >
                <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
                  <DocsSidebarMobileRoutes location={location} closeSidebar={closeSidebar} />
                </div>
              </SheetContent>
            </Sheet>
            {docsShell}
          </SidebarProvider>
        ) : (
          <>
            <Sheet open={mobileSidebarOpen} onOpenChange={setMobileSidebarOpen}>
              <SheetContent
                side="left"
                className={cn(
                  'gap-0 p-0 border-r border-border/40 flex flex-col min-h-0',
                  'h-dvh max-h-dvh w-[min(92vw,20rem)] max-w-sm',
                  'pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)] ps-[env(safe-area-inset-left)]'
                )}
              >
                <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
                  <DocsSidebarMobileRoutes location={location} closeSidebar={closeSidebar} />
                </div>
              </SheetContent>
            </Sheet>
            {docsShell}
          </>
        )}
      </div>
    </ScrollViewportProvider>
  );
};
export default App;
