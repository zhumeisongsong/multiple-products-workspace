import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

type ThemeProviderProps = {
  children: React.ReactNode;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const initialTheme = 'light';
const initialState: ThemeProviderState = {
  theme: initialTheme,
  setTheme: () => null,
};
const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  storageKey = 'ui-theme',
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    // Initialize theme state with the value from localStorage or default theme
    () => {
      try {
        const storedTheme = localStorage.getItem(storageKey) as Theme;

        if (!storedTheme) {
          const theme = window.matchMedia('(prefers-color-scheme: dark)')
            .matches
            ? 'dark'
            : 'light';

          localStorage.setItem(storageKey, theme);

          return theme;
        }

        return storedTheme;
      } catch (e) {
        return initialTheme;
      }
    },
  );

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove('light', 'dark');

    root.classList.add(theme);

    try {
      localStorage.setItem(storageKey, theme);
    } catch (e) {
      console.warn('Failed to save theme preference:', e);
    }
  }, [theme]);

  const value = {
    theme,
    setTheme,
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error('useTheme must be used within a ThemeProvider');

  return context;
};
