import { Task, TasksRepository } from '@tasks/domain';

import { tasks } from './tasks-data';

export class TasksRepositoryImpl implements TasksRepository {
  findManyTasks(): Promise<Task[]> {
    return Promise.resolve(tasks);
  }
}
