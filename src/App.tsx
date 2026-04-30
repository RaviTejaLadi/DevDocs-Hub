import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import NavBar from './components/Layout/NavBar';
import SidebarWrapperMobile from './components/Layout/SidebarWrapperMobile';
import SidebarWrapperDesktop from './components/Layout/SidebarWrapperDesktop';
import LandingPage from './pages/LandingPage';
import DocumentationPage from './pages/DocumentationPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import InterviewQuestionsPage from './pages/InterviewQuestionsPage';

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [docsSidebarCollapsed, setDocsSidebarCollapsed] = useState(false);
  const location = useLocation();
  const showSidebar = location.pathname.startsWith('/docs/');

  return (
    <div className="min-h-dvh h-dvh overflow-hidden bg-background">
      <NavBar setSidebarOpen={setSidebarOpen} />

      <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
        <SheetContent side="left" className="w-[88vw] max-w-sm p-0 border-r border-border/40">
          <ScrollArea className="h-full">
            <Routes>
              <Route
                path="/docs/:categoryId/:slug"
                element={<SidebarWrapperMobile close={() => setSidebarOpen(false)} />}
              />
            </Routes>
          </ScrollArea>
        </SheetContent>
      </Sheet>

      <div className="h-[calc(100dvh-3.5rem)] flex">
        {/* Desktop Sidebar with ScrollArea */}
        {showSidebar && (
          <aside
            className={cn(
              'hidden md:block h-full bg-card/30 shrink-0 transition-all duration-200 ease-in-out',
              docsSidebarCollapsed
                ? 'w-0 overflow-hidden border-r-0 pointer-events-none'
                : 'w-64 lg:w-72 border-r border-border/40'
            )}
            aria-hidden={docsSidebarCollapsed}
          >
            <Routes>
              <Route path="/docs/:categoryId/:slug" element={<SidebarWrapperDesktop />} />
            </Routes>
          </aside>
        )}

        <main className="flex-1 overflow-hidden">
          <ScrollArea className="h-full">
            <div className="mx-auto w-full max-w-7xl px-3 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10 text-foreground">
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route
                  path="/docs/:categoryId/:slug"
                  element={
                    <DocumentationPage
                      isSidebarCollapsed={docsSidebarCollapsed}
                      onToggleSidebar={() => setDocsSidebarCollapsed((prev) => !prev)}
                    />
                  }
                />
                <Route path="/terms" element={<TermsOfServicePage />} />
                <Route path="/interview-questions/:topicId?" element={<InterviewQuestionsPage />} />
              </Routes>
            </div>
          </ScrollArea>
        </main>
      </div>
    </div>
  );
};
export default App;
