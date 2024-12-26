import { UserTask, UserTaskStatusEnum } from '@user-tasks/domain';

export class UserTasksService {
  async getUserTasksByUserId(
    userId: string,
    filter?: { startedAt: Date; endedAt: Date },
  ): Promise<UserTask[]> {
    // link to repository
    return [];
  }

  async generateUserTasks(prompt: string) {
    // link to repository
    return 'success';
  }

  updateUserTaskStatus(userTaskId: string, status: UserTaskStatusEnum) {
    // link to repository
    return 'success';
  }
}
