import { useSnapshot } from 'valtio';

import { userTasksStates, userTaskActions } from './user-tasks-states';

// hooks
export function useUserTasks() {
  const snapshot = useSnapshot(userTasksStates);

  return {
    currentMonthUserTasks: snapshot.currentMonthUserTasks,
    historyUserTasks: snapshot.historyUserTasks,
    selectedUserTaskId: snapshot.selectedUserTaskId,
    isLoading: snapshot.isLoading,
    ...userTaskActions,
  };
}
