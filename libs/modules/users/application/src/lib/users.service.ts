import { SelfCareTopic } from '@self-care-topics/domain';
import { UsersRepository } from '@users/domain';

export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async getUserSelfCareTopics(): Promise<SelfCareTopic[]> {
    return await this.usersRepository.getUserSelfCareTopics();
  }

  async saveUserSelfCareTopics(topics: SelfCareTopic[]) {
    await this.usersRepository.setUserSelfCareTopics(topics);

    return 'success';
  }
}
