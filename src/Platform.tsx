import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';
import NavBar from './components/Layout/NavBar';
import SidebarWrapperMobile from './components/Layout/SidebarWrapperMobile';
import SidebarWrapperDesktop from './components/Layout/SidebarWrapperDesktop';
import LandingPage from './pages/LandingPage';
import DocumentationPage from './pages/DocumentationPage';
import TermsOfServicePage from './pages/TermsOfServicePage';

export default function Platform() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const showSidebar = location.pathname.startsWith('/docs/');

  return (
    <div className="h-screen overflow-hidden bg-slate-50 dark:bg-slate-950">
      <NavBar setSidebarOpen={setSidebarOpen} />

      <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
        <SheetContent side="left" className="w-80 p-0 border-slate-200 dark:border-slate-800">
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

      <div className="h-[calc(100vh-3rem)] flex">
        {/* Desktop Sidebar with ScrollArea */}
        {showSidebar && (
          <aside
            className="
              hidden md:block w-80
              border-r border-slate-200 dark:border-slate-800
              shadow-lg dark:shadow-none
              bg-white dark:bg-slate-950
            "
          >
            <ScrollArea className="h-full">
              <Routes>
                <Route path="/docs/:categoryId/:slug" element={<SidebarWrapperDesktop />} />
              </Routes>
            </ScrollArea>
          </aside>
        )}

        <main className="flex-1 overflow-hidden">
          <ScrollArea className="h-full">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 text-slate-900 dark:text-slate-100">
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/docs/:categoryId/:slug" element={<DocumentationPage />} />
                <Route path="/terms" element={<TermsOfServicePage />} />
              </Routes>
            </div>
          </ScrollArea>
        </main>
      </div>
    </div>
  );
}
