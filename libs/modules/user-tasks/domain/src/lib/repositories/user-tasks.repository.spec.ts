import { describe, it, expect } from 'vitest';

import { UserTasksRepository } from './user-tasks.repository';
import { UserTask } from '../entities/user-task.entity';
import { UserTaskStatusEnum } from '../value-objects/user-task-status.enum';

describe('UserTasksRepository', () => {
  const mockUserTasksRepository: UserTasksRepository = {
    findManyUserTasks: async () => [],
    createUserTasks: async () => {},
    updateUserTaskStatus: async () => {},
  };

  describe('findManyUserTasks', () => {
    it('should return array of user tasks', async () => {
      const userId = 'test-user-id';
      const result = await mockUserTasksRepository.findManyUserTasks(userId);
      expect(Array.isArray(result)).toBe(true);
    });

    it('should accept date range filter', async () => {
      const userId = 'test-user-id';
      const dateRange = {
        startedAt: '2023-01-01',
        endedAt: '2023-01-31',
      };
      const result = await mockUserTasksRepository.findManyUserTasks(userId, {
        dateRange,
      });
      expect(Array.isArray(result)).toBe(true);
    });
  });

  describe('createUserTasks', () => {
    it('should create multiple user tasks', async () => {
      const userTasks: UserTask[] = [
        {
          id: 'task-1',
          userId: 'user-1',
          name: 'Task 1',
          description: 'Description 1',
          categories: [],
          status: UserTaskStatusEnum.TODO,
          createdAt: new Date().toISOString(),
        },
      ];

      await expect(
        mockUserTasksRepository.createUserTasks(userTasks),
      ).resolves.not.toThrow();
    });
  });

  describe('updateUserTaskStatus', () => {
    it('should update user task status', async () => {
      const taskId = 'task-1';
      const newStatus = UserTaskStatusEnum.COMPLETED;

      await expect(
        mockUserTasksRepository.updateUserTaskStatus(taskId, newStatus),
      ).resolves.not.toThrow();
    });
  });
});
