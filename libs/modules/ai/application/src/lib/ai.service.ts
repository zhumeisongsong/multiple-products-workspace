import { SelfCareTopic } from '@self-care-topics/domain';
import { UserTask } from '@user-tasks/domain';

export class AIService {
  async generateUserTasks(
    userSelfCareTopics: SelfCareTopic[],
    count: number,
  ): Promise<UserTask[]> {
    return [];
  }
}
