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
  getCurrentMonthUserTasks: async (userPreferences: UserPreferences) => {
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    const userTasks = await getMonthlyUserTasksUseCase(
      '', // TODO: get user id from access token
      month,
      year,
      UserTasksServiceFactory.getInstance(),
    );

    if (userTasks.length === 0) {
      const createdUserTasks = await createCurrentMonthUserTasksUseCase(
        userPreferences,
        UserTasksServiceFactory.getInstance(),
      );

      return (userTasksStates.currentMonthUserTasks = createdUserTasks);
    }

    return (userTasksStates.currentMonthUserTasks = userTasks);
  },
  updateUserTaskStatus: async (
    userTaskId: string,
    status: UserTaskStatusEnum,
  ) => {
    await updateUserTaskStatusUseCase(
      userTaskId,
      status,
      UserTasksServiceFactory.getInstance(),
    );

    return (userTasksStates.currentMonthUserTasks =
      userTasksStates.currentMonthUserTasks.map((userTask) =>
        userTask.id === userTaskId ? { ...userTask, status } : userTask,
      ));
  },
  getHistoryUserTasks: async (month: number, year: number) => {
    const userTasks = await getMonthlyUserTasksUseCase(
      '', // TODO: get user id from access token
      month,
      year,
      UserTasksServiceFactory.getInstance(),
    );

    return (userTasksStates.historyUserTasks = userTasks);
  },
  selectUserTask: (userTaskId: string) => {
    return (userTasksStates.selectedUserTaskId = userTaskId);
  },
  unselectUserTask: () => {
    return (userTasksStates.selectedUserTaskId = null);
  },
};
