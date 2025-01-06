import { UsersRepository } from '@users/domain';

import { UsersService } from './users.service';

export class UsersServiceFactory {
  private static instance: UsersService | null = null;

  static initialize(repository: UsersRepository): void {
    if (!this.instance) {
      this.instance = new UsersService(repository);
    }
  }

  static getInstance(): UsersService {
    if (!this.instance) {
      throw new Error('UsersService must be initialized before use');
    }
    return this.instance;
  }
}
