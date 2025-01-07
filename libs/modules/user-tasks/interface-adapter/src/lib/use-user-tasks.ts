import { useSnapshot } from 'valtio';

import { userTasksStates, userTaskActions } from './user-tasks-states';

export const useUserTasks = () => {
  const snapshot = useSnapshot(userTasksStates);

  return {
    currentMonthUserTasks: snapshot.currentMonthUserTasks,
    historyUserTasks: snapshot.historyUserTasks,
    selectedUserTaskId: snapshot.selectedUserTaskId,
    ...userTaskActions,
  };
};
