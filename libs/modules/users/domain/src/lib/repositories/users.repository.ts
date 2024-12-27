import { SelfCareTopic } from '@self-care-topics/domain';

export interface UsersRepository {
  getUserSelfCareTopics(): Promise<SelfCareTopic[]>;
  deleteUserSelfCareTopic(topic: SelfCareTopic): Promise<void>;
  addUserSelfCareTopic(topic: SelfCareTopic): Promise<void>;
}
