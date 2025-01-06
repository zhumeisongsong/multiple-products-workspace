import { describe, it, expect, vi } from 'vitest';

import { useUsers } from './use-users';
import { usersStates, usersActions } from './users-states';

vi.mock('valtio', () => ({
  useSnapshot: vi.fn((state) => state),
}));

describe('useUsers', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    usersStates.me = null;
  });

  it('should return user states and actions', () => {
    usersStates.me = { id: '1', preferences: { selfCareTopics: [] } };

    const result = useUsers();

    expect(result.me).toEqual({ id: '1', preferences: { selfCareTopics: [] } });
    expect(result).toEqual({
      me: usersStates.me,
      ...usersActions,
    });
  });

  it('should return null me when no user is set', () => {
    const result = useUsers();

    expect(result.me).toBeNull();
  });
});
