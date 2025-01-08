import { describe, it, expect, vi } from 'vitest';
import { CoreTool, generateText, GenerateTextResult } from 'ai';

import { OpenAIClient } from './open-ai-client';

vi.mock('ai', () => ({
  generateText: vi.fn(),
}));

describe('OpenAIClient', () => {
  describe('generateTasks', () => {
    it('should properly interact with OpenAI API', async () => {
      const mockResponse: GenerateTextResult<Record<string, CoreTool<any, any>>, unknown> = {
        text: 'Hello World',
        experimental_output: null,
        toolCalls: [],
        toolResults: [] as never[],
        finishReason: 'stop',
        usage: {
          promptTokens: 0,
          completionTokens: 0,
          totalTokens: 0
        },
        warnings: undefined,
        steps: [],
        request: {
          body: undefined
        },
        response: {
          messages: [],
          id: '',
          timestamp: new Date(),
          modelId: '',
        },
        logprobs: undefined,
        experimental_providerMetadata: undefined
      };
      vi.mocked(generateText).mockResolvedValue(mockResponse);
      
      const openaiClient = new OpenAIClient();
      const result = await openaiClient.generateTasks('test prompt');

      expect(generateText).toHaveBeenCalledWith({
        model: expect.any(Function),
        messages: [{ role: 'user', content: 'test prompt' }]
      });
      

      expect(result).toBe('Hello World');
    });
  });
});
