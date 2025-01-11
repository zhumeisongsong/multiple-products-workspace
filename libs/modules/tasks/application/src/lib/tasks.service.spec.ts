import { describe, it, expect, beforeEach, vi } from 'vitest';
import { Task, TasksRepository } from '@tasks/domain';
import { TasksService } from './tasks.service';

describe('TasksService', () => {
  let tasksService: TasksService;
  let tasksRepository: TasksRepository;

  beforeEach(() => {
    tasksRepository = {
      findManyTasks: vi.fn(),
    } as unknown as TasksRepository;

    tasksService = new TasksService(tasksRepository);
  });

  describe('findSomeTasksRandomly', () => {
    it('should return random tasks filtered by categories', async () => {
      const mockTasks = [
        {
          id: '1',
          categories: [{ id: 'cat1', name: 'Category 1' }],
        },
        {
          id: '2',
          categories: [{ id: 'cat2', name: 'Category 2' }],
        },
        {
          id: '3',
          categories: [{ id: 'cat1', name: 'Category 1' }],
        },
      ] as unknown as Task[];

      const conditions = [
        { id: 'cat1', name: 'Category 1' }
      ];

      vi.spyOn(tasksRepository, 'findManyTasks').mockResolvedValue(mockTasks);

      const result = await tasksService.findSomeTasksRandomly(2, conditions);

      expect(tasksRepository.findManyTasks).toHaveBeenCalled();
      expect(result.length).toBe(2);
      expect(result.every(task => 
        task.categories.some(cat => cat.id === conditions[0].id)
      )).toBe(true);
    });

    it('should return empty array when no tasks match conditions', async () => {
      const mockTasks = [
        {
          id: '1',
          categories: [{ id: 'cat1', name: 'Category 1' }],
        },
      ] as unknown as Task[];

      const conditions = [
        { id: 'non-existent', name: 'Non Existent' }
      ];

      vi.spyOn(tasksRepository, 'findManyTasks').mockResolvedValue(mockTasks);

      const result = await tasksService.findSomeTasksRandomly(2, conditions);

      expect(tasksRepository.findManyTasks).toHaveBeenCalled();
      expect(result).toHaveLength(0);
    });
  });
});

