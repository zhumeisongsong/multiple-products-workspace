import { UserTask } from './user-task.entity';
import { UserTaskStatusEnum } from './user-task-status.enum';

describe('UserTask', () => {
  it('should create a valid user task entity', () => {
    const userTask: UserTask = {
      id: '123',
      userId: 'user-123',
      user: {
        id: 'user-123',
        email: 'test@example.com',
        firstName: 'John',
        lastName: 'Doe',
      },
      taskId: 'task-123',
      task: {
        id: 'task-123',
        name: 'Test Task',
        description: 'Test Description',
        categories: [],
      },
      status: UserTaskStatusEnum.TODO,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    expect(userTask.id).toBeDefined();
    expect(userTask.userId).toBeDefined();
    expect(userTask.user).toBeDefined();
    expect(userTask.taskId).toBeDefined();
    expect(userTask.task).toBeDefined();
    expect(userTask.status).toBe(UserTaskStatusEnum.TODO);
    expect(userTask.createdAt).toBeInstanceOf(Date);
    expect(userTask.updatedAt).toBeInstanceOf(Date);
  });
});
