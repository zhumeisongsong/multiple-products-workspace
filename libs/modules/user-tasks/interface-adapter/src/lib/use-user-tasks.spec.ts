import { describe, it, expect, beforeEach, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { UserTasksServiceFactory } from '@user-tasks/application';
import { UserTask, UserTaskStatusEnum } from '@user-tasks/domain';
import { useUserTasks } from './use-user-tasks';

describe('useUserTasks', () => {
  const mockUserTasks: UserTask[] = [
    {
      id: '1',
      userId: 'user1',
      name: 'Task 1',
      description: 'Description 1',
      status: UserTaskStatusEnum.TODO,
      categories: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ];

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should return initial state', () => {
    const { result } = renderHook(() => useUserTasks());

    expect(result.current.currentMonthUserTasks).toEqual([]);
    expect(result.current.historyUserTasks).toEqual([]);
    expect(result.current.selectedUserTaskId).toBeNull();
  });

  it('should get current month user tasks', async () => {
    const mockGetInstance = vi.spyOn(UserTasksServiceFactory, 'getInstance');
    mockGetInstance.mockReturnValue({
      findManyUserTasks: vi.fn().mockResolvedValue(mockUserTasks),
    } as any);

    const { result } = renderHook(() => useUserTasks());

    await act(async () => {
      await result.current.getCurrentMonthUserTasks();
    });

    expect(result.current.currentMonthUserTasks).toEqual(mockUserTasks);
  });

  it('should update user task status', () => {
    const { result } = renderHook(() => useUserTasks());

    act(() => {
      result.current.currentMonthUserTasks = mockUserTasks;
      result.current.updateUserTaskStatus('1', UserTaskStatusEnum.COMPLETED);
    });

    expect(result.current.currentMonthUserTasks[0].status).toBe(
      UserTaskStatusEnum.COMPLETED,
    );
  });

  it('should get history user tasks', async () => {
    const mockGetInstance = vi.spyOn(UserTasksServiceFactory, 'getInstance');
    mockGetInstance.mockReturnValue({
      findManyUserTasks: vi.fn().mockResolvedValue(mockUserTasks),
    } as any);

    const { result } = renderHook(() => useUserTasks());

    await act(async () => {
      await result.current.getHistoryUserTasks(5, 2023);
    });

    expect(result.current.historyUserTasks).toEqual(mockUserTasks);
  });

  it('should select user task', () => {
    const { result } = renderHook(() => useUserTasks());

    act(() => {
      result.current.selectUserTask('1');
    });

    expect(result.current.selectedUserTaskId).toBe('1');
  });
});
