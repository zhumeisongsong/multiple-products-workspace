import { UserTask } from '@user-tasks/domain';
import { UserTasksService } from './user-tasks.service';

export const getMonthlyUserTasksUseCase = async (
  userId: string,
  month: number,
  year: number,
  userTasksService: UserTasksService,
): Promise<UserTask[]> => {
  const monthStartedAt = new Date(year, month, 1);
  const monthEndedAt = new Date(year, month + 1, 0);
  const userTasks = await userTasksService.findManyUserTasks(userId, {
    dateRange: {
      startedAt: monthStartedAt,
      endedAt: monthEndedAt,
    },
  });

  return userTasks;
};
