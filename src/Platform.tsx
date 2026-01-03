import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { X } from 'lucide-react';

import Footer from './components/Layout/Footer';
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
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <NavBar setSidebarOpen={setSidebarOpen} />

      {/* ================= MOBILE SIDEBAR ================= */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/60 dark:bg-black/70 backdrop-blur-sm"
            onClick={() => setSidebarOpen(false)}
          />

          {/* Drawer */}
          <div
            className="
              fixed left-0 top-0 bottom-0 w-80
              bg-white dark:bg-slate-900
              border-r border-slate-200 dark:border-slate-800
              shadow-2xl dark:shadow-none
              animate-slide-in
            "
          >
            {/* Close */}
            <div className="absolute top-4 right-4 z-10">
              <button
                onClick={() => setSidebarOpen(false)}
                className="
                  p-2 rounded-lg transition-colors
                  hover:bg-slate-100 dark:hover:bg-slate-800
                  text-slate-700 dark:text-slate-200
                "
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <Routes>
              <Route
                path="/docs/:categoryId/:slug"
                element={<SidebarWrapperMobile close={() => setSidebarOpen(false)} />}
              />
            </Routes>
          </div>
        </div>
      )}

      {/* ================= MAIN LAYOUT ================= */}
      <div className="mx-auto flex">
        {/* Desktop Sidebar */}
        {showSidebar && (
          <aside
            className="
              hidden md:block w-80 fixed left-0 top-16 bottom-0
              bg-white dark:bg-slate-900
              border-r border-slate-200 dark:border-slate-800
              overflow-y-auto
              shadow-lg dark:shadow-none
            "
          >
            <Routes>
              <Route path="/docs/:categoryId/:slug" element={<SidebarWrapperDesktop />} />
            </Routes>
          </aside>
        )}

        {/* Content */}
        <main className={`flex-1 ${showSidebar ? 'md:ml-80' : ''}`}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 text-slate-900 dark:text-slate-100">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/docs/:categoryId/:slug" element={<DocumentationPage />} />
              <Route path="/terms" element={<TermsOfServicePage />} />
            </Routes>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
