import { TasksServiceFactory } from '@tasks/application';
import {
  createCurrentMonthUserTasksUseCase,
  getMonthlyUserTasksUseCase,
  updateUserTaskStatusUseCase,
  UserTasksServiceFactory,
} from '@user-tasks/application';
import { UserTask, UserTaskStatusEnum } from '@user-tasks/domain';
import { UserPreferences } from '@users/domain';
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
  getCurrentMonthUserTasks: async (
    userId: string,
    userPreferences: UserPreferences,
  ) => {
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    const userTasks = await getMonthlyUserTasksUseCase(
      '', // TODO: get user id from access token
      month,
      year,
      UserTasksServiceFactory.getInstance(),
    );

    if (userTasks.length === 0) {
      await createCurrentMonthUserTasksUseCase(
        userId,
        userPreferences,
        UserTasksServiceFactory.getInstance(),
        TasksServiceFactory.getInstance(),
      );
      const createdUserTasks = await getMonthlyUserTasksUseCase(
        userId,
        month,
        year,
        UserTasksServiceFactory.getInstance(),
      );

      userTasksStates.currentMonthUserTasks = createdUserTasks;
    } else {
      userTasksStates.currentMonthUserTasks = userTasks;
    }
  },
  updateUserTaskStatus: async (
    userTaskId: string,
    status: UserTaskStatusEnum,
  ) => {
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
