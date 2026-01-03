import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Platform from './Platform';
import { ThemeProvider } from './components/Theme/theme-provider';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider attribute="class" defaultTheme="dark" storageKey="dev-docs-hub-ui-theme">
        <Platform />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
