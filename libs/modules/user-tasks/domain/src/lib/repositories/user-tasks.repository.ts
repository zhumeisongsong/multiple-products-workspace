import { UserTask } from "../entities/user-task.entity";
import { UserTaskStatusEnum } from "../value-objects/user-task-status.enum";

export interface UserTasksRepository {
  getUserTasksByUserId(userId: string, filter?: { startedAt: Date; endedAt: Date }): Promise<UserTask[]>;
  generateUserTasks(prompt: string): Promise<string>;
  updateUserTaskStatus(userTaskId: string, status: UserTaskStatusEnum): Promise<string>;
}
