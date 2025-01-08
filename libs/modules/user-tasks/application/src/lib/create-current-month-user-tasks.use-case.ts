import { UserPreferences } from '@users/domain';
import { UserTask } from '@user-tasks/domain';

import { UserTasksService } from './user-tasks.service';

export const createCurrentMonthUserTasksUseCase = async (
  userPreferences: UserPreferences,
  userTasksService: UserTasksService,
): Promise<UserTask[]> => {
  const userTasks: UserTask[] =
    await userTasksService.generateManyUserTasks(
      userPreferences
    );
    
  await userTasksService.createManyUserTasks(userTasks);

  return userTasks;
};
