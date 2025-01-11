import { UserPreferences } from '@users/domain';
import { createUserTask, UserTask } from '@user-tasks/domain';

import { UserTasksService } from './user-tasks.service';
import { TasksService } from '@tasks/application';

const getRemainingDaysOfMonth = (date: Date): number => {
  const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  return lastDayOfMonth.getDate() - date.getDate() + 1;
};

export const createCurrentMonthUserTasksUseCase = async (
  userId: string,
  userPreferences: UserPreferences,
  userTasksService: UserTasksService,
  tasksService: TasksService,
): Promise<void> => {
  const taskCount = getRemainingDaysOfMonth(new Date());
  const tasks = await tasksService.findSomeTasksRandomly(
    taskCount,
    userPreferences.selfCareTopics,
  );

  const userTasks: UserTask[] = tasks.map((task) =>
    createUserTask({
      name: task.name,
      categories: task.categories,
      createdAt: new Date(),
      userId: userId,
    }),
  );

  await userTasksService.createManyUserTasks(userTasks);
};
