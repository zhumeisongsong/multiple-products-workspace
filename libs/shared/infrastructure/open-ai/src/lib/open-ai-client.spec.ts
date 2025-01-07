import { describe, it, expect, vi } from 'vitest';
import { CoreTool, generateText, GenerateTextResult } from 'ai';

import { OpenAIClient } from './open-ai-client';

vi.mock('ai', () => ({
  generateText: vi.fn(),
}));

describe('OpenAIClient', () => {
  describe('generateTasks', () => {
  });
});
