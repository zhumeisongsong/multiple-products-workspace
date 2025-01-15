import { createUserTask } from './user-task.entity';
import { UserTaskStatusEnum } from '../value-objects/user-task-status.enum';

describe('UserTask', () => {
  describe('createUserTask', () => {
    it('should create a user task with the given properties', () => {
      const userTask = createUserTask({
        name: 'Test Task',
        description: 'Test Description',
        categories: [
          {
            id: '1',
            name: 'test',
          },
        ],
        userId: 'test-user-id',
      });

      const expectedUserTask = {
        id: expect.any(String),
        name: 'Test Task',
        description: 'Test Description',
        categories: [
          {
            id: '1',
            name: 'test',
          },
        ],
        status: UserTaskStatusEnum.TODO,
        userId: 'test-user-id',
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
      };

      expect(userTask).toEqual(expectedUserTask);
    });

    it('should create a user task without optional description', () => {
      const now = new Date();
      const userTask = createUserTask({
        name: 'Test Task',
        categories: [
          {
            id: '1',
            name: 'test',
          },
        ],
        userId: 'test-user-id',
      });



      expect(userTask).toEqual({
        id: expect.any(String),
        name: 'Test Task',
        description: undefined,
        categories: [
          {
            id: '1',
            name: 'test',
          },
        ],
        status: UserTaskStatusEnum.TODO,
        userId: 'test-user-id',
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
      });
    });
  });
});
