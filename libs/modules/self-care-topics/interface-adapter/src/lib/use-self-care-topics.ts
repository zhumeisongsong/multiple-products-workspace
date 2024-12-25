import { useSnapshot } from 'valtio';

import { selfCareTopicsState, selfCareTopicsActions } from './self-care-topics-state';

// hooks
export function useSelfCareTopics() {
  const snapshot = useSnapshot(selfCareTopicsState);

  return {
    selfCareTopics: snapshot.selfCareTopics,
    isLoading: snapshot.isLoading,
    ...selfCareTopicsActions,
  };
}
