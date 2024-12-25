import { SelfCareTopic } from '@self-care-topics/domain';
import { describe, it, expect } from 'vitest';

import { UserPreferences } from './user-preferences.entity';

describe('UserPreferences', () => {
  let userPreferences: UserPreferences;
  const mockTopic: SelfCareTopic = {
    id: '1',
    name: 'Meditation'
  };
  const mockTopic2: SelfCareTopic = {
    id: '2', 
    name: 'Exercise'
  };

  beforeEach(() => {
    userPreferences = new UserPreferences([]);
  });

  it('should initialize with empty self care topics', () => {
    expect(userPreferences.getSelfCareTopics()).toEqual([]);
  });

  it('should add a self care topic', () => {
    userPreferences.addSelfCareTopic(mockTopic);
    expect(userPreferences.getSelfCareTopics()).toEqual([mockTopic]);
  });

  it('should not add duplicate self care topics', () => {
    userPreferences.addSelfCareTopic(mockTopic);
    userPreferences.addSelfCareTopic(mockTopic);
    expect(userPreferences.getSelfCareTopics()).toEqual([mockTopic]);
  });

  it('should remove a self care topic', () => {
    userPreferences.addSelfCareTopic(mockTopic);
    userPreferences.addSelfCareTopic(mockTopic2);
    userPreferences.removeSelfCareTopic(mockTopic);
    expect(userPreferences.getSelfCareTopics()).toEqual([mockTopic2]);
  });

  it('should initialize with provided self care topics', () => {
    const preferencesWithTopics = new UserPreferences([mockTopic]);
    expect(preferencesWithTopics.getSelfCareTopics()).toEqual([mockTopic]);
  });
});
