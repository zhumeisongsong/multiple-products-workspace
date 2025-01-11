import { SelfCareTopic } from '@self-care-topics/domain';
import { Task } from '@tasks/domain';

import { TasksService } from './tasks.service';

export const getSomeSelfCareTasksRandomlyUseCase = async (
  count: number,
  selfCareTopics: SelfCareTopic[],
  tasksService: TasksService,
): Promise<Task[]> => {
  return tasksService.findSomeTasksRandomly(count, selfCareTopics);
};
