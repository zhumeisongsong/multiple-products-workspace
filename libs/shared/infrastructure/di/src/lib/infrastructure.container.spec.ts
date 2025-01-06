import { InfrastructureContainer } from './infrastructure.container';
import { LocalStorageRepository } from '@shared/infrastructure-storage';

describe('InfrastructureContainer', () => {
  beforeEach(() => {
    // Clear all instances before each test
    (InfrastructureContainer as any).localStorageRepository = undefined;
    (InfrastructureContainer as any).usersRepository = undefined;
    (InfrastructureContainer as any).userTasksRepository = undefined;
  });

  describe('getLocalStorageRepository', () => {
    it('should create and return LocalStorageRepository instance', () => {
      const repository = InfrastructureContainer.getLocalStorageRepository();
      
      expect(repository).toBeInstanceOf(LocalStorageRepository);
    });

    it('should return the same instance on subsequent calls', () => {
      const repository1 = InfrastructureContainer.getLocalStorageRepository();
      const repository2 = InfrastructureContainer.getLocalStorageRepository();
      
      expect(repository1).toBe(repository2);
    });
  });

  describe('getUsersRepository', () => {
    it('should create and return UsersRepository instance', () => {
      const repository = InfrastructureContainer.getUsersRepository();
      
      expect(repository).toBeDefined();
    });

    it('should return the same instance on subsequent calls', () => {
      const repository1 = InfrastructureContainer.getUsersRepository();
      const repository2 = InfrastructureContainer.getUsersRepository();
      
      expect(repository1).toBe(repository2);
    });
  });

  describe('getUserTasksRepository', () => {
    it('should create and return UserTasksRepository instance', () => {
      const repository = InfrastructureContainer.getUserTasksRepository();
      
      expect(repository).toBeDefined();
    });

    it('should return the same instance on subsequent calls', () => {
      const repository1 = InfrastructureContainer.getUserTasksRepository();
      const repository2 = InfrastructureContainer.getUserTasksRepository();
      
      expect(repository1).toBe(repository2);
    });
  });
});
