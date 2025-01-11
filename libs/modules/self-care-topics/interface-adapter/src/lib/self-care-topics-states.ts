import { SelfCareTopic } from '@self-care-topics/domain';
import { proxy } from 'valtio';

import { selfCareTopics } from './self-care-topics-data';

export type SelfCareTopicsStates = {
  selfCareTopics: SelfCareTopic[];
};

export const selfCareTopicsStates = proxy<SelfCareTopicsStates>({
  selfCareTopics: selfCareTopics,
});

export const selfCareTopicsActions = {
  setSelfCareTopics: (selfCareTopics: SelfCareTopic[]) => {
    selfCareTopicsStates.selfCareTopics = selfCareTopics;
  }
};
