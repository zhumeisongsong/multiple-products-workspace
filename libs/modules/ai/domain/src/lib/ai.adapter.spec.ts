import { describe, it, expect } from 'vitest';
import { AIAdapter } from './ai.adapter';
import { SelfCareTopic } from '@self-care-topics/domain';
import { UserTask } from '@user-tasks/domain';

describe('AIAdapter', () => {
  it('should have generateTasks method defined', () => {
    class TestAIAdapter implements AIAdapter {
      async generateTasks(
        userSelfCareTopics: SelfCareTopic[],
        count: number,
      ): Promise<UserTask[]> {
        return [];
      }
    }

    const adapter = new TestAIAdapter();
    expect(adapter.generateTasks).toBeDefined();
  });

  it('should accept self care topics and count as parameters', async () => {
    class TestAIAdapter implements AIAdapter {
      async generateTasks(
        userSelfCareTopics: SelfCareTopic[],
        count: number,
      ): Promise<UserTask[]> {
        expect(Array.isArray(userSelfCareTopics)).toBe(true);
        expect(typeof count).toBe('number');
        return [];
      }
    }

    const adapter = new TestAIAdapter();
    await adapter.generateTasks([], 5);
  });

  it('should return an array of UserTask objects', async () => {
    class TestAIAdapter implements AIAdapter {
      async generateTasks(
        userSelfCareTopics: SelfCareTopic[],
        count: number,
      ): Promise<UserTask[]> {
        return [];
      }
    }

    const adapter = new TestAIAdapter();
    const result = await adapter.generateTasks([], 1);
    expect(Array.isArray(result)).toBe(true);
  });
});
