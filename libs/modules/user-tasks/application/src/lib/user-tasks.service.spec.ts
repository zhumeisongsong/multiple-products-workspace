import { UserTaskStatusEnum } from '@user-tasks/domain';

import { UserTasksService } from './user-tasks.service';

describe('UserTasksService', () => {
  let service: UserTasksService;

  beforeEach(() => {
    service = new UserTasksService();
  });

  describe('getUserTasksByUserId', () => {
    it('should return empty array', async () => {
      const result = await service.getUserTasksByUserId('test-user-id');
      expect(result).toEqual([]);
    });

    it('should return empty array with date filter', async () => {
      const result = await service.getUserTasksByUserId('test-user-id', {
        startedAt: new Date(),
        endedAt: new Date(),
      });
      expect(result).toEqual([]);
    });
  });

  describe('generateUserTasks', () => {
    it('should return success', async () => {
      const result = await service.generateUserTasks('test prompt');
      expect(result).toBe('success');
    });
  });

  describe('updateUserTaskStatus', () => {
    it('should return success', () => {
      const result = service.updateUserTaskStatus(
        'test-task-id',
        UserTaskStatusEnum.COMPLETED
      );
      expect(result).toBe('success');
    });
  });
});
