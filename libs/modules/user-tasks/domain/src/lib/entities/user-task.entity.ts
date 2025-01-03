import { User } from '@users/domain';
import { UserTaskStatusEnum } from '../value-objects/user-task-status.enum';

export interface UserTask {
  id: string;
  name: string;
  categories: string[];
  status: UserTaskStatusEnum;
  createdAt: string;
  updatedAt?: string;
  userId: string;
  description?: string;
  user?: User;
}

export const createUserTask = (userTask: {
  name: string;
  description?: string;
  categories: string[];
  createdAt: Date;
  userId: string;
}): UserTask => {
  return {
    id: crypto.randomUUID(),
    name: userTask.name,
    description: userTask.description,
    categories: userTask.categories,
    status: UserTaskStatusEnum.TODO,
    createdAt: userTask.createdAt+ '',
    userId: userTask.userId,
  };
};
