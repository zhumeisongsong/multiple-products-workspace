import { UserTasksService } from './user-tasks.service';

export const getMonthlyUserTasksUseCase = async (
  userId: string,
  month: number,
  year: number,
) => {
  const userTasksService = new UserTasksService();
  const monthStartedAt = new Date(year, month, 1);
  const monthEndedAt = new Date(year, month + 1, 0);

  const userTasks = await userTasksService.getUserTasksByUserId(userId, {
    startedAt: monthStartedAt,
    endedAt: monthEndedAt,
  });

  if (userTasks.length === 0) {
    // how many tasks to create is the days of the month
    const taskCount = new Date(year, month + 1, 0).getDate();

    await userTasksService.createUserTasks([], taskCount);
    
    const userTasks = await userTasksService.getUserTasksByUserId(userId, {
      startedAt: monthStartedAt,
      endedAt: monthEndedAt,
    });

    return userTasks;
  }

  return userTasks;
};
