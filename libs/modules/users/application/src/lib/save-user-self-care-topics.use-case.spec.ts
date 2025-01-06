
import { describe, it, expect, vi } from 'vitest';
import { saveUserSelfCareTopicsUseCase } from './save-user-self-care-topics.use-case';
import { SelfCareTopic } from '@self-care-topics/domain';
import { UsersService } from './users.service';

describe('saveUserSelfCareTopicsUseCase', () => {
  const mockUsersService = {
    saveUserSelfCareTopics: vi.fn()
  } as unknown as UsersService;

  it('should save self care topics using users service', async () => {
    const topics: SelfCareTopic[] = [
      { id: '1', name: 'Topic 1' },
      { id: '2', name: 'Topic 2' }
    ];
    const saveUserSelfCareTopicsSpy = vi.fn().mockResolvedValue(topics);
    mockUsersService.saveUserSelfCareTopics = saveUserSelfCareTopicsSpy;

    const result = await saveUserSelfCareTopicsUseCase(topics, mockUsersService);

    expect(result).toEqual(topics);
    expect(mockUsersService.saveUserSelfCareTopics).toHaveBeenCalledWith(topics);
    expect(mockUsersService.saveUserSelfCareTopics).toHaveBeenCalledTimes(1);
  });
});
