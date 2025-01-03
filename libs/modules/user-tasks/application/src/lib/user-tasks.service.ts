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
  constructor() {
    this.userTasksRepository = new UserTasksRepositoryImpl(
      new LocalStorageRepository(),
    );
    this.usersService = new UsersService();
  }

  async getUserTasks(filter?: {
    startedAt: Date;
    endedAt: Date;
  }): Promise<UserTask[]> {
    return await this.userTasksRepository.getUserTasks(filter);
  }

  // async generateUserTasksOfCurrentMonth() {
  //   const currentMonth = new Date().getMonth();
  //   const currentYear = new Date().getFullYear();

  //   const startDate = new Date();
  //   const endDate = new Date(currentYear, currentMonth + 1, 0);

  //   const userSelfCareTopics = await this.usersService.getUserSelfCareTopics();

  //   // call to openai
  // }

  async updateUserTaskStatus(userTaskId: string, status: UserTaskStatusEnum) {
    return await this.userTasksRepository.updateUserTaskStatus(
      userTaskId,
      status,
    );
  }
}
