import {
  UserTask,
  UserTasksRepository,
  UserTaskStatusEnum,
} from '@user-tasks/domain';

export class UserTasksService {
  constructor(private readonly userTasksRepository: UserTasksRepository) {}

  async findManyUserTasks(
    userId: string,
    filter?: {
      dateRange: {
        startedAt: Date;
        endedAt: Date;
      };
    },
  ): Promise<UserTask[]> {
    const dateRange =
      filter?.dateRange?.startedAt && filter?.dateRange?.endedAt
        ? {
            startedAt: filter.dateRange.startedAt.toISOString(),
            endedAt: filter.dateRange.endedAt.toISOString(),
          }
        : undefined;

    return await this.userTasksRepository.findManyUserTasks(userId, {
      dateRange: dateRange,
    });
  }

  async createManyUserTasks(userTasks: UserTask[]) {
    return await this.userTasksRepository.createUserTasks(userTasks);
  }

  async updateUserTaskStatus(userTaskId: string, status: UserTaskStatusEnum) {
    return await this.userTasksRepository.updateUserTaskStatus(
      userTaskId,
      status,
    );
  }
}
