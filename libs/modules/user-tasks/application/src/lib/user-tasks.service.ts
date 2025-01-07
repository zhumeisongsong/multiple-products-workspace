import { SelfCareTopic } from '@self-care-topics/domain';
import {
  UserTask,
  UserTasksRepository,
  UserTaskStatusEnum,
} from '@user-tasks/domain';
import { AIService } from '@ai/application';

export class UserTasksService {
  constructor(
    private readonly userTasksRepository: UserTasksRepository,
    private readonly aiService: AIService,
  ) {}

  async findManyUserTasks(
    userId: string,
    filter?: {
      dateRange: {
        startedAt: Date;
        endedAt: Date;
      };
    },
  ): Promise<UserTask[]> {
    const dateRange =
      filter?.dateRange?.startedAt && filter?.dateRange?.endedAt
        ? {
            startedAt: filter.dateRange.startedAt.toISOString(),
            endedAt: filter.dateRange.endedAt.toISOString(),
          }
        : undefined;

    return await this.userTasksRepository.findManyUserTasks(userId, {
      dateRange: dateRange,
    });
  }

  async createManyUserTasks(userTasks: UserTask[]): Promise<void> {
    return await this.userTasksRepository.createUserTasks(userTasks);
  }

  async generatedManyUserTasksBasedOnUserSelfCareTopics(
    userSelfCareTopics: SelfCareTopic[],
  ): Promise<UserTask[]> {
    // task count is  the number of days from today to the end of the month
    const today = new Date();
    const lastDayOfMonth = new Date(
      today.getFullYear(),
      today.getMonth() + 1,
      0,
    );
    const taskCount = lastDayOfMonth.getDate() - today.getDate() + 1;

    const result = await this.aiService.generateUserTasks(
      userSelfCareTopics,
      taskCount,
    );

    console.log(result);

    // format the result to the user task format
    return [];
  }

  async updateUserTaskStatus(
    userTaskId: string,
    status: UserTaskStatusEnum,
  ): Promise<void> {
    return await this.userTasksRepository.updateUserTaskStatus(
      userTaskId,
      status,
    );
  }
}
