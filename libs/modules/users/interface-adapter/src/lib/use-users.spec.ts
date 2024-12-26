import { act, renderHook } from '@testing-library/react';
import { useUsers } from './use-users';
import { usersStates } from './users-states';
import { User } from '@users/domain';
import { SelfCareTopic } from '@self-care-topics/domain';

describe('useUsers', () => {
  beforeEach(() => {
    usersStates.me = null;
    usersStates.userPreferences = {
      selfCareTopics: [],
    };
    usersStates.isLoading = false;
  });

  it('should return initial state', () => {
    const { result } = renderHook(() => useUsers());

    expect(result.current.me).toBeNull();
    expect(result.current.userPreferences.selfCareTopics).toEqual([]);
    expect(result.current.isLoading).toBeFalsy();
  });

  it('should set me', () => {
    const { result } = renderHook(() => useUsers());
    const user: User = { id: '1', email: 'test@test.com' };

    act(() => {
      result.current.setMe(user);
    });

    expect(result.current.me).toEqual(user);
  });

  it('should toggle self care topic', () => {
    const { result } = renderHook(() => useUsers());
    const topic: SelfCareTopic = { id: '1', name: 'Test Topic' };

    act(() => {
      result.current.toggleSelfCareTopic(topic);
    });

    expect(result.current.userPreferences.selfCareTopics).toEqual([topic]);

    act(() => {
      result.current.toggleSelfCareTopic(topic);
    });

    expect(result.current.userPreferences.selfCareTopics).toEqual([]);
  });

  it('should handle loading state', () => {
    const { result } = renderHook(() => useUsers());

    act(() => {
      result.current.setIsLoading();
    });

    expect(result.current.isLoading).toBeTruthy();

    act(() => {
      result.current.setIsLoadingFinished();
    });

    expect(result.current.isLoading).toBeFalsy();
  });
});
