import { Moon, Sun } from 'lucide-react';
import { useCallback } from 'react';

import { useTheme } from '../theme-provider';
import { Button } from './button';

export function ThemeModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }, [theme, setTheme]);

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme}>
      <Moon
        strokeWidth={3}
        // size={88}
        className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 "
      />
      <Sun
        strokeWidth={3}
        // size={88}
        className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
      />
      {/* Make content visible only to screen readers while hiding it visually from sighted users.  */}
      {/* This is an important accessibility (a11y) feature. */}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
