import { SelfCareTopic } from '@self-care-topics/domain';
import {
  LocalStorageRepository,
  IUsersRepository,
} from '@shared/infrastructure-storage';

export class UsersService {
  private usersRepository: IUsersRepository;

  constructor() {
    this.usersRepository = new IUsersRepository(new LocalStorageRepository());
  }

  async getUserSelfCareTopics(): Promise<SelfCareTopic[]> {
    return await this.usersRepository.getUserSelfCareTopics();
  }

  async toggleUserSelfCareTopic(topic: SelfCareTopic) {
    const topics = await this.usersRepository.getUserSelfCareTopics();

    if (topics.some((item) => item.id === topic.id)) {
      await this.usersRepository.deleteUserSelfCareTopic(topic);
    } else {
      await this.usersRepository.addUserSelfCareTopic(topic);
    }

    return 'success';
  }
}
