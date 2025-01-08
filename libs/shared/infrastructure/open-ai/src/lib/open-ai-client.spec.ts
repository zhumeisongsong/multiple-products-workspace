import { describe, it, expect, vi } from 'vitest';
import { CoreTool, generateText, GenerateTextResult } from 'ai';

import { OpenAIClient } from './open-ai-client';

vi.mock('ai', () => ({
  generateText: vi.fn(),
}));

describe('OpenAIClient', () => {
  describe('generateTasks', () => {
    it('should generate tasks', async () => {
      const openaiClient = new OpenAIClient();
      const result = await openaiClient.generateTasks('Generate tasks for today');
      expect(result).toBeDefined();
    });
  });
});
