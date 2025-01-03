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

  getUserTasks(filter?: {
    startedAt: Date;
    endedAt: Date;
  }): Promise<UserTask[]> {
    const allUserTasks = this.localStorageRepository.get(USER_TASKS_KEY) || [];

    if (!filter) {
      return Promise.resolve(allUserTasks);
    }

    const filteredUserTasks = allUserTasks.filter(
      (userTask: UserTask) =>
        new Date(userTask.createdAt) >= filter.startedAt &&
        new Date(userTask.createdAt) <= filter.endedAt,
    );

    return Promise.resolve(filteredUserTasks);
  }

  createUserTasks(userTasks: UserTask[]): Promise<void> {
    this.localStorageRepository.set(USER_TASKS_KEY, userTasks);

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
