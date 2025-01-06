import { SelfCareTopic } from '@self-care-topics/domain';
import { User } from '../entities/user.entity';

export interface UsersRepository {
  findUserById(id: string): Promise<User| null>;
  createUser(): Promise<void>;
  updateUserSelfCareTopics(topics: SelfCareTopic[]): Promise<void>;
}

