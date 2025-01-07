import { describe, it, expect, vi } from 'vitest';

import { useUserTasks } from './use-user-tasks';
import { userTasksStates } from './user-tasks-states';
import { UserTaskStatusEnum } from '@user-tasks/domain';
vi.mock('valtio', () => ({
  useSnapshot: vi.fn((state) => state),
  proxy: vi.fn((obj) => obj),
}));

describe('useUserTasks', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    userTasksStates.currentMonthUserTasks = [];
    userTasksStates.historyUserTasks = [];
    userTasksStates.selectedUserTaskId = null;
  });

  it('should return user tasks states and actions', () => {
    userTasksStates.historyUserTasks = [
      {
        id: '1',
        name: 'Task 1',
        categories: [],
        status: UserTaskStatusEnum.TODO,
        userId: '1',
        createdAt: '2024-01-01T00:00:00.000Z',
      },
    ];
    const result = useUserTasks();

    expect(result.historyUserTasks).toEqual([
      {
        id: '1',
        name: 'Task 1',
        categories: [],
        status: UserTaskStatusEnum.TODO,
        userId: '1',
        createdAt: '2024-01-01T00:00:00.000Z',
      },
    ]);
    expect(result.currentMonthUserTasks).toEqual([]);
    expect(result.selectedUserTaskId).toBeNull();
  });
});
