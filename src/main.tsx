import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { ThemeProvider } from '@/components/theme/theme-provider';
import { BrowserRouter } from 'react-router-dom';
import App from '@/app/App';
import { I18nProvider } from './i18n/I18nProvider';
import { TooltipProvider } from './components/ui/tooltip';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <TooltipProvider delayDuration={200}>
        <I18nProvider>
          <ThemeProvider defaultTheme="dark" storageKey="revise-stack-ui-theme">
            <App />
          </ThemeProvider>
        </I18nProvider>
      </TooltipProvider>
    </BrowserRouter>
  </StrictMode>
);
