import { UserTasksRepository } from '@user-tasks/domain';
import { describe, it, expect, vi } from 'vitest';

import { UserTasksServiceFactory } from './user-tasks-service-factory';
import { UserTasksService } from './user-tasks.service';

describe('UserTasksServiceFactory', () => {
  it('should create UserTasksService instance', () => {
    const mockUserTasksRepository: UserTasksRepository = {
      findManyUserTasks: vi.fn(),
      createUserTasks: vi.fn(),
      updateUserTaskStatus: vi.fn(),
    };

    const userTasksService = UserTasksServiceFactory.initialize(
      mockUserTasksRepository,
    );

    expect(userTasksService).toBeInstanceOf(UserTasksService);
  });
});
