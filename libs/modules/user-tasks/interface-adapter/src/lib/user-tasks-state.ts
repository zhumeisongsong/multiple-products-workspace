import { UserTaskEntity } from '@user-tasks/domain';
import { proxy } from 'valtio';
export type UserTasksState = {
  currentMonthUserTasks: UserTaskEntity[];
  historyUserTasks: UserTaskEntity[];
  selectedUserTaskId: string | null;
  isLoading: boolean;
};

export const userTasksState = proxy<UserTasksState>({
  currentMonthUserTasks: [],
  historyUserTasks: [],
  selectedUserTaskId: null,
  isLoading: false,
});

export const userTaskActions = {
  setCurrentMonthUserTasks: (userTasks: UserTaskEntity[]) => {
    userTasksState.currentMonthUserTasks = userTasks;
  },
  setHistoryUserTasks: (userTasks: UserTaskEntity[]) => {
    userTasksState.historyUserTasks = userTasks;
  },
  selectUserTask: (userTaskId: string) => {
    userTasksState.selectedUserTaskId = userTaskId;
  },
  setIsLoading: (isLoading: boolean) => {
    userTasksState.isLoading = isLoading;
  },
};
