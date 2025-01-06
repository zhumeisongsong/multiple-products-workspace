import { SelfCareTopic } from '@self-care-topics/domain';
import { User, UsersRepository } from '@users/domain';

export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async findUserById(): Promise<User> {
    return await this.usersRepository.findUserById('');
  }

  async createUser(): Promise<void> {
    return await this.usersRepository.createUser();
  }

  async saveUserSelfCareTopics(topics: SelfCareTopic[]): Promise<void> {
    return await this.usersRepository.updateUserSelfCareTopics(topics);
  }
}
