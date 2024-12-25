import { TaskEntity } from '@tasks/domain';
import { User } from '@users/domain';

import { UserTaskStatusEnum } from './user-task-status.enum';

export interface UserTask {
  id: string;
  userId: string;
  user: User;
  taskId: string;
  task: TaskEntity;
  status: UserTaskStatusEnum;
  createdAt: Date;
  updatedAt: Date;
}
