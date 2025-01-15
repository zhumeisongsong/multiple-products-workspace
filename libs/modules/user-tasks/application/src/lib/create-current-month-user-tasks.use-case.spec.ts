import { describe, it, expect, vi } from 'vitest';
import { UserPreferences } from '@users/domain';
import { UserTasksService } from './user-tasks.service';
import { TasksService } from '@tasks/application';
import { createCurrentMonthUserTasksUseCase } from './create-current-month-user-tasks.use-case';

describe('createCurrentMonthUserTasksUseCase', () => {
  const mockUserId = 'user-1';
  const mockUserPreferences = {
    selfCareTopics: [{ id: 'topic1', name: 'Topic 1' }]
  } as UserPreferences;

  const mockTasks = [
    {
      id: '1',
      name: 'Task 1',
      categories: [{ id: 'topic1', name: 'Topic 1' }]
    },
    {
      id: '2',
      name: 'Task 2', 
      categories: [{ id: 'topic1', name: 'Topic 1' }]
    }
  ];

  const mockUserTasksService = {
    createManyUserTasks: vi.fn().mockResolvedValue(undefined)
  } as unknown as UserTasksService;

  const mockTasksService = {
    findSomeTasksRandomly: vi.fn().mockResolvedValue(mockTasks)
  } as unknown as TasksService;

  it('should create user tasks for all days of current month', async () => {
    await createCurrentMonthUserTasksUseCase(
      mockUserId,
      mockUserPreferences,
      mockUserTasksService,
      mockTasksService
    );

    expect(mockTasksService.findSomeTasksRandomly).toHaveBeenCalledWith(
      expect.any(Number),
      mockUserPreferences.selfCareTopics
    );
  });

  afterEach(() => {
    vi.clearAllMocks();
    vi.useRealTimers();
  });
});
