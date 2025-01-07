
import { describe, it, expect, vi } from 'vitest';
import { updateUserSelfCareTopicsUseCase } from './update-user-self-care-topics.use-case';
import { SelfCareTopic } from '@self-care-topics/domain';
import { UsersService } from './users.service';

describe('updateUserSelfCareTopicsUseCase', () => {
  const mockUsersService = {
    updateUserSelfCareTopics: vi.fn()
  } as unknown as UsersService;

  it('should save self care topics using users service', async () => {
    const topics: SelfCareTopic[] = [
      { id: '1', name: 'Topic 1' },
      { id: '2', name: 'Topic 2' }
    ];
    const updateUserSelfCareTopicsSpy = vi.fn().mockResolvedValue(topics);
    mockUsersService.updateUserSelfCareTopics = updateUserSelfCareTopicsSpy;

    const result = await updateUserSelfCareTopicsUseCase(topics, mockUsersService);

    expect(result).toEqual(topics);
    expect(mockUsersService.updateUserSelfCareTopics).toHaveBeenCalledWith(topics);
    expect(mockUsersService.updateUserSelfCareTopics).toHaveBeenCalledTimes(1);
  });
});
