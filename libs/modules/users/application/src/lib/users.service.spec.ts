import { describe, it, expect, beforeEach, vi } from 'vitest';
import { SelfCareTopic } from '@self-care-topics/domain';
import { User, UsersRepository } from '@users/domain';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;
  let mockRepository: UsersRepository;

  beforeEach(() => {
    mockRepository = {
      findUserById: vi.fn(),
      createUser: vi.fn(),
      updateUserSelfCareTopics: vi.fn(),
    } as UsersRepository;

    service = new UsersService(mockRepository);
  });

  describe('findUserById', () => {
    it('should call repository findUserById with correct id', async () => {
      const userId = 'test-id';
      const mockUser: User = { id: userId } as User;
      vi.mocked(mockRepository.findUserById).mockResolvedValue(mockUser);

      const result = await service.findUserById(userId);

      expect(mockRepository.findUserById).toHaveBeenCalledWith(userId);
      expect(result).toBe(mockUser);
    });

    it('should return null when user not found', async () => {
      const userId = 'non-existent-id';
      vi.mocked(mockRepository.findUserById).mockResolvedValue(null);

      const result = await service.findUserById(userId);

      expect(result).toBeNull();
    });
  });

  describe('createUser', () => {
    it('should call repository createUser', async () => {
      await service.createUser();

      expect(mockRepository.createUser).toHaveBeenCalled();
    });
  });

  describe('updateUserSelfCareTopics', () => {
    it('should call repository updateUserSelfCareTopics with correct topics', async () => {
      const mockTopics: SelfCareTopic[] = [
        { id: 'topic1' } as SelfCareTopic,
        { id: 'topic2' } as SelfCareTopic,
      ];

      await service.updateUserSelfCareTopics(mockTopics);

      expect(mockRepository.updateUserSelfCareTopics).toHaveBeenCalledWith(mockTopics);
    });
  });
});

