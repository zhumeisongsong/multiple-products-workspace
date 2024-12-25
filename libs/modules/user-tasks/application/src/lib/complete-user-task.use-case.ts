import { UserTaskStatusEnum } from '@user-tasks/domain';

import { UserTasksService } from './user-tasks.service';

export const completeUserTaskUseCase = async (userTaskId: string) => {
  const userTasksService = new UserTasksService();
  const result = await userTasksService.updateUserTaskStatus(
    userTaskId,
    UserTaskStatusEnum.COMPLETED,
  );
};
