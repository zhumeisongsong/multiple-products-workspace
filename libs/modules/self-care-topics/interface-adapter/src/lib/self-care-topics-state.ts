import { SelfCareTopic } from '@self-care-topics/domain';
import { proxy } from 'valtio';

export type SelfCareTopicsState = {
  selfCareTopics: SelfCareTopic[];
  isLoading: boolean;
};

export const selfCareTopicsState = proxy<SelfCareTopicsState>({
  selfCareTopics: [],
  isLoading: false,
});

export const selfCareTopicsActions = {
  setSelfCareTopics: (selfCareTopics: SelfCareTopic[]) => {
    selfCareTopicsState.selfCareTopics = selfCareTopics;
  },

  setIsLoading: () => {
    selfCareTopicsState.isLoading = true;
  },

  setIsLoadingFinished: () => {
    selfCareTopicsState.isLoading = false;
  },
};
