import { AIService } from '@ai/application';
import {
  LocalStorageRepository,
  UserTasksRepositoryImpl,
} from '@shared/infrastructure-storage';
import { UsersService } from '@users/application';
import {
  UserTask,
  UserTasksRepository,
  UserTaskStatusEnum,
} from '@user-tasks/domain';

export class UserTasksService {
  private userTasksRepository: UserTasksRepository;
  private usersService: UsersService;
  private aIService: AIService;

  constructor() {
    this.userTasksRepository = new UserTasksRepositoryImpl(
      new LocalStorageRepository(),
    );
    this.usersService = new UsersService();
    this.aIService = new AIService();
  }

  async getUserTasks(filter?: {
    startedAt: Date;
    endedAt: Date;
  }): Promise<UserTask[]> {
    return await this.userTasksRepository.getUserTasks(filter);
  }

  async generateUserTasksOfCurrentMonth() {
    // get the number of remaining days in the current month
    const tasksCount =
      new Date(
        new Date().getFullYear(),
        new Date().getMonth() + 1,
        0,
      ).getDate() - new Date().getDate();
    const userSelfCareTopics = await this.usersService.getUserSelfCareTopics();

    const userTasks = await this.aIService.generateUserTasks(
      userSelfCareTopics,
      tasksCount,
    );

    return await this.userTasksRepository.createUserTasks(userTasks);
  }

  async updateUserTaskStatus(userTaskId: string, status: UserTaskStatusEnum) {
    return await this.userTasksRepository.updateUserTaskStatus(
      userTaskId,
      status,
    );
  }
}
