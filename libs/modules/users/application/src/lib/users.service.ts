import { SelfCareTopic } from '@self-care-topics/domain';
import { UsersRepository } from '@users/domain';

export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async getUserSelfCareTopics(): Promise<SelfCareTopic[]> {
    return await this.usersRepository.getUserSelfCareTopics();
  }

  async saveUserSelfCareTopics(topics: SelfCareTopic[]): Promise<void> {
    return await this.usersRepository.setUserSelfCareTopics(topics);
  }
}

let instance: UsersService | null = null;

export const initializeUsersService = (repository: UsersRepository) => {
  if (!instance) {
    instance = new UsersService(repository);
  }
  return instance;
};

export const getUsersService = () => {
  if (!instance) {
    throw new Error('UsersService must be initialized before use');
  }
  return instance;
};
