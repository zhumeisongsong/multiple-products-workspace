import { SelfCareTopic } from '@self-care-topics/domain';
import { describe, it, expect, vi } from 'vitest';

import { useSelfCareTopics } from './use-self-care-topics';
import { selfCareTopicsState, selfCareTopicsActions } from './self-care-topics-state';

vi.mock('valtio', async (importOriginal) => {
  const actual = await importOriginal<typeof import('valtio')>();
  return {
    ...actual,
    useSnapshot: vi.fn((state) => state),
  };
});

describe('useSelfCareTopics', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    selfCareTopicsState.selfCareTopics = [];
    selfCareTopicsState.isLoading = false;
  });

  it('should return the current state and actions', () => {
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

    selfCareTopicsState.selfCareTopics = mockTopics;
    selfCareTopicsState.isLoading = true;

    const result = useSelfCareTopics();

    expect(result.selfCareTopics).toEqual(mockTopics);
    expect(result.isLoading).toBe(true);
    expect(result.setSelfCareTopics).toBe(selfCareTopicsActions.setSelfCareTopics);
    expect(result.setIsLoading).toBe(selfCareTopicsActions.setIsLoading);
    expect(result.setIsLoadingFinished).toBe(selfCareTopicsActions.setIsLoadingFinished);
  });

  it('should update state when actions are called', () => {
    const { setSelfCareTopics, setIsLoading, setIsLoadingFinished } = useSelfCareTopics();
    const mockTopics: SelfCareTopic[] = [
      {
        id: '1',
        name: 'Topic 1',
        description: 'Description 1',
      },
    ];

    setSelfCareTopics(mockTopics);
    expect(selfCareTopicsState.selfCareTopics).toEqual(mockTopics);

    setIsLoading();
    expect(selfCareTopicsState.isLoading).toBe(true);

    setIsLoadingFinished();
    expect(selfCareTopicsState.isLoading).toBe(false);
  });
});
