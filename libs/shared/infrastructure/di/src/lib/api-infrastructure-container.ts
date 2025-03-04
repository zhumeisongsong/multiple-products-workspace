import { graphqlClient, UsersRepositoryImpl } from '@shared/infrastructure-api';
import { UsersRepository } from '@users/domain';

export class APIInfrastructureContainer {
  private static client: typeof graphqlClient = graphqlClient;
  private static usersRepository: UsersRepository;

  static getUsersRepository() {
    if (!this.usersRepository) {
      this.usersRepository = new UsersRepositoryImpl(this.client);
    }
    return this.usersRepository;
  }
}
