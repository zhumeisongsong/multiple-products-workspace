import {
  LocalStorageRepository,
  UserTasksRepositoryImpl,
  TasksRepositoryImpl,
  UsersRepositoryImpl,
} from '@shared/infrastructure-storage';
import { TasksRepository } from '@tasks/domain';
import { UserTasksRepository } from '@user-tasks/domain';
import { UsersRepository } from '@users/domain';

export class StorageContainer {
  private static localStorageRepository: LocalStorageRepository;
  private static usersRepository: UsersRepository;
  private static userTasksRepository: UserTasksRepository;
  private static tasksRepository: TasksRepository;

  static getLocalStorageRepository(): LocalStorageRepository {
    if (!this.localStorageRepository) {
      this.localStorageRepository = new LocalStorageRepository();
    }
    return this.localStorageRepository;
  }

  static getUsersRepository() {
    if (!this.usersRepository) {
      this.usersRepository = new UsersRepositoryImpl(this.getLocalStorageRepository());
    }
    return this.usersRepository;
  }

  static getTasksRepository(): TasksRepository {
    if (!this.tasksRepository) {
      this.tasksRepository = new TasksRepositoryImpl();
    }
    return this.tasksRepository;
  }

  static getUserTasksRepository(): UserTasksRepository {
    if (!this.userTasksRepository) {
      this.userTasksRepository = new UserTasksRepositoryImpl(
        this.getLocalStorageRepository(),
      );
    }
    return this.userTasksRepository;
  }
}
