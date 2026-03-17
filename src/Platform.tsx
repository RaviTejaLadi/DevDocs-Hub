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
import InterviewQuestionsPage from './pages/InterviewQuestionsPage';

export default function Platform() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const showSidebar = location.pathname.startsWith('/docs/');

  return (
    <div className="h-screen overflow-hidden bg-background">
      <NavBar setSidebarOpen={setSidebarOpen} />

      <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
        <SheetContent side="left" className="w-80 p-0 border-r border-border">
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
          <aside className="hidden md:block w-72 h-[97%] border-r border-border bg-card/30 shrink-0">
            <Routes>
              <Route path="/docs/:categoryId/:slug" element={<SidebarWrapperDesktop />} />
            </Routes>
          </aside>
        )}

        <main className="flex-1 overflow-hidden">
          <ScrollArea className="h-full">
            <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 text-foreground">
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/docs/:categoryId/:slug" element={<DocumentationPage />} />
                <Route path="/terms" element={<TermsOfServicePage />} />
                <Route path="/interview-questions/:topicId?" element={<InterviewQuestionsPage />} />
              </Routes>
            </div>
          </ScrollArea>
        </main>
      </div>
    </div>
  );
}
