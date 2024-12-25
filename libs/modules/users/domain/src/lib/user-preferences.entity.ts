import { SelfCareTopic } from '@self-care-topics/domain';

export class UserPreferences {
  private selfCareTopics: SelfCareTopic[];

  constructor(selfCareTopics: SelfCareTopic[]) {
    this.selfCareTopics = selfCareTopics;
  }

  getSelfCareTopics(): SelfCareTopic[] {
    return this.selfCareTopics;
  }

  addSelfCareTopic(selfCareTopic: SelfCareTopic) {
    if (!this.selfCareTopics.includes(selfCareTopic)) {
      this.selfCareTopics.push(selfCareTopic);
    }
  }

  removeSelfCareTopic(selfCareTopic: SelfCareTopic) {
    this.selfCareTopics = this.selfCareTopics.filter(
      (topic) => topic.id !== selfCareTopic.id,
    );
  }
}
