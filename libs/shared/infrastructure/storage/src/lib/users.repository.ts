import { SelfCareTopic } from '@self-care-topics/domain';
import { User, UsersRepository } from '@users/domain';

import { LocalStorageRepository } from './local-storage.repository';

const USER_KEY = 'user';

export class UsersRepositoryImpl implements UsersRepository {
  constructor(
    private readonly localStorageRepository: LocalStorageRepository,
  ) { }

  findUserById(id: string): Promise<User | null> {
    const user = this.localStorageRepository.get(USER_KEY);

    return Promise.resolve(user);
  }

  createUser(): Promise<void> {
    const uuid = crypto.randomUUID();
    const user: User = {
      id: uuid,
      preferences: {
        selfCareTopics: [],
      },
    };
    this.localStorageRepository.set(USER_KEY, user);

    return Promise.resolve();
  }

  updateUserSelfCareTopics(topics: SelfCareTopic[]): Promise<void> {
    const user = this.localStorageRepository.get(USER_KEY);

    user.preferences.selfCareTopics = topics;
    this.localStorageRepository.set(USER_KEY, user);

    return Promise.resolve();
  }
}
