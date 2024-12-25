import { TaskEntity } from '@tasks/domain';
import { UserEntity } from '@users/domain';
import { UserTaskEntity, UserTaskStatusEnum } from '@user-tasks/domain';
import { describe, it, expect, vi } from 'vitest';
import { userTasksState, userTaskActions } from './user-tasks-state';

describe('userTasksState', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    userTasksState.currentMonthUserTasks = [];
    userTasksState.historyUserTasks = [];
    userTasksState.selectedUserTaskId = null;
    userTasksState.isLoading = false;
  });

  describe('userTaskActions', () => {
    const mockTasks: UserTaskEntity[] = [
      {
        id: '1',
        userId: '1',
        user: { id: '1', email: 'user@example.com' } as UserEntity,
        taskId: '1',
        task: { id: '1', name: 'Task 1', categories: ['test'] } as TaskEntity,
        status: UserTaskStatusEnum.TODO,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    it('should set current month user tasks', () => {
      userTaskActions.setCurrentMonthUserTasks(mockTasks);
      expect(userTasksState.currentMonthUserTasks).toEqual(mockTasks);
    });

    it('should set history user tasks', () => {
      userTaskActions.setHistoryUserTasks(mockTasks);
      expect(userTasksState.historyUserTasks).toEqual(mockTasks);
    });

    it('should set selected user task id', () => {
      userTaskActions.selectUserTask('1');
      expect(userTasksState.selectedUserTaskId).toBe('1');
    });

    it('should set loading state', () => {
      userTaskActions.setIsLoading(true);
      expect(userTasksState.isLoading).toBe(true);
    });
  });
});
