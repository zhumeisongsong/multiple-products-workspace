import { UserTask } from '@user-tasks/domain';
import { proxy } from 'valtio';

export type UserTasksStates = {
  currentMonthUserTasks: UserTask[];
  historyUserTasks: UserTask[];
  selectedUserTaskId: string | null;
  isLoading: boolean;
};

export const userTasksStates = proxy<UserTasksStates>({
  currentMonthUserTasks: [],
  historyUserTasks: [],
  selectedUserTaskId: null,
  isLoading: false,
});

export const userTaskActions = {
  setCurrentMonthUserTasks: (userTasks: UserTask[]) => {
    userTasksStates.currentMonthUserTasks = userTasks;
  },
  setHistoryUserTasks: (userTasks: UserTask[]) => {
    userTasksStates.historyUserTasks = userTasks;
  },
  selectUserTask: (userTaskId: string) => {
    userTasksStates.selectedUserTaskId = userTaskId;
  },
  setIsLoading: () => {
    userTasksStates.isLoading = true;
  },
  setIsLoadingFinished: () => {
    userTasksStates.isLoading = false;
  },
};
