import { SelfCareTopic } from '@self-care-topics/domain';
import { Task } from '@tasks/domain';

import { AIAgent, TaskGenerationContext } from './ai-agent.port';

describe('AIAgent', () => {
  const mockTasks: Task[] = [
    {
      id: '1',
      name: 'Task 1',
      description: 'Description 1',
      categories: [{ id: '1', name: 'Exercise' }],
    },
    {
      id: '2',
      name: 'Task 2',
      description: 'Description 2',
      categories: [{ id: '2', name: 'Meditation' }],
    },
  ];
  const mockAiAgent: AIAgent = {
    generateSelfCareTasks: vi.fn().mockResolvedValue(mockTasks),
  };

  describe('generateSelfCareTasks', () => {
    it('should generate tasks based on provided topics and count', async () => {
      // Arrange
      const context: TaskGenerationContext = {
        topics: [
          { id: '1', name: 'Exercise' } as SelfCareTopic,
          { id: '2', name: 'Meditation' } as SelfCareTopic,
        ],
        count: 2,
      };
      const tasks = await mockAiAgent.generateSelfCareTasks(context);

      // Assert
      expect(Array.isArray(tasks)).toBe(true);
      expect(tasks.length).toBe(context.count);
      tasks.forEach((task) => {
        expect(task).toHaveProperty('id');
        expect(task).toHaveProperty('name');
        expect(task).toHaveProperty('description');
        expect(task).toHaveProperty('categories');
      });
    });
  });
});
