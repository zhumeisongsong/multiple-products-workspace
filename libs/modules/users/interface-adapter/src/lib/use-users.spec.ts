import { describe, it, expect, vi } from 'vitest';

import { useUsers } from './use-users';
import { usersStates, usersActions } from './users-states';

vi.mock('valtio', () => ({
  useSnapshot: vi.fn((state) => state),
  proxy: vi.fn((obj) => obj),
}));

describe('useUsers', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    usersStates.userId = null;
    usersStates.email = null;
    usersStates.firstName = null;
    usersStates.lastName = null;
    usersStates.userPreferences = {
      selfCareTopics: [],
    };
  });

  it('should return user states and actions', () => {
    usersStates.userId = '1';
    usersStates.email = 'test@test.com';
    usersStates.firstName = 'John';
    usersStates.lastName = 'Doe';
    usersStates.userPreferences = {
      selfCareTopics: [],
    };

    const result = useUsers();

    expect(result).toEqual({
      ...usersStates,
      ...usersActions,
    });
  });

  it('should return null me when no user is set', () => {
    const result = useUsers();

    expect(result.userId).toBeNull();
    expect(result.email).toBeNull();
    expect(result.firstName).toBeNull();
    expect(result.lastName).toBeNull();
    expect(result.userPreferences).toEqual({
      selfCareTopics: [],
    });
  });
});
