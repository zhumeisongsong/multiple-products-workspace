import { SelfCareTopic } from '@self-care-topics/domain';
import { selfCareTopicsState, selfCareTopicsActions } from './self-care-topics-state';

describe('useSelfCareTopics', () => {
  beforeEach(() => {
    selfCareTopicsState.selfCareTopics = [];
    selfCareTopicsState.isLoading = false;
  });

  it('should have initial state', () => {
    expect(selfCareTopicsState.selfCareTopics).toEqual([]);
    expect(selfCareTopicsState.isLoading).toBe(false);
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
      }
    ];

    selfCareTopicsActions.setSelfCareTopics(mockTopics);
    expect(selfCareTopicsState.selfCareTopics).toEqual(mockTopics);

    selfCareTopicsActions.setIsLoading();
    expect(selfCareTopicsState.isLoading).toBe(true);

    selfCareTopicsActions.setIsLoadingFinished();
    expect(selfCareTopicsState.isLoading).toBe(false);
  });
});
