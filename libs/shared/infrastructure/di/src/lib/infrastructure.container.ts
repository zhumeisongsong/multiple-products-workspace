import { OpenAIClient } from '@shared/infrastructure-open-ai';
import {
  LocalStorageRepository,
  UsersRepositoryImpl,
  UserTasksRepositoryImpl,
} from '@shared/infrastructure-storage';

import { UserTasksRepository } from '@user-tasks/domain';
import { UsersRepository } from '@users/domain';

export class InfrastructureContainer {
  private static localStorageRepository: LocalStorageRepository;
  private static usersRepository: UsersRepository;
  private static userTasksRepository: UserTasksRepository;
  private static aiClient: OpenAIClient;

  static getLocalStorageRepository(): LocalStorageRepository {
    if (!this.localStorageRepository) {
      this.localStorageRepository = new LocalStorageRepository();
    }
    return this.localStorageRepository;
  }

  static getUsersRepository(): UsersRepository {
    if (!this.usersRepository) {
      this.usersRepository = new UsersRepositoryImpl(
        this.getLocalStorageRepository(),
      );
    }
    return this.usersRepository;
  }

  static getUserTasksRepository(): UserTasksRepository {
    if (!this.userTasksRepository) {
      this.userTasksRepository = new UserTasksRepositoryImpl(
        this.getLocalStorageRepository(),
      );
    }
    return this.userTasksRepository;
  }

  static getAIClient(): OpenAIClient {
    if (!this.aiClient) {
      this.aiClient = new OpenAIClient();
    }
    return this.aiClient;
  }
}
