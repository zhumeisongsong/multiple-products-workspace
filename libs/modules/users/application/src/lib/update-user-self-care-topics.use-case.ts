import { SelfCareTopic } from '@self-care-topics/domain';

import { UsersService } from './users.service';

export const updateUserSelfCareTopicsUseCase = async (
  topics: SelfCareTopic[],
  usersService: UsersService,
): Promise<void> => {
  return await usersService.updateUserSelfCareTopics(topics);
};
