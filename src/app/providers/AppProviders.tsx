import type { ReactNode } from 'react';
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@/components/theme/theme-provider';
import { I18nProvider } from '@/i18n/I18nProvider';
import { TooltipProvider } from '@/components/ui/tooltip';

type AppProvidersProps = {
  children: ReactNode;
};

const AppProviders = ({ children }: AppProvidersProps) => (
  <StrictMode>
    <BrowserRouter>
      <TooltipProvider delayDuration={200}>
        <I18nProvider>
          <ThemeProvider defaultTheme="dark" storageKey="revise-stack-ui-theme">
            {children}
          </ThemeProvider>
        </I18nProvider>
      </TooltipProvider>
    </BrowserRouter>
  </StrictMode>
);

export default AppProviders;
