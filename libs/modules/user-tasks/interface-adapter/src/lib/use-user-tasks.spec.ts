import { TaskEntity } from '@tasks/domain';
import { UserEntity } from '@users/domain';
import { UserTaskEntity, UserTaskStatusEnum } from '@user-tasks/domain';
import { describe, it, expect, vi } from 'vitest';

import { useUserTasks } from './use-user-tasks';
import { userTasksState, userTaskActions } from './user-tasks-state';

vi.mock('valtio', () => ({
  useSnapshot: vi.fn((state) => state),
}));

describe('useUserTasks', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    userTasksState.currentMonthUserTasks = [];
    userTasksState.historyUserTasks = [];
    userTasksState.selectedUserTaskId = null;
    userTasksState.isLoading = false;
  });

  it('should return the current state and actions', () => {
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
      {
        id: '2',
        userId: '2',
        user: { id: '2', email: 'user2@example.com' } as UserEntity,
        taskId: '2',
        task: { id: '2', name: 'Task 2' } as TaskEntity,
        status: UserTaskStatusEnum.TODO,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    userTasksState.currentMonthUserTasks = mockTasks;
    userTasksState.historyUserTasks = mockTasks;
    userTasksState.selectedUserTaskId = '1';
    userTasksState.isLoading = true;

    const result = useUserTasks();

    expect(result.currentMonthUserTasks).toEqual(mockTasks);
    expect(result.historyUserTasks).toEqual(mockTasks);
    expect(result.selectedUserTaskId).toBe('1');
    expect(result.isLoading).toBe(true);
    expect(result.setCurrentMonthUserTasks).toBe(
      userTaskActions.setCurrentMonthUserTasks,
    );
    expect(result.setHistoryUserTasks).toBe(
      userTaskActions.setHistoryUserTasks,
    );
    expect(result.selectUserTask).toBe(userTaskActions.selectUserTask);
    expect(result.setIsLoading).toBe(userTaskActions.setIsLoading);
  });

  it('should update state when actions are called', () => {
    const {
      setCurrentMonthUserTasks,
      setHistoryUserTasks,
      selectUserTask,
      setIsLoading,
    } = useUserTasks();
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

    setCurrentMonthUserTasks(mockTasks);
    expect(userTasksState.currentMonthUserTasks).toEqual(mockTasks);

    setHistoryUserTasks(mockTasks);
    expect(userTasksState.historyUserTasks).toEqual(mockTasks);

    selectUserTask('1');
    expect(userTasksState.selectedUserTaskId).toBe('1');

    setIsLoading(true);
    expect(userTasksState.isLoading).toBe(true);
  });
});
