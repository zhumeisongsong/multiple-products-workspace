import { SelfCareTopic } from '@self-care-topics/domain';
import { describe, it, expect, vi } from 'vitest';

import { useSelfCareTopics } from './use-self-care-topics';
import { selfCareTopicsStates, selfCareTopicsActions } from './self-care-topics-states';

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
    selfCareTopicsStates.selfCareTopics = [];
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

    selfCareTopicsStates.selfCareTopics = mockTopics;

    const result = useSelfCareTopics();

    expect(result.selfCareTopics).toEqual(mockTopics);
    expect(result.setSelfCareTopics).toBe(selfCareTopicsActions.setSelfCareTopics);
  });

  it('should update state when actions are called', () => {
    const { setSelfCareTopics } = useSelfCareTopics();
    const mockTopics: SelfCareTopic[] = [
      {
        id: '1',
        name: 'Topic 1',
      },
    ];

    setSelfCareTopics(mockTopics);
    expect(selfCareTopicsStates.selfCareTopics).toEqual(mockTopics);
  });
});
