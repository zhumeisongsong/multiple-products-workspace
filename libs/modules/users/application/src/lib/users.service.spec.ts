import { describe, it, expect, vi } from 'vitest';
import { UsersService } from './users.service';
import { SelfCareTopic } from '@self-care-topics/domain';

describe('UsersService', () => {
  const mockUsersRepository = {
    getUserSelfCareTopics: vi.fn(),
    setUserSelfCareTopics: vi.fn()
  };

  const usersService = new UsersService(mockUsersRepository);

  describe('getUserSelfCareTopics', () => {
    it('should return self care topics from repository', async () => {
      const expectedTopics: SelfCareTopic[] = [
        { id: '1', name: 'Topic 1' },
        { id: '2', name: 'Topic 2' }
      ];
      mockUsersRepository.getUserSelfCareTopics.mockResolvedValue(expectedTopics);

      const result = await usersService.getUserSelfCareTopics();

      expect(result).toEqual(expectedTopics);
      expect(mockUsersRepository.getUserSelfCareTopics).toHaveBeenCalledTimes(1);
    });
  });

  describe('saveUserSelfCareTopics', () => {
    it('should save self care topics to repository', async () => {
      const topics: SelfCareTopic[] = [
        { id: '1', name: 'Topic 1' },
        { id: '2', name: 'Topic 2' }
      ];
      mockUsersRepository.setUserSelfCareTopics.mockResolvedValue(undefined);

      await usersService.saveUserSelfCareTopics(topics);

      expect(mockUsersRepository.setUserSelfCareTopics).toHaveBeenCalledWith(topics);
      expect(mockUsersRepository.setUserSelfCareTopics).toHaveBeenCalledTimes(1);
    });
  });
});
