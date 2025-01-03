import { SelfCareTopic } from '@self-care-topics/domain';
import { UserTask } from '@user-tasks/domain';

export interface AIAdapter {
  generateTasks(
    userSelfCareTopics: SelfCareTopic[],
    count: number,
  ): Promise<UserTask[]>;
}
