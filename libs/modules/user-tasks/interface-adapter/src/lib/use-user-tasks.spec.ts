import { UserTask, UserTaskStatusEnum } from '@user-tasks/domain';
import { describe, it, expect, vi } from 'vitest';

import { useUserTasks } from './use-user-tasks';
import { userTasksStates, userTaskActions } from './user-tasks-states';

vi.mock('valtio', async (importOriginal) => {
  const actual = await importOriginal<typeof import('valtio')>();
  return {
    ...actual,
    useSnapshot: vi.fn((state) => state),
  };
});

describe('useUserTasks', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    userTasksStates.currentMonthUserTasks = [];
    userTasksStates.historyUserTasks = [];
    userTasksStates.selectedUserTaskId = null;
    userTasksStates.isLoading = false;
  });

  it('should return the current state and actions', () => {
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
      {
        id: '2',
        userId: '2',
        user: { id: '2', email: 'user2@example.com' },
        taskId: '2',
        task: { id: '2', name: 'Task 2', categories: ['test'] },
        status: UserTaskStatusEnum.TODO,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    userTasksStates.currentMonthUserTasks = mockTasks;
    userTasksStates.historyUserTasks = mockTasks;
    userTasksStates.selectedUserTaskId = '1';
    userTasksStates.isLoading = true;

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
    expect(result.setIsLoadingFinished).toBe(
      userTaskActions.setIsLoadingFinished,
    );
  });

  it('should update state when actions are called', () => {
    const {
      setCurrentMonthUserTasks,
      setHistoryUserTasks,
      selectUserTask,
      setIsLoading,
      setIsLoadingFinished,
    } = useUserTasks();
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

    setCurrentMonthUserTasks(mockTasks);
    expect(userTasksStates.currentMonthUserTasks).toEqual(mockTasks);

    setHistoryUserTasks(mockTasks);
    expect(userTasksStates.historyUserTasks).toEqual(mockTasks);

    selectUserTask('1');
    expect(userTasksStates.selectedUserTaskId).toBe('1');

    setIsLoading();
    expect(userTasksStates.isLoading).toBe(true);

    setIsLoadingFinished();
    expect(userTasksStates.isLoading).toBe(false);
  });
});
