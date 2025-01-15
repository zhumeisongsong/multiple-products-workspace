import { describe, it, expect, vi } from 'vitest';
import { SelfCareTopic } from '@self-care-topics/domain';
import { Task } from '@tasks/domain';
import { TasksService } from '@tasks/application';
import { UserTasksService } from './user-tasks.service';
import { createCurrentMonthUserTasksUseCase } from './create-current-month-user-tasks.use-case';

describe('createCurrentMonthUserTasksUseCase', () => {
  it('should create user tasks for current month', async () => {
    const mockTasks = [
      {
        id: '1',
        name: 'Task 1',
        categories: [{ id: 'topic1', name: 'Topic 1' }],
      },
      {
        id: '2',
        name: 'Task 2',
        categories: [{ id: 'topic2', name: 'Topic 2' }],
      },
    ] as Task[];

    const selfCareTopics = [
      { id: 'topic1', name: 'Topic 1' },
      { id: 'topic2', name: 'Topic 2' },
    ] as SelfCareTopic[];

    const tasksService = {
      findSomeTasksRandomly: vi.fn().mockResolvedValue(mockTasks),
    } as unknown as TasksService;

    const userTasksService = {
      createManyUserTasks: vi
        .fn()
        .mockImplementation((tasks) => Promise.resolve(tasks)),
    } as unknown as UserTasksService;

    const userId = 'user123';
    const daysInMonth = new Date(
      new Date().getFullYear(),
      new Date().getMonth() + 1,
      0,
    ).getDate();

    await createCurrentMonthUserTasksUseCase(
      userId,
      { selfCareTopics },
      userTasksService,
      tasksService,
    );

    expect(tasksService.findSomeTasksRandomly).toHaveBeenCalledWith(
      daysInMonth,
      selfCareTopics,
    );
    expect(userTasksService.createManyUserTasks).toHaveBeenCalled();
  });

  it('should handle case when no tasks are found', async () => {
    const selfCareTopics = [
      { id: 'topic1', name: 'Topic 1' },
    ] as SelfCareTopic[];

    const tasksService = {
      findSomeTasksRandomly: vi.fn().mockResolvedValue([]),
    } as unknown as TasksService;

    const userTasksService = {
      createManyUserTasks: vi
        .fn()
        .mockImplementation((tasks) => Promise.resolve(tasks)),
    } as unknown as UserTasksService;

    const userId = 'user123';
    const daysInMonth = new Date(
      new Date().getFullYear(),
      new Date().getMonth() + 1,
      0,
    ).getDate();

    const result = await createCurrentMonthUserTasksUseCase(
      userId,
      { selfCareTopics },
      userTasksService,
      tasksService,
    );

    expect(tasksService.findSomeTasksRandomly).toHaveBeenCalledWith(
      daysInMonth,
      selfCareTopics,
    );
    expect(userTasksService.createManyUserTasks).toHaveBeenCalledWith([]);
    expect(result).toHaveLength(0);
  });
});
