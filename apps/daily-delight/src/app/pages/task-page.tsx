import { CurrentMonthTaskList } from '../components/current-month-task-list';
import { PageContainer } from '../components/page-container';
import { UserPreferencesSetting } from '../components/user-preferences-setting';

export const TaskPage: React.FC = () => {
  return (
    <PageContainer>
      <UserPreferencesSetting />
      <CurrentMonthTaskList />
    </PageContainer>
  );
};
