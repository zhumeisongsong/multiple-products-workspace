import { useSnapshot } from 'valtio';

import {
  selfCareTopicsStates,
  selfCareTopicsActions,
} from './self-care-topics-states';

export const useSelfCareTopics = () => {
  const snapshot = useSnapshot(selfCareTopicsStates);

  return {
    selfCareTopics: snapshot.selfCareTopics,
    isLoading: snapshot.isLoading,
    ...selfCareTopicsActions,
  };
};
