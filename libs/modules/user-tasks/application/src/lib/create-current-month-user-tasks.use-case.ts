import { UserPreferences } from '@users/domain';
import { createUserTask, UserTask } from '@user-tasks/domain';

import { UserTasksService } from './user-tasks.service';
import { TasksService } from '@tasks/application';

const getDaysOfMonth = (date: Date): number => {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
};

export const createCurrentMonthUserTasksUseCase = async (
  userId: string,
  userPreferences: UserPreferences,
  userTasksService: UserTasksService,
  tasksService: TasksService,
): Promise<void> => {
  const taskCount = getDaysOfMonth(new Date());
  const tasks = await tasksService.findSomeTasksRandomly(
    taskCount,
    userPreferences.selfCareTopics,
  );

  const userTasks: UserTask[] = tasks.map((task, index) =>
    createUserTask({
      name: task.name,
      categories: task.categories,
      userId: userId,
    }),
  );

  await userTasksService.createManyUserTasks(userTasks);
};
