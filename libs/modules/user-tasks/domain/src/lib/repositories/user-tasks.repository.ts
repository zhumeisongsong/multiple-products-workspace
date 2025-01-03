import { UserTask } from '../entities/user-task.entity';
import { UserTaskStatusEnum } from '../value-objects/user-task-status.enum';

export interface UserTasksRepository {
  getUserTasks(filter?: {
    startedAt: Date;
    endedAt: Date;
  }): Promise<UserTask[]>;
  createUserTasks(userTasks: UserTask[]): Promise<void>;
  updateUserTaskStatus(
    userTaskId: string,
    status: UserTaskStatusEnum,
  ): Promise<void>;
}
