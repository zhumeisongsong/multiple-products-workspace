import { UserTaskStatusEnum } from '@user-tasks/domain';

import { UserTasksService } from './user-tasks.service';

export const updateUserTaskStatusUseCase = async (
  userTaskId: string,
  status: UserTaskStatusEnum,
  userTasksService: UserTasksService,
): Promise<void> => {
  return await userTasksService.updateUserTaskStatus(userTaskId, status);
};
