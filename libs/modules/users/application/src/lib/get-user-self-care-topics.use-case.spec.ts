import { describe, it, expect, vi } from 'vitest';
import { getUserSelfCareTopicsUseCase } from './get-user-self-care-topics.use-case';
import { SelfCareTopic } from '@self-care-topics/domain';
import { UsersService } from './users.service';

describe('getUserSelfCareTopicsUseCase', () => {
  const mockUsersService = {
    findUserById: vi.fn(),
    createUser: vi.fn(),
    saveUserSelfCareTopics: vi.fn(),
  } as unknown as UsersService;

  it('should return self care topics from users service', async () => {
    const expectedTopics: SelfCareTopic[] = [
      { id: '1', name: 'Topic 1' },
      { id: '2', name: 'Topic 2' },
    ];
    const findUserByIdSpy = vi.fn().mockResolvedValue(expectedTopics);
    mockUsersService.findUserById = findUserByIdSpy;

    const result = await getUserSelfCareTopicsUseCase(mockUsersService);

    expect(result).toEqual(expectedTopics);
    expect(mockUsersService.findUserById).toHaveBeenCalledTimes(1);
  });
});
