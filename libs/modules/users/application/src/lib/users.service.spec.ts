import { describe, it, expect, vi } from 'vitest';
import { UsersService } from './users.service';
import { SelfCareTopic } from '@self-care-topics/domain';

describe('UsersService', () => {
  const mockUsersRepository = {
    findUserById: vi.fn(),
    updateUserSelfCareTopics: vi.fn(),
    createUser: vi.fn(),
  };

  const usersService = new UsersService(mockUsersRepository);

  describe('findUserById', () => {
    it('should find a user by id', async () => {
      const user = await usersService.findUserById('');
      expect(user).toBeDefined();
    });
  });

  describe('createUser', () => {
    it('should create a user', async () => {
      await usersService.createUser();
      expect(mockUsersRepository.createUser).toHaveBeenCalled();
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
