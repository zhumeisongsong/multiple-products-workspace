import { useSnapshot } from 'valtio';

import { userTasksState, userTaskActions } from './user-tasks-state';

// hooks
export function useUserTasks() {
  const snapshot = useSnapshot(userTasksState);

  return {
    currentMonthUserTasks: snapshot.currentMonthUserTasks,
    historyUserTasks: snapshot.historyUserTasks,
    selectedUserTaskId: snapshot.selectedUserTaskId,
    isLoading: snapshot.isLoading,
    ...userTaskActions,
  };
}
