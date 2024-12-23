import { describe, it, expect, vi } from 'vitest';
import { OpenAIAdapter } from './index';
import { CoreTool, generateText, GenerateTextResult } from 'ai';
import { openai } from '@ai-sdk/openai';

vi.mock('ai', () => ({
  generateText: vi.fn(),
}));

describe('OpenAIAdapter', () => {
  describe('generateTasks', () => {
    it('should split response into array of trimmed non-empty lines', async () => {
      const mockResponse: GenerateTextResult<
        Record<string, CoreTool<any, any>>,
        unknown
      > = {
        text: 'Task 1\n  Task 2  \n\nTask 3',
        experimental_output: null,
        toolCalls: [],
        toolResults: [],
        finishReason: 'stop',
        usage: { completionTokens: 0, promptTokens: 0, totalTokens: 0 },
        warnings: [],
        steps: [],
        request: { body: '' },
        response: {
          id: 'mock-id',
          timestamp: new Date(),
          modelId: 'gpt-4',
          messages: [{ role: 'assistant', content: '' }],
        },
        experimental_providerMetadata: {},
        logprobs: undefined,
      };

      vi.mocked(generateText).mockResolvedValue(mockResponse);

      const adapter = new OpenAIAdapter();
      const prompt = 'Generate tasks';

      // Act
      const result = await adapter.generateTasks(prompt);

      expect(result).toEqual(['Task 1', 'Task 2', 'Task 3']);
    });
  });
});
