import { SelfCareTopicEntity } from '@self-care-topics/domain';

export class UserPreferences {
  private selfCareTopics: SelfCareTopicEntity[];

  constructor(selfCareTopics: SelfCareTopicEntity[]) {
    this.selfCareTopics = selfCareTopics;
  }

  getSelfCareTopics(): SelfCareTopicEntity[] {
    return this.selfCareTopics;
  }

  addSelfCareTopic(selfCareTopic: SelfCareTopicEntity) {
    if (!this.selfCareTopics.includes(selfCareTopic)) {
      this.selfCareTopics.push(selfCareTopic);
    }
  }

  removeSelfCareTopic(selfCareTopic: SelfCareTopicEntity) {
    this.selfCareTopics = this.selfCareTopics.filter(
      (topic) => topic.id !== selfCareTopic.id,
    );
  }
}
