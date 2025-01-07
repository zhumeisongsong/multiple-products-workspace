import { UserTask, UserTaskStatusEnum } from '@user-tasks/domain';
import { describe, it, expect, vi } from 'vitest';

import { getMonthlyUserTasksUseCase } from './get-monthly-user-tasks.use-case';
import { UserTasksService } from './user-tasks.service';

describe('getMonthlyUserTasksUseCase', () => {
  it('should return user tasks for given month and year', async () => {
    // Arrange
    const mockUserTasks: UserTask[] = [
      {
        id: '1',
        userId: 'user-1',
        name: 'Task 1',
        categories: [],
        status: UserTaskStatusEnum.TODO,
        createdAt: new Date('2024-01-15').toISOString(),
      },
      {
        id: '2',
        userId: 'user-1',
        name: 'Task 2',
        categories: [],
        status: UserTaskStatusEnum.TODO,
        createdAt: new Date('2024-01-20').toISOString(),
      },
    ];

    const mockUserTasksService = {
      findManyUserTasks: vi.fn().mockResolvedValue(mockUserTasks),
    } as unknown as UserTasksService;

    const userId = 'user-1';
    const month = 0; // January
    const year = 2024;

    // Act
    const result = await getMonthlyUserTasksUseCase(
      userId,
      month,
      year,
      mockUserTasksService,
    );

    // Assert
    expect(mockUserTasksService.findManyUserTasks).toHaveBeenCalledWith(
      userId,
      {
        dateRange: {
          startedAt: new Date(2024, 0, 1),
          endedAt: new Date(2024, 1, 0),
        },
      },
    );
    expect(result).toEqual(mockUserTasks);
  });
});
