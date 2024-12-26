import { SelfCareTopic } from '@self-care-topics/domain';
import { proxy } from 'valtio';

import { selfCareTopics } from './self-care-topics-data';

export type SelfCareTopicsStates = {
  selfCareTopics: SelfCareTopic[];
  isLoading: boolean;
};

export const selfCareTopicsStates = proxy<SelfCareTopicsStates>({
  selfCareTopics: selfCareTopics,
  isLoading: false,
});

export const selfCareTopicsActions = {
  setSelfCareTopics: (selfCareTopics: SelfCareTopic[]) => {
    selfCareTopicsStates.selfCareTopics = selfCareTopics;
  },

  setIsLoading: () => {
    selfCareTopicsStates.isLoading = true;
  },

  setIsLoadingFinished: () => {
    selfCareTopicsStates.isLoading = false;
  },
};
