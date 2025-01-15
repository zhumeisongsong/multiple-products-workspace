import { UserTask } from '../entities/user-task.entity';
import { UserTaskStatusEnum } from '../value-objects/user-task-status.enum';

export interface UserTasksRepository {
  findManyUserTasks(
    userId: string,
    filter?: {
      dateRange?: {
        startedAt: string;
        endedAt: string;
      };
    },
  ): Promise<UserTask[]>;
  createManyUserTasks(userTasks: UserTask[]): Promise<void>;
  updateUserTaskStatus(
    userTaskId: string,
    status: UserTaskStatusEnum,
  ): Promise<void>;
}
