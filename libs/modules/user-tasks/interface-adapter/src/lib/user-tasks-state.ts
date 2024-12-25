import { UserTask } from '@user-tasks/domain';
import { proxy } from 'valtio';

export type UserTasksState = {
  currentMonthUserTasks: UserTask[];
  historyUserTasks: UserTask[];
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
  setCurrentMonthUserTasks: (userTasks: UserTask[]) => {
    userTasksState.currentMonthUserTasks = userTasks;
  },
  setHistoryUserTasks: (userTasks: UserTask[]) => {
    userTasksState.historyUserTasks = userTasks;
  },
  selectUserTask: (userTaskId: string) => {
    userTasksState.selectedUserTaskId = userTaskId;
  },
  setIsLoading: () => {
    userTasksState.isLoading = true;
  },
  setIsLoadingFinished: () => {
    userTasksState.isLoading = false;
  },
};
