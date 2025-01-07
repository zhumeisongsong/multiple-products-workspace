import { describe, it, expect, vi } from 'vitest';
import { UserTaskStatusEnum } from '@user-tasks/domain';

import { updateUserTaskStatusUseCase } from './update-user-task-status.use-case';
import { UserTasksService } from './user-tasks.service';

describe('updateUserTaskStatusUseCase', () => {
  const mockUserTasksService = {
    updateUserTaskStatus: vi.fn(),
  } as unknown as UserTasksService;

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should call service with task id and status', async () => {
    const taskId = '123';
    const status = UserTaskStatusEnum.COMPLETED;

    await updateUserTaskStatusUseCase(taskId, status, mockUserTasksService);

    expect(mockUserTasksService.updateUserTaskStatus).toHaveBeenCalledWith(
      taskId,
      status,
    );
  });

  it('should pass through the service response', async () => {
    const taskId = '123';
    const status = UserTaskStatusEnum.IN_PROGRESS;
    mockUserTasksService.updateUserTaskStatus = vi
      .fn()
      .mockResolvedValue(undefined);

    const result = await updateUserTaskStatusUseCase(
      taskId,
      status,
      mockUserTasksService,
    );

    expect(result).toBeUndefined();
  });
});
