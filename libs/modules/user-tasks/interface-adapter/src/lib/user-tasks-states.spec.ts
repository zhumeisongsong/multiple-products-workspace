import { UserTask, UserTaskStatusEnum } from '@user-tasks/domain';
import { describe, it, expect, vi } from 'vitest';
import { userTasksStates, userTaskActions } from './user-tasks-states';

describe('userTasksStates', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    userTasksStates.currentMonthUserTasks = [];
    userTasksStates.historyUserTasks = [];
    userTasksStates.selectedUserTaskId = null;
    userTasksStates.isLoading = false;
  });

  describe('userTaskActions', () => {
    const mockTasks: UserTask[] = [
      {
        id: '1',
        userId: '1',
        user: { id: '1', email: 'user@example.com' },
        taskId: '1',
        task: { id: '1', name: 'Task 1', categories: ['test'] },
        status: UserTaskStatusEnum.TODO,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    it('should set current month user tasks', () => {
      userTaskActions.setCurrentMonthUserTasks(mockTasks);
      expect(userTasksStates.currentMonthUserTasks).toEqual(mockTasks);
    });

    it('should set history user tasks', () => {
      userTaskActions.setHistoryUserTasks(mockTasks);
      expect(userTasksStates.historyUserTasks).toEqual(mockTasks);
    });

    it('should set selected user task id', () => {
      userTaskActions.selectUserTask('1');
      expect(userTasksStates.selectedUserTaskId).toBe('1');
    });

    it('should set loading state', () => {
      userTaskActions.setIsLoading();
      expect(userTasksStates.isLoading).toBe(true);
    });

    it('should set loading finished state', () => {
      userTaskActions.setIsLoadingFinished();
      expect(userTasksStates.isLoading).toBe(false);
    });
  });
});
