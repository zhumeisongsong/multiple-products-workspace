import {
  UserTask,
  UserTasksRepository,
  UserTaskStatusEnum,
} from '@user-tasks/domain';

import { LocalStorageRepository } from './local-storage.repository';

const USER_TASKS_KEY = 'user-tasks';

export class UserTasksRepositoryImpl implements UserTasksRepository {
  constructor(
    private readonly localStorageRepository: LocalStorageRepository,
  ) {}

  findManyUserTasks(
    userId: string,
    filter?: {
      dateRange?: {
        startedAt: string;
        endedAt: string;
      };
    },
  ): Promise<UserTask[]> {
    const allUserTasks = this.localStorageRepository.get(USER_TASKS_KEY) || [];

    if (filter?.dateRange?.startedAt && filter?.dateRange?.endedAt) {
      const startDate = new Date(filter.dateRange.startedAt);
      const endDate = new Date(filter.dateRange.endedAt);

      const filteredUserTasks = allUserTasks.filter(
        (userTask: UserTask) =>
          new Date(userTask.createdAt) >= startDate &&
          new Date(userTask.createdAt) <= endDate,
      );

      return Promise.resolve(filteredUserTasks);
    }

    return Promise.resolve(allUserTasks);
  }

  createUserTasks(userTasks: UserTask[]): Promise<void> {
    const allUserTasks = this.localStorageRepository.get(USER_TASKS_KEY) || [];
    this.localStorageRepository.set(USER_TASKS_KEY, [
      ...allUserTasks,
      ...userTasks,
    ]);

    return Promise.resolve();
  }

  updateUserTaskStatus(
    userTaskId: string,
    status: UserTaskStatusEnum,
  ): Promise<void> {
    const allUserTasks = this.localStorageRepository.get(USER_TASKS_KEY) || [];

    const updatedUserTasks = allUserTasks.map((userTask: UserTask) => {
      if (userTask.id === userTaskId) {
        return { ...userTask, status };
      }
      return userTask;
    });

    this.localStorageRepository.set(USER_TASKS_KEY, updatedUserTasks);

    return Promise.resolve();
  }
}
