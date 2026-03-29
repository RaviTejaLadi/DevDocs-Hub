import { useEffect, useState } from 'react';
import { ThemeProviderContext } from './ThemeProviderContext';

export type Theme = 'dark' | 'light' | 'system';

export type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

export type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'vite-ui-theme',
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => (localStorage.getItem(storageKey) as Theme) || defaultTheme);

  useEffect(() => {
    const root = window.document.documentElement;
    const body = window.document.body;
    const resolvedTheme =
      theme === 'system' ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light') : theme;

    // Keep switching atomic to prevent flicker-heavy routes (docs/markdown) from flashing.
    root.classList.add('theme-switching');
    body.classList.add('theme-switching');
    root.classList.remove('light');
    root.classList.toggle('dark', resolvedTheme === 'dark');
    root.style.colorScheme = resolvedTheme;

    let raf1 = 0;
    let raf2 = 0;
    raf1 = window.requestAnimationFrame(() => {
      raf2 = window.requestAnimationFrame(() => {
        root.classList.remove('theme-switching');
        body.classList.remove('theme-switching');
      });
    });

    return () => {
      window.cancelAnimationFrame(raf1);
      window.cancelAnimationFrame(raf2);
      root.classList.remove('theme-switching');
      body.classList.remove('theme-switching');
    };
  }, [theme]);

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}
