import { describe, it, expect, vi } from 'vitest';
import { SelfCareTopic } from '@self-care-topics/domain';
import { Task } from '@tasks/domain';
import { TasksService } from './tasks.service';
import { getSomeSelfCareTasksRandomlyUseCase } from './get-some-self-care-tasks-randomly.use-case';

describe('getSomeSelfCareTasksRandomlyUseCase', () => {
  it('should return random tasks based on self care topics', async () => {
    const mockTasks = [
      {
        id: '1',
        categories: [{ id: 'topic1', name: 'Topic 1' }],
      },
      {
        id: '2', 
        categories: [{ id: 'topic2', name: 'Topic 2' }],
      }
    ] as unknown as Task[];

    const selfCareTopics = [
      { id: 'topic1', name: 'Topic 1' }
    ] as SelfCareTopic[];

    const tasksService = {
      findSomeTasksRandomly: vi.fn().mockResolvedValue([mockTasks[0]])
    } as unknown as TasksService;

    const result = await getSomeSelfCareTasksRandomlyUseCase(1, selfCareTopics, tasksService);

    expect(tasksService.findSomeTasksRandomly).toHaveBeenCalledWith(1, selfCareTopics);
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe('1');
  });

  it('should return empty array when no tasks match topics', async () => {
    const selfCareTopics = [
      { id: 'non-existent', name: 'Non Existent' }
    ] as SelfCareTopic[];

    const tasksService = {
      findSomeTasksRandomly: vi.fn().mockResolvedValue([])
    } as unknown as TasksService;

    const result = await getSomeSelfCareTasksRandomlyUseCase(1, selfCareTopics, tasksService);

    expect(tasksService.findSomeTasksRandomly).toHaveBeenCalledWith(1, selfCareTopics);
    expect(result).toHaveLength(0);
  });
});
