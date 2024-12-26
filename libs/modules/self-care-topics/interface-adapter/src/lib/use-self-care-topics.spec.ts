import { SelfCareTopic } from '@self-care-topics/domain';
import {
  selfCareTopicsStates,
  selfCareTopicsActions,
} from './self-care-topics-states';

describe('useSelfCareTopics', () => {
  beforeEach(() => {
    selfCareTopicsStates.selfCareTopics = [];
    selfCareTopicsStates.isLoading = false;
  });

  it('should have initial state', () => {
    expect(selfCareTopicsStates.selfCareTopics).toEqual([]);
    expect(selfCareTopicsStates.isLoading).toBe(false);
  });

  it('should update state when actions are called', () => {
    const mockTopics: SelfCareTopic[] = [
      {
        id: '1',
        name: 'Topic 1',
      },
      {
        id: '2',
        name: 'Topic 2',
      },
    ];

    selfCareTopicsActions.setSelfCareTopics(mockTopics);
    expect(selfCareTopicsStates.selfCareTopics).toEqual(mockTopics);

    selfCareTopicsActions.setIsLoading();
    expect(selfCareTopicsStates.isLoading).toBe(true);

    selfCareTopicsActions.setIsLoadingFinished();
    expect(selfCareTopicsStates.isLoading).toBe(false);
  });
});
