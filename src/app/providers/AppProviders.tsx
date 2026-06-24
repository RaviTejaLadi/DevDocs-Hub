import type { ReactNode } from 'react';
import { StrictMode } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@/components/theme/theme-provider';
import { TooltipProvider } from '@/components/ui/tooltip';

type AppProvidersProps = {
  children: ReactNode;
};

const AppProviders = ({ children }: AppProvidersProps) => (
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <TooltipProvider delayDuration={200}>
          <ThemeProvider defaultTheme="dark" storageKey="revise-stack-ui-theme">
            {children}
          </ThemeProvider>
        </TooltipProvider>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);

export default AppProviders;
