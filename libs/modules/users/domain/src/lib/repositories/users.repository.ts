import { SelfCareTopic } from '@self-care-topics/domain';

export interface UsersRepository {
  getUserSelfCareTopics(): Promise<SelfCareTopic[]>;
  setUserSelfCareTopics(topics: SelfCareTopic[]): Promise<void>;
}
