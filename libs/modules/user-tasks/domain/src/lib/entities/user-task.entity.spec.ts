import { createUserTask } from './user-task.entity';
import { UserTaskStatusEnum } from '../value-objects/user-task-status.enum';

describe('UserTask', () => {
  describe('createUserTask', () => {
    it('should create a user task with the given properties', () => {
      const now = new Date();
      const userTask = createUserTask({
        name: 'Test Task',
        description: 'Test Description',
        categories: ['test'],
        createdAt: now,
        userId: 'test-user-id',
      });

      expect(userTask).toEqual({
        id: expect.any(String),
        name: 'Test Task',
        description: 'Test Description',
        categories: ['test'],
        status: UserTaskStatusEnum.TODO,
        createdAt: now,
        updatedAt: now,
        userId: 'test-user-id',
      });
    });

    it('should create a user task without optional description', () => {
      const now = new Date();
      const userTask = createUserTask({
        name: 'Test Task',
        categories: ['test'],
        createdAt: now,
        userId: 'test-user-id',
      });

      expect(userTask).toEqual({
        id: expect.any(String),
        name: 'Test Task',
        description: undefined,
        categories: ['test'],
        status: UserTaskStatusEnum.TODO,
        createdAt: now,
        updatedAt: now,
        userId: 'test-user-id',
      });
    });
  });
});
