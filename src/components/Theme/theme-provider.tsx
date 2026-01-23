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

const softColorThemes = [
  'soft-pastel-dreams', // Sunday
  'soft-serene-neutrals', // Monday
  'soft-whispering-garden', // Tuesday
  'soft-gentle-sunset', // Wednesday
  'soft-nordic-calm', // Thursday
  'soft-lavender-dream', // Friday
  'soft-rose-garden', // Saturday
];

function getDailyTheme(): string {
  const dayOfWeek = new Date().getDay(); // 0 = Sunday, 1 = Monday, etc.
  return softColorThemes[dayOfWeek];
}

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'vite-ui-theme',
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => (localStorage.getItem(storageKey) as Theme) || defaultTheme);

  useEffect(() => {
    const root = window.document.documentElement;

    // Remove all theme classes
    root.classList.remove('light', 'dark', ...softColorThemes);

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      root.classList.add(systemTheme);

      // Add daily soft color theme only for light mode
      if (systemTheme === 'light') {
        root.classList.add(getDailyTheme());
      }
      return;
    }

    root.classList.add(theme);

    // Add daily soft color theme only for light mode
    if (theme === 'light') {
      root.classList.add(getDailyTheme());
    }
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
