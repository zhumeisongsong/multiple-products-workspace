import { ThemeModeToggle } from '@shared/ui/theme-mode-toggle';
import { Sprout } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Navigation: React.FC = () => {
  return (
    <header className="h-16 flex items-center justify-between">
      <div className="max-w-screen-md w-full mx-auto px-4 flex justify-between items-center">
        <Link to="/">
          <div className="flex items-center gap-2">
            <Sprout strokeWidth={1.7} />
            <div className="text-lg font-bold">Daily Delight</div>
          </div>
        </Link>

        <ThemeModeToggle />
      </div>
    </header>
  );
};
