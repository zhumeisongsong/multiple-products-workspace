import { Navigation } from './navigation';

type Props = {
  children: React.ReactNode;
};

export const PageContainer: React.FC<Props> = ({ children }) => {

  return (
    <div className="h-screen">
      <Navigation />
      <main className="max-w-screen-lg mx-auto px-4">{children}</main>
    </div>
  );
};
