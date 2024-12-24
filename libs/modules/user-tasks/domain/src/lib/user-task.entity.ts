import { TaskEntity } from '@tasks/domain';
import { UserEntity } from '@users/domain';

import { UserTaskStatusEnum } from './user-task-status.enum';

export interface UserTaskEntity {
  id: string;
  userId: string;
  user: UserEntity;
  taskId: string;
  task: TaskEntity;
  status: UserTaskStatusEnum;
  createdAt: Date;
  updatedAt: Date;
}
