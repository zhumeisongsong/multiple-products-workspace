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

  if (userTasks.length === 0) {
    // how many tasks to create is the days of the month
    const taskCount = new Date(year, month + 1, 0).getDate();
    // generate current month tasks based on user prefer categories
    const prompt = ``;
    // call ai service to generate user tasks
    const generatedUserTasks: UserTask[] = [];

    await userTasksService.createManyUserTasks(generatedUserTasks);

    return userTasks;
  }

  return userTasks;
};
