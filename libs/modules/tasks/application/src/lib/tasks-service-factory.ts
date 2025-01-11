import { TasksRepository } from '@tasks/domain';

import { TasksService } from './tasks.service';

export class TasksServiceFactory {
  private static instance: TasksService | null = null;

  static initialize(repository: TasksRepository): void {
    if (!this.instance) {
      this.instance = new TasksService(repository);
    }
  }

  static getInstance(): TasksService {
    if (!this.instance) {
      throw new Error('TasksService must be initialized before use');
    }
    return this.instance;
  }
}
