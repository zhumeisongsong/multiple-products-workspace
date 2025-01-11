import { Task, TasksRepository } from '@tasks/domain';

export class TasksService {
  constructor(private readonly tasksRepository: TasksRepository) {}

  private shuffle<T>(array: T[]): T[] {
    const result = [...array];
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  }

  async findSomeTasksRandomly(
    count: number,
    conditions: {
      id: string;
      name: string;
    }[],
  ): Promise<Task[]> {
    const tasks = await this.tasksRepository.findManyTasks();
    const filteredTasks = tasks.filter((task) => {
      return task.categories.some((category) =>
        conditions.some((t) => t.id === category.id),
      );
    });

    return this.shuffle(filteredTasks).slice(0, count);
  }
}
