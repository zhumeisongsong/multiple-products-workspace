import { Task } from './task.entity';

export interface TasksRepository {
  findManyTasks(): Promise<Task[]>;
}
