import { UserTaskStatusEnum } from './user-task-status.enum';

describe('UserTaskStatusEnum', () => {
  it('should have TODO status', () => {
    expect(UserTaskStatusEnum.TODO).toBe('TODO');
  });

  it('should have IN_PROGRESS status', () => {
    expect(UserTaskStatusEnum.IN_PROGRESS).toBe('IN_PROGRESS');
  });

  it('should have COMPLETED status', () => {
    expect(UserTaskStatusEnum.COMPLETED).toBe('COMPLETED');
  });

  it('should have exactly 3 statuses', () => {
    const statusCount = Object.keys(UserTaskStatusEnum).length;
    expect(statusCount).toBe(3);
  });
});
