import { APIInfrastructureContainer } from './api-infrastructure-container';
import { UsersRepositoryImpl } from '@shared/infrastructure-api';

describe('APIInfrastructureContainer', () => {
  beforeEach(() => {
    // Clear all instances before each test
    (APIInfrastructureContainer as any).usersRepository = undefined;
  });

  describe('getUsersRepository', () => {
    it('should create and return UsersRepository instance', () => {
      const repository = APIInfrastructureContainer.getUsersRepository();

      expect(repository).toBeInstanceOf(UsersRepositoryImpl);
    });

    it('should return the same instance on subsequent calls', () => {
      const repository1 = APIInfrastructureContainer.getUsersRepository();
      const repository2 = APIInfrastructureContainer.getUsersRepository();

      expect(repository1).toBe(repository2);
    });
  });
});
