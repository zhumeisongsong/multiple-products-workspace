import { UserPreferences } from '@users/domain';
import { createUserTask, UserTask } from '@user-tasks/domain';

import { UserTasksService } from './user-tasks.service';
import { TasksService } from '@tasks/application';

export const createCurrentMonthUserTasksUseCase = async (
  userId: string,
  userPreferences: UserPreferences,
  userTasksService: UserTasksService,
  tasksService: TasksService,
): Promise<void> => {
  const taskCount = new Date().getDate();
  const tasks = await tasksService.findSomeTasksRandomly(
    taskCount,
    userPreferences.selfCareTopics,
  );

  const userTasks: UserTask[] = tasks.map((task) =>
    createUserTask({
      name: task.name,
      categories: task.categories,
      scheduledAt: new Date(2025, 0, 1),
      userId: userId,
    }),
  );

  await userTasksService.createManyUserTasks(userTasks);
};
