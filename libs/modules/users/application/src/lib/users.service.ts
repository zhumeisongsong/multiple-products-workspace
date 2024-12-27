import { SelfCareTopic } from '@self-care-topics/domain';

export class UsersService {
  async getUserSelfCareCategories(): Promise<SelfCareTopic[]> {
    // repository call to get user self care categories
    return [];
  }

  async toggleUserSelfCareTopic(topicId: string) {
    // repository call to toggle user self care topic
    return 'success';
  }
}
