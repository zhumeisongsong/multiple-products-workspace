import { LocalStorageRepository, UsersRepositoryImpl, UserTasksRepositoryImpl } from '@shared/infrastructure-storage';

import { LocalStorageInfrastructureContainer } from './local-storage-infrastructure-container';



describe('LocalStorageInfrastructureContainer', () => {
  beforeEach(() => {
    // Clear all instances before each test
    (LocalStorageInfrastructureContainer as any).localStorageRepository =
      undefined;
    (LocalStorageInfrastructureContainer as any).usersRepository = undefined;
    (LocalStorageInfrastructureContainer as any).userTasksRepository =
      undefined;
  });

  describe('getLocalStorageRepository', () => {
    it('should create and return LocalStorageRepository instance', () => {
      const repository =
        LocalStorageInfrastructureContainer.getLocalStorageRepository();

      expect(repository).toBeInstanceOf(LocalStorageRepository);
    });

    it('should return the same instance on subsequent calls', () => {
      const repository1 =
        LocalStorageInfrastructureContainer.getLocalStorageRepository();
      const repository2 =
        LocalStorageInfrastructureContainer.getLocalStorageRepository();

      expect(repository1).toBe(repository2);
    });
  });

  describe('getUsersRepository', () => {
    it('should create and return UsersRepository instance', () => {
      const repository =
        LocalStorageInfrastructureContainer.getUsersRepository();

        expect(repository).toBeInstanceOf(UsersRepositoryImpl);
    });

    it('should return the same instance on subsequent calls', () => {
      const repository1 =
        LocalStorageInfrastructureContainer.getUsersRepository();
      const repository2 =
        LocalStorageInfrastructureContainer.getUsersRepository();

      expect(repository1).toBe(repository2);
    });
  });

  describe('getUserTasksRepository', () => {
    it('should create and return UserTasksRepository instance', () => {
      const repository =
        LocalStorageInfrastructureContainer.getUserTasksRepository();

      expect(repository).toBeInstanceOf(UserTasksRepositoryImpl);
    });

    it('should return the same instance on subsequent calls', () => {
      const repository1 =
        LocalStorageInfrastructureContainer.getUserTasksRepository();
      const repository2 =
        LocalStorageInfrastructureContainer.getUserTasksRepository();

      expect(repository1).toBe(repository2);
    });
  });
});
