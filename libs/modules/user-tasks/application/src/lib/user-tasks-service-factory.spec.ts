import { UserTasksRepository } from '@user-tasks/domain';
import { describe, it, expect, vi } from 'vitest';

import { UserTasksServiceFactory } from './user-tasks-service-factory';
import { UserTasksService } from './user-tasks.service';

describe('UserTasksServiceFactory', () => {
  let repository: UserTasksRepository;

  beforeEach(() => {
    // Reset the singleton instance before each test
    (UserTasksServiceFactory as any).instance = null;
    repository = {
      findManyUserTasks: vi.fn(),
      createManyUserTasks: vi.fn(),
      updateUserTaskStatus: vi.fn(),
    };
  });

  describe('initialize', () => {
    it('should create a new instance when not initialized', () => {
      UserTasksServiceFactory.initialize(repository);
      expect(UserTasksServiceFactory.getInstance()).toBeInstanceOf(
        UserTasksService,
      );
    });

    it('should not create new instance when already initialized', () => {
      UserTasksServiceFactory.initialize(repository);
      const firstInstance = UserTasksServiceFactory.getInstance();

      UserTasksServiceFactory.initialize(repository);
      const secondInstance = UserTasksServiceFactory.getInstance();

      expect(firstInstance).toBe(secondInstance);
    });
  });

  describe('getInstance', () => {
    it('should throw error when not initialized', () => {
      expect(() => UserTasksServiceFactory.getInstance()).toThrow(
        'UserTasksService must be initialized before use',
      );
    });

    it('should return instance when initialized', () => {
      UserTasksServiceFactory.initialize(repository);
      expect(UserTasksServiceFactory.getInstance()).toBeDefined();
    });
  });
});
