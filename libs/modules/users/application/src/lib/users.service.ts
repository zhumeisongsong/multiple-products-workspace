import { SelfCareTopic } from '@self-care-topics/domain';
import {
  LocalStorageRepository,
  UsersRepositoryImpl,
} from '@shared/infrastructure-storage';

export class UsersService {
  private usersRepository: UsersRepositoryImpl;

  constructor() {
    this.usersRepository = new UsersRepositoryImpl(
      new LocalStorageRepository(),
    );
  }

  async getUserSelfCareTopics(): Promise<SelfCareTopic[]> {
    return await this.usersRepository.getUserSelfCareTopics();
  }

  async setUserSelfCareTopics(topics: SelfCareTopic[]) {
    await this.usersRepository.setUserSelfCareTopics(topics);

    return 'success';
  }
}
