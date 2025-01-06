import { describe, it, expect, vi } from 'vitest';
import { SelfCareTopic } from '@self-care-topics/domain';
import { User } from '@users/domain';

import { getUserSelfCareTopicsUseCase } from './get-user-self-care-topics.use-case';
import { UsersService } from './users.service';

describe('getUserSelfCareTopicsUseCase', () => {
  let mockUsersService: UsersService;

  beforeEach(() => {
    mockUsersService = {
      findUserById: vi.fn(),
      saveUserSelfCareTopics: vi.fn(),
      createUser: vi.fn(),
    } as unknown as UsersService;
  });

  it('should return user self care topics when user is found', async () => {
    const mockTopics: SelfCareTopic[] = [
      { id: 'topic1' } as SelfCareTopic,
      { id: 'topic2' } as SelfCareTopic,
    ];
    const mockUser: User = {
      id: 'user-id',
      preferences: {
        selfCareTopics: mockTopics,
      },
    };
    vi.mocked(mockUsersService.findUserById).mockResolvedValue(mockUser);

    const result = await getUserSelfCareTopicsUseCase(mockUsersService);

    expect(result).toEqual(mockTopics);
    expect(mockUsersService.findUserById).toHaveBeenCalled();
  });
});
