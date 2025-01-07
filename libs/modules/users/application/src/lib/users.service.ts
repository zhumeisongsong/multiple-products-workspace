import { SelfCareTopic } from '@self-care-topics/domain';
import { User, UsersRepository } from '@users/domain';

export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async findUserById(id: string): Promise<User | null> {
    return await this.usersRepository.findUserById(id);
  }

  async createUser(): Promise<void> {
    return await this.usersRepository.createUser();
  }

  async updateUserSelfCareTopics(topics: SelfCareTopic[]): Promise<void> {
    return await this.usersRepository.updateUserSelfCareTopics(topics);
  }
}
