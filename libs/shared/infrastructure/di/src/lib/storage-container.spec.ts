import { LocalStorageRepository, UsersRepositoryImpl, UserTasksRepositoryImpl } from '@shared/infrastructure-storage';

import { StorageContainer } from './storage-container';



describe('StorageContainer', () => {
  beforeEach(() => {
    // Clear all instances before each test
    (StorageContainer as any).localStorageRepository =
      undefined;
    (StorageContainer as any).usersRepository = undefined;
    (StorageContainer as any).userTasksRepository =
      undefined;
  });

  describe('getLocalStorageRepository', () => {
    it('should create and return LocalStorageRepository instance', () => {
      const repository =
        StorageContainer.getLocalStorageRepository();

      expect(repository).toBeInstanceOf(LocalStorageRepository);
    });

    it('should return the same instance on subsequent calls', () => {
      const repository1 =
        StorageContainer.getLocalStorageRepository();
      const repository2 =
        StorageContainer.getLocalStorageRepository();

      expect(repository1).toBe(repository2);
    });
  });

  describe('getUsersRepository', () => {
    it('should create and return UsersRepository instance', () => {
      const repository =
        StorageContainer.getUsersRepository();

        expect(repository).toBeInstanceOf(UsersRepositoryImpl);
    });

    it('should return the same instance on subsequent calls', () => {
      const repository1 =
        StorageContainer.getUsersRepository();
      const repository2 =
        StorageContainer.getUsersRepository();

      expect(repository1).toBe(repository2);
    });
  });

  describe('getUserTasksRepository', () => {
    it('should create and return UserTasksRepository instance', () => {
      const repository =
        StorageContainer.getUserTasksRepository();

      expect(repository).toBeInstanceOf(UserTasksRepositoryImpl);
    });

    it('should return the same instance on subsequent calls', () => {
      const repository1 =
        StorageContainer.getUserTasksRepository();
      const repository2 =
        StorageContainer.getUserTasksRepository();

      expect(repository1).toBe(repository2);
    });
  });
});
