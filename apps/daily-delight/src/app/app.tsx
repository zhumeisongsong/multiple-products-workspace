import { useUsers } from '@users/interface-adapter';
import { Route, Routes } from 'react-router-dom';

import { TaskPage } from '../pages/task-page';
import { AchievementsPage } from '../pages/achievements-page';
import { LoginPage } from '../pages/login-page';
import { AboutPage } from '../pages/about-page';
import { useEffect } from 'react';

export const App: React.FC = () => {
  const { me, getMe } = useUsers();

  useEffect(() => {
    if (!me) {
      getMe();
    }
  }, [me, getMe]);

  console.log(me);

  return (
    <Routes>
      <Route index element={<TaskPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/achievements" element={<AchievementsPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
};

export default App;
