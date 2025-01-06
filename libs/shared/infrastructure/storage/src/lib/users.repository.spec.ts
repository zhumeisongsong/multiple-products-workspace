import { describe, expect, it, vi } from 'vitest';
import { SelfCareTopic } from '@self-care-topics/domain';
import { User } from '@users/domain';

import { UsersRepositoryImpl } from './users.repository';
import { LocalStorageRepository } from './local-storage.repository';

describe('UsersRepository', () => {
  const mockLocalStorageRepository = {
    get: vi.fn(),
    set: vi.fn(),
  } as unknown as LocalStorageRepository;

  const usersRepository = new UsersRepositoryImpl(mockLocalStorageRepository);

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('findUserById', () => {
    it('should return user from local storage', async () => {
      const mockUser: User = {
        id: '123',
        preferences: {
          selfCareTopics: [],
        },
      };
      vi.mocked(mockLocalStorageRepository.get).mockImplementation(() => mockUser);

      const result = await usersRepository.findUserById('123');

      expect(result).toEqual(mockUser);
      expect(mockLocalStorageRepository.get).toHaveBeenCalledWith('user');
    });
  });

  describe('createUser', () => {
    it('should create and store new user', async () => {
      const mockUuid = '12345678-1234-1234-1234-123456789012';
      const cryptoSpy = vi.spyOn(crypto, 'randomUUID');
      vi.mocked(cryptoSpy).mockImplementation(() => mockUuid);

      await usersRepository.createUser();

      expect(mockLocalStorageRepository.set).toHaveBeenCalledWith('user', {
        id: mockUuid,
        preferences: {
          selfCareTopics: [],
        },
      });
    });
  });

  describe('updateUserSelfCareTopics', () => {
    it('should update user self care topics', async () => {
      const mockUser: User = {
        id: '123',
        preferences: {
          selfCareTopics: [],
        },
      };
      vi.mocked(mockLocalStorageRepository.get).mockImplementation(() => mockUser);

      const topics: SelfCareTopic[] = [
        { id: '1', name: 'Exercise' },
        { id: '2', name: 'Meditation' },
      ];

      await usersRepository.updateUserSelfCareTopics(topics);

      const expectedUser = {
        ...mockUser,
        preferences: {
          selfCareTopics: topics,
        },
      };

      expect(mockLocalStorageRepository.set).toHaveBeenCalledWith('user', expectedUser);
    });
  });
});

