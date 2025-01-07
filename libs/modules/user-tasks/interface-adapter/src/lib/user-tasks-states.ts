import {
  getMonthlyUserTasksUseCase,
  updateUserTaskStatusUseCase,
  UserTasksServiceFactory,
} from '@user-tasks/application';
import { UserTask, UserTaskStatusEnum } from '@user-tasks/domain';
import { proxy } from 'valtio';

export type UserTasksStates = {
  currentMonthUserTasks: UserTask[];
  historyUserTasks: UserTask[];
  selectedUserTaskId: string | null;
};

export const userTasksStates = proxy<UserTasksStates>({
  currentMonthUserTasks: [],
  historyUserTasks: [],
  selectedUserTaskId: null,
});

export const userTaskActions = {
  getCurrentMonthUserTasks: async () => {
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    const userTasks = await getMonthlyUserTasksUseCase(
      '', // TODO: get user id from access token
      month,
      year,
      UserTasksServiceFactory.getInstance(),
    );
    userTasksStates.currentMonthUserTasks = userTasks;
  },
  updateUserTaskStatus: async (userTaskId: string, status: UserTaskStatusEnum) => {
    userTasksStates.currentMonthUserTasks =
      userTasksStates.currentMonthUserTasks.map((userTask) =>
        userTask.id === userTaskId ? { ...userTask, status } : userTask,
      );

    await updateUserTaskStatusUseCase(
      userTaskId,
      status,
      UserTasksServiceFactory.getInstance(),
    );
  },
  getHistoryUserTasks: async (month: number, year: number) => {
    const userTasks = await getMonthlyUserTasksUseCase(
      '', // TODO: get user id from access token
      month,
      year,
      UserTasksServiceFactory.getInstance(),
    );

    userTasksStates.historyUserTasks = userTasks;
  },
  selectUserTask: (userTaskId: string) => {
    userTasksStates.selectedUserTaskId = userTaskId;
  },
  unselectUserTask: () => {
    userTasksStates.selectedUserTaskId = null;
  },
};
