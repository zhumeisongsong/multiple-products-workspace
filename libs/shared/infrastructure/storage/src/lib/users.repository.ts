import { SelfCareTopic } from '@self-care-topics/domain';
import { UsersRepository } from '@users/domain';

import { LocalStorageRepository } from './local-storage.repository';

const USER_SELF_CARE_TOPICS_KEY = 'user-self-care-topics';

export class UsersRepositoryImpl implements UsersRepository {
  constructor(
    private readonly localStorageRepository: LocalStorageRepository,
  ) {}

  getUserSelfCareTopics(): Promise<SelfCareTopic[]> {
    const userSelfCareTopics = this.localStorageRepository.get(
      USER_SELF_CARE_TOPICS_KEY,
    );

    return Promise.resolve(userSelfCareTopics || []);
  }

  addUserSelfCareTopic(topic: SelfCareTopic): Promise<void> {
    const userSelfCareTopics =
      this.localStorageRepository.get(USER_SELF_CARE_TOPICS_KEY) || [];

    userSelfCareTopics.push(topic);
    this.localStorageRepository.set(
      USER_SELF_CARE_TOPICS_KEY,
      userSelfCareTopics,
    );

    return Promise.resolve();
  }

  deleteUserSelfCareTopic(topic: SelfCareTopic): Promise<void> {
    const userSelfCareTopics =
      this.localStorageRepository.get(USER_SELF_CARE_TOPICS_KEY) || [];

    this.localStorageRepository.set(
      USER_SELF_CARE_TOPICS_KEY,
      userSelfCareTopics.filter((item: SelfCareTopic) => item.id !== topic.id),
    );

    return Promise.resolve();
  }
}
