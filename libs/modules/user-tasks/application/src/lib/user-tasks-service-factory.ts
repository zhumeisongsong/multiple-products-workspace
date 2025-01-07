import { UserTasksRepository } from '@user-tasks/domain';

import { UserTasksService } from './user-tasks.service';

export class UserTasksServiceFactory {
  private static instance: UserTasksService | null = null;

  static initialize(repository: UserTasksRepository): void {
    if (!this.instance) {
      this.instance = new UserTasksService(repository);
    }
  }

  static getInstance(): UserTasksService {
    if (!this.instance) {
      throw new Error('UserTasksService must be initialized before use');
    }
    return this.instance;
  }
}
