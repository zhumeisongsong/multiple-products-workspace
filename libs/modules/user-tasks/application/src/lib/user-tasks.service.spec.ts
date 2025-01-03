import { UserTasksService } from './user-tasks.service';
import { UserTaskStatusEnum } from '@user-tasks/domain';

describe('UserTasksService', () => {
  let service: UserTasksService;

  beforeEach(() => {
    service = new UserTasksService();
  });

  describe('getUserTasks', () => {
    it('should return user tasks for given date range', async () => {
      const startedAt = new Date('2025-01-04');
      const endedAt = new Date('2025-01-31');

      const tasks = await service.getUserTasks({ startedAt, endedAt });

      expect(Array.isArray(tasks)).toBeTruthy();
    });
  });

  describe('updateUserTaskStatus', () => {
    it('should update task status', async () => {
      const taskId = '123';
      const status = UserTaskStatusEnum.COMPLETED;

      const result = await service.updateUserTaskStatus(taskId, status);

      expect(result).toBeUndefined();
    });
  });
});
