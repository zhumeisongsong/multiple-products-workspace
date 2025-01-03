import { describe, it, expect, vi } from 'vitest';
import { AIAdapter } from './ai.adapter';

describe('AIAdapter', () => {
  it('should define the interface', () => {
    // Create a mock implementation
    const mockAdapter: AIAdapter = {
      generateTasks: vi.fn(),
    };

    expect(mockAdapter.generateTasks).toBeDefined();
  });

  it('should return string array from generateTasks', async () => {
    // Create a mock implementation
    const mockAdapter: AIAdapter = {
      generateTasks: vi.fn().mockResolvedValue(['Task 1', 'Task 2']),
    };

    const result = await mockAdapter.generateTasks('test prompt');
    
    expect(Array.isArray(result)).toBe(true);
    expect(result.every((item) => typeof item === 'string')).toBe(true);
    expect(mockAdapter.generateTasks).toHaveBeenCalledWith('test prompt');
  });
});
