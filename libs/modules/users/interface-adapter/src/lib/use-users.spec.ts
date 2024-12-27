import { SelfCareTopic } from '@self-care-topics/domain';
import { User } from '@users/domain';
import { describe, it, expect, vi } from 'vitest';

import { useUsers } from './use-users';
import { usersStates, usersActions } from './users-states';

vi.mock('valtio', async (importOriginal) => {
  const actual = await importOriginal<typeof import('valtio')>();
  return {
    ...actual,
    useSnapshot: vi.fn((state) => state),
  };
});

describe('useUsers', () => {
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
    vi.clearAllMocks();
    usersStates.me = null;
    usersStates.userPreferences = {
      selfCareTopics: [],
    };
    usersStates.isLoading = false;
  });

  it('should return the current state and actions', () => {
    const mockUser: User = {
      id: '1',
      email: 'test@test.com',
    };

    const mockTopics: SelfCareTopic[] = [{ id: '1', name: 'Test Topic' }];

    usersStates.me = mockUser;
    usersStates.userPreferences.selfCareTopics = mockTopics;
    usersStates.isLoading = true;

    const result = useUsers();

    expect(result.me).toEqual(mockUser);
    expect(result.userPreferences.selfCareTopics).toEqual(mockTopics);
    expect(result.isLoading).toBe(true);
    expect(result.setMe).toBe(usersActions.setMe);
    expect(result.toggleSelfCareTopic).toBe(usersActions.toggleSelfCareTopic);
    expect(result.setIsLoading).toBe(usersActions.setIsLoading);
    expect(result.setIsLoadingFinished).toBe(usersActions.setIsLoadingFinished);
  });

  it('should update state when actions are called', () => {
    const { setMe, toggleSelfCareTopic, setIsLoading, setIsLoadingFinished } =
      useUsers();

    setMe({ id: '1', email: 'test@test.com' });
    expect(usersStates.me).toEqual({ id: '1', email: 'test@test.com' });

    toggleSelfCareTopic({ id: '1', name: 'Test Topic' });
    expect(usersStates.userPreferences.selfCareTopics).toEqual([
      { id: '1', name: 'Test Topic' },
    ]);

    setIsLoading();
    expect(usersStates.isLoading).toBe(true);

    setIsLoadingFinished();
    expect(usersStates.isLoading).toBe(false);
  });
});
