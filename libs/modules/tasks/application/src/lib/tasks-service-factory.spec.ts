import { describe, it, expect, vi } from 'vitest';
import { TasksRepository } from '@tasks/domain';
import { TasksService } from './tasks.service';
import { TasksServiceFactory } from './tasks-service-factory';

describe('TasksServiceFactory', () => {
  beforeEach(() => {
    // Reset the singleton instance before each test
    TasksServiceFactory['instance'] = null;
  });

  it('should initialize and return the same instance', () => {
    const mockRepository = {} as TasksRepository;

    TasksServiceFactory.initialize(mockRepository);
    const instance1 = TasksServiceFactory.getInstance();
    const instance2 = TasksServiceFactory.getInstance();

    expect(instance1).toBeInstanceOf(TasksService);
    expect(instance1).toBe(instance2);
  });

  it('should throw error when getting instance before initialization', () => {
    expect(() => TasksServiceFactory.getInstance()).toThrow(
      'TasksService must be initialized before use',
    );
  });

  it('should not create new instance when already initialized', () => {
    const mockRepository1 = {
      findManyTasks: vi.fn(),
    } as TasksRepository;
    const mockRepository2 = {
      findManyTasks: vi.fn(),
    } as TasksRepository;

    TasksServiceFactory.initialize(mockRepository1);
    const instance1 = TasksServiceFactory.getInstance();
    TasksServiceFactory.initialize(mockRepository2);
    const instance2 = TasksServiceFactory.getInstance();

    expect(instance1).toBe(instance2);
  });
});
