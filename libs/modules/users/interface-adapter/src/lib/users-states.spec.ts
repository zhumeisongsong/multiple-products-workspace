import { act } from '@testing-library/react';
import { usersStates, usersActions } from './users-states';
import { User } from '@users/domain';
import { SelfCareTopic } from '@self-care-topics/domain';

describe('usersStates', () => {
  beforeAll(() => {
    global.localStorage = {
      getItem: vi.fn(),
      setItem: vi.fn(),
      removeItem: vi.fn(),
      clear: vi.fn(),
      length: 0,
      key: vi.fn(),
    };
  });

  beforeEach(() => {
    usersStates.me = null;
    usersStates.userPreferences = {
      selfCareTopics: [],
    };
    usersStates.isLoading = false;
  });

  it('should set me', () => {
    const user: User = { id: '1', email: 'test@test.com' };

    act(() => {
      usersActions.setMe(user);
    });

    expect(usersStates.me).toEqual(user);
  });

  it('should toggle self care topic', () => {
    const topic: SelfCareTopic = { id: '1', name: 'Test Topic' };

    act(() => {
      usersActions.toggleSelfCareTopic(topic);
    });

    expect(usersStates.userPreferences.selfCareTopics).toEqual([topic]);
  });

  it('should toggle self care topic', () => {
    const topic: SelfCareTopic = { id: '1', name: 'Test Topic' };

    act(() => {
      usersActions.toggleSelfCareTopic(topic);
    });
  });

  it('should handle loading state', () => {
    act(() => {
      usersActions.setIsLoading();
    });

    expect(usersStates.isLoading).toBeTruthy();

    act(() => {
      usersActions.setIsLoadingFinished();
    });

    expect(usersStates.isLoading).toBeFalsy();
  });
});
