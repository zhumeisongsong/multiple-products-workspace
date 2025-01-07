import { UsersRepository } from '@users/domain';

import { UsersServiceFactory } from './users-service-factory';
import { UsersService } from './users.service';

describe('UsersServiceFactory', () => {
  let repository: UsersRepository;

  beforeEach(() => {
    // Reset the singleton instance before each test
    (UsersServiceFactory as any).instance = null;
    repository = {
      findUserById: vi.fn(),
      createUser: vi.fn(),
      updateUserSelfCareTopics: vi.fn(),
    };
  });

  describe('initialize', () => {
    it('should create a new instance when not initialized', () => {
      UsersServiceFactory.initialize(repository);
      expect(UsersServiceFactory.getInstance()).toBeInstanceOf(UsersService);
    });

    it('should not create new instance when already initialized', () => {
      UsersServiceFactory.initialize(repository);
      const firstInstance = UsersServiceFactory.getInstance();

      UsersServiceFactory.initialize(repository);
      const secondInstance = UsersServiceFactory.getInstance();

      expect(firstInstance).toBe(secondInstance);
    });
  });

  describe('getInstance', () => {
    it('should throw error when not initialized', () => {
      expect(() => UsersServiceFactory.getInstance()).toThrow(
        'UsersService must be initialized before use',
      );
    });

    it('should return instance when initialized', () => {
      UsersServiceFactory.initialize(repository);
      expect(UsersServiceFactory.getInstance()).toBeDefined();
    });
  });
});
