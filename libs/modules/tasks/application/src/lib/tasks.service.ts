import { Task, TasksRepository } from '@tasks/domain';

export class TasksService {
  constructor(private readonly tasksRepository: TasksRepository) {}

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

    return filteredTasks.sort(() => Math.random() - 0.5).slice(0, count);
  }
}
