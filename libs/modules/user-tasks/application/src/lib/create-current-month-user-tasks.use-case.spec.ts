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

  it('should create user tasks for remaining days of current month', async () => {
    const currentDate = new Date('2024-01-15'); // Mid-month date
    vi.setSystemTime(currentDate);

    const expectedRemainingDays = 17; // From Jan 15 to Jan 31

    await createCurrentMonthUserTasksUseCase(
      mockUserId,
      mockUserPreferences,
      mockUserTasksService,
      mockTasksService
    );

    expect(mockTasksService.findSomeTasksRandomly).toHaveBeenCalledWith(
      expectedRemainingDays,
      mockUserPreferences.selfCareTopics
    );

    expect(mockUserTasksService.createManyUserTasks).toHaveBeenCalledWith(
      expect.arrayContaining([
        expect.objectContaining({
          name: expect.any(String),
          categories: expect.any(Array),
          userId: mockUserId,
          createdAt: expect.any(String)
        })
      ])
    );
  });

  it('should handle month end correctly', async () => {
    const monthEndDate = new Date('2024-01-31');
    vi.setSystemTime(monthEndDate);

    await createCurrentMonthUserTasksUseCase(
      mockUserId,
      mockUserPreferences,
      mockUserTasksService,
      mockTasksService
    );

    expect(mockTasksService.findSomeTasksRandomly).toHaveBeenCalledWith(
      1, // Only one day remaining
      mockUserPreferences.selfCareTopics
    );
  });

  afterEach(() => {
    vi.clearAllMocks();
    vi.useRealTimers();
  });
});
