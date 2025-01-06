import { SelfCareTopic } from '@self-care-topics/domain';

import { UsersService } from './users.service';

export const saveUserSelfCareTopicsUseCase = async (
  topics: SelfCareTopic[],
  usersService: UsersService,
) => {
  const result = await usersService.saveUserSelfCareTopics(topics);
  return result;
};
