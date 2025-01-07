import { describe, it, expect, vi, beforeEach } from 'vitest';
import { UserTasksService } from './user-tasks.service';
import { UserTask, UserTaskStatusEnum, UserTasksRepository } from '@user-tasks/domain';

describe('UserTasksService', () => {
  let userTasksService: UserTasksService;
  let mockUserTasksRepository: UserTasksRepository;

  beforeEach(() => {
    mockUserTasksRepository = {
      findManyUserTasks: vi.fn(),
      createUserTasks: vi.fn(),
      updateUserTaskStatus: vi.fn(),
    };
    userTasksService = new UserTasksService(mockUserTasksRepository);
  });

  describe('findManyUserTasks', () => {
    it('should call repository with date range when provided', async () => {
      const dateRange = {
        startedAt: new Date('2024-01-01'),
        endedAt: new Date('2024-01-31')
      };

      await userTasksService.findManyUserTasks({ dateRange });

      expect(mockUserTasksRepository.findManyUserTasks).toHaveBeenCalledWith({
        dateRange: {
          startedAt: dateRange.startedAt.toISOString(),
          endedAt: dateRange.endedAt.toISOString()
        }
      });
    });

    it('should call repository without date range when not provided', async () => {
      await userTasksService.findManyUserTasks();

      expect(mockUserTasksRepository.findManyUserTasks).toHaveBeenCalledWith({
        dateRange: undefined
      });
    });
  });

  describe('createManyUserTasks', () => {
    it('should call repository with user tasks', async () => {
      const userTasks: UserTask[] = [
        {
          id: '1',
          userId: 'user1',
          name: 'Task 1',
          categories: [],
          status: UserTaskStatusEnum.TODO,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        }
      ];

      await userTasksService.createManyUserTasks(userTasks);

      expect(mockUserTasksRepository.createUserTasks).toHaveBeenCalledWith(userTasks);
    });
  });

  describe('updateUserTaskStatus', () => {
    it('should call repository with task id and status', async () => {
      const taskId = '1';
      const status = UserTaskStatusEnum.COMPLETED;

      await userTasksService.updateUserTaskStatus(taskId, status);

      expect(mockUserTasksRepository.updateUserTaskStatus).toHaveBeenCalledWith(taskId, status);
    });
  });
});
